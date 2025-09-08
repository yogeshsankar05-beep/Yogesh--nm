// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if(name && email && message){
    formMessage.innerText = `✅ Thank you, ${name}! Your message has been sent.`;
    formMessage.style.color = "green";
    this.reset();
  } else {
    formMessage.innerText = "❌ Please fill in all fields.";
    formMessage.style.color = "red";
  }
});
