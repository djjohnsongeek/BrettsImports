
class HomePage {

    static startYear = 1990;

    constructor()
    {
        this.setYearsOfExperiance();
    }


    setYearsOfExperiance() {
        const currentYear = new Date().getFullYear();
        const yearsOfExperiance = currentYear - HomePage.startYear;
        document.getElementById("years-of-experiance").innerText = `${yearsOfExperiance}`;
    }
}

var homePage = new HomePage();