import 'dotenv/config';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
	apiKey: import.meta.env.API_KEY,
	server: import.meta.env.DATA_CENTER,
});

export default async (req, res) => {
	if (req.method === 'POST') {
		const { email, firstName, lastName, phone, hear, broker, comments } = req.body;

		try {
			const response = await mailchimp.lists.addListMember(import.meta.env.LIST_ID, {
				email_address: email,
				status: 'subscribed',
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName,
					PHONE: phone,
					HEAR: hear,
					BROKER: broker,
					COMMENTS: comments,
				},
			});

			res.status(200).json({
				success: true,
				response,
			});

			console.log(res) + '<br>';
			console.log(response);

			return {
				statusCode: 200,
				body: JSON.stringify({ success: true, response }),
			};
		} catch (error) {
			res.status(500).json({ success: false, error: error.message });
			return {
				statusCode: 500,
				body: JSON.stringify({ success: false, error: error.message }),
			};
		}
	} else {
		return {
			statusCode: 405,
			body: JSON.stringify({ success: false, message: 'Method not allowed' }),
		};
	}
};
