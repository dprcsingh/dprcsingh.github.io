var dta=['website','ux/ui','application']
var count=0;
var counter=0;
var ele=document.querySelector(".anim-text");

setInterval(resolve,1000);
function resolve()
{
  if(counter==dta.length)
    {
      counter=0;
    }
  
  
  ele.innerHTML=dta[counter];
  counter++;
}


function navSlide()
{
    const ele=document.querySelector('.col-on-toggle');
    const conta=document.querySelector('.landing-page');
    ele.classList.toggle("after-click");
    conta.classList.toggle("after-click1");
 
}
    
    