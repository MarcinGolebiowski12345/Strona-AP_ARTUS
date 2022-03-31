const addTextOne = document.querySelector('[data-more-one]');
const textOne = document.querySelector('[data-text-one]');
const addTextTwo = document.querySelector('[data-more-two]');
const textTwo = document.querySelector('[data-text-two]');
const addTextThree = document.querySelector('[data-more-three]');
const textThree = document.querySelector('[data-text-three]');
const addTextFour = document.querySelector('[data-more-four]');
const textFour = document.querySelector('[data-text-four]');
const addTextFive = document.querySelector('[data-more-five]');
const textFive = document.querySelector('[data-text-five]');
const addTextSix = document.querySelector('[data-more-six]');
const textSix = document.querySelector('[data-text-six]');
const addTextSeven = document.querySelector('[data-more-seven]');
const textSeven = document.querySelector('[data-text-seven]');
const addTextEight = document.querySelector('[data-more-eight]');
const textEight = document.querySelector('[data-text-eight]');
const addTextNine = document.querySelector('[data-more-nine]');
const textNine = document.querySelector('[data-text-nine]');
const addTextTen = document.querySelector('[data-more-ten]');
const textTen = document.querySelector('[data-text-ten]');


addTextOne.addEventListener('click', function () {
    if(addTextOne.textContent == "więcej"){
        textOne.classList.add('addText');
        textOne.classList.remove('text');
        textOne.classList.remove('removeText');
        addTextOne.textContent = "mniej";
        console.log(textOne.classList)
    }
    else if(addTextOne.textContent == "mniej"){
        textOne.classList.add('removeText');
        textOne.classList.add('text');
        textOne.classList.remove('addText');
        addTextOne.textContent = "więcej";
    }  
})

addTextTwo.addEventListener('click', function () {
    if(addTextTwo.textContent == "więcej"){
        textTwo.classList.add('addText');
        textTwo.classList.remove('text');
        textTwo.classList.remove('removeText');
        addTextTwo.textContent = "mniej";
    }
    else if(addTextTwo.textContent == "mniej"){
        textTwo.classList.add('removeText');
        textTwo.classList.add('text');
        textTwo.classList.remove('addText');
        addTextTwo.textContent = "więcej";
    }  
})

addTextThree.addEventListener('click', function () {
    if(addTextThree.textContent == "więcej"){
        textThree.classList.add('addText');
        textThree.classList.remove('text');
        textThree.classList.remove('removeText');
        addTextThree.textContent = "mniej";
    }
    else if(addTextThree.textContent == "mniej"){
        textThree.classList.add('removeText');
        textThree.classList.add('text');
        textThree.classList.remove('addText');
        addTextThree.textContent = "więcej";
    }  
})

addTextFour.addEventListener('click', function () {
    if(addTextFour.textContent == "więcej"){
        textFour.classList.add('addText');
        textFour.classList.remove('text');
        textFour.classList.remove('removeText');
        addTextFour.textContent = "mniej"
    }
    else if(addTextFour.textContent == "mniej"){
        textFour.classList.add('removeText');
        textFour.classList.add('text');
        textFour.classList.remove('addText');
        addTextFour.textContent = "więcej";
    }  
})

addTextFive.addEventListener('click', function () {
    if(addTextFive.textContent == "więcej"){
        textFive.classList.add('addText');
        textFive.classList.remove('text');
        textFive.classList.remove('removeText');
        addTextFive.textContent = "mniej";
    }
    else if(addTextFive.textContent == "mniej"){
        textFive.classList.add('removeText');
        textFive.classList.add('text');
        textFive.classList.remove('addText');
        addTextFive.textContent = "więcej";
    }  
})

addTextSix.addEventListener('click', function () {
    if(addTextSix.textContent == "więcej"){
        textSix.classList.add('addText');
        textSix.classList.remove('text');
        textSix.classList.remove('removeText');
        addTextSix.textContent = "mniej";
    }
    else if(addTextSix.textContent == "mniej"){
        textSix.classList.add('removeText');
        textSix.classList.add('text');
        textSix.classList.remove('addText');
        addTextSix.textContent = "więcej";
    }  
})

addTextSeven.addEventListener('click', function () {
    if(addTextSeven.textContent == "więcej"){
        textSeven.classList.add('addText');
        textSeven.classList.remove('text');
        textSeven.classList.remove('removeText');
        addTextSeven.textContent = "mniej";
    }
    else if(addTextSeven.textContent == "mniej"){
        textSeven.classList.add('removeText');
        textSeven.classList.add('text');
        textSeven.classList.remove('addText');
        addTextSeven.textContent = "więcej";
    }  
})

addTextEight.addEventListener('click', function () {
    if(addTextEight.textContent == "więcej"){
        textEight.classList.add('addText');
        textEight.classList.remove('text');
        textEight.classList.remove('removeText');
        addTextEight.textContent = "mniej";
    }
    else if(addTextEight.textContent == "mniej"){
        textEight.classList.add('removeText');
        textEight.classList.add('text');
        textEight.classList.remove('addText');
        addTextEight.textContent = "więcej";
    }
})

addTextNine.addEventListener('click', function () {
    if(addTextNine.textContent == "więcej"){
        textNine.classList.add('addText');
        textNine.classList.remove('text');
        textNine.classList.remove('removeText');
        addTextNine.textContent = "mniej";
    }
    else if(addTextNine.textContent == "mniej"){
        textNine.classList.add('removeText');
        textNine.classList.add('text');
        textNine.classList.remove('addText');
        addTextNine.textContent = "więcej";
    }  
})

addTextTen.addEventListener('click', function () {
    if(addTextTen.textContent == "więcej"){
        textTen.classList.add('addText');
        textTen.classList.remove('text');
        textTen.classList.remove('removeText');
        addTextTen.textContent = "mniej";
    }
    else if(addTextTen.textContent == "mniej"){
        textTen.classList.add('removeText');
        textTen.classList.add('text');
        textTen.classList.remove('addText');
        addTextTen.textContent = "więcej";
    }
})
