"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuestionsList from "./QuestionsList";
import QuestionContainer from "./QuestionContainer";
import { getQuestions, Question } from "@/app/api/questions";
const Dashboard: React.FC = () => {
    const [totalQuestions, setTotalQuestions] = useState(30);
    const [answers, setAnswers] = useState<boolean[]>(
        Array(totalQuestions)
            .fill(null)
            .map(() => false)
    );
    const [totalAnswered, setTotalAnswered] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [question, setQuestion] = useState<Question>();
    const [loading, setLoading] = useState(false);

    const changeQuestion = (pageNumber: number) => {
        setCurrentQuestion(pageNumber);
    };

    useEffect(() => {
        (async () => {
            setLoading(()=>true);
            const questions = await getQuestions();
            setQuestion(questions[currentQuestion - 1]);
            setLoading(()=>false);
        })();
    },[currentQuestion]);

    return (
        <div className="flex flex-col flex-grow">
            <Tabs defaultValue="exam" className="">
                <TabsList className="bg-white flex w-full rounded-none justify-start px-7 pb-0 max-md:hidden">
                    <TabsTrigger value="exam">Exam</TabsTrigger>
                    <TabsTrigger value="lorem1">Lorem</TabsTrigger>
                    <TabsTrigger value="lorem2">Lorem</TabsTrigger>
                    <TabsTrigger value="lorem3">Lorem</TabsTrigger>
                </TabsList>
            </Tabs>
            <div className="flex-grow flex max-md:flex-col  gap-3 justify-center p-3">
                <QuestionsList
                    answers={answers}
                    handleQuestionChange={changeQuestion}
                    currentQuestion={currentQuestion}
                />
                <QuestionContainer question={question} loading={loading} />
            </div>
        </div>
    );
};

export default Dashboard;
