export class King {
    private constructor() {
    }

    private static instance: King | undefined;

    static getInstance(): King {
        if (!King.instance) {
            King.instance = new King();
        }
        return King.instance;
    }

    sayHello(): void {
        console.log('Hello, I am the king!');
    }
}