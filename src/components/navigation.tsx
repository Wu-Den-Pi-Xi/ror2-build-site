import Link from "next/link";

export default function Navigation() {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-display text-lg">
          ROR2 BUILD SITE
        </Link>

        <div className="flex flex-wrap items-center gap-4 font-ui">
          <Link href="/survivors" className="transition-opacity hover:opacity-70">
            Survivors
          </Link>

          <Link href="/items" className="transition-opacity hover:opacity-70">
            Items
          </Link>

          <Link href="/loadingbay" className="transition-opacity hover:opacity-70">
            Loading Bay
          </Link>

          <Link href="/health" className="transition-opacity hover:opacity-70">
            Health
          </Link>
        </div>
      </nav>
    </header>
  );
}