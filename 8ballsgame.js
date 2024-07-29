//asssighnment 2 8Balls Game


//all arrays used
const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

const inputs = [];

const arrayprime = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];


//funtion to generate random answers

function GetRandomNumber(){
    const answerDecimal = Math.random() * responses.length;

    const answer = Math.floor(answerDecimal)

    return answer
    
}

//funtion to get question and reply
function GetQuestions(answer){    
    for(i=0; ; i++){
        
        const question = +prompt(`What's your Question`)
        if(isNaN(question)){

            alert(responses[answer])
            break
        }
        else{
            alert(`Please ask a valid question`)
            continue
        }

    }
}

// GetQuestions(GetRandomNumber());

//Question 3. max number

function GetInputs(){
    for(i=0; ; i++){
            const NoOfInputs= parseFloat(prompt('How many numbers are you entering'))

            if (isNaN(NoOfInputs)){
                alert(`Enter a valid number of inputs`)

                continue

            }else{
                for(i=1; i<=NoOfInputs ; i++){

                    for(j=1; ; j++){

                        let InputsTOCheck = parseFloat(prompt(`Enter number ${i}`))

                        if(isNaN(InputsTOCheck)){
                            alert(`Enter a valid number at input ${i}`)

                            continue
                        }
                        inputs.push(InputsTOCheck)
    
                        console.log(inputs)
                        break
                    }
                  

                }
            }
            break
    }
}
function GetMaxValue(){
    GetInputs();

    const arraylength = inputs.length;

    let maxNumber = inputs[0]

    for(i=1;i<=arraylength; i++){

        if(inputs[i]>maxNumber){

            maxNumber=inputs[i]
        }
    }
    alert(`The maximum value from the inputed numbers is ${maxNumber}`);
}


// GetMaxValue()


// print all prime numbers in an array
// const allprime = []
// function GetPrime(){
//     const PrimeLenght = arrayprime.length;

//     first: for(i=0; i< PrimeLenght; i++){
//         let Toprime = arrayprime[i]

//         if(Toprime<=1 || Toprime <=3 || Toprime % 2 === 0 || Toprime % 3 === 0){
//             continue

//         }

//         for (let i = 5; i * i <= Toprime; i += 6) {

//             if (Toprime % i === 0 || Toprime % (i + 2) === 0) continue first;
//         }
//         allprime.push(Toprime)
       
//     }
//     console.log(allprime)
// }
// GetPrime()

//big O notation
const fillmeth = [1,2,3,4]
fillmeth.fill(5, 1,3) //replaces item from start to end, (value, start index, end index)
console.log(fillmeth)