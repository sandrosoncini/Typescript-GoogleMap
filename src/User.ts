import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }; 

    constructor () {
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }
    addMarkerContent(): string {
        return `
            <div>
                <h1>${this.name}</h1>
            </div>
        `
    }

}

