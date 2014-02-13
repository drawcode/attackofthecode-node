var uuid = require('node-uuid');

module.exports = {

    autoPK: false,
    schema: true,
    attributes: {
  	
        id: {
            type: 'uuidv4',
            primaryKey: true,
            unique: true,
            required: true
        }
	  	firstName: 'STRING'
    
    },
    beforeValidation: function(values, cb) {
        values.id = uuid.v4();

        cb();
    }

};
