<?php

include('smtp/PHPMailerAutoload.php');

if (isset($_POST['email'])) {
    smtp_mailer($_POST['email'], 'Altium Registration Successfull !!');
}

function smtp_mailer($to, $subject)
{
    $mail = new PHPMailer();
    //$mail->SMTPDebug  = 3;
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->IsHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Username = "djdiptayan1@gmail.com";
    $mail->Password = "igrgdgpodtmyqaer";
    $mail->SetFrom("djdiptayan1@gmail.com");
    $mail->Subject = $subject;
    $msgg = "You will soon receive further details.";
    $mail->Body = $msgg;
    $mail->AddAddress($to);
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => false
        )
    );
    if (!$mail->Send()) {
        echo "not sent";
    } else {
        echo "sent";
    }
}
