
var logger = require('log4js').getLogger('DbManager');

var conf = require('../Conf');
var ObjectID = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient
//var format = require('util').format;

exports.connect = function( collectionName, callback ){
    logger.info('connecting to collection [%s]', collectionName);

    MongoClient.connect( conf.mongodbUrl, function(err, db) {
        if(err) throw err;

        var collection = db.collection(collectionName);
        callback( db, collection, function(){
            db.close();
        });
    })
};

exports.toObjectId = function( idString ){
    return ObjectID(idString);
};