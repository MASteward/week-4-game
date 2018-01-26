
var total = 0;
var numberGoal = 0;
var randValue = 0;
var losses = 0;
var wins = 0;

function startGame() {

	numberGoal = 0;
	total = 0;

	$("#totalAmount").html(total);

	numberGoal = Math.floor(Math.random()* 101) + 19;
	$("#goalAmount").html(numberGoal);

	generateValue();
}


function generateValue(){
	var randValue = [];
	for (var i = 0; i < 4; i++) {
		console.log(i);
		randValue[i] = Math.floor(Math.random() * 12) + 1;
		$(".crystal" + (i+1)).val(randValue[i]);
	}
	// console.log(crystal1);
	// console.log(crystal2);
	// console.log(crystal3);
	// console.log(crystal4);
}


function totalChecker() {
	if(total === numberGoal) {
		wins++;
		$("#wins").text(wins);
		alert("You win!");
		startGame();
	}

	else if(total > numberGoal) {
		losses++;
		$("#losses").text(losses);
		alert("You Lose! You Suck!");
		startGame();
	}
}

startGame();

$(".crystal").on("click", function() {
	total += parseInt($(this).val());
	$("#totalAmount").text(total);
	totalChecker();
})



