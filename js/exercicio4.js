let numbers = [1,2,3,4,5];
let sum = 0;
let i = 0;

while (i < numbers.length){
    sum += numbers[i];
    i++;
}

console.log(sum);
// i = 0: sum = sum + numbers[0] => sum = 0 + 1 => sum = 1
// i = 1: sum = sum + numbers[1] => sum = 1 + 2 => sum = 3
// i = 2: sum = sum + numbers[2] => sum = 3 + 3 => sum = 6
// i = 3: sum = sum + numbers[3] => sum = 6 + 4 => sum = 10
// i = 4: sum = sum + numbers[4] => sum = 10 + 5 => sum = 15