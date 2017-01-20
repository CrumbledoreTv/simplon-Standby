//#########################################################################
//           ---------------- SPOILER FAQ --------------
$(document).on('click', '.panel div.clickable', function (e) {
    var $this = $(this);
    var $panel = $this.parent('.panel');
    var $panel_body = $panel.children('.panel-body');
    var $display = $panel_body.css('display');

    if ($display == 'block') {
        $panel_body.slideUp();
    } else if($display == 'none') {
        $panel_body.slideDown();
    }
});

$(document).ready(function(e){
    var $classy = '.panel.autocollapse';

    var $found = $($classy);
    $found.find('.panel-body').hide();
    $found.removeClass($classy);
});
//#########################################################################
//           ---------------- FORMULAIRE --------------
function verif() {
  var mailStyle = document.getElementById('email');
  var nomStyle = document.getElementById('nom');
  var prenomStyle = document.getElementById('prenom');

  var mailInner = document.getElementById('mailError');
  var nomInner = document.getElementById('nomError');
  var prenomInner = document.getElementById('prenomError');

  var nom = $('#nom').val();
  var prenom = $('#prenom').val();
  var email = $('#email').val();

  var modal = false;

  // var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var interdit = '&*?!:;,\t#~"^¨%$£?²¤§%*()]{}<>|\\/`\'';

// VERIF @ EMAIL-----------------------------
  var carMail = email.indexOf("@");
  if (carMail == -1){
    mailStyle.style.borderColor = "red";
    mailInner.innerHTML = "Champ Invalide";
    return false;
  }else{
    mailInner.innerHTML = "";
    mailStyle.style.borderColor = "";
  }

// VERIF NOM --------------------------------
if (nom.length == 0) {
  nomStyle.style.borderColor = "red";
  nomInner.innerHTML = "Champ Invalide";
  return false;
}else{
  nomInner.innerHTML = "";
  nomStyle.style.borderColor = "";
}

// VERIF PRENOM -----------------------------
if (prenom.length == 0){
  prenomStyle.style.borderColor = "red";
  prenomInner.innerHTML = "Champ Invalide";
  return false;
}else {
  prenomInner.innerHTML = "";
  prenomStyle.style.borderColor = "";
}
}
//#########################################################################
