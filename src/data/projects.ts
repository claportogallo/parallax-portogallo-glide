export interface Project {
  title: string;
  meta: string;
  cats: string[];
  desc: string;
  images: string[];
}

export const PROJECTS: Record<string, Project> = {
  "Gelateria Firenze": {
    title: "Gelateria Firenze",
    meta: "Firenze · 2025",
    cats: ["architettura"], 
    desc: `<strong>Firenze 2024 - Progettazione nuova gelateria</strong>

Il concept per il nuovo locale di Barroccino in via del Corso ha alla base la volontà di unire elementi caratterizzanti dell'architettura e stile fiorentino con i suoi materiali e forme.
Ciò che contraddistingue Firenze e che porta anche Barroccino nel suo spirito è l'<strong>artigianalità</strong>.

Se i prodotti e le materie prime per la realizzazione del gelato e dei dolci sono tutti naturali e provengono da una filiera corta e controllata, anche i materiali e i prodotti di cui è fatto il locale dovrebbero essere artigianali e realizzati con materiali del luogo e/o tipici delle realizzazioni a Firenze.

L'arte e la storia della città non possono meglio che esprimersi con mobili fatti a mano da artigiani locali con materie prime naturali e tradizionali.

In questo modo è possibile ottenere un luogo attento ai bisogni dell'ecosistema e realizzare un'architettura <strong>ambientale</strong> e <strong>sostenibile</strong>.

Tutto questo si traduce in un luogo che deve parlare da solo:
senza la necessità di un cartello o di una spiegazione, il cliente deve sentirsi in un autentico negozio fiorentino, dove assapora con gli occhi, gli odori e con il palato il gusto e il sapore di ciò che si vende all'interno: un'esperienza di piacere.

Il progetto per il nuovo locale di Barroccino in via del Corso si può riassumere quindi in 3 parole:
<strong>AUTENTICO, ARTIGIANALE, AMBIENTALE</strong>.
L'esperienza che si vuole regalare al cliente, possa questo essere un turista distratto o un cittadino fiorentino, è quella di entrare in un luogo che c'è sempre stato.

Link:
<a href="https://www.instagram.com/barroccinofirenze/" target="_blank" rel="noopener noreferrer">Instagram</a>
<a href="https://gelateriabarroccino.it/" target="_blank" rel="noopener noreferrer">Sito ufficiale</a>`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600", 
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  },

  "New Brand David": { 
    title: "New Brand David", 
    meta: "Firenze · 2023",
    cats: ["grafica"], 
    desc: `<strong>Firenze 2023 - Brand identity e sistema illustrativo</strong>

Cliente internazionale con un nuovo fondo nel centro storico di Firenze: l'obiettivo era creare un marchio iconico, subito riconoscibile e profondamente legato alla città. Il cliente ha scelto il David di Michelangelo come emblema; da questo input ho sviluppato un'illustrazione originale in stile lineare: il David sostituisce la fionda con un cono gelato e strizza l'occhio al pubblico, fondendo ironia e classicità.

La tipografia accosta un serif autorevole per "DAVID" a un corsivo più leggero per "La Gelateria", a bilanciare heritage e convivialità. La palette riprende gli interni: rosa polverosi e sfumature calde che tornano su insegna, materiali stampati e contenuti digitali, creando continuità visiva in/outdoor.

Ho progettato l'intero sistema illustrativo: etichette gusti, menù, listini, cartellonistica, supporti per i monitor e micro-icone. Tutti gli elementi riprendono il tratto a china del logo, così da costruire una linea stilistica unica e riconoscibile.

<strong>Deliverable principali</strong>: logo e insegna, palette e linee guida tipografiche, illustrazioni per menù e bacheca gusti, grafiche per monitor, biglietti e materiali di comunicazione.
<strong>Risultato</strong>: un'identità coerente, elegante e giocosa che rende il locale immediatamente memorabile per residenti e turisti.

Link:
<a href="https://www.google.com/maps/place/David+la+Gelateria/@43.7715218,11.2588435,681m/data=!3m2!1e3!4b1!4m6!3m5!1s0x132a5521bb1ebd35:0x5dea0a3702f2252a!8m2!3d43.771518!4d11.2614184!16s%2Fg%2F11l5b7bgg8?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Google Maps Page</a>`, 
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  },

  "Home* Project": { 
    title: "Home* Project", 
    meta: "Milano · 2018",
    cats: ["bimai","architettura"], 
    desc: `<strong>Milano 2018 - Progetto di tesi magistrale Politecnico</strong>
<strong>realizzato e pubblicato con Tecla Caroli</strong>

<strong>HOME*</strong> è un sistema abitativo modulare per contesti di emergenza, nato da uno studio internazionale sulle migliori pratiche. L'obiettivo è offrire una soluzione <strong>rapida</strong>, <strong>efficiente</strong> ed <strong>evolutiva</strong>, capace di rispondere subito ai bisogni umanitari e di crescere nel tempo.<br><br>

Il progetto integra <strong>BIM</strong> e <strong>Life Cycle Assessment (LCA)</strong> in un unico modello informativo completo di dati tecnici, fisici ed economici. Il <strong>BIM</strong> consente il controllo delle scelte a livello di <strong>materiale</strong>, <strong>componente</strong> e <strong>sistema</strong>, la standardizzazione in <strong>famiglie</strong> sostituibili/integrabili e l'estrazione immediata di computi e stime.

<strong>Adattabilità geografica.</strong> Per validarne le prestazioni ambientali, economiche ed energetiche, <strong>HOME*</strong> è stato testato in due scenari opposti: <strong>Amatrice (Italia)</strong> e <strong>Zaatari (Giordania)</strong>.

<strong>Risultato</strong>: HOME* unisce <strong>rapidità d'intervento</strong>, <strong>sostenibilità ambientale ed economica</strong> e <strong>dignità dell'abitare</strong>, mettendo al centro le persone e il loro futuro.

Link:
<a href="https://www.politesi.polimi.it/handle/10589/141128" target="_blank" rel="noopener noreferrer">Politecnico di Milano</a>
<a href="https://issuu.com/edicomedizioni/docs/la34" target="_blank" rel="noopener noreferrer">LegnoArchitettura n.34 2018</a>`, 
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  },

  "Vaso C.": { 
    title: "Vaso C.", 
    meta: "Napoli · 2025",
    cats: ["artigianato"], 
    desc: `<strong>Napoli 2025 - Terracotta smaltata</strong>

Progetto su commissione per un cliente che desiderava un oggetto a doppia funzione: <strong>scultura da centrotavola</strong> e <strong>vaso</strong> utilizzabile all'occorrenza. Ho scelto il <strong>carciofo</strong> per la sua forza iconica e per la struttura naturale: la testa garantisce una base stabile mentre il <strong>gambo verticale</strong> diventa collo del vaso, capace di guidare e sostenere il bouquet.<br><br>

Il volume è <strong>modellato a mano</strong>, con brattee applicate una a una e texture incise per restituire il carattere vegetale. L'interno è continuo e <strong>impermeabilizzato</strong> per contenere l'acqua; all'esterno una stratificazione di ingobbi e <strong>smalti lucidi</strong> crea le variazioni verde-violacee tipiche del carciofo.<br><br>

In tavola funziona come <strong>totem domestico</strong> — scultoreo anche a vaso vuoto — e, quando serve, accoglie fiori freschi o secchi grazie al collo stretto e al corpo capiente. Un oggetto unico che unisce <strong>botanica, funzione e decorazione</strong> in un gesto contemporaneo.`, 
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  },

  "Wedding M+S": { 
    title: "Wedding M+S",
    meta: "Amsterdam · 2024",
    cats: ["grafica","wedding"], 
    desc:  `<strong>Amsterdam 2024 - Wedding Invitation e allestimento</strong>
<strong>realizzato con Maddalena Timossi,
in collaborazione per Ottagono.Design</strong>

<strong>Invito di matrimonio — "Amsterdam, una storia in tre atti"</strong><br><br>
I <strong>futuri sposi</strong> desideravano che l'invito non fosse solo un cartoncino con data e indirizzo, ma un <strong>ricordo da conservare</strong>: un frammento della loro storia capace di emozionare chi lo riceve.

La scena è la <strong>facciata della loro casa olandese</strong>, disegnata nel blu intenso che richiama la <strong>ceramica di Delft</strong>. L'illustrazione si legge come un racconto in <strong>tre atti</strong>.

L'invito arriva in una <strong>busta decorata</strong> dentro e fuori, chiusa da <strong>ceralacca blu</strong> e <strong>timbro personalizzato</strong>: un gesto tattile, quasi una carezza.

<strong>Risultato</strong> — Un sistema delicato e coerente che unisce <strong>racconto personale</strong> e <strong>cura artigianale</strong>, trasformando invito e allestimento in un'esperienza da <strong>sfogliare</strong>, <strong>toccare</strong> e <strong>custodire</strong>.`, 
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  },

  "Concept Villa Dubai": { 
    title: "Concept Villa Dubai", 
    meta: "Milano · 2023",
    cats: ["architettura","bimai"], 
    desc: `<strong>Milano 2023 - Concorso internazionale Dubai</strong>
<strong>realizzato con Tecla Caroli</strong>

Progetto presentato per un <strong>nuovo quartiere residenziale di lusso</strong> a Dubai, su lotto con <strong>dimensioni e funzioni prestabilite</strong>. Obiettivo: una villa contemporanea che unisca <strong>comfort</strong>, <strong>identità locale</strong> e <strong>sostenibilità</strong> ambientale, energetica ed economica.

<strong>Concept</strong><br>
Volumi bianchi compatti, scavati da <strong>archi</strong> e <strong>oculi</strong>, dialogano con una grande parete filtrante in laterizio ispirata alla <strong>mashrabiya</strong>: uno schermo poroso che offre <strong>privacy</strong>, controllo dell'abbagliamento e ventilazione.

<strong>Valore</strong><br>
VILLA F mette al centro <strong>le persone</strong> (benessere e qualità dell'abitare), il <strong>pianeta</strong> (riduzione di consumi ed emissioni) e il <strong>profitto</strong> (gestione efficiente delle risorse).`, 
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  }
};

export const CATEGORIES = [
  { id: "all", label: "Tutti" },
  { id: "architettura", label: "Architettura" },
  { id: "artigianato", label: "Artigianato" }, 
  { id: "grafica", label: "Grafica" },
  { id: "bimai", label: "BIM+AI" },
  { id: "wedding", label: "Wedding" }
];