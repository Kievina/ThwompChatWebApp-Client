export class Chat   {
  public chatId: number;
  public chatName: string;
  public timeStamp: string;


  constructor(chatId: number, chatName: string, timeStamp: string) {
    this.chatId = chatId;
    this.chatName = chatName;
    this.timeStamp = timeStamp;
  }
}
