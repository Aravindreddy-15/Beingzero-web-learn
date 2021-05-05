function color()
{
    var x=document.getElementsByName("red")[0].value;
    var y=document.getElementsByName("green")[0].value;
    var z=document.getElementsByName("blue")[0].value;
    
    var i=`rgb(${x},${y},${z})`
    document.getElementById("cp").style.backgroundColor=i
}
var x=document.getElementsByName("red")[0].value;
    var y=document.getElementsByName("green")[0].value;
    var z=document.getElementsByName("blue")[0].value;
    
    var i=`rgb(${x},${y},${z})`
    document.getElementById("cp").style.backgroundColor=i