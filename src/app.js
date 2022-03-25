// part 2
function addElementQuery() {
    const selectElement = document.querySelector(".two")
    return selectElement
}
console.log(addElementQuery())

// part 3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]
  
const studentsScholarship = []
  
for (const student of students) {
    function findAverage() {
        var avg = student.grades.reduce((x,y) => x +y, 0) / student.grades.length;
        return avg
    }

    let average = findAverage()
    if(average >= 80){
        const goodStudent = {name: student.name, gradeAvg: average}
        studentsScholarship.push(goodStudent)
        }
}

console.log(studentsScholarship)

//part 4
function selectDarkTheme(){
    const DarkTheme = document.querySelector('div')
    return DarkTheme.classList.add('dark-theme')
}
console.log(selectDarkTheme())
