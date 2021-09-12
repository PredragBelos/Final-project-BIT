import { Candidate } from "../entities/candidate";
import { Company } from "../entities/company";
import { Interview } from "../entities/interview";
import { getCandidateUrl, getCompanyUrl, getInterviewUrl } from "../shared/publicData";

/*Function for get candidate data from API and create entity*/
export async function getCandidate() {
    let request = await fetch
        (
            getCandidateUrl,
            {
                method: "GET",
                headers: { "Authorization": `Bearer ${localStorage.getItem("apiKey")}` }
            }
        );

    let data = await request.json();

    let candidateArray = await data.map(candidate => {
        return new Candidate(candidate.id ,candidate.name, candidate.email, candidate.birthday, candidate.education);
    })
    
    return candidateArray;
}


/*Function for get company data from API and create entity*/
export async function getCompany() {
    let request = await fetch
        (
            getCompanyUrl,
            {
                method: "GET",
                headers: { "Authorization": `Bearer ${localStorage.getItem("apiKey")}` }
            }
        );

    let data = await request.json();

    let companyArray = await data.map(company => {
        return new Company(company.id, company.name);
    })
    
    return companyArray;
}


/*Function for get interview data from API and create entity*/
export async function getInterview() {
    let request = await fetch
        (
            getInterviewUrl,
            {
                method: "GET",
                headers: { "Authorization": `Bearer ${localStorage.getItem("apiKey")}` }
            }
        );

    let data = await request.json();

    let interviewArray = await data.map(interview => {
        return new Interview(interview.id, interview.interviewDate, interview.note, interview.phase, interview.status, interview.companyId, interview.companyName, interview.candidateId, interview.candidateName);
    });
    
    return interviewArray;
}