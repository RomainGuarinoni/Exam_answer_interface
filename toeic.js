let start_button = document.getElementById("begin");
let stop_button = document.getElementById("stop");
let next_button = document.getElementById("next");
let previous_button = document.getElementById("previous");
let a_button = document.getElementById("a");
let b_button = document.getElementById("b");
let c_button = document.getElementById("c");
let d_button = document.getElementById("d");
let question=1;
let const_question;
let id_array;
let pas=1;
let color;
let advanced=false;
let open=false;
let question_number;

document.getElementById("wtf").addEventListener('click',function(){
    if(open==false){
        document.getElementById("advanced_option").style.display="block";
        open=true;
    }
    else{
        document.getElementById("advanced_option").style.display="none";
        open=false;
    }
});
document.getElementById("dark").addEventListener('click',function(){
    if(document.getElementById("dark").checked==true){
        //modif dark mode
        document.getElementById("body").style.background="black";
        document.getElementById("body").style.color="white"
        document.getElementById("number").style.color="white";
        document.getElementById("depart_question").style.color="white";
        document.getElementById("pas").style.color="white";
        document.getElementById("color").value="#ffffff";
        let array_inputbox=document.getElementsByClassName("input_box");
        for(let i=0;i<array_inputbox.length;i++){
            array_inputbox[i].style.borderBottom="1px solid white"
        }
    }
    else{
        document.getElementById("body").style.background="white";
        document.getElementById("body").style.color="black";
        document.getElementById("number").style.color="black";
        document.getElementById("depart_question").style.color="black";
        document.getElementById("pas").style.color="black";
        document.getElementById("color").value="#00000";
        let array_inputbox=document.getElementsByClassName("input_box");
        for(let i=0;i<array_inputbox.length;i++){
            array_inputbox[i].style.borderBottom="1px solid black"
        }
    }
});
start_button.addEventListener('click',function(){
    pas=1;
    question=1;
    if(document.getElementById("number").value!=""){
        if(document.getElementById("depart_question").value!=""){
            question=Number(document.getElementById("depart_question").value);
        }
        if(document.getElementById("pas").value!=""){
            pas=Number(document.getElementById("pas").value);
        }
        question_number=Number(document.getElementById("number").value);
        document.getElementById("begin").disabled=false;
        stop_button.disabled=false;
        start_button.disabled=true;
        document.getElementById("form").style.display="none";
        document.getElementById("main").style.height="auto";
        document.getElementById("section").style.display="block";
        document.getElementById("question_number").innerHTML=question;
        const_question=question;
        id_array=question-const_question;
        for(let i=0;i<question_number;i++){
            let p = document.createElement('p');
            p.style.color=document.getElementById("color").value;
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
    }
    else{
        alert("vous n'avez pas saisi le nombre de questions");
    }
});
let span_question_array=document.getElementsByClassName("span_question");
let span_answer_array = document.getElementsByClassName("span_answer");
let tiret_array = document.getElementsByClassName("tiret");
const next=()=>{
    if (question>=((question_number+const_question)-1)+(question_number-1)*(pas-1)){
        document.getElementById("end").innerHTML="<p>Le test est terminé</p>";
        document.getElementById("end").style.display="block";
    }
    else {
        question+=pas;
        document.getElementById("question_number").innerHTML=question;
        id_array=(question-const_question)/pas;
    }
}
const previous=()=>{
    if(question>const_question){
        question-=pas;
        document.getElementById("question_number").innerHTML=question;
        document.getElementById("end").innerHTML=""; 
        id_array=(question-const_question)/pas;
    }
}
const display_answer=(question, answer)=>{
    span_question_array[id_array].innerHTML=question;
    tiret_array[id_array].innerHTML= " - ";
    span_answer_array[id_array].innerHTML=answer;
    console.log(id_array);
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
    start_button.disabled=false;
    document.getElementById("section").style.display="none";
    document.getElementById("end").style.display="none";
    document.getElementById("advanced_option").style.display="none";
    document.getElementById("form").style.display="flex";
    document.getElementById("form").style.flexDirection="column";
    document.getElementById("form").style.alignItems="center";
    document.getElementById("number").value="";
    document.getElementById("pas").value="";
    document.getElementById("depart_question").value="";
    open=false;
    question=1;
});