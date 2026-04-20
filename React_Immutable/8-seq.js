const { Seq } = require('immutable');

function printBestStudents(grades) {
    const bestStudents = Seq(grades)
        .filter(student => student.score >= 70)
        .map(student => ({
            score: student.score,
            firstName:
                student.firstName.charAt(0).toUpperCase() +
                student.firstName.slice(1),
            lastName:
                student.lastName.charAt(0).toUpperCase() +
                student.lastName.slice(1),
        }))
        .toJS();

    console.log(bestStudents);
}

module.exports = printBestStudents;