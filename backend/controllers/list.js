const List = require('../database/dbParams');

exports.GetoneList = (req, res, next) => {
    List.findOne({ _id: req.params.id})
    .then(list => res.status(200).json(list))
    .catch(error => res.status(404).json({ error }));
  };


 exports.GetallList = (req, res, next) => {
    List.find()
      .then(list => res.status(200).json(list))
      .catch(error => res.status(400).json({ error }));
  }