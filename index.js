import { createServer } from "node:http";
import { log } from "node:console";
import {IncomingForm} from "formidable";
import {userDataHandling, maincontent} from "./userDataHandling.js";
import {copyFile, rm, existsSync, mkdir} from "node:fs";

createServer((req, res) => {

  if(req.method === 'POST'){
    const formData = new IncomingForm();
    formData.parse(req,(err,fields,files)=>{

       if(err){

        res.end(userDataHandling('error')); 
 
      }else{

        log('fields : ',fields);
        log('files :', files);

        if(existsSync('files')){
          log('found folder');
        }else{
          log('not found folder');

          mkdir('./files',(err)=>{
            if(err){
              log(err);
            }else{
              log('add directory');
            }
          });
        }

        const tempFilePath = files.userfiles[0].filepath;
        const saveFilePath = `./files/${files.userfiles[0].originalFilename}`;
 
        copyFile(tempFilePath, saveFilePath,(err)=>{
          if(err){
            log(`Not Copy this ${files.userfiles[0].originalFilename} File : `, err);
          }else{
            res.end(userDataHandling('ok'));

            rm(tempFilePath, (err)=>{
              if(err){
                log(err);
              }else{
                log('deleted temp file')
              }
            });
          }
        });

       }
    });

  }else if(req.method === 'GET'){
    res.end(maincontent());
  }

}).listen(4000, "127.0.0.1", () => log(`
  Runing Server Click here :
    http://127.0.0.1:4000
`));




