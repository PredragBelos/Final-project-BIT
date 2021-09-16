
/*Class that present a company objects*/
export class Company {
    constructor(id, companyName) {
        try {

            /* Data validation */
            if (!id) {
                throw new Error("Company id must be defined!");
            }
            if (!( typeof id === "number")) {
                throw new Error("Type of company id must be a number!");
            }
            if (!companyName) {
                throw new Error("Company name must be defined!");
            }
            if (!( typeof companyName === "string")) {
                throw new Error("Type of company name must be a string!");
            }

            this.id = id;
            this.companyName = companyName;

        } catch (error) {
            console.log(error.message);
        }
    }
}