window.onload = function(){
    let emailState =false;
    let emailModal = document.getElementsByClassName('email-modal')[0];
    let closeModal = document.getElementsByClassName('email-modal__close-btn')[0];
    let emailButton = document.getElementsByClassName('email-modal__button')[0];
    let emailInput = document.getElementsByClassName('email-modal__input')[0];

    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
            console.log(emailInput.value);
            document.getElementsByClassName("email-modal__error-message")[0].classList.remove("email-modal__error-message--active")
            document.getElementsByClassName("email-modal__form-group")[0].classList.remove("email-modal__form-group--error")
            return (true)
        }
        document.getElementsByClassName("email-modal__error-message")[0].classList.add("email-modal__error-message--active")
        document.getElementsByClassName("email-modal__form-group")[0].classList.add("email-modal__form-group--error")

        return (false)
    }
    emailButton.addEventListener('click', ()=>{
        ValidateEmail(emailInput.value);
    })
    let showModal = ()=>{
        if(emailState==false){
            emailModal.classList.add("email-modal--visible");
            emailState = true;
        }
    }

    document.body.addEventListener('mouseleave',()=>{
        showModal();
    });

    closeModal.addEventListener('click',()=>{
        emailModal.classList.remove("email-modal--visible");
    });
}
