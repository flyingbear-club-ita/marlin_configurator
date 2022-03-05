import debugFactory from 'debug';
import express from 'express';
import { RouteNotFoundError } from '../../app/errors/404-notFound';
//import routes here;

const debug = debugFactory ('mc:init:app');


export default Promise
    .resolve()
    .then(() => {
        debug('Loading routes');
        //let routeRouter = route.default;
        

        debug('Creating express app');
        let app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        
        //app.use('/route', routeRouter);

        
        // Nothing responded. Respond with 404
        app.use(function (req, res, next) {
            throw new RouteNotFoundError (req.path);
        })
  
        app.use(ErrorHelper.handler);
    
        return app;
    
    })