require("dotenv").config();
const nodemailer=require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});
let mailOptions = {
    from:"pritamkumar42002@gmail.com",
    to:["pritamkumar82002@gmail.com","anshumantripathy123@gmail.com"],
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
};
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
});