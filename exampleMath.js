const msg_enter_problem = "Please enter a valid division problem. i.e. - 10/2";

var MathExample = function(rl) {

    MathExample.prototype.divide = function() {
        console.log(msg_enter_problem);
        rl.on('line', (input) => {
            //Check if divide example is to be done
            if (input.toLowerCase() == "done") {
                console.log("Good bye!");
                rl.close();
                return;
            }

            console.log(`Division problem: ${input}`);
            //Separate problem into numerator and denominator
            var problem = input.split("/");
            
            //Validate problem is valid by having both numerator and denominator
            if (problem.length != 2) {
                console.log(msg_enter_problem);
                return;
            }
        
            //Perform math by calling function and passing numerator and denominator
            _divide(problem[0], problem[1])
        });
    };

    function _divide(numerator, denominator) {
        //Set variables with default value
        var num = 0;
        var den = 0;
    
        //Prevent error if numerator is a true alphanumeric string
        try {
            num = parseInt(numerator);
            if (isNaN(num)) {
                throw new Error();
            }
        } catch(error) {
            console.log("Numerator is not a valid integer");
            console.log(msg_enter_problem);
            return;
        }
    
        //Prevent error if denominator is a true alphanumeric string
        try {
            den = parseInt(denominator);
            if (isNaN(den)) {
                throw new Error();
            }
        } catch(error) {
            console.log("Denomiator is not a valid integer");
            console.log(msg_enter_problem);
            return;
        }
    
        //Prevent negative number division
        if (num < 0) {
            console.log("Numerator is a negative number")
            console.log(msg_enter_problem);
            return;
        }
        
        //Prevent error when dividing by zero - cardinal sin
        if (den == 0) {
            console.log("Unable to divide by 0")
            console.log(msg_enter_problem);
            return;
        }
    
        //Prevent negative number division
        if (den < 0) {
            console.log("Denomiator is a negative number")
            console.log(msg_enter_problem);
            return;
        }
    
        //Do math and display
        console.log("Answer is: ", num / den);
    };
};

module.exports = MathExample;