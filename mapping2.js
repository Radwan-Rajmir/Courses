function mapping(expextedModel){
    const mobile={
        Vivo:{
          Name: "Vivo", 
          CPU: "7gen 1",
          Ram: 8
        },
        Oppo: {
            Name: "Oppo", 
            CPU: "7gen 2",
            Ram: 10
        },
        Oppo1: {
            Name: "Oppo", 
            CPU: "7gen 2",
            Ram: 10
        }
        
    }
    const carkey= Object.keys(mobile).find((key)=>mobile[key].CPU===expextedModel)
    console.log(carkey)
    const all= Object.keys(mobile).filter((key)=>mobile[key].CPU===expextedModel)
    console.log(all)
    const allitem= Object.values(mobile).filter((mobile)=>mobile.CPU===expextedModel)
    console.log(allitem)
    const mobileValue= Object.values(mobile).find((mobile)=>mobile.CPU===expextedModel)
    console.log(mobileValue)
}
mapping("7gen 2")