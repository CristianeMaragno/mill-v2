This project is a finance learning platform where the user creates their account and can watch classes about investments, personal finances and use relevante tools like a interest calculator and much more.

# How to develop

## Files structure
This application is designed as a full-stack monolithic solution, leveraging React and Next 13 along with the App Router for seamless navigation. The routing structure is organized based on the folder names within the main app directory. Note that folders enclosed in parentheses serve the sole purpose of code organization.

- **App Folder**
  - Houses application-specific routes
  - Defines the primary structure for seamless navigation
  - The api folder is dedicated to backend routes, segregating server-side functionality for clarity
- **Components Folder**
  - Contains third-party components sourced from shadcn
  - Hosts custom global components for reusability across the application
- **Hooks Folder**
  - Centralized location for state management code utilizing Zustand
- **Lib Folder**
  - Houses essential configuration code of various aspects of the application, as payment, database, etc  
- **Prisma Folder**
  - Stores the schema for our database, providing robust control during development
  - Enhances security through precise data typing, bolstering data integrity



## Install dependencies
This project uses [npm](https://www.npmjs.com/) as it's package manager. To install dependencies, run:

```bash
npm install
``` 

## Environment variables
Copy the .env.example file to a new file called .env on the project root and replace the values with the sensitive information needed.

## Database setup
This project use prisma for database interation, to create the schema, run
```bash
npx prisma generate
```

To update the database, use
```bash
npx prisma db push
```

And to explore and manipulate your data locally
```bash
npx prisma studio
```

## Simulate payment in local enviromment

```bash
stripe login
```

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

## Run dev server
After installing, you may start the project with:
```bash
npm run dev
```
## Other informations
If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [Clerk](https://clerk.com/g)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios](https://axios-http.com/)
- [Stripe](https://stripe.com/br)
- [Typebot](https://www.typebot.io/)
- [Shadcn](https://ui.shadcn.com/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)