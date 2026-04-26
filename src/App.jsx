import { useState } from "react";

const C = {
  tc: "#C1693C", tcL: "#E8896A", tcD: "#9B4E2A",
  beige: "#F5EDE3", beigeD: "#EAD9C8", beigeDD: "#D9C4AE",
  or: "#C9A84C", orL: "#F0DFA0",
  blanc: "#FDFAF7", text: "#2C1A0E", textL: "#7A5C46",
  ok: "#6B8F5E", okL: "#E8F0E5",
  admin: "#1C1C2E", adminL: "#2E2E45", adminAcc: "#C9A84C",
};

const TAG = ({ children, color = "beige" }) => {
  const bg = color === "or" ? C.orL : color === "ok" ? C.okL : color === "tc" ? C.tcL : C.beigeD;
  const cl = color === "or" ? C.tcD : color === "ok" ? C.ok : color === "tc" ? "#fff" : C.textL;
  return <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: "bold", background: bg, color: cl }}>{children}</span>;
};

const BTN = ({ children, onClick, variant = "tc", style = {} }) => {
  const bg = variant === "or" ? C.or : variant === "ghost" ? "transparent" : variant === "dark" ? C.adminL : C.tc;
  const cl = variant === "ghost" ? C.tc : "#fff";
  return <button onClick={onClick} style={{ padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: "bold", cursor: "pointer", border: variant === "ghost" ? `1.5px solid ${C.tc}` : "none", background: bg, color: cl, ...style }}>{children}</button>;
};

const INPUT = ({ value, onChange, placeholder, onKeyDown, multiline }) => {
  const s = { width: "100%", padding: "9px 13px", borderRadius: 8, border: `1.5px solid ${C.beigeD}`, fontSize: 13, background: C.beige, color: C.text, outline: "none", boxSizing: "border-box", fontFamily: "Georgia, serif" };
  return multiline
    ? <textarea value={value} onChange={onChange} placeholder={placeholder} style={{ ...s, minHeight: 75, resize: "vertical" }} />
    : <input value={value} onChange={onChange} placeholder={placeholder} onKeyDown={onKeyDown} style={s} />;
};

const CARD = ({ children, style = {} }) => (
  <div style={{ background: C.blanc, borderRadius: 14, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(193,105,60,0.07)", border: `1px solid ${C.beigeD}`, ...style }}>{children}</div>
);

const SEC = ({ icon, title }) => (
  <div style={{ fontSize: 15, fontWeight: "bold", color: C.tcD, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>{icon} {title}</div>
);

const PROG = ({ pct }) => (
  <div style={{ height: 7, borderRadius: 4, background: C.beigeD, overflow: "hidden" }}>
    <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg,${C.tc},${C.or})`, borderRadius: 4, transition: "width 0.6s" }} />
  </div>
);

const initClientes = [
  {
    id: 1, prenom: "Salma", business: "Équilibre Pédagogique", etape: 3,
    taches: [
      { id: 1, texte: "Finaliser la page de vente", priorite: "haute", statut: "en cours" },
      { id: 2, texte: "Contacter 5 prospects", priorite: "haute", statut: "à faire" },
      { id: 3, texte: "Ouvrir compte bancaire pro", priorite: "moyenne", statut: "validé" },
    ],
    victoires: [
      { id: 1, texte: "Première cliente payante !", date: "18 avr 2026", emoji: "🌟" },
      { id: 2, texte: "A osé augmenter ses tarifs", date: "10 avr 2026", emoji: "💪" },
    ],
    seances: [
      { id: 1, date: "22 avr 2026", theme: "Clarification de l'offre", notes: "Redéfinir le périmètre. Travailler la promesse client.", actions: "Rédiger 3 versions de la promesse avant le 28/04" },
    ],
    messages: [
      { id: 1, auteur: "Mentor", texte: "Bravo pour cette semaine. Comment avances-tu sur la page de vente ?", heure: "09:14" },
      { id: 2, auteur: "Cliente", texte: "Je progresse ! J'hésite encore sur l'accroche.", heure: "11:32" },
    ],
    agenda: [
      { id: 1, date: "30 avr 2026", heure: "10h00", titre: "Modèle économique & pricing", type: "Séance" },
    ],
    bilan: { q1: "", q2: "", q3: "" },
  },
  {
    id: 2, prenom: "Imane", business: "Atelier Créatif Imane", etape: 1,
    taches: [
      { id: 1, texte: "Définir sa cible idéale", priorite: "haute", statut: "en cours" },
    ],
    victoires: [
      { id: 1, texte: "A quitté son emploi pour se lancer !", date: "5 avr 2026", emoji: "✨" },
    ],
    seances: [],
    messages: [
      { id: 1, auteur: "Mentor", texte: "Bienvenue dans Le Laboratoire ! On commence par poser les bases.", heure: "08:00" },
    ],
    agenda: [],
    bilan: { q1: "", q2: "", q3: "" },
  },
  {
    id: 3, prenom: "Hikmate", business: "Équilibre Pédagogique", etape: 1,
    taches: [
      { id: 1, texte: "Mission 01 — Interviewer 5 à 8 personnes (client idéal)", priorite: "haute", statut: "à faire" },
      { id: 2, texte: "Mission 02 — Écrire 5 versions de la phrase d'ascenseur", priorite: "haute", statut: "à faire" },
      { id: 3, texte: "Mission 03 — Auditer 3 à 5 acteurs similaires (offre, prix, positionnement)", priorite: "moyenne", statut: "à faire" },
      { id: 4, texte: "Mission 04 — Rédiger la lettre à la cliente idéale", priorite: "moyenne", statut: "à faire" },
      { id: 5, texte: "Mission 05 — Répondre : quelle est ta vision personnelle du succès ?", priorite: "moyenne", statut: "à faire" },
    ],
    victoires: [],
    seances: [
      { id: 1, date: "26 avr 2026", theme: "Séance 1 — Clarté & Vision", notes: "Première séance. Exploration du projet, des forces et de la vision.", actions: "Définir sa cible idéale et sa promesse de valeur avant la prochaine séance." },
    ],
    messages: [
      { id: 1, auteur: "Mentor", texte: "Bienvenue dans Le Laboratoire, Hikmate ! Contente de t'accompagner dans cette aventure.", heure: "08:00" },
    ],
    agenda: [
      { id: 1, date: "29 avr 2026", heure: "12h30", titre: "Séance 2 — Offre & Positionnement", type: "Séance" },
    ],
    bilan: { q1: "", q2: "", q3: "" },
  },
  {
    id: 4, prenom: "Samya", business: "Équilibre Pédagogique", etape: 1,
    taches: [
      { id: 1, texte: "Mission 01 — Interviewer 5 à 8 personnes (client idéal)", priorite: "haute", statut: "à faire" },
      { id: 2, texte: "Mission 02 — Écrire 5 versions de la phrase d'ascenseur", priorite: "haute", statut: "à faire" },
      { id: 3, texte: "Mission 03 — Auditer 3 à 5 acteurs similaires (offre, prix, positionnement)", priorite: "moyenne", statut: "à faire" },
      { id: 4, texte: "Mission 04 — Rédiger la lettre à la cliente idéale", priorite: "moyenne", statut: "à faire" },
      { id: 5, texte: "Mission 05 — Répondre : quelle est ta vision personnelle du succès ?", priorite: "moyenne", statut: "à faire" },
    ],
    victoires: [],
    seances: [
      { id: 1, date: "26 avr 2026", theme: "Séance 1 — Clarté & Vision", notes: "Première séance. Exploration du projet, des forces et de la vision.", actions: "Définir sa cible idéale et sa promesse de valeur avant la prochaine séance." },
    ],
    messages: [
      { id: 1, auteur: "Mentor", texte: "Bienvenue dans Le Laboratoire, Samya ! Contente de t'accompagner dans cette aventure.", heure: "08:00" },
    ],
    agenda: [
      { id: 1, date: "29 avr 2026", heure: "12h30", titre: "Séance 2 — Offre & Positionnement", type: "Séance" },
    ],
    bilan: { q1: "", q2: "", q3: "" },
  },
];

const ETAPES_LABELS = ["Clarté & Vision", "Offre & Positionnement", "Modèle économique", "Lancement", "Structuration", "Croissance"];

const initRessources = [
  { id: 1, titre: "Les 5 erreurs de positionnement", theme: "Positionnement", type: "Fiche PDF" },
  { id: 2, titre: "Fixer ses prix sans se brader", theme: "Finances", type: "Article" },
  { id: 3, titre: "Trouver sa cible en 3 étapes", theme: "Offre", type: "Exercice" },
  { id: 4, titre: "Dépasser le syndrome de l'imposteur", theme: "Mindset", type: "Masterclass" },
];

const CLIENT_TABS = [
  { id: "parcours", label: "🗺 Parcours" },
  { id: "taches", label: "✅ Tâches" },
  { id: "victoires", label: "🏆 Victoires" },
  { id: "bilan", label: "🌙 Bilan" },
  { id: "seances", label: "🎙 Séances" },
  { id: "agenda", label: "📅 Agenda" },
  { id: "messagerie", label: "💬 Messagerie" },
  { id: "bibliotheque", label: "📚 Bibliothèque" },
];

export default function App() {
  const [mode, setMode] = useState("client");
  const [clientes, setClientes] = useState(initClientes);
  const [ressources, setRessources] = useState(initRessources);
  const [selectedClienteId, setSelectedClienteId] = useState(1);
  const [clienteTab, setClienteTab] = useState("parcours");
  const [adminTab, setAdminTab] = useState("vue");
  const [newTache, setNewTache] = useState("");
  const [newMsg, setNewMsg] = useState("");
  const [newVictoire, setNewVictoire] = useState("");
  const [newRes, setNewRes] = useState({ titre: "", theme: "", type: "Article" });
  const [newSeance, setNewSeance] = useState({ date: "", theme: "", notes: "", actions: "" });
  const [adminMsg, setAdminMsg] = useState({ clienteId: 1, texte: "" });
  const [newCliente, setNewCliente] = useState({ prenom: "", business: "" });

  const cliente = clientes.find(c => c.id === selectedClienteId);
  const updC = (id, fn) => setClientes(cs => cs.map(c => c.id === id ? fn(c) : c));

  const toggleTache = (tid) => updC(selectedClienteId, c => ({
    ...c,
    taches: c.taches.map(t => t.id === tid
      ? { ...t, statut: t.statut === "validé" ? "à faire" : t.statut === "à faire" ? "en cours" : "validé" }
      : t)
  }));

  const addTacheCliente = () => {
    if (!newTache.trim()) return;
    updC(selectedClienteId, c => ({ ...c, taches: [...c.taches, { id: Date.now(), texte: newTache, priorite: "moyenne", statut: "à faire" }] }));
    setNewTache("");
  };

  const addVictoireCliente = () => {
    if (!newVictoire.trim()) return;
    updC(selectedClienteId, c => ({ ...c, victoires: [...c.victoires, { id: Date.now(), texte: newVictoire, date: new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }), emoji: "⭐" }] }));
    setNewVictoire("");
  };

  const sendMsgCliente = () => {
    if (!newMsg.trim()) return;
    updC(selectedClienteId, c => ({ ...c, messages: [...c.messages, { id: Date.now(), auteur: "Cliente", texte: newMsg, heure: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) }] }));
    setNewMsg("");
  };

  const pct = Math.round((cliente.etape / ETAPES_LABELS.length) * 100);

  return (
    <div style={{ fontFamily: "Georgia, serif", minHeight: "100vh", background: mode === "admin" ? C.admin : C.beige }}>
      {/* HEADER */}
      <div style={{ background: mode === "admin" ? C.adminL : `linear-gradient(135deg,${C.tcD},${C.tc} 60%,${C.or})`, padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ color: "#fff", fontSize: 20, fontWeight: "bold", letterSpacing: 1 }}>✦ Le Laboratoire</div>
          <div style={{ color: C.orL, fontSize: 11, marginTop: 2 }}>{mode === "admin" ? "Panneau Mentor — Nadia" : `Espace de ${cliente.prenom} · ${cliente.business}`}</div>
        </div>
        <button onClick={() => setMode(m => m === "admin" ? "client" : "admin")} style={{ padding: "7px 16px", borderRadius: 20, border: `1.5px solid ${C.or}`, background: "transparent", color: C.or, fontSize: 12, fontWeight: "bold", cursor: "pointer" }}>
          {mode === "admin" ? "👤 Vue Cliente" : "⚙️ Admin"}
        </button>
      </div>

      {/* MODE CLIENT */}
      {mode === "client" && (
        <>
          <div style={{ background: C.blanc, borderBottom: `1px solid ${C.beigeD}`, padding: "10px 20px", display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: C.textL }}>Cliente :</span>
            {clientes.map(c => (
              <button key={c.id} onClick={() => setSelectedClienteId(c.id)} style={{ padding: "5px 14px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: selectedClienteId === c.id ? "bold" : "normal", background: selectedClienteId === c.id ? C.tc : C.beigeD, color: selectedClienteId === c.id ? "#fff" : C.textL }}>
                {c.prenom}
              </button>
            ))}
          </div>

          <div style={{ background: C.blanc, borderBottom: `2px solid ${C.beigeD}`, display: "flex", overflowX: "auto" }}>
            {CLIENT_TABS.map(t => (
              <button key={t.id} onClick={() => setClienteTab(t.id)} style={{ padding: "11px 15px", fontSize: 12, fontWeight: clienteTab === t.id ? "bold" : "normal", color: clienteTab === t.id ? C.tc : C.textL, borderBottom: clienteTab === t.id ? `3px solid ${C.tc}` : "3px solid transparent", background: "none", border: "none", borderBottom: clienteTab === t.id ? `3px solid ${C.tc}` : "3px solid transparent", cursor: "pointer", whiteSpace: "nowrap" }}>
                {t.label}
              </button>
            ))}
          </div>

          <div style={{ padding: "20px 18px", maxWidth: 860, margin: "0 auto" }}>
            {/* PARCOURS */}
            {clienteTab === "parcours" && (
              <CARD>
                <SEC icon="🗺" title="Mon Parcours" />
                <div style={{ fontSize: 13, color: C.textL, marginBottom: 6 }}>Étape {cliente.etape} sur {ETAPES_LABELS.length} · {pct}% accompli</div>
                <PROG pct={pct} />
                <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                  {ETAPES_LABELS.map((label, i) => {
                    const done = i < cliente.etape;
                    const current = i === cliente.etape - 1;
                    return (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 10, background: done ? C.okL : current ? C.beigeD : "#f9f4ef", border: `1.5px solid ${done ? C.ok : current ? C.or : "transparent"}` }}>
                        <div style={{ width: 28, height: 28, borderRadius: "50%", flexShrink: 0, background: done ? C.ok : current ? C.or : C.beigeDD, display: "flex", alignItems: "center", justifyContent: "center", color: done || current ? "#fff" : C.textL, fontWeight: "bold", fontSize: 12 }}>
                          {done ? "✓" : i + 1}
                        </div>
                        <div style={{ flex: 1, fontSize: 13, fontWeight: done || current ? "bold" : "normal", color: done ? C.ok : C.text }}>{label}</div>
                        {current && <TAG color="or">En cours</TAG>}
                      </div>
                    );
                  })}
                </div>
              </CARD>
            )}

            {/* TACHES */}
            {clienteTab === "taches" && (
              <CARD>
                <SEC icon="✅" title="Mes Tâches" />
                <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
                  <INPUT value={newTache} onChange={e => setNewTache(e.target.value)} onKeyDown={e => e.key === "Enter" && addTacheCliente()} placeholder="Ajouter une tâche…" />
                  <BTN onClick={addTacheCliente}>+</BTN>
                </div>
                {cliente.taches.map(t => (
                  <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, marginBottom: 8, background: t.statut === "validé" ? C.okL : C.beige, border: `1px solid ${t.statut === "validé" ? C.ok : C.beigeD}`, opacity: t.statut === "validé" ? 0.8 : 1 }}>
                    <button onClick={() => toggleTache(t.id)} style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${t.statut === "validé" ? C.ok : t.statut === "en cours" ? C.or : C.beigeDD}`, background: t.statut === "validé" ? C.ok : "transparent", cursor: "pointer", flexShrink: 0, color: "#fff", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {t.statut === "validé" ? "✓" : t.statut === "en cours" ? "→" : ""}
                    </button>
                    <span style={{ flex: 1, fontSize: 13, textDecoration: t.statut === "validé" ? "line-through" : "none", color: t.statut === "validé" ? C.textL : C.text }}>{t.texte}</span>
                    <TAG color={t.priorite === "haute" ? "or" : "beige"}>{t.priorite}</TAG>
                    <span style={{ fontSize: 11, color: C.textL }}>{t.statut}</span>
                  </div>
                ))}
              </CARD>
            )}

            {/* VICTOIRES */}
            {clienteTab === "victoires" && (
              <CARD>
                <SEC icon="🏆" title="Mes Victoires" />
                <p style={{ fontSize: 13, color: C.textL, marginBottom: 14 }}>Chaque avancée compte. Consigne tes victoires pour voir ton chemin parcouru.</p>
                <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
                  <INPUT value={newVictoire} onChange={e => setNewVictoire(e.target.value)} onKeyDown={e => e.key === "Enter" && addVictoireCliente()} placeholder="J'ai accompli…" />
                  <BTN variant="or" onClick={addVictoireCliente}>✦</BTN>
                </div>
                {[...cliente.victoires].reverse().map(v => (
                  <div key={v.id} style={{ padding: 14, borderRadius: 12, background: `linear-gradient(135deg,${C.beige},${C.beigeD})`, border: `1.5px solid ${C.or}`, display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 24 }}>{v.emoji}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: "bold" }}>{v.texte}</div>
                      <div style={{ fontSize: 11, color: C.textL, marginTop: 3 }}>{v.date}</div>
                    </div>
                  </div>
                ))}
              </CARD>
            )}

            {/* BILAN */}
            {clienteTab === "bilan" && (
              <CARD>
                <SEC icon="🌙" title="Mon Bilan mensuel" />
                <p style={{ fontSize: 13, color: C.textL, marginBottom: 16 }}>Un temps de muhasaba — regarder honnêtement ce qui a été accompli, ce qui reste, et avancer avec clarté.</p>
                {[
                  { key: "q1", label: "Ce que j'ai accompli ce mois-ci dont je suis fière" },
                  { key: "q2", label: "Ce qui m'a freinée (peurs, doutes, dispersion…)" },
                  { key: "q3", label: "Mon intention principale pour le mois prochain" },
                ].map(q => (
                  <div key={q.key} style={{ marginBottom: 14 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: "bold", color: C.tcD, marginBottom: 6 }}>{q.label}</label>
                    <INPUT multiline value={cliente.bilan[q.key]} onChange={e => updC(selectedClienteId, c => ({ ...c, bilan: { ...c.bilan, [q.key]: e.target.value } }))} placeholder="Écris librement…" />
                  </div>
                ))}
                <BTN variant="or">💾 Enregistrer</BTN>
              </CARD>
            )}

            {/* SEANCES */}
            {clienteTab === "seances" && (
              <CARD>
                <SEC icon="🎙" title="Historique de mes séances" />
                {cliente.seances.length === 0 && <p style={{ fontSize: 13, color: C.textL }}>Aucune séance enregistrée pour l'instant.</p>}
                {cliente.seances.map(s => (
                  <div key={s.id} style={{ padding: 14, borderRadius: 12, background: C.beige, border: `1px solid ${C.beigeD}`, marginBottom: 12 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                      <TAG color="or">{s.date}</TAG>
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>{s.theme}</span>
                    </div>
                    <div style={{ fontSize: 13, color: C.textL, marginBottom: 8 }}><b style={{ color: C.text }}>Notes :</b> {s.notes}</div>
                    <div style={{ fontSize: 13, padding: "9px 12px", borderRadius: 8, background: C.okL, color: C.ok }}><b>→ Actions :</b> {s.actions}</div>
                  </div>
                ))}
              </CARD>
            )}

            {/* AGENDA */}
            {clienteTab === "agenda" && (
              <CARD>
                <SEC icon="📅" title="Mon Agenda" />
                {cliente.agenda.length === 0 && <p style={{ fontSize: 13, color: C.textL }}>Aucun événement planifié.</p>}
                {cliente.agenda.map(a => (
                  <div key={a.id} style={{ display: "flex", gap: 12, padding: 14, borderRadius: 12, background: C.beige, border: `1.5px solid ${a.type === "Séance" ? C.or : C.beigeD}`, marginBottom: 10, alignItems: "center" }}>
                    <div style={{ background: a.type === "Séance" ? C.or : C.tc, color: "#fff", borderRadius: 10, padding: "8px 12px", textAlign: "center", minWidth: 52, flexShrink: 0 }}>
                      <div style={{ fontSize: 16, fontWeight: "bold" }}>{a.date.split(" ")[0]}</div>
                      <div style={{ fontSize: 10 }}>{a.date.split(" ").slice(1).join(" ")}</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: "bold", fontSize: 13 }}>{a.titre}</div>
                      <div style={{ fontSize: 12, color: C.textL }}>{a.type} · {a.heure}</div>
                    </div>
                  </div>
                ))}
              </CARD>
            )}

            {/* MESSAGERIE */}
            {clienteTab === "messagerie" && (
              <CARD style={{ display: "flex", flexDirection: "column", height: 440 }}>
                <SEC icon="💬" title="Messagerie" />
                <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                  {cliente.messages.map(m => (
                    <div key={m.id} style={{ display: "flex", flexDirection: "column", alignItems: m.auteur === "Cliente" ? "flex-end" : "flex-start" }}>
                      <div style={{ maxWidth: "78%", padding: "9px 13px", borderRadius: m.auteur === "Cliente" ? "14px 14px 4px 14px" : "14px 14px 14px 4px", background: m.auteur === "Cliente" ? C.tc : C.beigeD, color: m.auteur === "Cliente" ? "#fff" : C.text, fontSize: 13 }}>{m.texte}</div>
                      <div style={{ fontSize: 10, color: C.textL, marginTop: 2 }}>{m.auteur === "Cliente" ? "Vous" : "Nadia"} · {m.heure}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <INPUT value={newMsg} onChange={e => setNewMsg(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMsgCliente()} placeholder="Ton message…" />
                  <BTN onClick={sendMsgCliente}>Envoyer</BTN>
                </div>
              </CARD>
            )}

            {/* BIBLIOTHEQUE */}
            {clienteTab === "bibliotheque" && (
              <CARD>
                <SEC icon="📚" title="Ma Bibliothèque" />
                {ressources.map(r => (
                  <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, background: C.beige, border: `1px solid ${C.beigeD}`, marginBottom: 8 }}>
                    <div style={{ fontSize: 18 }}>{r.type === "Fiche PDF" ? "📄" : r.type === "Article" ? "📝" : r.type === "Exercice" ? "✏️" : r.type === "Masterclass" ? "🎬" : "📋"}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: "bold" }}>{r.titre}</div>
                      <div style={{ fontSize: 11, color: C.textL }}>{r.theme} · {r.type}</div>
                    </div>
                    <button style={{ padding: "5px 12px", borderRadius: 8, border: "none", background: C.beigeD, color: C.tc, fontSize: 12, cursor: "pointer", fontWeight: "bold" }}>→</button>
                  </div>
                ))}
              </CARD>
            )}
          </div>
        </>
      )}

      {/* MODE ADMIN */}
      {mode === "admin" && (
        <>
          <div style={{ background: C.adminL, borderBottom: `1px solid #3a3a55`, display: "flex", overflowX: "auto" }}>
            {[
              { id: "vue", label: "👥 Mes Clientes" },
              { id: "taches", label: "✅ Tâches" },
              { id: "seances", label: "🎙 Séances" },
              { id: "messages", label: "💬 Messages" },
              { id: "ressources", label: "📚 Ressources" },
            ].map(t => (
              <button key={t.id} onClick={() => setAdminTab(t.id)} style={{ padding: "12px 18px", fontSize: 12, fontWeight: adminTab === t.id ? "bold" : "normal", color: adminTab === t.id ? C.or : "#aaa", background: "none", border: "none", borderBottom: adminTab === t.id ? `3px solid ${C.or}` : "3px solid transparent", cursor: "pointer", whiteSpace: "nowrap" }}>
                {t.label}
              </button>
            ))}
          </div>

          <div style={{ padding: "20px 18px", maxWidth: 900, margin: "0 auto" }}>

            {/* VUE CLIENTES */}
            {adminTab === "vue" && (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
                  {clientes.map(c => {
                    const p = Math.round((c.etape / ETAPES_LABELS.length) * 100);
                    const enCours = c.taches.filter(t => t.statut !== "validé").length;
                    return (
                      <div key={c.id} style={{ background: C.adminL, borderRadius: 14, padding: 18, border: `1px solid #3a3a55`, cursor: "pointer" }} onClick={() => { setSelectedClienteId(c.id); setMode("client"); setClienteTab("parcours"); }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                          <div>
                            <div style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>{c.prenom}</div>
                            <div style={{ color: "#aaa", fontSize: 12 }}>{c.business}</div>
                          </div>
                          <TAG color="or">{p}%</TAG>
                        </div>
                        <PROG pct={p} />
                        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                          <span style={{ fontSize: 12, color: "#aaa" }}>Étape {c.etape}/6</span>
                          <span style={{ fontSize: 12, color: C.or }}>· {enCours} tâche{enCours > 1 ? "s" : ""} active{enCours > 1 ? "s" : ""}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ background: C.adminL, borderRadius: 14, padding: 18, border: `1px dashed #3a3a55` }}>
                  <div style={{ color: C.or, fontWeight: "bold", fontSize: 14, marginBottom: 12 }}>+ Nouvelle cliente</div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <input value={newCliente.prenom} onChange={e => setNewCliente(n => ({ ...n, prenom: e.target.value }))} placeholder="Prénom" style={{ flex: 1, minWidth: 120, padding: "9px 13px", borderRadius: 8, border: `1.5px solid #3a3a55`, fontSize: 13, background: C.admin, color: "#fff", outline: "none" }} />
                    <input value={newCliente.business} onChange={e => setNewCliente(n => ({ ...n, business: e.target.value }))} placeholder="Nom du business" style={{ flex: 2, minWidth: 160, padding: "9px 13px", borderRadius: 8, border: `1.5px solid #3a3a55`, fontSize: 13, background: C.admin, color: "#fff", outline: "none" }} />
                    <button onClick={() => {
                      if (!newCliente.prenom.trim()) return;
                      setClientes(cs => [...cs, { id: Date.now(), prenom: newCliente.prenom, business: newCliente.business || "—", etape: 1, taches: [], victoires: [], seances: [], messages: [], agenda: [], bilan: { q1: "", q2: "", q3: "" } }]);
                      setNewCliente({ prenom: "", business: "" });
                    }} style={{ padding: "9px 18px", borderRadius: 8, border: "none", background: C.or, color: C.text, fontWeight: "bold", fontSize: 13, cursor: "pointer" }}>Créer</button>
                  </div>
                </div>
              </>
            )}

            {/* ADMIN TACHES */}
            {adminTab === "taches" && (
              <div>
                {clientes.map(c => (
                  <div key={c.id} style={{ background: C.adminL, borderRadius: 14, padding: 18, marginBottom: 16, border: `1px solid #3a3a55` }}>
                    <div style={{ color: "#fff", fontWeight: "bold", fontSize: 14, marginBottom: 12 }}>{c.prenom} — {c.business}</div>
                    {c.taches.map(t => (
                      <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 8, marginBottom: 6, background: C.admin }}>
                        <span style={{ flex: 1, fontSize: 13, color: t.statut === "validé" ? "#888" : "#ddd", textDecoration: t.statut === "validé" ? "line-through" : "none" }}>{t.texte}</span>
                        <span style={{ fontSize: 11, color: t.statut === "validé" ? C.ok : t.statut === "en cours" ? C.or : "#888" }}>{t.statut}</span>
                      </div>
                    ))}
                    <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                      <input placeholder="Assigner une tâche…" id={`tache-${c.id}`} style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 12, outline: "none" }} onKeyDown={e => {
                        if (e.key === "Enter" && e.target.value.trim()) {
                          updC(c.id, cx => ({ ...cx, taches: [...cx.taches, { id: Date.now(), texte: e.target.value, priorite: "haute", statut: "à faire" }] }));
                          e.target.value = "";
                        }
                      }} />
                      <button style={{ padding: "8px 14px", borderRadius: 8, border: "none", background: C.or, color: C.text, fontWeight: "bold", fontSize: 12, cursor: "pointer" }} onClick={() => {
                        const inp = document.getElementById(`tache-${c.id}`);
                        if (inp && inp.value.trim()) {
                          updC(c.id, cx => ({ ...cx, taches: [...cx.taches, { id: Date.now(), texte: inp.value, priorite: "haute", statut: "à faire" }] }));
                          inp.value = "";
                        }
                      }}>Assigner</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ADMIN SEANCES */}
            {adminTab === "seances" && (
              <div>
                <div style={{ background: C.adminL, borderRadius: 14, padding: 18, marginBottom: 16, border: `1px solid #3a3a55` }}>
                  <div style={{ color: C.or, fontWeight: "bold", fontSize: 14, marginBottom: 14 }}>+ Saisir une séance</div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
                    <select value={newSeance.clienteId || clientes[0]?.id} onChange={e => setNewSeance(s => ({ ...s, clienteId: +e.target.value }))} style={{ flex: 1, minWidth: 130, padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 12 }}>
                      {clientes.map(c => <option key={c.id} value={c.id}>{c.prenom}</option>)}
                    </select>
                    <input value={newSeance.date} onChange={e => setNewSeance(s => ({ ...s, date: e.target.value }))} placeholder="Date (ex: 30 avr 2026)" style={{ flex: 1, minWidth: 140, padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 12, outline: "none" }} />
                    <input value={newSeance.theme} onChange={e => setNewSeance(s => ({ ...s, theme: e.target.value }))} placeholder="Thème de la séance" style={{ flex: 2, minWidth: 180, padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 12, outline: "none" }} />
                  </div>
                  <textarea value={newSeance.notes} onChange={e => setNewSeance(s => ({ ...s, notes: e.target.value }))} placeholder="Notes de séance…" style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 12, outline: "none", minHeight: 60, resize: "vertical", boxSizing: "border-box", marginBottom: 8, fontFamily: "Georgia, serif" }} />
                  <textarea value={newSeance.actions} onChange={e => setNewSeance(s => ({ ...s, actions: e.target.value }))} placeholder="Actions décidées…" style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 12, outline: "none", minHeight: 50, resize: "vertical", boxSizing: "border-box", marginBottom: 10, fontFamily: "Georgia, serif" }} />
                  <button onClick={() => {
                    if (!newSeance.theme.trim()) return;
                    const cid = newSeance.clienteId || clientes[0]?.id;
                    updC(cid, c => ({ ...c, seances: [...c.seances, { id: Date.now(), date: newSeance.date, theme: newSeance.theme, notes: newSeance.notes, actions: newSeance.actions }] }));
                    setNewSeance({ date: "", theme: "", notes: "", actions: "" });
                  }} style={{ padding: "9px 20px", borderRadius: 8, border: "none", background: C.or, color: C.text, fontWeight: "bold", fontSize: 13, cursor: "pointer" }}>Enregistrer</button>
                </div>
                {clientes.map(c => c.seances.length > 0 && (
                  <div key={c.id} style={{ background: C.adminL, borderRadius: 14, padding: 18, marginBottom: 14, border: `1px solid #3a3a55` }}>
                    <div style={{ color: "#fff", fontWeight: "bold", marginBottom: 10 }}>{c.prenom}</div>
                    {c.seances.map(s => (
                      <div key={s.id} style={{ padding: "10px 12px", borderRadius: 8, background: C.admin, marginBottom: 8 }}>
                        <div style={{ color: C.or, fontSize: 12, marginBottom: 4 }}>{s.date} · {s.theme}</div>
                        <div style={{ color: "#ccc", fontSize: 12 }}>{s.notes}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* ADMIN MESSAGES */}
            {adminTab === "messages" && (
              <div>
                <div style={{ background: C.adminL, borderRadius: 14, padding: 18, marginBottom: 16, border: `1px solid #3a3a55` }}>
                  <div style={{ color: C.or, fontWeight: "bold", fontSize: 14, marginBottom: 12 }}>Envoyer un message</div>
                  <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                    <select value={adminMsg.clienteId} onChange={e => setAdminMsg(m => ({ ...m, clienteId: +e.target.value }))} style={{ padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 13 }}>
                      {clientes.map(c => <option key={c.id} value={c.id}>{c.prenom}</option>)}
                    </select>
                  </div>
                  <textarea value={adminMsg.texte} onChange={e => setAdminMsg(m => ({ ...m, texte: e.target.value }))} placeholder="Ton message…" style={{ width: "100%", padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 13, outline: "none", minHeight: 70, resize: "vertical", boxSizing: "border-box", marginBottom: 10, fontFamily: "Georgia, serif" }} />
                  <button onClick={() => {
                    if (!adminMsg.texte.trim()) return;
                    updC(adminMsg.clienteId, c => ({ ...c, messages: [...c.messages, { id: Date.now(), auteur: "Mentor", texte: adminMsg.texte, heure: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) }] }));
                    setAdminMsg(m => ({ ...m, texte: "" }));
                  }} style={{ padding: "9px 20px", borderRadius: 8, border: "none", background: C.or, color: C.text, fontWeight: "bold", fontSize: 13, cursor: "pointer" }}>Envoyer</button>
                </div>
                {clientes.map(c => (
                  <div key={c.id} style={{ background: C.adminL, borderRadius: 14, padding: 18, marginBottom: 14, border: `1px solid #3a3a55` }}>
                    <div style={{ color: "#fff", fontWeight: "bold", marginBottom: 10 }}>{c.prenom} — {c.messages.length} message{c.messages.length > 1 ? "s" : ""}</div>
                    {c.messages.slice(-3).map(m => (
                      <div key={m.id} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
                        <span style={{ fontSize: 11, color: m.auteur === "Mentor" ? C.or : "#aaa", minWidth: 52 }}>{m.auteur}</span>
                        <span style={{ fontSize: 12, color: "#ddd" }}>{m.texte}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* ADMIN RESSOURCES */}
            {adminTab === "ressources" && (
              <div>
                <div style={{ background: C.adminL, borderRadius: 14, padding: 18, marginBottom: 16, border: `1px solid #3a3a55` }}>
                  <div style={{ color: C.or, fontWeight: "bold", fontSize: 14, marginBottom: 12 }}>+ Publier une ressource</div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
                    <input value={newRes.titre} onChange={e => setNewRes(r => ({ ...r, titre: e.target.value }))} placeholder="Titre de la ressource" style={{ flex: 2, minWidth: 180, padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 13, outline: "none" }} />
                    <input value={newRes.theme} onChange={e => setNewRes(r => ({ ...r, theme: e.target.value }))} placeholder="Thème (ex: Offre)" style={{ flex: 1, minWidth: 120, padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 13, outline: "none" }} />
                    <select value={newRes.type} onChange={e => setNewRes(r => ({ ...r, type: e.target.value }))} style={{ padding: "9px 12px", borderRadius: 8, border: `1px solid #3a3a55`, background: C.admin, color: "#fff", fontSize: 13 }}>
                      {["Article", "Fiche PDF", "Exercice", "Masterclass", "Guide"].map(t => <option key={t}>{t}</option>)}
                    </select>
                    <button onClick={() => {
                      if (!newRes.titre.trim()) return;
                      setRessources(r => [...r, { id: Date.now(), ...newRes }]);
                      setNewRes({ titre: "", theme: "", type: "Article" });
                    }} style={{ padding: "9px 18px", borderRadius: 8, border: "none", background: C.or, color: C.text, fontWeight: "bold", fontSize: 13, cursor: "pointer" }}>Publier</button>
                  </div>
                </div>
                {ressources.map(r => (
                  <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderRadius: 10, background: C.adminL, border: `1px solid #3a3a55`, marginBottom: 8 }}>
                    <div style={{ fontSize: 16 }}>{r.type === "Fiche PDF" ? "📄" : r.type === "Masterclass" ? "🎬" : r.type === "Exercice" ? "✏️" : "📝"}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: "bold", color: "#fff" }}>{r.titre}</div>
                      <div style={{ fontSize: 11, color: "#aaa" }}>{r.theme} · {r.type}</div>
                    </div>
                    <button onClick={() => setRessources(rs => rs.filter(x => x.id !== r.id))} style={{ padding: "4px 10px", borderRadius: 6, border: "none", background: "#3a3a55", color: "#ff6b6b", fontSize: 11, cursor: "pointer" }}>Retirer</button>
                  </div>
                ))}
              </div>
            )}

          </div>
        </>
      )}
    </div>
  );
}
