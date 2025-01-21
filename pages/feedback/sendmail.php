<?php
require __DIR__ . '/../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$response = [];
try {
    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', __DIR__ . '/../../vendor/phpmailer/phpmailer/language/');
    $mail->isHTML(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'veretnov.aleksey@mail.ru';
    $mail->Password = 'jATNekBPR69AQkRED23n';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('veretnov.aleksey@mail.ru');
    $mail->addAddress('1eshiy@vk.com');
    $mail->Subject = 'Форма обратной связи (KrasGid)';

    $body = '<p><strong>Имя: </strong>' . $_POST['firstName'] . '</p>';
    $body .= '<p><strong>E-mail: </strong>' . $_POST['email'] . '</p>';
    $body .= '<p><strong>Сообщение: </strong>' . $_POST['message'] . '</p>';

    $mail->Body = $body;
    $mail->send();

    $response['status'] = 'success';
} catch (Exception $e) {
    $response['status'] = 'error: ' . __DIR__ . '../../../vendor';
}

header('Content-Type: application/json');
echo json_encode($response);
