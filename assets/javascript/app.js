$(document).ready(function(){


//wordbank
var questionBank = [
	first = {
		question: "Question 1: Who posses the ring at the beginning of the Trilogy?",
		choice: [" Frodo", " Gandalf", " Merry", " Bilbo"],
		answer: " Bilbo"
	},
	second = {
		question: "Question 2: How Many members make up the fellowship of the ring?",
		choice: [" Seven", " Eight", " Nine", " Six"],
		answer: " Nine"
	},
	third = {
		question: "Question 3: Who is the first member of the fellowship to be seperated from the group?",
		choice: [" Legolas", " Gandalf", " Boromir", " Sam"],
		answer: " Gandalf"
	},
	fourth = {
		question: "Question 4: Whom does Aragorn love?",
		choice: [" Eowyn", " Arwen" , " Galadriel", " None of the above"],
		answer: " Arwen"
	},
	fifth = {
		question: "Question 5: Who kills the Witch King in the Return of the King?",
		choice: [" Merry", " Eowyn", " Theoden", " Pippin"],
		answer: " Eowyn"
	},
	sixth = {
		question: "Question 6: What is the name of the capital of Gondor?",
		choice: [" Osgiliath", " Helm's Deep", " Minas Tirith", " Cirith Ungol"],
		answer: " Minas Tirith"
	}
]
function startGame (){
//creating my questions and choices with a for loop
for ( var i = 0; i < questionBank.length ; i++ ) {
	//adding the questions
	var addQuestion = $("<h5>");
	addQuestion.text(questionBank[i].question);
	$("#trivia").append(addQuestion);
 //adding form element for the radio buttons
	var addForm = $("<label>");
	addForm.addClass("question-" + i )
	
	$("#trivia").append(addForm)
	for ( var j = 0; j < questionBank[i].choice.length ; j++){
	//adding radio buttons and choices
		var addChoice = $("<div>").html("<input type='radio' name= 'question" + i + "' value='" + questionBank[i].choice[j] + "' >" + questionBank[i].choice[j])
		addChoice.addClass("indent")
		$(".question-" + i) .append(addChoice)
		

		
	}
	
}


//Adding button to submit your score

var endButton = $("<button>");
	endButton.addClass("text-center endButton")

	endButton.text("See your results");
	
	$("#end-game").append(endButton);

// create timer
var timer = 46

var intervalId;

function run() {
	clearInterval(intervalId);
	intervalId = setInterval(decrement, 1000);
}

function decrement(){
	timer -- ;

	$("#timer").html("<h3> Time Remaining: " + timer + "</h3>");


	if (timer === 0){
		clearInterval(intervalId)

		endOfGame()
	}
	//This function adds up all the values and then shows you how many you have correct when you run out of time

	function endOfGame(){

		
		var correctValues = 0

		$("#trivia").addClass("bottom-padding");

		for ( var i = 0 ; i < questionBank.length; i++){
			if ($('input[name="question' + i + '"]:checked').length > 0){
				if(document.querySelector('input[name="question' + i + '"]:checked').value === questionBank[i].answer) {
					correctValues ++;
				}
			}
		}

	$("#end-game").hide();
	var finalScore = $("<h3>").text("You scored a " + Math.round((correctValues/questionBank.length)*100) +"%")
	$(".results").append(finalScore);
	//Restart button for the game
	var restartButton = $("<button>");
	restartButton.addClass("restartButton");
	
	restartButton.text("Start Game Over");

	$(".results").append(restartButton);

	$(".restartButton").on("click", function(){
		location.reload();
			});
	
		}
}

run()

//creating same functionality as above for the show results button
$(".endButton").on("click", function(){
	clearInterval(intervalId)
	var correctValues = 0

	$("#trivia").addClass("bottom-padding");

	for ( var i = 0 ; i < questionBank.length; i++){
		if ($('input[name="question' + i + '"]:checked').length > 0){
			if(document.querySelector('input[name="question' + i + '"]:checked').value === questionBank[i].answer) {
				correctValues ++;
			}
		}
	}
	// $("#trivia").hide();
	 $("#end-game").hide();
	var finalScore = $("<h3>").text("You scored a " + Math.round((correctValues/questionBank.length)*100) +"%")
	$(".results").append(finalScore);
	
	//Restart button for the game
	var restartButton = $("<button>");
	restartButton.addClass("restartButton");
	
	restartButton.text("Start Game Over");

	$(".results").append(restartButton);

	$(".restartButton").on("click", function(){
		location.reload();
	});
		
})

}
//Then I run the game
startGame()
})



