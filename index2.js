function searchIndex(array, index) {
    let toFindIndex;
    index = prompt()
    for (let i = 0; i < array.length; i++) {
        if(index === array[i]){
            toFindIndex = `index found at ${i}`
            break;
        }
        else {
            toFindIndex = "Index not found"
        }
    }
    return toFindIndex
}

let exampleArray = [9,5,8,1,3,4,7,6]
console.log(exampleArray)

console.log(searchIndex(exampleArray,6))
