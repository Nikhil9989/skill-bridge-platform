const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['radio', 'select', 'checkbox', 'textarea']
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: function() {
      return ['radio', 'select', 'checkbox'].includes(this.type);
    }
  }
});

const SurveySchema = new mongoose.Schema({
  surveyId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  intro: {
    type: String,
    required: true
  },
  questions: [QuestionSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Survey', SurveySchema);
