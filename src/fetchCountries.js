//export function fetchCountries(name){ 
export const fetchCountries = (name) => {        
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags`, {
         headers: {
           Accept: "application/json",
         }
       }).then(response => {
         if(!response.ok){
             throw new Error(response.statusText)
         }
         return response.json();
     });
 }
 