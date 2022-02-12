




export const required =(value)=>{
    if (value) return undefined;
    return 'Fields is required';
    
}




export const maxLengthCreator =(maxLength)=>(value)=>{
    return value && value.length > maxLength ?  `Max lenght is ${maxLength} symbols`:  undefined ;
    
}
export const maxLength15 =(value)=>{
    return value && value.length > 15 ?  `Max lenght is 15 symbols`:  undefined ;
    
    
}