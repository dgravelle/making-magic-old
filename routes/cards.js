const express = require('express');
const router = express.Router();
const AllCards = require('../AllCards/AllCards.json');
const _ = require('lodash');
const cards = Object.keys(AllCards)

router.get('/all', (req, res) => {

        for (let prop in AllCards) {

            let colors = AllCards[prop].colorIdentity;
            
            if (colors === undefined) {
                console.log(AllCards[prop]);
            }
        }


    res.json(AllCards['Ruric Thar, the Unbowed']);


})

module.exports = router;
