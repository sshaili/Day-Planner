var day = moment().format("dddd , MMM Do");
    $("#currentDay").text(day);

$(document).ready(function(){
   
    var timeArray = ["9","10","11","12","13","14","15","16","17"];

    for (var i = 0; i < timeArray.length; i++){
            $('.container').append(`<div class="row time-block" id=block${timeArray[i]}> 

            <div class="col-1 hour" id=time${timeArray[i]}>${timeArray[i]}</div>

            <textarea class="col-7 description" id=event${timeArray[i]}></textarea> 

            <button class="col-1 saveBtn i far fa-save" id=btn${timeArray[i]}></i></button> 

            </div>`);
            }
            timeSetUp();
            colorChange();
            eventStore();  
});

function timeSetUp(){

    for (i = 9; i <= 17; i++){
    if(i < 13){
        $("#time"+i).text(i+" AM");
        console.log("ybknk");
    }
    else{
        $("#time"+i).text((i-12)+" PM");
    }
}
}

function colorChange(){
var currentHour = moment().hour();
    for (var i = 9; i <= 17; i++){
        if (i == currentHour) {
            $("#event"+i).addClass("present");
        } 
        else if (i > currentHour){
            $("#event"+i).addClass("future");
        }
        else {
            $("#event"+i).addClass("past");
        } 
    }
}

function eventStore(){
      for ( i = 9; i <= 17; i++){
        $("#event"+i).val(localStorage.getItem("btn"+i));
    } 
$(".saveBtn").click(function() {
    var eventText = $(this.parentNode.children[1]).val();
    localStorage.setItem($(this).attr("id"), eventText);
  });
}