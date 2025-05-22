function Ispalindrom(text){
    for(let i=0; i<=text.length-1; i++){
        let j=text.length-1-i
        if(text[i]!=text[j]){
            return false
            
        }

    }
    return true
}
function Printplindrom(text, printdata="No"){
    if (Ispalindrom(text)== true){
        console.log(`${text} is palindrom`)
        printdata="yes"
        console.log(printdata)
        
    }else{
        console.log(`${text} is not palinfrom`)
        console.log(printdata)
    }
}
Printplindrom("12321")