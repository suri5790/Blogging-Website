# Blogging Platform

A fully functional blogging platform built with **Prisma, Wrangler, Hono, and TypeScript** for the backend, and **React with hooks** for the frontend. The platform enables **secure user authentication** and **intuitive blog creation, publishing, and management**. Deployed seamlessly on **Vercel** for reliability and performance.

## Features

- **User Authentication:** Secure Sign-up and Sign-in functionality.
- **Blog Management:** Create, update, publish, and manage blog posts.
- **Frontend:** Interactive React-based pages for:
  - Sign-in
  - Sign-up
  - Blog creation
  - Blog publishing
  - Blog updating
- **Backend:** API routes powered by **Hono** and **Prisma** for optimized performance.
- **Deployment:** Fully deployed on **Vercel** for scalability.

## Tech Stack

- **Frontend:** React, React Hooks, TypeScript
- **Backend:** TypeScript, Prisma, Hono
- **Deployment:** Vercel

## How to Use

1. Visit the **[Live Platform] https://blogging-website-livid.vercel.app/** (Add your deployment URL here).
2. Sign up or sign in to your account.
3. Create, publish, and manage your blogs seamlessly.

## Project Structure

```
├── backend
│   ├── prisma/       # Prisma schema and migrations
│   ├── routes/       # API routes for users and blogs
│   ├── common/       # Shared utilities
│   └── index.ts      # Entry point for backend
├── frontend
│   ├── hooks/        # React hooks for state management
│   ├── pages/        # Pages for Sign-in, Sign-up, Blogs, etc.
│   ├── components/   # Reusable UI components
│   └── App.tsx       # Main application component
├── .env              # Environment variables
└── package.json      # Dependencies and scripts
```

## Deployment

The platform is deployed on **Vercel** and accessible at **[Live URL] https://blogging-website-livid.vercel.app/**



