class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2


// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const { subtract } = require('./your-file-name'); // replace 'your-file-name' with the actual file name

describe('subtract', () => {
    test('subtracting 2 from 3 should return 1', () => {
        expect(subtract(3, 2)).toBe(1);
    });

    test('subtracting 5 from 10 should return 5', () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test('subtracting 0 from a number should return the number itself', () => {
        expect(subtract(7, 0)).toBe(7);
    });

    test('subtracting a number from itself should return 0', () => {
        expect(subtract(5, 5)).toBe(0);
    });

    test('subtracting a number from a smaller number should return a negative result', () => {
        expect(subtract(3, 5)).toBe(-2);
    });
});