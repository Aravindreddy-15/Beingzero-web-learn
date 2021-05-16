var data;
var arrc;
function myfunction()
{
    
    var x=document.getElementById("box").value;
    if(localStorage["datas"]===undefined)
    {
        data=[x];
        localStorage.setItem("datas", JSON.stringify(data));
    }
    else{
    data = JSON.parse(localStorage.getItem("datas"));
    console.log(x);
    if(x.length>1)
    data.push(x);
    localStorage["datas"] = JSON.stringify(data);
    data = JSON.parse(localStorage.getItem("datas"));
}
    
  var mytable = "<table id='customers'>";
  var i=0;
  for (var CELL of data){  mytable += "<tr><td><input type='checkbox' id="+i+" onclick='checkeds()' >" + CELL + "</td></tr>"; i++;}
   mytable += "</table>";
  document.getElementById("mytable").innerHTML = mytable;
  arrc = JSON.parse(localStorage.getItem("elements"));
var k=arrc.length;
for(var s=0;s<k;s++)
{
    console.log("Hello")
    document.getElementById(arrc[s]).checked=true;
}
}

myfunction();
arrc = JSON.parse(localStorage.getItem("elements"));
var k=arrc.length;
for(var s=0;s<k;s++)
{
    console.log("Hello")
    document.getElementById(arrc[s]).checked=true;
}
function checkeds()
{
    var n=data.length;
 console.log(n);
 if(localStorage["elements"]===undefined)
 {
 localStorage.setItem("elements", JSON.stringify([]));
 }
 localStorage.removeItem["elements"];
 arrc=[]
 for(var j=0;j<n;j++)
 {
     var s=document.getElementById(j);
     if(s.checked)
    {
        arrc.push(j);
    }
 }
 localStorage["elements"] = JSON.stringify(arrc);
 console.log(localStorage["elements"]);
}

function completed()
{
    var mytable = "<table id='customers'>";
    var i=0;
    var n=arrc.length
    for (var j=0;j<n;j++){  mytable += "<tr><td>" + data[arrc[j]] + "</td></tr>"; i++;}
     mytable += "</table>";
    document.getElementById("mytable").innerHTML = mytable;
}