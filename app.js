console.log("Hello");

const images = [
  "https://www.eatingwell.com/thmb/qoWzdXftJA93brx0oWYolnRh76M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-a-fig-how-to-eat-figs-91f18e8d13f947889d7c3deb75b68a79.jpg",
  "https://cdn.britannica.com/25/182625-050-327FAC9B/Nectarine-fruits.jpg",
  "https://i.ndtvimg.com/i/2015-10/kiwi-fruit_625x350_81445871711.jpg",
  "https://www.usatoday.com/gcdn/-mm-/ac688eec997d2fce10372bf71657297ff863814d/c=171-0-1195-768/local/-/media/2021/04/06/USATODAY/usatsports/gettyimages-174959827.jpg",
];

const firstImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => {
  const imageTag = document.getElementById("image");
  currentImage++;
  if (currentImage >= lastImage) {
    currentImage = 3;
  }
  imageTag.src = images[currentImage];
});

const prevButton = document.getElementById("prev");
prevButton.addEventListener("click", () => {
  const imageTag = document.getElementById("image");
  currentImage--;
  if (currentImage <= firstImage) {
    currentImage = 0;
  }
  imageTag.src = images[currentImage];
});
