function sendMail(event) {
  event.preventDefault(); // Prevent default form submission

  // OBJECT TO GET THE VALUE OF THE INPUT FIELDS AND SEND IT BY EMAIL
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // NAME OF THE SERVER AND TEMPLATE ID FROM EMAILJS
  if (params.name === "" || params.email === "" || params.message === "") {
    alert("Please fill in all the fields first.");
  } else {
    const serviceId = "service_wuajhr5";
    const templateId = "template_6gguoa9";

    emailjs
      .send(serviceId, templateId, params)
      .then((res) => {
        // FOR REMOVING THE VALUE OR TO EMPTY THE INPUT FIELDS
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);

        // FOR SHOWING THE SUCCESS MESSAGE
        const success = document.getElementById("successMessage");
        success.style.display = "block";
        setTimeout(() => {
          success.style.display = "none";
        }, 8000);
      })
      .catch((err) => console.log(err));
  }
}
