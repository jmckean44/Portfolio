<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function handler($event, $context)
{
  // Parse the request body
  $data = json_decode($event['body'], true);
  $email = $data['email'] ?? null;

  if (!$email) {
    return [
      'statusCode' => 400,
      'body' => json_encode(['success' => false, 'message' => 'Email is required.']),
    ];
  }

  // Create the email content
  $htmlContent = "
        <html>
        <head>
            <title>Test Email</title>
        </head>
        <body>
            <h1>Hello!</h1>
            <p>This is a test email sent using PHP and Netlify Functions.</p>
        </body>
        </html>
    ";

  try {
    // Configure PHPMailer
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = getenv('SMTP_HOST');
    $mail->SMTPAuth = true;
    $mail->Username = getenv('SMTP_USERNAME');
    $mail->Password = getenv('SMTP_PASSWORD');
    $mail->SMTPSecure = 'tls';
    $mail->Port = getenv('SMTP_PORT');

    // Set email parameters
    $mail->setFrom('jmckean44@gmail.com', 'Jeff');
    $mail->addAddress($email);
    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Body = $htmlContent;

    // Send the email
    $mail->send();

    return [
      'statusCode' => 200,
      'body' => json_encode(['success' => true, 'message' => 'Email sent successfully!']),
    ];
  } catch (Exception $e) {
    return [
      'statusCode' => 500,
      'body' => json_encode(['success' => false, 'message' => 'Failed to send email. Error: ' . $mail->ErrorInfo]),
    ];
  }
}
