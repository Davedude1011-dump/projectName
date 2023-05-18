var Input = document.querySelector(".question-input")
var InputButton = document.querySelector(".question-input");

function showToast(message, type) {
    toastr.options = {
        "positionClass": "toast-top-left",
        "closeButton": true,
        "progressBar": true,
    };
    if (type == "error") {
        toastr.error(message);
    } else if (type == "success") {
        toastr.success(message);
    } else if (type == "warning") {
        toastr.warning(message);
    }
}

function CheckInput() {
    var Mitochondria = document.querySelectorAll(".mitochondria");
    var Ribosome = document.querySelectorAll(".ribosome");
    var Chloroplast = document.querySelectorAll(".chloroplast");
    var Nucleus = document.querySelectorAll(".nucleus")
    var Vacuole = document.querySelectorAll(".vacuole");
    var Cytoplasm = document.querySelectorAll(".cytoplasm");
    var CellWall = document.querySelectorAll(".cell-wall");
    var CellMembrane = document.querySelectorAll(".cell-membrane")
    var CellMembraneFill = document.querySelectorAll(".cell-membrane-fill")
    var Plasmid = document.querySelectorAll(".plasmid")
    var Flagellum = document.querySelectorAll(".flagellum")
    var Nucleoid = document.querySelectorAll(".nucleoid")

    var InputValue = (Input.value).toLowerCase();

    console.log(InputValue)

    if (InputValue == "mitochondria" || InputValue == "mitochondrias") { for (let i = 0; i < Mitochondria.length; i++) { Mitochondria[i].style.fill = "#D88EBF"; } }
    else if (InputValue == "ribosome" || InputValue == "ribosomes") { for (let i = 0; i < Ribosome.length; i++) { Ribosome[i].style.fill = "#FF4343"; } }
    else if (InputValue == "chloroplast" || InputValue == "chloroplasts") { for (let i = 0; i < Chloroplast.length; i++) { Chloroplast[i].style.fill = "#5FD38D"; } }
    else if (InputValue == "nucleus") { for (let i = 0; i < Nucleus.length; i++) { Nucleus[i].style.fill = "#1C818A"; } }
    else if (InputValue == "vacuole") { for (let i = 0; i < Vacuole.length; i++) { Vacuole[i].style.fill = "#CFE2C6"; } }
    else if (InputValue == "cytoplasm") { for (let i = 0; i < Cytoplasm.length; i++) { Cytoplasm[i].style.fill = "#EBFFCA"; } }
    else if (InputValue == "cell wall") { for (let i = 0; i < CellWall.length; i++) { CellWall[i].style.stroke = "#D4AA00"; CellWall[i].style.fill = "#D4AA00"; } }
    else if (InputValue == "cell membrane" || InputValue == "cell membranes") {
        for (let i = 0; i < CellMembrane.length; i++) { CellMembrane[i].style.stroke = "#FFCC00"; };
        for (let i = 0; i < CellMembraneFill.length; i++) { CellMembraneFill[i].style.stroke = "#FFCC00"; CellMembraneFill[i].style.fill = "#FFCC00"; }
    }
    else if (InputValue == "plasmid" || InputValue == "plasmids") { for (let i = 0; i < Plasmid.length; i++) { Plasmid[i].style.fill = "#55C212"; } }
    else if (InputValue == "flagellum" || InputValue == "flagella") { for (let i = 0; i < Flagellum.length; i++) { Flagellum[i].style.stroke = "#6C4100"; } }
    else if (InputValue == "nucleoid") { for (let i = 0; i < Nucleoid.length; i++) { Nucleoid[i].style.stroke = "rgb(28, 129, 138)"; } }

    Input.value = ""
}

InputButton.onclick = CheckInput

Input.addEventListener('keydown', function(event) {
    // Check if the 'Enter' key is pressed (keyCode 13)
    if (event.keyCode === 13) {
      // Call your function here
      CheckInput()
    }
  });


  function InfoOpen() {
    const elements = Array.from(document.querySelectorAll(".support-1, .support-2, .support-3, .info-panel"));
    const toggleClass = "support-open";
    let delay = 0;
    let reverseOrder = false;
  
    elements.forEach((element) => {
      if (element.classList.contains(toggleClass)) {
        reverseOrder = true;
      }
    });
  
    const elementsToToggle = reverseOrder ? elements.reverse() : elements;
  
    elementsToToggle.forEach((element) => {
      setTimeout(() => {
        element.classList.toggle(toggleClass);
      }, delay);
      delay += 100; // Add 100 milliseconds to the delay for each iteration
    });
  }