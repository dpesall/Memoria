import questions from '../constants/Questions.json';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const getRandomQuestion = (topic) => {
    if (topic === 'Any') {
        const topics = Object.keys(questions);
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        topic = randomTopic;
    }

    if (!questions[topic] || !questions[topic].questions) {
        return { error: "Invalid topic" };
    }

    const questionArray = questions[topic].questions;
    const randomIndex = Math.floor(Math.random() * questionArray.length);
    const question = questionArray[randomIndex];

    const shuffledAnswers = shuffleArray([...question.answers[1]]);
    return {
        ...question,
        answers: [question.answers[0], shuffledAnswers]
    };
};

export default getRandomQuestion;
