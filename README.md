# Second Assignment

## How to run

This node proyect has use the nodemon and express libraries just to execute the enviroment, using the next command:
#### npm i nodemon express
but, actually you just need to use
####
    npm i

After all node_modules install, you can run the proyect using
####
    npm start
This will run the application.

## How it works

This application uses two variables, one to count, and one to make the sum. We make an interval that calls the function ' print( ) ' every second, to print the count and sum the actual number.

When the application starts, the count begins, and you can press Enter key to interrupt the count and choose if, you want to continue, restart the count, or exit from the program. For this, we use the function ' handleSwitch( ) '.

The ' handleSwitch( ) ' function captures when we press Enter and make the question: ' Do you want to reset, continue, or exit?   R/C/E\n ' and we make a switch case, depending on the case we call ' handleReset( ) ', ' handleContinue( ) ', or we exit.

This two functions are similar, they restart or continue the interval print, make some sum operation, and return to the main interface.