import heroImage from "../assets/banner-stack.png";
function Hero() {
    return (
        <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Build your Ideal
                        <br/><span className="text-gradient-brand">Devolopment Stack</span>
                    </h1>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                        Explore frontend, backend, database, and tooling options, compare them side by
                        side, and put together the stack that fits your next project.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a
                            href="#technologies" className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03]">
                            Explore Technologies
                        </a>
                        <a
                            href="#about"
                            className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03]"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img
                        src={heroImage}
                        className="w-full max-w-[480px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
