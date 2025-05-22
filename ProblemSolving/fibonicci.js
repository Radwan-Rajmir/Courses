function feb(n){
    var series=[0]
    if (n==1){
        series=series
    } else{
        var series= [0, 1]

    }

    
    for(let i=2;i<n; i++){
        result= series[i-1]+series[i-2]
        series.push(result)
    }
    console.log(series)
}
feb(3)