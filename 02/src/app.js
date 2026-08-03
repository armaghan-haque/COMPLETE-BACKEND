// creating a server 
const express = require("express")

const app = express()
app.use(express.json())

const notes = []

 /*  post/notes  */
app.post("/notes", (req,res)=>{
     notes.push(req.body)
      
     res.status(201).json({
        message : "note created successfully"})
})

 /*  get/notes  */
app.get("/notes", (req,res)=>{

    res.status(200).json({
        message : "notes fetched succesfully",
        notes: notes
    })
})

 /*  delete/notes/:index  */
 app.delete("/notes/:index", (req,res)=>{   
    
    const index = req.params.index
    delete notes[index]

    res.status(200).json({
        message : "note deleted successfully"
    })
 })

 /*  patch/notes/:index  */
app.patch("/notes/:index" , (req,res)=>{
    const index = req.params.index
    const description = req.body.description

    notes[ index ].description = description

    res.status(200).json({
        message : "notes updated successfully"
    })
})

 module.exports = app
