const myImage = document.querySelector('#team_photo');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ac-dc-team.jpg') {
        myImage.setAttribute ('src','images/ac-dc-team2.jpg');
    } else {
        myImage.setAttribute ('src','images/ac-dc-team.jpg');
    }
}
// const myButton = document.querySelector('button');
// const myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
// }

// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }
//
// myButton.onclick = function() {
//     setUserName();
// }
