// Set offer end date
let countDownDate = new Date("december 1, 2023 00:00:00").getTime();

// Update countdown every 1 second
let x = setInterval(function() {

  // Get current date and time
  let now = new Date().getTime();
    
  // Calculate time remaining
  let distance = countDownDate - now;
    
  // Time calculations
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display countdown
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If time expired
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "OFFER EXPIRED";
  }
}, 1000);


const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('open');
});