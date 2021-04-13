$(function () {

 
  $("#envoyer").click(function(){
    var valider = true;
    if ($("#nom").val() == "") {
       $("#nom").next(".message").fadeIn().text('veuillez entrer votre nom');
      valider = false;
    }
   else if (!$("#nom").val().match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
       $("#nom").next(".message").fadeIn().text('veuillez entrer un nom convenable');
      valider = false;
    }
    else {
      $("#nom").next(".message").fadeOut();
    }


    if ($("#prenom").val() == "") {
       $("#prenom").next(".message").fadeIn().text('veuillez entrer votre prenom');
      valider = false;
    }
   else if (!$("#prenom").val().match(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u)) {
       $("#prenom").next(".message").fadeIn().text('veuillez entrer un prenom convenable');
      valider = false;
    }
    else {
      $("#prenom").next(".message").fadeOut();
    }



    if ($("#adresse").val() == "") {
       $("#adresse").next(".message").fadeIn().text('veuillez entrer votre adresse');
      valider = false;
    }
   else if (!$("#adresse").val().match(/^[#.0-9a-zA-Z\s,-]+$/)) {
       $("#adresse").next(".message").fadeIn().text('veuillez entrer une adresse convenable');
      valider = false;
    }
    else {
      $("#adresse").next(".message").fadeOut();
    }



    if ($("#email").val() == "") {
       $("#email").next(".message").fadeIn().text('veuillez entrer votre email');
      valider = false;
    }
   else if (!$("#email").val().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
       $("#email").next(".message").fadeIn().text('veuillez entrer une email convenable');
      valider = false;
    }
    else {
      $("#email").next(".message").fadeOut();
    }

    if ($("#Login").val() == "") {
       $("#Login").next(".message").fadeIn().text('veuillez entrer votre Login');
      valider = false;
    }
   else if (!$("#Login").val().match(/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)) {
       $("#Login").next(".message").fadeIn().text('veuillez entrer une Login convenable');
      valider = false;
    }
    else {
      $("#Login").next(".message").fadeOut();
    }


    if ($("#mdp").val() == "") {
       $("#mdp").next(".message").fadeIn().text('veuillez entrer votre mot de passe');
      valider = false;
    }
   else if (!$("#mdp").val().match(/^[A-Za-z0-9]{8,}$/i)) {
       $("#mdp").next(".message").fadeIn().text('veuillez entrer une mdp convenable');
      valider = false;
    }
    else {
      $("#mdp").next(".message").fadeOut();
    }

    if ($("#Cmdp").val() == "") {
       $("#Cmdp").next(".message").fadeIn().text('veuillez confirmer votre mot de passe');
      valider = false;
    }
   else if ($("#Cmdp").val() != $('#mdp').val()) {
       $("#Cmdp").next(".message").fadeIn().text('le mot de passe doit être identique au précédent');
      valider = false;
    }
    else {
      $("#Cmdp").next(".message").fadeOut();
    }



    if ($("#tele").val() == "") {
       $("#tele").next(".message").fadeIn().text('veuillez entrer votre numéro de téléphone');
      valider = false;
    }
   else if (!$("#tele").val().match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
       $("#tele").next(".message").fadeIn().text('veuillez entrer un numéro convenable');
      valider = false;
    }
    else {
      $("#tele").next(".message").fadeOut();
    }

    if ($("#civilité").val() == "Civilité") {
       $("#civilité").next(".message").fadeIn().text('veuillez choisir votre civilité');
      valider = false;
    }
    else {
      $("#civilité").next(".message").fadeOut();
    }


    if ($("#pays").val() == "Pays") {
       $("#pays").next(".message").fadeIn().text('veuillez choisir votre pays');
      valider = false;
    }
    else {
      $("#pays").next(".message").fadeOut();
    }
   
    return valider;

  });
     

});