import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookOpen } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div className="w-8 h-8 bg-gradient-to-r from-lime-200 to-emerald-200 shadow-md border border-lime-100 rounded-lg flex items-center justify-center">
          <BookOpen className="w-4 h-4 text-black" />
        </div>{" "}
        <span className="font-serif text-2xl font-normal">Lexiq</span>
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
