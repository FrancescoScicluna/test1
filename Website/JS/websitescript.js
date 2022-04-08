function loginAndDisableField(){
    let name = document.getElementById('accountName');
    let surname = document.getElementById('accountSurname');
    let email = document.getElementById('accountEmail');
    let password = document.getElementById('accountPassword');

    if(name || surname || email || password != ""){
        document.getElementById('accountName').setAttribute("disabled", "false");
        document.getElementById('accountSurname').setAttribute("disabled", "false");
        document.getElementById('accountEmail').setAttribute("disabled", "false");
        document.getElementById('accountPassword').setAttribute("disabled", "false");
    }
    else{
        document.getElementById('accountName').setAttribute("disabled", "true");
        document.getElementById('accountSurname').setAttribute("disabled", "true");
        document.getElementById('accountEmail').setAttribute("disabled", "true");
        document.getElementById('accountPassword').setAttribute("disabled", "true");
    }

}

function purchaseAlert() {
    let popup = document.getElementById('alertContainer');
    popup.innerHTML = '<div class="alert alert-beige alert-dismissible fade show sticky" style="display: none;" id="showAlert" role="alert">You should check in on some of those fields below.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

    let popupInner = document.getElementById('showAlert');
    popupInner.style.display = "block";

    setTimeout("hidePurchaseAlert()", 3000);
}

function hidePurchaseAlert(){
    let popup = document.getElementById('showAlert');
    popup.style.display = "none";
}

function openSlider() {
    document.getElementById('sliderEdit').style.width = "100%";
    document.getElementById('sliderBTN').style.display = "none";
    document.getElementById('profileAvatar').style.display = "none";
}