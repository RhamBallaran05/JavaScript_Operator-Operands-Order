document.addEventListener("DOMContentLoaded", () => {
    // Define the grades for the 5 subjects
    const grades = [90, 90, 95, 92, 88];

    // Calculate the average grade
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;

    // Populate the table with the grades
    document.getElementById("grade1").innerText = grades[0];
    document.getElementById("grade2").innerText = grades[1];
    document.getElementById("grade3").innerText = grades[2];
    document.getElementById("grade4").innerText = grades[3];
    document.getElementById("grade5").innerText = grades[4];
    document.getElementById("average").innerText = average.toFixed(2);
});
