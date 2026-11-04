/* ==========================================================
   Dominique & Steve · 15 mai 2027
   1) RÉGLAGES   2) TEXTES (FR / EN / DE)   3) FONCTIONNEMENT
   ========================================================== */
(function () {
  "use strict";

  /* ---------- 1) RÉGLAGES À MODIFIER ---------- */
  var CONFIG = {
    // Début du jour J (heure de Paris) : sert au compte à rebours.
    eventDate: "2027-05-15T00:00:00+02:00",
    // Jour du mariage, affiché en toutes lettres selon la langue.
    eventDay: "2027-05-15T12:00:00+02:00",
    // Lien de votre formulaire de réponse (Google Forms, Tally, etc.).
    rsvpUrl: "https://forms.gle/VOTRE-LIEN",
    // Date limite de réponse.
    rsvpDeadline: "2027-04-15T12:00:00+02:00",
    // Votre hashtag.
    hashtag: "#DominiqueEtSteve2027"
  };

  /* ---------- 2) TEXTES ---------- */
  var LOCALE = { fr: "fr-FR", en: "en-GB", de: "de-DE" };

  var I18N = {
    fr: {
      lang_label: "Langue", intro_label: "Invitation de mariage",
      nav_story: "Histoire", nav_gallery: "Galerie", nav_prog: "Programme", nav_venue: "Lieu", nav_dress: "Tenue", nav_rsvp_long: "Confirmer votre présence",
      kind: "Mariage coutumier",
      invited: "Vous êtes invités à notre mariage",
      open: "Ouvrir notre invitation",
      seal_label: "Briser le cachet et ouvrir l’invitation",
      hero_alt: "Dominique et Steve",
      invite: "C’est avec une immense joie que nous vous invitons à célébrer à nos côtés notre mariage coutumier, un moment unique où l’amour, les traditions et les liens familiaux seront à l’honneur.",
      verse: "« C’est pourquoi l’homme quittera son père et sa mère, et s’attachera à sa femme, et ils deviendront une seule chair. »",
      verse_ref: "Genèse 2:24",
      rings_label: "Deux alliances en or, dont une ornée d’un diamant",
      cd_label: "Compte à rebours jusqu’au mariage",
      cd_mo: "Mois", cd_d: "Jours", cd_h: "Heures", cd_m: "Minutes", cd_s: "Secondes",
      cue: "Notre histoire",
      story_kicker: "Notre histoire", story_title: "Deux chemins, une même route",
      story_lead: "Quelques moments qui nous ont menés jusqu’à ce jour.",
      t1_title: "Rencontre & Premier rendez-vous", t1_text: "Un regard, un sourire, et deux chemins se sont croisés. Nous ne le savions pas encore, mais tout commençait là.",
      t2_title: "Première sortie en couple", t2_text: "Nous apprenions davantage à nous connaître, à nous faire confiance. Ce soir-là, nous avons compris que cette histoire avait quelque chose de rare.",
      t3_title: "Demande en mariage", t3_text: "Devant notre famille et nos ami(e)s, une question, un oui venu du cœur. Le début de notre plus belle promesse.",
      t4_title: "Bénédiction nuptiale", t4_text: "Devant Dieu, nous avons décidé de faire de notre couple une corde à trois fils, dont le SEIGNEUR est le guide suprême.",
      t5_title: "Le Grand Jour", t5_text: "Le 15 mai 2027, nos familles se réunissent pour bénir notre union selon la tradition. Soyez des nôtres.",
      tl_hint: "Voir la photo et le récit", tl_hint_video: "Voir la vidéo et le récit", tl_hint_final: "Découvrir notre grand jour", vid_label: "Vidéo de la demande en mariage",
      gal_kicker: "Galerie", gal_title: "Nos plus beaux moments", gal_lead: "Quelques images de notre histoire.",
      gal_alt: "Dominique et Steve, photo {n}",
      prog_kicker: "Le programme", prog_title: "Le déroulé de la journée",
      prog_lead: "Samedi 15 mai 2027, de la rencontre des familles à la célébration coutumière.",
      p1_t: "Rencontre des deux familles et début de la cérémonie de la dot", p1_d: "Accueil de la belle-famille camerounaise au domicile familial de la famille ivoirienne de la future épouse. Ce premier temps fort sera consacré à la rencontre des deux familles et au début de la cérémonie de la dot, selon les coutumes Abouré, dans l’intimité des deux familles et en présence du seul corps d’honneur.",
      p2_t: "Cocktail familial", p2_d: "Un moment de convivialité et de partage réunissant les deux familles ainsi que le corps d’honneur.",
      p3_t: "Accueil des invités", p3_d: "Ouverture des festivités et accueil des invités sur le lieu de réception : Paris FACTORY 58, 12 rue de Gutenberg, 93000 Bobigny.",
      p4_t: "Arrivée des mariés et célébration coutumière", p4_d: "Entrée des mariés, suivie de danses traditionnelles et de quelques étapes symboliques de la cérémonie de la dot, dans le respect des traditions et des coutumes qui unissent nos deux familles.",
      venue_kicker: "Le lieu", venue_title: "Où nous retrouver",
      route_btn: "Ouvrir l’itinéraire", map_title: "Plan d’accès à Paris FACTORY 58",
      stay_title: "Se loger à proximité", stay_lead: "Quelques pistes pour dormir près du lieu de la fête.",
      stay_hotel: "Hôtels", stay_motel: "Motels", stay_maps: "Voir sur Google Maps", stay_airbnb: "Voir sur Airbnb",
      dress_kicker: "Tenue", dress_title: "Tenue de prestige",
      dress_lead: "Nous vous invitons à porter vos plus belles tenues traditionnelles, nobles et élégantes, dans l’esprit des grandes cérémonies camerounaises et ivoiriennes.",
      dress_her: "Pour elles", dress_her_t: "Kaba, boubou brodé, pagne ou toghu, avec un foulard de tête et des bijoux dorés.",
      dress_him: "Pour eux", dress_him_t: "Boubou, toghu, ensemble en bazin riche ou en pagne, avec des chaussures soignées.",
      palette_title: "Nos couleurs", sw_green: "Vert", sw_gold: "Jaune doré", sw_terra: "Terracotta", sw_brown: "Brun profond",
      inspir_title: "Inspirations", tag_pagne: "Pagne baoulé",
      rsvp_kicker: "Réponse", rsvp_title: "Confirmer votre présence",
      rsvp_text: "Votre présence compte énormément pour nous. Merci de nous répondre grâce à un court formulaire.",
      rsvp_before: "Réponse souhaitée avant le", rsvp_btn: "Confirmer ma présence",
      rsvp_note: "Le formulaire s’ouvre dans un nouvel onglet.",
      foot_thanks: "Merci de faire partie de notre histoire"
    },
    en: {
      lang_label: "Language", intro_label: "Wedding invitation",
      nav_story: "Story", nav_gallery: "Gallery", nav_prog: "Programme", nav_venue: "Venue", nav_dress: "Attire", nav_rsvp_long: "Confirm your attendance",
      kind: "Traditional wedding",
      invited: "You are invited to our wedding",
      open: "Open our invitation",
      seal_label: "Break the seal and open the invitation",
      hero_alt: "Dominique and Steve",
      invite: "It is with immense joy that we invite you to celebrate with us our customary wedding, a unique moment where love, traditions and family ties will be honoured.",
      verse: "“Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.”",
      verse_ref: "Genesis 2:24",
      rings_label: "Two gold wedding rings, one set with a diamond",
      cd_label: "Countdown to the wedding",
      cd_mo: "Months", cd_d: "Days", cd_h: "Hours", cd_m: "Minutes", cd_s: "Seconds",
      cue: "Our story",
      story_kicker: "Our story", story_title: "Two paths, one road",
      story_lead: "A few moments that led us to this day.",
      t1_title: "Meeting & First Date", t1_text: "A glance, a smile, and two paths crossed. We did not know it yet, but everything began there.",
      t2_title: "First Outing as a Couple", t2_text: "We were getting to know each other better and learning to trust one another. That evening, we understood that this story was something rare.",
      t3_title: "The Proposal", t3_text: "In front of our family and friends, one question, one heartfelt yes. The beginning of our most beautiful promise.",
      t4_title: "Wedding Blessing", t4_text: "Before God, we decided to make our couple a cord of three strands, with the LORD as our supreme guide.",
      t5_title: "The Big Day", t5_text: "On 15 May 2027, our families gather to bless our union according to tradition. Join us.",
      tl_hint: "See the photo and story", tl_hint_video: "Watch the video and story", tl_hint_final: "Discover our big day", vid_label: "Proposal video",
      gal_kicker: "Gallery", gal_title: "Our finest moments", gal_lead: "A few images from our story.",
      gal_alt: "Dominique and Steve, photo {n}",
      prog_kicker: "The programme", prog_title: "How the day unfolds",
      prog_lead: "Saturday 15 May 2027, from the meeting of the families to the customary celebration.",
      p1_t: "Meeting of the two families and start of the dowry ceremony", p1_d: "Welcome of the Cameroonian in-laws at the family home of the future bride’s Ivorian family. This first highlight is dedicated to the meeting of the two families and the beginning of the dowry ceremony, according to Abouré customs, in the privacy of the two families and in the presence of the guests of honour only.",
      p2_t: "Family cocktail", p2_d: "A moment of conviviality and sharing bringing together both families and the guests of honour.",
      p3_t: "Welcome of the guests", p3_d: "Opening of the festivities and welcome of the guests at the reception venue: Paris FACTORY 58, 12 rue de Gutenberg, 93000 Bobigny.",
      p4_t: "Arrival of the couple and customary celebration", p4_d: "Entrance of the couple, followed by traditional dances and a few symbolic stages of the dowry ceremony, in respect of the traditions and customs that unite our two families.",
      venue_kicker: "The venue", venue_title: "Where to find us",
      route_btn: "Open directions", map_title: "Map to Paris FACTORY 58",
      stay_title: "Where to stay nearby", stay_lead: "A few ideas for staying close to the venue.",
      stay_hotel: "Hotels", stay_motel: "Motels", stay_maps: "View on Google Maps", stay_airbnb: "View on Airbnb",
      dress_kicker: "Attire", dress_title: "Prestige attire",
      dress_lead: "We invite you to wear your finest traditional outfits, noble and elegant, in the spirit of great Cameroonian and Ivorian ceremonies.",
      dress_her: "For her", dress_her_t: "Kaba, embroidered boubou, pagne (wax print) or toghu, with a head wrap and golden jewellery.",
      dress_him: "For him", dress_him_t: "Boubou, toghu, or a set in bazin riche or pagne, with polished shoes.",
      palette_title: "Our colours", sw_green: "Green", sw_gold: "Golden yellow", sw_terra: "Terracotta", sw_brown: "Deep brown",
      inspir_title: "Inspirations", tag_pagne: "Baoulé pagne",
      rsvp_kicker: "RSVP", rsvp_title: "Confirm your attendance",
      rsvp_text: "Your presence means the world to us. Please reply using a short form.",
      rsvp_before: "Kindly reply by", rsvp_btn: "Confirm my attendance",
      rsvp_note: "The form opens in a new tab.",
      foot_thanks: "Thank you for being part of our story"
    },
    de: {
      lang_label: "Sprache", intro_label: "Hochzeitseinladung",
      nav_story: "Geschichte", nav_gallery: "Galerie", nav_prog: "Ablauf", nav_venue: "Ort", nav_dress: "Kleidung", nav_rsvp_long: "Zusage senden",
      kind: "Traditionelle Hochzeit",
      invited: "Ihr seid zu unserer Hochzeit eingeladen",
      open: "Unsere Einladung öffnen",
      seal_label: "Siegel brechen und die Einladung öffnen",
      hero_alt: "Dominique und Steve",
      invite: "Mit unermesslicher Freude laden wir Sie ein, an unserer Seite unsere traditionelle Hochzeit zu feiern – ein einzigartiger Moment, in dem Liebe, Traditionen und familiäre Verbundenheit im Mittelpunkt stehen.",
      verse: "„Darum wird ein Mann seinen Vater und seine Mutter verlassen und an seinem Weibe hangen, und sie werden sein ein Fleisch.“",
      verse_ref: "1. Mose 2,24",
      rings_label: "Zwei goldene Eheringe, einer mit Diamant",
      cd_label: "Countdown bis zur Hochzeit",
      cd_mo: "Monate", cd_d: "Tage", cd_h: "Stunden", cd_m: "Minuten", cd_s: "Sekunden",
      cue: "Unsere Geschichte",
      story_kicker: "Unsere Geschichte", story_title: "Zwei Wege, ein gemeinsamer Weg",
      story_lead: "Einige Momente, die uns bis zu diesem Tag geführt haben.",
      t1_title: "Begegnung & erstes Date", t1_text: "Ein Blick, ein Lächeln, und zwei Wege kreuzten sich. Wir ahnten es noch nicht, aber alles begann dort.",
      t2_title: "Erster gemeinsamer Ausflug", t2_text: "Wir lernten uns besser kennen und einander zu vertrauen. An diesem Abend wussten wir, dass diese Geschichte etwas Seltenes ist.",
      t3_title: "Der Heiratsantrag", t3_text: "Vor unserer Familie und unseren Freunden: eine Frage, ein Ja von Herzen. Der Anfang unseres schönsten Versprechens.",
      t4_title: "Der Hochzeitssegen", t4_text: "Vor Gott haben wir beschlossen, aus unserer Partnerschaft eine dreifache Schnur zu machen, deren oberster Führer der HERR ist.",
      t5_title: "Der große Tag", t5_text: "Am 15. Mai 2027 versammeln sich unsere Familien, um unsere Verbindung nach der Tradition zu segnen. Feiert mit uns.",
      tl_hint: "Foto und Geschichte ansehen", tl_hint_video: "Video und Geschichte ansehen", tl_hint_final: "Unseren großen Tag entdecken", vid_label: "Video vom Heiratsantrag",
      gal_kicker: "Galerie", gal_title: "Unsere schönsten Momente", gal_lead: "Einige Bilder aus unserer Geschichte.",
      gal_alt: "Dominique und Steve, Foto {n}",
      prog_kicker: "Der Ablauf", prog_title: "So verläuft der Tag",
      prog_lead: "Samstag, 15. Mai 2027, von der Begegnung der Familien bis zur traditionellen Feier.",
      p1_t: "Begegnung der beiden Familien und Beginn der Brautpreiszeremonie", p1_d: "Empfang der kamerunischen Schwiegerfamilie im Elternhaus der ivorischen Familie der zukünftigen Braut. Dieser erste Höhepunkt ist der Begegnung der beiden Familien und dem Beginn der Brautpreiszeremonie nach den Abouré-Bräuchen gewidmet – im privaten Kreis der beiden Familien und nur in Anwesenheit der Ehrengäste.",
      p2_t: "Familiencocktail", p2_d: "Ein Moment der Geselligkeit und des Teilens mit beiden Familien und den Ehrengästen.",
      p3_t: "Empfang der Gäste", p3_d: "Eröffnung der Feierlichkeiten und Empfang der Gäste am Veranstaltungsort: Paris FACTORY 58, 12 rue de Gutenberg, 93000 Bobigny.",
      p4_t: "Ankunft des Brautpaars und traditionelle Feier", p4_d: "Einzug des Brautpaars, gefolgt von traditionellen Tänzen und einigen symbolischen Stationen der Brautpreiszeremonie, unter Wahrung der Traditionen und Bräuche, die unsere beiden Familien verbinden.",
      venue_kicker: "Der Ort", venue_title: "Wo ihr uns findet",
      route_btn: "Route öffnen", map_title: "Anfahrtsplan zu Paris FACTORY 58",
      stay_title: "Unterkunft in der Nähe", stay_lead: "Ein paar Ideen für eine Übernachtung in der Nähe des Veranstaltungsortes.",
      stay_hotel: "Hotels", stay_motel: "Motels", stay_maps: "Auf Google Maps ansehen", stay_airbnb: "Auf Airbnb ansehen",
      dress_kicker: "Kleidung", dress_title: "Festliche Tracht",
      dress_lead: "Wir laden euch ein, eure schönsten traditionellen Gewänder zu tragen, edel und elegant, im Geist der großen kamerunischen und ivorischen Zeremonien.",
      dress_her: "Für Damen", dress_her_t: "Kaba, bestickter Boubou, Pagne oder Toghu, dazu ein Kopftuch und goldener Schmuck.",
      dress_him: "Für Herren", dress_him_t: "Boubou, Toghu oder ein Ensemble aus Bazin Riche oder Pagne, dazu gepflegte Schuhe.",
      palette_title: "Unsere Farben", sw_green: "Grün", sw_gold: "Goldgelb", sw_terra: "Terrakotta", sw_brown: "Tiefbraun",
      inspir_title: "Inspirationen", tag_pagne: "Baoulé-Pagne",
      rsvp_kicker: "Zusage", rsvp_title: "Bitte um eure Zusage",
      rsvp_text: "Eure Anwesenheit bedeutet uns sehr viel. Bitte antwortet uns über ein kurzes Formular.",
      rsvp_before: "Antwort bitte bis zum", rsvp_btn: "Zusage senden",
      rsvp_note: "Das Formular öffnet sich in einem neuen Tab.",
      foot_thanks: "Danke, dass ihr Teil unserer Geschichte seid"
    }
  };

  /* ---------- 3) FONCTIONNEMENT ---------- */
  var root = document.documentElement;
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  /* Langue de départ : choix mémorisé, sinon langue du téléphone */
  var lang = "fr";
  var nav = String(navigator.language || "fr").slice(0, 2).toLowerCase();
  if (I18N[nav]) lang = nav;
  try { var saved = localStorage.getItem("dsLang"); if (saved && I18N[saved]) lang = saved; } catch (e) {}

  function fmt(iso, opts) {
    try {
      return new Intl.DateTimeFormat(LOCALE[lang], Object.assign({ timeZone: "Europe/Paris" }, opts)).format(new Date(iso));
    } catch (e) { return ""; }
  }

  /* Titres : chaque mot apparaît l'un après l'autre */
  function split(el) {
    var text = (el.textContent || "").trim();
    var words = text.split(/\s+/);
    el.setAttribute("aria-label", text);
    el.textContent = "";
    words.forEach(function (w, i) {
      var outer = document.createElement("span");
      outer.className = "w";
      outer.setAttribute("aria-hidden", "true");
      var inner = document.createElement("span");
      inner.style.setProperty("--i", i);
      inner.textContent = w;
      outer.appendChild(inner);
      el.appendChild(outer);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  }

  function applyLang(l) {
    lang = l;
    var d = I18N[l];
    root.lang = l;
    $$("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k] != null) el.textContent = d[k];
    });
    $$("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var i = pair.indexOf(":");
        var attr = pair.slice(0, i).trim(), key = pair.slice(i + 1).trim();
        if (d[key] != null) el.setAttribute(attr, d[key]);
      });
    });
    $$("[data-split]").forEach(split);
    $$(".shot img").forEach(function (img, i) { img.alt = d.gal_alt.replace("{n}", i + 1); });

    var day = fmt(CONFIG.eventDay, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    if (day) $("#heroDate").textContent = day;
    var dd = fmt(CONFIG.eventDay, { day: "numeric", month: "long", year: "numeric" });
    if (dd) $$("[data-date]").forEach(function (el) { el.textContent = dd; });
    var dl = fmt(CONFIG.rsvpDeadline, { day: "numeric", month: "long", year: "numeric" });
    if (dl) $("#deadlineDate").textContent = dl;

    $$(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === l));
    });
    document.title = "Dominique & Steve · " + (fmt(CONFIG.eventDay, { day: "numeric", month: "long", year: "numeric" }) || "15 mai 2027");
    try { localStorage.setItem("dsLang", l); } catch (e) {}
    measure();
  }
  $$(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  /* Lien du formulaire et hashtag */
  $("#rsvpBtn").href = CONFIG.rsvpUrl;
  $("#hashtag").textContent = CONFIG.hashtag;

  /* ---- Compte à rebours : mois, jours, heures, minutes, secondes ---- */
  var cd = { mo: $("#cdMo"), d: $("#cdD"), h: $("#cdH"), m: $("#cdM"), s: $("#cdS") };
  var target = new Date(CONFIG.eventDate);
  function pad(n) { n = String(n); return n.length < 2 ? "0" + n : n; }
  function addMonths(d, k) {
    var r = new Date(d.getTime()), day = r.getDate();
    r.setDate(1);
    r.setMonth(r.getMonth() + k);
    r.setDate(Math.min(day, new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate()));
    return r;
  }
  function tick() {
    var now = new Date(), months = 0, anchor = now;
    if (now < target) {
      months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());
      anchor = addMonths(now, months);
      if (anchor > target) { months -= 1; anchor = addMonths(now, months); }
      if (months < 0) { months = 0; anchor = now; }
    } else { anchor = target; }
    var s = Math.max(0, Math.floor((target - anchor) / 1000));
    cd.mo.textContent = pad(months);
    cd.d.textContent = pad(Math.floor(s / 86400));
    cd.h.textContent = pad(Math.floor((s % 86400) / 3600));
    cd.m.textContent = pad(Math.floor((s % 3600) / 60));
    cd.s.textContent = pad(s % 60);
  }
  tick();
  setInterval(tick, 1000);

  /* ---- Frise : la ligne se dessine au défilement + volets photo / récit ---- */
  var tl = $("#tl"), line = $("#tlLine");
  var items = $$(".tl-item"), ys = [], firstY = 23, span = 0;
  function nodeY(li) {
    var n = $(".tl-node", li);
    return li.offsetTop + n.offsetTop + n.offsetHeight / 2;
  }
  function measure() {
    if (!items.length) return;
    ys = items.map(nodeY);
    firstY = ys[0];
    span = Math.max(0, ys[ys.length - 1] - firstY);
    line.style.top = firstY + "px";
    onScroll();
  }
  function timeline() {
    if (!ys.length) return;
    if (reduce) {   // mouvement réduit : frise déjà tracée
      line.style.height = span + "px";
      items.forEach(function (li) { li.classList.add("is-on"); });
      return;
    }
    var reach = window.innerHeight * 0.62 - tl.getBoundingClientRect().top;
    line.style.height = Math.min(span, Math.max(0, reach - firstY)) + "px";
    items.forEach(function (li, i) { li.classList.toggle("is-on", reach >= ys[i] - 2); });
  }

  function loadVideo(li) {
    var v = $("video[data-src]", li);
    if (!v || v.getAttribute("data-tried")) return;
    v.setAttribute("data-tried", "1");
    v.addEventListener("loadedmetadata", function () { v.parentNode.classList.add("has-video"); });
    v.addEventListener("error", function () { v.removeAttribute("src"); });
    v.preload = "metadata";
    v.src = v.getAttribute("data-src");
  }
  function setOpen(li, open) {
    li.classList.toggle("open", open);
    var btn = $(".tl-toggle", li), panel = $(".tl-panel", li);
    btn.setAttribute("aria-expanded", String(open));
    if (open) panel.removeAttribute("inert"); else panel.setAttribute("inert", "");
    if (!open) $$("video", li).forEach(function (v) { try { v.pause(); } catch (e) {} });
  }
  items.forEach(function (li) {
    $(".tl-toggle", li).addEventListener("click", function () {
      var willOpen = !li.classList.contains("open");
      items.forEach(function (o) { if (o !== li) setOpen(o, false); });
      setOpen(li, willOpen);
      if (willOpen) {
        loadVideo(li);
        setTimeout(function () {   // fait défiler juste ce qu'il faut pour voir tout le volet
          var r = $(".tl-panel", li).getBoundingClientRect();
          if (r.bottom > window.innerHeight - 16) {
            window.scrollBy({ top: Math.min(r.bottom - window.innerHeight + 28, r.top - 90), behavior: reduce ? "auto" : "smooth" });
          }
        }, reduce ? 50 : 700);
      }
    });
  });

  /* ---- Galerie : léger effet de profondeur ---- */
  var shots = $$(".shot"), depths = [28, -22, 36, -28, 24, -34];
  function parallax() {
    if (reduce) return;
    var vh = window.innerHeight;
    shots.forEach(function (s, i) {
      var r = s.getBoundingClientRect();
      if (r.bottom < -240 || r.top > vh + 240) return;
      var c = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      c = Math.max(-1, Math.min(1, c));
      var frame = s.firstElementChild;
      frame.style.setProperty("--fy", (c * depths[i % depths.length]).toFixed(1) + "px");
      frame.firstElementChild.style.setProperty("--py", (-c * 7).toFixed(2) + "%");
    });
  }

  /* ---- Barre du haut ---- */
  var topbar = $("#topbar");
  function onScroll() {
    topbar.classList.toggle("solid", window.scrollY > 40);
    timeline();
    parallax();
  }
  var queued = false;
  window.addEventListener("scroll", function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; onScroll(); });
  }, { passive: true });
  window.addEventListener("resize", measure);
  if (window.ResizeObserver) new ResizeObserver(measure).observe(tl);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  /* ---- Apparition douce des blocs (fondu + légère montée) ---- */
  function startReveals() {
    var targets = $$(".reveal, [data-split]");
    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  }

  /* ---- Ouverture de l'enveloppe ---- */
  var intro = $("#intro"), site = $("#site"), opened = false;
  root.classList.add("locked");
  site.setAttribute("inert", "");

  function openInvite() {
    if (opened) return;
    opened = true;
    intro.classList.add("opening");
    setTimeout(function () {
      intro.classList.add("leaving");
      site.classList.add("show");
      site.removeAttribute("inert");
      document.body.classList.add("is-open");
      root.classList.remove("locked");
      window.scrollTo(0, 0);
      measure();
      startReveals();
    }, reduce ? 400 : 2700);
    setTimeout(function () { intro.hidden = true; }, reduce ? 1700 : 4000);
  }
  $("#openBtn").addEventListener("click", openInvite);
  $("#seal").addEventListener("click", openInvite);

  applyLang(lang);
})();
