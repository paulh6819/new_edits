import "./styles.css";

let fileUpload = document.getElementById("file-upload");

function handleFileSelect(event) {
  let file = event.target.files[0];
  console.log("Selected file:", file);

  if (file && file.type.match(/^image\//)) {
    let reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.id = "uploaded-image";

      document.body.appendChild(img);
    };

    reader.readAsDataURL(file);
    alert("TRICKED YOU!!! Just hacked all your data 😂😂😂 - Paul Henderson");
  } else {
    alert("Invalid file type. Please select an image file.");
  }
}

fileUpload.addEventListener("change", handleFileSelect);

document.querySelectorAll("drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("dragover", (e) => {
    dropZoneElement.classList.add("drop-zone--over");
  });
});

const tree = document.getElementById("monkey");

tree.addEventListener("click", (e) => {
  let div = document.createElement("div");
  div.textContent = "THIS IS MY BIG BOY DIV";
  div.style.fontSize = "32";

  tree.parentNode.insertBefore(div, tree.nextSibling);
});

const monkey = document.getElementById("monkey");

monkey.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("Dragover event occurred");
  monkey.style.opacity = 0.5;
});

let feet = document.getElementById("feet");

monkey.addEventListener("drop", (event) => {
  event.preventDefault();
  monkey.style.opacity = 1;
  console.log("there has been a drop event");

  const files = event.dataTransfer.files;
  const file = event.dataTransfer.files[0];

  let reader = new FileReader();

  console.log("this is the read::::", reader);

  reader.onloadend = function () {
    feet.src = reader.result;
    console.log("this feet src shit is working");
  };

  console.log(`files mother fucker:::::: ${files}`);

  for (let i = 0; i < files.length; i++) {
    let fileList = [];
    fileList.push(files[i]);
    console.log(`Dropped file ${i + 1}:`);
    console.log(`Name: ${files[i].name}`);
    console.log(`Type: ${files[i].type}`);
    console.log(fileList);
  }
});
