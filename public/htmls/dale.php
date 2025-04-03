<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Sanitize and validate the email address
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    exit;
  }

  // Get the selected campaigns
  $campaigns = isset($_POST['campaigns']) ? $_POST['campaigns'] : [];
  if (empty($campaigns)) {
    echo json_encode(["status" => "error", "message" => "No campaigns selected."]);
    exit;
  }

  // Email details
  $to = $email;
  $subject = "HTML Email Campaigns";
  $headers = "From: no-reply@yourdomain.com\r\n";
  $headers .= "Reply-To: no-reply@yourdomain.com\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  // Build the email content
  $message = "<html><body>";
  $message .= "<h1>Selected Campaigns</h1>";
  $message .= "<ul>";
  foreach ($campaigns as $campaign) {
    $message .= "<li>" . htmlspecialchars($campaign) . "</li>";
  }
  $message .= "</ul>";
  $message .= "<p>Thank you for your interest in our campaigns!</p>";
  $message .= "</body></html>";

  // Send the email
  if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully!"]);
  } else {
    echo json_encode(["status" => "error", "message" => "Failed to send email. Please try again later."]);
  }
} else {
  echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
