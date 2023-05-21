//scrolda headerni o'zgarishi///////
window.addEventListener('DOMContentLoaded', function (){
    //yuqoriga tez chiqaeadigan button///////////////
    const scrollBtn = document.querySelector('.scrollToTop-btn')
    window.addEventListener('scroll', ()=> {
        scrollBtn.classList.toggle('active', window.scrollY > 300)
    })
    scrollBtn.addEventListener('click', () => {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    })
    //qalqib chiqishi//////////////////////
    window.addEventListener('scroll', () => {
        let reveals=document.querySelectorAll('.reveal')
        for(let i=0; i<reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active')
            }
        }
    })
    var btn1=document.querySelector(".btn1")
    btn1.addEventListener("click", ()=>{
        var input1=document.querySelector(".input1")
        var input2=document.querySelector(".input2")
        if(input1.value==""){
            input1.style.border="1px solid red"
            input2.style.border="1px solid red"
            alert("Убедитесь, что данные верны !!!")
            
        }
        else{
            alert("Поздравляем, и мы свяжемся с вами в ближайшее время 👍")
            input1.style.border="none"
            input2.style.border="none"
            input1.value =""
            input2.value =""
        }
    })
    var btn=document.querySelector(".btn")
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("btn-click")
    })
    //////////////////////////////////////////////////
    const img = document.querySelectorAll('.card img')

    img.forEach( imgs => {
        imgs.addEventListener('click', () => {
            alert("404 ERROR")
        })
    })
})
