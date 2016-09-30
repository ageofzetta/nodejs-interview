let User = require('mongoose').model('User');

class UserController {

    read(req, res) {
        res.json(req.user);
    }

	update(req,res,next){
		User.findByIdAndUpdate(
			req.user.id,				// ID of document to update
			req.body,					// Update body
			(err,user) => {				// callback
				if(err) {return next(err);}
				res.json(user);
			}
		);

	}

	delete(req,res,next){
		req.user.remove(
			(err) => {
				if(err){return next(err);}
				res.json(req.user);
			}
		);
	}

    userByID(req, res, next, id) {
        User.findOne({
                _id: id					// query
            },
            (err, user) => {			// callback
                if (err) {
                    return next(err);
                }
                req.user = user;
                next();

            }
        );
    }

    list(req, res, next) {
        User.find({}, 					// query
            "username email", 			// requested fields
            {
                skip: 0,				// options
                limit: 100
            },
            (err, users) => {			// callback
                if (err) {
                    return next(err);
                }
                res.json(users);
            }
        );
    }

	create(req, res, next) {
	    let user = new User(req.body);
	    user.save((err) => {
	        if (err) {
	            return next(err);
	        }
	        res.json(user);
	    });
	}

}

module.exports = new UserController();
