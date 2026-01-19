import React, { useState } from 'react';
import { generateSprintPlan } from '../services/geminiService';
import { Loader2, Timer, Target, Zap } from 'lucide-react';

export const SprintBuilder: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState('A1');
  const [targetLevel, setTargetLevel] = useState('A2');
  const [timeCommitment, setTimeCommitment] = useState('30');
  const [interests, setInterests] = useState('');
  const [plan, setPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const data = { currentLevel, targetLevel, timeCommitment, interests };
    const result = await generateSprintPlan(data);
    setPlan(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden my-8">
      <div className="bg-indigo-600 p-8 text-white">
        <h2 className="text-3xl font-serif font-bold flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-300" />
          Learning Sprint Builder
        </h2>
        <p className="mt-2 text-indigo-100">
          Deliberate practice requires structure. Design your next 6-week sprint tailored to your goals and available time.
        </p>
      </div>

      <div className="p-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Current CEFR Level</label>
            <select 
              value={currentLevel}
              onChange={(e) => setCurrentLevel(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 bg-slate-50"
            >
              {['A0 (Absolute Beginner)', 'A1', 'A2', 'B1', 'B2', 'C1'].map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Sprint Target Level</label>
            <select 
              value={targetLevel}
              onChange={(e) => setTargetLevel(e.target.value)}
              className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 bg-slate-50"
            >
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Daily Commitment (Minutes)</label>
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg border border-slate-300">
              <Timer className="text-indigo-500" />
              <input 
                type="range" 
                min="15" 
                max="120" 
                step="15" 
                value={timeCommitment}
                onChange={(e) => setTimeCommitment(e.target.value)}
                className="flex-1 accent-indigo-600"
              />
              <span className="font-bold text-slate-700 w-12">{timeCommitment}m</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Interests / Topics</label>
            <textarea 
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g. Travel, History, Business, ordering beer..."
              className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 bg-slate-50 h-24"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Target />}
            Generate 6-Week Plan
          </button>
        </div>

        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 overflow-y-auto max-h-[600px]">
          {plan ? (
            <div className="prose prose-indigo text-sm">
              {plan.split('\n').map((line, i) => {
                 if (line.startsWith('###') || line.startsWith('**Sprint Goal**')) 
                   return <h4 key={i} className="text-lg font-bold text-indigo-900 mt-4 mb-2">{line.replace(/#/g, '').replace(/\*/g, '')}</h4>;
                 if (line.startsWith('-') || line.startsWith('* '))
                   return <li key={i} className="ml-4">{line.replace(/[-*] /g, '')}</li>;
                 return <p key={i} className="mb-2">{line}</p>;
              })}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center">
              <Zap size={48} className="mb-4 opacity-20" />
              <p>Configure your sprint parameters on the left and hit generate to get your custom deliberate practice plan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
