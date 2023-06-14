const {User, Thought} = require('../models')

module.exports = {
    getThoughts(req,res) {
        Thought.find().then((thoughts) => res.json(thoughts)).catch((err) => res.status().json(err));
    },
    getSingleThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId}).select("-__v").then((thought) => !thought ? res.status(404).json({message: "No thought with that ID"}): res.json(thought)).catch((err) => res.status(500).json(err));
    },
    createThought(req,res) {
        Thought.create(req.body).then(({_id}) =>{
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: _id}},
                {new: true}
            );
        }).then((thought) => !thought ? res.status(404).json({message: "No user with this ID"}): res.json(thought)).catch((err) => res.status(500).json(err));
    },
}