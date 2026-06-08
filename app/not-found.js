import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="text-8xl mb-6">🍕</div>
      <h1 className="font-serif font-extrabold text-4xl text-gbblack mb-3">
        Page Not Found
      </h1>
      <p className="font-dm text-gray-500 mb-8 max-w-sm">
      Looks like this page went missing &mdash; like the last slice of pizza. Let&apos;s get you back.
      </p>
      <Link
        href="/"
        className="bg-gbgreen hover:bg-green-600 text-white font-serif font-bold px-8 py-4 rounded-full transition-all"
      >
        Back to Home
      </Link>
    </div>
  )
}
