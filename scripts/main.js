const myImage = document.querySelector('#team_photo');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ac-dc-team.jpg') {
        myImage.setAttribute ('src','images/ac-dc-team2.jpg');
    } else {
        myImage.setAttribute ('src','images/ac-dc-team.jpg');
    }
}

