// MENU
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navbar-menu ul');
const navLinks = document.querySelectorAll('.navbar-menu a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
    if(navMenu.classList.contains('open')) {
        navToggler.click();
    }
}


// Carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            992: {
                items: 2,
                nav: true,
                margin: 50,
            },
            1200: {
                items: 3,
                nav: true,
                margin: 50,
            }
        }
    })

    const arrowL = document.querySelector(".owl-prev");
    arrowL.innerHTML = '<div class="arrow-left"><svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 7.75h14.825L11.538 2.3A1.251 1.251 0 1113.463.7l6.25 7.5c.041.06.08.122.112.187 0 .063 0 .1.088.163.056.143.086.296.087.45a1.25 1.25 0 01-.087.45c0 .062 0 .1-.088.162-.033.066-.07.128-.113.188l-6.25 7.5a1.248 1.248 0 01-.962.45 1.25 1.25 0 01-.963-2.05l4.538-5.45H1.25a1.25 1.25 0 110-2.5z" fill="#fff"/></svg></div>';

    const arrowR = document.querySelector(".owl-next");
    arrowR.innerHTML =  '<div class="arrow-right"><svg width="20" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 7.75h14.825L11.538 2.3A1.251 1.251 0 1113.463.7l6.25 7.5c.041.06.08.122.112.187 0 .063 0 .1.088.163.056.143.086.296.087.45a1.25 1.25 0 01-.087.45c0 .062 0 .1-.088.162-.033.066-.07.128-.113.188l-6.25 7.5a1.248 1.248 0 01-.962.45 1.25 1.25 0 01-.963-2.05l4.538-5.45H1.25a1.25 1.25 0 110-2.5z" fill="#fff"/></svg></div>';


})

// Email validation
let emailInput;

$("#email-input").on("change", function() {
    emailInput = $(this).val();
    if (validateEmail(emailInput)) {
        $(this).css({
            color: "green",
            border: "1px solid green",
        });
    } else {
        $(this).css({
            color: "red",
            border: "1px solid red"
        });
    }
});

$("#subscribe-button").on("click", function(e) {
    e.preventDefault();
    if (validateEmail(emailInput)) {
        document.getElementById("email-input").value = "";
        document.getElementById("email-input").placeholder = "Your email has been registered.";

    } else {
        document.getElementById("email-input").value = "";
        document.getElementById("email-input").placeholder = "Enter a valid email.";
        return false;
    }
});


// Validation email regex
function validateEmail(email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    return $.trim(email).match(pattern) ? true : false;
}



