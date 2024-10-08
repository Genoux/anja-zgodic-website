import Link from 'next/link';

const NavigationBar = () => {
  return (
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
  );
};

export default NavigationBar;