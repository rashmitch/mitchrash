const heroData = [
    {
        imgPath: "./image/rashsan.jpg",
        contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi ullam labore enim. Ullam quam quae doloremque velit neque repellendus repudiandae quod possimus mollitia facere.",
        profile: "Marcus Rashford, COO"
    },
    {
        imgPath: "./image/boot.png",
        contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi ullam labore enim. Ullam quam quae doloremque velit neque repellendus repudiandae quod possimus mollitia facere.",
        profile: "Jadon Sancho, COO"
    },
    {
        imgPath: "./image/mymaan.png",
        contentText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil excepturi ullam labore enim. Ullam quam quae doloremque velit neque repellendus repudiandae quod possimus mollitia facere.",
        profile: "Lanade Mitchelle, COO"
    }
]

//grab the html elements
const imgElem = document.getElementById("photo");
const contentElem = document.querySelector(".content");
const nameElem = document.querySelector(".name");


//set the initial position to zero
let index = 0;

//create a function that populates the container with new data
function updateContainerElem(){

    //destructure the heroData
    const {imgPath, contentText, profile} = heroData[index];
    imgElem.src = imgPath;
    contentElem.innerText = contentText;
    nameElem.innerText = profile;
    index++;

    if(index === heroData.length){
        index = 0;
    }

    setTimeout(() => {
        updateContainerElem()
    }, 3000)
}

updateContainerElem();