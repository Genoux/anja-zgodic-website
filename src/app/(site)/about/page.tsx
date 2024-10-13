export default function About() {
  return (
    <div className="h-full p-12 overflow-auto scrollbar-blue gap-6 flex flex-col items-center md:items-start justify-center">
      <h1 className="text-primary text-6xl font-bold">About Me</h1>
      <p className="text-center md:text-start">
        I am a Research Data Scientist at The Lubrizol Corporation, where I work on interesting
        applications and on developing new methodologies for various types of data. Prior to
        joining Lubrizol in 2023, I was a doctoral student at the University of South Carolina,
        where I got my PhD in Biostatistics. I also hold a certificate in Strategic Innovation from
        the Darla Moore School of Business, a MS from Brown University, and a BA from
        Providence College. Between my undergraduate and graduate studies, I worked in
        industry for four years, as a data scientist in a startup company and in a large
        corporation.
      </p>
      <p className="text-center md:text-start">
        My research at Lubrizol focuses on methods for high-dimensional data,
        multivariate statistics, Bayesian approaches, effective computation, and optimization.
        On this website, you can find my CV, publications, and software. I also enjoy
        volunteering with the American Statistical Association.
      </p>
    </div>
  );
}