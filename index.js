
let scrolls = window.innerWidth <= 768 ? 252 : 400;

function updateScrolls() {
    scrolls = window.innerWidth <= 768 ? 252 : 400;
}





let mainbox=document.getElementById('imagediv')
let images=document.querySelectorAll('.slider-image')
let x=1;

//scrolling
document.getElementById('left').addEventListener('click',function(){
    mainbox.scrollLeft-=scrolls
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
    mainbox.scrollLeft+=scrolls
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


//media query in js 

// Media query listener
let mediaQuery = window.matchMedia("(max-width: 768px)");

function handleMediaChange(e) {
    updateScrolls(); 
    console.log("Screen size changed. Scroll step:", scrolls);
}

// Check on initial load
handleMediaChange(mediaQuery);

// Listen for media query changes
mediaQuery.addEventListener("change", handleMediaChange);
