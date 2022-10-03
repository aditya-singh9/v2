import Link from 'next/link'

export default function FourZeroFour() {
  return <>
    <div class="flex bg-black h-screen">
      <div class="container mx-auto flex items-center">
        <div class="w-full flex flex-col items-center space-y-5 transition duration-300">
          <h1 class="font-extrabold text-5xl text-center text-white text-opacity-90">
            404: Page not found
          </h1>
          <Link href="/">
            <a class="font-extrabold text-3xl text-center text-white text-opacity-70 underline hover:text-opacity-90 transition duration-300">
              /home
            </a>
          </Link>
        </div>
      </div>
    </div>
  </>
}
