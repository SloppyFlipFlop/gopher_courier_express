require("dotenv").config();
// var nodemailer = require("nodemailer");

// const mail = require("@sendgrid/mail");
// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default (req, res) => {
//   const body = JSON.parse(req.body);

//   // console.log(body);
//   const { name, email, phone, subject, message } = body;
//   console.log(name, email, phone, subject, message);

//   const emailMessage = `
//   name: ${name}\r\n
//   email: ${email}\r\n
//   message: ${message}
//   `;

//   const data = {
//     to: process.env.EMAIL,
//     from: email,
//     subject: subject,
//     text: message,
//     html: emailMessage.replace(/\r\n/g, "<br>"),
//   };

//   mail.send(data);

//   // var transporter = nodemailer.createTransport({
//   //   service: "gmail",
//   //   providerauth: { user: process.env.EMAIL },
//   //   pass: process.env.PASSWORD,
//   //   // auth: {
//   //   //   user: process.env.EMAIL,
//   //   //   pass: process.env.PASSWORD,
//   //   // },
//   // });

//   // var mailOptions = {
//   //   from: `${email}`,
//   //   to: "fernando.d.nevarez@gmail.com",
//   //   subject: subject,
//   //   text: `
//   //   New message from ${name}:
//   //   ${email}
//   //   phone: ${phone}`,
//   // };

//   // transporter.sendMail(mailOptions, function (error, info) {
//   //   if (error) {
//   //     console.log(error);
//   //   } else {
//   //     console.log("Email sent: " + info.response);
//   //   }
//   // });

//   // const mail = {
//   //   from: name,
//   //   to: "",
//   //   subject: "New message from contact form",
//   //   text: message,
//   //   html: ``,
//   // };

//   // transporter.sendMail(mail, (err, data) => {
//   //   if (err) {
//   //     res.json({
//   //       status: "fail",
//   //     });
//   //   } else {
//   //     res.json({
//   //       status: "success",
//   //     });
//   //   }
//   // });

//   // res.status(200).json({ name, email, message });

//   res.status(200).json({ status: "ok" });
// };

const sendEmail = async (req, res) => {
  try {
    // const body = JSON.parse(req.body);

    const { name, email, phone, subject, message } = req.body;

    // console.log(email);

    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "" + process.env.EMAIL + "", // Change to your recipient
      // to: process.env.EMAIL,
      from: "'" + email + "'", // Change to your verified sender
      subject: subject,
      text: message,
      html: `<strong>${message}</strong>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        // res.redirect("/");
      })
      .catch((error) => {
        console.error(error);
      });

    res.status(200).json({ status: "ok" });
  } catch (error) {
    // catch the errror
    console.log(error);
  }
};

export default sendEmail;
