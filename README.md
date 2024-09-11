# Bucks Cafe Frontend

## Getting started

#### NOTE

Please start the backend service before starting the frontend.

```bash
pnpm install
pnpm dev --open
```

## Tech Stack

- Tanstack-Query
- Tanstack-Router
- MUI v6
- Zod
- React-hook-form
- AG Grid

## Nuances

### CSS is modular

Ideally, this would have had been tailwindcss, but there were some issues with setting it up with MUI v6, so I ahead first. Priority is to get a functional app

### React-hook-form, NOT Redux-form

The owner of the repository has put it in bold on the website avoid using it.

### Tanstack Router

It was my first time using this lib (as is with Ag Grid). I have prior experience with a file-based routing system in NextJS, so it was not a huge leap. Implemented masking to hide ids from the URL during edits. Super-conveient implementation and clear docs on this.

## Roadmap

### Snackbars

My preference would have had been to implment `notistack`'s Snackbars to display action outcomes. Currently, the app uses the browser's native alert system to manage notifications (it's not great, but I was pressed for time)

### Filtering

Create a dynamic component for rendering the filters option in the table. It would have had been better if it was a checkbox-style, but most probably the correct implementation would have had been a optional radio-group system (disguised as ButtonGroup), since it would have leveraged the `location` query param from the URL.

## Known bugs

- Cancel button missing on Add/Edit pages
- If BE is down, app crashes. IMO, this is the biggest transgression of all. There are 2 good approaches to resolve this issue
  - React Suspense & Error Boundary to manage loading and error states
  - Dynamic rendering to ensure that data is available before triggering the rendering of the table component
- Table prints 1 row if no rows are available. Helper function needs to do a better job of returning the correct response.
