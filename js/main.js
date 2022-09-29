let bgr = document.querySelector(".bgr")
let index = 1;
setInterval(function(){
    if(index <=3 ){
        index++;
    }
    else{
        index = 1;
    }
    let active = document.querySelector(".active")
    active.classList.remove("active")
    let newActive = document.querySelector(".bgr div:nth-child("+index+")")
    newActive.classList.add("active")
},5000)
const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    return Math.ceil((ms2 - ms1) / (24*60*60*1000));
};
let today = new Date();
let dayLove = new Date("2022/3/29")
let day = get_day_of_time(dayLove,today)
let days = document.querySelector(".days");
days.innerHTML = day +" days"

let quyen = document.querySelector(".person1")
quyen.addEventListener('click',function(){
    window.location.href = "https://www.facebook.com/thanhxquyen/"
})
let duong =  document.querySelector(".person2")
duong.addEventListener('click',function(){
    window.location.href = "https://www.facebook.com/profile.php?id=100025582754026"
})

let title = document.querySelector(".title");
let list_img = document.querySelector(".list-img")
let close = document.querySelector(".close")
let overlay = document.querySelector(".overlay")
title.addEventListener('click',function(){
    list_img.classList.remove("hide")
    list_img.classList.add("show")
    close.classList.remove("hide")
    close.classList.add("show")
    overlay.classList.remove("hide")
    overlay.classList.add("show")
})
close.addEventListener('click',function(){
    list_img.classList.remove("show")
    list_img.classList.add("hide")
    close.classList.remove("show")
    close.classList.add("hide")
    overlay.classList.remove("show")
    overlay.classList.add("hide")
})
