
class HomePage {

    static startYear = 1990;
    static slideIndex = 0;

    constructor()
    {
        this.setYearsOfExperiance();
        HomePage.showSlides();
    }

    setYearsOfExperiance() {
        const currentYear = new Date().getFullYear();
        const yearsOfExperiance = currentYear - HomePage.startYear;
        document.getElementById("years-of-experiance").innerText = `${yearsOfExperiance}`;
    }

    static showSlides() {
        let slides = document.getElementsByClassName("slideshow-image");

        // Hide All
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Increment the index
        HomePage.slideIndex++;
        if (HomePage.slideIndex >= slides.length)
        {
            HomePage.slideIndex = 0;
        }

        slides[HomePage.slideIndex].style.display = "";
        setTimeout(HomePage.showSlides, 8000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var homePage = new HomePage();
});