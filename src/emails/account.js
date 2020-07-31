const sgMail = require("@sendgrid/mail");

const sendGridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "taskerino.noreply@gmail.com",
    subject: "Thanks for joining!",
    text: `Welcome to the app, ${name}. Let me know how you like it.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "taskerino.noreply@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. Was there anything we could have done to make your experience more enjoyable? What was the reason you decided to cancel your account?`,
  });
};

const sendPasswordRecoveryEmail = (email, recoveryToken) => {
  sgMail.send({
    to: email,
    from: "taskerino.noreply@gmail.com",
    subject: "Password Recovery",
    text: `Please follow this link to update your forgotten password: \n
           http://localhost:3001/reset/${recoveryToken}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  sendPasswordRecoveryEmail,
};
