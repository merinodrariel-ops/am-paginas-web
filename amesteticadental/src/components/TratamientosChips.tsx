"use client";

type Chip = { id: string; nombre: string };

export default function TratamientosChips({ items }: { items: Chip[] }) {
    const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        const el = document.getElementById(`trat-${id}`);
        if (!(el instanceof HTMLDetailsElement)) return;
        e.preventDefault();
        el.open = true;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="flex gap-2 overflow-x-auto pb-1 mb-10 -mx-1 px-1 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            {items.map((item) => (
                <a
                    key={item.id}
                    href={`#trat-${item.id}`}
                    onClick={handleClick(item.id)}
                    className="flex-shrink-0 whitespace-nowrap rounded-full border border-oro/15 bg-carbon-soft px-4 py-2 text-xs font-manrope text-crema/70 hover:border-oro/40 hover:text-crema transition-colors"
                >
                    {item.nombre}
                </a>
            ))}
        </div>
    );
}
