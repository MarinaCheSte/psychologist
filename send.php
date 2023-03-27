<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail=new PHPMailer(true);
$mail->CharSet='UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setForm('raggatip@list.ru', 'Заявка с сайта');
$mail->addAddress('raggatip@list.ru');
$mail->Subject('Заявка с сайта');

$body='<h1>Заявка с сайта</h1>'


if(trim(!empty($_POST['user_name']))){
    $body.='<p><strong>Имя:</strong>'.$_POST['user_name'].'</p>';
}
if(trim(!empty($_POST['user_surname']))){
    $body.='<p><strong>Фамилия:</strong>'.$_POST['user_surname'].'</p>';
}
if(trim(!empty($_POST['user_email']))){
    $body.='<p><strong>Email:</strong>'.$_POST['user_email'].'</p>';
}
if(trim(!empty($_POST['user_tel']))){
    $body.='<p><strong>Телефон:</strong>'.$_POST['user_tel'].'</p>';
}
if(trim(!empty($_POST['user_message']))){
    $body.='<p><strong>Запрос:</strong>'.$_POST['user_message'].'</p>';
}

$mail->Body=$body;

if(!$mail->send()){
    $message='Ошибка!';
}else {
    $message='Данные отправлены'
}

$response=['message'=>$message];

header('Content-type:application/json');
echo json_encode($response);

?>





