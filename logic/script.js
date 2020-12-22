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

      //Define the desired lenght of the random password. Variable to be defined:
      var passwordLength;

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


        // Determine which character types should be included in the password. Variables to be defined:
          var includeUpperCase;
          var includeLowerCase;
          var includeNumbers;
          var includeSpecialCharacters;

          //Run the code block at least once to prompt for variable, and validate if it meets criteria
          do{

            //Notify the user what they must include in their password
            alert("You will be asked to confirm which character types you wish to include in your password. You must choose to include at least one character type!")

            //Ask the user if they want to include certain character types in their password
            var includeUpperCase = confirm("Do you want to include upper case characters in your password?");
              console.log("Include Upper Case Characters? = " + includeUpperCase);

            var includeLowerCase = confirm("Do you want to include lower case characters in your password?");
              console.log("Include Lower Case Characters? = " + includeLowerCase);

            var includeNumbers = confirm("Do you want to include numbers in your password?");
              console.log("Include Numbers? = " + includeNumbers);

            var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");
              console.log("Include Special Characters? = " + includeSpecialCharacters);
            
            //If they chose at least one type, summarize thier selectoin and proceed to generate the password for them based on their criteria
            if ((includeUpperCase=true) || (includeLowerCase=true) || (includeNumbers=true) || (includeSpecialCharacters=true)) {
              alert("Your selections are: Include Upper Case? = " + includeUpperCase + " Include Lower Case? = " + includeLowerCase + " Include Numbers? = " + includeNumbers + " Include Special Characters? = " + includeSpecialCharacters)
            }

            else if ((includeUpperCase=false) && (includeLowerCase=false) && (includeNumbers=false) && (includeSpecialCharacters=false)){
              alert("You did not choose at least character type to choose in your password. Click OK to try again, and please select at least one character type")
            }
          }

           //If user has not selected at least one character type (aka the condition below), re-ask them the questions until they select at least one
           while ((includeUpperCase=false) && (includeLowerCase=false) && (includeNumbers=false) && (includeSpecialCharacters=false));   

    } 
    
      
      // Generate a Password based on the user inputted criteria....(NEED TO EXTEND FUNCTION CURLY BRACE FROM WRITE PASSWORD THOUGH WHEN THIS IS DONE)
      //function createPassword (passwordLength) { 

        //Define additional variables to be defined
        //var RandomPassword; //This is what we want to generate for them
        //var UseUpperCaseCharacters;
        //var UseLowerCaseCharacters;
        //var UseSpecialCaseCharacters

        //Define additional variables to be referenced
        //var RefUpperCaseCharacters = ["A,B,C,D,EF,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,W,Y,Z,"] // Review if this is the right way to list an array
        //var RefLowerCaseCharacters =  "abcdefghijklmnopqrstuvwxyz"
        //var RefSpecialCaseCharacters = "!@#$%^&*"

        //Pick some random upper case letters to use in the random password based on user entry on how many they wanted

        //Pick some random lower case letters to use in the random password based on user entry on how many they wanted

        //Pick some random lower case letters to use in the random password based on user entry on how many they wanted

        //Combine the newly defined variables above into a single string

        //Scramble the order of characters randomly within that single string and set it equal to the password

        //Display the password using document.getelemenetbyid.innerhtml within the display area of the viewport

      //}       

     


   


      
