import { GoogleGenAI, Chat } from "@google/genai";
import { BOOK_CONTENT } from "../bookContent";

const API_KEY = process.env.API_KEY;

let client: GoogleGenAI | null = null;

export const initializeGenAI = () => {
  if (!API_KEY) {
    console.warn("Google GenAI API Key is missing.");
    return null;
  }
  if (!client) {
    client = new GoogleGenAI({ apiKey: API_KEY });
  }
  return client;
};

// Prepare a context string from the book content
const getBookContext = () => {
  return BOOK_CONTENT.map(section => 
    `SECTION: ${section.title}\nCONTENT: ${section.content.replace(/<[^>]*>/g, '')}` // Strip HTML for the model
  ).join('\n\n');
};

export const createCoachChat = (): Chat | null => {
  const ai = initializeGenAI();
  if (!ai) return null;

  const systemInstruction = `
    You are Dominik Lukeš, the author of "Building Your Language Muscle". 
    You are an expert language coach specializing in Deliberate Practice.
    
    Your Goal: Help the user plan their language learning (specifically Czech, but general principles apply) using the book's content.
    
    Rules:
    1. Always base your advice on the principles of Deliberate Practice (focus, chunks, feedback, sprints).
    2. Be encouraging but realistic ("It takes effort").
    3. If the user asks about specific Czech resources, refer to Appendix 3 in the context provided.
    4. Keep answers concise and actionable.
    
    BOOK CONTENT CONTEXT:
    ${getBookContext()}
  `;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction,
    },
  });
};

export const sendMessageToCoach = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response right now.";
  } catch (error) {
    console.error("Error interacting with Gemini:", error);
    return "I'm having trouble connecting to my thought process. Please check your API key or try again.";
  }
};

export const generateAuditReport = async (auditData: any): Promise<string> => {
  const ai = initializeGenAI();
  if (!ai) return "Error: API Key missing. I cannot generate a report without it.";

  const prompt = `
    You are Dominik Lukeš, author of "Building Your Language Muscle".
    
    A student has just completed the "Personal Learning Resources Audit" (Appendix 1). 
    Here is their data:
    ${JSON.stringify(auditData, null, 2)}

    Based on their answers and the principles of Deliberate Practice described in the book, provide a **Personalized Coach Report**.
    
    Structure the report as follows (use Markdown):
    
    ### 1. Readiness Assessment
    - Rate their setup (High/Medium/Low).
    - Identify their strongest asset and their biggest risk.
    
    ### 2. The 6-Week Sprint Plan
    - Suggest a specific focus for their first sprint based on their tools.
    - Challenge them gently but firmly to adopt at least one new habit.
    
    ### 3. Immediate Action Items (This Week)
    - Give 3 bullet points of exactly what they need to do *right now*.
    
    Keep the tone encouraging, authoritative, and practical.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "I couldn't generate a report. Please try again.";
  } catch (error) {
    console.error("Error generating audit report:", error);
    return "I encountered an error analyzing your audit. Please check your connection and API key.";
  }
};

export const generateSprintPlan = async (sprintData: any): Promise<string> => {
  const ai = initializeGenAI();
  if (!ai) return "Error: API Key missing.";

  const prompt = `
    Act as an expert language learning coach using the Deliberate Practice methodology.
    Create a detailed 6-Week Sprint Plan for a student with the following profile:
    
    - Current Level: ${sprintData.currentLevel}
    - Target Level (Goal): ${sprintData.targetLevel}
    - Daily Time Commitment: ${sprintData.timeCommitment} minutes
    - Specific Interests/Topics: ${sprintData.interests}
    
    Use the principles from "Building Your Language Muscle":
    1. Focus on chunks and output, not just grammar rules.
    2. Include specific types of "Input" (Reading/Listening) and "Output" (Speaking/Writing) activities.
    3. Schedule specific "Micro-practice" sessions.
    4. Include a weekly "Audit" or review.

    Format the output in clear Markdown:
    - **Sprint Goal**: A concrete objective for the 6 weeks.
    - **Week 1-2 (Foundation)**: Specific activities.
    - **Week 3-4 (Building)**: Specific activities.
    - **Week 5-6 (Consolidation & Production)**: Specific activities.
    - **Daily Routine Example**: How to fit the ${sprintData.timeCommitment} mins in.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Could not generate sprint plan.";
  } catch (error) {
    return "Error generating sprint plan.";
  }
};

export const analyzeAim = async (userGoal: string): Promise<string> => {
  const ai = initializeGenAI();
  if (!ai) return "Error: API Key missing.";

  const prompt = `
    The user is describing their language learning goal: "${userGoal}".
    
    Based on the CEFR (Common European Framework of Reference for Languages) guidelines provided in Appendix 2 of "Building Your Language Muscle":
    1. Estimate which CEFR level (A1, A2, B1, B2, C1, C2) corresponds to this goal.
    2. Explain *why* it matches that level.
    3. What specific "can-do" statements from the CEFR apply?
    4. What is the estimated time to achieve this from the previous level (using the book's estimates)?
    
    Keep it concise and helpful.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Could not analyze aim.";
  } catch (error) {
    return "Error analyzing aim.";
  }
};
