import { MessageStatus } from "../enums/MessageStatus";

export interface Message {
  to: number;
  from: number;
  id: number;
  message: string;
  createdAt: string;
  status: MessageStatus;
}