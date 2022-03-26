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
  

function findSum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
    }
    return sum
}

function findAvg(array) {
    let Avg = findSum(array)/array.length
    return Avg
}

for (const student of students) {
    Avg = findAvg(student.grades)
    if(Avg >= 80){
        const goodStudent = {name: student.name, gradeAvg: Avg}
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
