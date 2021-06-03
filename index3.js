function findMinusWord(string) {
    let count = 0
    debugger
    let toFind = string.split("")
    for (let i = 0; i < toFind.length; i++) {
        if (toFind[i] === "a") {
            count++
        }
        if (toFind[i] === "o") {
            count++
        }
        if (toFind[i] === "e") {
            count++
        }
        if (toFind[i] === "u") {
            count++
        }
        if (toFind[i] === "i") {
            count++
        }
    }
    if (count === 0) {
        count = false
    }
    return count
}

let exampleString = "aoeiukasdhkzx"
console.log(exampleString)

console.log("Minus words in string: " + findMinusWord(exampleString))