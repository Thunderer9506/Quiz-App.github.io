let stateMode = 0
const icons = {
    'Html': {
        class: 'fa-solid fa-code',
        style: 'background-color: #FFF1E9; color: orange;'
    },
    'Css': {
        class: 'fa-solid fa-brush',
        style: 'background-color: #E0FDEF; color: green;'
    },
    'Js': {
        class: 'fa-brands fa-js',
        style: 'background-color: #EBF0FF; color: blue;'
    },
    'Accessibility': {
        class: 'fa-solid fa-person',
        style: 'background-color: #F6E7FF; color: purple;'
    }
}
const choice = document.querySelectorAll(".choice")
const subjects = document.querySelectorAll(".subjects Button")
const form = document.querySelector("form")
let subject = ""
let option = ""

function switchMode(){
    if (stateMode == 0) {
        console.log("Dark Mode on");
        document.body.style.backgroundColor = "#313E51"
        document.body.style.color = "#fff"
        choice.forEach(element => {
            element.style.backgroundColor = "#fff"
            element.style.color = "#3B4D66"
        });
        stateMode = 1
    } else{
        console.log("Lign Mode on");
        document.body.style.backgroundColor = "#fff"
        document.body.style.color = "#313E51"
        choice.forEach(element => {
            element.style.backgroundColor = "#3B4D66"
            element.style.color = "#fff"
        });
        stateMode = 0
    }
}

function renderQuestionpage(){
    document.querySelector('.subjectIcon').innerHTML = 
    `<i class="${icons[subject].class}"
        style="${icons[subject].style}"></i>
    <h2>${subject}</h2>`

}

function getsubjectValue(){
    subjects.forEach((ele, key) => {
        ele.addEventListener("click", () => {
            subject = ele['childNodes'][3].textContent
            document.querySelector('.container').style.display = 'none'
            document.querySelector('.questionPage').style.display = 'block'
            console.log(subject)
            renderQuestionpage()
        })
    })
}



function userChose(){
    const options = document.querySelectorAll(".options Button")
    const optionArr = Array.from(options).slice(0,4)
    
    optionArr.forEach((ele, key) => {
        ele.addEventListener("click", () => {
            // Remove 'active' from all buttons
            optionArr.forEach(btn => btn.classList.remove('active'));
            // Add 'active' to the clicked button
            ele.classList.add('active');
            // Set the option value
            option = ele.querySelector('p').textContent;
        })
    })
}

function formHandling(){
    form.addEventListener("submit", (event) =>{
        event.preventDefault()        
    })
}
getsubjectValue()
userChose()
// formHandling()
