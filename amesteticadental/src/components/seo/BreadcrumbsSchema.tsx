import React from "react";

interface BreadcrumbItem {
    name: string;
    item: string;
}

interface BreadcrumbsSchemaProps {
    items: BreadcrumbItem[];
}

export default function BreadcrumbsSchema({ items }: BreadcrumbsSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item.startsWith("http") ? item.item : `https://www.amesteticadental.com${item.item}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
