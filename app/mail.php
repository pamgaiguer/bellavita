<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$message = $_POST['message'];

$subject = 'Bella Vita - Email enviado pelo Site';

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

$corpo = "Formulario enviado\n";
$corpo .= "Nome: " . $name . "\n";
$corpo .= "Email: " . $email . "\n";
$corpo .= "Telefone: " . $phone . "\n";
$corpo .= "Data: " . $date . "\n";
$corpo .= "Mensagem: " . $message . "\n";

$email_to = 'bv@bellavitamusica.com.br';

$status = mail($email_to, $subject, $corpo, $headers);

if ($status) {
  echo "<script> alert('Formulário enviado com sucesso!'); </script>";
  var_dump($corpo);
} else {
  echo "<script> alert('Falha ao enviar o Formulário.'); </script>";
}
?>