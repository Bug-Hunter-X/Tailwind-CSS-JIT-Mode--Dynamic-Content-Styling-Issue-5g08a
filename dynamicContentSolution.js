The solution involves using techniques to force a re-render of the dynamically added content or explicitly triggering Tailwind's JIT re-compilation.   Here are a few approaches:

**1. Using `classList.add()` or similar methods**: Modify the way you add class names so that Tailwind's JIT compiler can pick it up: 
```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'Dynamically added content';
newDiv.classList.add('bg-blue-500', 'p-4'); // Directly add classes
document.body.appendChild(newDiv);
```

**2. Using a framework-specific re-render method**:
If you use a JavaScript framework (React, Vue, Angular etc.), trigger the relevant update mechanism.

**Example (React):**
```javascript
// Use useState hook or similar
const [count, setCount] = useState(0);

const addNewElement = () => {
  setCount(count + 1); // Trigger re-render
};
```

**3. Refreshing the page:** (This is a last resort, usually not ideal)
The simplest, albeit crude, solution is to simply refresh the whole page using location.reload().

Choose the approach that best fits your project's structure and framework.