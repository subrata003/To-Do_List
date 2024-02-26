const inputbox=document.querySelector(".text")
const listcont=document.querySelector("#listcont")


 function addtask(){
        if(inputbox.value===''){
                alert("Please input something")
        }
        else{
                let li=document.createElement("li")
                li.innerHTML=inputbox.value;
                listcont.appendChild(li);
                let span=document.createElement("span")
                span.innerHTML="\u00d7"  // creat X
                li.appendChild(span)
        }
        inputbox.value="";
        display();
        
        

 }
 listcont.addEventListener("click",function(e){
        if( e.target.tagName==="LI"){
                e.target.classList.toggle("checked")
                display();
               
        }
        else if(e.target.tagName==="SPAN"){
                e.target.parentElement.remove();
                display();
               
        }
 },false)
 function display(){
        localStorage.setItem("data",listcont.innerHTML)
 }
 function displaydata(){
        listcont.innerHTML=localStorage.getItem("data");
 }
 displaydata();
