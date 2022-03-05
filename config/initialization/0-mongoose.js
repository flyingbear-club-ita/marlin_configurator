import { MongooseDb as Db } from '../support/Mongoose-db';

let mongoose = null;

export default Promise
  .resolve(new Db)                     // Create a LinetimeDb
  .then (res => mongoose = res)      // Save the instance
  .then (_ => mongoose.initialize()) // Connect all the clients
  .then (_ => mongoose);             // Return the instance
