let mainbox=document.getElementById('imagediv')
let images=document.querySelectorAll('.slider-image')
let x=1;

//scrolling
document.getElementById('left').addEventListener('click',function(){
    mainbox.scrollLeft-=400
    x--;

    //setting buttons hiding
    if (x==1) {
        document.getElementById('left').style.visibility="hidden"
    }
    else{
        document.getElementById('left').style.visibility="visible"
         document.getElementById('right').style.visibility="visible"
    }
})


document.getElementById('right').addEventListener('click',function(){
    mainbox.scrollLeft+=400
    x++;
     //setting buttons hiding
    if (x==21) {
        document.getElementById('right').style.visibility="hidden"
    }
    else{
        document.getElementById('right').style.visibility="visible"
    document.getElementById('left').style.visibility="visible"
    }
})
