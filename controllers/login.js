module.exports = {
    getLogIn: (req,res)=>{
        res.render('login', {
            layout: 'login'
          })
    }
}