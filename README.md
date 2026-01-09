# Personal Portfolio

This is a personal portfolio website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Modern UI**: Clean layout with dark mode support.
- **Sections**:
  - Hero (Introduction)
  - About Me (Education & Interests)
  - Skills (Technical & Soft skills)
  - Projects (Showcase)
  - Contact (Social links)
- **Fast Performance**: Optimized by Next.js.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Customization

- **Content**: Edit the files in `src/components/` to update your information.
  - `Hero.tsx`: Your name and tagline.
  - `About.tsx`: Your bio and education.
  - `Skills.tsx`: Your skill list.
  - `Projects.tsx`: Your projects data.
  - `Contact.tsx`: Your social links.
- **Resume**: Place your PDF resume in the `public/` folder and name it `resume.pdf` (or update the link in `Hero.tsx`).
- **Styles**: Adjust `tailwind.config.ts` or `src/app/globals.css` for themes.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1.  Push this code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js and deploy.

## Analytics

To add analytics:
1.  Enable Analytics in your Vercel dashboard.
2.  Install `@vercel/analytics`: `npm i @vercel/analytics`
3.  Add `<Analytics />` to `src/app/layout.tsx`.

