const studentName = document.getElementById("StudentName");
const studentCourse = document.getElementById("StudentCourse");
const quizzes = document.getElementById("Subject1");
const taskPerformance = document.getElementById("Subject2");
const exam = document.getElementById("Subject3");
const result = document.getElementById("GradeResults");
const calculateBtn = document.getElementById("calculateBtn");


//  to calculate grade
function CalculateGrades(){

    let name = studentName.value;
    let course = studentCourse.value;

    let quizScore = Number(quizzes.value);
    let taskScore = Number(taskPerformance.value);
    let examScore = Number(exam.value);

    // Validation
    if(name === "" || isNaN(quizScore) || isNaN(taskScore) || isNaN(examScore)){
        result.innerHTML = "Please fill all fields";
        return;
    }

    // Check score limits
    if(quizScore > 50 || taskScore > 50 || examScore > 100){
        result.innerHTML = "Invalid score input!";
         result.style.color='red';
        return;
    }

    // Convert to percentage
    let quizPercent = (quizScore / 50) * 100;
    let taskPercent = (taskScore / 50) * 100;
    let examPercent = (examScore / 100) * 100;

    // Compute average
    let average = (quizPercent + taskPercent + examPercent) / 3;

    let remarks;

    if(average >= 75){
        remarks = "Passed";
        result.style.color="green";
    }
    else{
        remarks = "Failed";
        result.style.color='red';
    }

    result.innerHTML = `
        <h3>Results</h3>
        Name: ${name}<br>
        Course: ${course}<br>
        Quiz: ${quizPercent.toFixed(2)}%<br>
        PT: ${taskPercent.toFixed(2)}%<br>
        Exam: ${examPercent.toFixed(2)}%<br>
        Average: ${average.toFixed(2)}%<br>
        Status: ${remarks}
    `;
}


// Event Listener #1
calculateBtn.addEventListener("click", CalculateGrades);


// Event Listener #2
studentName.addEventListener("keyup", function(){
    result.innerHTML = "<p>Typing: " + studentName.value + "</p>";
});