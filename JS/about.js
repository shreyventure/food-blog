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

const subscribe = document.getElementById("subscribe");
const subscribed = document.getElementById("subscribed");
subscribe.onclick = () => {
  subscribe.innerText = "Subscribed !";
  subscribed.style.display = "block";
  setTimeout(() => {
    subscribed.style.display = "none";
  }, 4000);
};
