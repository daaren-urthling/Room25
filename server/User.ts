export class User {
    public nickName : string;
    constructor (public userName: string, nickName?: string) {
        this.nickName = nickName || userName;
    }
}