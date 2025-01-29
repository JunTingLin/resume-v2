# Resume-v2

This is my personal website and blog built using:

- **Framework** : [Next.js](https://nextjs.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Markdown** : [MDX](https://mdxjs.com/) and [Contentlayer](https://contentlayer.dev/)
- **Deployment** : [Vercel](https://vercel.com/)

## Acknowledgments

This project is built by referencing the open-source repository [adarsha.dev](https://github.com/adarshaacharya/adarsha.dev) by [Adarsha Acharya](https://github.com/adarshaacharya), which is licensed under the [MIT License](https://github.com/adarshaacharya/adarsha.dev/blob/main/LICENSE).

Additionally, the design and style of this project were inspired by [Ho Ching-Ru's personal website](https://ho.chingru.me/). Special thanks for the inspiration!

## Running Locally

This application requires Node.js v16.13+.

1. Clone the repository:
`git clone https://github.com/JunTingLin/resume-v2`

2. Install dependencies:
`pnpm install`

3. Start the development server:
`pnpm dev`

4. Optional: To verify your favicon configuration locally, run:
`npx realfavicon check 3000`
This will check your favicon setup on the local development server (port 3000 by default).

### Building for Production
If deploying to a production environment manually (not using Vercel), you need to:

1. Build the application:
`pnpm build`

2. Start the production server:
`pnpm start`

For deployment on Vercel, these steps are handled automatically.
