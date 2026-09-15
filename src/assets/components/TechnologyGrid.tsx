import type { Technology } from "../types/types";
import TechnologyCard from "./TechnologyCard";

type TechnologyGridProps = {
    technologies: Technology[];
    stack: Technology[];
    onAdd: (technology: Technology) => void;
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

function TechnologyGrid({
    technologies,
    stack,
    onAdd,
    onRemove,
    onRemoveAll,
}: TechnologyGridProps) {
    return (
        <section id="technologies" className="bg-white">
            <div className="mx-auto max-w-[980px] px-4 py-10 sm:px-6 sm:py-12 lg:px-0">

                {/* Heading */}
                <div className="mb-6 sm:mb-7">
                    <h2 className="text-[25px] font-extrabold leading-tight tracking-[-0.7px] text-slate-900 sm:text-[28px]">
                        Explore the{" "}
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-[11px] leading-5 text-slate-500 sm:text-[12px]">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid gap-6 lg:grid-cols-[1fr_216px] lg:gap-5">

                    {/* Technology Cards */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                isAdded={stack.some(
                                    (item) => item.id === technology.id
                                )}
                                onAdd={onAdd}
                            />
                        ))}
                    </div>

                    {/* Your Stack */}
                    <aside className="w-full rounded-xl border border-slate-200 bg-white p-4 lg:sticky lg:top-20">

                        <h3 className="text-[13px] font-bold text-slate-800">
                            Your Stack
                        </h3>

                        <p className="mt-1 text-[10px] text-slate-400">
                            {stack.length === 0
                                ? "No technology selected yet."
                                : `${stack.length} Technology${stack.length > 1 ? "ies" : ""
                                } Selected`}
                        </p>

                        {stack.length === 0 ? (
                            <div className="mt-3 flex h-[55px] items-center justify-center rounded-lg border border-dashed border-slate-200 px-2">
                                <p className="text-center text-[10px] text-slate-400">
                                    Your stack is empty.
                                </p>
                            </div>
                        ) : (
                            <div className="mt-3 space-y-2">

                                {stack.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex min-w-0 items-center gap-2 rounded-lg border border-slate-100 px-2 py-2"
                                    >
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="h-6 w-6 object-contain"
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-[9px] font-semibold text-slate-800">
                                                {item.name}
                                            </p>

                                            <p className="truncate text-[7px] text-slate-400">
                                                {item.category}
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => onRemove(item.id)}
                                            className="shrink-0 px-1 text-base leading-none text-slate-400 transition hover:text-red-500"
                                            aria-label={`Remove ${item.name}`}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={onRemoveAll}
                                    className="mt-3 h-8 w-full rounded-md border border-red-200 text-[9px] font-medium text-red-500 transition hover:bg-red-50"
                                >
                                    Remove All
                                </button>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default TechnologyGrid;