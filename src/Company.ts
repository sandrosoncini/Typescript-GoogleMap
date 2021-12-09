import faker from 'faker';

export class Company {

    companyName : string;
    catchFrase: string;
    location:{
        lat: number,
        lng: number
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchFrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    addMarkerContent (): string {
        return `
            <div>
                <h1>${this.companyName}</h1>
                <h3>${this.catchFrase}</h3>
            </div>
        `
    }


}