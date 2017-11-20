const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Goal = conn.define('goal', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  progress: {
    // 'Current', 'Accomplished', 'Stalled' 'Abandoned'
    type: Sequelize.STRING,
    defaultValue: 'Current'
  },
  cost: {
    type: Sequelize.INTEGER
  }
});

Goal.getGoals = function(userId) {
  return Goal.findAll({/*{ where: { userId }}*/});
};

// TO DO:
// this one doesn't work
Goal.getGoalById = function(id) {
  return Goal.findById(id);
};

Goal.addGoal = function(reqBody) {
  return Goal.create(Object.assign({}, reqBody));
};

Goal.editGoal = function(id, userId, reqBody) {
  return Goal.findOne({ where: { id, userId }})
    .then(goal => {
      Object.assign(goal, reqBody);
      return goal.save();
    });
};

Goal.deleteGoal = function(id, userId) {
  return Goal.findOne({ where: { id, userId }})
    .then(goal => goal.destroy());
};

module.exports = Goal;
