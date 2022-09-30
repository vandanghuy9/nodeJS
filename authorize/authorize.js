const logger = function(req,res,next){ //middleware
    const {user} = req.query; //example of authorize user
    if (user === 'john'){// if user send query ?user=john
        req.user = {name: 'john',id:3};  //user in4
        next();// skip to next method (in this case homepage)
    }
    else {
        res.status(404).send('Unauthorized');
    }
    next(); // every time invoke middleware, must send back own res or pass to next
};

module.exports = logger;
