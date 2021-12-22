const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit
};

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body)
    res.redirect('/skills');
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.name);
    res.redirect('/skills');
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        date: req.date
    });
}

function newSkill(req, res) {
    res.render('skills/new');
}

function show(req, res) {
    console.log('got into controller show method');
    res.render('skills/show', {
        skill: Skill.matchSkill(req.params.name)
    });
}

function edit(req, res) {
    Skill.edit(req.body, Skill.matchSkill(req.params.name))
    res.render('skills/show', {
        skill: Skill.matchSkill(req.body.name)
    })
}