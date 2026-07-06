# Required Dependencies for Toprates.ca

## Installation Commands

### Core UI & Styling
```bash
npm install class-variance-authority clsx tailwind-merge
```

### Sanity CMS
```bash
npm install @sanity/client @sanity/image-url next-sanity sanity @sanity/desk @sanity/vision
```

### Optional but Recommended
```bash
# For Portable Text rendering in blog posts
npm install @portabletext/react

# For better image handling
npm install next-image-export-optimizer
```

## Complete Dependencies List

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `class-variance-authority` | ^0.7.0+ | Component variant generation |
| `clsx` | ^2.0.0+ | Utility for conditional classnames |
| `tailwind-merge` | ^2.0.0+ | Merge Tailwind CSS classes |
| `@sanity/client` | ^6.0.0+ | Sanity CMS client |
| `@sanity/image-url` | ^1.0.0+ | Image URL builder |
| `next-sanity` | ^5.0.0+ | Next.js Sanity integration |
| `sanity` | ^3.0.0+ | Sanity studio core |
| `@sanity/desk` | ^3.0.0+ | Desk tool for content management |
| `@sanity/vision` | ^3.0.0+ | GROQ query tool |
| `@portabletext/react` | ^3.0.0+ | Blog content rendering (optional) |

### Already Installed (verify in package.json)
- `next` ^13.5.11
- `react` 18.2.0
- `react-dom` 18.2.0

## Installation Steps

### 1. Add Core Dependencies
```bash
npm install class-variance-authority clsx tailwind-merge
```

### 2. Add Sanity CMS
```bash
npm install @sanity/client @sanity/image-url next-sanity sanity @sanity/desk @sanity/vision
```

### 3. Install Optional Packages
```bash
# For rendering rich text in blog posts
npm install @portabletext/react

# Optional: Better TypeScript support
npm install --save-dev @types/node @types/react @types/react-dom
```

### 4. Verify Installation
```bash
npm list class-variance-authority clsx tailwind-merge @sanity/client
```

## Updated package.json

After installation, your `dependencies` section should include:

```json
{
  "dependencies": {
    "next": "^13.5.11",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "@sanity/client": "^6.0.0",
    "@sanity/image-url": "^1.0.0",
    "next-sanity": "^5.0.0",
    "sanity": "^3.0.0",
    "@sanity/desk": "^3.0.0",
    "@sanity/vision": "^3.0.0",
    "@portabletext/react": "^3.0.0"
  }
}
```

## Environment Variables

Create `.env.local` based on `.env.example`:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token_here

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://toprates.ca
```

## Getting Sanity Credentials

1. Go to https://www.sanity.io/
2. Create/sign in to your account
3. Create a new project
4. Note your Project ID
5. Go to API > Tokens
6. Create a read token
7. Add to `.env.local`

## Verify Everything Works

```bash
# Build to check for any TypeScript errors
npm run build

# Start development server
npm run dev

# Visit http://localhost:3000
```

## Troubleshooting

### "Module not found" errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Sanity client not working
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
- Verify `NEXT_PUBLIC_SANITY_DATASET` is set (usually "production")
- Check project exists in your Sanity dashboard

### Tailwind classes not applying
- Verify `tailwind.config.ts` includes src paths:
```ts
content: ["./src/**/*.{js,ts,jsx,tsx}"]
```

### Image URL builder errors
- Ensure `@sanity/image-url` is installed
- Verify Sanity client is properly configured
- Check that images have proper asset references in Sanity

## Optional TypeScript Setup

For better IDE support, create `sanity.types.ts` after creating content:

```bash
npm run sanity typegen
```

This generates type definitions for all your Sanity content.

## Next Steps After Installation

1. npm install (all packages)
2. Copy `.env.example` → `.env.local`
3. Configure environment variables
4. npm run dev
5. Create sample content in Sanity
6. Build insurance pages using the components
7. npm run build (verify production build works)

## Support & Resources

- Sanity Docs: https://www.sanity.io/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Class Variance Authority: https://cva.style/docs
