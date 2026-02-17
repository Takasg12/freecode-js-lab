const largestOfAll = (arry) => {
    let result = [];

    for (let i = 0; i < arry.length; i++) {
        let max = Math.max(...arry[i]);
        result.push(max)
    }
    return result;
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
