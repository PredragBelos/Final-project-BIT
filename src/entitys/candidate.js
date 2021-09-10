
/*Class that present a candidates objects*/
export class Candidate {
    constructor(id, name, email, dateOfBirth, education, image) {
        try {
            if (!id) {
                throw new Error("Candidate id must be defined!");
            }
            if (!name) {
                throw new Error("Candidate name must be defined!");
            }
            if(!(typeof name === "string")){
                throw new Error("Type of candidate name must be a string!");
            }
            if (!email) {
                throw new Error("Candidate email must be defined!");
            }
            if(!(typeof email === "string")){
                throw new Error("Type of candidate email must be a string!");
            }
            if (!dateOfBirth) {
                throw new Error("Candidate dateOfBirth must be defined!");
            }
            if(!(typeof dateOfBirth === "string")){
                throw new Error("Type of candidate dateOfBirth must be a string!");
            }
            if (!education) {
                throw new Error("Candidate education must be defined!");
            }
            if(!(typeof education === "string")){
                throw new Error("Type of candidate education must be a string!");
            }

            this.id = id;
            this.name = name;
            this.email = email;
            this.dateOfBirth = new Date(dateOfBirth);
            this.education = education;
            this.image = image;

        } catch (error) {
            console.log(error.message);
        }
    }

    getBirthday(){
        let result = `${this.dateOfBirth.getDate()}.${this.dateOfBirth.getMonth() +1 }.${this.dateOfBirth.getFullYear()}.`;
        return result;
    }
}