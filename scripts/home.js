
class HomePage {

    static startYear = 1990;
    static slideIndex = 0;
    static developerCode = "8alCi2u3NaqD";

    constructionCompleteDiv;
    underConstructionDiv;
    submitCodeBtn;
    codeInput;

    constructor()
    {
        this.getElements();
        this.constructionCompleteDiv.style.display = "none";
        this.codeInput.addEventListener("change", () => {
            this.codeInput.setAttribute("aria-invalid", "");
        });
        this.submitCodeBtn.addEventListener("click", () => {
            if (this.codeInput.value === HomePage.developerCode)
            {
                this.underConstructionDiv.style.display = "none";
                this.constructionCompleteDiv.style.display = "";
            }
            else {
                this.codeInput.setAttribute("aria-invalid", true);
            }
        });
        this.setYearsOfExperiance();
        HomePage.showSlides();
    }

    getElements() {
        this.constructionCompleteDiv = document.getElementById("construction-complete-container");
        this.underConstructionDiv = document.getElementById("under-construction-container");
        this.codeInput = document.getElementById("code-input");
        this.submitCodeBtn = document.getElementById("submit-code-btn");
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