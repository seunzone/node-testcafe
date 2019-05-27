// import controller modules
import * as PagesContoller from '../controllers';
const data = require('../data');


const pages = new PagesContoller.default();

const routes = (app) => {
  app.get('/', pages.getHome);
  app.get('/new', pages.newTodo);

  app.post('/', (req, res, next) => {
    data.addTodo(req.body);
    res.redirect('/');
  });

  app.get('/:id/delete', (req, res, next) => {
    data.removeTodo(parseInt(req.params.id));
    res.redirect('/');
  });
};

export default routes;