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
    <div className="h-screen bg-background flex flex-col justify-between">
      <main className="flex px-24 justify-between items-center h-screen w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col items-start justify-center gap-12">
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

        <nav className="flex flex-col space-y-2">
          {['ABOUT', 'RESEARCH', 'EDUCATION', 'EXPERIENCE', 'IN THE MEDIA', 'CONTACT'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, '-')}`}
              className="bg-primary text-white text-sm py-2 px-4 w-full md:w-64 text-left"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            className="border border-primary text-primary py-2 px-4 text-sm w-full md:w-64 text-center font-bold"
          >
            DOWNLOAD RESUME
          </Link>
        </nav>
      </main>
    </div>
  );
}