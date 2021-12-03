const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
  ];
  const bgBtn = document.querySelector("#bgimg");
  const changeBgBtn = document.querySelector("#change-bg-btn");
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  
  bgImage.src = `img/${chosenImage}`;
  document.body.appendChild(bgImage);
  

  function removeBgImage() {
    const bgImageToRemove = document.querySelector("img");
    document.body.removeChild(bgImageToRemove);
  }
  
  function clockBtnChangeBg(event) {
    event.preventDefault();
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement("img");
    bgImage.src = `img/${chosenImage}` ;
    document.body.appendChild(bgImage);
    removeBgImage();
  }
  
  bgBtn.addEventListener("click", clockBtnChangeBg);
 
