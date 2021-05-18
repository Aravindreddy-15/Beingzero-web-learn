const express = require('express');
const mongoose = require("mongoose")
let router = express.Router();
const Course = require("../model/coursemodel")
const itemlib = require("../lib/itemlib")
const Coursemodel = require("../model/coursemodel")

router.get("/courselib", (req, res) => {
    itemlib.getAllItems(Coursemodel, (err, allitems) => {
        if (err) {
            res.status(404).json({
                error: err
            })
        } else {
            res.status(200).json({
                allitems
            })
        }
    })
})

router.post("/courselib", (req, res) => {
    let data = req.body;
    data._id = new mongoose.Types.ObjectId(),

        itemlib.createitem(data, Coursemodel, (err, itemdetails) => {
            if (err) {
                res.status(404).json({
                    error: err
                })
            } else {
                res.status(200).json({
                    itemdetails
                })
            }
        })
})

router.put('/courselib/:courseid', (req, res) => {
    itemlib.updateItemField({ _id: req.params.courseid }, req.body, Coursemodel, (err, updateddetails) => {
        if (err)
            res.status(404).json({
                error: err
            })
        else {
            res.status(200).json({
                updateddetails
            })
        }
    })
})

router.delete('/courselib/:courseid', (req, res) => {
    itemlib.deleteItem(req.params.courseid, Coursemodel, (err, deleteditem) => {
        if (err)
            res.status(404).json({
                error: err
            })
        else
            res.status(200).json({
                deleteditem
            })
    })
})

module.exports = router;