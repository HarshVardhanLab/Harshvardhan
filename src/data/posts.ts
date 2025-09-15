export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  cover: string;
  readTime: number;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "modern-react-patterns",
    title: "Modern React Patterns for 2024",
    date: "2024-01-15",
    tags: ["React", "JavaScript", "Frontend"],
    excerpt: "Explore the latest React patterns and best practices that will make your code more maintainable and performant in 2024.",
    cover: "/images/blog/react-patterns.jpg",
    readTime: 8,
    content: `# Modern React Patterns for 2024

React continues to evolve, and with it, the patterns and practices that help us build better applications. Here are the most important patterns you should know for 2024.

## Table of Contents
- [Custom Hooks](#custom-hooks)
- [Compound Components](#compound-components)
- [Render Props](#render-props)
- [Conclusion](#conclusion)

## Custom Hooks

Custom hooks are one of the most powerful patterns in React. They allow you to extract component logic into reusable functions.

\`\`\`jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  
  return { count, increment, decrement, reset };
}
\`\`\`

## Compound Components

This pattern allows you to create components that work together while maintaining a clean API.

\`\`\`jsx
function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

Modal.Header = function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
};

Modal.Body = function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
};
\`\`\`

## Conclusion

These patterns will help you write more maintainable and reusable React code. Remember to always consider the trade-offs and use the right pattern for your specific use case.`
  },
  {
    slug: "typescript-tips-tricks",
    title: "TypeScript Tips and Tricks for Better Development",
    date: "2024-01-10",
    tags: ["TypeScript", "JavaScript", "Development"],
    excerpt: "Discover advanced TypeScript techniques that will improve your development experience and catch more bugs at compile time.",
    cover: "/images/blog/typescript-tips.jpg",
    readTime: 6,
    content: `# TypeScript Tips and Tricks for Better Development

TypeScript has become an essential tool for modern web development. Here are some advanced tips to help you make the most of it.

## Table of Contents
- [Utility Types](#utility-types)
- [Conditional Types](#conditional-types)
- [Template Literal Types](#template-literal-types)

## Utility Types

TypeScript provides several utility types that can help you transform types.

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Pick only certain properties
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<PartialUser>;
\`\`\`

## Conditional Types

Conditional types allow you to create types that depend on a condition.

\`\`\`typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

type StringResponse = ApiResponse<string>; // { message: string }
type DataResponse = ApiResponse<User>; // { data: User }
\`\`\`

These techniques will help you write more type-safe and maintainable TypeScript code.`
  },
  {
    slug: "performance-optimization-react",
    title: "Performance Optimization in React Applications",
    date: "2024-01-05",
    tags: ["React", "Performance", "Optimization"],
    excerpt: "Learn how to identify and fix performance bottlenecks in your React applications using modern tools and techniques.",
    cover: "/images/blog/react-performance.jpg",
    readTime: 10,
    content: `# Performance Optimization in React Applications

Performance is crucial for user experience. Here's how to optimize your React applications.

## Table of Contents
- [Profiling](#profiling)
- [Memoization](#memoization)
- [Code Splitting](#code-splitting)

## Profiling

Use React DevTools Profiler to identify performance issues.

\`\`\`jsx
// Wrap components in Profiler during development
function onRenderCallback(id, phase, actualDuration) {
  console.log('Component:', id, 'Phase:', phase, 'Duration:', actualDuration);
}

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
\`\`\`

## Memoization

Use React.memo and useMemo to prevent unnecessary re-renders.

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => expensiveCalculation(item));
  }, [data]);
  
  return <div>{processedData}</div>;
});
\`\`\`

Remember, premature optimization is the root of all evil. Always measure first!`
  },
  {
    slug: "css-grid-flexbox-guide",
    title: "Complete Guide to CSS Grid and Flexbox",
    date: "2023-12-28",
    tags: ["CSS", "Layout", "Frontend"],
    excerpt: "Master CSS Grid and Flexbox with practical examples and learn when to use each layout method for maximum effectiveness.",
    cover: "/images/blog/css-grid.jpg",
    readTime: 12,
    content: `# Complete Guide to CSS Grid and Flexbox

CSS Grid and Flexbox are powerful layout systems. Here's when and how to use each one.

## Table of Contents
- [Flexbox Basics](#flexbox-basics)
- [CSS Grid Basics](#css-grid-basics)
- [When to Use What](#when-to-use-what)

## Flexbox Basics

Flexbox is perfect for one-dimensional layouts.

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## CSS Grid Basics

Grid is ideal for two-dimensional layouts.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## When to Use What

- Use Flexbox for components and small-scale layouts
- Use Grid for page layouts and complex two-dimensional designs

Both are essential tools in modern CSS development.`
  },
  {
    slug: "web-accessibility-guide",
    title: "Web Accessibility: A Developer's Guide",
    date: "2023-12-20",
    tags: ["Accessibility", "HTML", "UX"],
    excerpt: "Learn how to build accessible web applications that work for everyone, including users with disabilities.",
    cover: "/images/blog/accessibility.jpg",
    readTime: 9,
    content: `# Web Accessibility: A Developer's Guide

Building accessible web applications is not just good practice—it's essential for reaching all users.

## Table of Contents
- [Semantic HTML](#semantic-html)
- [ARIA Labels](#aria-labels)
- [Keyboard Navigation](#keyboard-navigation)

## Semantic HTML

Always use the right HTML element for the job.

\`\`\`html
<!-- Good -->
<button onclick="handleClick()">Submit</button>
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>

<!-- Bad -->
<div onclick="handleClick()">Submit</div>
\`\`\`

## ARIA Labels

Use ARIA attributes to provide additional context.

\`\`\`html
<button aria-label="Close dialog" onclick="closeDialog()">
  ×
</button>
\`\`\`

Building accessible applications benefits everyone, not just users with disabilities.`
  },
  {
    slug: "state-management-strategies",
    title: "State Management Strategies in Modern React",
    date: "2023-12-15",
    tags: ["React", "State Management", "Architecture"],
    excerpt: "Compare different state management solutions and learn when to use local state, Context API, or external libraries.",
    cover: "/images/blog/state-management.jpg",
    readTime: 7,
    content: `# State Management Strategies in Modern React

Choosing the right state management solution is crucial for maintainable React applications.

## Table of Contents
- [Local State](#local-state)
- [Context API](#context-api)
- [External Libraries](#external-libraries)

## Local State

Start with useState and useReducer for component-level state.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Context API

Use Context for sharing state across multiple components.

\`\`\`jsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

Choose the simplest solution that meets your needs.`
  }
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter(post => post.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)];
};