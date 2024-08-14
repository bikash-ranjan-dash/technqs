<?php
if(isset($_POST['action'])){

    $to = 'mailus@techneeqs.com';
    $subject = "NEW SERVICE INQUIRY";
    $from = 'mailus@techneeqs.com';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'Cc: info@techneeqs.com' . "\r\n".
        'X-Mailer: PHP/' . phpversion();
        
    
    
    $message = 'New service request came from below details, <br>';
    $message .= 'Name: '.$_POST['name'].',<br>';
    $message .= 'Email: '.$_POST['email'].',<br>';
    $message .= 'Comment: '.$_POST['comment'].',<br>';
    $message .= 'Organization Name: '.$_POST['organization-name'].',<br>';
    $message .= 'Phone: '.$_POST['phone'].',<br>';
    $message .= 'Interest: '.$_POST['interest'].',<br>';
    
    
    mail($to, $subject, $message, $headers);
header('Location: ../success.html');
}
?>