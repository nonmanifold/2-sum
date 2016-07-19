function sortIntegerArr(itemsArr) {
    console.time('sort');
    itemsArr.sort(function (a, b) {
        return a - b;
    });
    console.timeEnd('sort');
    return itemsArr;
}

function count2sums(itemsArr, begin, end) {
    const seenTs = new Array(end - begin + 1); // to store t's that we've seen
    for (var i = 0; i < itemsArr.length; i++) {
    
    }
    var tCount = 0;
    seenTs.forEach(function (i) {
        if (i) {
            tCount++;
        }
    });
    return tCount;
}

function test(items, t) {
    var keys = Object.keys(items);
    var keysCount = keys.length;
    for (var i = 0; i < keysCount; i++) {
        var item = items[keys[i]];
        if (items.hasOwnProperty(t - item)) {
            return true;
        }
    }
    return false;
}
module.exports = {
    count2sums,
    sortIntegerArr
};