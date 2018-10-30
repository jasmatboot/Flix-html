/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//console.log("Hello World!");

var catpopup = document.querySelector("nav");
var catbutton = document.querySelector("button");

catbutton.addEventListener("click", function () {

    catpopup.classList.toggle("open");

});

var divArray = document.querySelectorAll("footer div:first-child");

//Maak array van alle lijst div's op de loginpagina.

for (let i = 0; i < divArray.length; i++) {
    divArray[i].addEventListener('click', loader)
}

function loader(event) {

    var img = event.path[0];

    this.classList.add("open");

    img.src = 'Images/downloadbuttonwit.svg';


    var divArrayOpen = document.querySelectorAll(" div.open");

    for (let i = 0; i < divArrayOpen.length; i++) {
        divArrayOpen[i].addEventListener('click', function (event) {

            var dezediv = this

            this.classList.remove("open");
            this.classList.add("loading");

            setTimeout(
                function () {
                    img.src = 'Images/downloadbuttondone.svg';
                    dezediv.classList.remove("loading");

                },
                200
            );

            var img = this.childNodes[1];

            console.log(this.childNodes)

            img.src = 'Images/downloadbuttonloading.svg';

        });
    }
}
