import mc from '../app/MarlinConfigurator';

Promise.resolve()
    .then(_ => import('./initialization/0-mongoose')) .then(mod => mod.default) .then(function(res) {mc.mongoose = res}.bind(this))
