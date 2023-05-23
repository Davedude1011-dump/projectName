const Input = document.querySelector(".question-input")
const QuestionText = document.querySelector(".question-text")
const QuestionTextMobile = document.querySelector(".question-text-mobile")

const ButtonOne = document.querySelector(".button-one")
const ButtonTwo = document.querySelector(".button-two")
const ButtonThree = document.querySelector(".button-three")
const ButtonFour = document.querySelector(".button-four")

var RandomQuestion = ""
var RandomAnswer = ""

var QuestionNum = 1
var Points = 0

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

function ButtonClick(Answer) {
    if (Answer == RandomAnswer) {
        Points ++
        showToast("Correct!", "success")
        GenerateRandomQuestionAndAnswers()
    }
    else {
        showToast("Wrong!", "error")
        GenerateRandomQuestionAndAnswers()
    }
    QuestionNum ++
    document.querySelector(".points-max").textContent = QuestionNum
    document.querySelector(".points").textContent = Points
}

function SkipQuestion() {
    showToast("Goodluck!", "warning")
    GenerateRandomQuestionAndAnswers()
}

var AllOptions = [
    {Answer: "A semi-permiable wall to the cell", Question: "Cell membrane (Plasma membrane)"},
    {Answer: "A rigid outer wall that provides structual support to the cell", Question: "Cell-wall"},
    {Answer: "Stores and releases energy from the cell", Question: "Mitochondria"},
    {Answer: "Helps the cell move through liquids", Question: "Flagellum"},
    {Answer: "Stores water / waste for the cell", Question: "Vacuole"},
    {Answer: "Creates protein through protein synthesis", Question: "Ribosome"},
    {Answer: "Stores cell DNA", Question: "Nucleus"},
    {Answer: "Gel-like fluid inside the cell", Question: "Cytoplasm"},
    {Answer: "A prokaryotic version of the nucleus", Question: "Nucleoid"},
    {Answer: "A double stranded DNA molecule, often found in a bacteria cell", Question: "Plasmid"},
    {Answer: "Site of photosynthesis in plant cells", Question: "Chloroplast"},
    {Answer: "A selectively permeable barrier that surrounds the cell", Question: "Cell membrane (Plasma membrane)"},
    {Answer: "Provides structural support and shape to the cell", Question: "cell wall"},
    {Answer: "Powerhouse of the cell, produces ATP", Question: "Mitochondria"},
    {Answer: "Whip-like structures that aid in cell movement", Question: "Flagella"},
    {Answer: "Hair-like structures involved in cell movement or moving substances across the cell surface", Question: "Cilia"},
    {Answer: "Stores water, ions, and nutrients for the cell", Question: "Vacuole"},
    {Answer: "Synthesizes proteins using genetic information", Question: "Ribosomes"},
    {Answer: "Contains the cell's genetic material", Question: "Nucleus"},
    {Answer: "Gel-like fluid that suspends organelles within the cell", Question: "Cytoplasm"},
    {Answer: "Small, circular DNA molecule often found in bacterial cells", Question: "Plasmid"},
    {Answer: "Organelles responsible for photosynthesis in plant cells", Question: "Chloroplasts"}
]

function ShuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function GenerateRandomQuestionAndAnswers() {
    var RandomArrayItem = AllOptions[Math.floor(Math.random() * AllOptions.length)]
    RandomQuestion = RandomArrayItem.Question
    RandomAnswer = RandomArrayItem.Answer

    var RandomWrongList = []
    for (let i = 0; i < 3;) {
        var NewRandomWrongItem = AllOptions[Math.floor(Math.random() * AllOptions.length)]
        if (NewRandomWrongItem.Question != RandomQuestion) {
            RandomWrongList.push(NewRandomWrongItem.Answer)
            i++
        }
    }

    RandomWrongList.push(RandomAnswer)
    RandomWrongList = ShuffleArray(RandomWrongList)

    QuestionText.textContent = RandomQuestion
    QuestionTextMobile.textContent = RandomQuestion

    ButtonOne.textContent = RandomWrongList[0]
    ButtonTwo.textContent = RandomWrongList[1]
    ButtonThree.textContent = RandomWrongList[2]
    ButtonFour.textContent = RandomWrongList[3]

    console.log(RandomQuestion)
    console.log(RandomAnswer)
    console.log(RandomWrongList)
}

GenerateRandomQuestionAndAnswers()