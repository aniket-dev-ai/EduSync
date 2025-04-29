import { Inter } from "next/font/google";
import "./globals.css";  
import { ClerkProvider } from "@clerk/nextjs";
import {dark} from '@clerk/themes'
import { ThemeProvider } from "../components/theme-provider";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduSync",
  description: "A career growth app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >

    <html lang="en" suppressHydrationWarning>
       <head />
        <body className={`${inter.className} dark`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            {/* main content */}
            <main className="min-h-screen w-full">
            {children}
            </main>
            {/* footer */}
            <footer className=" py-12">
              <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0">

                {/* Left side: Logo & copyright */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-2xl font-bold text-purple-600">EduSync</h3>
                  <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} EduSync. All rights reserved.</p>
                </div>

                {/* Center: Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                  <a href="/about" className="text-white/70 hover:text-purple-400 transition-colors">About</a>
                  <a href="/features" className="text-white/70 hover:text-purple-400 transition-colors">Features</a>
                  <a href="/faq" className="text-white/70 hover:text-purple-400 transition-colors">FAQ</a>
                  <a href="/contact" className="text-white/70 hover:text-purple-400 transition-colors">Contact</a>
                </div>

                {/* Right side: Socials */}
                <div className="flex space-x-5 justify-center">
                  <a href="#" className="text-white/70 hover:text-purple-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.845c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.464h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-purple-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-.554.246-1.15.413-1.773.487.638-.381 1.126-.984 1.355-1.704-.596.353-1.255.609-1.956.748a3.28 3.28 0 00-5.593 2.99A9.32 9.32 0 013.114 2.115a3.27 3.27 0 001.014 4.366 3.268 3.268 0 01-1.487-.41v.042c0 1.53 1.089 2.804 2.533 3.096a3.289 3.289 0 01-1.482.056 3.285 3.285 0 003.065 2.277 6.588 6.588 0 01-4.862 1.36 9.29 9.29 0 005.034 1.474c6.042 0 9.341-5.003 9.341-9.341 0-.143-.004-.284-.01-.425a6.676 6.676 0 001.636-1.697z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white/70 hover:text-purple-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.04c-5.515 0-10 4.486-10 10.001 0 5.515 4.485 10 10 10s10-4.485 10-10c0-5.515-4.485-10.001-10-10.001zm0 18.417c-4.648 0-8.417-3.77-8.417-8.416 0-4.647 3.769-8.417 8.417-8.417s8.417 3.77 8.417 8.417c0 4.646-3.769 8.416-8.417 8.416zm4.542-11.25c-.59-.337-1.233-.501-2.042-.524-.964-.028-1.946.393-2.5 1.101-.502.632-.686 1.292-.728 2.09-.025.48-.003.865.01 1.104l-.011.004v.002s-.002.003-.002.003h2.003c.012-.308.025-.623.057-.927.065-.647.323-1.16.866-1.596.4-.32.945-.508 1.433-.497.649.015 1.261.315 1.656.765.418.471.638 1.087.638 1.756 0 .703-.254 1.271-.715 1.698-.357.33-.888.545-1.465.545-.439 0-.871-.148-1.235-.417-.366-.271-.635-.645-.785-1.092h-.02v.014c-.097.306-.234.589-.42.842-.375.519-.946.927-1.619 1.096-.785.191-1.589.053-2.24-.394-.486-.337-.822-.824-.964-1.425-.148-.62-.05-1.248.276-1.792.238-.393.598-.712 1.014-.915.448-.218.935-.325 1.407-.325.206 0 .408.017.605.049.293.049.582.124.86.224.28.1.543.227.787.37z" />
                    </svg>
                  </a>
                </div>

              </div>
            </footer>
          </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>

  );
}
