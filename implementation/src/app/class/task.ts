import { Form } from "@angular/forms/src/directives/form_interface";

export class Task {
    public id: number;
    public name: string;
    public info: string;
    public value: number;

    constructor() { }
    /*
    constructor(obj:any) {
        this.name = obj.name;
        this.info = obj.info;
        this.value = obj.value;
    }*/
    /*
    public add(
        id: number,
        name: string,
        info: string,
        value: number
    ) { }*/
}