# Next.js App Boilerplate and Template

Next.js boilerplate and template for web, SaaS, and portfolio websites.

## Components

Components are the building blocks of Next.js App Template. They are designed to be used in a variety of projects. All components are split into **generic** and **project** components.

- [Generic](./components/generic/README.md): independent components that can be used in any project and in other project components.
- [Project](./components/project/README.md): components that use data from [project's configuration](./config/README.md).

### List of Components

#### Generic

- `InfoBox`: box with centered text information.
- `PageHeader`: title and subtitle for a page.
- `CTAButton`: call-to-action button.
- `ThemeToggle`: theme toggle button.

Learn more about [generic components](./components/generic/README.md).

#### Project

- `Header`: header area with navigation.
- `Footer`: footer area with links and social media.

Learn more about [project components](./components/project/README.md).

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/KenanBek/nextjs-app-template.git
```

You can also clone with another name:

```bash
git clone https://github.com/KenanBek/nextjs-app-template.git my-project
```

Then, install the dependencies:

```bash
npm install
```

Finally, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
