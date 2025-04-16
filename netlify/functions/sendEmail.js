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
			cc: 'jeff@pbmarketing.ca',
			subject: 'Test Email',
			html: `
						<!DOCTYPE html>
						<html xmlns="http://www.w3.org/1999/xhtml">
						<head>
						<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
						<meta http-equiv="X-UA-Compatible" content="IE=edge" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<meta name=”x-apple-disable-message-reformatting”>
						<title></title><!-- LEAVE EMPTY -->

						<!--[if mso]>
						<style type="text/css">
							table {border-collapse:collapse;border-spacing:0;margin:0;}
							div, td {padding:0;}
							div {margin:0 !important;}
						</style>
						<noscript>
							<xml>
								<o:OfficeDocumentSettings>
									<o:PixelsPerInch>96</o:PixelsPerInch>
								</o:OfficeDocumentSettings>
							</xml>
						</noscript>
						<![endif]-->

						<style type="text/css">
							 img {
									border: 0;
									outline: none;
									text-decoration: none !important;
									-ms-interpolation-mode: bicubic;
							 }
							 a img {  border: none;  }
							 table {
									border-spacing: 0;
									border-collapse: collapse !important;
							 }
							 td {
									border-collapse: collapse !important;
									vertical-align:top;
							 }
							 table, tr, td {
									padding: 0;
									border: none;
									border-spacing: 0px;
									border-collapse: collapse;
							 }
							 div[style="margin: 16px 0;"] { margin: 0 !important; }
							 body {
								 font-family: 'Arial', Helvetica, Arial, sans-serif;
								 font-size:100% !important;
								 font-weight:200;
								 color:#1e243e;
								 background:#ffffff;
								 width: 100% !important;
								 min-width: 100%;
								 height: 100% !important;
								 margin: 0 auto !important;
								 Margin: 0 !important;
								 padding: 0 !important;
								 -webkit-text-size-adjust: 100%;
								 -ms-text-size-adjust: 100%;
								 word-spacing:normal;
							 }
							 html {min-height: 100%;}
							 table, td {
									mso-table-lspace: 0pt;
									mso-table-rspace: 0pt;
							 }
							 h1 {
								font-family: "trajan-pro-3", Times, serif !important;
								 font-weight:400 !important;
								 letter-spacing:0;    
								 color:#aa8c52;
								 font-size:50px;
								 line-height:50px;
								 letter-spacing: 0;    
							 } 

							 h2 {     
								 font-family: "trajan-pro-3", Times, serif !important;     
								 font-weight:400 !important;
								 letter-spacing:0;    
								 color:#aa8c52;
								 font-size:36px;
								 line-height:36px;
								 letter-spacing: 0;
							 }
							 h3 {
								 text-align:center;
								 font-size:19px;
								 line-height:26px;
								 font-weight:600;  
								 font-family: 'Helvetica', Arial, sans-serif !important;
							 }
							 h4 {
								 color:#aa8c52;
								 text-align:center;
								 font-size:16px;
								 line-height:22px;
								 margin:0 0 15px;     
								 letter-spacing:1px;
								 font-family: 'Helvetica', Arial, sans-serif !important;
							 }

							 a { text-decoration:none !important; }
							 #outlook a {padding: 0; }
							 .appleLinks a {
									color:#aa8c52 !important;
									text-decoration: none;}
							 .appleLinksWhite a {
									color: #ffffff !important;
									text-decoration: none;}
							 .appleLinksBlack a {
									color: #666666 !important;
									text-decoration: none;}

							 u + #body a,
							 a[x-apple-data-detectors] {
									color: inherit !important;
									text-decoration: none !important;
									font-size: inherit !important;
									font-family: inherit !important;
									font-weight: inherit !important;
									line-height: inherit !important;
							 }

							 .col-5 { max-width: 5% !important;height:0 }
							 .col-90 { max-width: 90% !important; }

							 .col-10 { max-width: 10% !important;height:0 }
							 .col-80 { max-width: 80% !important; }

							 .col-15 { max-width: 15% !important;height:0 }
							 .col-70 { max-width: 70% !important; }

							 .col-20 { max-width: 20% !important;height:0 }
							 .col-60 { max-width: 60% !important; }

							 .col-25 { max-width: 25% !important;height:0 }
							 .col-50 { max-width: 50% !important; }

							 .col-30 { max-width: 30% !important; }
							 .col-33 { max-width: 33.3% !important; }
							 .col-40 { max-width: 40% !important; }
							 .col-50 { max-width: 50% !important; }
							 .col-60 { max-width: 60% !important; }
							 .col-70 { max-width: 70% !important; }
   
							 @media screen and (max-width: 600px) {
								.features {
									width:50%;
								}
							 }   

							 .hide {display: inline-block;}
							 .show {display: none}
   
   
							 @media screen and (max-width: 500px) {
								 .col-5,
								 .col-10,
								 .col-15,
								 .col-20,
								 .col-25,
								 .col-60,
								 .col-70,
								 .col-80,
								 .col-90 { max-width: 100% !important; }

								.col-30 { max-width: 100% !important; display: block !important; }
								.col-33 { max-width: 100% !important; display: block !important;  }
								.col-40 { max-width: 100% !important; display: block !important; }
								.col-50 { max-width: 100% !important; display: block !important; }
								.col-50:first-child { border-bottom:6px #ffffff solid;border-right:0 !important }
								.col-50:last-child { border-left:0 !important }
								.col-60 { max-width: 100% !important; display: block !important; }
								.col-70 { max-width: 100% !important; display: block !important; }
  
								 .suite-details {
									 font-size:15px;
									 line-height:19px;
								 }
								 .hide {display: none;}
								 .show {display: inline-block}
    
							}

						</style>

						<link rel="stylesheet" href="https://use.typekit.net/ybi8yin.css">

						</head>

						<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" id="body">

						<div role="article" aria-roledescription="email" lang="en" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">

							<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
								<tr>
									<td align="center">
										<!--[if mso]>
										<table width="720" style="width:720px;" align="center" role="presentation">
										<tr>
										<td>
										<![endif]-->
										<div style="width:100%;max-width:720px;margin:0 auto;">        
        
											<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
												<tr>
													<td>
														<a href="https://7dale.com">
															<img src="https://7dale.com/eblasts/241211/logo.jpg" border="0" width="100%" style="display:block;width:100%;" alt="No.7 Dale" />
														</a>
													</td>
												</tr>
											</table>      

											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="padding:10px 5% 30px;text-align:center;">
												<![endif]-->
												<div style="padding:10px 5% 30px;text-align:center;">              
        
													<p style="padding:0; margin-bottom: 20px; font-size:20px;line-height:30px;text-align:center;">
														As we celebrate this festive season, we reflect on 2024 as the grand opening year of Rosedale’s iconic address. With the building’s final touches completed over the past year, owners have been settling in and preparing to enjoy their first holiday season in their new homes.
													</p>  

													<img src="https://7dale.com/eblasts/241211/mistletoe.jpg" border="0" width="100%" style="display:inline-block;width:100%;" alt="No.7 Dale" />          
           
												</div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>      
          
											<table align="center" bgcolor="#ffffff" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
												<tr>
													<td>
														<a href="https://7dale.com/contact.php#learn-more">
															<img src="https://7dale.com/eblasts/241211/entrance.jpg" border="0" width="100%" style="display:block;width:100%;" alt="No.7 Dale" />
														</a>
													</td>
												</tr>
											</table>

											<br>

										<!--MAX-WIDTH 10% -->
										<div style="font-size:0;margin:0 auto;">
											<!--[if mso]>
											<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
											<tr>
											<td style="width:72px;text-align:center" valign="middle">
											<![endif]-->
											<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
											<!--[if mso]>
											</td>
											<td style="width:576px; text-align:center;" valign="middle">
											<![endif]-->
											<div class="col-80" style="max-width:576px;display:inline-block;width:100%;">
												<img src="https://7dale.com/eblasts/241211/wishing.png" border="0" width="100%" style="display:block;width:100%;" alt="No.7 Dale" />
            
											 <p style="color:#aa8c52;font-weight:600;font-size:20px;line-height:26px;margin:0;letter-spacing:1px">
												& WE LOOK FORWARD TO<br>SEEING YOU IN THE NEW YEAR
											 </p>
											</div>
											<!--[if mso]>
											</td>
											<td style="width:72px;text-align:center" valign="middle">
											<![endif]-->
											<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
											<!--[if mso]>
											</td>
											</tr>
											</table>
											<![endif]-->
										</div>
										<!--MAX-WIDTH 10%-->
   

											<br><br><br>


											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" bgcolor="#1e243e" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="background:#1e243e;padding:20px 5% 5px;text-align:center;line-height:20px;font-size:16px;font-weight:600;">
												<![endif]-->
												<div style="background:#1e243e;padding:20px 5% 5px;text-align:center;line-height:20px;font-size:16px;font-weight:600;">
													<h5 style="line-height:24px;font-size:17px;color:#aa8c52;letter-spacing:4px">
														IMMEDIATE OCCUPANCY
													</h5>
              
													<h5 style="line-height:24px;font-size:20px;color:#aa8c52">
														SALES OFFICE & MODEL SUITE
														<br>
														7 DALE AVENUE
													</h5>

													<h6 style="line-height:22px;font-size:16px;color:#aa8c52" class="appleLinks">
														BOOK YOUR PRIVATE MODEL TOUR
														<br>
														JANICE FOX
														<br>
														<a style="color:#aa8c52" href="mailto:JFOX@HAZELTONRE.COM">JFOX@HAZELTONRE.COM</a>
														<br>
														416 924 3779
													</h6>               
          

													 <!--LINE--> 
													 <table width="100%" style="width:100%;max-width:350px;" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
														<tr>
															<td style="padding:0 5% 10px;">
																<table cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100% !important;">
																	<tr>
																			<td align="left" valign="top" height="1" style="background-color: #aa8c52; border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-line-height-rule: exactly; line-height: 1px;"><!--[if gte mso 15]>&nbsp;<![endif]--></td>
																		</tr>
																</table>
															</td>
														</tr>
													</table>
              
													<span class="appleLinksWhite">
														<a style="color:#ffffff !important;font-weight:500;" href="mailto:Registration@7dale.com">REGISTRATION@<strong>7DALE.COM</strong></a>
														<br>
														<a style="color:#ffffff !important" href="https://7dale.com"><strong>7DALE</strong><span style="font-weight:500">.COM</span></a>
													</span>

												</div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div> 

											<table align="center" bgcolor="#1e243e" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
												<tr>
													<td style="text-align:center;padding: 10px 0 50px">
														<a href="https://milborne.com/">
															<img src="https://7dale.com/eblasts/231016/logo-milborne.png" border="0" width="115" style="display:inline-block;max-width:115px;" alt="Milborne Group" />
														</a>
														<a href="https://platinumvista.ca/">
															<img src="https://7dale.com/eblasts/231016/logo-vista.png" border="0" width="100" style="display:inline-block;max-width:100px;" alt="Platinum Vista" />
														</a>
													</td>
												</tr>
											</table> 


											<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
												<tr>
													<td style="color:#666666;font-size:11px;line-height:15px;text-align:center;padding:40px 5% 0">
														Exclusive listing Brokerage, Milborne Group. Brokers protected. <br>
														Details and specifications are subject to change without notice. <br>                
														Renderings are artist concept. E.&O.E. 2024.
													</td>
												</tr>
											</table>

											<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td style="font-size:11px;line-height:12px;padding:40px 7% 50px;color:#555555;text-align:center;">Please <a style="border:none;color:#666666;text-decoration:none;" href="*|UNSUB|*"><strong>UNSUBSCRIBE ME</strong></a> from this mailing list.</td>
												</tr>
											</table>

										</div>
										<!--[if mso]>
										</td>
										</tr>
										</table>
										<![endif]-->
									</td>
								</tr>
							</table>

						</div>

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
