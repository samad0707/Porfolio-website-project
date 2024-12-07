$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');  // Toggle the 'fa-times' class on #menu
    $('header').toggleClass('toggle');  // Toggle the 'toggle' class on header

    // Remove classes on scroll or load
    $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
    });
  });
});
// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


AOS.init({
  duration: 1200, // Animation duration in milliseconds
  once: true      // Whether animation should happen only once
});


function validate()
{
      e.preventDefault(); // Prevent form submission
      
      // Get form values
      let name = $('input[placeholder="Name"]').val().trim();
      let email = $('input[placeholder="Email"]').val().trim();
      let message = $('textarea[name="Message"]').val().trim();

      // Validate fields
      if (name === "" || email === "" || message === "") {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill out all fields before sending!',
          });
      } else {
          // Show success alert
          Swal.fire({
              icon: 'success',
              title: 'Message Sent!',
              text: 'Thank you for reaching out. I will get back to you soon!',
          });

          // Optionally, clear the form
          $('input[placeholder="Name"]').val('');
          $('input[placeholder="Email"]').val('');
          $('textarea[name="Message"]').val('');
      }
  
}

$('.btn1').on('click', function () {
  console.log('CV download initiated.');
});

