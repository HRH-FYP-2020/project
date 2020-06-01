
const nodemailer = require('nodemailer')
module.exports = function (email,subject,text){
    email = email
    async function main() {
        // let testAccount = await nodemailer.createTestAccount();
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: 'cocfyp2020@gmail.com', // generated ethereal user
                pass: "COCFYP2020" // generated ethereal password
            }
        });
    
        let info = await transporter.sendMail({
            from: 'tanolihamza5ali@gmail.com', // sender address
            to: email,
            subject: subject, 
            text: text
        });
    
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // console.log('Node Mailer hogay han bahi')
    }
    
    main().catch(console.error);
  }
