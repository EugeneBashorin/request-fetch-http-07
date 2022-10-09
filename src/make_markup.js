export function getDataToList(data){  
    let markup = data.map(
        countryData => `<li><img src=${countryData.flags.png} height="20" width="30">  ${countryData.name.common}</li>`
        ).join("");
    return markup;
}

export function getSelectedCountryData(data){
    let countryDataMark = data.map( data =>
        `<h3><img src=${data.flags.png} height="20" width="30"> ${data.name.official}</h3>
        <ul>
            <li><b>Capital:</b> ${data.capital}</li>
            <li><b>Population:</b> ${data.population}</li>
            <li><b>Languages:</b> ${Object.values(data.languages)}</li>
        </ul>`).join("");
    return countryDataMark;
}