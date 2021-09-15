import { errorPageUrl } from "../shared/publicData";
import { getCandidate } from "./apiServices"

/*Function for set candidate data*/
export const setCandidate = setFunction => {
    getCandidate().then(result => {
        setFunction(result);
    })
    .catch(error => {
        window.open(errorPageUrl,"_self");
    })
}
