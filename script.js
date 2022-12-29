"use strict";

const yourInformation = document.querySelector(".infomation");
const form = document.querySelector(".form");
const inputEmail = document.getElementById("email");
const btnSubmit = document.querySelector(".btnsubmit");

////// Check Email //////
btnSubmit.addEventListener("click", function (event) {
  const yourEmail = inputEmail.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(yourEmail)) {
    yourInformation.classList.remove("hidden");
    form.classList.add("hidden");
  } else {
    alert("Email không hợp lệ!");
  }

  event.preventDefault();
});

////////// TẠO RESPONSIVE CHO CÁC CARD THÔNG TIN /////////

const mouseOverEl = document.getElementsByClassName("mouseover");
////// METHOD MASONRY LAYOUT ////
const layoutMsr = document.querySelector(".layoutmasonry");
const msnry = new Masonry(layoutMsr, {
  columnWidth: 10,
});

for (let i = 0; i < mouseOverEl.length; i++) {
  const btnViewmore = mouseOverEl[i].children;
  const btnParentEl = mouseOverEl[i];

  ////// MOVE OVER //////
  // for (let i = 0; i < mouseOverEl.length; i++)
  mouseOverEl[i].addEventListener("mouseover", function () {
    console.log(mouseOverEl[i]);
    // const btnViewmore = mouseOverEl[i].children;
    btnViewmore[1].classList.remove("hidden");
  });
  ////// MOVE OUT //////
  // for (let i = 0; i < mouseOverEl.length; i++)
  mouseOverEl[i].addEventListener("mouseout", function () {
    console.log(mouseOverEl[i]);
    // const btnViewmore = mouseOverEl[i].children;
    btnViewmore[1].classList.add("hidden");
  });

  ////// CLICK BUTTON SHOW/HIDE CARD CONTENT //////
  btnViewmore[1].addEventListener("click", function () {
    const cardContent =
      btnParentEl.parentElement.parentElement.nextElementSibling;
    if (
      btnViewmore[1].textContent == `▲ VIEW LESS` &&
      !btnViewmore[1].classList.contains("hidden")
    ) {
      cardContent.classList.add("hidden");
      btnViewmore[1].textContent = `▼ VIEW MORE`;
    } else {
      cardContent.classList.remove("hidden");
      btnViewmore[1].textContent = `▲ VIEW LESS`;
    }
    msnry.layout(); ////// CHẠY LẠI METHOD MASONRY
  });
}
