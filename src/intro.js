// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export const calculateAverage = (array) => {
  if (array.length === 0) return NaN;
  if (array.length === 1) return array[0];
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
};
