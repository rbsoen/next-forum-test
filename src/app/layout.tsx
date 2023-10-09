import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import Link from 'next/link'

import Provider from "@/app/context/client-provider"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export const metadata: Metadata = {
  title: 'Forum',
  description: 'Test forums',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <Provider session={session}>
      <body className="main">
        <header>
          <nav>
          <ul>
            <li><b>{session?.user?.displayName}</b></li>
            {
              session?.user?
                (<>
                  <li><Link href="/api/auth/signout">Log out</Link></li>
                </>)
              : (<>
                  <li><Link href="/register">Register</Link></li>
                  <li><Link href="/login">Log in</Link></li>
                </>)
            }
          </ul>
          </nav>
        </header>
        <main>
        {children}
        </main>
        <footer>
          Test
        </footer>
        <Toaster position="top-right"/>
      </body>
      </Provider>
    </html>
  )
}
