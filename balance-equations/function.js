const Input = document.querySelector(".question-input")
const QuestionText = document.querySelector(".question-text")

var PointCounter = document.querySelector(".points")
var MaxPointCounter = document.querySelector(".points-max")

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

var AnswerToQuestion = ""

var RandomQuestionChosen = ""

var Points = 0
var MaxPoints = 0

var RandomQuestions = [
    {Question: "N^2 + H^2 -> NH^3", Answer: "N2 + 3H2 -> 2NH3"},
    {Question: "KClO^3 -> KCl + O^2", Answer: "2 KClO3 -> 2 KCl + 3 O2"},
    {Question: "NaCl + F^2 -> NaF + Cl^2", Answer: "2 NaCl + F2 -> 2 NaF + Cl2"},
    {Question: "H^2 + O^2 -> H^2O", Answer: "2 H2 + O2 -> 2 H2O"},
    {Question: "Pb(OH)^2 + HCl -> H^2O + PbCl^2", Answer: "Pb(OH)2 + 2 HCl -> 2 H2O + PbCl2"},
    {Question: "AlBr^3 + K^2SO^4 -> KBr + Al^2(SO^4)^3", Answer: "2 AlBr3 + 3 K2SO4 -> 6 KBr + Al2(SO4)3"},
    {Question: "CH^4 + O^2 -> CO^2 + H^2O", Answer: "CH4 + 2 O2 -> CO2 + 2 H2O"},
    {Question: "C^3H^8 + O^2 -> CO^2 + H^2O", Answer: "C3H8 + 5 O2 -> 3 CO2 + 4 H2O"},
    {Question: "C^8H^18 + O^2 -> CO^2 + H^2O", Answer: "2 C8H18 + 25 O2 -> 16 CO2 + 18 H2O"},
    {Question: "FeCl^3 + NaOH -> Fe(OH)^3 + NaCl", Answer: "FeCl3 + 3 NaOH -> Fe(OH)3 + 3 NaCl"},
    {Question: "P + O^2 -> P^2O^5", Answer: "4 P + 5 O2 -> 2 P2O5"},
    {Question: "Na + H^2O -> NaOH + H^2", Answer: "2 Na + 2 H2O -> 2 NaOH + H2"},
    {Question: "Ag^2O -> Ag + O^2", Answer: "2 Ag2O -> 4 Ag + O2"},
    {Question: "S^8 + O^2 -> SO^3", Answer: "S8 + 12 O2 -> 8 SO3"},
    {Question: "CO^2 + H^2O -> C^6H^12O^6 + O^2", Answer: "6 CO2 + 6 H2O -> C6H12O6 + 6 O2"},
    {Question: "K + MgBr^2 -> KBr + Mg", Answer: "K + MgBr -> KBr + Mg"},
    {Question: "HCl + CaCO^3 -> CaCl^2 + H^2O + CO^2", Answer: "2 HCl + CaCO3 -> CaCl2 + H2O + CO2"},
    {Question: "HNO^3 + NaHCO^3 -> NaNO^3 + H^2O + CO^2", Answer: "HNO3 + NaHCO3 -> NaNO3 + H2O + CO2"},
    {Question: "H^2O + O^2 -> H^2O^2", Answer: "2 H2O + O2 -> 2 H2O2"},
    {Question: "NaBr + CaF^2 -> NaF + CaBr^2", Answer: "2 NaBr + CaF2 -> 2 NaF + CaBr2"},
    {Question: "H^2SO^4 + NaNO^2 -> HNO^2 + Na^2SO^4", Answer: "H2SO4 + 2 NaNO2 -> 2 HNO2 + Na2SO4"},
]

function IsNumber(char) {
    return !Number.isNaN(Number(char));
}

function GetRandomEquation() {
    resetCanvas()
    MaxPoints ++

    PointCounter.textContent = Points
    MaxPointCounter.textContent = MaxPoints

    var RandomQuestionOuter = RandomQuestions[Math.floor(Math.random() * RandomQuestions.length)]
    RandomQuestionChosen = RandomQuestionOuter.Question
    AnswerToQuestion = RandomQuestionOuter.Answer

    var RandomQuestionChosenSplit = RandomQuestionChosen.split("")

    for (let i = 0; i < RandomQuestionChosenSplit.length; i++) {
        var CurrentChar = RandomQuestionChosen[i]

        if (CurrentChar == "^") {
            console.log(CurrentChar)
            RandomQuestionChosenSplit[i] = ""
            RandomQuestionChosenSplit[i+1] = "<sub>" + RandomQuestionChosen[i+1] + "</sub>"
            if (IsNumber(RandomQuestionChosenSplit[i+2])) {
                RandomQuestionChosenSplit[i+2] = "<sub>" + RandomQuestionChosen[i+2] + "</sub>"
            }
        }
    }
    
    var ReadableEquation = RandomQuestionChosenSplit.join("")
    QuestionText.innerHTML = ReadableEquation
}
function SubmitButton() {
    var AnswerGiven = Input.value
    AnswerGiven = AnswerGiven.split(" ").join("")
    AnswerGiven = AnswerGiven.toLowerCase()

    var AnswerCorrect = AnswerToQuestion.split(" ").join("")
    AnswerCorrect = AnswerCorrect.toLowerCase()

    console.log(AnswerGiven, AnswerCorrect)

    if (AnswerGiven == AnswerCorrect) {
        showToast("Correct!", "success")
        GetRandomEquation()
        Points ++
    }
}
GetRandomEquation()

function resetCanvas() {
    const screen = document.querySelector(".drawing-screen");
    const context = screen.getContext("2d");
    context.clearRect(0, 0, screen.width, screen.height);
}