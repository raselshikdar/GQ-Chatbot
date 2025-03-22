import Head from 'next/head';
import ChatWindow from '../components/ChatWindow';

export default function Home() {
  return (
    <>
      <Head>
        <link id="favicon" rel="shortcut icon" href="/assets/images/favicon.webp" type="image/webp" />
      </Head>
      <div className="min-h-screen bg-secondary-dark">
        {/* Render the ChatWindow component */}
        <ChatWindow />
      </div>
    </>
  );
}
