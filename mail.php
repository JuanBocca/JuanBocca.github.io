<?php

// Recibe
$to = 'juanbocca321@gmail.com';

// Asunto
$subject = 'This is our test email!';

// Mensaje
$message = '<h1>Hi there!</h1><p>Thanks for testing!</p>';

// Headers
$headers = "From: The Sender Name <sender@johnmorrisonline.com>\r\n";
$headers .= "Reply-To: replyto@johnmorrisonline.com\r\n";
$headers .= "Content-Type: text/html\r\n";

// Enviar mail
mail($to, $subject, $message, $headers);
