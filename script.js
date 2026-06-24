const faqs= document.querySelectorAll(".faq-question");
console.log("program start");
faqs.forEach(faq =>{
    faq.addEventListener("click",function(){
        console.log("clicked");
        this.classList.toggle("active");
        const answer = this.nextElementSibling;
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }else{
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
    
});