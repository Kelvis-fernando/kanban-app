export default interface Card {
  id: number;
  kanbanColum: number;
  name: string;
  status: string;
  createdAt: Date;
  messages: Array<{}>;
  description: string;
}
