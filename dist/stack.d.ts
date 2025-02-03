export declare class Stack<T> {
    private items;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    get(index: number): T | undefined;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
}
