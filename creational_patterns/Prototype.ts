interface Prototype<T> {
    clone(): T
}

class UserHistory implements Prototype<UserHistory> {
    createdAt: Date;
    constructor(public email: string, public name: string) {
        this.createdAt = new Date();
    }

    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target
    }
}

let user = new UserHistory('vladislav.pestsov@gmail.com', 'Vladislav')
console.log(user);
let user2 = user.clone()
console.log(user2)