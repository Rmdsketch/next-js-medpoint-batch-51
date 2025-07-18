# Convention

Remember, the most important aspect of conventions is consistency

---

## General

1. Your code should comply with Effective Typescript: Style for code style and naming convention such as name, methods, variable, file name, etc.
2. Avoid using any as a type, and prefer specific types (e.g., string, number).
3. Avoid excessive comments — write clear, self-explanatory code.

## Naming Convention

1. Naming Components
   Use descriptive and meaningful names for React components. Use PascalCase (capitalizing the first letter of each word) for component names.

2. Naming Files
   Name your files using PascalCase, matching the component name. For example, if you have a component named UserCard, the file should be named UserCard.tsx.

3. Naming Folder
   Use kebab-case for folder and file names. ex: components

4. Props
   Use descriptive names for props to clearly indicate their purpose. Avoid abbreviations or acronyms unless they are widely understood in the context of your project.

5. State variables
   Prefix state variables with is, has, or should to denote boolean values. ex: isActive, isError, isLoading

6. Event handlers
   Use handle as a prefix for event handler functions. For example, handleClick, handleInputChange

7. CSS classes
   Use lowercase letters and hyphens for CSS class names.

8. Constants
   Use uppercase letters with underscores to represent constants in JavaScript and put it under constants directory, ex: API_URL, MAX_RESULTS.

9. Utility functions
   For example, formatDate, generateUniqueId. and put it under directory utils

10. Context
    Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. https://legacy.reactjs.org/docs/context.html.
    When write new context, created it under providers directory and named it as module name with CamelCase

11. Realtime
    TODO:

12. Comments
    Use JSDoc comments for functions and classes, Write meaningful and concise comments where needed.

## Git Convention

1. Commit frequently with small, meaningful changes.
2. Write clear commit messages and describe the "why" behind the change if necessary.
3. Don't commit secrets, credentials, or unnessary files or codes. Always recheck before commit.
4. Use Git branches to manage features, bugs, and releases. Always prefixes your branch name with task ID such as T123.

### Branch Naming

Use the following naming conventions for branches:

- `main`: Stable, production-ready code.
- `develop`: Development code.
- `feat/T123-xyz`: New feature branches. Don't use `feat-xyz` or `feature/xyz` - just `feat/T123-xyz`.
- `test/T123-xyz`: When your code only update the tests.
- `bugfix/T123-xyz`: Bug fixes for develop branch.
- `hotfix/T123-xyz`: Bug fixes for production.

### Commit Messages

1. Follow this structure for commit messages:

```
<type>(<scope>): <short description>
<optional detailed explanation>
```

2. Types: feat, fix, docs, style, refactor, test, chore
3. Scope: Component or module or ticket number affected (optional)
4. Example: feat(user-profile/T1234): add edit functionality

## Linting and Formatting

1. Use ESLint for linting with the Airbnb or recommended plugin.
2. Use Prettier for code formatting with the following settings:

```
- Tab width: 2 spaces
- Line endings: LF
- Quote style: Single quotes
- Trailing commas: Always
```
