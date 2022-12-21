const menuitems =  document.querySelectorAll(".menu-items");
// -----------message----------
const messageNotification = document.querySelector("#message-notification");
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// -----------theme--------------
const theme = document.querySelector("#theme");
const themeModal = document.querySelector('.customize-theme');

// -----------font-customization---------------------
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");


// ----------background-color---------------
const bgcolor = document.querySelectorAll('.choose-bg div');


// --------color-customization------------
const color = document.querySelectorAll('.choose-color span');

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





// -----------font-size-----------------


// -----to remove active----------
const removeActive = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    let fontSize;

    size.addEventListener('click' , () => {
        removeActive();
        size.classList.toggle('active');
        if(size.classList.contains("font-size-1")){
            fontSize = '10px';
            root.style.setProperty(' --sticky-top-left', '5.4rem');
            root.style.setProperty(' --sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains("font-size-2")){
            fontSize = '13px';
            root.style.setProperty(' --sticky-top-left', '5.4rem');
            root.style.setProperty(' --sticky-top-right', '-7rem');
        }
        else if(size.classList.contains("font-size-3")){
            fontSize = '16px';
            root.style.setProperty(' --sticky-top-left', '-2rem');
            root.style.setProperty(' --sticky-top-right', '-17rem');
        }
        else if(size.classList.contains("font-size-4")){
            fontSize = '19px';
            root.style.setProperty(' --sticky-top-left', '-5rem');
            root.style.setProperty(' --sticky-top-right', '-25rem');
        }
        else if(size.classList.contains("font-size-5")){
            fontSize = '22px';
            root.style.setProperty(' --sticky-top-left', '-10rem');
            root.style.setProperty(' --sticky-top-right', '-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
} )









// -------------color-customization------------


const removeColoractive = () => {
    color.forEach( palette => {
        palette.classList.remove('active');
    })
}

color.forEach(palette => {

    palette.addEventListener('click' ,() => {
        removeColoractive();
        palette.classList.toggle('active');
        let primarycolor;
    if(palette.classList.contains('color-1')){
        primarycolor = '#263268';
    }
     else if(palette.classList.contains('color-2')){
        primarycolor = '#f48fb1';
    }  
    else if(palette.classList.contains('color-3')){
        primarycolor = '#90caf9';
    }
    else if(palette.classList.contains('color-4')){
        primarycolor = '#b39dd8';
    }
    else if(palette.classList.contains('color-5')){
        primarycolor = '#69f0ae';
    }
    root.style.setProperty('--blue-grey', primarycolor);
    })

})


bgcolor.forEach(Color => {
    Color.addEventListener('click', () => {
        Color.classList.toggle('active');
        let bg;
        let subBg;
        let fnt;
        if(Color.classList.contains('bg-1')){
            bg = '#f5f5f5';
            subBg = '#e0e0e0';
            fnt = '#000000';
        }
        else if(Color.classList.contains('bg-2')){
            subBg = '#212121';
            bg = '#424242';
            fnt = '#f5f5f5';
                }
        else if(Color.classList.contains('bg-3')){
            subBg = '#010101';
            bg = '#4a4a4a';
            fnt = '#f5f5f5';
        }
        root.style.setProperty('--white', bg);
        root.style.setProperty('--pale-white', subBg);
        
    })
})