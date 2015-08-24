
$(document).ready(function(){
	$("#title").click(function(){
        $(".project").show();
        $("#port").css("overflow-y", "scoll");
	});
});



$(document).ready(function () {
    var b1 = "STOP";
    var b2 = "LOOK";
    var b3 = "LISTEN";

    var billArray = [b1, b2, b3];
    
    function animateText(i, myArray) {
        $('#slogan').fadeIn(1000).text(myArray[i]);
        $('#slogan').slideRight(40).delay(4000).fadeOut(1000);
    }
    
    var x = 0;
    
    setInterval(function() {
        if(x > 2) {
            x = 0;    
        }
        animateText(x, billArray);
        x++;
    }, 5000);

});