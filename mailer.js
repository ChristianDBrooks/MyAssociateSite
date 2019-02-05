const mailer = function (email, id, name, company, phone, message, domain) {
    const nodemailer = require('nodemailer');
    console.log("NodeMailer online!")

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.AUTO_EMAIL_USER,
            pass: process.env.AUTO_EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: "myassociatesite@gmail.com", // sender address
        to: "christiandbrooks@gmail.com",
        // to: data.sendTo, // list of receivers
        subject: "New MyAssociateSite Sign Up", // Subject line
        html: `
                <p>A new user just signed up from your sign up page at www.myassociatesite.com. Any reponse should go to ${name} at ${email}.</p>
                <br>
                <p><b>Name: </b>${name}</p>
                <p><b>Company: </b>${company}</p>
                <p><b>Email: </b>${email}</p>
                <p><b>Phone: </b>${phone}</p>
                <br>
                <p>Notice: This is an automated email, sent to you through an auto-generated email, because someone submitted a new message through the contact page of your website at domain, ${domain}.</p>`
    };

    // send mail with defined transport object
    console.log("Attempting to send message! ...")
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
            console.log('Message sent: %s', info.messageId);
        }
    })
}

module.exports = mailer;