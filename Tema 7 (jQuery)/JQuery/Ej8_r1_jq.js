function load(){
    console.log("loaded");
}

function upsize(){
    size = $("div").css("font-size");
    if (size == "15px"){
        $("div").css("font-size", "16px");
    }
    
    if (size == "16px"){
        $("div").css("font-size", "17px");
    }
    
    if (size == "17px"){
        $("div").css("font-size", "18px");
    }
}

function downsize(){
    
    size = $("div").css("font-size");
    if (size == "18px"){
        $("div").css("font-size", "17px");
    }
    
    if (size == "17px"){
        $("div").css("font-size", "16px");
    }
    
    if (size == "16px"){
        $("div").css("font-size", "15px");
    } 
}

$("div").click(function(){
    $(this).children("p").toggle("slow");
});

$("p").mouseenter(function(){
   $(this).css("background-color", "#58FAF4"); 
});

$("p").mouseleave(function(){
   $(this).css("background-color", "white"); 
});