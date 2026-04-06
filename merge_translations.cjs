const fs = require('fs');
const path = require('path');

const data = {
  en: {
    home: { benefits: { suppTitle: "Support", supp: "Link to management & department heads", suppLink: "/services", helpTitle: "Help", help: "Relieve socially disadvantaged families", helpLink: "/services", infoTitle: "Inform", info: "Tutoring, courses, psychological help", infoLink: "/news", entTitle: "Entertain", ent: "Proms, graduation parties, Barbara celebration", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "Back to Overview", titleHighlight: "Nobody is left behind.", intro: "A central concern of the Parents' Association is to enable students from financially disadvantaged families to participate in school events. We help where state subsidies are insufficient or arrive too late.",
        points: ["Grant for school weeks (sports & project weeks)", "Support with material costs", "Individual emergency aid"],
        whoTitle: "Who can apply?", whoDesc: "All legal guardians of students at HTL Mödling who are members of the Parents' Association can apply. Support is provided discreetly and unbureaucratically after verification of social need.", confidential: "* All applications are strictly confidential.",
        processTitle: "Funding Process",
        steps: [
          { step: "01", title: "Submit Application", desc: "Send us a request via the contact form or email." },
          { step: "02", title: "Review", desc: "The board will review your application promptly and discreetly." },
          { step: "03", title: "Payment", desc: "Upon approval, the amount will be transferred directly to the school or organizer." }
        ],
        qTitle: "Questions about funding?", qDesc: "We are happy to advise you without obligation and support you with the application process.", contactBtn: "Contact Us Now"
      },
      tutoringPage: {
        back: "Back to Overview", badge: "Success Together", titleHighlight: "The HTL Tutoring Network", intro: "Nobody knows the pitfalls of an exam better than someone who has already passed it. Our peer-to-peer tutoring system pairs motivated upper-school students with students who need support in specific subjects.",
        stats: [{ title: "Over 50 Tutors", desc: "Across all subjects" }, { title: "Fair Prices", desc: "Within the HTL" }],
        findTitle: "How do I find tutoring?", findSteps: ["Check the current notice board in the hall.", "Ask the student council (SV) directly.", "Use our contact form for mediation.", "Join the official Discord/Messenger group."],
        popularTitle: "Popular Subjects", subjects: ["Mathematics", "Applied Computer Science", "Electrical Engineering", "Mechanics", "Programming", "English", "Economics", "Laboratory Exercises"],
        ctaTitle: "Want to become a tutor yourself?", ctaDesc: "Help your classmates, deepen your own knowledge, and earn some extra money. We support you with the mediation.", ctaBtn: "Apply as a Tutor Now",
        noteTitle: "Important Notice", noteDesc: "Tutoring takes place on a private basis between students. The Parents' Association only provides the platform and contacts. We recommend fair fees between €10 and €15 per hour."
      },
      coursesPage: {
        back: "Back to Overview", titleHighlight: "Additional qualifications for a head start.", intro: "We support the acquisition of internationally recognized certificates and special training that go beyond the regular curriculum. This strengthens the job prospects of our graduates.",
        items: [
          { title: "ECDL Certification", desc: "The European Computer Driving Licence for all grades.", badge: "Start: WS 2025" },
          { title: "Injection Molding Tech", desc: "Special training for mechanical and plastics engineering.", badge: "Remaining Places" },
          { title: "Safety Training", desc: "Additional qualification for upper-school workshop operations.", badge: "Mandatory Module" }
        ],
        detailsBtn: "Request Details", whyBadge: "Why Additional Courses?", whyTitle: "Your Resume Plus.",
        benefits: [{ label: "Certification", detail: "International Validity" }, { label: "Advantages", detail: "Job Market Advantage" }],
        points: ["Cost-effective access through the Parents' Association", "Directly at the school site after classes", "Practical training by experts", "Official certificates and diplomas"]
      }
    }
  },
  es: {
    home: { benefits: { suppTitle: "Apoyar", supp: "Enlace con la dirección y jefes de departamento", suppLink: "/services", helpTitle: "Ayudar", help: "Aliviar a familias con desventajas sociales", helpLink: "/services", infoTitle: "Informar", info: "Tutorías, cursos, ayuda psicológica", infoLink: "/news", entTitle: "Entretener", ent: "Bailes, fiestas de graduación, celebración de Bárbara", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "Volver a la vista general", titleHighlight: "Nadie se queda atrás.", intro: "Una preocupación central de la Asociación de Padres es permitir que estudiantes de familias económicamente desfavorecidas participen en eventos escolares. Ayudamos donde los subsidios estatales son insuficientes o llegan demasiado tarde.",
        points: ["Beca para semanas escolares (deportes y proyectos)", "Apoyo con costos de materiales", "Ayuda de emergencia individual"],
        whoTitle: "¿Quién puede aplicar?", whoDesc: "Pueden aplicar todos los tutores legales de los estudiantes de HTL Mödling que sean miembros de la Asociación de Padres. El apoyo se brinda de manera discreta y sin burocracia tras la verificación de la necesidad social.", confidential: "* Todas las solicitudes son estrictamente confidenciales.",
        processTitle: "Proceso de Financiación",
        steps: [
          { step: "01", title: "Presentar Solicitud", desc: "Envíenos una solicitud a través del formulario de contacto o por correo electrónico." },
          { step: "02", title: "Revisión", desc: "La junta revisará su solicitud de manera rápida y discreta." },
          { step: "03", title: "Pago", desc: "Una vez aprobado, el importe se transferirá directamente a la escuela o al organizador." }
        ],
        qTitle: "¿Preguntas sobre financiación?", qDesc: "Estaremos encantados de asesorarle sin compromiso y apoyarle con el proceso de solicitud.", contactBtn: "Contáctenos Ahora"
      },
      tutoringPage: {
        back: "Volver a la vista general", badge: "Éxito Juntos", titleHighlight: "La Red de Tutoría de HTL", intro: "Nadie conoce los obstáculos de un examen mejor que alguien que ya lo ha aprobado. Nuestro sistema de tutoría entre pares une a estudiantes motivados de los últimos cursos con aquellos que necesitan apoyo en ciertas materias.",
        stats: [{ title: "Más de 50 Tutores", desc: "En todas las materias" }, { title: "Precios Justos", desc: "Dentro de la HTL" }],
        findTitle: "¿Cómo encuentro una tutoría?", findSteps: ["Revise el tablón de anuncios actual en el vestíbulo.", "Pregunte directamente al consejo estudiantil (SV).", "Use nuestro formulario de contacto para mediación.", "Únase al grupo oficial de Discord/Messenger."],
        popularTitle: "Materias Populares", subjects: ["Matemáticas", "Informática Aplicada", "Ingeniería Eléctrica", "Mecánica", "Programación", "Inglés", "Economía", "Prácticas de Laboratorio"],
        ctaTitle: "¿Quieres ser tutor?", ctaDesc: "Ayuda a tus compañeros, profundiza tus conocimientos y gana un dinero extra. Te apoyamos en la mediación.", ctaBtn: "Aplica como Tutor Ahora",
        noteTitle: "Aviso Importante", noteDesc: "La tutoría se realiza de forma privada entre los estudiantes. La Asociación de Padres solo proporciona la plataforma y los contactos. Recomendamos tarifas justas entre 10€ y 15€ por hora."
      },
      coursesPage: {
        back: "Volver a la vista general", titleHighlight: "Cualificaciones adicionales para destacar.", intro: "Apoyamos la adquisición de certificados reconocidos internacionalmente y formación especial que van más allá del plan de estudios regular. Esto fortalece las perspectivas laborales de nuestros graduados.",
        items: [
          { title: "Certificación ECDL", desc: "La Licencia Europea de Manejo de Computadoras.", badge: "Inicio: Iniv. 2025" },
          { title: "Técnica de Moldeo", desc: "Formación especial para ingeniería mecánica y de plásticos.", badge: "Plazas restantes" },
          { title: "Formación en Seguridad", desc: "Cualificación adicional para talleres.", badge: "Módulo Obligatorio" }
        ],
        detailsBtn: "Solicitar Detalles", whyBadge: "¿Por qué cursos adicionales?", whyTitle: "Un plus para tu currículum.",
        benefits: [{ label: "Certificación", detail: "Validez Internacional" }, { label: "Ventajas", detail: "Ventaja Laboral" }],
        points: ["Acceso rentable a través de la Asociación de Padres", "Directamente en la escuela después de clases", "Formación práctica por expertos", "Certificados oficiales"]
      }
    }
  },
  fr: {
    home: { benefits: { suppTitle: "Soutenir", supp: "Lien avec la direction et les chefs de département", suppLink: "/services", helpTitle: "Aider", help: "Soulager les familles socialement défavorisées", helpLink: "/services", infoTitle: "Informer", info: "Tutorat, cours, aide psychologique", infoLink: "/news", entTitle: "Divertir", ent: "Bals, fêtes de remise des diplômes", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "Retour à l'aperçu", titleHighlight: "Personne n'est laissé pour compte.", intro: "L'Association des Parents tient à permettre aux élèves de familles modestes de participer aux activités scolaires. Nous aidons là où les subventions de l'État sont insuffisantes ou tardent.",
        points: ["Aide pour les semaines scolaires (sport et projets)", "Soutien pour le coût du matériel", "Aide d'urgence individuelle"],
        whoTitle: "Qui peut faire une demande ?", whoDesc: "Tous les tuteurs légaux des élèves du HTL Mödling membres de l'Association des Parents. Le soutien est discret et non bureaucratique après vérification.", confidential: "* Toutes les demandes sont strictement confidentielles.",
        processTitle: "Processus de financement",
        steps: [
          { step: "01", title: "Soumettre", desc: "Envoyez-nous une demande via le formulaire ou par email." },
          { step: "02", title: "Examen", desc: "Le conseil examinera votre demande rapidement et discrètement." },
          { step: "03", title: "Paiement", desc: "Après approbation, le montant sera transféré à l'école." }
        ],
        qTitle: "Des questions sur l'aide ?", qDesc: "Nous vous conseillons et vous accompagnons sans engagement.", contactBtn: "Nous Contacter"
      },
      tutoringPage: {
        back: "Retour à l'aperçu", badge: "Le succès ensemble", titleHighlight: "Le réseau de tutorat HTL", intro: "Personne ne connaît mieux les pièges d'un examen que celui qui l'a déjà réussi. Notre système de tutorat par les pairs associe des élèves motivés avec ceux qui ont besoin de soutien.",
        stats: [{ title: "Plus de 50 tuteurs", desc: "Toutes matières" }, { title: "Prix équitables", desc: "Au sein de l'école" }],
        findTitle: "Comment trouver un tuteur ?", findSteps: ["Consultez le panneau d'affichage.", "Demandez au conseil des élèves.", "Utilisez notre formulaire de contact.", "Rejoignez le groupe Discord officiel."],
        popularTitle: "Matières Populaires", subjects: ["Mathématiques", "Informatique", "Électrotechnique", "Mécanique", "Programmation", "Anglais", "Économie", "Laboratoires"],
        ctaTitle: "Envie de devenir tuteur ?", ctaDesc: "Aidez vos camarades et gagnez un peu d'argent. Nous vous soutenons dans vos démarches.", ctaBtn: "Postuler comme tuteur",
        noteTitle: "Avis Important", noteDesc: "Le tutorat se fait à titre privé. L'Association des Parents ne fournit que la plateforme. Nous recommandons un tarif entre 10€ et 15€/heure."
      },
      coursesPage: {
        back: "Retour à l'aperçu", titleHighlight: "Des qualifications pour prendre de l'avance.", intro: "Nous soutenons l'acquisition de certificats reconnus au-delà du programme scolaire, renforçant ainsi les perspectives d'emploi de nos diplômés.",
        items: [
          { title: "Certification ECDL", desc: "Passeport de Compétences Informatique Européen.", badge: "Début : Hiv. 2025" },
          { title: "Moulage par injection", desc: "Formation pour génie mécanique et plastiques.", badge: "Places restantes" },
          { title: "Formation Sécurité", desc: "Qualification obligatoire pour les ateliers.", badge: "Module Obligatoire" }
        ],
        detailsBtn: "Demander des détails", whyBadge: "Pourquoi des cours ? ", whyTitle: "Un plus pour votre CV.",
        benefits: [{ label: "Certification", detail: "Validité Internationale" }, { label: "Avantages", detail: "Avantage sur le marché" }],
        points: ["Accès économique via l'Association", "Directement à l'école après les cours", "Formation par des experts", "Certificats officiels"]
      }
    }
  },
  it: {
    home: { benefits: { suppTitle: "Sostenere", supp: "Collegamento con la direzione e i capi dipartimento", suppLink: "/services", helpTitle: "Aiutare", help: "Sostenere le famiglie svantaggiate", helpLink: "/services", infoTitle: "Informare", info: "Ripetizioni, corsi, aiuto psicologico", infoLink: "/news", entTitle: "Intrattenere", ent: "Ballo scolastico, feste di maturità", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "Indietro", titleHighlight: "Nessuno viene lasciato indietro.", intro: "Una preoccupazione centrale dell'Associazione dei Genitori è consentire agli studenti di famiglie svantaggiate di partecipare agli eventi scolastici. Aiutiamo dove i sussidi statali non bastano.",
        points: ["Sussidio per settimane scolastiche", "Supporto per costi dei materiali", "Aiuto d'emergenza individuale"],
        whoTitle: "Chi può fare domanda?", whoDesc: "Tutti i tutori legali degli studenti di HTL Mödling membri dell'Associazione. Il supporto viene fornito in modo discreto dopo la verifica del bisogno.", confidential: "* Tutte le richieste sono strettamente confidenziali.",
        processTitle: "Processo di finanziamento",
        steps: [
          { step: "01", title: "Invia richiesta", desc: "Inviaci un modulo o un'e-mail." },
          { step: "02", title: "Revisione", desc: "Il comitato esaminerà la tua richiesta in modo discreto." },
          { step: "03", title: "Pagamento", desc: "Dopo l'approvazione, l'importo sarà trasferito direttamente alla scuola." }
        ],
        qTitle: "Domande sui sussidi?", qDesc: "Siamo felici di consigliarti senza impegno e supportarti nella procedura.", contactBtn: "Contattaci ora"
      },
      tutoringPage: {
        back: "Indietro", badge: "Successo Insieme", titleHighlight: "La rete di tutoraggio HTL", intro: "Nessuno conosce le insidie di un esame meglio di chi lo ha già superato. Il nostro sistema unisce studenti motivati con chi ha bisogno di supporto.",
        stats: [{ title: "Oltre 50 tutor", desc: "In tutte le materie" }, { title: "Prezzi equi", desc: "All'interno dell'HTL" }],
        findTitle: "Come trovo un tutor?", findSteps: ["Controlla la bacheca nell'atrio.", "Chiedi al consiglio studentesco.", "Usa il nostro modulo di contatto.", "Unisciti al gruppo Discord ufficiale."],
        popularTitle: "Materie Popolari", subjects: ["Matematica", "Informatica", "Elettrotecnica", "Meccanica", "Programmazione", "Inglese", "Economia", "Esercitazioni in laboratorio"],
        ctaTitle: "Vuoi diventare un tutor?", ctaDesc: "Aiuta i tuoi compagni, approfondisci le tue conoscenze e guadagna. Noi ti aiutiamo a connetterti.", ctaBtn: "Candidati come tutor",
        noteTitle: "Avviso Importante", noteDesc: "Il tutoraggio si svolge su base privata. L'Associazione dei Genitori fornisce solo contatti e piattaforma. Consigliamo 10€ - 15€ all'ora."
      },
      coursesPage: {
        back: "Indietro", titleHighlight: "Qualifiche extra per il tuo vantaggio.", intro: "Sosteniamo l'acquisizione di certificati riconosciuti e formazioni speciali che rafforzano le prospettive lavorative dei nostri diplomati.",
        items: [
          { title: "Certificazione ECDL", desc: "Patente Europea del Computer.", badge: "Inizio: Inv 2025" },
          { title: "Stampaggio Iniezione", desc: "Formazione speciale per ingegneria meccanica.", badge: "Posti rimanenti" },
          { title: "Formazione Sicurezza", desc: "Qualifica per le operazioni in officina.", badge: "Modulo Obbligatorio" }
        ],
        detailsBtn: "Richiedi Dettagli", whyBadge: "Perché corsi extra?", whyTitle: "Un vantaggio per il tuo CV.",
        benefits: [{ label: "Certificazione", detail: "Validità Internazionale" }, { label: "Vantaggi", detail: "Vantaggio sul Mercato Lavoro" }],
        points: ["Accesso economico", "Direttamente a scuola", "Formazione pratica con esperti", "Certificati ufficiali"]
      }
    }
  },
  pl: {
    home: { benefits: { suppTitle: "Wspierać", supp: "Łącznik z dyrekcją i wydziałami", suppLink: "/services", helpTitle: "Pomagać", help: "Odciążenie rodzin w trudnej sytuacji", helpLink: "/services", infoTitle: "Informować", info: "Korepetycje, kursy, pomoc psychologiczna", infoLink: "/news", entTitle: "Bawić", ent: "Bale, imprezy maturalne", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "Powrót", titleHighlight: "Nikt nie zostaje z tyłu.", intro: "Głównym celem Stowarzyszenia Rodziców jest umożliwienie uczniom z uboższych rodzin udziału w życiu szkoły. Pomagamy tam, gdzie brakuje dotacji państwowych.",
        points: ["Dofinansowanie tygodni szkolnych", "Wsparcie w kosztach materiałów", "Indywidualna pomoc w nagłych wypadkach"],
        whoTitle: "Kto może aplikować?", whoDesc: "Wszyscy prawni opiekunowie uczniów HTL Mödling, będący członkami Stowarzyszenia. Pomoc udzielana jest dyskretnie.", confidential: "* Wszystkie wnioski są ściśle tajne.",
        processTitle: "Proces finansowania",
        steps: [
          { step: "01", title: "Złóż wniosek", desc: "Wyślij zapytanie przez formularz lub e-mail." },
          { step: "02", title: "Weryfikacja", desc: "Zarząd dyskretnie rozpatrzy Twój wniosek." },
          { step: "03", title: "Wypłata", desc: "Po zatwierdzeniu kwota trafi do szkoły." }
        ],
        qTitle: "Pytania o dofinansowanie?", qDesc: "Chętnie doradzimy i pomożemy.", contactBtn: "Skontaktuj się z nami"
      },
      tutoringPage: {
        back: "Powrót", badge: "Sukces Razem", titleHighlight: "Sieć Korepetycji HTL", intro: "Nikt nie zna pułapek egzaminu lepiej niż ten, kto go już zdał. Nasz system łączy zmotywowanych uczniów starszych klas z potrzebującymi wsparcia.",
        stats: [{ title: "Ponad 50 korepetytorów", desc: "Przekrój przedmiotów" }, { title: "Uczciwe ceny", desc: "Wewnątrz HTL" }],
        findTitle: "Jak znaleźć korepetycje?", findSteps: ["Sprawdź tablicę ogłoszeń.", "Zapytaj samorząd uczniowski.", "Użyj naszego formularza.", "Dołącz do grupy na Discordzie."],
        popularTitle: "Popularne Przedmioty", subjects: ["Matematyka", "Informatyka", "Elektrotechnika", "Mechanika", "Programowanie", "Angielski", "Ekonomia", "Laboratoria"],
        ctaTitle: "Chcesz zostać korepetytorem?", ctaDesc: "Pomagaj innym i zarabiaj. Zapewniamy platformę.", ctaBtn: "Zgłoś się",
        noteTitle: "Ważna Informacja", noteDesc: "Korepetycje odbywają się na zasadach prywatnych. Zalecamy uczciwą stawkę 10€ - 15€ za godzinę."
      },
      coursesPage: {
        back: "Powrót", titleHighlight: "Dodatkowe kwalifikacje na start.", intro: "Wspieramy zdobywanie certyfikatów i szkoleń poza programem nauczania, wzmacniając perspektywy zawodowe absolwentów.",
        items: [
          { title: "Certyfikat ECDL", desc: "Europejskie Prawo Jazdy na Komputer.", badge: "Start: Zima 2025" },
          { title: "Technika wtryskowa", desc: "Szkolenie z inżynierii tworzyw.", badge: "Ostatnie miejsca" },
          { title: "Szkolenie BHP", desc: "Dodatkowa kwalifikacja do warsztatów.", badge: "Moduł obowiązkowy" }
        ],
        detailsBtn: "Pokaż szczegóły", whyBadge: "Po co dodatkowe kursy?", whyTitle: "Plus do Twojego CV.",
        benefits: [{ label: "Certyfikacja", detail: "Ważność międzynarodowa" }, { label: "Korzyści", detail: "Przewaga na rynku pracy" }],
        points: ["Przystępny dostęp", "Zajęcia na terenie szkoły", "Praktyczne szkolenia z ekspertami", "Oficjalne certyfikaty"]
      }
    }
  },
  pt: {
    home: { benefits: { suppTitle: "Apoiar", supp: "Ligação com diretoria e chefes", suppLink: "/services", helpTitle: "Ajudar", help: "Apoiar famílias desfavorecidas", helpLink: "/services", infoTitle: "Informar", info: "Explicações, cursos, apoio psicológico", infoLink: "/news", entTitle: "Entreter", ent: "Bailes, festas de finalistas", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "Voltar", titleHighlight: "Ninguém fica para trás.", intro: "A Associação de Pais visa permitir que alunos de famílias carentes participem em eventos escolares. Ajudamos onde os subsídios não chegam.",
        points: ["Subsídio para semanas escolares", "Apoio com materiais", "Ajuda de emergência"],
        whoTitle: "Quem pode pedir?", whoDesc: "Todos os encarregados de educação membros da Associação. O apoio é tratado com discrição após verificação da necessidade.", confidential: "* Tudo é estritamente confidencial.",
        processTitle: "Processo",
        steps: [
          { step: "01", title: "Submeter pedido", desc: "Envie pelo formulário ou email." },
          { step: "02", title: "Análise", desc: "A direção analisa com discrição." },
          { step: "03", title: "Pagamento", desc: "Após aprovação, o pagamento vai direto para a escola." }
        ],
        qTitle: "Questões?", qDesc: "Aconselhamos sem compromisso.", contactBtn: "Contactar"
      },
      tutoringPage: {
        back: "Voltar", badge: "Sucesso Juntos", titleHighlight: "Rede de Explicações HTL", intro: "Ninguém sabe as dificuldades de um exame, senão quem o passou. O nosso sistema junta alunos mais velhos a quem precisa.",
        stats: [{ title: "Mais de 50 explicadores", desc: "Várias disciplinas" }, { title: "Preços Justos", desc: "Dentro da Escola" }],
        findTitle: "Como encontrar?", findSteps: ["Veja a vitrine na escola.", "Pergunte à associação de estudantes.", "Use o formulário.", "Junte-se ao Discord oficial."],
        popularTitle: "Disciplinas Populares", subjects: ["Matemática", "Informática", "Eletrotécnica", "Mecânica", "Programação", "Inglês", "Economia", "Laboratório"],
        ctaTitle: "Queres ser explicador?", ctaDesc: "Ajuda os outros e ganha algum dinheiro. Nós apoiamos no contacto.", ctaBtn: "Candidatar",
        noteTitle: "Aviso", noteDesc: "As explicações são a título privado. Aconselhamos entre 10€ e 15€/hora."
      },
      coursesPage: {
        back: "Voltar", titleHighlight: "Qualificações adicionais.", intro: "Apoiamos certificados reconhecidos e formação além do currículo normal.",
        items: [
          { title: "Certificação ECDL", desc: "Carta Europeia de Computador.", badge: "Início: Inverno 2025" },
          { title: "Moldagem por Injeção", desc: "Formação para eng. mecânica.", badge: "Últimas Vagas" },
          { title: "Formação em Segurança", desc: "Formação para oficinas.", badge: "Obrigatório" }
        ],
        detailsBtn: "Ver detalhes", whyBadge: "Porquê cursos extra?", whyTitle: "Uma mais valia no CV.",
        benefits: [{ label: "Certificação", detail: "Internacional" }, { label: "Vantagem", detail: "No mercado de trabalho" }],
        points: ["Acesso económico", "Aulas na escola", "Formação prática", "Certificados oficiais"]
      }
    }
  },
  ar: {
    home: { benefits: { suppTitle: "دعم", supp: "حلقة وصل مع الإدارة", suppLink: "/services", helpTitle: "مساعدة", help: "تخفيف العبء عن العائلات", helpLink: "/services", infoTitle: "إعلام", info: "دروس خصوصية، دورات", infoLink: "/news", entTitle: "ترفيه", ent: "حفلات التخرج والمناسبات", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "العودة", titleHighlight: "لا أحد يُترك خلف الركب.", intro: "هدفنا تمكين جميع الطلاب من المشاركة في الفعاليات المدرسية رغم الصعوبات المالية.",
        points: ["منح للأسابيع المدرسية", "دعم تكاليف المواد", "مساعدة طارئة"],
        whoTitle: "من يمكنه التقديم؟", whoDesc: "أي ولي أمر عضو في جمعية الآباء. الدعم سري تماماً.", confidential: "* جميع الطلبات سرية للغاية.",
        processTitle: "آلية الدعم",
        steps: [
          { step: "01", title: "تقديم الطلب", desc: "أرسل الطلب عبر النموذج أو البريد." },
          { step: "02", title: "المراجعة", desc: "تقوم الإدارة بالمراجعة بسرية." },
          { step: "03", title: "الدفع", desc: "يتم التحويل للمدرسة مباشرة." }
        ],
        qTitle: "أسئلة؟", qDesc: "نحن هنا للمساعدة في أي وقت بدون التزام.", contactBtn: "تواصل معنا"
      },
      tutoringPage: {
        back: "العودة", badge: "النجاح معاً", titleHighlight: "شبكة الدروس الخصوصية", intro: "نربط الطلاب المتفوقين بمن يحتاج إلى دعم دراسي في بيئة داعمة.",
        stats: [{ title: "أكثر من 50 مدرس", desc: "في جميع المواد" }, { title: "أسعار عادلة", desc: "داخل المدرسة" }],
        findTitle: "كيف أجد مدرساً؟", findSteps: ["راجع لوحة الإعلانات.", "اسأل مجلس الطلاب.", "استخدم النموذج الإلكتروني.", "انضم لمجموعتنا على ديسكورد."],
        popularTitle: "مواد شائعة", subjects: ["رياضيات", "معلوماتية", "كهرباء", "ميكانيك", "برمجة", "إنجليزي", "اقتصاد", "مختبرات"],
        ctaTitle: "هل تريد أن تصبح مدرساً؟", ctaDesc: "ساعد زملائك واكسب بعض المال. نحن ندعمك.", ctaBtn: "قدم الآن",
        noteTitle: "ملاحظة هامة", noteDesc: "الدروس تتم بشكل خاص. جمعية الآباء توفر المنصة فقط. السعر الموصى به 10-15 يورو للساعة."
      },
      coursesPage: {
        back: "العودة", titleHighlight: "مؤهلات إضافية للمستقبل.", intro: "ندعم الحصول على شهادات معتمدة دولياً لتعزيز فرص العمل لطلابنا.",
        items: [
          { title: "شهادة ECDL", desc: "الرخصة الأوروبية لقيادة الحاسوب.", badge: "البداية: 2025" },
          { title: "هندسة القولبة", desc: "دورة للميكانيك والبلاستيك.", badge: "أماكن محدودة" },
          { title: "دورة أمان", desc: "مؤهل لورشات العمل.", badge: "وحدة إلزامية" }
        ],
        detailsBtn: "طلب التفاصيل", whyBadge: "لماذا هذه الدورات؟", whyTitle: "إضافة قوية لسيرتك.",
        benefits: [{ label: "شهادة", detail: "صلاحية دولية" }, { label: "مزايا", detail: "في سوق العمل" }],
        points: ["تكلفة منخفضة", "في المدرسة مباشرة", "تعليم عملي", "شهادات رسمية"]
      }
    }
  },
  tr: {
    home: { benefits: { suppTitle: "Destekle", supp: "Yönetim ile bağlantı", suppLink: "/services", helpTitle: "Yardım Et", help: "Dar gelirli ailelere destek", helpLink: "/services", infoTitle: "Bilgilendir", info: "Özel ders, kurslar, psikolojik destek", infoLink: "/news", entTitle: "Eğlendir", ent: "Mezuniyet baloları, etkinlikler", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "Geri Dön", titleHighlight: "Kimse geride kalmaz.", intro: "Veliler Derneği, maddi sıkıntı çeken ailelerin öğrencilerinin okul etkinliklerine katılmasını sağlamayı amaçlar.",
        points: ["Okul haftaları için hibe", "Kırtasiye ve materyal desteği", "Bireysel acil yardım"],
        whoTitle: "Kimler başvurabilir?", whoDesc: "Okul velileri derneği üyesi olan herkes başvurabilir. Destek gizlilikle sağlanır.", confidential: "* Tüm başvurular kesinlikle gizlidir.",
        processTitle: "Destek Süreci",
        steps: [
          { step: "01", title: "Başvuru Yap", desc: "Form veya e-posta yoluyla bize ulaşın." },
          { step: "02", title: "İnceleme", desc: "Yönetim başvurunuzu hızla ve gizlilikle inceler." },
          { step: "03", title: "Ödeme", desc: "Onaydan sonra okul veya organizatöre ödeme yapılır." }
        ],
        qTitle: "Sorularınız mı var?", qDesc: "Size ücretsiz danışmanlık yapmaktan mutluluk duyarız.", contactBtn: "Şimdi İletişime Geçin"
      },
      tutoringPage: {
        back: "Geri Dön", badge: "Birlikte Başarı", titleHighlight: "HTL Özel Ders Ağı", intro: "Sınav stresini en iyi o sınavı geçmiş biri bilir. Akran özel ders sistemimiz üst sınıf öğrencileriyle yardıma ihtiyacı olanları buluşturur.",
        stats: [{ title: "50'den fazla eğitmen", desc: "Tüm derslerde" }, { title: "Adil Fiyatlar", desc: "Okul içi" }],
        findTitle: "Nasıl özel ders bulurum?", findSteps: ["Panodaki ilanlara bakın.", "Öğrenci temsilcisine (SV) sorun.", "İletişim formumuzu kullanın.", "Discord grubumuza katılın."],
        popularTitle: "Popüler Dersler", subjects: ["Matematik", "Uygulamalı Bilişim", "Elektroteknik", "Mekanik", "Programlama", "İngilizce", "Ekonomi", "Laboratuvar Dersleri"],
        ctaTitle: "Eğitmen olmak ister misin?", ctaDesc: "Sınıf arkadaşlarına yardım et, bilgilerini pekiştir ve para kazan.", ctaBtn: "Eğitmen Olarak Başvur",
        noteTitle: "Önemli Not", noteDesc: "Özel dersler öğrenciler arası özel bir anlaşmadır. Tavsiye edilen ücret saati 10€ - 15€ arasıdır."
      },
      coursesPage: {
        back: "Geri Dön", titleHighlight: "Öne çıkmak için ek nitelikler.", intro: "Düzenli müfredatın ötesine geçen sertifika ve eğitimleri destekleyerek mezunlarımızın iş imkanlarını güçlendiriyoruz.",
        items: [
          { title: "ECDL Sertifikası", desc: "Avrupa Bilgisayar Ehliyeti.", badge: "Başlangıç: Kış 2025" },
          { title: "Enjeksiyon Kalıplama", desc: "Makine mühendisliği için özel eğitim.", badge: "Son Kontenjanlar" },
          { title: "Güvenlik Eğitimi", desc: "Atölye çalışmaları için ek nitelik.", badge: "Zorunlu Modül" }
        ],
        detailsBtn: "Detay İste", whyBadge: "Neden ek kurslar?", whyTitle: "CV'niz için bir artı.",
        benefits: [{ label: "Sertifika", detail: "Uluslararası Geçerlilik" }, { label: "Avantajlar", detail: "İş Piyasasında Avantaj" }],
        points: ["Dernek üzerinden uygun fiyatlı katılım", "Okulda ders sonrası yerinde eğitim", "Uzmanlardan uygulamalı eğitim", "Resmi sertifikalar"]
      }
    }
  },
  ua: {
    home: { benefits: { suppTitle: "Підтримка", supp: "Зв'язок з дирекцією", suppLink: "/services", helpTitle: "Допомога", help: "Допомога соціально вразливим сім'ям", helpLink: "/services", infoTitle: "Інформування", info: "Репетиторство, курси", infoLink: "/news", entTitle: "Розваги", ent: "Бали, випускні", entLink: "/news" } },
    services: {
      socialSupport: {
        back: "Назад", titleHighlight: "Ніхто не залишається осторонь.", intro: "Головна мета Асоціації батьків - дати можливість учням з малозабезпечених сімей брати участь у шкільних заходах.",
        points: ["Грант на шкільні тижні", "Підтримка витрат", "Індивідуальна допомога"],
        whoTitle: "Хто може подати заявку?", whoDesc: "Всі батьки, які є членами Асоціації. Підтримка надається конфіденційно.", confidential: "* Всі заявки є суворо конфіденційними.",
        processTitle: "Процес фінансування",
        steps: [
          { step: "01", title: "Подача заявки", desc: "Надішліть форму або email." },
          { step: "02", title: "Розгляд", desc: "Правління конфіденційно розгляне вашу заявку." },
          { step: "03", title: "Оплата", desc: "Після затвердження кошти перераховуються школі." }
        ],
        qTitle: "Питання?", qDesc: "Ми з радістю проконсультуємо вас.", contactBtn: "Зв'язатися"
      },
      tutoringPage: {
        back: "Назад", badge: "Успіх разом", titleHighlight: "Мережа репетиторів HTL", intro: "Ніхто не знає труднощі іспиту краще, ніж той, хто його вже склав. Наша система об'єднує старшокласників з тими, хто потребує допомоги.",
        stats: [{ title: "Понад 50 репетиторів", desc: "З різних предметів" }, { title: "Справедливі ціни", desc: "Всередині школи" }],
        findTitle: "Як знайти репетитора?", findSteps: ["Перевірте дошку оголошень.", "Запитайте учнівську раду.", "Використовуйте нашу контактну форму.", "Приєднуйтесь до Discord групи."],
        popularTitle: "Популярні предмети", subjects: ["Математика", "Інформатика", "Електротехніка", "Механіка", "Програмування", "Англійська", "Економіка", "Лабораторні"],
        ctaTitle: "Хочеш бути репетитором?", ctaDesc: "Допомагай іншим та заробляй. Ми допомагаємо з пошуком учнів.", ctaBtn: "Подати заявку",
        noteTitle: "Важливо", noteDesc: "Репетиторство є приватною справою. Ми рекомендуємо 10-15 євро за годину."
      },
      coursesPage: {
        back: "Назад", titleHighlight: "Додаткові кваліфікації.", intro: "Ми підтримуємо отримання міжнародних сертифікатів, що перевищують шкільну програму.",
        items: [
          { title: "Сертифікація ECDL", desc: "Європейські комп'ютерні права.", badge: "Початок: Зима 2025" },
          { title: "Техніка литва під тиском", desc: "Спецкурс для машинобудування.", badge: "Залишок місць" },
          { title: "Навчання з безпеки", desc: "Кваліфікація для майстерень.", badge: "Обов'язково" }
        ],
        detailsBtn: "Детальніше", whyBadge: "Навіщо курси?", whyTitle: "Плюс до резюме.",
        benefits: [{ label: "Сертифікація", detail: "Міжнародна дійсність" }, { label: "Переваги", detail: "На ринку праці" }],
        points: ["Доступні ціни через Асоціацію", "Заняття в школі після уроків", "Практичне навчання", "Офіційні сертифікати"]
      }
    }
  }
};

const localesDir = path.join(process.cwd(), 'src', 'locales');
for (const [lang, trans] of Object.entries(data)) {
  const filePath = path.join(localesDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) continue;
  
  let content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  // Deep merge
  function mergeDeep(target, source) {
    for (const key in source) {
      if (source[key] instanceof Object && !Array.isArray(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  }
  
  content = mergeDeep(content, trans);
  fs.writeFileSync(filePath, JSON.stringify(content, null, 4));
}

console.log('Translations successfully merged!');
