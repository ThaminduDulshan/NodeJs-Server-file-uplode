export const userDataHandling = (status) => {
  const msg = status == "ok" ? "File Sended !" : "File Not Sended !";
  return(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>file uploader</title>
</head>
<body>
    <h1>${msg}</h1>
    <a href = "/"><button>back</button></a>
</body>
</html>
`);
};


export const maincontent = () => `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>file uploader</title>
  </head>
  <body>
      <form action="/send" method="post" enctype="multipart/form-data">
          <input type="text" name="username" placeholder="Enter Your Name" />
          <input type="file" name="userfiles" />
          <button type="submit">submit</button>
      </form>
  </body>
  </html>     
  `;



  