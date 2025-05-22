function test(mark, text){
    const mark_F= "F"
    const mark_D= "D"
    const mark_C= "C"
    const mark_B= "B"
    const mark_A= "F"

    if(mark<=59 && mark>0){
        return mark_F;
    }
    else if(mark<69 && mark>60){
        return mark_D
    } 
    else if(mark<79 && mark>69){
        return mark_C
    } 
    else if(mark<89 && mark>79){
        return mark_B
    }  
    else if(mark<=100 && mark>89){
        return mark_A
    }
    else {
        console.log("nothing");
    }            
       
   
} 
console.log(test(80))
