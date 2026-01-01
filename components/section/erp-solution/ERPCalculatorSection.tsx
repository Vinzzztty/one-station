"use client";

import { useState, useEffect } from "react";
import { Info } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ERPCalculatorSection() {
    const [calculator, setCalculator] = useState({
        employees: 5,
        hoursPerDay: 4,
        salary: 600,
        documents: 500,
        errorRate: 15
    });

    const [results, setResults] = useState({
        currentCost: "0",
        timeWasted: 0,
        errorCost: "0",
        savings: "0",
        roiMonths: 0
    });

    useEffect(() => {
        const currentCost = calculator.employees * calculator.salary;
        const timeWasted = calculator.employees * calculator.hoursPerDay * 22;
        const errorCost = (calculator.documents * (calculator.errorRate / 100) * 5);
        const monthlySavings = (currentCost * 0.7) + (errorCost / 12 * 0.9);
        const investment = 3000;
        const roiMonths = Math.ceil(investment / monthlySavings);

        setResults({
            currentCost: currentCost.toLocaleString(),
            timeWasted: Math.round(timeWasted),
            errorCost: errorCost.toLocaleString(),
            savings: Math.round(monthlySavings).toLocaleString(),
            roiMonths: isFinite(roiMonths) ? roiMonths : 0
        });
    }, [calculator]);

    return (
        <section id="calculator" className="py-24 bg-gradient-to-b from-slate-950 to-purple-950/20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-slate-900 border border-purple-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-12">
                        <Reveal>
                            <h2 className="text-3xl font-bold mb-4 text-white">Savings Calculator</h2>
                        </Reveal>
                        <Reveal delay={100}>
                            <p className="text-slate-400">See how much time and money automation can reclaim for your team.</p>
                        </Reveal>
                    </div>


                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <Reveal delay={200}>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Manual Entry Employees</label>
                                    <input
                                        type="range" min="1" max="50" step="1"
                                        value={calculator.employees}
                                        onChange={(e) => setCalculator({ ...calculator, employees: parseInt(e.target.value) })}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                    />
                                    <div className="flex justify-between mt-2 text-xs font-bold text-purple-400">
                                        <span>1</span>
                                        <span className="text-lg bg-purple-500 text-white px-2 py-0.5 rounded">{calculator.employees} Staff</span>
                                        <span>50</span>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={300}>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Hours Spent on Manual Tasks / Day</label>
                                    <input
                                        type="range" min="1" max="8" step="0.5"
                                        value={calculator.hoursPerDay}
                                        onChange={(e) => setCalculator({ ...calculator, hoursPerDay: parseFloat(e.target.value) })}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                                    />
                                    <div className="flex justify-between mt-2 text-xs font-bold text-purple-400">
                                        <span>1h</span>
                                        <span className="text-lg bg-purple-500 text-white px-2 py-0.5 rounded">{calculator.hoursPerDay}h</span>
                                        <span>8h</span>
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal delay={400}>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-300 mb-2">Average Monthly Salary per Staff (Scale: 100s)</label>
                                    <input
                                        type="number"
                                        value={calculator.salary}
                                        onChange={(e) => setCalculator({ ...calculator, salary: parseInt(e.target.value) })}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                    />
                                </div>
                            </Reveal>
                        </div>


                        <div className="bg-slate-950 rounded-2xl p-8 border border-purple-500/20 flex flex-col">
                            <Reveal delay={500}>
                                <div className="text-xs uppercase font-bold tracking-[0.2em] text-slate-500 mb-8">Monthly Impact Projection</div>
                            </Reveal>

                            <div className="space-y-6 mb-10">
                                <Reveal delay={600}>
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-900">
                                        <span className="text-slate-400 text-sm">Monthly Cost Reclaimed</span>
                                        <span className="text-2xl font-bold text-green-400">${results.savings}</span>
                                    </div>
                                </Reveal>
                                <Reveal delay={700}>
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-900">
                                        <span className="text-slate-400 text-sm">Productive Hours Gained</span>
                                        <span className="text-2xl font-bold text-purple-400">{results.timeWasted}h</span>
                                    </div>
                                </Reveal>
                                <Reveal delay={800}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-400 text-sm">Est. Payback Period</span>
                                        <span className="text-2xl font-bold text-blue-400">{results.roiMonths} Months</span>
                                    </div>
                                </Reveal>
                            </div>


                            <Reveal delay={900}>
                                <div className="mt-auto p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-start gap-3">
                                    <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                                    <p className="text-[10px] text-slate-400 leading-normal uppercase">
                                        Based on 70% efficiency gain and current manual error costs. Resulting ROI is an estimate.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
