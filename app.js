window.onload = function(){
    let emailState =false;
    let emailModal = document.getElementsByClassName('email-modal')[0];
    let closeButton = document.getElementsByClassName('email-modal__close-btn')[0];
    let emailButton = document.getElementsByClassName('email-modal__button')[0];
    let emailInput = document.getElementsByClassName('email-modal__input')[0];
    let successCont = document.getElementsByClassName('email-thank')[0];
    let declineOffer = document.getElementsByClassName('email-modal__decline-offer')[0];
    let removeErr = ()=>{
        document.getElementsByClassName("email-modal__error-message")[0].classList.remove("email-modal__error-message--active")
        document.getElementsByClassName("email-modal__form-group")[0].classList.remove("email-modal__form-group--error")
    }
    let addErr = ()=>{
        document.getElementsByClassName("email-modal__error-message")[0].classList.add("email-modal__error-message--active")
        document.getElementsByClassName("email-modal__form-group")[0].classList.add("email-modal__form-group--error")
    }

    let showModal = ()=>{
        if(emailState==false){
            emailModal.classList.add("email-modal--visible");
            emailState = true;
        }
    }
    let closeModal = ()=>{
        emailModal.classList.remove("email-modal--visible");
    }
    let showSuccess = ()=>{
        successCont.classList.add('email-thank--success');
        setTimeout(()=>{
            closeModal();
        },3000);
    }
    function ValidateEmail(mail) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
            showSuccess();
            return (true)
        }
        
        addErr();
        return (false)
    }
    emailButton.addEventListener('click', ()=>{
        ValidateEmail(emailInput.value);
    })

    emailInput.addEventListener('click', ()=>{
        removeErr();
    })

    document.body.addEventListener('mouseleave',()=>{
        showModal();
    });

    closeButton.addEventListener('click',()=>{
        closeModal();
    });

    declineOffer.addEventListener('click',()=>{
        closeModal();
    });
}
