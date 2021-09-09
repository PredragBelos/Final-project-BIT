import { Candidate } from "../entitys/candidate";

let candidate1 = new Candidate("Brian Johnstone", "brian.johnstone@gmail.com", "06/25/1985", "Fakulty of technical sciency Novi Sad", "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");
let candidate2 = new Candidate("Josifine Higins", "josifine.higins@gmail.com", "07/16/1985", "Fakulty of technical sciency Beograd", "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");
let candidate3 = new Candidate("Denis Statham", "denis.statham@gmail.com", "08/05/1985", "Fakulty of technical sciency Niš", "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");
let candidate4 = new Candidate("Jon Higins", "jon.higins@gmail.com", "01/12/1985", "Fakulty of technical sciency Kragujevac", "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");
let candidate5 = new Candidate("Amelia Sigmund", "amelia.sigmund@gmail.com", "02/28/1985", "Fakulty of technical sciency Kraljevo", "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");
let candidate6 = new Candidate("Simon Hejson", "simon.hejson@gmail.com", "03/19/1985", "Fakulty of technical sciency Novi Sad", "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");
let candidate7 = new Candidate("Aleksander Statonsen", "aleksander.statonsen@gmail.com", "11/11/1985", "Fakulty of technical sciency Beograd", "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");
let candidate8 = new Candidate("Brian Lumb", "brian.lumb@gmail.com", "12/13/1985", "Fakulty of technical sciency Subotica", "https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg");

export const candidates = [
    candidate1,
    candidate2,
    candidate3,
    candidate4,
    candidate5,
    candidate6,
    candidate7,
    candidate8,
]

export const candidatesIcon = <svg className="candidateIcon" viewBox="0 0 24 24"><path d="M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z"/></svg>;
export const loginUrl = "http://localhost:3333/login";
export const homePageUrl = "http://localhost:3000/home";