export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    window.document.title = "Carlos' Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    document.body.children[0].children[0].innerText = "I am Carlos Guerrero"

}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    document.body.children[1].children[1].innerText = "This is a story all about how my life got flipped turned upside down. I'd like to take a minute so just sit right there, lemme tell you all a story about how i became the prince of a town called Bel Air."
}