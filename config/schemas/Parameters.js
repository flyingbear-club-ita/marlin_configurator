import {Schema, ObjectId} from 'mongoose';
import mc from '../../app/MarlinConfigurator';

export default async function Parameters(collection) {
    //Define the fields of the collection
    let doc = {
        "_id": ObjectId,
        "field": String,
        "defaultValue": String,
        "possibleValues": [String],
        "description": String|null,
        "diff": Number|null
    }


    let schema = new Schema(doc, { collection: collection });

}