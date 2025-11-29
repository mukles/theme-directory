"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

export type FilterOption = {
  label: string;
  value: string;
  icon?: React.ReactNode | string;
  count?: number;
};

export type FilterGroup = {
  key: string;
  label: string;
  options: FilterOption[];
};

const themeFiltersRaw = {
  technology: [
    { label: "Astro", value: "astro", count: 411 },
    { label: "Eleventy", value: "eleventy", count: 213 },
    { label: "Framer", value: "framer", count: 1192 },
    { label: "Gatsby", value: "gatsby", count: 535 },
    { label: "Hexo", value: "hexo", count: 258 },
    { label: "Html", value: "html", count: 582 },
    { label: "Hugo", value: "hugo", count: 496 },
    { label: "Jekyll", value: "jekyll", count: 962 },
    { label: "Laravel", value: "laravel", count: 3 },
    { label: "Next.js", value: "nextjs", count: 1483 },
    { label: "NuxtJs", value: "nuxtjs", count: 233 },
    { label: "Vue", value: "vue", count: 6 },
    { label: "Webflow", value: "webflow", count: 1530 },
  ],

  cssFramework: [
    { label: "Bootstrap", value: "bootstrap", count: 545 },
    { label: "Bulma", value: "bulma", count: 49 },
    { label: "SCSS", value: "scss", count: 638 },
    { label: "Tailwind", value: "tailwind", count: 1271 },
  ],

  uiLibrary: [
    { label: "Chakra", value: "chakra", count: 178 },
    { label: "Material", value: "material", count: 45 },
    { label: "Shadcn", value: "shadcn", count: 46 },
  ],

  jamstackCms: [
    { label: "CloudCannon", value: "cloudcannon", count: 8 },
    { label: "Contentful", value: "contentful", count: 56 },
    { label: "Decap", value: "decap", count: 14 },
    { label: "Ghost", value: "ghost", count: 21 },
    { label: "GraphCMS", value: "graphcms", count: 1 },
    { label: "Markdown", value: "markdown", count: 954 },
    { label: "Sanity", value: "sanity", count: 38 },
    { label: "Sitepins", value: "sitepins", count: 45 },
    { label: "Spinal", value: "spinal", count: 1 },
    { label: "StaticCMS", value: "staticcms", count: 2 },
    { label: "Tina", value: "tina", count: 13 },
  ],

  price: [
    { label: "Open Source", value: "open-source", count: 4627 },
    { label: "Free", value: "free", count: 490 },
    { label: "Premium", value: "premium", count: 2785 },
  ],
};

const formatGroupLabel = (key: string) => key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

function mapToFilterGroups(raw: Record<string, any[]>): FilterGroup[] {
  return Object.entries(raw).map(([key, options]) => ({
    key,
    label: formatGroupLabel(key),
    options: options.map((o) => ({
      label: o.label,
      value: o.value,
      icon: o.icon,
      count: typeof o.count === "number" ? o.count : undefined,
    })),
  }));
}

export function ThemeFilter() {
  const groups = React.useMemo(() => mapToFilterGroups(themeFiltersRaw), []);

  const [selected, setSelected] = React.useState<Record<string, Set<string>>>({});

  function toggleOption(groupKey: string, value: string) {
    setSelected((prev) => {
      const next = { ...prev };
      const set = new Set(next[groupKey] ?? []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      next[groupKey] = set;
      return next;
    });
  }

  return (
    <Accordion type="multiple" className="space-y-2">
      {groups.map((group) => (
        <AccordionItem key={group.key} value={group.key} className="border-divider px-3.5">
          <AccordionTrigger className="cursor-pointer text-sm font-medium hover:no-underline">{group.label}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 pl-2">
              {group.options.map((opt) => {
                const isChecked = selected[group.key]?.has(opt.value) ?? false;
                return (
                  <Button key={opt.value} type="button" variant={"ghost"} onClick={() => toggleOption(group.key, opt.value)} className="justify-between">
                    <div className="flex items-center gap-2">
                      {opt.icon ? <span className="flex h-5 w-5 items-center justify-center">{typeof opt.icon === "string" ? <span className="text-xs">{opt.icon}</span> : opt.icon}</span> : null}

                      <span className="text-sm">{opt.label}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant="default">{opt.count ?? 0}</Badge>

                      <Checkbox checked={isChecked} onCheckedChange={() => toggleOption(group.key, opt.value)} aria-label={`${opt.label} checkbox`} className="pointer-events-none" />
                    </div>
                  </Button>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
