"use client";

import { useMemo, useState } from "react";
import { quizQuestions, type QuizQuestion } from "@/data/quiz";

type SessionQuestion = QuizQuestion & { shuffled: string[] };
type Result = { domain: string; ok: boolean };
const shuffle = <T,>(list: T[]) => [...list].sort(() => Math.random() - .5);

export function QuizClient() {
  const domains = useMemo(() => Array.from(new Set(quizQuestions.map(q => q.domain))), []);
  const [length, setLength] = useState(20);
  const [domain, setDomain] = useState("Toutes les thématiques");
  const [session, setSession] = useState<SessionQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [validated, setValidated] = useState(false);
  const [results, setResults] = useState<Result[]>([]);
  const [finished, setFinished] = useState(false);

  function start() {
    const pool = domain === "Toutes les thématiques" ? quizQuestions : quizQuestions.filter(q => q.domain === domain);
    const chosen = shuffle(pool).slice(0, Math.min(length, pool.length)).map(q => ({ ...q, shuffled: shuffle(q.answers) }));
    setSession(chosen); setIndex(0); setSelected(null); setValidated(false); setResults([]); setFinished(false);
  }
  function validate() {
    if (!selected || validated) return;
    const q = session[index];
    setResults([...results, { domain: q.domain, ok: selected === q.correct }]);
    setValidated(true);
  }
  function next() {
    if (index + 1 >= session.length) setFinished(true);
    else { setIndex(index + 1); setSelected(null); setValidated(false); }
  }
  if (!session.length) return (
    <div className="quiz-setup">
      <div className="quiz-bank"><strong>{quizQuestions.length}</strong><span>questions dans la banque</span></div>
      <div className="setup-controls">
        <label>Format<select value={length} onChange={e => setLength(Number(e.target.value))}><option value="20">Échauffement · 20 questions</option><option value="50">Parcours approfondi · 50 questions</option><option value="105">Grand test · 105 questions</option></select></label>
        <label>Thématique<select value={domain} onChange={e => setDomain(e.target.value)}><option>Toutes les thématiques</option>{domains.map(d => <option key={d}>{d}</option>)}</select></label>
        <button className="button button-primary" onClick={start}>Lancer le test <span>→</span></button>
      </div>
      <p className="quiz-note">À chaque lancement, les questions et les quatre réponses sont mélangées. Une correction expliquée apparaît après chaque réponse.</p>
    </div>
  );

  if (finished) {
    const score = results.filter(r => r.ok).length;
    const percent = Math.round(score / results.length * 100);
    const breakdown = Array.from(new Set(results.map(r => r.domain))).map(d => ({ domain: d, total: results.filter(r => r.domain === d).length, ok: results.filter(r => r.domain === d && r.ok).length }));
    return (
      <div className="quiz-results">
        <p className="section-kicker">Résultat du parcours</p>
        <div className="score-ring" style={{ "--score": `${percent * 3.6}deg` } as React.CSSProperties}><div><strong>{percent}%</strong><span>{score} / {results.length}</span></div></div>
        <h2>{percent >= 85 ? "Repères très solides !" : percent >= 65 ? "Une base bien construite." : "Un bon point de départ."}</h2>
        <p>{percent >= 85 ? "Vous reliez cadre, posture et décisions concrètes. Continuez à confronter ces repères au terrain." : percent >= 65 ? "Revenez sur les domaines les moins stables et testez le grand parcours." : "Utilisez les pages du guide pour transformer chaque erreur en repère pratique."}</p>
        <div className="breakdown">{breakdown.map(b => <article key={b.domain}><div><span>{b.domain}</span><strong>{b.ok}/{b.total}</strong></div><i><b style={{ width: `${b.ok / b.total * 100}%` }} /></i></article>)}</div>
        <div className="result-actions"><button className="button button-primary" onClick={start}>Rejouer — nouvel ordre</button><button className="button button-ghost" onClick={() => { setSession([]); setFinished(false); }}>Changer de format</button></div>
      </div>
    );
  }

  const q = session[index];
  const isCorrect = selected === q.correct;
  return (
    <div className="quiz-game">
      <div className="quiz-topline"><span>{q.domain}</span><p>Question <strong>{index + 1}</strong> / {session.length}</p></div>
      <div className="quiz-progress"><i style={{ width: `${(index + 1) / session.length * 100}%` }} /></div>
      <h2>{q.question}</h2>
      <div className="answer-grid">{q.shuffled.map((answer, i) => {
        const state = validated ? answer === q.correct ? "correct" : answer === selected ? "wrong" : "dim" : answer === selected ? "selected" : "";
        return <button key={answer} className={state} onClick={() => !validated && setSelected(answer)}><span>{String.fromCharCode(65 + i)}</span>{answer}<b aria-hidden="true">{state === "correct" ? "✓" : state === "wrong" ? "×" : ""}</b></button>;
      })}</div>
      {!validated ? <button className="button button-primary validate-button" disabled={!selected} onClick={validate}>Valider ma réponse</button> : <div className={`feedback ${isCorrect ? "feedback-good" : "feedback-bad"}`} aria-live="polite"><span>{isCorrect ? "✓" : "↗"}</span><div><h3>{isCorrect ? "Bonne réponse" : "À retenir"}</h3><p>{q.explanation}</p>{!isCorrect && <small>Réponse juste : <strong>{q.correct}</strong></small>}</div><button onClick={next}>{index + 1 === session.length ? "Voir mon bilan" : "Question suivante"} →</button></div>}
    </div>
  );
}
