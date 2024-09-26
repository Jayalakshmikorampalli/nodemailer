const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'jayalakshmikorampalli04@gmail.com',
        pass:'ffbhhjzppekfvmkm'
    }
});
let mailOptions = {
    from:'jayalakshmikorampalli04@gmail.com',
    to:'jaya22nd1a4252@gmail.com',
    subject:'Text Email',
    text:'helloooo people'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.error('Error occurred:',error.message);
    }else{
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
    }
});