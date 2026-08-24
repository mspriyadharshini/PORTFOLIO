/* ===============================
   WELCOME POPUP
================================ */

window.addEventListener("load", function () {

    setTimeout(function () {

        let visitor = prompt(
            "👋 Welcome to Priyadharshini's Portfolio!\n\nPlease enter your name:"
        );


        if (
            visitor !== null &&
            visitor.trim() !== ""
        ) {

            alert(
                "Welcome " +
                visitor +
                " 😊\n\nThanks for visiting my portfolio!"
            );

        }

    }, 1000);

});


/* ===============================
   TYPING EFFECT
================================ */

const text = [
    "Aspiring Full Stack Developer",
    "Frontend Developer",
    "Python Developer",
    "Web Developer"
];


let textIndex = 0;
let characterIndex = 0;
let deleting = false;


function typingEffect() {

    const typingElement =
        document.getElementById("typing");


    const currentText =
        text[textIndex];


    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentText.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    }

    else {

        typingElement.textContent =
            currentText.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            textIndex++;

            if (
                textIndex === text.length
            ) {

                textIndex = 0;

            }

        }

    }


    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );

}


typingEffect();


/* ===============================
   SCROLL REVEAL
================================ */

const sections =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(
    function (section) {

        observer.observe(section);

    }
);


/* ===============================
   CONTACT FORM VALIDATION
================================ */

const form =
    document.getElementById("contactForm");


form.addEventListener(
    "submit",
    function (event) {

        const name =
            document.querySelector(
                'input[name="name"]'
            ).value.trim();


        const email =
            document.querySelector(
                'input[name="email"]'
            ).value.trim();


        const message =
            document.querySelector(
                'textarea[name="message"]'
            ).value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            event.preventDefault();

            alert(
                "Please fill all required fields."
            );

            return;

        }


        alert(
            "Thank you " +
            name +
            "! Your message is being sent."
        );

    }
);


/* ===============================
   QR CODE
================================ */

window.addEventListener(
    "load",
    function () {

        const qrElement =
            document.getElementById("qrcode");


        if (qrElement) {

            new QRCode(
                qrElement,
                {
                    text: window.location.href,
                    width: 220,
                    height: 220
                }
            );

        }

    }
);


/* ===============================
   BACK TO TOP
================================ */

const topButton =
    document.createElement("button");


topButton.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';


topButton.className =
    "top-button";


document.body.appendChild(
    topButton
);


window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 500
        ) {

            topButton.classList.add(
                "show"
            );

        }

        else {

            topButton.classList.remove(
                "show"
            );

        }

    }
);


topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);