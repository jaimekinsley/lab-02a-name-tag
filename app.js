console.log('hello')


// get my button, the input, and the element I want to change from the dom
const submitButton = document.getElementById('myButton');
const userName = document.getElementById('name-input');
const newName = document.getElementById('name');

// add an event listener that runs the function changeName on click
submitButton.addEventListener('click', changeName);
function changeName(){


// get the name from that input
    const theCurrentStateOfTheInput = userName.value;
// set the content to that input
    newName.textContent = theCurrentStateOfTheInput;
};


    
    