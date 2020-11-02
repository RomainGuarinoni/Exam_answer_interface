let start_button = document.getElementById("begin");
let stop_button = document.getElementById("stop");
let next_button = document.getElementById("next");
let previous_button = document.getElementById("previous");
let a_button = document.getElementById("a");
let b_button = document.getElementById("b");
let c_button = document.getElementById("c");
let d_button = document.getElementById("d");
let already_begin=false;
let question =1;
let question_number;

start_button.addEventListener('click',function(){
    if(document.getElementById("number").value!=""){
        question_number=document.getElementById("number").value;
        document.getElementById("begin").disabled=false;
        stop_button.disabled=false;
    start_button.disabled=true;
    document.getElementById("form").style.display="none";
    document.getElementById("main").style.height="auto";
    document.getElementById("section").style.display="block";
    document.getElementById("question_number").innerHTML=question;
    for(let i=0;i<question_number;i++){
        let p = document.createElement('p');
        p.classList.add("p_answer");
        document.getElementById("result_box").appendChild(p);
        let span = document.createElement('span');
        span.classList.add('span_question');
        let tiret = document.createElement('span');
        tiret.classList.add("tiret");
        let span2=document.createElement('span');
        span2.classList.add('span_answer');
        p.appendChild(span);
        p.appendChild(tiret);
        p.appendChild(span2);
    }
    already_begin=true;
    } 
});
let span_question_array=document.getElementsByClassName("span_question");
let span_answer_array = document.getElementsByClassName("span_answer");
let tiret_array = document.getElementsByClassName("tiret");
const next=()=>{
    if (question>=question_number){
        document.getElementById("end").innerHTML="<p>Le test est terminé</p>";
        document.getElementById("end").style.display="block";
    }
    else {
        question++;
        document.getElementById("question_number").innerHTML=question;
    }
}
const previous=()=>{
    if(question>1){
        question--;
        document.getElementById("question_number").innerHTML=question; 
    }
}
const display_answer=(question, answer)=>{
    span_question_array[question-1].innerHTML=question;
    tiret_array[question-1].innerHTML= " - ";
    span_answer_array[question-1].innerHTML=answer;
}

next_button.addEventListener('click',function(event){
    next();
    event.stopPropagation;
});
previous_button.addEventListener('click', function(event){
    previous();
    event.stopPropagation;
});
a_button.addEventListener('click',function(event){
    event.stopPropagation;
    display_answer(question, "A");
    next();
});
b_button.addEventListener('click',function(event){
    event.stopPropagation;
    display_answer(question, "B");
    next();
});
c_button.addEventListener('click',function(event){
    event.stopPropagation;
    display_answer(question, "C");
    next();
});
d_button.addEventListener('click',function(event){
    event.stopPropagation;
    display_answer(question, "D");
    next();
});

document.getElementById("stop").addEventListener('click',function(){
    var p_list = document.getElementsByTagName("p");
    for(var i=p_list.length-1; i>=0; i--){
        var p = p_list[i];
        if(p.className === "p_answer"){
            p.parentNode.removeChild(p);
        }
    }
    stop_button.disabled=true;
    start_button.disabled=true;
    document.getElementById("section").style.display="none";
    document.getElementById("form").style.display="block";
});