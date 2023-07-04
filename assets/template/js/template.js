// // Select the location container
// let locationDiv = document.querySelector('.location-div');
// console.log(locationDiv);

// // Get all the sections within the container
// var sections = locationDiv.querySelectorAll('section');

// // Add a scroll event listener
// window.addEventListener('scroll', function () {
//   var visibleSection = getVisibleSection();
//   if (visibleSection) {
//     var sectionId = visibleSection.id;

//     var currentURL = window.location.href;
//     var hashIndex = currentURL.indexOf('#');
//     var urlWithoutSectionId = currentURL.substring(0, hashIndex !== -1 ? hashIndex : currentURL.length);
//     var url = urlWithoutSectionId + '#' + sectionId;

//     window.history.replaceState(null, null, url);
//   }
// });

// // Function to check which section is currently visible
// function getVisibleSection() {
//   for (var i = 0; i < sections.length; i++) {
//     var section = sections[i];
//     var rect = section.getBoundingClientRect();
//     if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//       return section;
//     }
//   }
//   return null;
// }

// Get all the sections on the page
var sections = document.querySelectorAll('section');

// Add a scroll event listener
window.addEventListener('scroll', function() {
  var visibleSection = getVisibleSection();
  if (visibleSection) {
    var sectionId = visibleSection.id;
    var url = window.location.href.split('#')[0] + '#' + sectionId;
    window.history.replaceState(null, null, url);
  }
});

// Function to check which section is currently visible
function getVisibleSection() {
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var rect = section.getBoundingClientRect();
    if (rect.top <= 0 && rect.bottom >= 0) {
      return section;
    }
  }
  return null;
}



document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');
  var toggleButton = document.getElementById('toggleButton');

  // Hide the input field initially
  searchInput.style.display = 'none';

  // Toggle input field visibility on button click
  toggleButton.addEventListener('click', function() {
    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block';
    } else {
      searchInput.style.display = 'none';
    }
  });

  // Hide input field when clicking outside the form or input
  document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !toggleButton.contains(event.target)) {
      searchInput.style.display = 'none';
    }
  });
});
