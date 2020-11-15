function frankenSplice(arr1, arr2, n) {
let ans = [...arr1]
let left = arr2.slice(0, n)
let right = arr2.slice(n, arr2.length)
return left.concat(ans).concat(right);

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
