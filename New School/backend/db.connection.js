const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/new_school', function (err, db) {
    try {
        if (err) {
            console.log("Error: ", err);

        } else {
            console.log('Databse connection is Successfully Connected.');
        }

    }
    catch (ex) {
        console.log('Somthing Happen: ', ex);
    }
});
