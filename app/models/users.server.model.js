let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    username: {
		type:String,
		trim:true
	},
    password: String,

	website: {
		type: String,
		set: (url) => {
			if(!url){ return url; }
			if ( !url.includes('http://') || !url.includes('https://') ) {
				url = 'http://' + url;
			}
			return url;
		}
	},

    created: {
        type: Date,
        default: Date.now
    }

});

mongoose.model('User', UserSchema);
