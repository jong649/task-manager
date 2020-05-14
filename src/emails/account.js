const sgMail = require("@sendgrid/mail");

<<<<<<< HEAD
const sendGridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendGridAPIKey);
=======
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);
>>>>>>> 9b7fd6b... add welcome and cancellation email functions

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jong649@gmail.com",
    subject: "Thanks for joining!",
    text: `Welcome to the app, ${name}. Let me know how you like it.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jong649@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. Was there anything we could have done to make your experience more enjoyable? What was the reason you decided to cancel your account?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
