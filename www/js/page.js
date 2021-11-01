function page1(){

    var elem = document.getElementById("page1");
    var elem2 = document.getElementById("page2");
    var elem3 = document.getElementById("page3");
    var top = document.getElementById("top");
    var from = document.getElementById("from");

    if(getComputedStyle(elem).display != "none"){
                
        elem.style.display = "none";
        top.innerHTML = "Top"
    }else{
        elem.style.display = "block"; 
        elem2.style.display = "none"; 
        elem3.style.display = "none"; 
        top.innerHTML = "Top 1";
        from.style.display = "none";

    }
}

function page2(){

    var elem = document.getElementById("page1");
    var elem2 = document.getElementById("page2");
    var elem3 = document.getElementById("page3");
    var top = document.getElementById("top");
    var from = document.getElementById("from");

    if(getComputedStyle(elem2).display != "none"){
                
        elem2.style.display = "none";
        top.innerHTML = "Top"
    }else{
        elem.style.display = "none"; 
        elem2.style.display = "block"; 
        elem3.style.display = "none"; 
        top.innerHTML ="Top 2";
        from.style.display = "none";
    }
}
function page3(){

    var elem = document.getElementById("page1");
    var elem2 = document.getElementById("page2");
    var elem3 = document.getElementById("page3");
    var top = document.getElementById("top");
    var from = document.getElementById("from");


    if(getComputedStyle(elem3).display != "none"){
                
        elem3.style.display = "none";
        top.innerHTML = "Top"
    }else{
        elem.style.display = "none"; 
        elem2.style.display = "none"; 
        elem3.style.display = "block"; 
        top.innerHTML ="Top 3"
        from.style.display = "none";
    }
}

function formulaire(){
    var elem = document.getElementById("page1");
    var elem2 = document.getElementById("page2");
    var elem3 = document.getElementById("page3");
    var top = document.getElementById("top");
    var from = document.getElementById("from");

    if(getComputedStyle(from).display != "none"){
                
        from.style.display = "none";
        top.innerHTML = "Top"
    }else{
        elem.style.display = "none"; 
        elem2.style.display = "none"; 
        elem3.style.display = "none"; 
        top.innerHTML ="fromuaire"
        from.style.display = "block";
    }
}