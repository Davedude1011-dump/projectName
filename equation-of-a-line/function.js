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

const elt = document.querySelector(".calculator");
const calculator = Desmos.GraphingCalculator(elt, { expressions: false, settingsMenu: false });
const defaultState = calculator.getState();

var PointElement = document.querySelector(".points")
var PointMaxElement = document.querySelector(".points-max")
var QuestionElement = document.querySelector(".question-text")

var Points = 0
var PointsMax = 0

var QuestionType = ""
var LineEquation = ""
var LineGradient = ""
var LineYintercept = ""
var CorrectAnswer = ""

var MapMode = true

var Questions = [
    "Give an equation of a Line parallel to [random-line]",
    "Give an equation of a Line parallel to a line that passes through these coordinates: [random-double-coord]",
    "Give an equation of a Line parallel to a line with a gradient of [random-gradient], that passes through [random-single-coord]",
    
    "Give an equation of a Line perpendicular to [random-line]",
    "Give an equation of a Line perpendicular to a line that passes through these coordinates: [random-double-coord]",
    "Give an equation of a Line perpendicular to a line with a gradient of [random-gradient], that passes through [random-single-coord]",
    
    "Give the Gradient of [random-line]",
    "Give the Gradient of a line that passes through these coordinates: [random-double-coord]",
    "Give the Gradient of a line with a gradient of [random-gradient], that passes through [random-single-coord]",
    
    "Give the Y-intercept of [random-line]",
    "Give the Y-intercept of a line that passes through these coordinates: [random-double-coord]",
    "Give the Y-intercept of a line with a gradient of [random-gradient], that passes through [random-single-coord]",
    
    "Give the Equation of a line that passes through these coordinates: [random-double-coord]",
    "Give the Equation of a line with a gradient of [random-gradient], that passes through [random-single-coord]",
]

function RandomLine() {
    m = (Math.floor(Math.random() * 21) - 10) / 2;
    c = (Math.floor(Math.random() * 81) - 40) / 2;

    LineEquation = `y = ${m}x + ${c}`
    LineGradient = m
    LineYintercept = c
}
function RandomDoubleCoord() {
    var RandomXforPointA = Math.floor(Math.random() * (10 - -10 + 1) + -10);
    var RandomYforPointA = (RandomXforPointA * LineGradient) + LineYintercept

    var RandomXforPointB = Math.floor(Math.random() * (RandomXforPointA+10 - RandomXforPointA+1 + 1) + RandomXforPointA+1);
    var RandomYforPointB = (RandomXforPointB * LineGradient) + LineYintercept

    if (MapMode) {
        calculator.setExpression({ id: 'pointA', latex: `(${RandomXforPointA}, ${RandomYforPointA})`, label: '', showLabel: true});
        calculator.setExpression({ id: 'pointB', latex: `(${RandomXforPointB}, ${RandomYforPointB})`, label: '', showLabel: true});
    }

    calculator.setMathBounds({
        left: -100,
        right: 100,
        bottom: -50,
        top: 50
      });

    return `(${RandomXforPointA}, ${RandomYforPointA}) (${RandomXforPointB}, ${RandomYforPointB})`;
}
function RandomSingleCoord() {
    var RandomXpoint = Math.floor(Math.random() * (10 - -10 + 1) + -10);
    var YfromRandomXpoint = (RandomXpoint * LineGradient) + LineYintercept

    if (MapMode) {
        calculator.setExpression({ id: 'pointA', latex: `(${RandomXpoint}, ${YfromRandomXpoint})`, label: '', showLabel: true});
    }

    calculator.setMathBounds({
        left: -100,
        right: 100,
        bottom: -50,
        top: 50
      });

    return `(${RandomXpoint}, ${YfromRandomXpoint})`;
}

function SkipQuestion() {
    showToast('Skipped Question', 'warning')
    NewQuestion()
}

function NewQuestion() {
    calculator.setState(defaultState);
    
    document.querySelector(".question-input").value = ""
    QuestionType = ""
    LineEquation = ""
    LineGradient = ""
    LineYintercept = ""
    CorrectAnswer = ""
    PointsMax ++

    PointElement.textContent = Points
    PointMaxElement.textContent = PointsMax

    var ChosenRandomQuestion = Questions[Math.floor(Math.random() * Questions.length)]

    var SplitRandomQuestion = ChosenRandomQuestion.split(" ")
    console.log(SplitRandomQuestion)
    RandomLine()
    for (let i = 0; i < SplitRandomQuestion.length; i++) {
        if (SplitRandomQuestion[i] == "parallel") { QuestionType = "parallel" }
        else if (SplitRandomQuestion[i] == "perpendicular") { QuestionType = "perpendicular" }
        else if (SplitRandomQuestion[i] == "Gradient") { QuestionType = "gradient" }
        else if (SplitRandomQuestion[i] == "Y-intercept") { QuestionType = "Yintercept" }
        else if (SplitRandomQuestion[i] == "Equation") { QuestionType = "equation" }
        console.log(QuestionType)

        if (SplitRandomQuestion[i] == "[random-line]") { SplitRandomQuestion[i] = "<span class='line-text'>" + LineEquation + "</span>"; if (MapMode) { calculator.setExpression({ id: 'graph1', latex: LineEquation }); } }
        else if (SplitRandomQuestion[i] == "[random-double-coord]") { SplitRandomQuestion[i] = "<span class='line-text'>" + RandomDoubleCoord() + "</span>" }
        else if (SplitRandomQuestion[i] == "[random-single-coord]") { SplitRandomQuestion[i] = "<span class='line-text'>" + RandomSingleCoord() + "</span>" }
        else if (SplitRandomQuestion[i] == "[random-gradient]" || SplitRandomQuestion[i] == "[random-gradient],") { SplitRandomQuestion[i] = "<span class='line-text'>" + LineGradient + "</span>" }
    }
    
    var ChosenQuestion = SplitRandomQuestion.join(" ")
    QuestionElement.innerHTML = ChosenQuestion

    console.log(LineGradient)
    console.log(LineYintercept)
}

NewQuestion()

function CheckQuestion() {
    var AnswerGiven = document.querySelector(".question-input").value

    try {
        var GradientOfAnswerGiven = AnswerGiven.split('=')[1].split('x')[0].trim()
        var YinterceptOfAnswerGiven = AnswerGiven.split('=')[1].split('+')[1].trim()
    }
    catch {
        console.log("oh well")
    }

    console.log(GradientOfAnswerGiven)
    console.log(YinterceptOfAnswerGiven)

    if (GradientOfAnswerGiven == "") { GradientOfAnswerGiven = 1 }
    if (YinterceptOfAnswerGiven == "") { YinterceptOfAnswerGiven = 0 }

    if (QuestionType == "parallel") {
        if (GradientOfAnswerGiven == LineGradient) {
            if (YinterceptOfAnswerGiven != LineYintercept) {
                QuestionPass()
            }
            else { showToast('Wrong!', 'error') }
        }
        else { showToast('Wrong!', 'error') }
    }

    else if (QuestionType == "perpendicular") {
        if (LineGradient > 0) { var Reciprical = "-1/" + LineGradient}
        else if (LineGradient < 0) { var Reciprical = "1/" + LineGradient}
        else { var Reciprical = "0"}

        console.log("GRADIENT GIVEN: ",  Reciprical, "GRADIENT", GradientOfAnswerGiven.toString().split(" ").join(""))
        if (GradientOfAnswerGiven.toString().split(" ").join("") == Reciprical) {
            if (YinterceptOfAnswerGiven == LineYintercept) {
                QuestionPass()
            }
            else { showToast('Wrong!', 'error') }
        }
        else { showToast('Wrong!', 'error') }
    }

    else if (QuestionType == "gradient") {
        if (parseInt(AnswerGiven) == LineGradient) {
            QuestionPass()
        }
        else { showToast('Wrong!', 'error') }
    }

    else if (QuestionType == "Yintercept") {
        if (parseInt(AnswerGiven) == LineYintercept) {
            QuestionPass()
        }
        else { showToast('Wrong!', 'error') }
    }

    else if (QuestionType == "equation") {
        if (parseInt(GradientOfAnswerGiven) == LineGradient) {
            if (parseInt(YinterceptOfAnswerGiven) == LineYintercept) {
                QuestionPass()
            }
            else { showToast('Wrong!', 'error') }
        }
        else { showToast('Wrong!', 'error') }
    }
    console.log(QuestionType)
}


function QuestionPass() {
    console.log("PASS")
    Points ++

    NewQuestion()

    showToast("Correct!", "success")
}



function GeneraeUserLine() {
    var InputValue = document.querySelector(".question-input").value

    try {
        calculator.setExpression({ id: 'graph2', latex: InputValue });
    }
    catch {
        console.log("ERROR finish line")
    }
}
document.querySelector(".question-input").addEventListener("input", GeneraeUserLine);