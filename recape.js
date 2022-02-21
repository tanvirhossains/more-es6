// module 32-1

//2. default parameter 
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber
console.log(biggest)