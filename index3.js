function findMinusWord(string) {
    let count = 0
    string = prompt()
    console.log(string)
    let toFind = string.split("")
    for (let i = 0; i < toFind.length; i++) {
        if (toFind[i] === "a") {
            count++
        } else if (toFind[i] === "o") {
            count++
        } else if (toFind[i] === "e") {
            count++
        } else if (toFind[i] === "u") {
            count++
        } else if (toFind[i] === "i") {
            count++
        }
    }
    if (count === 0) {
        count = false
    }
    return count
}

// let exampleString = "aoeiukasdhkzx"
// console.log(exampleString)

console.log("Minus words in string: " + findMinusWord())