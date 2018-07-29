const path = require('path');

const pathFrom = function (pathTo, fromTheLevel) {
    let pathNormalized = path.normalize(pathTo);

    //afficher les nb dernier element du array
    var arrayDirname = pathNormalized.split(path.sep);

    // prototype for delete empty entry in array
    Array.prototype.unset = function (val) {
        var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1)
        }
    };

    // Delete empty entry
    arrayDirname.unset('');

    const arrayDirnameLength = arrayDirname.length;

    if ( fromTheLevel > 0 && fromTheLevel <= arrayDirnameLength) {

        // traitement
        // New Path array
        let newPath = "";
        let i = arrayDirnameLength - fromTheLevel;
        while (i < arrayDirnameLength) {
            newPath = newPath + "/" + arrayDirname[i];
            i++;
        }
    } else {
        console.log('a misstatement with pathFrom');
    }

};

module.exports = {
    pathFrom,
};

