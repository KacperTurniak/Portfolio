function showPopup(title, description, item) {
  const popup = document.getElementById('popup');
  const popupTitle = document.getElementById('popup-title');
  const popupDescription = document.getElementById('popup-description');
  const imagePlaceholders = document.getElementsByClassName('image-placeholder');

  popupTitle.textContent = title;
  popupDescription.textContent = description;

  // Calculate the starting index for the item's images
  const startIndex = (item - 1) * 4;

  // Reset image sources
  for (let i = 0; i < imagePlaceholders.length; i++) {
    const imageIndex = startIndex + i + 1;
    imagePlaceholders[i].style.backgroundImage = `url(img/${imageIndex}.png)`;
  }

  popup.style.opacity = '1';
  popup.style.visibility = 'visible';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
}
///--------------------------- end booking pop up




$(document).ready(function() {
  // Handle form submission
  $(".contact-container .send-button").click(function() {
    var message = $(".contact-container .message textarea").val();
    var email = $(".contact-container .email input[type='email']").val();

    // Perform any necessary actions with the message and email
    // e.g., send them to a server

    // Clear the message and email inputs
    $(".contact-container .message textarea").val("");
    $(".contact-container .email input[type='email']").val("");

    // Display Send Pop-up
    showSendPopup();
  });

  // Handle booking
  $(".booking-container .booking-button").click(function() {
    var selectedDate = $("#booking-date").val();
    var selectedTime = $("#booking-time").val();

    if (selectedDate === "" || selectedTime === "") {
      // Show an error message if the user hasn't selected a date or time
      alert("Please select a date and time for your booking.");
      return;
    }

    // Display the booking details in Booking Pop-up
    var bookingDetails = "Your booking has been confirmed for " + selectedDate + " at " + selectedTime + ".";
    $("#booking-details").text(bookingDetails);

    // Display Booking Pop-up
    showBookingPopup();
  });

  // Close button event listener for both pop-ups
  $(".close-button").click(function() {
    closePopup2();
  });
});

// Function to display Send Pop-up
function showSendPopup() {
  $("#send-popup").fadeIn();
}

// Function to display Booking Pop-up
function showBookingPopup() {
  $("#booking-popup").fadeIn();
}

// Function to close the currently displayed pop-up
function closePopup2() {
  $(".popup2").fadeOut();
  $("body").removeClass("visible");
}


// Show description pop-up on hover
$(".grid-item").hover(
  function () {
    $(this).find(".description-popup").fadeIn();
  },
  function () {
    $(this).find(".description-popup").fadeOut();
  }
);

///--------------------------- end booking pop up

// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add scroll event listener to track the current active section
window.addEventListener('scroll', () => {
  const currentPos = window.scrollY;

  // Loop through each section and check if it's in the viewport
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');

    // Adjust the offset for the contact section if needed
    const offset = sectionId === 'contact' ? 200 : 0;

    if (currentPos >= sectionTop - offset && currentPos < sectionTop + sectionHeight - offset) {
      // If the section is in the viewport, add 'active' class to its corresponding navigation link
      const targetLink = document.querySelector(`nav a[href="#${sectionId}"]`);
      navLinks.forEach(link => link.classList.remove('active'));
      targetLink.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('my-video');
  const playBtn = document.getElementById('play-btn');
  const volumeBtn = document.getElementById('volume-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const progressBar = document.getElementById('progress-bar');
  const progress = document.getElementById('progress');
  const sourceButtons = document.querySelectorAll('.source-btn');
  const fastForwardBtn = document.getElementById('fast-forward-btn');

  playBtn.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playBtn.innerHTML = '&#10074;&#10074;'; // Change to pause icon
    } else {
      video.pause();
      playBtn.innerHTML = '&#9658;'; // Change to play icon
    }
  });

  volumeBtn.addEventListener('click', function() {
    if (video.muted) {
      video.muted = false;
      volumeBtn.innerHTML = '&#128266;'; // Change to unmute icon
    } else {
      video.muted = true;
      volumeBtn.innerHTML = '&#128263;'; // Change to mute icon
    }
  });

  fullscreenBtn.addEventListener('click', function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });

  fastForwardBtn.addEventListener('click', function() {
    // Increase the current time by 10 seconds for fast forward
    video.currentTime += 3;
  });

  // Handle video source switching
  sourceButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const src = button.getAttribute('data-src');
      video.src = src;
      video.load();
      video.play();
      playBtn.innerHTML = '&#10074;&#10074;'; // Change to pause icon
    });
  });

  video.addEventListener('timeupdate', function() {
    const progressWidth = (video.currentTime / video.duration) * 100;
    progress.style.width = progressWidth + '%';
  });

  progressBar.addEventListener('click', function(event) {
    const progressWidth = (event.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = progressWidth;
  });
});



$(".toggle-input").click(function() {
  $("body").toggleClass("dark-mode");
});

