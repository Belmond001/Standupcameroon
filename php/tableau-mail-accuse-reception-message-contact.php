<!DOCTYPE html>

<html style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenue !</title>
  <tdnk href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">

    <style>
        @media only screen and (min-width:500px){
            .email-contain{
                color: #3a3a3a;
                width: 800px;
                max-width: 100%;
                margin: 0 auto;
            }
            .email-message{
                padding:40px;
            }
            .email-footer div{
                display: inline-block;
                float:left;
                width:100%;
            }

        }
        @media only screen and (max-width: 500px){
            .email-contain{
                color: #3a3a3a;
                width: 100%;
                max-width: 100%;
                margin: 0 auto;
            }
            .email-message{
                padding:20px;
            }
            h2{
                font-size: 14px;
            }
            p{
                font-size: 13px;
            }
            .email-footer{
                display:block;
            }
        }
    </style>

 </head>
 <body style="width:100%; padding:0;margin:0;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
    <div style=" font-size:14px; background-color:#EEEEEE;">
        <div class="email-contain" style="color: #3a3a3a;">
            <div style="">
                <div style="padding: 40px 0 20px 0; width:100%; text-align:center;">
                    <img src="https://falamoi.com/static/img/logo.png" alt=""  style="width:35%">
                </div>
                <div class="wrap-email-message" style="background: #fff; border: 1px solid #ddd;">
                    <div  class="email-message">
                        <div style="line-height: 1.6;text-align: center;font-size: 14px;"><strong>MESSAGE ENVOYER VIA LE FORMULAIRE DE CONTACT</strong></div>
                        <p style="line-height: 1.6;text-align: justify;font-size: 14px;">
                        <?php //echo $lemessage ?>
                        M/Mme <strong>Mon nom et prenom,</strong> <br>
                          Votre message a &eacute;t&eacute; bien re&ccedil;u par nos services et est en cours de traitement !
                        </p>
                        <p style="line-height: 1.6;text-align: justify;font-size: 14px;">
                        Nous reviendrons vers vous dans les meilleurs d&eacute;lais. <br>
                        Merci de l'int&eacute;r&ecirc;t que vous portez &agrave; notre &eacute;gard.
                        </p>

                        <div class="container_information">
                            <ul class="list_parent" style="list-style: none; padding-inline-start: 0;">
                                <li class="list_child" style="border-bottom: 1px dashed #d4d4d4; display: flex; align-items: center; color: grey; line-height:1.8em">
                                    <span style="margin-right: 10px;">ID :</span>
                                    <span class="detail" style="font-weight:bold">1234</span>
                                </li>
                                <li class="list_child" style="border-bottom: 1px dashed #d4d4d4; display: flex; align-items: center; color: grey; line-height:1.8em">
                                    <span style="margin-right: 10px;">DATE ET HEURE :</span>
                                    <span class="detail" style="font-weight:bold">03 Octobre 2024 à 13:07</span>
                                </li>

                                <li class="list_child" style="border-bottom: 1px dashed #d4d4d4; display: flex; align-items: center; color: grey; line-height:1.8em">
                                    <span style="margin-right: 10px;">NOM  :</span>
                                    <span class="detail" style="font-weight:bold">MON NOM</span>
                                </li>
                                <li class="list_child" style="border-bottom: 1px dashed #d4d4d4; display: flex; align-items: center; color: grey; line-height:1.8em">
                                    <span style="margin-right: 10px;">PRENOM  :</span>
                                    <span class="detail" style="font-weight:bold">MON PRENOM</span>
                                </li>
                                <li class="list_child" style="border-bottom: 1px dashed #d4d4d4; display: flex; align-items: center; color: grey; line-height:1.8em">
                                    <span style="margin-right: 10px;">TELEPHONE  :</span>
                                    <span class="detail" style="font-weight:bold">MON TELEPHONE</span>
                                </li>
                                <li class="list_child" style="border-bottom: 1px dashed #d4d4d4; display: flex; align-items: center; color: grey; line-height:1.8em">
                                    <span style="margin-right: 10px;">EMAIL  :</span>
                                    <span class="detail" style="font-weight:bold">MON EMAIL</span>
                                </li>
                                <li class="list_child" style="border-bottom: 1px dashed #d4d4d4; display: flex; align-items: center; color: grey; line-height:1.8em">
                                    <span style="margin-right: 10px;">OBJET DU MESSAGE  :</span>
                                    <span class="detail" style="font-weight:bold">Objet du message</span>
                                </li>

                            </ul>
                        </div>

                        <p style="line-height: 1.6;text-align: justify;font-size: 14px;">
                         <strong>Votre message</strong><br>
                        Mon message ici
                        </p>

                        <p style=""><strong>A bient&ocirc;t !</strong> </p>

                    </div>

                </div>
                <div class="email-footer" style="line-height: 1.8em;padding: 20px 0 40px 0; text-align:center;width:100%;">
                    <div>StandupCameroon<span style="color: #158ca2;font-weight: 800;font-size: 18px;margin: 0 3px;"> </span></div>
                </div>
            </div>
        </div>
    </div>
 </body>
</html>
