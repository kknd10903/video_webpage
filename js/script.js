$(".box").mouseover(function(){
 $(this).find("video").get(0).play();
});

$(".box").mouseout(function(){
 $(this).find("video").get(0).pause();
});




$(".box1").on("click", function(){
 $(".page1").addClass("active");
 $(".page1").find("video").get(0).play();
});

$(".box2").on("click", function(){
 $(".page2").addClass("active");
 $(".page2").find("video").get(0).play();
});

$(".box3").on("click", function(){
 $(".page3").addClass("active");
 $(".page3").find("video").get(0).play();
});

$(".box4").on("click", function(){
 $(".page4").addClass("active");
 $(".page4").find("video").get(0).play();
});

$(".close").on("click", function(){
 $(".page").removeClass("active");
 $(".page").find("video").get(0).pause();
});