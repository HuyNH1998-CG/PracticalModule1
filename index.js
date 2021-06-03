var a = 5
var b = 8

function oneVariableEquation(numA, numB) {
    let equationVariable = 0
    if (numA == 0) {
        if (numB == 0) {
            equationVariable = "Phương trình vô số nghiệm"
        } else if (numB != 0) {
            equationVariable = "Phương trình vô nghiệm"
        }
    } else if (numA != 0) {
        equationVariable = (-numB / numA)
    }
    return equationVariable
}

console.log(oneVariableEquation(a, b))