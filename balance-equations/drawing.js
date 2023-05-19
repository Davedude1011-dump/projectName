const screen = document.querySelector(".drawing-screen");

document.addEventListener("DOMContentLoaded", function() {
    let isDrawing = false;
  
    // Calculate dimensions based on available space
    const screenWidth = screen.offsetWidth;
    const screenHeight = screen.offsetHeight;
    screen.width = screenWidth;
    screen.height = screenHeight;
  
    const context = screen.getContext("2d");
    context.lineWidth = 5; // Set line thickness
  
    screen.addEventListener("mousedown", startDrawing);
    screen.addEventListener("mousemove", draw);
    screen.addEventListener("mouseup", stopDrawing);
    screen.addEventListener("mouseleave", stopDrawing);
  
    function startDrawing(event) {
      isDrawing = true;
      const { offsetX, offsetY } = event;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
    }
  
    function draw(event) {
      if (!isDrawing) return;
      const { offsetX, offsetY } = event;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    }
  
    function stopDrawing() {
      isDrawing = false;
    }
  });

screen.addEventListener("contextmenu", function(event) {
    event.preventDefault();

    const screen = document.querySelector(".drawing-screen");
    const context = screen.getContext("2d");
    context.clearRect(0, 0, screen.width, screen.height);
})