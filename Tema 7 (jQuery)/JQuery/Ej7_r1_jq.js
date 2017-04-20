$(document).ready(function(){
    alert("Page loaded");
    
// alert to show that the page is loaded.
//function load(){
//    alert("Page loaded");
//}

// function that raise an alert when a paragraph is clicked.
$("p").click(function(){
    alert ("you clicked a paragraph");
}); 

// function that hide the paragraph with id = hider. // Also hide the tr rows of the second table. 
$(".hider").click(function(){
    $(this).hide("slow");
});

// Insert the # character in front of each li element.
$("li").prepend("#");

// Function that hide the li elements when are clicked.
$("li").click(function(){
   $(this).hide("slow"); 
});

// Change all the texts of the links elements to "link".
$("a").text("link");

// Change the color of the elements of the table and change their color between blue or white.
$("td").click(function(){
    if($(this).css("background-color")=="blue"){
        $(this).css("background-color", "white");
    }
    else{
        $(this).css("background-color", "blue"); 
    }

});

});

// alerts that use the buttons to show head and body. 
function headAlert(){
    alert ($("head").html());
}

function bodyAlert(){
    alert ($("body").html());
}
