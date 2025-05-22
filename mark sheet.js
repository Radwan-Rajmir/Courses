function test(mark, text){
    if(mark<=59 && mark>0){
        console.log("F");
    }
    else if(mark<69 && mark>60){
        console.log("D");
    } 
    else if(mark<79 && mark>69){
        console.log("C");
    } 
    else if(mark<89 && mark>79){
        console.log("B");
    }  
    else if(mark<=100 && mark>89){
        console.log("A");
    }
    else {
        console.log("nothing");
    }            
       
    console.log(typeof mark);
    console.log(typeof text);
    
} 
test(70,"l");
test(97, "00");
test(90, [2,3,5]);