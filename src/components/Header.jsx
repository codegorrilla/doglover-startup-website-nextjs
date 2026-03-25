import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-background/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-black/5 dark:border-white/5">
      <div className="flex items-center gap-3">
        <Image 
          src="/images/logo.png" 
          alt="Dalmatian Logo" 
          width={50} 
          height={50} 
          className="rounded-full border-2 border-primary object-cover overflow-hidden bg-white" 
        />
        <span className="text-xl font-bold tracking-tight text-primary">Pawsitive <span className="text-secondary">Training</span></span>
      </div>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="font-semibold text-lg hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="font-semibold text-lg hover:text-primary transition-colors">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
