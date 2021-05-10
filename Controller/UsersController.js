'use strict'
const response = require('./../response')
const db = require ('./../settings/db')

exports.users = (req,res) => {
    db.query('SELECT * FROM `users`',(error,rows) =>{
        if (error){
            console.log(error)
        }else {
            response.status(rows,res)
        }
    })
}

exports.add = (req,res) =>{
    const sql = "INSERT INTO `users`(`gmail`,`password`) VALUES('" + req.query.gmail +"','" +req.query.password +"')";
    db.query(sql,(error,result) =>{
        if (error){
            console.log(error)
        }else {
            response.status(result,res)
        }
    })
}