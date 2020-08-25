'use strict';

/**
 * Creates a Cat Animal object
 * @class
 */
class Cat {
    constructor(name) {
        this.name = name;
        this.type = 'cat';
        this.next = null;
    };
};


/**
 * Creates a Dog Animal object
 * @class
 */
class Dog {
    constructor(name) {
        this.name = name;
        this.type = 'dog';
        this.next = null;
    };
};


/**
 * Creates a Bird Animal object
 * @class
 */
class Bird {
    constructor(name) {
        this.name = name;
        this.type = 'bird';
        this.next = null;
    };
};

/**
 * AnimalShelter class is a modified queue. That it only accepts Cats and Dogs. Follows the FIFO principles.
 * @class
 */
class AnimalShelter {
    constructor(front = null) {
        this.front = front;
        this.rear = this.front;
    };

    toString() {
        let output = '';
        let current = this.front;

        while (current) {
            output += `{${current.type}: ${current.name}} <- `
            current = current.next;
        };

        return output + 'null';
    };

    /**
     * Takes an instance of an animal, and adds it to the back of the queue.
     * @param {*} animal Instance of an animal class.
     */
    enqueue(animal) {

        if (animal.type === 'cat' || animal.type === 'dog') {

            if (!this.rear) {
                this.front = this.rear = animal;
            } else {
                this.rear.next = animal;
                this.rear = this.rear.next;
            };

        } else {
            throw Error('Sorry! We are a cat and dog only shelter.');
        };

    };

    /**
     * Removes an animal from the queue based on provided preference. If no preference is provided, then no animal is removed.
     * @param {*} pref Type of animal to remove
     * @returns Preferred animal object or null
     */
    dequeue(pref = null) {

        if ( !pref || (pref !== 'cat' && pref !== 'dog') ) {
            return null;
        };

        if (this.front.type === pref) {
            let leavingAnimal = this.front;
            this.front = this.front.next;
            return leavingAnimal;
        } else {
            let current = this.front;

            while (current) {

                if (current.next.type == pref) {
                    let leavingAnimal = current.next;
                    current.next = current.next.next;
                    return leavingAnimal;
                };

                current = current.next;
            };
        };
    };

}

module.exports = { Cat, Dog, Bird, AnimalShelter };
