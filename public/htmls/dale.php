<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the email address from the form
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

  // Validate the email address
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    exit;
  }

  // Email details
  $to = $email; // Send the email to the user who submitted the form
  $subject = "7 Dale - HTML Email Campaign";

  // HTML email content
  $message = '
    <html>
    <head>
        <title>7 Dale - HTML Email Campaign</title>
    </head>
    <body>
        <h1>Welcome to the 7 Dale Campaign</h1>
        <p>Thank you for your interest in the 7 Dale campaign. Below is an image preview:</p>
        <img src="https://pbmarketing.ca/img/work/260highPark-streetView-mobile.jpg" alt="7 Dale" style="max-width: 100%; height: auto;" />
        <p>We look forward to connecting with you!</p>
    </body>
    </html>
    ';

  // Email headers
  $headers = "From: jmckean44@gmail.com\r\n"; // Replace with your domain
  $headers .= "Reply-To: jmckean44@gmail.com\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  // Send the email
  if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
  } else {
    echo json_encode(["status" => "error", "message" => "Failed to send email. Please try again later."]);
  }
} else {
  echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
