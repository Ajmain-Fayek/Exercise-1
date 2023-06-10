function makeSubmitButtonInteractive(button) {
    // Add a hover effect to the button
    button.addEventListener("mouseover", function() {
      this.style.backgroundColor = "lightgray";
    });
  
    // Add a click effect to the button
    button.addEventListener("click", function() {
      this.style.backgroundColor = "red";
    });
  }
  
  makeSubmitButtonInteractive(document.querySelector("input[type=submit]"));
  