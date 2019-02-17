btn1=document.getElementById("button01")
console.log(btn1)
btn1 = addEventListener("click",function(){
   btn1=document.getElementById("button01")
   btn1.innerHTML="Clicked"
   setTimeout(function(){
      btn1.innerHTML="Click"
   },1000)
    
})
