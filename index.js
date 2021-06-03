let a = 5
let b = 8

function oneVariableEquation(numA, numB) {
    let equationVariable;
    if (numA === 0) {
        if (numB === 0) {
            equationVariable = "Phương trình vô số nghiệm"
        } else {
            equationVariable = "Phương trình vô nghiệm"
        }
    } else {
        equationVariable = (-numB / numA)
    }
    return equationVariable
}

console.log(`Nghiệm: ${a} / ${b} ` + oneVariableEquation(a,b))