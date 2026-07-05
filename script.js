// Welcome message
console.log("Welcome to Janllord's Portfolio!");

// Greeting based on time
window.onload = function () {
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting + " Welcome to my portfolio website!");
};
