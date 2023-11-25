// utils/questionPaperGenerator.js
class QuestionPaperGenerator {
  static generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    const difficultyTypes = Object.keys(difficultyDistribution);

    difficultyTypes.forEach((difficulty) => {
      const percentage = difficultyDistribution[difficulty];
      const marksForDifficulty = (totalMarks * percentage) / 100;

      const questions = questionService.getQuestionsByDifficulty(difficulty);

      // Simple logic: Select questions up to the calculated percentage
      const selectedQuestions = questions.slice(0, marksForDifficulty);
      questionPaper.push(...selectedQuestions);
    });

    return questionPaper;
  }
}

module.exports = QuestionPaperGenerator;
