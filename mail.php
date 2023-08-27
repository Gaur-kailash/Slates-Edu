<?php
//getting data from php form
$fname = $_POST['name'];
$contact = $_POST['contact'];
$email= $_POST['email'];
$expertise = $_POST['expertise'];
$add = $_POST['address'];
$state = $_POST['state'];
$qualification = $_POST['qualification'];
$experience = $_POST['experience'];
$message= $_POST['message'];
$to = "9412576598kanha@gmail.com";
$subject = "Mail From website";
$txt ="Name = ". $fname . "\r\n Contact= " . $contact . "\r\n Email = " . $email . "\r\n Message =" . $message ."\r\n Qualification = ". $qualification."\r\n Experience = ". $experience ."\r\n From = ". $add. " ".$state;
$headers = "From: noreply@slates@gmail.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
mail($to,$subject,$txt,$headers);
header("Location:thankyouMail.html");
}
//redirect to thank you page
?>
