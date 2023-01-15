import mail from '@sendgrid/mail'

mail.setApiKey('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')
// process.env.SENDGRID_API_KEY
export default (req,res)  =>{
    const body = JSON.parse(req.body);

    const message   = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone : ${body.phone}\r\n
    Message: ${body.message}
    `;
     
    const data = {
        to:'salahzain139@gmail.com',
        from:'caravancamp.ae@gmail.com',
        subject:'Message from  website',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    }
    // console.log(body)
    // mail.send(data)

   mail
  .send(data)
  .then(() => {
    console.log("success")
     
  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
    // .then(
    //     alert('success')
    // )
    res.status(200).json({ status: 'ok'});
}