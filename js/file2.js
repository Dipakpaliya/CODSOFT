console.log("aLL OK");

function menu(str){
    console.log("here");
    let a=document.getElementById(str);
    
    if(a.style.display=='none'){
        a.style.display='block';
    }
    else{
        a.style.display='none';
}
}
let var1=document.getElementById('hammenu');
if(window.innerWidth > 1200){
    var1.style.display='none';
}
