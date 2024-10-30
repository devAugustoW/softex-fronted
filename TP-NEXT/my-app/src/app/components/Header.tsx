import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b border-black py-5">
      <nav>
        <ul className="flex justify-center gap-4">
          <li><Link href="/">Página Home</Link></li>
          <li><Link href="/register">Página Register</Link></li>
          <li><Link href="/sign-in">Página SignIn</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
