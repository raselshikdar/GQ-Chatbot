# **GQ-Chatbot** 🤖

GQ-Chatbot is an AI-powered conversational assistant built using Groq's lightning-fast language models. Featuring a clean light-mode interface and intelligent interactions, it offers seamless conversations with automatic scrolling, markdown support, and persistent chat history. Deployed on Vercel for optimal performance.

---

## **✨ Enhanced Features**

- **Smart Auto-Scroll**: Automatically scrolls to new messages and responses
- **Light Mode Design**: Clean, modern UI with optimal readability
- **Markdown Support**: Renders code blocks, lists, and formatted text
- **Conversation Persistence**: Local storage saves chat history
- **Error Handling**: User-friendly error messages with retry option
- **Typing Indicator**: Visual feedback during response generation
- **Responsive Design**: Perfectly adapts to mobile & desktop screens
- **One-Click Deployment**: Ready for Vercel/GitHub Pages hosting

---

## **🛠️ Tech Stack**

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + CSS Modules
- **AI Provider**: Groq API
- **Markdown**: react-markdown + remark-gfm
- **State Management**: React Hooks
- **Deployment**: Vercel

---

## **🚀 Quick Start**

### **Prerequisites**
- Node.js 18.x+
- npm 9.x+
- Groq API Key ([Get Free Key](https://groq.com/))

### **Local Setup**
1. Clone repository:
   ```bash
   git clone https://github.com/raselshikdar/GQ-Chatbot.git
   cd GQ-Chatbot
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Set up your **Groq API key** in a `.env.local` file:
    ```env
    GROQ_API_KEY=your_groq_api_key_here
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

Now, open your browser and visit **`http://localhost:3000`** to interact with the chatbot.

---

## **🚀 Deployment**

This project is ready to be deployed on **Vercel**. You can deploy it easily by following these steps:

1. Push your code to GitHub (if not already done).
2. Head to [Vercel](https://vercel.com).
3. Click on **"New Project"** and import your GitHub repository.
4. Vercel will automatically detect the Next.js framework and deploy your project with zero configuration.

Once deployed, you’ll get a live link to access the chatbot.

---

## **🎨 Customizing UI**

The user interface is built with **Tailwind CSS**, a utility-first CSS framework. You can customize the design easily by modifying the classes in the `src/styles/tailwind.css` file.

To customize the UI:
1. Open the **`src/styles/tailwind.css`** file.
2. Modify the utility classes according to your preferred design.

---

## **💡 Contributing**

Feel free to fork this repository, make improvements, and create pull requests. Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Open a pull request to merge your changes.

We welcome contributions to make this project better!

---
