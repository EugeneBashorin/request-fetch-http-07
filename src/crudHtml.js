export function displaySelectedCountryInfo(emptyDiv, markupSelectedCountry){
    emptyDiv.innerHTML += markupSelectedCountry;
}

export function displayInputToList(listEl, markup){
    listEl.innerHTML = markup;
}

export function removeHtmlBlock(element){
    element.innerHTML = "";
}