const identity = document.getElementById("identity");
const studentFields = document.getElementById("student-fields");
const lecturerFields = document.getElementById("lecturer-fields");

// Hide all at start
studentFields.style.display = "none";
lecturerFields.style.display = "none";

identity.addEventListener("change", function () {
    if (this.value === "student") {
        studentFields.style.display = "block";
        lecturerFields.style.display = "none";
    }
    else if (this.value === "lecturer") {
        studentFields.style.display = "none";
        lecturerFields.style.display = "block";
    }
    else {
        studentFields.style.display = "none";
        lecturerFields.style.display = "none";
    }
});