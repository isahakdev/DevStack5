import logoText from "../logo-text.png";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-[1320px] px-6 py-10 sm:px-8 lg:px-0 lg:py-12">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">

                    {/* Brand */}
                    <div className="text-center lg:col-span-2 lg:text-left">
                        <a
                            href="#home"
                            className="flex items-center justify-center lg:justify-start"
                        >
                            <img
                                src={logoText}
                                alt="Dev Stack"
                                className="h-8 w-auto object-contain"
                            />
                        </a>

                        <p className="mx-auto mt-4 max-w-[360px] text-[14px] leading-6 text-[#718096] lg:mx-0">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="mt-5 flex items-center justify-center gap-5 lg:justify-start">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[13px] font-medium text-[#263238] transition hover:text-[#e6007e]"
                            >
                                GitHub
                            </a>

                            <span className="text-gray-400">•</span>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[13px] font-medium text-[#263238] transition hover:text-[#e6007e]"
                            >
                                Twitter
                            </a>

                            <span className="text-gray-400">•</span>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[13px] font-medium text-[#263238] transition hover:text-[#e6007e]"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="hidden lg:block">
                        <h3 className="text-[12px] font-bold uppercase tracking-wide text-[#111827]">
                            Product
                        </h3>

                        <ul className="mt-4 space-y-2.5">
                            <li>
                                <a
                                    href="#home"
                                    className="text-[12px] text-[#718096] hover:text-[#111827]"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="text-[12px] text-[#718096] hover:text-[#111827]"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="text-[12px] text-[#718096] hover:text-[#111827]"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="hidden lg:block">
                        <h3 className="text-[12px] font-bold uppercase tracking-wide text-[#111827]">
                            Company
                        </h3>

                        <ul className="mt-4 space-y-2.5">
                            <li>
                                <a
                                    href="#about"
                                    className="text-[12px] text-[#718096] hover:text-[#111827]"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="text-[12px] text-[#718096] hover:text-[#111827]"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#home"
                                    className="text-[12px] text-[#718096] hover:text-[#111827]"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="hidden lg:block">
                        <h3 className="text-[12px] font-bold uppercase tracking-wide text-[#111827]">
                            Legal
                        </h3>

                        <ul className="mt-4 space-y-2.5">
                            <li>
                                <a
                                    href="#privacy"
                                    className="text-[12px] text-[#718096] hover:text-[#111827]"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#terms"
                                    className="text-[12px] text-[#718096] hover:text-[#111827]"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-gray-100 pt-5 lg:mt-12 lg:pt-7">
                    <div className="flex items-center justify-between">
                        <p className="text-[11px] text-[#a0aec0] sm:text-[12px]">
                            © 2026 Dev Stack. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4 sm:gap-6">
                            <a
                                href="#privacy"
                                className="text-[11px] text-[#a0aec0] hover:text-[#111827] sm:text-[12px]"
                            >
                                Privacy
                            </a>

                            <a
                                href="#terms"
                                className="text-[11px] text-[#a0aec0] hover:text-[#111827] sm:text-[12px]"
                            >
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;