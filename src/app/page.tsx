import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const socialLinks = [
    {
      href: "https://linkedin.com",
      icon: "/images/linkedin.svg",
      alt: "LinkedIn"
    },
    {
      href: "https://github.com",
      icon: "/images/github.svg",
      alt: "GitHub"
    },
    {
      href: "https://twitter.com",
      icon: "/images/twitter.svg",
      alt: "Twitter"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className='flex flex-col items-start gap-12'>
      <h1 className="text-primary text-[200px] font-bold -tracking-thighter leading-[80%]">
        ANJA<br />ZGODIC
      </h1>
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.href} className="text-primary hover:text-primary-dark transition-colors duration-300">
            <Image
              src={link.icon}
              alt={link.alt}
              width={24}
              height={24}
              className="text-primary"
            />
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}