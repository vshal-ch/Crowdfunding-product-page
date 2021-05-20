let changeRange = function(v){
    rangeBar.value = v;
    let rvalue = (rangeBar.value-rangeBar.min)/(rangeBar.max-rangeBar.min)*100;
    rangeBar.style.background = 'linear-gradient(to right, #3cb4ac 0%, #3cb4ac ' + rvalue + '%, #e7e7e7 ' + rvalue + '%, #e7e7e7 100%)';
};

const rangeBar = document.querySelector('#range-bar');

changeRange(89914);

const hamburgur = document.querySelector('.hamburgur');
const backModal = document.querySelector('.back-modal');
const navLinks = document.querySelector('.nav-links');

hamburgur.addEventListener('click',() => {
    backModal.classList.toggle('active');
    navLinks.classList.toggle('active');
    if(backModal.classList.contains('active')){
        hamburgur.innerHTML='<img src="./images/icon-close-menu.svg" alt="hamburger">';
    }
    else if(!(backModal.classList.contains('active'))){
        hamburgur.innerHTML='<img src="./images/icon-hamburger.svg" alt="close">';
    }
});

backModal.addEventListener('click',() => {
    backModal.classList.remove('active');
    navLinks.classList.remove('active');
    if(backModal.classList.contains('active')){
        hamburgur.innerHTML='<img src="./images/icon-close-menu.svg" alt="hamburger">';
    }
    else if(!(backModal.classList.contains('active'))){
        hamburgur.innerHTML='<img src="./images/icon-hamburger.svg" alt="close">';
    }
});


const backThisModal = document.querySelector('.backing-button');
const modal = document.querySelector('.modal-contianer');
const closeModal = document.querySelector('.close-icon');
const backThis = document.querySelector('.back-this-project-modal');

backThisModal.addEventListener('click', () => {
    modal.classList.add('active');
    backThis.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    backThis.classList.remove('active');
});

const radioButton = document.querySelectorAll('.select-radio');
const pledgeInput = document.querySelectorAll('.pledge-input');
const box = document.querySelectorAll('.box');

for(let i=0;i<radioButton.length;i++){
    if(radioButton[i].checked == true){
        box[i].classList.add('active');
        pledgeInput[i].classList.add('active');
    }
    radioButton[i].addEventListener('input',() => {
        for(let j=0;j<box.length;j++){
            box[j].classList.remove('active');
            pledgeInput[j].classList.remove('active');
        }
        if(radioButton[i].checked == true){
            box[i].classList.add('active');
            pledgeInput[i].classList.add('active');
        }
        
    });
}

const continueButton = document.querySelectorAll('.continue');
const thanksModel = document.querySelector('.complete-modal');
const inputPrice = document.querySelectorAll('.input-contaier>input');
const money = document.getElementById('money');
const totalBackers = document.getElementById('total-backers');

console.log(inputPrice[1].value);
console.log(money.innerHTML);
console.log(totalBackers.innerHTML);

for(let i=0;i<continueButton.length;i++){
    continueButton[i].addEventListener('click',() => {
        thanksModel.classList.add('active');
        backThis.classList.remove('active');
        totalBackers.innerHTML = (Number.parseInt(totalBackers.innerHTML.replace(',',''))+1).toString();
        if(i!=0){
            let p = Number.parseInt(inputPrice[i-1].value);
            let n = Number.parseInt(money.innerHTML.replace(',','').substring(1))+p;
            console.log(p);
            money.innerHTML = n.toString();
            changeRange(n);
        }
    });
}

const gotIt = document.querySelector('.got-it');

gotIt.addEventListener('click',() => {
    modal.classList.remove('active');
    backThis.classList.remove('active');
    thanksModel.classList.remove('active');
})

const bookmark = document.querySelector('.bookmark');
const label = document.querySelector('.bookmark-label');

bookmark.addEventListener('click',() => {
    bookmark.classList.toggle('bookmarked');
    if(label.innerText == 'Bookmark'){
        label.innerText = 'Bookmarked';
    }else if(label.innerText == 'Bookmarked'){
        label.innerText = 'Bookmark';
    } 
});

