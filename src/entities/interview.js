
/*Class that present a interview objects*/
export class Interview {
    constructor(interviewID, interviewDate, note, phase, status, companyId, companyName, candidateId, candidateName){
        try {

            if(!interviewID){
                throw new Error("Interview ID must be defined!");
            }
            if(!interviewDate){
                throw new Error("Interview date must be defined!");
            }
            if(!note){
                throw new Error("Interview note must be defined!");
            }
            if(!phase){
                throw new Error("Interview phase must be defined!");
            }
            if(!status){
                throw new Error("Interview status must be defined!");
            }
            if(!companyId){
                throw new Error("Company id must be defined!");
            }
            if(!companyName){
                throw new Error("Company name must be defined!");
            }
            if(!candidateId){
                throw new Error("Candidate id must be defined!");
            }
            if(!candidateName){
                throw new Error("Candidate name must be defined!");
            }
            

           this.interviewID = interviewID;
           this.interviewDate = new Date(interviewDate);
           this.note = note;
           this.phase =phase;
           this.status = status;
           this.companyId = companyId;
           this.companyName = companyName;
           this.candidateId = candidateId;
           this.candidateName = candidateName;

        } catch (error) {
            console.log(error.message);
        }
    }
    getInterviewDate() {
        let result = `${this.interviewDate.getDate()}.${this.interviewDate.getMonth() + 1}.${this.interviewDate.getUTCFullYear()}.`;
        return result;
    }
}