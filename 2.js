function maxInt(...x){
    if (x.length <= 0) {
        console.log("null");
    }
    else{
        let max;
        let arr = [];
        for (let i in x) {
            arr.push(parseFloat(x[i]));
            max = Math.max(...arr)
        }
        if(Number.isInteger(max) && max<=BigInt(Number.MAX_SAFE_INTEGER)){
            console.log(BigInt(max))
        }
        else{
            console.log("Big Error")
        }
        
    }
}
maxInt(1n, 10n, 5n)
maxInt("10", 5n, 1)
maxInt()
maxInt(2 ** 53 - 1)
maxInt(2 ** 53)
maxInt("10" / 3)
maxInt("10" / 2)
maxInt(10 - 12, 10 - 10, 10 - 11)
maxInt(0n)
maxInt("")