var express = require('express');
var router = express.Router();
const User=require('../module/users')

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try{
    let userlist = await User.find();
    res.json({
      sucess:true,
      data:userlist
    })

  }catch(e){
    res.json({
      sucess:fale,
      data:e
    })

  }

 
});


router.post('/', async function(req, res, next) {


try{
 const user = new User(req.body)
await user.save()
res.json({
  SUCESS:true,
  data:" saved"
})
}catch(e){
  res.json({
    SUCESS:false,
    data:e
  })

}


});


router.put('/:userID', async function(req, res, next) {

// console.log("req.booooo",req.params.userID)
  try{
   await User.findByIdAndUpdate(req.params.userID,req.body)
  res.json({
    SUCESS:true,
    data:" updated saved"
  })
  }catch(e){
    res.json({
      SUCESS:false,
      data:e
    })
  
  }
  
  
  });


  router.delete('/:userID', async function(req, res, next) {

    // console.log("req.booooo",req.params.userID)
      try{
       await User.findByIdAndDelete(req.params.userID)
      res.json({
        SUCESS:true,
        data:" delete sucess"
      })
      }catch(e){
        res.json({
          SUCESS:false,
          data:e
        })
      
      }
      
      
      });


module.exports = router;
