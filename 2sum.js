function sortIntegerArr(itemsArr) {
    console.time('sort');
    itemsArr.sort(function (a, b) {
        return a - b;
    });
    console.timeEnd('sort');
    return itemsArr;
}

function binSearch(itemsArr, target, greaterThan) {
    var l = 0;
    var r = itemsArr.length - 1;
    while (true) {
        if (l > r) {
            // not found exact match, so we return nearest:
            if (greaterThan) {
                return l;
            } else {
                return r;
            }
        } else {
            var m = Math.floor((l + r) / 2);
            var am = itemsArr[m];
            if (am < target) {
                l = m + 1;
            } else if (am > target) {
                r = m - 1;
            } else {
                // am === target
                return m;
            }
        }
    }
}

function count2sums(itemsArr, begin, end) {
    const seenTs = new Array(end - begin + 1); // to store t's that we've seen
    console.time('processing');

    for (var i = 0; i < itemsArr.length; i++) {
        var item = itemsArr[i];

        var max = end - item;
        var min = begin - item;

        var startIdx = binSearch(itemsArr, min, true);
        var endIdx = binSearch(itemsArr, max, false);

        for (var j = startIdx; j <= endIdx; j++) {
            var sum = item + itemsArr[j];
            if (sum >= begin || sum <= end) {
                seenTs[sum - begin] = true;
            }
        }
    }

    console.timeEnd('processing');

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