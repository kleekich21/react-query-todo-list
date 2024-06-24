export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type AnyFunction = (...args: any[]) => any;
export type AsyncFunction<T extends AnyFunction> = (
  ...args: Parameters<T>
) => Promise<ReturnType<T>>;
