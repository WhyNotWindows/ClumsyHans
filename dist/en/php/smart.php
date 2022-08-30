<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['message'];

// Формирование самого письма
$title = "New message from user";
$body = "
<h2>New message</h2>
<b>Name:</b> $name<br>
<b>Email:</b> $email<br><br>
<b>Message:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'yaroslavgajdash@gmail.com'; // Логин на почте
    $mail->Password   = 'sgxdbpnrkooghktw'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = '465';
    $mail->setFrom('yaroslavgajdash@gmail.com', 'Clumsy Hans'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('yaroslavgajdash@gmail.com');
	// Отправка сообщения
	$mail->isHTML(true);
	$mail->Subject = $title;
	$mail->Body = $body;    

	// Проверяем отравленность сообщения
	if ($mail->send()) {$result = "success";} 
	else {$result = "error";}
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);