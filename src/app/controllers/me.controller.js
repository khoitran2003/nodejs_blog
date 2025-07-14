import Course from '../models/courses.js';
import mongooseUtil from '../../util/mongoose.js';

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses: mongooseUtil.multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

export default new MeController();
