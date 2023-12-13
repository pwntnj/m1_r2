const student = {name: 'Win' ,attendance:[true,false,true,false,true]  ,testScores : [90,80,79,82,1]}
function getAttendanceRate(student) {
    const totalDays = student.attendance.length
    let result = 0
    for (let i = 0; i < student.attendance.length; i++) {
        if (student.attendance[i] === true ) {
            result++
        }
        
    }
    let result2 = (result / totalDays) *100
    return result2
}
function getAvgScore(student) {
    const totalScore = student.testScores.length
    let result3 = student.testScores.reduce((m,n) => m+n)
    return result3 / totalScore
}
let underPerformStudents = (student)=>{
    if (getAttendanceRate(student) < 80 && getAvgScore(student) < 70) {
        return {name : student.name,attendance : getAttendanceRate(student),avgScore : getAvgScore(student)}
    }else{
        return student.name + " Score more than 70 or Attendance more than 80" 
    }
}
console.log(underPerformStudents(student));
console.log(getAvgScore(student));
console.log(getAttendanceRate(student));//