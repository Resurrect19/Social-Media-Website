const menuitems =  document.querySelectorAll(".menu-items");
// -----------message----------
const messageNotification = document.querySelector("#message-notification");
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// -----------theme--------------
const theme = document.querySelector("#theme");
const themeModal = document.querySelector('.customize-theme');



const changeactive = () => {
    menuitems.forEach(item => {
        item.classList.remove("active");
    })
}
menuitems.forEach(item => {
    item.addEventListener('click', () => {
        changeactive();
        item.classList.add("active");
        if(item.id != "notification"){
           document.querySelector(".notification-popup")
           .style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup')
            .style.display = 'block';
        }
    })
})


// ---------------message------------------
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--blue-grey)';
    messageNotification.querySelector(".notification-count").style.display= 'none';
    setTimeout( () => {
        messages.style.boxShadow= 'none';
    }, 2000);
})



const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach( chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display ='none';
        }
    })
};

messageSearch.addEventListener('keyup', searchMessage);







// -----------Theme Customization-------------------
const openModal = () => {
    themeModal.style.display = "grid";
};

const closeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
};

themeModal.addEventListener('click', closeModal);
theme.addEventListener('click', openModal);