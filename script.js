var day = moment().format("dddd , MMM Do");
$("#currentDay").text(day);


$(".glyphicon").on("click",function(){
   var saveEvent = localStorage.setItem("event", JSON.stringify(input.value));
   console.log(localStorage.getItem("event"));
   $('#input').text(localStorage.getItem("event"));
   

})
