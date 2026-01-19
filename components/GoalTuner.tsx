
import React, { useState } from 'react';
import { analyzeAim } from '../services/geminiService';
import { Loader2, Search, ArrowRight, Compass, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GoalTuner: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    const result = await analyzeAim(goal);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden my-8">
      <div className="bg-teal-600 p-8 text-white">
        <h2 className="text-3xl font-serif font-bold flex items-center gap-3">
          <Compass className="w-8 h-8 text-teal-200" />
          AI Goal Tuner
        </h2>
        <p className="mt-2 text-teal-100">
          Transform vague wishes into concrete CEFR targets. Not sure what level you are aiming for? Let the AI map it for you.
        </p>
      </div>

      <div className="p-8 grid gap-8 lg:grid-cols-2 min-h-[500px]">
        
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
            <label className="block text-teal-900 font-bold mb-3 text-lg">What do you want to be able to do?</label>
            <p className="text-sm text-teal-700 mb-4">
              Be specific. Examples:
              <ul className="list-disc ml-5 mt-2 space-y-1 text-teal-600 opacity-80">
                <li>"Read Harry Potter without a dictionary"</li>
                <li>"Order food and complain if it's cold"</li>
                <li>"Discuss philosophy with my friends"</li>
              </ul>
            </p>
            <textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleAnalyze()}
              placeholder="Describe your goal here..."
              className="w-full p-4 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none h-32 text-slate-700 bg-white"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading || !goal.trim()}
              className="mt-4 w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-teal-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
              Analyze Goal
            </button>
          </div>

          {/* Context Link */}
          <div className="p-6 border border-slate-200 rounded-xl bg-white hover:border-teal-300 transition-colors group">
             <Link to="/fine-tuning-aims" className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded-full group-hover:bg-teal-100 transition-colors">
                   <BookOpen className="text-slate-500 group-hover:text-teal-600" size={24}/>
                </div>
                <div>
                   <h4 className="font-bold text-slate-800 mb-1 group-hover:text-teal-700">Understand the Framework</h4>
                   <p className="text-sm text-slate-600 mb-2">
                     Read the full chapter on CEFR levels and what they mean in practice.
                   </p>
                   <span className="text-teal-600 font-bold text-sm flex items-center">
                     Read Chapter <ArrowRight size={14} className="ml-1"/>
                   </span>
                </div>
             </Link>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 overflow-y-auto">
          {analysis ? (
            <div className="animate-fadeIn">
              <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2 text-lg border-b border-teal-100 pb-2">
                <ArrowRight size={20} /> Assessment Result
              </h4>
              <div className="prose prose-teal max-w-none text-slate-700">
                {analysis.split('\n').map((line, i) => {
                  if (line.trim().startsWith('**') || line.trim().endsWith('**')) return <strong key={i} className="block mt-3 mb-1 text-teal-900">{line.replace(/\*\*/g, '')}</strong>
                  if (line.trim().startsWith('-')) return <li key={i} className="ml-4">{line.replace('-', '')}</li>
                  return <p key={i} className="mb-2">{line}</p>
                })}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center px-4">
              <Compass size={48} className="mb-4 opacity-20" />
              <p className="text-sm">
                Enter your goal on the left to see which CEFR level it corresponds to and how long it might take to achieve.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
