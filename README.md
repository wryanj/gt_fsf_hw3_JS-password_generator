# gt_fsf_hw3_JS_password_generator
Random Password Generator Based on User Entered Criteria

## Table of Contents

1.  [Deployed Applicatoin](#Deployed-Applicatoin)
2.  [Motivation](#Motivation)
3.  [Description](#Description)
4.  [Credits](#Credits)

## Deployed Applicatoin
[ENTER]

## Motivation
I did this to learn more about javascript, and the various ways to write logic, loops, variables, arrays and manipulate other elements of an HTML file.

## Description
This assignment provided us with some starter HTML and CSS, and then asked us to write code to generate a random password based on specified user criteria and display that password to them within the interface to the HTML file.

I did this by first writing an outline in comments describing what I wanted to achieve, and how I would do it:

![image](https://user-images.githubusercontent.com/72420733/103179851-12889a00-485e-11eb-85b0-503d8b739b16.png)

I also did an initial flow diagram to get an idea of how it should work for a customer, but ended up just using my comments outline since I was changing as I progressed and learned through building some pieces, then testing.

![image](https://user-images.githubusercontent.com/72420733/103179879-49f74680-485e-11eb-9c8d-a8ac9d36faf2.png)

Once inputs were collected, I created some arrays based on user criteria that I then would then shuffle (using thh fisher-yates algorythm) and join into a single string with no spaces. 

![image](https://user-images.githubusercontent.com/72420733/103179893-6bf0c900-485e-11eb-929b-3cfe055b6107.png)

If users hit cancel at certain points of the process, it stops running the function and breaks all active loops.

Lastly, I used console.log frequently to track the status of my variables and user inputs through different phases of the code. This helped me very early on identify a newbie issue where I had not used the right operator in a comparison ( I used = instead of ===) and was thus unintentionally resetting the value of a boolean which was then messing up the rest of my code. This activity early on really helped me to understand the value of console log and what it actually means to show you whats happening in phases of your program along the way. I had heard this in class, but now feel like I really understand it. 

By console logging the boolean various times after each major code block, I was able to narrow down where the change was happening and thus more easily identify the error I had. 

![image](https://user-images.githubusercontent.com/72420733/103179924-ace8dd80-485e-11eb-8a33-827ab70ec407.png)


## Credits
I utilized some stack, w3 schools, and took some code directly from a published function that shuffles arrays using the fisher-yates algorythm. This is called out in my code by the comments. 
