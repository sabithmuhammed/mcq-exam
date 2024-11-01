"use client";
import React, { useEffect, useState } from "react";
import QuestionsList from "./QuestionsList";
import QuestionContainer from "./QuestionContainer";
import { getQuestions, Question } from "@/app/api/questions";
import { answerType } from "@/types/propTypes";

const Dashboard: React.FC = () => {
    const TOTAL_QUESTIONS = 30;
    const [answers, setAnswers] = useState<answerType[]>(
        Array(TOTAL_QUESTIONS)
            .fill(null)
            .map((_, index) => ({
                qId: `q${index + 1}`,
                answered: false,
                option: null,
            }))
    );
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [question, setQuestion] = useState<Question>();
    const [loading, setLoading] = useState(false);

    const changeQuestion = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > TOTAL_QUESTIONS) return;

        setCurrentQuestion(pageNumber);
    };

    useEffect(() => {
        (async () => {
            setLoading(() => true);
            const questions = await getQuestions();
            setQuestion(questions[currentQuestion - 1]);
            setLoading(() => false);
        })();
    }, [currentQuestion]);

    const selectAnswer = (questionId: string, option: string) => {
        const updatedAnswers = answers.map((item) => {
            if (item.qId == questionId) {
                return { ...item, answered: true, option };
            }
            return item;
        });
        setAnswers(updatedAnswers);
    };

    return (
        <div className="flex flex-col flex-grow">
            <div className="flex-grow flex max-md:flex-col  gap-3 justify-center p-3">
                <QuestionsList
                    answers={answers}
                    handleQuestionChange={changeQuestion}
                    currentQuestion={currentQuestion}
                />
                <QuestionContainer
                    question={question}
                    loading={loading}
                    answers={answers}
                    selectAnswer={selectAnswer}
                    totalQuestions={TOTAL_QUESTIONS}
                    currentQuestion={currentQuestion}
                    handleQuestionChange={changeQuestion}
                />
            </div>
        </div>
    );
};

export default Dashboard;
