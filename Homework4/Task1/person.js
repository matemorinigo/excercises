let person = {
    _firstName: "John",
    _lastName: "Doe",
    _age: 30,
    _email: "john.doe@example.com",

    updateInfo(info){
        if(info.firstName){
            Object.defineProperty(this, '_firstName', {value: info.firstName});
        }
        if(info.lastName){
            Object.defineProperty(this, '_lastName', {value: info.lastName});
        }
        if(info.age){
            Object.defineProperty(this, '_age', {value: info.age});
        }
        if(info.email){
            Object.defineProperty(this, '_email', {value: info.email});
        }
        if(info.address){
            this._address = info.address;

        }
    },

}

Object.defineProperties(person, {
    firstName:{
        writable: false,
        configurable: true
    },
    lastName:{
        writable: false,
        configurable:true
    },
    age:{
        writable: false,
        configurable: true
    },
    email:{
        writable: false,
        configurable: true
    }
});

Object.defineProperty(person, '_address', {value: {}, enumerable: false, configurable: false, writable: true});


module.exports = {person};