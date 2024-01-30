const answer1 = document.querySelector('.the-answer1');
const answer2 = document.querySelector('.the-answer2');
const answer3 = document.querySelector('.the-answer3');
const answer4 = document.querySelector('.the-answer4');
const plus1 = document.querySelector('.plus1');
const plus2 = document.querySelector('.plus2');
const plus3 = document.querySelector('.plus3');
const plus4 = document.querySelector('.plus4');
const minus1 = document.querySelector('.minus1');
const minus2 = document.querySelector('.minus2');
const minus3 = document.querySelector('.minus3');
const minus4 = document.querySelector('.minus4');
function extend() {
    if(answer1.style.maxHeight=="0px"){
        answer1.style.maxHeight="350px";
        answer1.style.padding="15px"
        plus1.style.display="none"
        minus1.style.display="inline"
    }else{
        answer1.style.maxHeight="0px";
        answer1.style.padding="0px"
        plus1.style.display="inline"
        minus1.style.display="none"
    }
}
function extend2() {
    if(answer2.style.maxHeight=="0px"){
        answer2.style.maxHeight="350px";
        answer2.style.padding="15px"
        plus2.style.display="none"
        minus2.style.display="inline"
    }else{
        answer2.style.maxHeight="0px";
        answer2.style.padding="0px"
        plus2.style.display="inline"
        minus2.style.display="none"
    }
}
function extend3() {
    if(answer3.style.maxHeight=="0px"){
        answer3.style.maxHeight="350px";
        answer3.style.padding="15px"
        plus3.style.display="none"
        minus3.style.display="inline"
    }else{
        answer3.style.maxHeight="0px";
        answer3.style.padding="0px"
        plus3.style.display="inline"
        minus3.style.display="none"
    }
}
function extend4() {
    if(answer4.style.maxHeight=="0px"){
        answer4.style.maxHeight="350px";
        answer4.style.padding="15px"
        plus4.style.display="none"
        minus4.style.display="inline"
    }else{
        answer4.style.maxHeight="0px";
        answer4.style.padding="0px"
        plus4.style.display="inline"
        minus4.style.display="none"
    }
}