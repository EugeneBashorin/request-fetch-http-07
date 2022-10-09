const debounce = require('lodash.debounce');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {fetchCountries} from './fetchCountries';
import {displaySelectedCountryInfo} from './crudHtml';
import {displayInputToList} from './crudHtml';
import {removeHtmlBlock} from './crudHtml';
import {getDataToList} from './make_markup';
import {getSelectedCountryData} from './make_markup';

import "./styles/main.css";

const DEBOUNCE_DELAY = 2000;
const inputField = document.querySelector("#search-box");
const listElement = document.querySelector(".country-list");
const selectedCountryInfo = document.querySelector(".country-info");

inputField.addEventListener("input", debounce(inputHandler, DEBOUNCE_DELAY));
    
function inputHandler(event){    
    event.preventDefault();

    let countryName = event.target.value.trim(" ");
    inputField.value = countryName;

    if(countryName.length === ""){ 
        return;
    }
    if(countryName.length <= 1){
        Notify.info("Too many matches found. Please enter a more specific name.");
        return;
    }

    fetchCountries(countryName).then(data => {
        if(data.length > 10){
            Notify.warning("Too many matches found. Please enter a more specific name.");
        }
        if(data.length > 1 && data.length <= 10){
            removeHtmlBlock(listElement);
            removeHtmlBlock(selectedCountryInfo);
            const markUp = getDataToList(data);
            displayInputToList(listElement, markUp)
        }
        if(data.length === 1){
            removeHtmlBlock(listElement);
            removeHtmlBlock(selectedCountryInfo);
            const markUp = getSelectedCountryData(data);
            displaySelectedCountryInfo(selectedCountryInfo, markUp);
        }
    }).catch(error => {
        console.log(error);
        Notify.failure("Oops, there is no country with that name.");
    });
}