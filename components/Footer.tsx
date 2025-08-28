import { Facebook, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
{ icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576733752711", label: "Facebook" },
{ icon: X, href: "https://x.com/airniza_real", label: "X" },


];

const quickLinks = [
{ name: "Home", href: "/" },
{ name: "About Us", href: "/about-us" },
{ name: "Privacy Policy", href: "/privacy-policy" },
{ name: "Disclaimer", href: "/disclaimer" },
{ name: "Terms & Conditions", href: "/terms-conditions" },
{ name: "License", href: "/license" },
];

export default function Footer() {
return (
<footer className="bg-background border-t border-border/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{/* Brand + intro + social */}
<div>
<div className="mb-3">
  <p className="font-semibold text-foreground mb-4">Airniza</p>
</div>
<p className="text-muted-foreground mb-4">
Airniza provides real-time air quality insights to help you make
healthier lifestyle choices. Our goal is to keep you informed
about pollution levels in your city with reliable and
easy-to-understand data.
</p>
<div className="flex space-x-4">
{socialLinks.map((link) => {
const Icon = link.icon;
return (
<Link
key={link.label}
href={link.href}
target="_blank"
className="text-primary hover:text-foreground transition-colors duration-300"
>
<Icon className="h-5 w-5" />
<span className="sr-only">{link.label}</span>
</Link>
);
})}
</div>
</div>

{/* Quick Links (responsive grid) */}
<div>
<h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
{quickLinks.map((link) => (
<li key={link.name}>
<Link
href={link.href}
className="text-muted-foreground hover:text-foreground transition-colors duration-300"
>
{link.name}
</Link>
</li>
))}
</ul>
</div>

{/* Disclaimer */}
<div>
<h4 className="font-semibold text-foreground mb-4">Disclaimer</h4>
<p className="text-muted-foreground mb-4">
The air quality data on Airniza is provided for informational
purposes only. While we aim for accuracy and real-time updates,
we cannot guarantee the information is error-free. For important
health or safety decisions, please consult official environmental
or government sources.
</p>
</div>
</div>

{/* Bottom bar */}
<div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
<p>©️ {new Date().getFullYear()} Airniza • All rights reserved</p>
</div>
</div>
</footer>
);
}