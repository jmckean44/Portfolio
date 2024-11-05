import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import mailchimp from '@mailchimp/mailchimp_marketing';



function RegisterForm() {  

  const app = express();
 
  app.use(express.static('public'));
 
  app.use(bodyParser.urlencoded({extended: true}));
  
  mailchimp.setConfig({
    apiKey: '9ae3a523bae7f03d82d138a966f0a93a-us9',
    server: 'us9',
  });
    
  
  app.get('/', function(req, res){
    res.sendFile(__dirname+'/sign_up.html');
  });
  
  app.post('/', async function(req, res) {  
 
    const listId = '12bee7680b'
  
    const response = await mailchimp.lists.addListMember(listId, {
    email_address: req.body.email,
    status: "subscribed",
    merge_fields: {
      FNAME: req.body.firstName,
      LNAME: req.body.lastName,
    }
  });
  
    console.log(response.statusCode);
  
  
    if (response.statusCode == 200) {
      res.send(response.statusCode);
    } else {
      res.send(response.statusCode);
    }
  })
  

// app.post('/audience/add/member', async (req, res) => {

//   const { listId, firstName, lastName, email, phone, hear, broker, comments } = req.body
//   const addListMember = async () => {

//       try {
//           const response = await  mailchimp.lists.addListMember(listId, {
//               email_address: email,
//               status: 'subscribed',
//               email_type: 'html',
//               merge_fields: {
//                   FNAME: firstName,
//                   LNAME: lastName,
//                   PHONE: phone,
//                   HEAR: hear,
//                   BROKER: broker,
//                   COMMENTS: comments
//               },
//               tags: [tag]
//           })
//           res.send(response)
//       }
//       catch (err) {
//           res.status(400).send(err)
//       }
//   }
// addListMember()
// })

}

export default RegisterForm;


