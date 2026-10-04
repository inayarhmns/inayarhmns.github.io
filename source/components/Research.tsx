import LogoIcon from "./LogoIcon";
import publications from '@/public/json/publications.json'
import React from 'react';

const ME = "Inaya Rahmanisa";

const Research: React.FC = () => {
  return (
    <div className="slide-up">
      <div className="flex flex-row items-center w-full">
        <h1 className="text-primary-black text-3xl sm:text-6xl font-thin py-10">PUBLICATIONS</h1>
      </div>
      <div className="flex flex-col gap-8 pb-10">
        {publications.projects.map((paper, index) => (
          <article
            key={index}
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-6 lg:gap-10 rounded-2xl bg-primary-cream/50 ring-1 ring-primary-black/5 shadow-sm p-4 sm:p-6"
          >
            <a href={paper.link} target="_blank" className="group block rounded-xl bg-white p-3 sm:p-4 overflow-hidden">
              <img
                src={paper.picture}
                alt={paper.name}
                className="w-full h-56 sm:h-72 object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
            <div className="flex flex-col justify-center gap-4 text-primary-black">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest">
                <span className="bg-primary-black text-primary-cream px-2 py-1 rounded-md">
                  {paper.venue.includes(paper.year) ? paper.venue : `${paper.venue} · ${paper.year}`}
                </span>
                {paper.role.map((role) => (
                  <span key={role} className="border border-primary-black/40 px-2 py-1 rounded-md">{role}</span>
                ))}
              </div>
              <h2 className="text-xl sm:text-2xl font-normal leading-snug">
                <a href={paper.link} target="_blank" className="hover:underline underline-offset-4">{paper.name}</a>
              </h2>
              <p className="text-sm font-light">
                {paper.authors.map((author, i) => (
                  <span key={author}>
                    {author === ME ? <span className="font-bold">{author}</span> : author}
                    {i < paper.authors.length - 1 && ", "}
                  </span>
                ))}
              </p>
              <p className="text-sm font-light leading-relaxed">{paper.description}</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={paper.link}
                  target="_blank"
                  className="ttf-cubic text-sm font-bold border-2 border-primary-black rounded-lg py-1 px-3 hover:bg-primary-black hover:text-primary-cream"
                >
                  Read paper ↗
                </a>
                {paper.tech.map((tech) => (
                  <LogoIcon key={tech} logo={tech} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
export default Research;
