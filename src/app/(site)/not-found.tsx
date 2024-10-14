import Link from 'next/link'

export default function Custom404() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary bg-opacity-5">
      <h1 className="text-primary text-6xl font-bold mb-8">404</h1>
      <p className="text-lg">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="text-primary underline mb-2 block">
        Go back home
      </Link>
    </div>
  )
}