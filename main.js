// Function to display the clock
function showClock() {
    var now = new Date(); // Current date and time
    var hours = now.getHours(); // Get the hour (0-23)
    var minutes = now.getMinutes(); // Get the minute (0-59)
    var seconds = now.getSeconds(); // Get the second (0-59)
    
    // Add leading zeros to hours, minutes, and seconds to display them in two digits
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    // Display the time in a div in HTML
    var clockElement = document.getElementById("clock");
    clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;
    
    // Add CSS styles dynamically to the clock div
    clockElement.style.fontFamily = "Arial, sans-serif"; // Font family
    clockElement.style.fontSize = "24px"; // Font size
    clockElement.style.color = "#333"; // Text color
    clockElement.style.padding = "10px"; // Padding inside the element
    clockElement.style.backgroundColor = "#f0f0f0"; // Background color
    clockElement.style.borderRadius = "5px"; // Border radius
    clockElement.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)"; // Box shadow
    
    // Call the function every second to update the clock
    setTimeout(showClock, 1000);
}

// Call the showClock function when the page is loaded
window.onload = function() {
    showClock();
};
