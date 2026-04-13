import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Notice Board',
  description: 'Dark themed digital notice board',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">{children}</div>
      </body>
    </html>
  );
}
