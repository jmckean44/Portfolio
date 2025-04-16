const nodemailer = require('nodemailer');

exports.handler = async (event) => {
	try {
		// Parse the request body
		const { email } = JSON.parse(event.body);

		if (!email) {
			return {
				statusCode: 400,
				body: JSON.stringify({ success: false, message: 'Email is required.' }),
			};
		}

		// Configure Nodemailer transporter
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST, // e.g., "smtp.mailtrap.io"
			port: process.env.SMTP_PORT, // e.g., 587
			auth: {
				user: process.env.SMTP_USERNAME, // Your SMTP username
				pass: process.env.SMTP_PASSWORD, // Your SMTP password
			},
		});

		// Email content
		const mailOptions = {
			from: '"Jeff" jmckean44@gmail.com',
			to: email,
			subject: 'Test Email',
			html: `
								<html>
										<head>
												<title>Test Email</title>
										</head>
										<body>
												<h1>Hello!</h1>
												<p>This is a test email sent using Nodemailer and Netlify Functions.</p>
										</body>
								</html>
						`, // HTML body
		};

		// Send the email
		await transporter.sendMail(mailOptions);

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true, message: 'Email sent successfully!' }),
		};
	} catch (error) {
		console.error('Error sending email:', error);
		return {
			statusCode: 500,
			body: JSON.stringify({ success: false, message: 'Failed to send email.' }),
		};
	}
};
