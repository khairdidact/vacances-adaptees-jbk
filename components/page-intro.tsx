import Link from "next/link";

export function PageIntro({ index, kicker, title, italic, lead, accent = "mint" }: { index: string; kicker: string; title: string; italic?: string; lead: string; accent?: string }) {
  return (
    <section className={`page-intro accent-${accent}`}>
      <div className="page-index" aria-hidden="true">{index}</div>
      <div className="page-intro-copy">
        <p className="eyebrow"><span>{kicker}</span></p>
        <h1>{title}{italic && <><br /><em>{italic}</em></>}</h1>
        <p>{lead}</p>
      </div>
      <div className="page-doodle" aria-hidden="true"><span>✦</span><i /><b>↘</b></div>
    </section>
  );
}

export function NextPage({ href, label, title }: { href: string; label: string; title: string }) {
  return <Link className="next-page" href={href}><span>Étape suivante · {label}</span><strong>{title}</strong><b aria-hidden="true">→</b></Link>;
}

export function Tip({ children, tone = "sun" }: { children: React.ReactNode; tone?: string }) {
  return <aside className={`tip tip-${tone}`}><span aria-hidden="true">✦</span><p>{children}</p></aside>;
}
