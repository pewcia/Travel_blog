window.addEventListener("scroll", function() {
    let button= document.getElementById ("scroll_to_top");
    if (window.pageYOffset>100) {
        button.style.display= "block"
    }
    else{
        button.style.display="none"
    }

    });


document.getElementById("scroll_to_top").addEventListener("click", function (){
window.scrollTo ( {
    top:0,
    behavior:"smooth"
});
});