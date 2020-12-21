/*STARTING CODE FOR ASSIGNMENT

// Assignment Code
var generateBtn = document.querySelector("#generate");- Why do you make a variable here instead of just using the document.getelemenetbyit???

--------------------------------------------------------------
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;-- Not clear where to use this yet
}
--------------------------------------------------------------
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);- How do I use this in here versus adding an onclick attribute in the HTML file?

--------------------------------------------------------------------------------------------------------------------*/

//My Logic Script

  //Upcon call via an OnClick Event Added To the Button elemenet...run the writePassword function
    function writePassword() {

      //Define local Variables To Be Defined Via User Inputs & used for password generation:
      var passwordLength;
      var specialCharactersNumber;

      //Define (and validate) user password criteria via prompts

        //Get and Validate their PW Lenght Preference

          //Run the code block at least once to prompt for vairable, and validate if it meets the needed criteria
          do{

            //Ask the user to enter their pw lenght and present them with the constraints
            var passwordLength = prompt("How many characters do you want your password to be? (A numerical value between 8-128 must be submitted)");

            //log the numerical value captured for the variable for purpose of testing code
            console.log("Total number of characters (length) user wants in their password = " + passwordLength);

            //if the passowrd criteria is not met, present and error message. 
            if (passwordLength < 8 || passwordLength > 123) {
            alert("ERROR: You have not met the required entry criteria. Hit ok to try again, and please follow the required entry criteria.");
            }
    
            //If criteria is met, alert them of the number they chose and send them to the next prompt for special characters (breaks while loop)
            else if (passwordLength > 8 && passwordLength <123) {
            alert ("You have choosen a password length of " + passwordLength + " characters");
            }
          }

           //If the prompted entry is valid, continue to next code. If its not (e.x if the condition in while is present) loop through the code again until a valid answer is provided
           while (passwordLength < 8 || passwordLength > 123);


        // Get and Validate Their Desired Number of Special Characters

          //Run the code block at least once to prompt for variable, and validate if it meets criteria
          do{

            //Ask the user to enter the desired number of special characters and present them with the constraint
            var specialCharactersNumber = prompt("How many special characters do you want in your password? (A numerica value between 1 and " + [passwordLength-4] + " must be selected");

            //Log the entry of special characters the user wants
            console.log("Number of special charcters user wants in their password = " + specialCharactersNumber);

            //If criteria is not met, alert them that there was an error and present the error message
            if (specialCharactersNumber > [passwordLength-4] || specialCharactersNumber<1) {
              alert ("ERROR: You have not met the required entry criteria. Hit ok to try again, and please follow the required entry criteria.");
            }
            
            // If criteria is met, alert them of the number they chose and proceed to generate a password for them (breaks the while loop)
            else if (specialCharactersNumber < [passwordLength-4] && specialCharactersNumber>1) {
              alert ("You have choosen " + specialCharactersNumber + " special characters to use in your password")
            }
          }

           //If the prompted entry is valid, continue to next code. If its not (e.x if condition in while is present) loop through code again until a valid answer is provided
           while (specialCharactersNumber > [passwordLength-4] || specialCharactersNumber<1);    

    } 
    
      
      // Generate a Password based on the user inputted criteria....(NEED TO EXTEND FUNCTION CURLY BRACE FROM WRITE PASSWORD THOUGH WHEN THIS IS DONE)
      //function createPassword (passwordLength) {

        //Define additional variables to be used
        //var result;
        //var UpperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWWYZ"
        //var LowerCaseCharacters =  "abcdefghijklmnopqrstuvwxyz"
        //var

     


   


      
