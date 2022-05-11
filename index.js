/**
 * 
 * @author danos
 * @description Second Assignment
 */

const express = require('express');
const readline = require('readline');
const app = express();

let capture = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let interval = setInterval(() => print(), 1000);
let count = 0;
let sum = count;

app.listen('3000', () => {
    console.log('Hello!\nPress Enter:');
    interface();
    interval;
});

let interface = () => {
    capture.question('', () => {
        clearInterval(interval);
        console.log(`Suma total: ${sum}`);
        handleSwitch();
    });
};

let handleSwitch = () => {
    capture.question('Do you want to reset, continue, or exit?   R/C/E\n', (resp) => {
        switch (resp.toUpperCase()) {
            case 'R':
                handleReset();
                break;
            case 'C':
                handleContinue();
                break;
            case 'E':
                console.log('Leaving...\n');
                process.exit();
            default:
                console.log('Wrong button!');
                handleSwitch();
                break;
        }
    });
};

const handleReset = () => {
    console.log('Restarting...\n');
    count = 0, sum = count;
    interval = setInterval(() => print(), 1000);
    interface();
};

const handleContinue = () => {
    console.log('Continuing...\n');
    interval = setInterval(() => {
        print();
    }, 1000);
    interface();
};

const print = () => {
    console.log(++count);
    sum = sum + count;
};