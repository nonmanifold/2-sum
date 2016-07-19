const readline = require('readline');
const fs = require('fs');
const path = require('path');
const fileName = '_6ec67df2804ff4b58ab21c12edcb21f8_algo1-programming_prob-2sum.txt';
const pathName = path.join('./', fileName);
const count2sums = require('./2sum').count2sums;
const sortIntegerArr = require('./2sum').sortIntegerArr;
var numNumbers = 0;
var items = {};
var itemsArr = new Array(999752);
console.time('loading');
const rl = readline.createInterface({
    input: fs.createReadStream(pathName)
});

rl.on('line', function (line) {
    const num = parseInt(line, 10);
    if (!items.hasOwnProperty(line)) {
        items[line] = num;
        itemsArr.push(num);
        numNumbers++;
    }
});

rl.on('close', function () {
    console.timeEnd('loading');
    itemsArr=sortIntegerArr(itemsArr);
    console.log('Got ' + numNumbers + ' distinct numbers');
    const numOfTs = count2sums(itemsArr, -10000, 10000);
    console.log('Number of target velues: ' + numOfTs);
});