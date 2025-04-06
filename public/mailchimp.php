<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate the email address
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit;
    }

    // Get the selected campaign
    $campaign = isset($_POST['campaign']) ? htmlspecialchars($_POST['campaign']) : null;
    if (!$campaign) {
        echo json_encode(["status" => "error", "message" => "No campaign selected."]);
        exit;
    }

    // Mailchimp API credentials
    $apiKey = ''; // Replace with your Mailchimp API key
    $serverPrefix = 'us9'; // Replace with your Mailchimp server prefix (e.g., 'us1', 'us2')
    $listId = 'f92b8abf94'; // Replace with your Mailchimp Audience ID

    // Mailchimp API endpoint
    $url = "https://$serverPrefix.api.mailchimp.com/3.0/campaigns";

    // Campaign-specific content
    $campaignContent = [
        'dale' => 'This is the content for the 7 Dale campaign.',
        'mrc' => 'This is the content for the Marina Resort Cavtat campaign.',
        // Add more campaigns as needed
    ];

    // Prepare the email content
    $content = isset($campaignContent[$campaign]) ? $campaignContent[$campaign] : 'Default campaign content.';

    // Prepare the API request payload
    $data = [
        'recipients' => [
            'list_id' => $listId,
        ],
        'type' => 'regular',
        'settings' => [
            'subject_line' => "Test Email for $campaign Campaign",
            'title' => "$campaign Campaign Test",
            'from_name' => 'HTML Email Test',
            'reply_to' => 'jmckean44@gmail.com',
        ],
    ];

    // Initialize cURL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERPWD, "anystring:$apiKey");
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));

    // Execute the API request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // Handle the API response
    if ($httpCode == 200) {
        echo json_encode(["status" => "success", "message" => "Test email sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
