<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $result = ['success' => false];  // MARK SUCCESS FALSE
  if (isset($_POST['email'])  && isset($_POST['submit'])) {
    $email = $_POST['email'];
    $result['email'] = $email;
    $result['success'] = true; // MARK SUCCESS TRUE

    $to = "jmckean44@gmail.com";
    $from = "jmckean44@gmail.com";
    $subject = "The Winslow HTML";
    $headers = "From: $from" . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $body .= "<body><html>";
    $body .= "<table rules='all' style='border: 1px #ccc solid;' cellpadding='5'>";
    $body .= "<tr><td><strong>Salutation:</strong> </td><td>" . strip_tags($_POST['Salutation']) . "</td></tr>";
    $body .= "<tr><td><strong>First Name:</strong> </td><td>" . strip_tags($_POST['First_Name']) . "</td></tr>";
    $body .= "<tr><td><strong>Last Name:</strong> </td><td>" . strip_tags($_POST['Last_Name']) . "</td></tr>";
    $body .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['Email']) . "</td></tr>";
    $body .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($_POST['Phone']) . "</td></tr>";
    $body .= "<tr><td><strong>Address:</strong> </td><td>" . strip_tags($_POST['Address']) . "</td></tr>";
    $body .= "<tr><td><strong>City:</strong> </td><td>" . strip_tags($_POST['City']) . "</td></tr>";
    $body .= "<tr><td><strong>Province:</strong> </td><td>" . strip_tags($_POST['Province']) . "</td></tr>";
    $body .= "<tr><td><strong>Postal Code:</strong> </td><td>" . strip_tags($_POST['Postal_Code']) . "</td></tr>";
    $body .= "<tr><td><strong>Housing:</strong> </td><td>" . strip_tags($_POST['Housing']) . "</td></tr>";
    $body .= "<tr><td><strong>Hear:</strong> </td><td>" . strip_tags($_POST['Hear']) . "</td></tr>";
    $body .= "<tr><td><strong>Buyer:</strong> </td><td>" . strip_tags($_POST['Buyer']) . "</td></tr>";
    $body .= "<tr><td><strong>Comments:</strong> </td><td>" . strip_tags($_POST['Comments']) . "</td></tr>";
    $body .= "</table>";
    $body .= "</html></body>";

    mail($to, $subject, $body, $headers);
  }
  echo json_encode($result);
}
