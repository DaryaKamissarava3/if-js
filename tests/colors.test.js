/**
 * @jest-environment jsdom
 */

const changeColor = () => {
    let i = 0;
    return function (event) {
        event.target.style.color = colors[i];
        i++;
        if (i >= colors.length) {
            i = 0;
        }
    }
}

describe('check the click on p tag', () => {
    document.body.innerHTML =
        ' <p id="text1">' +
        '<p id="text2">' +
        '<p id="text3">';

    const element1 = document.getElementById('text1');
    const element2 = document.getElementById('text2');
    const element3 = document.getElementById('text3');
    const elements = [element1, element2, element3];

    const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

    test('expect color magenta', async () => {
        for (let i = 0; i < elements.length; i++) {
            elements[i].click();
            changeColor(elements[i]);
            const color = colors[0];
            expect(color).toBe('magenta');
        }
    });
    test('expect color cyan', async () => {
        for (let i = 0; i < elements.length; i++) {
            elements[i].click();
            changeColor(elements[i]);
            const color = colors[1];
            expect(color).toBe('cyan');
        }
    });
    test('expect color firebrick', async () => {
        for (let i = 0; i < elements.length; i++) {
            elements[i].click();
            changeColor(elements[i]);
            const color = colors[2];
            expect(color).toBe('firebrick');
        }
    });
    test('expect color springgreen', async () => {
        for (let i = 0; i < elements.length; i++) {
            elements[i].click();
            changeColor(elements[i]);
            const color = colors[3];
            expect(color).toBe('springgreen');
        }
    });
    test('expect color skyblue', async () => {
        for (let i = 0; i < elements.length; i++) {
            elements[i].click();
            changeColor(elements[i]);
            const color = colors[4];
            expect(color).toBe('skyblue');
        }
    });
});