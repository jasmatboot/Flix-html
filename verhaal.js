/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//console.log("Hello World!");

var like = document.querySelector(".verhaal .control img");

var likeAantal = document.querySelector(".verhaal .control p");

var flylike = document.querySelector(".verhaal > img:last-of-type");

var likes = 72;

like.addEventListener("click", function () {
    if (like.classList.contains('geliked')) {
        // logica om hartje weer uit te zetten
        like.classList.toggle('geliked');

        like.src = 'Images/like.svg';

        likes -= 1

        likeAantal.textContent = likes;

    } else {
        // logica om hartje weer aan te zetten
        like.src = 'Images/like2.svg';

        flylike.classList.add('animatie');

        like.classList.toggle("geliked");
        setTimeout(
            function () {
                like.src = 'Images/geliked.svg';

                likes++

                likeAantal.textContent = likes;
            },
            200
        );
    }

});

var divArray = document.querySelectorAll("footer div:first-child");

//Maak array van alle lijst div 's op de loginpagina.


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

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myFunction();
};
