const path = require('path');

const pathFrom = function (pathTo, fromTheLevel) {
    let pathNormalized = path.normalize(pathTo);

    let arrayPath = pathNormalized.split(path.sep);

    // prototype for delete empty entry in array
    Array.prototype.unset = function (val) {
        let index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1)
        }
    };

    // delete empty entry
    arrayPath.unset('');

    const arrayPathLength = arrayPath.length;

    if ( fromTheLevel > 0 && fromTheLevel <= arrayPathLength) {

        // traitement
        // new Path array
        let resultPath = "";
        let i = arrayPathLength - fromTheLevel;
        while (i < arrayPathLength) {
            resultPath = resultPath + "/" + arrayPath[i];
            i++;
        }
        return resultPath;
    } else {
        console.log('a misstatement with pathFrom');
    }
    return;

};

module.exports = {
    pathFrom
};

