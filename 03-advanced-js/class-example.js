// class

class Person {
    constructor(name = 'Yariv', age) {
        this.name = name;
        this.age = age;
    }

    birthday() {
        // 16: this === me
        // 20: this === a
        // undefined++ === NaN
        this.age++;
    }

    birthday2 = () => {
        // this will always be me / the instance
        this.age++;
    } 
}

const me = new Person('Yariv Katz', 35);
me.birthday();
console.log(me.age); // 36

const a = {stam: me.birthday};
a['stam']();
// a === {stam: ..., age: NaN}
console.log(me.age); // ? 36

class Student extends Person {
    static hello() {

    }

    constructor(name, age, grade) {
        super(name, age);
    }
}

Student.hello()