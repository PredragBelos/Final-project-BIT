
/*Class that present a company objects*/
export class Company {
    constructor(id, companyName) {
        try {

            if (!id) {
                throw new Error("Company id must be defined!");
            }
            if (!companyName) {
                throw new Error("Company name must be defined!");
            }

            this.id = id;
            this.companyName = companyName;

        } catch (error) {
            console.log(error.message);
        }
    }
}