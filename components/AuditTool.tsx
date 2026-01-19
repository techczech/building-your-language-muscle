
import React, { useState } from 'react';
import { generateAuditReport } from '../services/geminiService';
import { Loader2, FileText, CheckCircle, AlertTriangle, CheckSquare } from 'lucide-react';

export const AuditTool: React.FC = () => {
  // --- State ---
  const [slots, setSlots] = useState<string>('');
  const [micro, setMicro] = useState<string>('');
  const [writing, setWriting] = useState<string[]>([]);
  const [digital, setDigital] = useState<string[]>([]);
  const [printed, setPrinted] = useState<string[]>([]);
  const [past, setPast] = useState<string[]>([]);
  const [changes, setChanges] = useState<string[]>([]);

  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // --- Helpers ---
  const handleCheckbox = (
    setter: React.Dispatch<React.SetStateAction<string[]>>, 
    current: string[], 
    value: string
  ) => {
    if (current.includes(value)) {
      setter(current.filter(item => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const handleGenerateReport = async () => {
    setLoading(true);
    const auditData = {
      practiceSlots: slots,
      microPractice: micro,
      writingReadiness: writing,
      digitalTools: digital,
      printedTools: printed,
      pastExperience: past,
      willingnessToChange: changes
    };
    
    const result = await generateAuditReport(auditData);
    setReport(result);
    setLoading(false);
  };

  const isComplete = slots && micro && writing.length > 0 && changes.length > 0;

  // --- Render Helpers ---
  const SectionHeader = ({ title }: { title: string }) => (
    <h4 className="font-serif text-lg font-bold text-emerald-800 mt-8 mb-4 border-b border-emerald-100 pb-2">
      {title}
    </h4>
  );

  const RadioGroup = ({ 
    options, 
    name, 
    value, 
    onChange 
  }: { 
    options: string[], 
    name: string, 
    value: string, 
    onChange: (val: string) => void 
  }) => (
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-all">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
          />
          <span className="text-slate-700 text-sm font-medium">{opt}</span>
        </label>
      ))}
    </div>
  );

  const CheckboxGroup = ({ 
    options, 
    selected, 
    onChange 
  }: { 
    options: string[], 
    selected: string[], 
    onChange: (val: string) => void 
  }) => (
    <div className="space-y-2">
      {options.map((opt) => (
        <label key={opt} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => onChange(opt)}
            className="mt-1 w-4 h-4 rounded text-emerald-600 border-gray-300 focus:ring-emerald-500"
          />
          <span className="text-slate-700 text-sm font-medium">{opt}</span>
        </label>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto my-8">
      <div className="bg-emerald-700 rounded-t-2xl p-8 text-white shadow-lg">
        <h2 className="text-3xl font-serif font-bold flex items-center gap-3">
          <CheckSquare className="w-8 h-8 text-emerald-300" />
          Personal Learning Resources Audit
        </h2>
        <p className="mt-2 text-emerald-100">
          Deliberate practice starts with self-awareness. Assess your readiness, tools, and time to get a personalized AI analysis.
        </p>
      </div>

      <div className="bg-white border border-slate-200 shadow-xl rounded-b-2xl overflow-hidden grid lg:grid-cols-2 min-h-[800px]">
        {/* Left Column: Assessment Form */}
        <div className="p-8 lg:p-10 overflow-y-auto max-h-screen border-r border-slate-100">
          <div className="max-w-xl">
            <h4 className="font-serif text-lg font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2">
              Time Availability
            </h4>
            
            <div className="mb-8">
              <p className="font-bold text-slate-700 text-sm mb-3">How many 30-minute practice slots are you able to schedule in your diary a week (average)?</p>
              <RadioGroup 
                options={['3', '4', '5', '6']} 
                name="slots" 
                value={slots} 
                onChange={setSlots} 
              />
            </div>

            <div className="mb-8">
              <p className="font-bold text-slate-700 text-sm mb-3">How often do you think you can find 5-15 minutes to put in additional practice?</p>
              <RadioGroup 
                options={['1 / day', 'or more times a day', 'A few times a week', 'None']} 
                name="micro" 
                value={micro} 
                onChange={setMicro} 
              />
            </div>

            <SectionHeader title="Writing Readiness" />
            <div className="mb-8">
              <p className="font-bold text-slate-700 text-sm mb-3">How ready are you to write in in the language?</p>
              <CheckboxGroup 
                options={[
                  'I have installed new keyboard layout on my computer.',
                  'I know how to type special characters on the computer directly.',
                  'I can use hot keys to type accented characters.',
                  'I have a language keyboard installed on my phone.',
                  'I have a spell check available in the new language.',
                  'None'
                ]}
                selected={writing}
                onChange={(val) => handleCheckbox(setWriting, writing, val)}
              />
            </div>

            <SectionHeader title="Tools Inventory" />
            <div className="space-y-8">
               <div>
                  <p className="font-bold text-slate-700 text-sm mb-3">Digital tools installed?</p>
                  <CheckboxGroup 
                    options={['Language decks in Quizlet', 'Language decks in Memrise', 'Duolingo', 'Another app', 'Dictionary app']}
                    selected={digital}
                    onChange={(val) => handleCheckbox(setDigital, digital, val)}
                  />
               </div>
               <div>
                  <p className="font-bold text-slate-700 text-sm mb-3">Printed tools available?</p>
                  <CheckboxGroup 
                    options={['textbook', 'grammar book', 'reader or other source of readings', 'dictionary with grammar information', 'dictionary without grammar information', 'phrasebook']}
                    selected={printed}
                    onChange={(val) => handleCheckbox(setPrinted, printed, val)}
                  />
               </div>
            </div>

            <SectionHeader title="Experience & Mindset" />
            <div className="mb-8">
              <p className="font-bold text-slate-700 text-sm mb-3">What have you done in the past when you studied language?</p>
              <CheckboxGroup 
                options={[
                  'I just went to classes',
                  'I just went to classes and did some homework',
                  'I went to classes and did all homework',
                  'I went to classes, did homework and other work',
                  'I did all of the above and I also sought out every opportunity to use the language outside of studying'
                ]}
                selected={past}
                onChange={(val) => handleCheckbox(setPast, past, val)}
              />
            </div>

            <div className="mb-8">
              <p className="font-bold text-slate-700 text-sm mb-3">What changes do you think you would be willing to make about your approach?</p>
              <CheckboxGroup 
                options={[
                  'I just want things to remain the same, go to class and maybe do some homework',
                  'I will schedule more practice sessions',
                  'I will participate in live out of class practice activities with my classmates',
                  'I will participate in collaborative homework with other participants',
                  'I will find a language exchange partner'
                ]}
                selected={changes}
                onChange={(val) => handleCheckbox(setChanges, changes, val)}
              />
            </div>

            <div className="mt-8 flex justify-end">
               <button
                 onClick={handleGenerateReport}
                 disabled={loading || !isComplete}
                 className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-md transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {loading ? <Loader2 className="animate-spin" /> : <CheckCircle />}
                 Generate Coach Report
               </button>
            </div>
            {!isComplete && (
              <p className="text-right text-xs text-amber-600 mt-2 flex items-center justify-end gap-1">
                <AlertTriangle size={12} /> Please complete key fields to generate report
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Report */}
        <div className="bg-slate-50 p-8 lg:p-10 overflow-y-auto max-h-screen">
          {report ? (
            <div className="animate-fadeIn h-full">
              <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-6 flex items-center gap-2 sticky top-0 bg-slate-50 pb-4 z-10 border-b border-slate-200">
                <FileText className="text-emerald-600" /> Your Personalized Plan
              </h3>
              <div className="prose prose-emerald max-w-none bg-white p-8 rounded-xl border border-emerald-100 shadow-sm">
                {report.split('\n').map((line, i) => {
                   if (line.trim().startsWith('###')) return <h4 key={i} className="text-xl font-bold text-emerald-800 mt-6 mb-3 pb-2 border-b border-slate-100">{line.replace(/###/g, '')}</h4>;
                   if (line.trim().startsWith('-') || line.trim().startsWith('*')) return <li key={i} className="ml-4 list-disc text-slate-700 mb-2">{line.replace(/[-*]/g, '')}</li>;
                   return <p key={i} className="mb-3 text-slate-600 leading-relaxed">{line}</p>;
                })}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center px-8">
               <FileText size={64} className="mb-6 opacity-20" />
               <h4 className="text-lg font-bold text-slate-500 mb-2">Ready for Analysis</h4>
               <p>Complete the audit form on the left to receive a tailored deliberate practice strategy based on your available resources and history.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
