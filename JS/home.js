$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

const hidden = document.getElementsByClassName("hidden");
const readParent = document.getElementById("readParent");

for (var i = 0; i < hidden.length; i++) {
  hidden[i].style.display = "none";
}

const readMore = document.getElementById("readMore");
readMore.onclick = function () {
  for (var i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "block";
  }

  readParent.style.display = "none";
};
$("#readMore").click(function () {
  $("body,html").animate(
    {
      scrollTop: 600,
    },
    400
  );
  return false;
});
const readLess = document.getElementById("readLess");
readLess.onclick = function () {
  for (var i = 0; i < hidden.length; i++) {
    hidden[i].style.display = "none";
  }
  readParent.style.display = "block";
};
$("#readLess").click(function () {
  $("body,html").animate(
    {
      scrollTop: 600,
    },
    400
  );
  return false;
});
