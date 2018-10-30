/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//console.log("Hello World!");

var loginpopup = document.querySelector("section:not([class])");

var h2Array = document.querySelector("h2");
//Maak array van alle h2's op de loginpagina.

h2Array.addEventListener('click', uitklap)

function uitklap() {


    loginpopup.classList.toggle("open");
    h2Array.classList.toggle("open");


}
