const mongoose = require("mongoose")

module.exports.getAllItems = function(itemModel, cb) {
    itemModel.find({ isDeleted: false }, function(err, allDBItems) {
        cb(err, allDBItems);
    });
}

module.exports.createitem = function(itemDetails, itemModel, cb) {
    console.log('Create New item for ' + JSON.stringify(itemDetails));
    var ti = new itemModel(itemDetails);
    ti.save(function(err) {
        if (err) console.log('ERROR ' + err);
        cb(err, ti);
    });
};

exports.updateItemField = function(query, updateDetails, itemModel, cb) {
    console.log('updating details...');
    itemModel.updateOne(query, updateDetails, (err, itemDetails) => {
        if (err) console.log('ERROR: ' + err);
        cb(err, itemDetails);
    });
}

exports.deleteItem = function(id, itemModel, cb) {
    console.log('Delete Resource ' + id);
    // cb(null, null); // Disabled Delete

    itemModel.findById(id, function(err, qObj) {
        if (err)
            cb(err, null);
        else {
            qObj.isDeleted = true;
            // Save Updated Statement
            qObj.save(function(err) {
                cb(err, qObj);
            });
        }
    });
};