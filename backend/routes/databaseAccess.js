const express = require('express');
const router = express.Router();
const TodoItem=require('../models/TodoItem.js')

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.task
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });

  router.get('/all',(req,res) =>{
    TodoItem.find()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });

  // router.post('/toggle',(req,res)=>{
  //   console.log('rrr',req.body.id)
  //   TodoItem.findById(req.body.id)
  //   .then((response)=>{
  //     console.log('rrr',response)
  //     TodoItem.findOneAndUpdate({_id:req.body.id},{$set:{completed:!response.completed}},{new:true})
  //     .then(response => {
  //       res.send(response);
  //     })
  //     .catch(error => {
  //       res.send(error);
  //     })
  //
  //   })

  router.post('/toggle',(req,res)=>{

    TodoItem.findById(req.body.id)
    .then((response)=>{
      return TodoItem.findOneAndUpdate({_id:req.body.id},{$set:{completed:!response.completed}},{new:true})
    })
    .then(response => {
      // res.send(response);
      return TodoItem.find()
    })
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })

  })

router.post('/remove',(req,res)=>{
  TodoItem.findByIdAndRemove(req.body.id)
  // .then(response => {
  //   // res.send(response);
  //   return TodoItem.find()
  // })
  .then(response => {
    res.send({ success: true });
  })
  .catch(error => {
    res.send({ success: false});
  })




})






module.exports = router;
