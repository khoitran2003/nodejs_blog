import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600, required: true },
        image: { type: String, maxLength: 255, required: true },
        slug: { type: String, maxLength: 255, unique: true, slug: 'name' },
        videoId: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Course', Course);
