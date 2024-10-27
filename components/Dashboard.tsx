"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuestionsList from "./QuestionsList";
import QuestionContainer from "./QuestionContainer";
const Dashboard: React.FC = () => {
    const [totalQuestions, setTotalQuestions] = useState(30);
    const [answers, setAnswers] = useState<boolean[]>(
        Array(totalQuestions)
            .fill(null)
            .map(() => false)
    );
    const [totalAnswered, setTotalAnswered] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const changeQuestion = (pageNumber: number) => {
        setCurrentQuestion(pageNumber);
    };

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
                <QuestionContainer />
            </div>
        </div>
    );
};

export default Dashboard;
