const { Node, LinkedList } = require('./linkedList');

describe('testing sizes', () => {
    const linkedList = new LinkedList();
    test('new linked list size is 0', () => {
        expect(linkedList.size).toBe(0);
    });
    
    // TESTS
    test('size is 3 after adding 3 elements', () => {
        linkedList.append('Irina');
        linkedList.append('Damir');
        linkedList.append('We are FROGS!');
        expect(linkedList.size).toBe(3);
    });

    test('size is 4 after adding another 2 elements and deleting 1 element', () => {
        linkedList.append({x: '10', y: 20});
        linkedList.append({a: '20', z: 10});
        linkedList.pop();
        expect(linkedList.size).toBe(4);
    });    
});

describe('testing append and prepend, contains, find, getHead, getTail, pop and at methods', () => {
    const linkedList = new LinkedList();
    linkedList.append('Irina');
    linkedList.prepend('Damir');
    
    const objUS = {Irina: 'КВА', Damir: "РТ"};
    linkedList.append(objUS);
    linkedList.append('We are FROGS!');

    // TESTS
    test('testing getHead method and prepend, append methods', () => {
        expect(linkedList.getHead().value).toBe('Damir');
    });

    test('testing getTail method and prepend, append methods', () => {
        expect(linkedList.getTail().value).toBe('We are FROGS!');
    });

    test('testing contains method, true', () => {
        expect(linkedList.contains('Damir')).toBe(true);
    });

    test('testing contains method, false', () => {
        expect(linkedList.contains('Irina2')).toBe(false);
    });

    test('testing find method, correct index', () => {
        expect(linkedList.find('We are FROGS!')).toBe(3);
    });

    test('testing find method, incorrect index, return null', () => {
        expect(linkedList.find('We ore FROGS!')).toBe(null);
    });

    test('testing pop method', () => {
        linkedList.pop();
        expect(linkedList.find('We are FROGS!')).toBe(null);
        linkedList.append('We are FROGS!');
    });

    test('testing at method', () => {
        expect(linkedList.at(3).value).toBe('We are FROGS!');
        expect(linkedList.at(2).value).toBe(objUS);
    });
});

describe('testing insertAt and removeAt methods', () => {
    const linkedList = new LinkedList();
    linkedList.append('Irina');
    linkedList.prepend('Damir');
    
    const objUS = {Irina: 'КВА', Damir: "РТ"};
    linkedList.append(objUS);
    linkedList.append('We are FROGS!');

    // TESTS
    test('testing insertAt method', () => {
        const obj2 = {x: 10, y: 200};
        linkedList.insertAt(obj2, 2)
        expect(linkedList.at(2).value).toBe(obj2);
        expect(linkedList.at(3).value).toBe(objUS);
        expect(linkedList.at(4).value).toBe('We are FROGS!');
        expect(linkedList.at(1).value).toBe('Irina');
    });

    test('testing removeAt method', () => {
        linkedList.removeAt(2)
        expect(linkedList.at(2).value).toBe(objUS);
        expect(linkedList.at(3).value).toBe('We are FROGS!');
        expect(linkedList.at(1).value).toBe('Irina');
    });

});

describe('testing toString method', () => {
    const linkedList = new LinkedList();
    linkedList.append('Irina');
    linkedList.prepend('Damir');
    
    const objUS = {Irina: 'КВА', Damir: "РТ"};
    linkedList.append(objUS);
    linkedList.append('We are FROGS!');

    // TESTS
    test('testing toString method', () => {
        expect(linkedList.toString()).toBe(
            `( Damir ) -> ( Irina ) -> ( [object Object] ) -> ( We are FROGS! )`
        );
    });

});