## Prerequisites

Before running the application, ensure that you have the following installed on your system:

1. **Node.js**:  
   Install the latest LTS version of Node.js. You can download it from [Node.js Official Website](https://nodejs.org/).

2. **Package Manager**:

   - Use `npm` (bundled with Node.js) or `yarn`.
   - Install `yarn` globally if you prefer it:
     ```bash
     npm install -g yarn
     ```

3. **Environment Variables**:  
   Create an `.env` file in the root directory to configure environment variables required by the application. Example:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://api.example.com
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-api-key
   ```
4. **Gitea Access Token**:  
  Run this command. Replace `<TOKEN>` with your Gitea access token. You can generate a token from [Gitea Applications Settings](https://gitea.sev-2.com/user/settings/applications).
    ```bash
      git config --global url."https://<TOKEN>@gitea.sev-2.com".insteadOf ssh://gitea.sev-2.com
    ```

## Run Locally

Clone the project

```bash
  git clone link_repo
```

Go to the project directory

```bash
  cd nextjs-medpoint-batch-51
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn run dev
```

Happy Coding! 🚀
