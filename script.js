document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gpaForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting normally

        // Get current GPA and total credits
        var currentGPA = parseFloat(document.getElementById('currentGPA').value);
        var totalCredits = parseInt(document.getElementById('totalCredits').value);

        var newCredits = 0;
        var newPoints = 0;

        // Process up to 6 courses
        for (var i = 1; i <= 6; i++) {
            var gradeInput = document.getElementById('grade' + i);
            var creditsInput = document.getElementById('credits' + i);

            if (gradeInput && creditsInput && gradeInput.value && creditsInput.value) {
                var grade = gradeToPoint(gradeInput.value.toUpperCase());
                var credits = parseInt(creditsInput.value);
                newCredits += credits;
                newPoints += grade * credits;
            }
        }

        // Calculate new GPA
        var totalPoints = (currentGPA * totalCredits) + newPoints;
        var newTotalCredits = totalCredits + newCredits;
        var newGPA = totalPoints / newTotalCredits;

        document.getElementById('gpaResult').textContent = 'Your new GPA is: ' + newGPA.toFixed(2);
    });
});

function gradeToPoint(grade) {
    switch(grade) {
        case 'A+': return 4.0;
        case 'A': return 4.0;
        case 'A-': return 3.7;
        case 'B+': return 3.3;
        case 'B': return 3.0;
        case 'B-': return 2.7;
        case 'C+': return 2.3;
        case 'C': return 2.0;
        case 'C-': return 1.7;
        case 'D+': return 1.3;
        case 'D': return 1.0;
        case 'D-': return 0.7;
        case 'E': return 0.0;
        // Assuming 'F' and non-graded courses are treated the same

    }

}
