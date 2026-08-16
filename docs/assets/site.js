(function(){
  const qs=(s,r=document)=>r.querySelector(s), qsa=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const menu=qs('[data-menu]'), nav=qs('[data-nav]');
  if(menu&&nav) menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  qsa('[data-detail]').forEach(b=>{b.setAttribute('aria-expanded','false');b.addEventListener('click',()=>{const card=b.closest('.activity-card'),open=card.classList.toggle('open');b.setAttribute('aria-expanded',String(open));b.textContent=open?'Masquer l’adaptation −':'Voir l’adaptation +';});});

  function filterCards(kind){
    const box=qs(`[data-${kind}-filters]`); if(!box)return;
    const cards=qsa(`[data-${kind}-card]`), count=qs(`[data-${kind}-count]`);
    function run(){let shown=0;cards.forEach(card=>{const ok=qsa('select',box).every(sel=>sel.value==='all'||card.dataset[sel.name]===sel.value);card.classList.toggle('hidden',!ok);if(ok)shown++;});if(count)count.textContent=String(shown);}
    qsa('select',box).forEach(s=>s.addEventListener('change',run));run();
    const surprise=qs('[data-surprise]',box);if(surprise)surprise.addEventListener('click',()=>{const visible=cards.filter(c=>!c.classList.contains('hidden'));visible.forEach(c=>c.style.outline='');if(visible.length){const pick=visible[Math.floor(Math.random()*visible.length)];pick.style.outline='3px solid var(--coral)';pick.scrollIntoView({behavior:'smooth',block:'center'});}});
  }
  filterCards('venue');filterCards('activity');

  const planner=qs('[data-planner]');
  if(planner){
    const ideas={
      matin:[
        {t:'Balade sensorielle',d:'Parcours court, banc repéré et collecte de sons ou de couleurs.',w:['soleil'],e:[1,3],m:['calme','equilibre'],r:['sur-place','proche'],c:'soft'},
        {t:'Marché en mission-photo',d:'Petite liste, rôles choisis et retour possible avant le groupe.',w:['soleil','pluie'],e:[2,4],m:['equilibre','elan'],r:['proche','mobile'],c:'choice'},
        {t:'Baignade accompagnée',d:'Créneau calme, durée annoncée et option de rester au bord.',w:['soleil','chaleur'],e:[3,5],m:['equilibre','elan'],r:['proche','mobile'],c:'active'},
        {t:'Atelier cuisine fraîche',d:'Recette imagée, postes courts et dégustation sans obligation.',w:['pluie','chaleur'],e:[2,4],m:['calme','equilibre'],r:['sur-place'],c:'soft'},
        {t:'Visite à petites étapes',d:'Trois points d’intérêt, pause prévue et audioguide si utile.',w:['soleil','pluie','chaleur'],e:[2,4],m:['calme','equilibre'],r:['proche','mobile'],c:'choice'},
        {t:'Défi d’orientation',d:'Binômes choisis, boucle courte et balises visuelles simples.',w:['soleil'],e:[4,5],m:['elan'],r:['proche','mobile'],c:'active'},
        {t:'Café-jeux du quartier',d:'Table réservée, règles démontrées et droit de regarder d’abord.',w:['pluie','chaleur'],e:[1,3],m:['calme','equilibre'],r:['proche'],c:'soft'}
      ],
      recuperation:[
        {t:'Sieste, musique ou terrasse',d:'Trois espaces identifiés, aucune sollicitation sociale obligatoire.',w:['soleil','pluie','chaleur'],e:[1,5],m:['calme','equilibre','elan'],r:['sur-place','proche','mobile'],c:'pause'},
        {t:'Pause fraîcheur',d:'Boisson, pièce tempérée, brumisation et reprise décidée ensemble.',w:['chaleur'],e:[1,5],m:['calme','equilibre','elan'],r:['sur-place'],c:'pause'},
        {t:'Carnet de voyage',d:'Photos, collage ou dictée à un tiers, seul ou à deux.',w:['soleil','pluie','chaleur'],e:[1,3],m:['calme'],r:['sur-place'],c:'soft'},
        {t:'Temps libre balisé',d:'Options visibles, professionnel disponible et heure de retour connue.',w:['soleil','pluie','chaleur'],e:[2,5],m:['equilibre','elan'],r:['sur-place','proche'],c:'choice'},
        {t:'Salon calme partagé',d:'Lecture, casque, puzzle ou présence silencieuse dans le même espace.',w:['pluie','chaleur'],e:[1,2],m:['calme'],r:['sur-place'],c:'pause'}
      ],
      'apres-midi':[
        {t:'Ferme ou jardin',d:'Contact choisi avec le vivant, tâches concrètes et zone de retrait.',w:['soleil'],e:[2,4],m:['calme','equilibre'],r:['proche','mobile'],c:'soft'},
        {t:'Arts plastiques grand format',d:'Matériel préparé, gestes libres et résultat non évalué.',w:['pluie','chaleur'],e:[1,4],m:['calme','equilibre'],r:['sur-place'],c:'soft'},
        {t:'Sport adapté par ateliers',d:'Trois niveaux d’engagement, score facultatif et pauses visibles.',w:['soleil','pluie'],e:[3,5],m:['equilibre','elan'],r:['sur-place','proche'],c:'active'},
        {t:'Musée avec défi-image',d:'Cinq œuvres maximum, consigne concrète et café de sortie.',w:['pluie','chaleur'],e:[2,4],m:['calme','equilibre'],r:['proche','mobile'],c:'choice'},
        {t:'Nautisme découverte',d:'Prestataire briefé, équipement essayé et rôle à terre valorisé.',w:['soleil'],e:[4,5],m:['elan'],r:['mobile'],c:'active'},
        {t:'Goûter en ville',d:'Menu préparé, budget visible et possibilité de commander avec aide.',w:['soleil','pluie','chaleur'],e:[2,4],m:['equilibre','elan'],r:['proche','mobile'],c:'choice'},
        {t:'Jeux coopératifs',d:'Équipes petites, rôles utiles et objectif commun sans élimination.',w:['soleil','pluie','chaleur'],e:[2,5],m:['equilibre','elan'],r:['sur-place','proche'],c:'active'},
        {t:'Pétanque aménagée',d:'Distance modulée, partenaire de lancer et espace ombragé.',w:['soleil'],e:[1,3],m:['calme','equilibre'],r:['sur-place','proche'],c:'soft'}
      ],
      soiree:[
        {t:'Cinéma avec sortie facile',d:'Place en bordée, synopsis annoncé et retour anticipé possible.',w:['soleil','pluie','chaleur'],e:[2,4],m:['calme','equilibre'],r:['proche','mobile'],c:'soft'},
        {t:'Bal dansant à intensité libre',d:'Coin calme, participation par morceaux et départ en deux horaires.',w:['soleil','pluie'],e:[3,5],m:['equilibre','elan'],r:['sur-place','proche','mobile'],c:'active'},
        {t:'Veillée histoires et musique',d:'Chacun propose, écoute ou se retire ; fin annoncée à l’avance.',w:['soleil','pluie','chaleur'],e:[1,3],m:['calme','equilibre'],r:['sur-place'],c:'soft'},
        {t:'Promenade au coucher du soleil',d:'Boucle très courte, repères lumineux et boisson au retour.',w:['soleil'],e:[2,4],m:['calme','equilibre'],r:['sur-place','proche'],c:'soft'},
        {t:'Karaoké en petit comité',d:'Playlist choisie, droit au duo et volume ajustable.',w:['pluie','chaleur'],e:[3,5],m:['equilibre','elan'],r:['sur-place','proche'],c:'active'},
        {t:'Jeux de société au choix',d:'Table calme, table rapide ou simple observation avec boisson.',w:['soleil','pluie','chaleur'],e:[1,4],m:['calme','equilibre'],r:['sur-place'],c:'choice'}
      ]
    };
    const energy=qs('[name="energy"]',planner),value=qs('[data-energy]',planner),mood=qs('[name="mood"]',planner),reach=qs('[name="reach"]',planner),choices=qs('[name="choices"]',planner),weatherBtns=qsa('[data-weather]',planner),summary=qs('[data-plan-summary]',planner);let weather='soleil',seed=0;
    const labels={soleil:'soleil',pluie:'pluie',chaleur:'forte chaleur',calme:'besoin de calme',equilibre:'rythme équilibré',elan:'envie d’élan'};
    function pick(slot,offset,energyValue=Number(energy.value),moodValue=mood.value,excludedTitle){const ranked=ideas[slot].filter(idea=>idea.t!==excludedTitle).map(idea=>{const gap=energyValue<idea.e[0]?idea.e[0]-energyValue:energyValue>idea.e[1]?energyValue-idea.e[1]:0;return{idea,score:(idea.w.includes(weather)?5:0)+(idea.m.includes(moodValue)?3:0)+(idea.r.includes(reach.value)?3:0)-gap*2};}).sort((a,b)=>b.score-a.score||a.idea.t.localeCompare(b.idea.t));const best=ranked.slice(0,Math.min(4,ranked.length));return best[(seed+offset)%best.length].idea;}
    function fill(slot,idea){const row=qs(`[data-plan-row="${slot}"]`,planner),title=qs('[data-plan-title]',row),detail=qs('[data-plan-detail]',row);title.className=`pace-${idea.c}`;title.textContent=idea.t;detail.textContent=idea.d;}
    function render(){const n=Number(energy.value),morning=pick('matin',0),recovery=pick('recuperation',1),afternoon=pick('apres-midi',2),alternative=pick('apres-midi',3,Math.max(1,n-1),mood.value==='elan'?'equilibre':'calme',afternoon.t),evening=pick('soiree',4,Math.max(1,n-1));value.textContent=n+'/5';summary.textContent=`Paramètres : énergie ${n}/5 · ${labels[weather]} · ${labels[mood.value]}.`;fill('matin',morning);fill('recuperation',recovery);fill('soiree',evening);if(choices.checked){fill('apres-midi',{...afternoon,t:`${afternoon.t} ou ${alternative.t}`,d:`Deux départs possibles : ${afternoon.d} Alternative : ${alternative.d}`});}else fill('apres-midi',afternoon);}
    energy.addEventListener('input',render);mood.addEventListener('change',render);reach.addEventListener('change',render);choices.addEventListener('change',render);weatherBtns.forEach(button=>button.addEventListener('click',()=>{weather=button.dataset.weather;weatherBtns.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});render();}));qs('[data-refresh-plan]',planner).addEventListener('click',()=>{seed++;render();});render();
  }

  const checklist=qs('[data-checklist]');
  if(checklist){const boxes=qsa('input[type="checkbox"]',checklist), pct=qs('[data-check-pct]'), bar=qs('[data-check-bar]'), state=JSON.parse(localStorage.getItem('vao-static-checks')||'[]');boxes.forEach((b,i)=>{b.checked=state.includes(i);b.addEventListener('change',save);});function save(){const done=boxes.map((b,i)=>b.checked?i:null).filter(i=>i!==null);localStorage.setItem('vao-static-checks',JSON.stringify(done));const p=Math.round(done.length/boxes.length*100);pct.textContent=p+'%';bar.style.width=p+'%';}const reset=qs('[data-check-reset]');if(reset)reset.addEventListener('click',()=>{boxes.forEach(b=>b.checked=false);save();});const print=qs('[data-print]');if(print)print.addEventListener('click',()=>window.print());save();}

  const quiz=qs('[data-quiz]');
  if(quiz&&window.QUIZ_QUESTIONS){
    const shuffle=a=>[...a].sort(()=>Math.random()-.5);let session=[],index=0,results=[],selected=null,validated=false;
    function setup(){quiz.innerHTML=`<div class="quiz-setup"><div class="quiz-count"><strong>${window.QUIZ_QUESTIONS.length}</strong><span>questions disponibles</span></div><div><div class="quiz-controls"><label>Format<select data-length><option value="20">Échauffement · 20</option><option value="50">Approfondi · 50</option><option value="105">Grand test · 105</option></select></label><label>Thématique<select data-domain><option value="all">Toutes</option>${[...new Set(window.QUIZ_QUESTIONS.map(q=>q.domain))].map(d=>`<option>${d}</option>`).join('')}</select></label><button data-start>Lancer le test →</button></div><p>Questions et réponses sont remélangées à chaque lancement. Une correction expliquée suit chaque réponse.</p></div></div>`;qs('[data-start]',quiz).addEventListener('click',start);}
    function start(){const domain=qs('[data-domain]',quiz).value,n=Number(qs('[data-length]',quiz).value),pool=domain==='all'?window.QUIZ_QUESTIONS:window.QUIZ_QUESTIONS.filter(q=>q.domain===domain);session=shuffle(pool).slice(0,Math.min(n,pool.length)).map(q=>({...q,answers:shuffle(q.answers)}));index=0;results=[];render();}
    function render(){const q=session[index],progress=Math.round((index+1)/session.length*100);selected=null;validated=false;quiz.innerHTML=`<div class="quiz-game"><div class="quiz-top"><span>${q.domain}</span><p>Question <strong>${index+1}</strong> / ${session.length}</p></div><div class="quizbar"><i style="width:${progress}%"></i></div><h3>${q.question}</h3><div class="answers">${q.answers.map((a,i)=>`<button data-answer="${i}">${String.fromCharCode(65+i)} · ${a}</button>`).join('')}</div><button class="btn primary" data-validate disabled style="margin-top:22px">Valider</button><div data-feedback></div></div>`;qsa('[data-answer]',quiz).forEach(b=>b.addEventListener('click',()=>{if(validated)return;qsa('[data-answer]',quiz).forEach(x=>x.classList.remove('selected'));b.classList.add('selected');selected=q.answers[Number(b.dataset.answer)];qs('[data-validate]',quiz).disabled=false;}));qs('[data-validate]',quiz).addEventListener('click',validate);}
    function validate(){if(!selected||validated)return;validated=true;const q=session[index],ok=selected===q.correct;results.push({domain:q.domain,ok});qsa('[data-answer]',quiz).forEach(b=>{const a=q.answers[Number(b.dataset.answer)];if(a===q.correct)b.classList.add('correct');else if(a===selected)b.classList.add('wrong');});qs('[data-validate]',quiz).remove();const f=qs('[data-feedback]',quiz);f.className='feedback'+(ok?'':' bad');f.innerHTML=`<button data-next>${index+1===session.length?'Voir le bilan':'Question suivante'} →</button><strong>${ok?'Bonne réponse':'À retenir'}</strong><p>${q.explanation}</p>${ok?'':`<small>Réponse juste : <b>${q.correct}</b></small>`}`;qs('[data-next]',f).addEventListener('click',()=>{if(index+1===session.length)finish();else{index++;render();}});}
    function finish(){const score=results.filter(r=>r.ok).length,p=Math.round(score/results.length*100),domains=[...new Set(results.map(r=>r.domain))];quiz.innerHTML=`<div class="score"><p class="kicker">Résultat</p><strong>${p}%</strong><h2>${p>=85?'Repères très solides !':p>=65?'Une base bien construite.':'Un bon point de départ.'}</h2><p>${score} bonnes réponses sur ${results.length}</p><div class="breakdown">${domains.map(d=>{const all=results.filter(r=>r.domain===d),ok=all.filter(r=>r.ok).length;return `<article><div><span>${d}</span><strong>${ok}/${all.length}</strong></div><i><b style="width:${ok/all.length*100}%"></b></i></article>`}).join('')}</div><button class="btn primary" data-replay>Rejouer</button> <button class="btn secondary" data-setup>Changer de format</button></div>`;qs('[data-replay]',quiz).addEventListener('click',()=>{session=shuffle(session).map(q=>({...q,answers:shuffle(q.answers)}));index=0;results=[];render();});qs('[data-setup]',quiz).addEventListener('click',setup);}
    setup();
  }
})();
