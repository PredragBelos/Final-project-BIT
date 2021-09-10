import { Candidate } from "../entitys/candidate";
import { Company } from "../entitys/company";
import { getCandidateUrl, getCompanyUrl } from "../shared/publicData";

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
        return new Candidate(candidate.id ,candidate.name, candidate.email, candidate.birthday, candidate.education, "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");
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