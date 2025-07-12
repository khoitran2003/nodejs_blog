import Course from '../models/courses.js';
import mongooseUtil from '../../util/mongoose.js';

class SiteController {
    //   [GET] /news
    async home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mongooseUtil.multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default new SiteController();
