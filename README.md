# Extra Julekalender
A React-based Christmas calendar app with a dynamic modal for each day. Includes admin functionality for managing all days.

### [Netlify](https://extra-julekalender.netlify.app/)

## Project Setup

### Prerequisites
- Node.js (version 21.7.3 or higher)
- NPM (version 10.9.0)
- Git

### Cloning the Repository
```
git clone [repository-url https://github.com/rydlande/Extra_julekalender.git]
cd [project-folder Extra_julekalender]
```

### Install Dependencies
```
npm install
```

## Development Workflow

### Common Commands
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run linting


## Project Structure
- `/src` - Main source code
  - `App.jsx` - Root component
  - `/components` - Reusable components (e.g., `CalendarGrid`, `Modal`)
  - `/pages` - Page components (e.g., `Calendar`, `Admin`)
  - `/data` - Static data for daily content
  - `/utils` - Helper functions
  - `/assets` - Static assets (e.g., images, favicon)
- `/public` - Static assets (e.g., images, favicon)
- `/dist` - Production build output