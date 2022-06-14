const RegisteredUsers = require('../models/userModel')

const usersGet =(req,res) =>{
   RegisteredUsers.findAll()
   .then(result =>{
        res.send(result);
   }).catch(err =>{
    console.log(err);
   })
}
const usersPost =(req,res) =>{
        (async () => {
        await RegisteredUsers.sync();
        const user = await RegisteredUsers.create({
          name : req.body.name,
          email:req.body.email,
          phoneNo :req.body.phoneNo,
          password : req.body.password,
          createdAt : new Date(1980, 6, 20),
          updatedAt : new Date(1980, 6, 20)
        });
        res.status(200).json(user);
      })().catch(err =>{
        res.send("err : " + err);
      });
      //error handel
}

const usersDelete = (req,res) => {
  const id  = req.params.id;
  RegisteredUsers.destroy({
    where : {
        id : id
    }
  }).then(result =>{
    if(result==1){
      res.send("Deleted SucessFully");
    }
    else{
      res.send("User Not found");
    }
  }).catch(err =>{
    res.json(`err: ${err}`);
  })
}

const usersUpdate = (req,res) => {
    // res.send("Updated");
    const id  = req.params.id;
    RegisteredUsers.update(
      { name : 'Mayur' },
      { where: { id: id } }
    ).then(result =>
        res.send("Updated " +result)
      )
      .catch(err =>
        res.send(`Err :` + err)
      )
}

module.exports = {
    usersGet : usersGet,
    usersPost : usersPost,
    usersDelete : usersDelete,
    usersUpdate : usersUpdate
}