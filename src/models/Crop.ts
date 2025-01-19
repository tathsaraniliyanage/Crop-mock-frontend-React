import {Field} from "./Field.ts";

export class Crop {
    cropCode:string;
    commonName:string;
    scientificName:string;
    image:string;
    category:string;
    cropSeason:string;
    field:Array<Field>;

    constructor(cropCode:string,commonName:string,scientificName:string,image:string,cropSeason:string,category:string,field:Array<Field>) {
        this.cropCode = cropCode;
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.image = image;
       this.category=category;
       this.cropSeason = cropSeason;
       this.field = field;

    }

}