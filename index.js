function oneVariableEquation(a,b){
    let equationVariable
    if (a == 0) {
        if (b == 0) {
            equationVariable = "Phương trình vô số nghiệm"
        }
        else if (b != 0) {
            equationVariable = "Phương trình vô nghiệm"
        }
    }
    else if (a != 0) {
        equationVariable = -b / a
    }
    return equationVariable
}

document.write("Đáp án: " + oneVariableEquation(5,8))