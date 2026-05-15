<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Frontend Agent Directives

- **React Imports**: Omit `import * as React from 'react'` in Next.js/React components. The modern JSX transform handles React imports implicitly.
- **Icons**: Use `lucide-react` for iconography. All new icons should use this library, and existing `@phosphor-icons/react` usage should be migrated away.
- **Performance**: To optimize performance, static arrays and their associated operations (e.g., `.map()`, `.find()`, `.filter()`) should be declared outside the component (at the module level) or cached using `useMemo` to prevent redundant re-allocation and re-computation during renders.
- **Images**: The Next.js configuration in `next.config.ts` has `images: { unoptimized: true }` enabled.
