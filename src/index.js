module.exports = function reverse (n) {
    let arr = Math.abs(n).toString().split('');
    if (arr[arr.length - 1] == 0) {
      arr.pop();
    } else {
      arr;
    }
    return +arr.reverse().join('');
}
