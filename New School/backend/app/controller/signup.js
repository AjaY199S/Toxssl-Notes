const userSchema = require('../modals/user.schema');
const responseMassage = require('../../lib/response.messages');

exports.signup = function (req, res) {
    try {


        let user = new userSchema(req.body);

        user.save(function (err, result) {
            if (err) {
                if (err.code === 11000) {
                    console.log("Username or email is alrady exist");
                    let serverRespo = {
                        status: '400',
                        msg: responseMassage.USERNAME_OR_EMAIL_IS_ALREADY_EXIST,
                        data: {}
                    }
                    res.status(400).json(serverRespo);
                }
            }
            else {
                console.log("Data Saved!!!", result);
                let serverRespo = {
                    status: '200',
                    msg: responseMassage.USER_SUCCESSFULLUY_SIGNUP,
                    data: { result }
                }
                res.status(200).json(serverRespo);
            }
        });
        console.log('signup : ', req.body);

    }
    catch (ex) {
        console.log('Error : ', ex);
    }
}
