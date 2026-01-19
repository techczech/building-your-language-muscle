
export enum SectionType {
  INTRO = 'INTRO',
  CHAPTER = 'CHAPTER',
  APPENDIX = 'APPENDIX',
  CONTAINER = 'CONTAINER'
}

export interface BookSection {
  id: string;
  title: string;
  type: SectionType;
  content?: string; // Markdown-like or HTML string
  children?: BookSection[];
  defaultExpanded?: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Highlight {
  id: string;
  sectionId: string;
  text: string;
  context: string; // Surrounding text for better matching/context in export
  timestamp: number;
}

export enum ViewMode {
  READING = 'READING',
  PLANNING = 'PLANNING', // For the AI interaction
  AUDIT = 'AUDIT' // For Appendix 1 interactive tool
}
