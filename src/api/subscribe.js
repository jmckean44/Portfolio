import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY,
	server: process.env.MAILCHIMP_SERVER_PREFIX,
});

exports.handler = async (event, context) => {
	if (event.httpMethod === 'POST') {
		const { email, firstName, lastName, phone, hear, broker, comments } = JSON.parse(event.body);

		try {
			const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
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

			return {
				statusCode: 200,
				body: JSON.stringify({ success: true, response }),
			};
		} catch (error) {
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
