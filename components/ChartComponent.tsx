"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label";

const chartData = [
    { browser: "CMA IND", visitors: 21.5, fill: "#FF8C65" },
    { browser: "CA", visitors: 22.5, fill: "#F9610C" },
    { browser: "CS", visitors: 16, fill: "#FDCFB6" },
    { browser: "ACCA", visitors: 25, fill: "#ED9F74" },
    { browser: "CMA USA", visitors: 16.7, fill: "#FAC3A4" },
];

const chartConfig = {
    visitors: {
        label: "Profession",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export default function ChartComponent() {

  
    return (
        <Card className="flex flex-col border-0 shadow-none my-10">
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            label
                            nameKey="browser"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
