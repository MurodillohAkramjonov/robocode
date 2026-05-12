import { Bot, Send, Instagram, Youtube, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { brand, navLinks } from '../data/navigation';
import { contact } from '../data/contact';
import { smoothScrollTo } from '../utils/helpers';

const socials = [
  { id: 'tg', icon: Send, href: contact.telegram, label: 'Telegram' },
  { id: 'ig', icon: Instagram, href: contact.instagram, label: 'Instagram' },
  { id: 'yt', icon: Youtube, href: contact.youtube, label: 'YouTube' },
  { id: 'fb', icon: Facebook, href: contact.facebook, label: 'Facebook' },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple
                              flex items-center justify-center shadow-[0_0_22px_rgba(0,212,255,0.45)]">
                <Bot className="w-5 h-5 text-white" strokeWidth={2.4} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-white">{brand.name}</span>
                <span className="text-xs text-white/50 tracking-wider">{brand.suffix}</span>
              </div>
            </div>
            <p className="text-sm text-white/55 max-w-sm leading-relaxed">
              Bolalar uchun premium robototexnika ta'limi. Arduino, AI va real loyihalar — Andijon shahridagi
              zamonaviy IT akademiya.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-xl flex items-center justify-center
                             bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]
                             hover:border-neon-blue/40 hover:bg-white/[0.08]
                             transition-all duration-300"
                >
                  <s.icon className="w-4 h-4 text-white/70 group-hover:text-neon-blue transition-colors" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-widest text-white/40 mb-4">Bo‘limlar</div>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo(l.href);
                    }}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-widest text-white/40 mb-4">Bog‘lanish</div>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neon-blue mt-0.5" />
                <span className="text-white/75">{contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-neon-blue mt-0.5" />
                <a href={contact.phoneRaw} className="text-white/75 hover:text-white transition">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-neon-blue mt-0.5" />
                <a href={`mailto:${contact.email}`} className="text-white/75 hover:text-white transition">
                  {contact.email}
                </a>
              </li>
              <li className="text-xs text-white/40 pt-1">{contact.workingHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© 2026 Robocode IT Academy. Barcha huquqlar himoyalangan.</div>
          <div className="flex items-center gap-1.5">
            <span>Andijonda</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/60">muhabbat bilan tayyorlandi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
