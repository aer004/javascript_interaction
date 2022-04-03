var halfButton;
var halfInput;
var fortuneButton;
var fortuneInput;
var fortuneOutputContainer;
var fortuneOutputText;
var restyleButton;

var fortune_verbs = ["may","must","might","should","can"]
var fortune_verbs_2 = ["laugh","cry","play","want","hope"]
var fortune_time = ["soon","in time","tomorrow","next year","next week"]

document.addEventListener("DOMContentLoaded", function(){
  halfButton = document.getElementById("half-button");
  halfInput = document.getElementById("half-input");
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutputContainer = document.getElementById("fortune-output-container");
  fortuneOutputText = document.getElementById("fortune-output-text");
  restyleButton = document.getElementById("restyle-button");

  halfButton.addEventListener("click", function(){
    var currentHalfInput = halfInput.value;;
    halfNumber(currentHalfInput);
  });

  fortuneButton.addEventListener("click", function(){
    var currentFortuneInput = fortuneInput.value;
    fortune(currentFortuneInput);
  });

  restyleButton.addEventListener("click", restyle);
});

function halfNumber(num){
  halved_num = num / 2;
  alert(halved_num);
  var to_print = "Half of " + num.toString() + " is " + halved_num.toString();
  console.log(to_print);
}

function fortune(name){
  var fortune_output = name + ", you";
  fortune_output += " " + fortune_verbs[Math.floor(Math.random() * fortune_verbs.length)];
  fortune_output += " " + fortune_verbs_2[Math.floor(Math.random() * fortune_verbs_2.length)];
  fortune_output += " " + fortune_time[Math.floor(Math.random() * fortune_time.length)] + ".";
  fortuneOutputText.innerText = fortune_output;
  var randomFont = Math.random() * name.length;
  var randomFont2 = Math.random() * name.length;
  var randomFont3 = Math.random() * name.length;
  fortuneOutputText.style.fontSize = (randomFont+randomFont2+randomFont3)+ "rem";
}

function restyle(){
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  fortuneOutputContainer.style.backgroundColor = outputColorString;
  var randomLength = Math.random() * 360;
  var randomPx = Math.random() * randomLength;
  var randomPx2 = Math.random() * randomLength;
  var randomPx3 = Math.random() * randomLength;
  fortuneOutputText.style.textShadow = randomPx + "px " + randomPx2 + "px " + randomPx3 + "px #fff";
  fortuneOutputContainer.style.transform = "rotate(" + randomLength + "deg)";
}

// Write a function called restyle that applies new CSS
// styles to the fortune text in a random manner. Modify at least three CSS properties.
