const express = require('express');
const routes = express.Router();


const {authenticateUser, authorizePermissions} = require('../middleware/authentication')


const {
    createJob,
    getAllJobs,
    getSingleJob,
    editJob,
    deleteJob,
    removeallJobdb,
} = require('../controllers/jobs')

routes
    .route('/')
    .post(authenticateUser,authorizePermissions('employer','admin'),createJob)
    .get(getAllJobs)
    .delete(removeallJobdb)

routes
    .route('/:id')
    .get(getSingleJob)
    .patch(authenticateUser,authorizePermissions('employer','admin'),editJob)
    .delete(authenticateUser,authorizePermissions('employer','admin'),deleteJob)

module.exports = routes;