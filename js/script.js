// for mobile navigation menu
function mobList() {
    var x = document.querySelector(".navigation__list");
    var nav = document.querySelector(".navigation");
    var navNav = document.querySelector(".navigation__nav");
    var navIcon = document.querySelector(".navigation__icon");
    var navIconI = document.querySelector(".navigation__icon .fa");

    if (x.style.display === "flex") {
        navIconI.classList.remove("fa-times");
        navIconI.classList.add("fa-bars");
        navIcon.style.marginLeft = "0rem";

        nav.style.width = "8rem";
        x.style.display = "none";


        if (screen.width < 900) {
            nav.style.backgroundColor = "transparent";
            nav.style.right = "-1.2rem";
            nav.style.top = "1rem";
        }

        if (screen.width < 600) {
            navIcon.style.transform = "translateY(-3rem)";
        }
    } else {
        navIconI.classList.remove("fa-bars");
        navIconI.classList.add("fa-times");
        navIcon.style.marginLeft = "5rem";

        if (screen.width > 900)
            nav.style.width = "50%";
        else {
            nav.style.right = "0rem";
            nav.style.top = "0rem";
            navNav.style.padding = "1rem";
            nav.style.width = "25%";
            nav.style.backgroundColor = "#4b7bec";
            nav.style.borderRadius = "0px";
            nav.style.margin = "0px";

            if (screen.width < 600) {
                nav.style.width = "35%";
                nav.style.height = "100%";
            }
        }

        x.style.display = "flex";
        x.style.justifyContent = "space-between";
        x.style.alignItmes = "center";
    }
}


/** MODAL */
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


document.getElementById("1").onclick = function () {
    modalImg.src = "../img/eventdetails/Bootcamp.PNG";
    modal.style.display = "block";
    captionText.innerHTML = "Edgeverve Bootcamp";
}

document.getElementById("2").onclick = function () {
    modalImg.src = "../img/eventdetails/TagCoding.png";
    modal.style.display = "block";
    captionText.innerHTML = "Tag coding";
}

document.getElementById("3").onclick = function () {
    modalImg.src = "../img/eventdetails/ep.png";
    modal.style.display = "block";
    captionText.innerHTML = "Elavator pitch";
}

document.getElementById("4").onclick = function () {
    modalImg.src = "../img/eventdetails/GD.png";
    modal.style.display = "block";
    captionText.innerHTML = "Graphic designing";
}

document.getElementById("5").onclick = function () {
    modalImg.src = "../img/eventdetails/Hackathon.png";
    modal.style.display = "block";
    captionText.innerHTML = "Hackathon";
}

document.getElementById("6").onclick = function () {
    modalImg.src = "../img/eventdetails/IOT.png";
    modal.style.display = "block";
    captionText.innerHTML = "Internet of things";
}

document.getElementById("7").onclick = function () {
    modalImg.src = "../img/eventdetails/ItQuiz.PNG";
    modal.style.display = "block";
    captionText.innerHTML = "IT Quiz";
}

document.getElementById("8").onclick = function () {
    modalImg.src = "../img/eventdetails/Wd.png";
    modal.style.display = "block";
    captionText.innerHTML = "Web designing";
}

document.getElementById("9").onclick = function () {
    modalImg.src = "../img/eventdetails/bitm.PNG";
    modal.style.display = "block";
    captionText.innerHTML = "Best IT Manager";
}

document.getElementById("10").onclick = function () {
    modalImg.src = "../img/eventdetails/Eventx.PNG";
    modal.style.display = "block";
    captionText.innerHTML = "Event X";
}

document.getElementById("11").onclick = function () {
    modalImg.src = "../img/eventdetails/Gaming.png";
    modal.style.display = "block";
    captionText.innerHTML = "Gaming.";
}

document.getElementById("12").onclick = function () {
    modalImg.src = "../img/eventdetails/MuN.png";
    modal.style.display = "block";
    captionText.innerHTML = "MUN";
}

document.getElementById("13").onclick = function () {
    modalImg.src = "../img/eventdetails/PhotoVideo.png";
    modal.style.display = "block";
    captionText.innerHTML = "Photo & Videography";
}

document.getElementById("14").onclick = function () {
    modalImg.src = "../img/eventdetails/TechWizardTournament.png";
    modal.style.display = "block";
    captionText.innerHTML = "Techwizard tournament";
}
