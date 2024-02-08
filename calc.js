let input = document.getElementById('result')
let num1,op,num2

let display = (num) => {

    input.value += num



}

let clearScreen = () => {
    input.value = ""
}

let cal = (oper) =>{
    num1 = input.value
    op = oper
    input.value = ''
}

let result= () =>{
    let answer;
    num2 = input.value;

    switch(op){
        case '+':
            answer = Number(num1) + Number(num2);
            break;

        case '-' :
            answer = Number(num1) - Number(num2)  
            break; 

         case '*' :
            answer = Number(num1) * Number(num2)
            break;

        case '/' :
            answer = Number(num1) / Number(num2)
            break;
         }


    input.value = answer

}
