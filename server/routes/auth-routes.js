const router = require('express').Router();
const passport = require('passport');
//login router
router.get('/login',(req,res) => {
	res.send('logging in')
  //res.render('login', {user: req.user});
});


//logout
router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/')
})

//auth with google

router.get('/auth/google',passport.authenticate('google',{
  scope: ['profile']
}));


//callback googleusercontent
// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {

    //res.send(req.user);
 res.redirect('/#/home');
});
module.exports = router;
