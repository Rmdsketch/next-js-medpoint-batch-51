# nextjs-medpoint-batch-51

NextJS medpoint Pre IP batch 51

## Getting Started

This boilerplate code is preloaded with some basic components like basic app architecture, app theme, l10n languages, Supabase client, and required dependencies to create a new project. This will also help in reducing setup & development time by allowing you to use same code pattern and avoid re-writing from scratch.

### Project Structures

```
├── messages
├── public
├── src
│   ├── app
│   ├── actions                             # Put any global action on this, ex: locale, theme, etc.
│   ├── components
│   ├── constants
│   ├── i18n
│   └── lib
│       ├── axios
│       ├── mui
│       ├── providers
│       ├── raiden
│       ├── storage
│       └── supabase
│   ├── providers
│   ├── types
│   └── utils
└── __test__
    ├── app
    │   └── login
    │       └── auth
    │           └── page.test.tsx
```

## Root-Level Directories

### `messages`

This directory contains files related to the application's messaging or internationalization (i18n). These files often store translations or localized strings for different languages.

- **Example**:  
  `messages/en.json` for English translations.  
  `messages/es.json` for Spanish translations.

---

### `public`

The `public` directory is used for storing static assets such as images, fonts, icons, and other files that do not require processing by the app. These files are accessible at the root URL path.

- **Examples**:
  - `/public/logo.png` → Accessible at `/logo.png`.
  - `/public/styles.css` → Accessible at `/styles.css`.

---

## `src` Directory

The `src` folder organizes the main application code, keeping it modular and scalable.

### `actions`

Contains functions or utilities that handle actions like API calls, server-side logic. These functions centralize business logic and make it reusable.

- **Example Use Cases**:
  - Fetching data from APIs.
  - Posting data to servers.

---

### `app`

The `app` directory is where you define your application's routes, layouts, and pages. It leverages the Next.js **App Router** for improved file-based routing.

- **Subdirectories**:

  - **Pages**: Each folder/file represents a route (e.g., `src/app/dashboard` → `/dashboard`).
  - **Layouts**: Shared layouts for specific pages.
  - **Middleware**: Server-side logic applied globally or to specific routes.

  Note: UI and Logic should separate to customHooks (e.g., `useAuth.ts`) on each subdirectories page

---

### `components`

This directory stores reusable UI components that are used across the application. Components should be modular, self-contained, and focused on a single responsibility.

- **Examples**:
  - `Button.tsx` → A customizable button component.
  - `Navbar.tsx` → A navigation bar used throughout the app.

---

### `constants`

The `constants` folder contains configuration values, constant variables, and enums that are used globally in the app. This ensures consistency and avoids hardcoding values in multiple places.

- **Examples**:
  - API endpoints.
  - Application-wide settings like `THEME_COLORS`.

---

### `i18n`

This directory is dedicated to internationalization (i18n). It includes files and configurations for supporting multiple languages or locales.

- **Contents**:
  - Locale files (e.g., `en.json`, `id.json`).
  - Initialization logic for i18n libraries like `next-i18next` or `react-intl`.

---

### `lib`

The lib folder acts as a central location for shared libraries, utilities, and configurations that can be used throughout the application. It helps organize reusable code, ensuring maintainability and separation of concerns.

- **Subdirectories**:

  - **axios**:
    This folder likely contains configurations and utility functions for working with the Axios HTTP client.

  ```
  - Custom Axios instances with predefined base URLs and headers.
  - Interceptors for handling request/response transformations or errors globally.
  - Helper functions for API requests.
  ```

  - **mui**:
    This directory is probably dedicated to Material-UI (MUI) related configurations and customizations.

  - **providers**:
    This folder likely contains context providers for global state or application configurations.

  ```
  - Wrapper components for nesting providers.
  - Utility functions for initializing and managing provider-specific logic.
  ```

  - **raiden**:
    The common function related to raiden. eg: function, custom, rpc or etc.

  - **storage**:
    This directory probably handles storage-related utilities, such as local storage, session storage, or cookies.

  - **supabase**:
    This folder likely deals with integrating Supabase into your application.

  ```
  - Client initialization and configuration scripts.
  - Utility functions for interacting with Supabase APIs (e.g., providers, client, server, middleware).

  ```

  - **hooks**:
    Under the supabase directory, this folder might contain custom React hooks tailored for Supabase. eg: realtime

  ```
    useRealtime(
      handleRealtime,
      {
        table: 'books',
        type: 'postgres_changes',
        filter: {
          event: '*',
          schema: 'public',
        },
      }
    );
  ```

---

### `providers`

This directory contains context providers and global state management logic for the app. It may include:

- Providers for authentication, theme, or global state.
- State management tools like React Context or Zustand.

- **Example**:
  ```tsx
  // src/providers/AuthProvider.tsx
  export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Authentication logic here
    return <AuthContext.Provider>{children}</AuthContext.Provider>;
  };
  ```
