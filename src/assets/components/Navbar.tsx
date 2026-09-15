import { useState } from "react";
import logoText from "../logo-text.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        "Home",
        "Technologies",
        "Projects",
        "About",
        "Contact",
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <nav className="flex h-16 items-center justify-between">

                    {/* Mobile Hamburger */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="mr-3 flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="text-2xl leading-none">
                            {isMenuOpen ? "✕" : "☰"}
                        </span>
                    </button>

                    {/* Brand Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <img
                            src={logoText}
                            alt="Dev Stack"
                            className="h-8 w-auto object-contain"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link, index) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className={`text-sm font-medium transition ${index === 0
                                        ? "text-pink-600"
                                        : "text-slate-600 hover:text-pink-600"
                                    }`}
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-1 sm:gap-2">
                        <button
                            type="button"
                            className="px-2 py-2 text-xs font-medium text-slate-700 transition hover:text-pink-600 sm:px-3 sm:text-sm"
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:scale-105 sm:px-4 sm:text-sm"
                        >
                            Sign Up
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="border-t border-slate-100 py-4 md:hidden">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-pink-600"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;