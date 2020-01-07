import { Option } from './option.model';
import { User } from './user.model';

export class Vote {
    public voteId: number;
    public option: Option;
    public voter: User;

    constructor(voteId: number, option: Option, voter: User) {
        this.voteId = voteId;
        this.option = option;
        this.voter = voter;
    }
}