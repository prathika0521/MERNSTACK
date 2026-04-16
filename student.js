
let students = [];

function addStudent(name, marks) {
    let student = {
        name: name,
        marks: marks
    };
    students.push(student);
    console.log("✅ Student added:", name);
}
 
function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

 
function showStudents() {
    if (students.length === 0) {
        console.log("⚠️ No students found");
        return;
    }

    console.log("📋 Student List:");
    for (let i = 0; i < students.length; i++) {
        let avg = getAverage(students[i].marks);
        console.log(
            "Name:", students[i].name,
            "| Marks:", students[i].marks,
            "| Average:", avg.toFixed(2)
        );
    }
}
 
function findTopper() {
    if (students.length === 0) {
        console.log("No students available");
        return;
    }

    let topStudent = students[0];
    let highestAvg = getAverage(topStudent.marks);

    for (let i = 1; i < students.length; i++) {
        let avg = getAverage(students[i].marks);
        if (avg > highestAvg) {
            highestAvg = avg;
            topStudent = students[i];
        }
    }

    console.log("🏆 Topper:", topStudent.name, "| Average:", highestAvg.toFixed(2));
}

 
console.log("👉 Use:");
console.log("addStudent('John', [80,90,85])");
console.log("showStudents()");
console.log("findTopper()");
