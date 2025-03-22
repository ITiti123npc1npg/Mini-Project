let myBtn = document.getElementById("btt")

function scroolFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        myBtn.style.display = "block";
    }else{
        myBtn.style.display = "none";
    }
}


window.onscroll = function(){
    scroolFunction();
}

function backToTop(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}