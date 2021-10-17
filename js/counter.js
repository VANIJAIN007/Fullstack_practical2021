let decrement=document.querySelector("#decrement");
let increment=document.querySelector("#increment");
let counterValue=document.querySelector("#counterValue");

let counter=0;

increment.addEventListener("click", ()=>
{
    counter++;
    if(counter<0)
    {
        counter=0;
    }
    counterValue.innerText=counter;
});
decrement.addEventListener("click",()=>
{
    counter--;
    if(counter<0)
    {
        document.getElementById("#decrement").disabled=true;
        button=disabled;
    }
    else{
        counterValue.innerText=counter;
    }
});