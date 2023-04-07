/*  Licensed under GPL-3 <https://www.gnu.org/licenses/gpl-3.0.txt> */
"use strict";

const start_up = () => {
    
    if(localStorage.getItem("theme") == "dark") {
        change_color_theme();
        document.querySelector("#colorMode").innerText = "Set Light Mode";
    }  

}

const set_value = (name = "--bs-body-bg", colorName = "black", selectorValue = ":root") => {

    document.querySelector(selectorValue).style.setProperty(name, colorName);
    
  
  }


const change_card = (cardName, backgroundColor, textColor) => {
    try {
        document.querySelector("#card1").style.backgroundColor = backgroundColor;
        document.querySelector("#card1").style.color = textColor;

    } catch {/* nothing needed to be done; */}

}

const change_color_theme = () => {

    


    
    document.querySelector("nav").classList.toggle("bg-white");
    document.querySelector("nav").classList.toggle("bg-black");

    document.querySelector("nav").classList.toggle("navbar-light");
    document.querySelector("nav").classList.toggle("navbar-dark");

    document.querySelector("body").classList.toggle("bg-light");

    document.querySelector("body").classList.toggle("bg-dark");

    document.querySelector("footer").classList.toggle("bg-white");
    document.querySelector("footer").classList.toggle("bg-black");






    if(document.querySelector("nav").classList.contains("bg-black")) {
        change_card("#card1", "black", "gray");

        document.querySelector("#colorMode").innerText = "Set Light Mode";

        localStorage.setItem("theme", "dark");
        
        
    } else {
        change_card("#card1", "white", "black");

        document.querySelector("#colorMode").innerText = "Set Dark Mode";

        localStorage.setItem("theme", "light");
        
    }
}

start_up();