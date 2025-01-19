import {Staff} from "./Staff.ts";
import {Field} from "./Field.ts";

export class Equipment{
    equipmentId:string;
    name: string;
    type: string;
    status: string;
    assignedStaffDetails:Staff[];
    assignedFieldDetails:Field[];

    constructor(equipmentId:string, name: string, type: string, status: string,assignedStaffDetails:Staff[], assignedFieldDetails:Field[]) {
        this.equipmentId = equipmentId;
        this.name = name;
        this.type = type;
        this.status = status;
        this.assignedStaffDetails = assignedStaffDetails;
        this.assignedFieldDetails = assignedFieldDetails;
    }

}