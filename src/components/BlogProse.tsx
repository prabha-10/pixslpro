import type { ReactNode } from "react";

/**
 * Styles long-form article bodies authored as plain semantic HTML
 * (h2, h3, p, ul, ol, blockquote, a, strong). Keeps post files clean
 * while centralising typography here. Server component — no client JS.
 */
export default function BlogProse({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        max-w-none font-manrope
        [&>h2]:font-playfair [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:tracking-tight [&>h2]:mt-16 [&>h2]:mb-5
        [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-semibold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4
        [&>p]:text-gray-300 [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6
        [&>ul]:mb-6 [&>ul]:pl-1 [&>ul]:space-y-3
        [&>ol]:mb-6 [&>ol]:pl-6 [&>ol]:space-y-3 [&>ol]:list-decimal
        [&>ul>li]:relative [&>ul>li]:pl-6 [&>ul>li]:text-gray-300 [&>ul>li]:text-lg [&>ul>li]:leading-relaxed
        [&>ul>li]:before:content-[''] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-[0.7em] [&>ul>li]:before:w-2 [&>ul>li]:before:h-2 [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-[#E8602A]
        [&>ol>li]:text-gray-300 [&>ol>li]:text-lg [&>ol>li]:leading-relaxed [&>ol>li]:pl-1
        [&_a]:text-[#FF8A5C] [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[#E8602A]/40 hover:[&_a]:text-white hover:[&_a]:decoration-white/60 [&_a]:transition-colors
        [&_strong]:text-white [&_strong]:font-semibold
        [&>blockquote]:my-8 [&>blockquote]:border-l-2 [&>blockquote]:border-[#E8602A] [&>blockquote]:pl-6 [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:text-gray-200
      "
    >
      {children}
    </div>
  );
}
