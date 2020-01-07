import { Chat } from './chat.model';
import { User } from './user.model';
import { Option } from './option.model';
import { Vote } from './vote.model';

export class Poll {
    public pollId: number;
    public pollQuestion: string;
    public timeStamp: string;
    public options: Array<Option>;
    public votes: Array<Vote>;
    public chat: Chat;
    public pollCreator: User;

    constructor(pollId: number, pollQuestion: string, timeStamp: string, options: Array<Option>, votes: Array<Vote>, chat: Chat, pollCreator: User) {
        this.pollId = pollId;
        this.pollQuestion = pollQuestion;
        this.timeStamp = timeStamp;
        this.options = options;
        this.chat = chat;
        this.pollCreator = pollCreator;
    }
}