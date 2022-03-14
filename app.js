
const startBtn = document.querySelector("#start");
const container = document.querySelector('.container')
const nextBtn = document.querySelector("#next");
const form = document.querySelector("#form");
const answers = document.querySelector("#answers");
const questionTitle = document.querySelector("#question");
const body = document.querySelector('body')
const resetBtn = document.querySelector('animateTransform')
console.log(body)
let questions  ;
let currentIndex, shuffleQuestions;
function resetForm(){
   questionTitle.innerHTML =''
   answers.innerHTML='' 
   console.log('reset')
    // nextBtn.classList =''
  
    
}
function endgame(){
    resetForm()
    nextBtn.classList.add('hide')
    startBtn.classList.remove='hide'
}

async function fetchData(){
   questions = await fetch('http://localhost:5000/api/question')
   .then(res=>res.json())
   .then(res=>res) 
    return questions
}

async function  startGame() {
    await fetchData()
  
    startBtn.addEventListener("click", () => {
    nextBtn.classList.remove("hide");
    startBtn.classList.add("hide");
    form.classList.remove("hide");
    shuffleQuestions = questions.sort(()=>Math.random()- .5)
    currentIndex =0 ;
   let question = shuffleQuestions[currentIndex]
   displayForm(question)
});
}
function displayForm(question){
    questionTitle.innerHTML = question.question
    question.answers.forEach(ques=>{
    var button = document.createElement('button')
    button.innerText =ques.text
    button.classList.add('btn')
    button.classList.add('answer')
    button.addEventListener('click',()=>{
       if(ques.correct){
            
        button.classList.add('true')

        }else{
           button.classList.add('false')
        
        }
        // console.log(Array.from(answers.children))
        Array.from(answers.children).map(answer=>{
            // console.log(answer)
             if(!ques.correct){
                body.classList ='' 
                button.classList.add('false')
                 body.classList.add('false-bg')
             }else{
                 body.classList =''
                 body.classList.add('true-bg')
             }    
        })
    })
       

    answers.appendChild(button);
   
    })
}

nextBtn.addEventListener("click", () => {
    resetForm()
    currentIndex++
    if(currentIndex == questions.length){
        currentIndex =0 ;
        resetForm()
        console.log(currentIndex)
        startBtn.classList.remove('hide')
        nextBtn.classList.add('hide')
    }
    
        if(currentIndex)
        displayForm(shuffleQuestions[currentIndex])
    });
        
     
    
 function resetGame(){
     currentIndex=0 ;
     resetForm()
     startGame()
 }

startGame();

