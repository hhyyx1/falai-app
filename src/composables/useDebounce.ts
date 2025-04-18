export function useDebounce(fn: Function, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: any[]) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}