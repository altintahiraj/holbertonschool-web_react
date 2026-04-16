/* eslint-disable */
const { Seq } = require('immutable');

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function printBestStudents(grades) {
  const result = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      score: student.score,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }))
    .toJS();

  console.log(result);
}

module.exports = printBestStudents;