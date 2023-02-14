const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect( process.env.MONGODB_URI,
            // {
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            //     useCreateIndex: true,
            //     useFindAndModify: false
            // }
        )

        console.log('Base de datos online')
    } catch (error) {
        console.log({
            error,
            funcion: 'dbConnection',
            file: __filename
        })
        throw new Error('Error en la conexión a la base de datos')
    }
}

module.exports = dbConnection