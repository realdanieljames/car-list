const Car = require('../models/Car');





module.exports = {
    getAllCars: (req, res) => {
        Car.find()
            .then((foundCars) => {
                return res.render('main.index', { carsList: foundCars })
            })
            .catch((err) => res.json({ err }));

    },

    createCar: (req, res) => {

    }
}


// getAllWords: (req, res) => {
//         Word.find()
//             .then((foundWords) => {
//                 return res.render('main/index', { wordsList: foundWords });
//             })
//             .catch((err) => res.json({ err }));