//import "dotenv/config";
import React from "react";
import { useForm } from "react-hook-form";
import express from "express";
import bodyParser from "body-parser";
import request from "request";
import https from "node:https";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {    
    try {		

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(JSON.stringify(data));

      const apiKey = "9ae3a523bae7f03d82d138a966f0a93a-us9";
      const audience = "12bee7680b";
      const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");


      app.post("/", (req, res) => {
        const firstName = req.body.firstname;
        const lastName = req.body.lastname;
        const email = req.body.email;
        const phone = req.body.phone;
        const hear = req.body.hear;
        const broker = req.body.broker;
        const comments = req.body.comments;

        const data = {
            members: [{
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: firstName,
                        LNAME: lastName,
                        EMAIL: email,
                        PHONE: phone,
                        HEAR: hear,
                        BROKER: broker,
                        COMMENTS: comments,
                    } 
                }]
        };

        const jsonData = JSON.stringify(data);

        const url = "https://usX.api.mailchimp.com/3.0/lists/" + listID;
        const options = {
            method: "POST",
            auth: "archit:apiKey"
        }

        const request =  https.request(url, options, (response) => {
            response.on("data", (data) => {
                console.log(JSON.parse(data));
            });
        });

        request.write(jsonData);
        request.end();
      });

      app.listen("3000", (req, res) => {
        console.log("Server is running on port 3000.");
      });

      

      // const apiKey = import.meta.env.MAILCHIMP_API_KEY;
      // const audience = import.meta.env.MAILCHIMP_LIST_ID;
      // const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");

      // const subscriberHash = crypto
      //   .createHash("md5")
      //   .update(subscriber.email_address.toLowerCase())
      //   .digest("hex");
     
      const response = await fetch(
        `https://us9.api.mailchimp.com/3.0/lists/${audience}/members/${subscriberHash}`, {
          body: JSON.stringify(subscriber),
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
            "Content-Type": "application/json",
            Accept: "application/json",          
            Authorization: `auth ${apiKey}`         
          },
          method: "PUT",
        }
      );
      console.log(response);
      console.log(data);

      if (response.ok) {
        return { 
          statusCode: response.status, 
          body: response.statusText 
        };
      } else {
        throw new Error("Error requesting Mailchimp API");
      } 
    } catch (error) {
      setError("root", {
        message: "You have already subscribed",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid" id="mc-embedded-subscribe-form">
      <div>
        <label htmlFor="firstName" className="visuallyhidden">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          aria-invalid={errors.firstName ? "true" : "false"}
          {...register("FNAME", {
            required: "First name is required",
            pattern: { value: /^[A-Za-z]+$/i, message: "Please enter a valid first name" },
          })}
        />
        <span className="helperText">First Name *</span>
        {errors.FNAME && <p className="errorMsg">{errors.FNAME.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName" className="visuallyhidden">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last Name *"
          {...register("LNAME", {
            required: "Last name is required",
            pattern: { value: /^[A-Za-z]+$/i, message: "Please enter a valid last name" },
          })}
        />
        <span className="helperText">Last Name</span>
        {errors.LNAME && <p className="errorMsg">{errors.LNAME.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="visuallyhidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email *"
          {...register("EMAIL", {
            required: "Email is required",
            pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Please enter a valid email" },
          })}
        />
        <span className="helperText">Email</span>
        {errors.EMAIL && <p className="errorMsg">{errors.EMAIL.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="visuallyhidden">
          Phone
        </label>
        <input type="tel" id="phone" placeholder="Phone" {...register("PHONE")} />
        <span className="helperText">Phone</span>
      </div>

      <div>      
        <select {...register("HEAR", { required: false })} className="select">
          <option value="">How did you hear about us?</option>
          <option value="Billboard">Billboard</option>
          <option value="Signage">Signage</option>
          <option value="Social Media">Social Media</option>
          <option value="Google">Google</option>
          <option value="Word of Mouth">Word of Mouth</option>
        </select>
      </div>

      <div class="radio-inputs">       
      <p>Are You A Broker?</p> 
        <label class="label" for="broker">                
        <input {...register("RADIO", { required: false })} class="radio-input" type="radio" value="Yes" />       
        YES
        </label>
        <label class="label" for="broker">
        <input {...register("RADIO", { required: false })} class="radio-input" type="radio" value="No" />
        NO
        </label>       
      </div>

      <div>
        <label htmlFor="comments" className="visuallyhidden">
          Comments
        </label>
        <textarea type="text" rows="5" id="comments" placeholder="Comments" {...register("COMMENTS")}></textarea>
        <span className="helperText">Comments</span>
      </div>

      <div class="submit-button">
        {errors.root && <p className="errorMsg">{errors.root.message}</p>}
        <button type="submit" className="button" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>

      <div>
        <p className="disclaimer">Disclaimer...</p>
      </div>
    </form>
  );
}

export default RegisterForm;
