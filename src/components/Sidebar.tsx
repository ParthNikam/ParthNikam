'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "about", href: "/" },
    { name: "work", href: "/work" },
    { name: "reading", href: "/reading" },
    { name: "writing", href: "/writing" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/ParthNikam" },
    { name: "LinkedIn", href: "https://linkedin.com/in/parthnikam108" },
    { name: "X", href: "https://x.com/prthnkm" },
    { name: "Email", href: "mailto:108parthnikam@gmail.com" },
    { name: "Substack", href: "https://substack.com" },
  ];

  return (
    <aside className="w-48 bg-white/50 backdrop-blur-sm p-20">
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-base  transition-all ${
                isActive
                  ? "font-semibold text-foreground"
                  : "font-normal text-foreground/60 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-10">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-foreground/50">Socials</p>
        <div className="flex flex-col gap-2">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-base font-semibold hover:text-foreground transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
