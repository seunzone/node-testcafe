const data = require('../data');
/**
 * @class PagesController
 *
 * @export
 *
 */
export default class PagesController {
  /**
       * @description - Gets the home page
       * @static
       *
       * @param {object} req - HTTP Request
       * @param {object} res - HTTP Response
       *
       * @memberof PagesController
       *
       * @returns {object} Class instance
       */
  getHome(req, res) {
    const renderData = {
      todo: data.getAllTodo()
    };
    res.render('index', { renderData });
  }
}
