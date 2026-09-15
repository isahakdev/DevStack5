import BannerStack from "../banner-stack.png";

function Hero() {
    return (
        <section id="home" className="bg-white">
            <div className="mx-auto flex min-h-[445px] max-w-[980px] items-center px-5 py-12 sm:px-6 lg:px-0">
                <div className="grid w-full items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-6">

                    {/* Left Content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-[36px] font-extrabold leading-[1.1] tracking-[-1.2px] text-slate-900 sm:text-[46px]">
                            Build Your Ideal
                            <br />
                            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-[470px] text-[15px] leading-[1.55] text-slate-500 md:mx-0">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                            <a
                                href="#technologies"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 text-[11px] font-semibold text-white transition hover:opacity-90"
                            >
                                Explore Technologies
                            </a>

                            <a
                                href="#about"
                                className="inline-flex h-9 min-w-[131px] items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-[11px] font-medium text-slate-600 transition hover:border-pink-300 hover:text-pink-600"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Banner Image */}
                    <div className="flex w-full justify-center md:justify-end">
                        <img
                            src={BannerStack}
                            alt="Development Stack"
                            className="h-auto w-full max-w-[400px] object-contain sm:max-w-[450px] md:max-w-[480px] lg:max-w-[520px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;