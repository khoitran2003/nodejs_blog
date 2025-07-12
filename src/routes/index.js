import newsRouter from './news.route.js';
import siteRouter from './site.route.js';
import coursesRouter from './courses.route.js';

function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

export default route;
