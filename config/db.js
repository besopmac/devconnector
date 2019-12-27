const moongose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await moongose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB is now connected...')
    } catch(err) {
        console.error(err.message);

        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;