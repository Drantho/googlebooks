const express = require('express');
const router = express.Router();
const db = require('../models');

const { Op } = require('sequelize');
const { Sequelize } = require('../models');

router.get('/', (request, response) => {

    // Use this route to check if a user has already rated a specified entity
    if (request.query.user) {
        db.Rating.findOne({
            where: {
                UserId: request.query.user,
                ref: request.query.ref
            }
        }).then( (result) => {
            return response.json(result);
        }).catch( (err) => {
            return response.status(500).json(err);
        });
    }

    db.Rating.count({
        where: {
            type: request.query.type,
            ref: request.query.ref,
            isPositive: true
        }
    }).then( (countPositive) => {
        db.Rating.count({
            where: {
                type: request.query.type,
                ref: request.query.ref,
                isPositive: false
            }
        }).then( (countNegative) => {
            response.json({
                positive: countPositive,
                negative: countNegative
            });
        }).catch( (err) => {
            response.status(500).json(err);
        });
    }).catch( (err) => {
        response.status(500).json(err);
    }); 

});


router.put('/', (request, response) => {
    db.Rating.update({isPositive: Sequelize.literal('NOT isPositive')}, {
        where: {
            id: request.body.id
        }
    }).then( (result) => {
        response.json(result);
    }).catch( (err) => {
        response.status(500).json(err);
    });
});

router.post('/', (request, response) => {
    db.Rating.create({
        UserId: request.body.user,
        isPositive: request.body.isPositive,
        type: request.body.type,
        ref: request.body.ref
    }).then( (result) => {
        response.json(result);
    }).catch( (err) => {
        response.status(500).json(err);
    });
});