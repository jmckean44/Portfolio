const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
	apiKey: process.env.API_KEY,
	server: process.env.LIST_ID,
});

export default async (req, res) => {
	if (req.method === 'POST') {
		const { email, firstName, lastName, phone, hear, broker, comments } = req.body;

		try {
			const response = await mailchimp.lists.addListMember('12bee7680b', {
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

			res.status(200).json({ success: true, response });
		} catch (error) {
			res.status(500).json({ success: false, error: error.message });
		}
	} else {
		res.status(405).json({ success: false, message: 'Method not allowed' });
	}
};
