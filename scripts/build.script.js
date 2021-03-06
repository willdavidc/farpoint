const label = 'build';
console.time(label);

const _ = require('lodash');
const steps = require('vitreum/steps');
const Proj = require('./project.js');

Promise.resolve()
    .then(() => steps.clean())
    .then(() => steps.libs(Proj.libs))
    .then(() => Promise.all(_.map(Proj.entryPoints, (path, name) => {
        return steps.jsx(name, path, {
            libs: Proj.libs,
            shared: Proj.shared,
            transforms: []
        })
            .then((deps) => steps.less(name, { shared: Proj.shared }, deps));
    })))
    .then(() => steps.assets(Proj.assetExts, Proj.shared))
    .then(() => console.timeEnd(label))
    .catch((err) => console.error(err));