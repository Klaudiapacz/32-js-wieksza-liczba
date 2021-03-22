let num1 = 5;
let num2 = 5;

const numberSum = (number_1, number_2) => {
    if(number_1 > number_2){
        return number_1;
    }else if(number_1 < number_2){
        return number_2;
    }else{
        return 'liczby są równe';
    }
}


console.log(numberSum(num1, num2))