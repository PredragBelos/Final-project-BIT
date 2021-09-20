
/*Class that present a interview objects*/
export class Interview {
    constructor(interviewID, interviewDate, note, phase, status, companyId, companyName, candidateId, candidateName){
        
        /* Data validation*/
        try {

            if(!interviewID){
                throw new Error("Interview ID must be defined!");
            }
            if(!(typeof interviewID === "number")){
                throw new Error("Type of interview id must be a number!");
            }
            if(!interviewDate){
                throw new Error("Interview date must be defined!");
            }
            if(!(typeof interviewDate === "string")){
                throw new Error("Type of interview date must be a string!");
            }
            if(!note){
                throw new Error("Interview note must be defined!");
            }
            if(!(typeof note === "string")){
                throw new Error("Type of interview note must be a string!");
            }
            if(!phase){
                throw new Error("Interview phase must be defined!");
            }
            if(!(typeof phase === "string")){
                throw new Error("Type of interview phase must be a string!");
            }
            if(!status){
                throw new Error("Interview status must be defined!");
            }
            if(!(typeof status === "string")){
                throw new Error("Type of interview status must be a string!");
            }
            if(!companyId){
                throw new Error("Company id must be defined!");
            }
            if(!(typeof companyId === "number")){
                throw new Error("Type of company id must be a number!");
            }
            if(!companyName){
                throw new Error("Company name must be defined!");
            }
            if(!(typeof companyName === "string")){
                throw new Error("Type of company name must be a string!");
            }
            if(!candidateId){
                throw new Error("Candidate id must be defined!");
            }
            if(!(typeof candidateId === "number")){
                throw new Error("Type of candidate id must be a number!");
            }
            if(!candidateName){
                throw new Error("Candidate name must be defined!");
            }
            if(!(typeof candidateName === "string")){
                throw new Error("Type of candidate name must be a string!");
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
           this.filterParams = `${candidateName} ${companyName}`;

        } catch (error) {
            console.log(error.message);
        }
    }

    /*Method for return correct date format*/
    getInterviewDate() {
        let result = `${this.interviewDate.getDate()}.${this.interviewDate.getMonth() + 1}.${this.interviewDate.getUTCFullYear()}.`;
        return result;
    }
}