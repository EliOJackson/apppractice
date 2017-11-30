console.log("ms1 review");

let dogContent = document.getElementById("dogs");
let rainbowContent = document.getElementById("rainbows");
let monkeyBtn = document.getElementById("monkeyfy");
let horseBtn = document.getElementById("horsefy");
let dogH1 = document.getElementById("dogH1");
let horseH1 = document.getElementById("dogH1");

let dogPics = {
    pics: [
        {url: "img/dog1.jpeg", title: "Happy Dog"},
        {url: "img/dog2.jpeg", title: "Fuzzy Dog"},
        {url: "img/dog3.jpeg", title: "Barking Dog"},
    ]
}
let bowPics = {
    pics: [
        {url: "img/rainbow.jpeg", title: "Happy Rainbow"},
        {url: "img/rainbow2.jpeg", title: "Fuzzy Rainbow"},
        {url: "img/rainbow3.jpeg", title: "Barking Rainbow"},
    ]
}



// dynamically create some elements to insert pics into
// make n sections: n is based on number of imgs are avilable
// insert the pictures 
// loop through the images and create sections ne at a time

for (let i=0; i < dogPics.pics.length; i++) {
    // console.log(dogPics.pics[i].url);
    let section = document.createElement("section");
    section.setAttribute("class", "dog-card card");
    section.style.backgroundImage = `url(${dogPics.pics[i].url})`;
    // console.log("section?", section);
    dogContent.appendChild(section);

}
for (let i=0; i < bowPics.picslength; i++) {
    // console.log(dogPics.pics[i].url);
    let section = document.createElement("section");
    section.setAttribute("class", "rainbow-card card");
    section.style.backgroundImage = `url(${bowPics.pics[i].url})`;
    // console.log("section?", section);
    rainbowContent.appendChild(section);

}

// Click on a button and make the pictures swap out with something else
// // event listener on each button
monkeyBtn.addEventListener("click", function() {
    console.log('Is this thing on?');
    monkeyBtn.classList.toggle("monkey");
    let dogCards = document.getElementsByClassName("dog-card");
    for (let i = 0; i < dogCards.length; i++ ) {
        // image change 
        if (this.classList.contains("monkey")) {
        
        dogCards[i].style.backgroundImage = "url(img/dog-monkey.jpeg)";
        // border change 
    } else {
        dogCards[i].style.backgroundImage = `url(${dogPics.pics[i].url})`;
        }
        dogCards[i].classList.toggle("facy-border");
        
    // button text change 
    if (this.classList.contains("monkey")) {
        console.log(this);
        this.innerHTML = "Dogify It!";
        dogH1.innerHTML = "My Awesome Monkey Pics";
    } else {
        this.innerHTML = "Monkeyfy It!";
        dogH1innerHTML = "My Awesome Dog Pics";

    }
// h1 text change 
};
horseBtn.addEventListener("click", function() {
    console.log('Is this thing on?');
    horseBtn.classList.toggle("monkey");
    let horseCards = document.getElementsByClassName("rainbow-card");
    for (let i = 0; i < horseCards.length; i++ ) {
        // image change 
        horseCards[i].style.backgroundImage = "url(img/horse-rainbow.jpeg)";
    
    // border change 
    horseCards[i].classList.toggle("facy-border");
    }
    // button text change 
    if (this.classList.contains("horse")) {
        console.log(this);
        this.innerHTML = "Horsefy It!";
        horseH1.innerHTML = "My Awesome Rainbow Pics";
    } else {
        this.innerHTML = "Rainbowfy It!";
        horseH1.innerHTML = "My Awesome Horse Pics";
    }
// h1 text change 
