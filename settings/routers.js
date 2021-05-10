'use strict'

module.exports = (app) => {
    const indexController = require('./../Controller/indexController')
    const UsersController = require('./../Controller/UsersController')
        app.route('/').get(indexController.index)
        app.route('/users').get(UsersController.users)
        app.route('/users/add').post(UsersController.add)
}