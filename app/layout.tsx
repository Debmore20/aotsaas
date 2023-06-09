import './globals.css'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'Unx Titan',
  description: 'Unleash the Titan Within!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Unx Titan</title>
    </head>
    <body className="lg:px-44 bg-slate-50">
      <Navigation/>
      {children}
    </body>
    </html>
  )
}
