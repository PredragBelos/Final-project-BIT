
/*Class that present a company objects*/
export class Company {
    constructor(companyName) {
        try {

            if (!companyName) {
                throw new Error("Company name must be defined!");
            }

            this.companyName = companyName;

        } catch (error) {
            console.log(error.message);
        }
    }
}