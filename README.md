# NoteHub

**NoteHub** is a web application that provides authenticated users with a convenient tool for creating, editing, storing, and managing personal notes. The application also includes a user profile section with basic profile editing capabilities.

The project is focused on demonstrating modern front-end development practices and building a well-structured, maintainable application using a contemporary technology stack.

---

## Project Status and Purpose

NoteHub is a learning-focused pet project created to master and practice modern front-end technologies and architectural approaches. It was designed as a portfolio project to demonstrate practical skills in React and Next.js development.

From the perspective of its original learning goals, the project is considered **complete**. At the same time, it has clear potential for further improvements and feature expansion if needed.

---

## Core Features

- ✅ User authentication using email and password
- ✅ Secure access to personal notes (data is stored on the server and available across devices)
- ✅ Create, edit, view, and delete notes
- ✅ Paginated notes list
- ✅ User profile page with the ability to edit the username
- ✅ Responsive layout for mobile, tablet, and desktop screens
- ✅ Visual notifications for successful actions and errors
- ✅ Dedicated pages for loading states, errors, and missing routes (404)

---

## Current Limitations in Features

- ⚠️ Profile photo editing is not available due to API limitations (a placeholder image is used)
- ⚠️ Some UI interactions on mobile devices do not yet include animations
- ⚠️ A system confirmation dialog is used when deleting notes instead of a custom modal

---

## Technology Stack

### Core Technologies

- **TypeScript**
- **React**
- **Next.js**

### Libraries and Tools

- **Tailwind CSS** - styling and responsive layout
- **Motion** - animations and UI transitions
- **React Query** - server-state management and data caching
- **Zustand** - lightweight global state management
- **Axios** - HTTP client
- **react-paginate** - pagination handling
- **cookie** - cookie management

### Backend & API

Educational API provided by **GoIT**  
📄 Documentation: [https://notehub-api.goit.study/docs/](https://notehub-api.goit.study/docs/)

### Hosting

Deployed and hosted on **Vercel**

---

## Architectural and Technical Decisions

The selected technology stack (Next.js, React, TypeScript) provides a balanced combination of performance, scalability, and developer experience.

- **Next.js** enables flexible routing, server-side rendering, and a combination of server and client components, improving both performance and application structure.
- **TypeScript** increases code reliability through static typing and makes the codebase easier to maintain and refactor.
- **React Query** is used to efficiently manage server state, reduce unnecessary network requests, and cache data.
- **Zustand** provides a simple and lightweight solution for global state management without introducing excessive complexity.

The application is built using a **component-driven architecture**, with logic split into small, reusable components. This approach improves readability, simplifies maintenance, and allows individual parts of the UI to be modified or reused with minimal effort.

The project uses a combination of server-side and client-side components, along with a custom proxy-based routing layer to control navigation and session validation.

Authentication is implemented using email and password, with the authentication token stored in cookies. User sessions are validated on the server through the proxy layer, ensuring controlled access to protected routes.

---

## Design and User Experience

- 📱 Fully responsive layout (mobile → wide screens)
- 🎨 Minimalistic, modern UI
- 🌙 Dark color theme to reduce eye strain
- 📖 High-contrast typography for readability
- ✨ Interactive UI elements with animations where applicable

---

## Local Development

The project can be run locally.

### Requirements

- **Node.js** (recommended: latest LTS)

### Environment Variables

Create a `.env` file in the project root and add:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Commands

```bash
npm install
npm run dev
```

---

## Live Demo

The live version of the application is available here:

🔗 **[https://notehub-helvita.vercel.app/](https://notehub-helvita.vercel.app/)**

---

## Known Issues and Limitations

- In some cases, an authenticated user may be redirected to the home page when navigating to the notes page immediately after logging in. (Temporary solution implemented: refreshing the page after login, so the new session could loaded)
- Pagination may behave inconsistently, occasionally requiring multiple clicks to trigger data loading.
- Due to the educational nature of the backend API, there are limitations on stored data size and overall stability under heavy load.

> **Note:** These issues are primarily related to backend constraints or edge cases and do not affect the core learning goals of the project.

---

## Summary

**NoteHub** is a structured and thoughtfully designed front-end project that demonstrates practical use of modern technologies, component-based architecture, authentication flow handling, and responsive UI design. It serves as a solid foundation for further development and as a representative portfolio project.

---

## Author

Created with 💙 by [Olha Sereda](https://github.com/hellvita)
