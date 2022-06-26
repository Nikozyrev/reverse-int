module.exports = function reverse (n) {
    let result = ''
    n = String(Math.abs(n))
    for (i = n.length-1;i>=0;i--) {
        result = result + n[i]
    }
    console.log(result)
    return result
}

