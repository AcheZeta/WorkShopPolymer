// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:
//     createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don 't forget the space after the closing parenthesis!

const createPhoneNumber = (numberArr) => {
    //Eliminamos las comas del Arreglo de numeros usando join(),
    //despues convertimos cada valor en un nuevo string usando split().
    phoneNumber = numberArr.join('').split('');
    //retornamos la concatenación de los parentesís, guiones y numeros.
    //usamos .join() para unir los strings, slice para separar por index.
    return "(" + phoneNumber.join('').slice(0, 3) + ") " + phoneNumber.join('').slice(3, 6) + "-" + phoneNumber.join('').slice(6, 9)
}