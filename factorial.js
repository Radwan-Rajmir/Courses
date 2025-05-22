function factorial(n){
    if (n==0){
        console.log(1)
    }else{
    var result= n
    for(let i=1; i<n; i++){
        
        result= result*(n-i)
        
    }
console.log(result)}
}
factorial(5)