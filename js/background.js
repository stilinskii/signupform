const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jfif', '5.jfif'];
const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);

const bgImage = document.createElement('img'); //<img>
bgImage.src = `img/${chosenImage}`; //<img>에 소스넣기
document.body.appendChild(bgImage); // 그대로 바디에 붙이기
