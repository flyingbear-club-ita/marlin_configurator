import mc from '../../app/MarlinConfigurator';
import debugFactory from 'debug';
import mongoose from 'mongoose';
import { Schema, Model } from 'mongoose';
import Databases from '../schemas/Databases';
import Parameters from '../schemas/Parameters';

const debug = debugFactory ('mc:app:mongoose');
const dbUrl = process.env.MONGODB_URL;
const mainDb = 'marlin_configurator';
const modelsToLoad = [
    //'filename'
]

export class MongooseDb {

    constructor() {

        // The connection to the main(and hopefully only) db
        this.connection;
        this.models = {};

        this.mongoSettings = {
            useUnifiedTopology: true,
            keepAlive: false
        };
    }

    async initialize() {
      try {
        // Connect to the main db
        this.connection = await mongoose.createConnection(dbUrl + '/' + mainDb + '?authSource=admin' , this.mongoSettings);
        this.mc = this.connection;

        // Load all the models
        this.models.Parameters = this.mc.model('Parameters', Parameters('Parameters'));
        
      } catch (e) {
        throw e;
      }
    }

}