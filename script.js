// script.js
function calculateResult() {
    // Get input values
    const studentName = document.getElementById('studentName').value;
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    // Calculate total and percentage
    const total = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (total / 500) * 100;

    // Display results
    document.getElementById('nameDisplay').innerText = `Name: ${studentName}`;
    document.getElementById('totalMarks').innerText = `Total Marks: ${total} / 500`;
    document.getElementById('percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;
}
