let stateMode = 0
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

function getsubjectValue(){
    subjects.forEach((ele, key) => {
        ele.addEventListener("click", () => {
            subject = ele['childNodes'][3].textContent
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
