export enum eDetailType {
  QuoteBlock,
  Conversation,
  Text,
}
export interface IDetailQuoteBlock {
  type: eDetailType.QuoteBlock;
  title: string;
  text: string;
}
export interface IDetailConversation {
  type: eDetailType.Conversation;
  speaker: string;
  text: string;
}
export interface IDetailText {
  type: eDetailType.Text;
  text: string;
}

export type IDetail =
  | IDetailQuoteBlock
  | IDetailConversation
  | IDetailText
  | string;

export type IDetails = IDetail[];
