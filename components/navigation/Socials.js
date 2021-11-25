import { socialLinks } from '@/data/navigation';

export default function Socials() {
  return (
    <div className="px-2 flex items-center lg:px-0">
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
