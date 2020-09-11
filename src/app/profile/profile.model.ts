export class Profile {
    public id: number;
    public name: string;
    public nationality: string;
    public birthdate: string;

    constructor(id: number, name: string, nationality: string, birthdate: string){
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.birthdate = birthdate;
    }
}