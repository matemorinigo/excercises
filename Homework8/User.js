class User{
    static _users = 0;
    constructor(name, surname, email, address) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._address = address;
        this._userID = ++User._users;
    }



}

