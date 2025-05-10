export const metadata = {
  title: 'My Todo App',
  description: 'A simple Todo application using Next.js and Java backend',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
