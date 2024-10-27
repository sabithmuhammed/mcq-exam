import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuestionsList from "./QuestionsList";
import QuestionContainer from "./QuestionContainer";
const Dashboard: React.FC = () => {
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
            <div className="flex-grow flex ">
               <QuestionsList />
               <QuestionContainer />
            </div>

        </div>
    );
};

export default Dashboard;
