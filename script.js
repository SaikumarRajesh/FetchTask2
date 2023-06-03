var h1=document.createElement("h1");
h1.innerHTML=`<u>திருக்குறள்/Thirukkural</u>`;
h1.setAttribute('class','heading')
document.body.append(h1);

var div=document.createElement("div");
div.setAttribute('class','inputdiv')

var input=document.createElement("input");
input.setAttribute('class','inputelement')
input.setAttribute("type","text");
input.setAttribute("id","number");
input.setAttribute("placeholder","Enter the Number");

var linebreak=document.createElement("br");

var button=document.createElement("button");
button.setAttribute('class','Searchbutton')
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

var div1 =document.createElement('div')
div1.setAttribute('class','outputdiv')

div.append(input,linebreak,button);
document.body.append(div,div1);

async function foo(){
  let res=document.getElementById("number").value;
  console.log(res);
  let url=`https://api-thirukkural.vercel.app/api?num=${res}`;
  let res1 =await fetch(url);
  let res2= await res1.json();
  div1.innerHTML=JSON.stringify(res2)
}
foo()

