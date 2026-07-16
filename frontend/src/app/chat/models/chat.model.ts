export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  pending?: boolean;
}

export interface ChatRequest {
  message: string;
  history?: { role: string; content: string }[];
}

export interface ChatResponse {
  reply: string;
  role: string;
}
