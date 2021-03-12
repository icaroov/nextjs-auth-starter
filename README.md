<p align="center">
  <img src="https://res.cloudinary.com/ddi5agea1/image/upload/v1615499495/next-auth_eoo57c.jpg" alt="NextJs" />
</p>

<h1 align="center">Next.js Authentication Start kit</h1>

<div align="center">

Passwordless Authentication with [**Next.js**](https://nextjs.org/), [**Prisma**](https://www.prisma.io/) + Postgres, and [**next-auth**](https://next-auth.js.org/).

</div>

![`next-auth` OAuth demo](https://res.cloudinary.com/ddi5agea1/image/upload/v1615566284/auth-gif2_eavp2e.gif)

## Getting Started
```
# Clone this repo
git clone https://github.com/icaroov/nextjs-auth-starter

# Go to file project
cd nextjs-auth-starter

# Install dependencies
npm install
# or
yarn
```

With `docker` and `docker-compose` installed on your machine, just run the following command:
```
docker-compose up -d
```
Then run the development server:
```
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.

### Prisma Studio
Prisma Studio is a visual editor for the data in your database.

You can run it with two ways:

1. Run `npx prisma studio` in your terminal. Runnings on [http://localhost:5555/](http://localhost:5555/).
2. Install the [desktop app](https://github.com/prisma/studio/releases) from the installers. Windows, macOS and Linux are supported.
