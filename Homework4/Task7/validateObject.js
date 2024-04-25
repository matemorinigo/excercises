function validateObject(obj, schema){
    let objProps = Object.getOwnPropertyDescriptors(obj);

    if(typeof obj !== schema.type)
        return false;
    else{
        for(let prop in objProps){
            if(prop in schema.properties){
                let descriptor = Object.getOwnPropertyDescriptor(obj, prop);

                if(typeof obj[prop] === "object") {
                    if(!validateObject(obj[prop], schema.properties[prop]))
                        return false;
                }
                else if(typeof obj[prop] !== schema.properties[prop].type)
                    return false
                else if(schema.properties[prop].writable !== undefined && descriptor.writable !== schema.properties[prop].writable)
                    return false;
                else if(schema.properties[prop].configurable !== undefined && descriptor.configurable !== schema.properties[prop].configurable)
                    return false;
                else if(schema.properties[prop].enumerable !== undefined && descriptor.enumerable !== schema.properties[prop].enumerable)
                    return false;
            }else
                return false;


        }
    }
    return true;


}

let schema = {
    'type': 'object',
    'properties': {
        '_firstName': {
            'type': 'string'
        },
        '_lastName': {
            'type': 'string'
        },
        '_age': {
            'type': 'number',
            'writable': true
        },
        '_email': {
            'type': 'string'
        },
        '_address': {
            'type': 'object',
            'properties': {
                'street': {
                    'type': 'string',
                    'enumerable':true,
                },
                'city': {
                    'type': 'string',
                    'enumerable':true,
                },

            }
        }
    }
}

let a = {
    _firstName: "Mateo",
    _lastName: "Morinigo",
    _age:20,
    _email: "mate@example.com.ar",
    _address: {
        street: "Av Siempre Viva",
        city: "Springfield"
    }
}


Object.defineProperties(a,{
    _age:{
        writable:true
    }
});

Object.defineProperties(a._address, {
    street:{
        enumerable:true
    },
    city:{
        enumerable:true
    }
})

module.exports = {validateObject}

console.log(validateObject(a,schema));