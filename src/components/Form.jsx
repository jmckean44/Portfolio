//import "dotenv/config";
import React from "react";
import { useForm } from "react-hook-form";
import mailchimp from '@mailchimp/mailchimp_marketing';


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

      const apiKey = import.meta.env.API_KEY;
      const audience = import.meta.env.LIST_ID;
      const dc = import.meta.env.DATA_CENTER;

      const subscriber = {
        email_address: email,
        status: 'subscribed',        
        merge_fields: {
            FNAME: 'firstName',
            LNAME: 'lastName',
            PHONE: 'phone',
            HEAR: 'hear',
            BROKER: 'broker',
            COMMENTS: 'comments'
        },
      };

      // Node's 'crypto', replace with any library that can generate MD5 hash
      // const subscriberHash = crypto
      //   .createHash('md5')
      //   .update(subscriber.email_address.toLowerCase())
      //   .digest('hex');
     
      const res = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${audience}/members/${subscriber}`, {
        //`https://${dc}.api.mailchimp.com/3.0/lists/${audience}/members/${subscriber}`, {
          method: 'PUT',          
          headers: {
            'mode': 'no-cors',
            'Access-Control-Allow-Origin': 'http://localhost:4321/',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, PUT, GET',
            'Content-Type': 'application/json',
            'Accept': 'application/json',          
            'Authorization': `Basic ${apiKey}`         
          },
          body: JSON.stringify(res),          
        }
      ); 

      console.log(res);

      if (!res.ok) {        
        return { 
          statusCode: res.status, 
          body: res.statusText          
        };
      } else {        
        throw new Error('Error requesting Mailchimp API');
        
      }
    } catch (error) {
      console.log(error);
      setError("root", {        
        message: "You have already subscribed",
      });
    } 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="mc-embedded-subscribe-form">
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

      <div className="radio-inputs">       
      <p>Are You A Broker?</p> 
        <label className="label" htmlFor="broker">                
        <input {...register("RADIO", { required: false })} className="radio-input" type="radio" value="Yes" />       
        YES
        </label>
        <label className="label" htmlFor="broker">
        <input {...register("RADIO", { required: false })} className="radio-input" type="radio" value="No" />
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

      <div className="submit-button">
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
