function sumNumber(num,ter){
    for(let i=0;i<num.length; i++){
        for(let j=i+1; j<=num.length; j++){
            if(num[i]+num[j]==ter)
            {
                console.log(`the expected number are ${num[i]} & ${num[j]}`)
            }
        }
    }

}
sumNumber([1,2,3,5,6,8,9], 10)