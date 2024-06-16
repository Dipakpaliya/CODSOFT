function add(str){
    let a=document.getElementById('display');
    a.value+=str;
}
function remove(){
    let a=document.getElementById('display');
    let text=a.value;
    text=text.substring(0,text.length-1);
    a.value=text;
}
function AllClear(){
    let a=document.getElementById('display');
    a.value='';
}
function percentage(){
    let a=document.getElementById('display');
    a.value=eval(a.value)*100+'%';
}
function result(){
    let a=document.getElementById('display');
    let answer=eval(a.value);
    a.value=answer;
}
