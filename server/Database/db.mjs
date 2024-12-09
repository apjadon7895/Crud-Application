import mongoose from 'mongoose';

const connection = async (username, password) => {
    const URL = `mongodb+srv://apjadon7895:<db_password>@cluster0.4me9x.mongodb.net/`;

    try {
        await mongoose.connect(URL, { 
            useUnifiedTopology: true, 
            useNewUrlParser: true 
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default connection;
