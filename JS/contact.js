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

function ValidateEmail(mail) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    return true;
  }
  return false;
}

const contactForm = document.getElementById("contactForm");
contactForm.onsubmit = (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const alert = document.getElementsByClassName("alert");

  if (
    (firstName.value.trim() === "") |
    (lastName.value.trim() === "") |
    (email.value.trim() === "") |
    (message.value.trim() === "")
  ) {
    alert[0].style.display = "block";
    alert[0].innerText = "All the fields are required";
    $("body,html").animate(
      {
        scrollTop: 300,
      },
      400
    );
    setTimeout(() => {
      alert[0].style.display = "none";
      alert[0].innerText = "";
    }, 4000);
    return;
  }

  if (!ValidateEmail(email.value)) {
    alert[0].style.display = "block";
    alert[0].innerText = "Email not valid";
    $("body,html").animate(
      {
        scrollTop: 300,
      },
      400
    );
    setTimeout(() => {
      alert[0].style.display = "none";
      alert[0].innerText = "";
    }, 4000);
    return;
  }

  alert[1].style.display = "block";
  alert[1].innerText = "Your response was recorded successfully!";
  $("body,html").animate(
    {
      scrollTop: 300,
    },
    400
  );
  setTimeout(() => {
    alert[1].style.display = "none";
    alert[1].innerText = "";
  }, 4000);

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  message.value = "";
};
