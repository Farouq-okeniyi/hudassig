// function convertToFahrenheit() {

//     do {
//         const celsiusInput = parseFloat(prompt('Enter temperature in Celsius: '));

//         if (Number.isNaN(celsiusInput)) {

//             console.log('Input a number');

//             continue;
//         }

//          const toFahrenheit = (celsiusInput * 9/5) + 32;

//         console.log(`${celsiusInput}°C is ${toFahrenheit}°F`);

//         break;

//     } while (true);
// }


// // Function to convert Fahrenheit to Celsius

//     function convertToCelsius() {

//     do{

//         const fahrenheitInput = parseFloat(prompt('Enter temperature in Fahrenheit: '));

//         if(Number.isNaN(fahrenheitInput)){

//             console.log('Input a number');

//             continue;

//         }

//         const tocelcuis=(fahrenheitInput - 32) * 5/9;

//         console.log(`${fahrenheitInput}°F is ${tocelcuis}°C`);

//         break;

//     }while(true)

//     }

// Function to calculate average grade and determine letter grade

    const scores = []

    function calculateGrade() {

        let i = 1;


        do {
            let grade = parseFloat(prompt(`Enter the grade for student ${i}: `));
            
         
            // Validate grade

            if (Number.isNaN(grade) || grade < 0 || grade > 100) {

                alert('Invalid grade entered. Please enter a number between 0 and 100.')
                continue;

            }

            scores.push(grade);
            i++

        } while (i <= 5);

        let sum = scores.reduce((total,value)=> {
            return (total+value)} 
        )
        alert(`Total sum is ${sum}`);
        

        const average = sum / 5;

        let letterGrade;

        if (average > 100 || average < 0) {

            alert('Please recheck the student\'s scores as the average is out of the valid range (0-100)');

        } else {
            switch (true) {

                case (average >= 90):

                    letterGrade = 'A';

                    break;

                case (average >= 80):

                    letterGrade = 'B';

                    break;
                case (average >= 70):

                    letterGrade = 'C';

                    break;
                case (average >= 60):

                    letterGrade = 'D';

                    break;
                default:

                    letterGrade = 'F';
            }

            alert(`Average is: ${average}, Letter Grade is: ${letterGrade}`);
        }

        const printarray = Array.from({ length: 100 }, (_,i) => i + 1);
        document.write(`programatially printed 1-100 here: ${printarray}`);
    }



// // convertToFahrenheit();
// convertToCelsius()
calculateGrade()

// checkGrade(); // calling // invoking

// function promptForInput() {
//     let num;
//     let valid = false;

//     while(!valid) {
//         num = +prompt('Enter a valid result');
//         // num = Number(prompt('Enter a valid result'));

//         valid = typeof num === 'number' && num >= 0 && num <= 100 && num !== ""
//         console.log(valid)
//     }

//     return num
// }

// function checkGrade() {
//     const grade1 = promptForInput();
//     const grade2 = promptForInput();
//     const grade3 = promptForInput();
//     const grade4 = promptForInput();
//     const grade5 = promptForInput();

//     const sum = grade1 + grade2 + grade3 + grade4 + grade5;
//     const average = sum / 5;

//     switch (true) { 
//         case (average >= 90):
//             letterGrade = 'A';
//             break;

//         case (average >= 80):
//             letterGrade = 'B';
//             break;
//         case (average >= 70):
//             letterGrade = 'C';
//             break;
//         case (average >= 60):
//             letterGrade = 'D';
//             break;
//         default:
//             letterGrade = 'F';
//     };

//     alert(`Your total is ${sum} with a grade of ${letterGrade}`)
// }