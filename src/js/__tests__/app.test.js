/* eslint-disable no-undef */
import { character, destructuring } from "../app";

test('destructuring', () => {
    const expected = [
        {   id: 8,
            name: 'Двойной выстрел',
            description: 'Двойной выстрел наносит двойной урон',
            icon: 'http://...',
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            description: 'Описание недоступно',
            icon: 'http://...'
        }    
    ];
    expect(destructuring(character)).toEqual(expected);

});