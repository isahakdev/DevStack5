import type { Technology } from "../types/types";

type TechnologyCardProps = {
    technology: Technology;
    isAdded: boolean;
    onAdd: (technology: Technology) => void;
};

function TechnologyCard({
    technology,
    isAdded,
    onAdd,
}: TechnologyCardProps) {
    return (
        <article className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md">

            {/* Icon + Badge */}
            <div className="flex items-start justify-between gap-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-9 w-9 object-contain"
                    />
                </div>

                <span className="max-w-[90px] truncate rounded-full bg-sky-50 px-2.5 py-1 text-[9px] font-medium text-sky-500">
                    {technology.badge}
                </span>
            </div>

            {/* Name */}
            <h3 className="mt-4 truncate text-[15px] font-bold text-slate-800">
                {technology.name}
            </h3>

            {/* Description */}
            <p className="mt-2 min-h-0 text-[10px] leading-[1.6] text-slate-500 sm:min-h-[58px]">
                {technology.description}
            </p>

            {/* Info */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-x-2 gap-y-2 border-t border-slate-100 pt-3">
                <span className="rounded-sm bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-500">
                    {technology.category}
                </span>

                <span className="text-[9px] text-slate-500">
                    {technology.difficulty}
                </span>

                <span className="whitespace-nowrap text-[10px] font-medium text-slate-600">
                    <span className="text-amber-400">★</span>{" "}
                    {technology.rating}
                </span>
            </div>

            {/* Button */}
            <button
                type="button"
                disabled={isAdded}
                onClick={() => onAdd(technology)}
                className={`mt-3 h-9 w-full rounded-md text-[10px] font-medium transition ${isAdded
                        ? "cursor-not-allowed bg-slate-200 text-slate-400"
                        : "bg-[#080d1d] text-white hover:bg-slate-800"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </article>
    );
}

export default TechnologyCard;