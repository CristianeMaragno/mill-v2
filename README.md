This project is a finance learning platform where the user creates their account and can watch classes about investments, personal finances and use relevante tools like a interest calculator and much more.

# How to develop

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