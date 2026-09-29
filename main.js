const background =
    document.getElementById("demon-bg");


/* Number of DEMON LORD columns */

const maxWords = 300;

const words = [];


/* =========================
   CREATE DEMON LORD
========================= */

function createWord() {

    const word =
        document.createElement("div");

    word.className = "demon";


    /*
        Each letter becomes its
        own vertical line.
    */

    const letters =
        "Demon Lord".split("");


    letters.forEach(letter => {

        const span =
            document.createElement("span");

        if (letter === " ") {

            span.className = "space";

        } else {

            span.textContent = letter;

        }

        word.appendChild(span);
        word.style.animationDuration =
        (0.3 + Math.random() * 1.2) + "s";

        word.style.animationDelay =
        (Math.random() * 1) + "s";

    });


    /* Random horizontal position */

    word.style.left =
        Math.random() * 100 + "%";


    /* Random size */

    const size =
        14 + Math.random() * 20;

    word.style.fontSize =
        size + "px";


    /* Random transparency */

    word.style.opacity =
        0.08 + Math.random() * 0.35;


    /* Start above screen */

    let y =
        -200 - Math.random() * 700;


    /* Random falling speed */

    const speed =
        1 + Math.random() * 3;


    background.appendChild(word);

    words.push(word);


    /* =========================
       FALL
    ========================= */

    function fall() {

        y += speed;

        word.style.top =
            y + "px";


        /* Respawn after leaving screen */

        if (
            y >
            window.innerHeight + 250
        ) {

            word.remove();

            const index =
                words.indexOf(word);

            if (index !== -1) {
                words.splice(index, 1);
            }

            return;
        }


        requestAnimationFrame(fall);
    }


    fall();

}


/* =========================
   CONTINUOUS SPAWN
========================= */

function spawn() {

    if (
        words.length <
        maxWords
    ) {

        createWord();

    }


    const delay =
        30 + Math.random() * 120;


    setTimeout(
        spawn,
        delay
    );
}




spawn();