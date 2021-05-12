export const transformTextToUrl = text => {
    const url = text.replace(" ", "-");
    
    return url.toLowerCase();
} 

export const isEmail = email => {
    const valid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return  valid.test(email);
}

export const minLength = (value, min) => {
    return value.length >= min    
}

export const maxLength = (value, max) => {
    return value.length <= max    
}