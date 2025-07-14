import express from 'express';
import morgan from 'morgan';
import path from 'path';
import methodOverride from 'method-override';

import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import route from './routes/index.js';
import db from './config/db/index.js';

// Connect to MongoDB
db.connect();

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// http logger
app.use(morgan('combined'));

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route initialize
route(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
