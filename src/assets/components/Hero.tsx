import BannerStack from "../banner-stack.png";

function Hero() {
    return (
        <section id="home" className="bg-white">
            <div className="mx-auto flex min-h-[445px] max-w-[980px] items-center px-5 py-12 sm:px-6 lg:px-0">
                <div className="grid w-full items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-6">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-[42px] font-extrabold leading-[1.08] tracking-[-1.5px] text-slate-900 sm:text-[46px]">
                            Build Your Ideal
                            <br />
                            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-5 max-w-[470px] text-[15px] leading-[1.55] text-slate-500">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex items-center gap-2">
                            <a
                                href="#technologies"
                                className="inline-flex h-8 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 text-[11px] font-semibold text-white transition hover:opacity-90"
                            >
                                Explore Technologies
                            </a>

                            <a
                                href="#about"
                                className="inline-flex h-8 min-w-[131px] items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-[11px] font-medium text-slate-600 transition hover:border-pink-300 hover:text-pink-600"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Banner Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={BannerStack}
                            alt="Development Stack"
                            className="w-[260px] object-contain sm:w-[285px] md:w-[300px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;