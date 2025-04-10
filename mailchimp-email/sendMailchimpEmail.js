import 'dotenv/config';
import client from '@mailchimp/mailchimp_marketing';

// Load environment variables
const apiKey = process.env.MAILCHIMP_API_KEY;
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
const templateId = process.env.MAILCHIMP_TEMPLATE_ID;

// Configure Mailchimp client
client.setConfig({
	apiKey: apiKey,
	server: serverPrefix,
});

// Function to send a test email
const sendTestEmail = async (recipientEmail) => {
	try {
		// Trigger the test email
		const response = await client.campaigns.sendTestEmail(templateId, {
			test_emails: [recipientEmail],
			send_type: 'html',
		});
		console.log('Test email sent successfully:', response);
	} catch (error) {
		console.error('Failed to send test email:', error.response?.text || error.message);
	}
};

// Example usage
const recipientEmail = 'jmckean44@gmail.com'; // Replace with the recipient's email
sendTestEmail(recipientEmail);
