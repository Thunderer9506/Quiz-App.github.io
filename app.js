let stateMode = 0
const choice = document.querySelectorAll(".choice")
const subjects = document.querySelectorAll(".subjects Button")
let subject = ""

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

getsubjectValue()
