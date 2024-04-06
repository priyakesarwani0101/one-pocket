const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

function calculateSum(numbers) {
    if (!numbers) {
        return 'No iterable numbers provided';
    }
    let sum = 0;
    for (let number of numbers) {
        if (typeof number === 'number' && !isNaN(number)) {
            sum += number;
        }
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSum(numbers));

function countWords(text) {
    return text.split(/\s+/).filter(word => word !== '').length;
}

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});