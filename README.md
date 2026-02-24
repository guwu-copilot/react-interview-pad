# React Interview Pad

A simple, interactive coding environment for practicing JavaScript and React interview questions.

## Features

- 📝 Live code editor
- ▶️ Instant code execution
- 🖥️ Console output display
- 🎨 Clean, modern UI
- ⚡ Fast and lightweight

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in terminal (usually http://localhost:5173)

## How to Use

1. Write your JavaScript code in the left editor panel
2. Click "▶️ Run Code" to execute
3. See console output in the right panel
4. Use console.log(), console.error(), console.warn() to print output

## Example Code

```javascript
// Test JavaScript fundamentals
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence:");
for (let i = 0; i < 10; i++) {
  console.log(`fib(${i}) = ${fibonacci(i)}`);
}

// Test array methods
const arr = [1, 2, 3, 4, 5];
console.log("Map:", arr.map(x => x * 2));
console.log("Filter:", arr.filter(x => x % 2 === 0));
console.log("Reduce:", arr.reduce((a, b) => a + b, 0));
```

## Perfect For

- Technical interview practice
- JavaScript fundamentals
- Algorithm practice
- Quick code testing
- Learning and experimentation
