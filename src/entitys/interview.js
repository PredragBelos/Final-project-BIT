import { Candidate } from "./candidate"
import { Company } from "./company"

/*Class that present a interview objects*/
export class Interview {
    constructor(company, candidate, interviewDate, phase, status, notes){
        try {
            if(!company){
                throw new Error("Company must be defined!");
            }
            if(!(company instanceof Company)){
                throw new Error("Company must be instance of Company!");
            }
            if(!candidate){
                throw new Error("Candidate must be defined!");
            }
            if(!(candidate instanceof Candidate)){
                throw new Error("Candidate must be instance of Candidate!");
            }
            if(!interviewDate){
                throw new Error("Interview date must be defined!");
            }
            if(!phase){
                throw new Error("Phase must be defined!");
            }
            if(!status){
                throw new Error("Status must be defined!");
            }
            if(!notes){
                throw new Error("Notes must be defined!");
            }
            
            this.company = company;
            this.candidate = candidate;
            this.interviewDate = new Date(interviewDate);
            this.phase = phase;
            this.status = status;
            this.notes = notes;

        } catch (error) {
            console.log(error.message);
        }
    }
}