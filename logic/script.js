
//My Logic Script

  //GenerateRandomPassword Function To Be Initiated on Call Via Onclick Attribute in HTML Button "Generate Password"
    function generateRandomPassword() {

      //Define (and validate) user password criteria via prompts and Confirmations

        //Get and Validate their PW Lenght Preference

          // Variable to be defined:
          var passwordLength;

          //Run the code block at least once to prompt for vairable, and validate if it meets the needed criteria
          do{

            //Ask the user to enter their pw lenght and present them with the constraints
            var passwordLength = prompt("How many characters do you want your password to be?\n\nA numerical value between 8-128 must be submitted.");

              //log the numerical value captured for the variable for purpose of testing code
              console.log("Total number of characters (length) user wants in their password = " + passwordLength);

            //if the user hits cancel, return the function
            if (passwordLength === null) {
              alert("You have canceled the operation. Click the generate passwor button to try again.")
              return;
            }

            //if the passowrd criteria is not met, present and error message. 
            else if (passwordLength < 8 || passwordLength > 123) {
            alert("You have not met the required entry criteria.\n\nHit 'close' to try again, and please follow the required entry criteria.");
            }
      
            //If criteria is met, alert them of the number they chose and send them to the next prompt for special characters (breaks while loop)
            else if (passwordLength > 8 && passwordLength <123) {
            alert ("You have choosen a password length of " + passwordLength + " characters");
            }
          }

          //If the prompted entry is valid, continue to next code. If its not (e.x if the condition in while is present) loop through the code again until a valid answer is provided
          while (passwordLength < 8 || passwordLength > 123);


        // Get and Validate What Character Types Shold be Included
        
          //Variable to Be Defined
          var includeUpperCase;
          var includeLowerCase;
          var includeNumbers;
          var includeSpecialCharacters;

          //Run the code block at least once to prompt for variable, and validate if it meets criteria
          do{
            //Notify the user of the minimum number of character types they must confirm in their random password
            alert("You will be asked to confirm which character types you wish to include in your password.\n\nWhen prompted, choose 'ok' if you wish to include the character type or 'cancel' if you do not. \n\nYou must choose to include at least one character type.")

            //Ask the user to confirm which character types they would like to use in their random password
            var includeUpperCase = confirm("Do you want to include upper case characters in your password?");
              console.log("Include Upper Case Characters? = " + includeUpperCase);

            var includeLowerCase = confirm("Do you want to include lower case characters in your password?");
              console.log("Include Lower Case Characters? = " + includeLowerCase);

            var includeNumbers = confirm("Do you want to include numbers in your password?");
              console.log("Include Numbers? = " + includeNumbers);

            var includeSpecialCharacters = confirm("Do you want to include special characters in your password?");
              console.log("Include Special Characters? = " + includeSpecialCharacters);
            
            //If they chose at least one type, summarize thier selectoin and proceed to generate the password for them based on their criteria
            if ((includeUpperCase===true) || (includeLowerCase===true) || (includeNumbers===true) || (includeSpecialCharacters===true)) {
              alert("Your final selections are:\n\nNumber of Characters to Include in Password? = " + passwordLength + "\nInclude Upper Case? = " + includeUpperCase + "\nInclude Lower Case? = " + includeLowerCase + "\nInclude Numbers? = " + includeNumbers + "\nInclude Special Characters? = " + includeSpecialCharacters)
            }

            //if they dont choose at least one true value, ask them if they want ot try again. If not, return them to start
            else if ((includeUpperCase===false) && (includeLowerCase===false) && (includeNumbers===false) && (includeSpecialCharacters===false)){
              var confirmContinue = confirm ("You did not choose at least one character type to use in your password. \n\nClick OK to try again, or cancel if you want to stop the password generation process.")
              console.log("confirmContinue = " + confirmContinue);
              if (confirmContinue === false) {
                alert("You have cancelled the operation.\n\n Click the generate password button to try again.");
                return;
              }
            }
          } 

          //If no character types are selected (condition stated below) re run the prompt loop for character types
          while (includeUpperCase===false && includeLowerCase===false && includeNumbers===false && includeSpecialCharacters===false && confirmContinue === true)

      //Generate Random Password Based On User Selected Criteria

        //Define Reference Arrays For Random PW Generation
        var upperCaseReference = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var lowerCaseReference =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var numberReference = [0,1,2,3,4,5,6,7,8,9];
        var specialCharacterReference = ["!","@","#","$","%","^","&","*"]; // Review if this is the proper array of special characters

        //Define variables to be defined based on Reference Arrays and User Criteria
        var upperCaseCharacters;
        var lowerCaseCharacters;
        var numberCharacters;
        var specialCharacters;
        var randomPasswordArray=[];
        var randomPasswordString;

        //For all arrays until i is equal to the pw length, Loop Through and Index values from the ref arrays and add them to the unscrambled characters array
        console.log("password lengh = " + passwordLength)

        for (i=0; i<passwordLength;) {

          //If includeUpperCase is true, index a random value 0-25 (for 26 letters in alphabet array) from the upperCaseReference to create new array upperCaseCharacters
          if (includeUpperCase === true && i<passwordLength) {
            var upperCaseCharacters = upperCaseReference[Math.floor(Math.random()*26)];
            randomPasswordArray.push(upperCaseCharacters);
            i++;
            console.log("iteration count for the for loop = " + i);
          }

          //If includeLowerCase is true, index a random value 0-25 (for 26 letters in alphabet array) from the lowerCaseReference to create new array lowerCaseCharacters
          if (includeLowerCase === true && i<passwordLength) {
            var lowerCaseCharacters = lowerCaseReference[Math.floor(Math.random()*26)];
            randomPasswordArray.push(lowerCaseCharacters);
            i++;
            console.log("iteration count for the for loop = " + i);
          }

          //If includeNumbers is true, index a random value 0-9 (for 10 numbers including 0) from the numbersReference to create new array numbersCharacters
          if (includeNumbers === true && i<passwordLength) {
            var numberCharacters = numberReference[Math.floor(Math.random()*10)];
            randomPasswordArray.push(numberCharacters);
            i++;
            console.log("iteration count for the for loop = " + i);
          }
          
          //If includeSpecialCharacters is true, index a random value 0-7 (for 8 special characters) from the specialCharactersArray
          if (includeSpecialCharacters === true && i<passwordLength) {
            var specialCharacters = specialCharacterReference[Math.floor(Math.random()*8)];
            randomPasswordArray.push(specialCharacters);
            i++;
            console.log("iteration count for the for loop = " + i);
          }
        }         


        //Check the value of unscrambled chracters pushed to the array from the foor loop
        console.log("random password array (prior to shuffling) = " + randomPasswordArray);

        //Shuffle the randomPassword array using the fischer-yates random algorythm (code taken from fisher-yates Shuffle and applied to my randomPassord array)

          //Define Fisher-Yates Shuffle Function
          function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
          }
        
          // Utilize Fisher-Yates Function to Shuffle my Random Password & Check Value
          shuffle(randomPasswordArray);
          console.log("random password Array (after scramble via fisher-yates) = " + randomPasswordArray);

      //Join the shuffled array into a single string 
      var randomPasswordString = randomPasswordArray.join('');
      console.log("final shuffled password as single string, to be displayed to the user on screen as a single word with no spaces or commas = " + randomPasswordString);

      //Display the result of the shuffled array, joined as a string as the users random password
      document.getElementById("password").innerHTML=randomPasswordString;
      
    }     

     


   


      
