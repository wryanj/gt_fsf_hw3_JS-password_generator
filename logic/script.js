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

      //Define local Variables To Be Defined Via User Inputs:
      var passwordLength;
      var specialCharacters;

      //Define (and validate) user password criteria via prompts

        // prompt the user to enter how long they want their pw to be, and give them the constraints
         var passwordLength = prompt("How many characters do you want your password to be? (A numerical value between 8-128 must be submitted)");

            // Test that pw lenth variable is set by logging to console
            console.log("Number of charcters set for item = " + passwordLength);

            // Validate if it meets required criteria

              //If criteria is not met, alert to failure and re ask them the question... (HOW)
              if (passwordLength < 8 || passwordLength > 123) {
                alert("ERROR: You have not met the required entry criteria");
              }

              //If criteria is met, alert them of the number they chose and send them to the next prompt for special characters....
              else if (passwordLength > 8 && passwordLength <123) {
                alert ("You have choosen a password length of " + passwordLength + " characters");
              }

        // prompt user to enter how many special characters they want, and give them constraints (they cant have too many characters so I constrain based on password entry5)
        var specialCharacters = prompt("How many special characters do you want in your password? (A numerica value between 1 and " + [passwordLength-4] + " must be selected");

          //Test that the pw number of special characters is set by logging to the console
          console.log("Number of special charcters set for item = " + specialCharacters);

          //Validate if its meets required criteria
          
                //If criteria is not met, alert to failure and re ask them the question... (HOW)
                if (specialCharacters > [passwordLength-4] || specialCharacters<1) {
                  alert ("ERROR: You have not met the required entry criteria");
                }
                
                // If criteria is met, alert them of the number they chose and proceed to generate a password for them...
                else if (specialCharacters < [passwordLength-4] && specialCharacters>1) {
                  alert ("You have choosen " + specialCharacters + " special characters to use in your password")
                }
    }

      // Generate a Password based on the user inputted criteria....
        //---Enter Code--//

 