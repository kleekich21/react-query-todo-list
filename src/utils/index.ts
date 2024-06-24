import { AnyFunction, AsyncFunction } from "../types/todos";

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const withDelay = <T extends AnyFunction>(
  fn: T,
  ms: number
): AsyncFunction<T> => {
  return async (...args: Parameters<T>): Promise<ReturnType<T>> => {
    const fnPromise = fn(...args);
    const data = await Promise.all([delay(ms), fnPromise])
      .then(([_, data]) => {
        return data;
      })
      .catch((err) => {
        throw new Error(`ERROR: ${err}`);
      });

    return data;
  };
};
