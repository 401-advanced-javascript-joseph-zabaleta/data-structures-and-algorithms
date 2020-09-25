'use strict';

const leftJoin = require('./left-join.js');

describe('Testing Challenge 33: Left Join', () => {

    it('Should handle example input #1', () => {

        let hashmap1 = {
            'fond': 'enamored',
            'wrath': 'anger',
            'diligent': 'employed',
            'outift': 'garb',
            'guide': 'usher',
        }

        let hashmap2 = {
            'fond': 'averse',
            'wrath': 'delight',
            'diligent': 'idle',
            'guide': 'follow',
            'flow': 'jam',
        }

        let actual = leftJoin(hashmap1, hashmap2)
        let expected = [
            ['fond', 'enamored', 'averse'],
            ['wrath', 'anger', 'delight'],
            ['diligent', 'employed', 'idle'],
            ['outift', 'garb', null],
            ['guide', 'usher', 'follow']
        ]

        expect(actual).toEqual(expected);

    });


    it('Should handle example input #1 version 2', () => {

        let hashmap1 = {
            'fond': 'averse',
            'wrath': 'delight',
            'diligent': 'idle',
            'guide': 'follow',
            'flow': 'jam',
        }

        let hashmap2 = {
            'fond': 'enamored',
            'wrath': 'anger',
            'diligent': 'employed',
            'outift': 'garb',
            'guide': 'usher',
        }



        let actual = leftJoin(hashmap1, hashmap2)
        let expected = [
            ['fond', 'averse', 'enamored'],
            ['wrath', 'delight', 'anger'],
            ['diligent', 'idle', 'employed'],
            ['guide', 'follow', 'usher'],
            ['flow', 'jam', null]
        ]

        expect(actual).toEqual(expected);

    });



    it('Should handle a custom input', () => {

        let hashmap1 = {
            'fond': 'enamored',
            'food': 'yummy',
            'diligent': 'employed',
            'guide': 'usher',
            'flow': 'boom',
            'computer': 'network',
        }

        let hashmap2 = {
            'random': 'something',
            'fond': 'averse',
            'wrath': 'delight',
            'diligent': 'idle',
            'guide': 'follow',
            'flow': 'jam',
        }

        let actual = leftJoin(hashmap1, hashmap2)
        let expected = [
            ['fond', 'enamored', 'averse'],
            ['food', 'yummy', null],
            ['diligent', 'employed', 'idle'],
            ['guide', 'usher', 'follow'],
            ['flow', 'boom', 'jam'],
            ['computer', 'network', null]
        ]

        expect(actual).toEqual(expected);

    });

});
