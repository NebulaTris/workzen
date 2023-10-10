
![workzen](https://github.com/NebulaTris/workzen/assets/94922914/a6deee42-0701-4d68-8c5c-5ffa4a6bd735)
<p align="center">
<img src="https://img.shields.io/badge/Project%20Status-WIP-blue.svg">
<a href="https://gitmoji.dev">
  <img
    src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
    alt="Gitmoji"
  />
</a></img>
</p>

WorkZen is a powerful task management application built with modern web technologies, including React (Next.js 13.4), GPT-4 for intelligent task suggestions, drag and drop functionality, Zustand for state management, and powered by the Appwrite Cloud backend. It offers an intuitive user interface and seamless task organization to enhance your productivity.

## Features

- **Intelligent Task Suggestions**: Utilizing GPT-4, WorkZen suggests task descriptions based on your inputs, streamlining task creation.
- **Drag & Drop Interface**: Easily rearrange and prioritize tasks with an intuitive drag-and-drop interface.
- **Real-time Updates**: Experience seamless collaboration with real-time updates across all connected devices.
- **State-of-the-Art Security**: Leveraging Appwrite Cloud ensures robust security and data protection.
- **Responsive Design**: WorkZen is designed to work flawlessly on both desktop and mobile devices.

## Technologies Used

- React (Next.js 13.4)
- GPT-4 for task suggestions
- Zustand for state management
- Appwrite Cloud for backend services
- TypeScript for type safety

## Getting Started

1. Clone the repository: `git clone https://github.com/NebulaTris/workzen.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit: `http://localhost:3000`

## Configuration

To connect to your own Appwrite Cloud backend, update the configuration in `src/config.ts` with your API endpoints and credentials.

```typescript
export const appwriteConfig = {
  endpoint: 'https://api.appwrite.io/v1',
  project: 'YOUR_PROJECT_ID',
  key: 'YOUR_API_KEY',
};
```

## Contributions

We welcome contributions to enhance the functionality and features of WorkZen. Please fork the repository and submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
