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

export const candidatesIcon = <i className="fas fa-users"></i>;
export const loginUrl = "http://localhost:3333/login";
export const homePageUrl = "http://localhost:3000/home";