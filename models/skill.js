const skills = [
    {name: 'html', confidence: 10, age: '5 years'},
    {name: 'javascript', confidence: 10, age: '5 years'},
    {name: 'CSS', confidence: 6, age: '4 years'},
    {name: 'express', confidence: 2, age: '2 days'},
];

module.exports = {
    getAll,
    matchSkill,
    create,
    deleteOne,
    edit
};

function create(skill) {
    skills.push(skill);
}

function deleteOne(skillName) {
    const idx = skills.findIndex(skill => skill.name === skillName);
    skills.splice(idx, 1);
}

function getAll() {
    return skills;
}

function matchSkill(nameToMatch) {
    return skills.find(skill => skill.name === nameToMatch);
}

function edit(newSkill, skill) {
    skill.name = newSkill.name;
    skill.confidence = newSkill.confidence;
    skill.age = newSkill.age;
}