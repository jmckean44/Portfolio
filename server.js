// server.js
import express from 'express';
import bodyParser from 'body-parser';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { config } from 'dotenv';

config();

const app = express();
const PORT = import.meta.env.PORT || 4321;

mailchimp.setConfig({
	apiKey: import.meta.env.API_KEY,
	server: import.meta.env.DATA_CENTER,
});

app.use(bodyParser.json());

app.post('/api/subscribe', async (req, res) => {
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
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
