const skills = [
    {id: 543672, skill: 'JavaScript', gained: true},
    {id: 789231, skill: 'MongoDB', gained: false},
    {id: 334212, skill: 'CSS', gained: true},
    {id: 421532, skill: 'HTML', gained: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function getAll() {
    return skills;
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.acquired = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }