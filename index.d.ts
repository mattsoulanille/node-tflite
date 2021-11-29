declare const types: readonly ["NoType", "Float32", "Int32", "UInt8", "Int64", "String", "Bool", "Int16", "Complex64", "Int8", "Float16"];
export declare type Type = typeof types[number];
export interface InterpreterOptions {
    numThreads?: number;
    useCoral?: boolean;
}
export declare class Interpreter {
    private _interpreter;
    private _allocated;
    get allocated(): boolean;
    constructor(model: ArrayBufferView, options?: InterpreterOptions);
    get inputs(): Tensor[];
    get outputs(): Tensor[];
    resizeInputTensor(inputIndex: number, dims: number[]): void;
    allocateTensors(): void;
    invoke(): void;
}
export declare class Tensor {
    private _interpreter;
    private _tensor;
    constructor(interpreter: Interpreter, _tensor: any);
    get interpreter(): Interpreter;
    get type(): Type;
    get name(): string;
    get dims(): number[];
    get byteSize(): number;
    copyFrom(data: ArrayBufferView): void;
    copyTo(data: ArrayBufferView): void;
}
export {};
