
/*Class that present a candidates objects*/
export class Candidate {
    constructor(name, email, dateOfBirth, education, image) {
        try {

            if (!name) {
                throw new Error("Candidate name must be defined!");
            }
            if (!email) {
                throw new Error("Candidate email must be defined!");
            }
            if (!dateOfBirth) {
                throw new Error("Candidate dateOfBirth must be defined!");
            }
            if (!education) {
                throw new Error("Candidate education must be defined!");
            }
            if (!image) {
                throw new Error("Candidate image must be defined!");
            }

            this.name = name;
            this.email = email;
            this.dateOfBirth = new Date(dateOfBirth);
            this.education = education;
            this.image = image;

        } catch (error) {
            console.log(error.message);
        }
    }
}