const gallery = document.getElementById("gallery");
const title2 = document.getElementById("title");

const imageIndexes = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45,
];
// const image = document.getElementById("image");

// imageIndexes.forEach((i) => {
//   image.src = `./galllery/XPARROT-0${i}.jpeg`;
//   image.alt = `XParrot image ${i}`;
// });

imageIndexes.forEach((i) => {
  const div = document.createElement("div");
  div.classList.add("col-lg-3", "col-4", "px-3");
  const image = document.createElement("img");
  image.src = `./galllery/XPARROT-0${i}.jpeg`;
  image.alt = `XParrot image ${i}`;
  image.classList.add("img-fluid", "rounded-3", "mt-4");
  gallery.appendChild(div);
  div.appendChild(image);

  const title = document.createElement("p");
  title.innerHTML = `XParrot #0${i}`;
  title.classList.add("p-text", "text-center", "my-3");
  div.appendChild(title);
});
