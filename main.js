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

    // Add clock hands dynamically
    var handContainer = document.createElement("div");
    handContainer.style.position = "relative";
    handContainer.style.width = "100%";
    handContainer.style.height = "100%";
    handContainer.style.transformOrigin = "center";
    clockElement.appendChild(handContainer);

    // Hour hand
    var hourHand = document.createElement("div");
    hourHand.style.position = "absolute";
    hourHand.style.width = "45%";
    hourHand.style.height = "6px";
    hourHand.style.background = "#333";
    hourHand.style.borderRadius = "3px"; // Adding border radius
    hourHand.style.transformOrigin = "right center";
    hourHand.style.transform = "rotate(" + ((hours % 12) * 30 + (minutes / 2)) + "deg)";
    handContainer.appendChild(hourHand);

    // Minute hand
    var minuteHand = document.createElement("div");
    minuteHand.style.position = "absolute";
    minuteHand.style.width = "55%";
    minuteHand.style.height = "4px";
    minuteHand.style.background = "#333";
    minuteHand.style.borderRadius = "2px"; // Adding border radius
    minuteHand.style.transformOrigin = "right center";
    minuteHand.style.transform = "rotate(" + (minutes * 6) + "deg)";
    handContainer.appendChild(minuteHand);

    // Second hand
    var secondHand = document.createElement("div");
    secondHand.style.position = "absolute";
    secondHand.style.width = "65%";
    secondHand.style.height = "2px";
    secondHand.style.background = "red";
    secondHand.style.transformOrigin = "right center";
    secondHand.style.transform = "rotate(" + (seconds * 6) + "deg)";
    handContainer.appendChild(secondHand);

    // Call the function every second to update the clock
    setTimeout(showClock, 1000);
}

// Call the showClock function when the page is loaded
window.onload = function() {
    showClock();
};
function kodniChiqarish() {
    var yozilganMatn = document.getElementById("inputText").value;
    document.write("<p>" + yozilganMatn + "</p>");
}
