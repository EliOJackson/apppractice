console.log("ms1 review");

let dogContent = document.getElementById("dogs");
let rainbowContent = document.getElementById("rainbows");

let dogPics = {
    pics: [
        {url: "img/dog1.jpeg", title: "Happy Dog"},
        {url: "img/dog2.jpeg", title: "Fuzzy Dog"},
        {url: "img/dog3.jpeg", title: "Barking Dog"},
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