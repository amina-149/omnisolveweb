import React from "react";

interface SolutionCardProps {
  title: string;
  positioning?: string;
  features?: string[];
  roi?: string;
  media?: { type: "video" | "widget"; src?: string; fallback?: string };
  socialProof?: string[];
  cta?: string;
  ctaType?: "modal" | "contact" | "calendar" | "nda";
  ctaLink?: string;
  extra?: React.ReactNode;
  compliance?: { label: string; link: string }[];
  caseStudy?: React.ReactNode;
  demo?: { type: "widget"; fallback?: string };
  metric?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  positioning,
  features,
  roi,
  media,
  socialProof,
  cta,
  ctaType,
  ctaLink,
  extra,
  compliance,
  caseStudy,
  demo,
  metric,
}) => {
  return (
    <section className="w-full max-w-4xl mx-auto bg-bg rounded-3xl shadow-lg p-10 mb-12 flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-primary mb-2 font-poppins">{title}</h2>
      {positioning && <p className="text-lg text-text font-poppins mb-2">{positioning}</p>}
      {features && (
        <ul className="list-disc pl-6 text-text font-poppins mb-2">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      )}
      {roi && <p className="text-lg text-vlightbg font-semibold font-poppins mb-2">{roi}</p>}
      {media && (
        <div className="mb-2">
          {media.type === "video" ? (
            <video src={media.src} controls className="w-full rounded-xl" autoPlay={false}>
              <track kind="captions" srcLang="en" />
            </video>
          ) : media.type === "widget" ? (
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600">{media.fallback}</div>
          ) : null}
        </div>
      )}
      {metric && <p className="text-lg text-vlightbg font-semibold font-poppins mb-2">{metric}</p>}
      {compliance && (
        <div className="flex flex-row gap-4 items-center mb-2">
          {compliance.map((c, i) => <a key={i} href={c.link} className="text-primary underline font-poppins" target="_blank" rel="noopener noreferrer">{c.label}</a>)}
        </div>
      )}
      {caseStudy && <div className="bg-darkbg rounded-xl p-4 text-white font-poppins mb-2">{caseStudy}</div>}
      {socialProof && (
        <div className="flex flex-row gap-4 mb-2">
          {socialProof.map((sp, i) => (
            <div key={i} className="bg-white rounded-xl shadow px-4 py-2 text-text font-poppins text-sm">{sp}</div>
          ))}
        </div>
      )}
      {demo && (
        <div className="mb-2">
          {demo.type === "widget" ? (
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600">{demo.fallback}</div>
          ) : null}
        </div>
      )}
      {extra}
      {cta && (
        <div className="mt-4">
          {ctaType === "modal" ? (
            <button className="px-8 py-4 rounded-full bg-primary text-white font-bold font-poppins text-lg shadow hover:bg-vlightbg transition" onClick={() => window.alert('Demo request modal coming soon!')}>{cta}</button>
          ) : ctaType === "contact" ? (
            <a href={ctaLink} className="px-8 py-4 rounded-full bg-primary text-white font-bold font-poppins text-lg shadow hover:bg-vlightbg transition">{cta}</a>
          ) : ctaType === "calendar" ? (
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-primary text-white font-bold font-poppins text-lg shadow hover:bg-vlightbg transition">{cta}</a>
          ) : (
            <form className="flex flex-row gap-2 items-center">
              <button type="submit" className="px-8 py-4 rounded-full bg-primary text-white font-bold font-poppins text-lg shadow hover:bg-vlightbg transition">{cta}</button>
              {ctaType === "nda" && <label className="flex items-center gap-2 text-sm text-text font-poppins"><input type="checkbox" className="form-checkbox" /> NDA</label>}
            </form>
          )}
        </div>
      )}
    </section>
  );
};

export default SolutionCard;
