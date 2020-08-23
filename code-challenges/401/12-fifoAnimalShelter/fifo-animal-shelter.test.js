'use strict';

const { Cat, Dog, Bird, AnimalShelter } = require('./fifo-animal-shelter.js');

describe('Testing Challenge 12: Fifo Animal Shelter: ', () => {

    describe('Testing enqueue method: ', () => {

        it('Should enqueue animal type: Cat', () => {
            let shelter = new AnimalShelter();
            let spike = new Cat('spike');

            shelter.enqueue(spike);

            let actual = shelter.toString();
            let expected = '{cat: spike} <- null';

            expect(actual).toEqual(expected);

        });


        it('Should enqueue animal type: Dog', () => {
            let shelter = new AnimalShelter();
            let spot = new Dog('spot');

            shelter.enqueue(spot);

            let actual = shelter.toString();
            let expected = '{dog: spot} <- null';

            expect(actual).toEqual(expected);

        });

        it('Should reject a animal type that is not cat or dog', () => {
            let shelter = new AnimalShelter();
            let coco = new Bird('coco');

            let actual = () => {
                shelter.enqueue(coco);
            };

            let expected = 'Sorry! We are a cat and dog only shelter.'

            expect(actual).toThrow(expected);

        });

    });

    describe('Testing dequeue method: ', () => {

        it('Should remove the first cat in queue', () => {
            let shelter = new AnimalShelter();
            let oliver = new Dog('oliver');
            let spot = new Dog('spot');
            let cheeto = new Cat('cheeto');

            shelter.enqueue(oliver);
            shelter.enqueue(spot);
            shelter.enqueue(cheeto);

            let actual = shelter.toString();
            let expected = '{dog: oliver} <- {dog: spot} <- {cat: cheeto} <- null';

            expect(actual).toEqual(expected);

            actual = shelter.dequeue('cat');
            expected = cheeto;

            expect(actual).toEqual(expected);

        });

        it('Should remove the first dog in queue', () => {
            let shelter = new AnimalShelter();
            let oliver = new Dog('oliver');
            let spot = new Dog('spot');
            let cheeto = new Cat('cheeto');

            shelter.enqueue(oliver);
            shelter.enqueue(spot);
            shelter.enqueue(cheeto);

            let actual = shelter.toString();
            let expected = '{dog: oliver} <- {dog: spot} <- {cat: cheeto} <- null';

            expect(actual).toEqual(expected);

            actual = shelter.dequeue('dog');
            expected = oliver;

            expect(actual).toEqual(expected);

        });

        it('Should return null if the preference was not dog or cat', () => {
            let shelter = new AnimalShelter();
            let oliver = new Dog('oliver');
            let spot = new Dog('spot');
            let cheeto = new Cat('cheeto');

            shelter.enqueue(oliver);
            shelter.enqueue(spot);
            shelter.enqueue(cheeto);

            let actual = shelter.toString();
            let expected = '{dog: oliver} <- {dog: spot} <- {cat: cheeto} <- null';

            expect(actual).toEqual(expected);

            actual = shelter.dequeue();
            expected = null;

            expect(actual).toEqual(expected);
        });

    });
});
