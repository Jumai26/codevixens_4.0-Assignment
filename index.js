const marks = 85;

let Branch;

if (marks >= 90) {
    Branch = "Computer Science Engineering";
} else if (marks >= 80) {
    Branch = "Mechanical Engineering";
} else if (marks >= 70) {
    Branch = "Chemical Engineering";
} else if (marks >= 60) {
    Branch = "Electronics and Communication";
} else if (marks >= 50) {
    Branch = "Civil Engineering";
} else {
    Branch = "Bio technology";
}

console.log(`Student Branch is ${Branch}`);