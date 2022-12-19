const menuitems =  document.querySelectorAll(".menu-items");



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