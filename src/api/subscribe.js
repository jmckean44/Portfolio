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

			console.log(res);
		} catch (error) {
			res.status(500).json({ success: false, error: error.message });
		}
	} else {
		res.status(405).json({ success: false, message: 'Method not allowed' });
	}
};
