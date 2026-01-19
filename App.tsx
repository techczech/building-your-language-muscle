
import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { BOOK_CONTENT } from './bookContent';
import { SectionType, BookSection, Highlight } from './types';
import { AuditTool } from './components/AuditTool';
import { AICoach } from './components/AICoach';
import { SprintBuilder } from './components/SprintBuilder';
import { GoalTuner } from './components/GoalTuner';
import { downloadEpub } from './services/epubService';
import { ShareModal } from './components/ShareModal';
import { 
  BookOpen, 
  CheckSquare, 
  MessageCircle, 
  Menu, 
  X, 
  Zap, 
  Compass, 
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Download,
  Loader2,
  Home as HomeIcon,
  List,
  Check,
  Highlighter,
  Trash2,
  FileText,
  Copy,
  Share2
} from 'lucide-react';

// --- Helper to Flatten Sections for Routing & Navigation ---
const flattenSections = (sections: BookSection[]): BookSection[] => {
  return sections.reduce((acc: BookSection[], section) => {
    acc.push(section);
    if (section.children) {
      acc.push(...flattenSections(section.children));
    }
    return acc;
  }, []);
};

// --- Helper to Get Only Content Pages (Leaves) ---
const getLeafSections = (sections: BookSection[]): BookSection[] => {
  return flattenSections(sections).filter(s => !s.children || s.children.length === 0);
};

// --- Context for Read Progress ---
interface ReadProgressContextType {
  readSections: Set<string>;
  markRead: (id: string) => void;
  progressPercentage: number;
}

const ReadProgressContext = createContext<ReadProgressContextType>({
  readSections: new Set(),
  markRead: () => {},
  progressPercentage: 0,
});

const ReadProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [readSections, setReadSections] = useState<Set<string>>(new Set());
  const leafSections = getLeafSections(BOOK_CONTENT);
  
  useEffect(() => {
    const saved = localStorage.getItem('bylm_read_sections');
    if (saved) {
      try {
        setReadSections(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error("Failed to parse read sections", e);
      }
    }
  }, []);

  const markRead = (id: string) => {
    setReadSections(prev => {
      if (!prev.has(id)) {
        const next = new Set(prev);
        next.add(id);
        localStorage.setItem('bylm_read_sections', JSON.stringify(Array.from(next)));
        return next;
      }
      return prev;
    });
  };

  const readLeafCount = leafSections.filter(s => readSections.has(s.id)).length;
  const progressPercentage = leafSections.length > 0 
    ? Math.round((readLeafCount / leafSections.length) * 100) 
    : 0;

  return (
    <ReadProgressContext.Provider value={{ readSections, markRead, progressPercentage }}>
      {children}
    </ReadProgressContext.Provider>
  );
};

// --- Context for Highlights ---
interface HighlightsContextType {
  highlights: Highlight[];
  addHighlight: (sectionId: string, text: string) => void;
  removeHighlight: (id: string) => void;
}

const HighlightsContext = createContext<HighlightsContextType>({
  highlights: [],
  addHighlight: () => {},
  removeHighlight: () => {},
});

const HighlightsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('bylm_highlights');
    if (saved) {
      try {
        setHighlights(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse highlights", e);
      }
    }
  }, []);

  const addHighlight = (sectionId: string, text: string) => {
    const newHighlight: Highlight = {
      id: Date.now().toString(),
      sectionId,
      text,
      context: '', 
      timestamp: Date.now()
    };
    const updated = [...highlights, newHighlight];
    setHighlights(updated);
    localStorage.setItem('bylm_highlights', JSON.stringify(updated));
  };

  const removeHighlight = (id: string) => {
    const updated = highlights.filter(h => h.id !== id);
    setHighlights(updated);
    localStorage.setItem('bylm_highlights', JSON.stringify(updated));
  };

  return (
    <HighlightsContext.Provider value={{ highlights, addHighlight, removeHighlight }}>
      {children}
    </HighlightsContext.Provider>
  );
};

// --- Notebook / Export Component ---
const Notebook: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { highlights, removeHighlight } = useContext(HighlightsContext);
  const [copied, setCopied] = useState(false);

  const groupedHighlights = highlights.reduce((acc, h) => {
    if (!acc[h.sectionId]) acc[h.sectionId] = [];
    acc[h.sectionId].push(h);
    return acc;
  }, {} as Record<string, Highlight[]>);

  const generateMarkdown = () => {
    const allSections = flattenSections(BOOK_CONTENT);
    let md = "# My Language Learning Highlights\n\n";
    
    Object.entries(groupedHighlights).forEach(([sectionId, sectionHighlights]) => {
       const items = sectionHighlights as Highlight[];
       const sectionTitle = allSections.find(s => s.id === sectionId)?.title || sectionId;
       md += `## ${sectionTitle}\n\n`;
       items.forEach(h => {
         md += `> "${h.text}"\n\n`;
       });
    });
    return md;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMarkdown());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generateMarkdown()], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'language-muscle-highlights.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slideInRight">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-serif font-bold text-slate-800 flex items-center gap-2">
            <Highlighter className="text-yellow-500" /> Notebook
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {highlights.length === 0 ? (
            <div className="text-center text-slate-400 mt-20">
              <Highlighter size={48} className="mx-auto mb-4 opacity-30" />
              <p>No highlights yet.</p>
              <p className="text-sm mt-2">Select text while reading to save key quotes.</p>
            </div>
          ) : (
            Object.entries(groupedHighlights).map(([sectionId, items]) => {
              const list = items as Highlight[];
              const sectionTitle = flattenSections(BOOK_CONTENT).find(s => s.id === sectionId)?.title;
              return (
                <div key={sectionId}>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-100 pb-1">
                    {sectionTitle}
                  </h3>
                  <div className="space-y-3">
                    {list.map(h => (
                      <div key={h.id} className="group relative p-4 bg-yellow-50 rounded-lg border border-yellow-100 hover:border-yellow-300 transition-all">
                        <p className="text-slate-800 italic font-serif">"{h.text}"</p>
                        <button 
                          onClick={() => removeHighlight(h.id)}
                          className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Delete highlight"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
          <button 
            onClick={handleCopy}
            disabled={highlights.length === 0}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-300 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm disabled:opacity-50"
          >
            {copied ? <Check size={18} className="text-green-600"/> : <Copy size={18}/>}
            {copied ? 'Copied to Clipboard' : 'Copy as Markdown'}
          </button>
          <button 
            onClick={handleDownload}
            disabled={highlights.length === 0}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition-colors shadow-md disabled:opacity-50"
          >
            <Download size={18} /> Download Notes
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Section Viewer ---
const SectionViewer: React.FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { markRead } = useContext(ReadProgressContext);
  const { highlights, addHighlight } = useContext(HighlightsContext);
  const allSections = flattenSections(BOOK_CONTENT);
  const section = allSections.find(s => s.id === id);
  
  const [processedContent, setProcessedContent] = useState('');
  const [toc, setToc] = useState<{id: string, text: string, level: number}[]>([]);
  const [selectionCoords, setSelectionCoords] = useState<{x: number, y: number} | null>(null);
  const [selectedText, setSelectedText] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  useEffect(() => {
    if (section) {
      markRead(section.id);
    }
  }, [section, markRead]);

  // --- Text Selection Logic ---
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      // Check if clicking outside content ref to clear selection
      if (!selection || selection.isCollapsed || !contentRef.current?.contains(selection.anchorNode)) {
        if (window.getSelection()?.isCollapsed) {
           setSelectionCoords(null);
        }
        return;
      }

      const text = selection.toString().trim();
      if (text.length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        setSelectionCoords({
          x: rect.left + (rect.width / 2),
          y: rect.top - 50 // Moved up slightly to accommodate larger menu
        });
        setSelectedText(text);
      } else {
        setSelectionCoords(null);
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('keyup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('keyup', handleSelection);
    };
  }, []);

  const handleHighlightClick = () => {
    if (section && selectedText) {
      addHighlight(section.id, selectedText);
      setSelectionCoords(null);
      window.getSelection()?.removeAllRanges();
    }
  };

  // --- Deep Linking Scroll Logic ---
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const textToFind = params.get('text');

    if (textToFind && contentRef.current) {
      // Wait for content render/paint
      setTimeout(() => {
        if (!contentRef.current) return;
        
        // Create a TreeWalker to find text nodes containing the search string
        const treeWalker = document.createTreeWalker(contentRef.current, NodeFilter.SHOW_TEXT);
        let currentNode = treeWalker.nextNode();
        let foundElement: HTMLElement | null = null;
        
        while (currentNode) {
            if (currentNode.textContent?.includes(textToFind)) {
                foundElement = currentNode.parentElement;
                break;
            }
            currentNode = treeWalker.nextNode();
        }

        if (foundElement) {
            // Scroll into view
            foundElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Apply visual pulse effect
            const originalTransition = foundElement.style.transition;
            const originalBg = foundElement.style.backgroundColor;
            
            foundElement.style.transition = 'background-color 0.5s ease';
            foundElement.style.backgroundColor = '#fef08a'; // yellow-200 highlighting
            
            // Fade out after delay
            setTimeout(() => {
                foundElement!.style.backgroundColor = originalBg;
                setTimeout(() => {
                   foundElement!.style.transition = originalTransition;
                }, 500);
            }, 2500);
        }
      }, 500);
    }
  }, [processedContent, location.search]);

  // --- Content Processing (Highlights + TOC) ---
  useEffect(() => {
    if (!section?.content) {
      setProcessedContent('');
      setToc([]);
      return;
    }

    let content = section.content;

    // Apply saved highlights
    const currentSectionHighlights = highlights.filter(h => h.sectionId === id);
    currentSectionHighlights.forEach(h => {
        try {
          const pattern = escapeRegExp(h.text).replace(/\s+/g, '[\\s\\n]+');
          const regex = new RegExp(`(?<!<[^>]*)(${pattern})`, 'g');
          content = content.replace(regex, '<mark class="bg-yellow-200 rounded-sm px-0.5 text-slate-900">$1</mark>');
        } catch (e) {
          console.warn("Could not highlight:", h.text);
        }
    });

    // Parse Headings for TOC
    const headings: {id: string, text: string, level: number}[] = [];
    const modifiedContent = content.replace(/<(h[2-4])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, text) => {
       const cleanText = text.replace(/<[^>]*>/g, '').trim();
       if (!cleanText) return match;

       const id = cleanText.toLowerCase()
         .replace(/[^a-z0-9]+/g, '-')
         .replace(/(^-|-$)/g, '');
       
       const hasId = attrs.includes('id=');
       const finalId = hasId ? (attrs.match(/id=["']([^"']+)["']/) || [])[1] : id;

       headings.push({ 
         id: finalId, 
         text: cleanText, 
         level: parseInt(tag.charAt(1)) 
       });
       
       return hasId ? match : `<${tag} id="${finalId}"${attrs}>${text}</${tag}>`;
    });

    setProcessedContent(modifiedContent);
    setToc(headings);
  }, [section, highlights]);
  
  if (!section) return <div>Section not found</div>;

  const leafSections = getLeafSections(BOOK_CONTENT);
  const currentLeafIndex = leafSections.findIndex(s => s.id === id);
  const allIndex = allSections.findIndex(s => s.id === id);
  
  let nextSection: BookSection | undefined;
  let prevSection: BookSection | undefined;

  if (currentLeafIndex !== -1) {
    nextSection = leafSections[currentLeafIndex + 1];
    prevSection = leafSections[currentLeafIndex - 1];
  } else {
    if (allIndex !== -1) {
       nextSection = allSections.slice(allIndex + 1).find(s => !s.children || s.children.length === 0);
       prevSection = allSections.slice(0, allIndex).reverse().find(s => !s.children || s.children.length === 0);
    }
  }

  // Construct Deep Link URL
  const deepLinkUrl = `${window.location.origin}${window.location.pathname}#/${id}?text=${encodeURIComponent(selectedText)}`;

  return (
    <div className="max-w-7xl mx-auto animate-fadeIn py-8 px-6 md:px-8 relative">
       
       {selectionCoords && (
         <div 
            className="fixed z-50 transform -translate-x-1/2 flex items-center gap-2 bg-slate-900 p-1.5 rounded-full shadow-xl"
            style={{ left: selectionCoords.x, top: selectionCoords.y }}
         >
            <button 
              onMouseDown={(e) => {
                e.preventDefault(); 
                handleHighlightClick();
              }}
              className="text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-slate-700 flex items-center gap-1 transition-colors"
            >
               <Highlighter size={14} className="text-yellow-300" /> Highlight
            </button>
            
            <div className="w-px h-4 bg-slate-700"></div>

            <button 
              onMouseDown={(e) => {
                 e.preventDefault();
                 setShowShareModal(true);
                 setSelectionCoords(null);
              }}
              className="text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-slate-700 flex items-center gap-1 transition-colors"
            >
               <Share2 size={14} className="text-emerald-300" /> Share
            </button>

            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-900 mt-1"></div>
         </div>
       )}

       {showShareModal && (
         <ShareModal 
            text={selectedText} 
            sectionTitle={section.title} 
            url={deepLinkUrl} 
            onClose={() => {
              setShowShareModal(false);
              window.getSelection()?.removeAllRanges();
            }} 
         />
       )}

       <div className="flex flex-col xl:flex-row gap-12">
         <div className="flex-1 min-w-0" ref={contentRef}>
            <div 
              className="prose prose-slate prose-lg max-w-none selection:bg-indigo-100 selection:text-indigo-900"
              dangerouslySetInnerHTML={{ __html: processedContent }} 
            />
            
            {section.type === SectionType.CONTAINER && section.children && (
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {section.children.map(child => (
                    <Link key={child.id} to={`/${child.id}`} className="block p-4 border border-slate-200 rounded-lg hover:border-emerald-500 transition-colors group">
                      <div className="font-bold text-emerald-800 group-hover:text-emerald-600 flex items-center">
                        {child.title} <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  ))}
                </div>
            )}

            <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
                {prevSection ? (
                  <button 
                    onClick={() => navigate(`/${prevSection.id}`)}
                    className="text-sm text-slate-500 hover:text-emerald-700 flex items-center group"
                  >
                    <ChevronRight className="rotate-180 mr-1 group-hover:-translate-x-1 transition-transform" size={16} />
                    <div>
                      <span className="block text-xs uppercase tracking-wide text-slate-400">Previous</span>
                      <span className="font-medium">{prevSection.title}</span>
                    </div>
                  </button>
                ) : <div />}

                {nextSection && (
                  <button 
                    onClick={() => navigate(`/${nextSection.id}`)}
                    className="text-sm text-right text-slate-500 hover:text-emerald-700 flex items-center group"
                  >
                    <div>
                      <span className="block text-xs uppercase tracking-wide text-slate-400">Next Step</span>
                      <span className="font-medium">{nextSection.title}</span>
                    </div>
                    <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                )}
            </div>
         </div>

         {toc.length > 0 && (
           <div className="hidden xl:block w-64 shrink-0">
             <div className="sticky top-6">
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                 <List size={16} /> On this page
               </h4>
               <ul className="space-y-2 border-l border-slate-200 pl-4">
                 {toc.map((item, index) => (
                   <li key={index} style={{ paddingLeft: `${(item.level - 2) * 0.5}rem` }}>
                     <a 
                       href={`#${item.id}`} 
                       className="block text-sm text-slate-600 hover:text-emerald-600 hover:underline leading-tight transition-colors"
                       onClick={(e) => {
                         e.preventDefault();
                         document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                       }}
                     >
                       {item.text}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         )}
       </div>
    </div>
  );
};

// --- Sidebar Component ---
const SidebarItem: React.FC<{ section: BookSection; onClick: () => void; depth?: number }> = ({ section, onClick, depth = 0 }) => {
  const [expanded, setExpanded] = useState(section.defaultExpanded || false);
  const hasChildren = section.children && section.children.length > 0;

  const toggle = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      e.stopPropagation();
      setExpanded(!expanded);
    }
  };

  const indentClass = depth === 0 ? 'pl-4' : depth === 1 ? 'pl-8' : 'pl-12';

  return (
    <div className="select-none">
      {hasChildren ? (
         <div 
           onClick={toggle}
           className={`flex items-center justify-between ${indentClass} pr-4 py-2 cursor-pointer text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors`}
         >
           <span className="truncate">{section.title}</span>
           <button className="p-1 text-slate-400 hover:text-emerald-600 transition-colors">
             {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
           </button>
         </div>
      ) : (
        <NavLink 
          to={`/${section.id}`} 
          onClick={onClick}
          className={({isActive}) => 
            `block ${indentClass} pr-4 py-2 text-sm font-medium truncate transition-all ${
              isActive 
                ? 'text-emerald-700 bg-emerald-50 border-r-4 border-emerald-500' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`
          }
        >
          {section.title}
        </NavLink>
      )}
      
      {hasChildren && expanded && (
        <div className="border-l-2 border-slate-100 ml-6 my-1 transition-all">
          {section.children!.map(child => (
            <SidebarItem key={child.id} section={child} onClick={onClick} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

// --- Home Page ---
const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 animate-fadeIn">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-4 bg-emerald-100 rounded-full mb-6">
          <BookOpen size={48} className="text-emerald-600" />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-emerald-900 mb-6 tracking-tight">
          Building Your <span className="text-emerald-600">Language Muscle</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          A practical, interactive guide to <strong>deliberate practice</strong> for language learners. 
          Move beyond passive study and start training effectively.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/intro-group" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-full shadow-lg hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            Start Reading <ArrowRight size={20} />
          </Link>
          <Link to="/resource-audit" className="px-8 py-4 bg-white text-emerald-800 border border-emerald-200 font-bold rounded-full shadow-sm hover:bg-emerald-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
            <CheckSquare size={20} /> Take the Audit
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Zap size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Deliberate Practice</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Master the science of effective learning. Understand how chunks, focus, and feedback accelerate your progress.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Compass size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Goal Setting</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Use the Goal Tuner tool to transform vague ambitions into concrete, measurable CEFR targets.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
           <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
             <MessageCircle size={24} />
           </div>
           <h3 className="text-lg font-bold text-slate-800 mb-2">AI Coach</h3>
           <p className="text-slate-600 text-sm leading-relaxed">Chat with Dominik (AI) to get personalized advice, sprint plans, and explanations.</p>
        </div>
      </div>
    </div>
  );
};

// --- Resources Page ---
const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 animate-fadeIn">
       <div className="mb-8 border-b border-slate-200 pb-8">
         <h1 className="text-3xl font-serif font-bold text-emerald-900 mb-4">Resources</h1>
         <p className="text-lg text-slate-600">
           Tools, references, and further reading to support your language learning journey.
         </p>
       </div>
       
       <div className="grid gap-6 md:grid-cols-2">
          <Link to="/appendix-3" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-emerald-400 transition-all hover:shadow-md">
             <div className="flex items-center justify-between mb-3">
               <h3 className="font-bold text-lg text-emerald-800 group-hover:text-emerald-600">Czech Muscle</h3>
               <ArrowRight size={20} className="text-slate-300 group-hover:text-emerald-500 transition-colors"/>
             </div>
             <p className="text-slate-600 text-sm">
               Specific strategies, tools, and corpora for students learning the Czech language.
             </p>
          </Link>

          <Link to="/appendix-4" className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-emerald-400 transition-all hover:shadow-md">
             <div className="flex items-center justify-between mb-3">
               <h3 className="font-bold text-lg text-emerald-800 group-hover:text-emerald-600">Further Reading</h3>
               <ArrowRight size={20} className="text-slate-300 group-hover:text-emerald-500 transition-colors"/>
             </div>
             <p className="text-slate-600 text-sm">
               Deep dive into the books that inspired this guide: Peak, Moonwalking with Einstein, and more.
             </p>
          </Link>
       </div>
    </div>
  );
};

// --- Main Layout ---
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [showNotebook, setShowNotebook] = useState(false);
  const [showPageShare, setShowPageShare] = useState(false);
  const [isGeneratingEpub, setIsGeneratingEpub] = useState(false);
  const { progressPercentage } = useContext(ReadProgressContext);
  const { highlights } = useContext(HighlightsContext);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleEpubDownload = async () => {
    setIsGeneratingEpub(true);
    await downloadEpub(BOOK_CONTENT);
    setIsGeneratingEpub(false);
  };

  // Calculate share metadata
  const getShareMetadata = () => {
    const allSections = flattenSections(BOOK_CONTENT);
    const path = location.pathname;
    const url = window.location.href;

    if (path === '/' || path === '') {
      return {
        title: 'Building Your Language Muscle',
        text: 'A practical, interactive guide to deliberate practice for language learners.',
        url
      };
    }
    if (path === '/resource-audit') return { title: 'Resource Audit', text: 'Assess your readiness, tools, and time for deliberate practice.', url };
    if (path === '/goal-tuner') return { title: 'Goal Tuner', text: 'Transform vague wishes into concrete CEFR targets.', url };
    if (path === '/sprint-builder') return { title: 'Sprint Builder', text: 'Design your next 6-week language learning sprint.', url };
    if (path === '/resources') return { title: 'Resources', text: 'Tools, references, and further reading for your journey.', url };

    const sectionId = path.replace('/', '');
    const section = allSections.find(s => s.id === sectionId);
    if (section) {
      const plainText = section.content 
        ? section.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 180) + '...'
        : section.title;
      return {
        title: section.title,
        text: plainText,
        url
      };
    }
    return null;
  };

  const shareData = getShareMetadata();

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {showNotebook && <Notebook onClose={() => setShowNotebook(false)} />}
      
      {/* Global Page Share Modal */}
      {showPageShare && shareData && (
        <ShareModal 
          text={shareData.text} 
          sectionTitle={shareData.title} 
          url={shareData.url} 
          onClose={() => setShowPageShare(false)} 
        />
      )}

      {!isHome && (
        <>
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-20 z-20 lg:hidden backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <aside className={`
            fixed lg:relative z-30 w-72 h-full bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 shadow-xl lg:shadow-none
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            <div className="p-6 border-b border-slate-100">
              <Link to="/" className="flex items-center gap-2 text-emerald-800 font-serif font-bold text-lg">
                <HomeIcon size={20} /> Home
              </Link>
            </div>

            <div className="px-6 pt-6 pb-2">
               <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <span>Progress</span>
                  <span>{progressPercentage}%</span>
               </div>
               <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-emerald-400 h-full rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${progressPercentage}%` }}
                  />
               </div>
            </div>

            <nav className="flex-1 overflow-y-auto py-2 px-4 space-y-1">
              <p className="px-3 mt-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Reader</p>
              {BOOK_CONTENT.map((section) => (
                <SidebarItem 
                  key={section.id} 
                  section={section} 
                  onClick={() => setSidebarOpen(false)} 
                />
              ))}
              
              <div className="my-6 border-t border-slate-100" />
              <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tools</p>
              <NavLink to="/resource-audit" onClick={() => setSidebarOpen(false)} className={({isActive}) => `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                 <CheckSquare size={16} className="mr-3" /> Resource Audit
              </NavLink>
              <NavLink to="/goal-tuner" onClick={() => setSidebarOpen(false)} className={({isActive}) => `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                 <Compass size={16} className="mr-3" /> Goal Tuner
              </NavLink>
              <NavLink to="/sprint-builder" onClick={() => setSidebarOpen(false)} className={({isActive}) => `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                 <Zap size={16} className="mr-3" /> Sprint Builder
              </NavLink>
            </nav>
          </aside>
        </>
      )}

      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50">
        <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex items-center gap-3">
            {!isHome && (
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-slate-800">
                <Menu size={24} />
              </button>
            )}
            {isHome && (
               <div className="flex items-center gap-2 font-serif font-bold text-emerald-900 text-xl">
                 <BookOpen size={24} className="text-emerald-600" />
                 Language Muscle
               </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
             {/* Share Button */}
             <button 
               onClick={() => setShowPageShare(true)}
               className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
               title="Share this page"
             >
                <Share2 size={20} />
                <span className="hidden md:inline font-medium text-sm">Share</span>
             </button>

             {/* Notebook Button */}
             <button 
               onClick={() => setShowNotebook(true)}
               className="relative flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
               title="View Highlights"
             >
                <Highlighter size={20} />
                <span className="hidden md:inline font-medium text-sm">Notebook</span>
                {highlights.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
                )}
             </button>

            <button 
              onClick={handleEpubDownload} 
              disabled={isGeneratingEpub}
              className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:text-emerald-700 hover:border-emerald-300 transition-colors shadow-sm disabled:opacity-50"
              title="Download full book as EPUB"
            >
              {isGeneratingEpub ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
              <span className="hidden md:inline">{isGeneratingEpub ? 'Generating...' : 'Download eBook'}</span>
            </button>

            <button 
              onClick={() => setShowAiPanel(!showAiPanel)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all
                ${showAiPanel ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-800 text-white hover:bg-slate-700 shadow-md hover:shadow-lg'}
              `}
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">{showAiPanel ? 'Hide Coach' : 'AI Coach'}</span>
            </button>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto scroll-smooth"
          >
             {children}
          </div>

          <div className={`
            fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 z-40 border-l border-slate-200
            ${showAiPanel ? 'translate-x-0' : 'translate-x-full'}
          `}>
             <div className="h-full flex flex-col">
               <div className="flex items-center justify-between p-4 border-b border-slate-100">
                 <h3 className="font-bold text-slate-800 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   AI Coach
                 </h3>
                 <button onClick={() => setShowAiPanel(false)} className="p-1 hover:bg-slate-100 rounded-full"><X size={20}/></button>
               </div>
               <div className="flex-1 h-full overflow-hidden">
                 <AICoach />
               </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const allSections = flattenSections(BOOK_CONTENT);

  return (
    <HashRouter>
      <ReadProgressProvider>
        <HighlightsProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/resource-audit" element={<AuditTool />} />
              <Route path="/goal-tuner" element={<GoalTuner />} />
              <Route path="/sprint-builder" element={<SprintBuilder />} />
              <Route path="/resources" element={<ResourcesPage />} />
              
              {allSections.map(section => (
                <Route 
                  key={section.id} 
                  path={`/${section.id}`} 
                  element={<SectionViewer id={section.id} />} 
                />
              ))}
            </Routes>
          </Layout>
        </HighlightsProvider>
      </ReadProgressProvider>
    </HashRouter>
  );
};

export default App;
    