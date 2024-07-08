const questions =[
    {
        question:"What country has the highest life expectancy? ",
        answers:[
            {text : "India", correct : false},
            {text : "china", correct : false},
            {text : "hong kong", correct : true},
            {text : "korea", correct : false},
        ]
    },
    {
        question:"Which language has the more native speakers? ",
        answers:[
            {text : "Tamil", correct : false},
            {text : "English", correct : false},
            {text : "spanish", correct : true},
            {text : "hindi", correct : false},
        ]
    },
    {
        question:"What is the most common surname in the United States?? ",
        answers:[
            {text : "Franklin", correct : false},
            {text : "max", correct : false},
            {text : "smith", correct : true},
            {text : "Alias", correct : false},
        ]
    },
    {
        question:"What year was the United Nations established? ",
        answers:[
            {text : "1919", correct : false},
            {text : "1939", correct : false},
            {text : "1945", correct : true},
            {text : "2000", correct : false},
        ]
    }
];

const questionArea=document.getElementById("Question");
const answerArea=document.getElementById("answerbtns");
const nxtbutton=document.getElementById("nxtbtn");
const input=document.getElementById("inpname");
let current=0;
let score=0;

function start(){
    current=0;
    score=0;
    nxtbutton.innerHTML="Next";
    showq();
}

function showq(){
    reset();
    let currentquestion=questions[current];
    let qno = current+1;
    questionArea.innerHTML = `${qno}.${currentquestion.question}`;
    currentquestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerArea.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectans);
    });


}

function reset(){
    nxtbutton.style.display="none";
    while(answerArea.firstChild){
        answerArea.removeChild(answerArea.firstChild);
    }
}

function selectans(e){
    const selectbtn= e.target;
    const correct=selectbtn.dataset.correct==="true";
    if(correct){
        selectbtn.classList.add("crt");
        score++;
    }
    else{
        selectbtn.classList.add("wrg");
    }
    Array.from (answerArea.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("crt")
        }
        button.disabled="true";
    });
    nxtbutton.style.display="block";
}


function scored(){
    reset();
    questionArea.innerHTML= `<h3>${input.value}</h3> have scored ${score} out of ${questions.length}`;
    nxtbutton.innerHTML= "play again";
    nxtbutton.style.display="block";
}

function handle(){
    current++;
    if (current<questions.length){
        showq();
    }
    else{
        scored();
    }
}



nxtbutton.addEventListener("click",()=>{
    if(current<questions.length){
        handle();
    }
    else{
        start();
    }
})

start();