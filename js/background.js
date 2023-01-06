const imgsArray = ["ocean (1).jpg", "ocean (2).jpg", "ocean (3).jpg"];
const selectedImg = imgsArray[Math.floor(Math.random() * imgsArray.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${selectedImg}`;
bgImg.classList.add("bg-img");
document.body.appendChild(bgImg);