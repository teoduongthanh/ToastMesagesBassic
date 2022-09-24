function toast({ 
    title ='', Message = '', type='Success', duration = 1000}) {
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');

        const autoRemoveToast = setTimeout(function(){
            main.removeChild(toast);
        },duration + 1000);

        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemoveToast);
            }
        }


        const delay = (duration/1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        
        toast.style.animation = `silderInLeft ease .3s, FadeOut linear 1s ${delay}s forwards`;

        const icons = {
            Success: 'fa-solid fa-circle-check',
            Info: 'fa-solid fa-circle-info',
            Warning:'fa-sharp fa-solid fa-circle-exclamation',
            Error: 'fa-solid fa-triangle-exclamation'
        }

        const icon = icons[type];

        toast.innerHTML = `
            <div class="toast__icon" >      
                <i class="${icon}"></i>
            </div>
    
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${Message}</p>
            </div>
            
            <div class="toast__close" herh="">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast);

        
    }
}

function toastSuccessToast(){
    toast({
    title: 'Success',
    Message: 'anyone with access view yuor invited visitors',
    type: 'Success',
    duration: 1000
    })
}

function toastErrorToast(){
    toast({
    title: 'Success',
    Message: 'anyone with access view yuor invited visitors',
    type: 'Error',
    duration: 1000
    })
}
