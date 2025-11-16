const quizData = {
  microbiology: {
    morphology: {
      title: "Bacterial Morphology",
      questions: [
        { q: "Which of the following lacks a cell wall?", type: "mcq", options: ["Mycoplasma", "Mycobacteria", "Staphylococci", "Spirochetes"], a: 0 },
        { q: "Which of the following contains N-acetylmuramic acid?", type: "mcq", options: ["Fungi", "Protozoa", "Bacteria", "Mycoplasma"], a: 2 },
        { q: "Which of the following contains dipicolinic acid?", type: "mcq", options: ["Spores", "Vegetative cells", "Capsule", "Flagella"], a: 0 },
        { q: "The cell wall of gram-positive bacteria consists of:", type: "mcq", options: ["Lipid A", "Thin peptidoglycan layer", "Thick peptidoglycan layer", "Outer membrane"], a: 2 },
        { q: "The function of the outer membrane in gram-negative bacteria is:", type: "mcq", options: ["Protection from antibiotics", "Passage of nutrients", "Protection from bile salts", "All of the above"], a: 3 },
        { q: "Which of the following is responsible for endotoxic activity?", type: "mcq", options: ["Lipid A", "O-antigen", "Core polysaccharide", "Peptidoglycan"], a: 0 },
        { q: "Which of the following is true about gram-positive bacteria?", type: "mcq", options: ["Stain red by Gram stain", "Contain teichoic acid", "Have an outer membrane", "Contain porin proteins"], a: 1 },
        { q: "Which of the following is true about gram-negative bacteria?", type: "mcq", options: ["Stain purple by Gram stain", "Lack an outer membrane", "Contain endotoxin", "Have a thick peptidoglycan layer"], a: 2 },
        { q: "Which of the following structures is essential for bacterial viability?", type: "mcq", options: ["Cell wall", "Capsule", "Flagella", "Pili"], a: 0 },
        { q: "Which of the following is a function of the cell membrane?", type: "mcq", options: ["Selective permeability", "Electron transport", "Energy production", "All of the above"], a: 3 },
        { q: "Which of the following is a function of pili?", type: "mcq", options: ["Motility", "Attachment", "Phagocytosis", "Energy production"], a: 1 },
        { q: "Which of the following is true about capsules?", type: "mcq", options: ["Polysaccharide in nature (mostly)", "Protect against phagocytosis", "Used in serological identification", "All of the above"], a: 3 },
        { q: "Which of the following is true about flagella?", type: "mcq", options: ["Organ of motility", "Composed of flagellin protein", "Used for identification (H-antigen)", "All of the above"], a: 3 },
        { q: "Bacteria that are comma-shaped are called:", type: "mcq", options: ["Cocci", "Bacilli", "Vibrios", "Spirilla"], a: 2 },
        { q: "Bacteria that form grape-like clusters are called:", type: "mcq", options: ["Streptococci", "Staphylococci", "Diplococci", "Tetrads"], a: 1 },
        { q: "The counterstain used in Gram staining is:", type: "mcq", options: ["Crystal violet", "Iodine", "Alcohol", "Safranin"], a: 3 },
        { q: "Acid-fast bacteria stain red with:", type: "mcq", options: ["Gram stain", "Ziehl-Neelsen stain", "Giemsa stain", "India ink"], a: 1 },
        { q: "Which structure is used for attachment to surfaces?", type: "mcq", options: ["Flagella", "Capsule", "Pili (Fimbriae)", "Spores"], a: 2 },
        { q: "Plasmids are:", type: "mcq", options: ["Essential for bacterial survival", "Extrachromosomal DNA", "Part of the bacterial chromosome", "Composed of RNA"], a: 1 }
      ]
    },
    physiology: {
      title: "Bacterial Physiology",
      questions: [
        { q: "Bacteria that grow best at 37°C are called:", type: "mcq", options: ["Psychrophiles", "Mesophiles", "Thermophiles", "Hyperthermophiles"], a: 1 },
        { q: "Bacteria that require oxygen for growth are called:", type: "mcq", options: ["Obligate anaerobes", "Facultative anaerobes", "Obligate aerobes", "Aerotolerant anaerobes"], a: 2 },
        { q: "Bacteria that can grow with or without oxygen are called:", type: "mcq", options: ["Obligate anaerobes", "Facultative anaerobes", "Obligate aerobes", "Microaerophiles"], a: 1 },
        { q: "The phase of bacterial growth curve with maximum growth rate is:", type: "mcq", options: ["Lag phase", "Log phase", "Stationary phase", "Decline phase"], a: 1 },
        { q: "The phase where bacterial growth equals death rate is:", type: "mcq", options: ["Lag phase", "Log phase", "Stationary phase", "Decline phase"], a: 2 },
        { q: "Which of these enzymes protects against toxic oxygen products?", type: "mcq", options: ["Catalase", "Superoxide dismutase", "Peroxidase", "All of the above"], a: 3 },
        { q: "Most pathogenic bacteria are:", type: "mcq", options: ["Psychrophiles", "Mesophiles", "Thermophiles", "Halophiles"], a: 1 },
        { q: "Bacteria that grow best in high salt concentrations are:", type: "mcq", options: ["Acidophiles", "Alkaliphiles", "Halophiles", "Barophiles"], a: 2 },
        { q: "The process of converting N2 to NH3 is called:", type: "mcq", options: ["Nitrification", "Denitrification", "Nitrogen fixation", "Ammonification"], a: 2 },
        { q: "Which process yields the most ATP?", type: "mcq", options: ["Aerobic respiration", "Anaerobic respiration", "Fermentation", "Glycolysis"], a: 0 },
        { q: "Fermentation is characterized by:", type: "mcq", options: ["Using oxygen as final electron acceptor", "Using an inorganic molecule as final electron acceptor", "Using an organic molecule as final electron acceptor", "Generating 38 ATP"], a: 2 },
        { q: "The time required for a bacterial population to double is called:", type: "mcq", options: ["Lag time", "Generation time", "Log time", "Stationary time"], a: 1 },
        { q: "A 'capnophile' is a bacterium that requires:", type: "mcq", options: ["High salt", "High pressure", "High CO2 levels", "Low oxygen"], a: 2 },
        { q: "Which of these is a trace element required by bacteria?", type: "mcq", options: ["Carbon", "Nitrogen", "Zinc", "Sulfur"], a: 2 },
        { q: "Organisms that use light as an energy source are called:", type: "mcq", options: ["Chemotrophs", "Phototrophs", "Autotrophs", "Heterotrophs"], a: 1 },
        { q: "Organisms that use organic compounds as a carbon source are:", type: "mcq", options: ["Autotrophs", "Heterotrophs", "Lithotrophs", "Phototrophs"], a: 1 },
        { q: "The 'lag phase' is a period of:", type: "mcq", options: ["Rapid cell division", "No metabolic activity", "Adaptation and synthesis", "Cell death"], a: 2 },
        { q: "Which transport mechanism requires energy (ATP)?", type: "mcq", options: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis"], a: 2 },
        { q: "Facultative anaerobes primarily use... if O2 is present.", type: "mcq", options: ["Fermentation", "Aerobic respiration", "Anaerobic respiration", "Photosynthesis"], a: 1 },
        { q: "Most bacteria grow best at a pH of:", type: "mcq", options: ["1-3", "4-5", "6.5-7.5", "9-11"], a: 2 }
      ]
    },
    flora: {
      title: "Normal Flora",
      questions: [
        { q: "Normal flora is most abundant in the:", type: "mcq", options: ["Stomach", "Small intestine", "Colon", "Lungs"], a: 2 },
        { q: "Which of the following sites is normally sterile?", type: "mcq", options: ["Skin", "Mouth", "Blood", "Vagina"], a: 2 },
        { q: "The predominant bacteria in the vagina of adult women are:", type: "mcq", options: ["Staphylococci", "Streptococci", "Lactobacilli", "E. coli"], a: 2 },
        { q: "Normal flora of the skin includes:", type: "mcq", options: ["Staphylococcus epidermidis", "Propionibacterium acnes", "Diphtheroids", "All of the above"], a: 3 },
        { q: "Which of the following is a benefit of normal flora?", type: "mcq", options: ["Synthesize vitamins (K, B12)", "Prevent colonization by pathogens", "Stimulate the immune system", "All of the above"], a: 3 },
        { q: "The most common bacteria in the mouth (dental plaque) is:", type: "mcq", options: ["Streptococcus mutans", "E. coli", "Staphylococcus aureus", "Lactobacillus"], a: 0 },
        { q: "The stomach is relatively sterile due to:", type: "mcq", options: ["High pH", "Low pH (acidity)", "Presence of bile", "Lack of nutrients"], a: 1 },
        { q: "Which organism is a common cause of urinary tract infections (UTI)?", type: "mcq", options: ["Staphylococcus epidermidis", "E. coli", "Streptococcus pyogenes", "Neisseria gonorrhoeae"], a: 1 },
        { q: "An 'opportunistic pathogen' is an organism that:", type: "mcq", options: ["Always causes disease", "Is part of the normal flora", "Causes disease in a compromised host", "Is transmitted by vectors"], a: 2 },
        { q: "The term 'microbial antagonism' means:", type: "mcq", options: ["Normal flora helping pathogens", "Normal flora preventing pathogen growth", "Pathogens causing disease", "Microbes growing in harmony"], a: 1 },
        { q: "Antibiotic therapy can lead to:", type: "mcq", options: ["Overgrowth of normal flora", "Superinfection (e.g., C. difficile)", "Increased immunity", "Sterilization of the gut"], a: 1 },
        { q: "Organisms that are acquired temporarily and are not part of the established flora are:", type: "mcq", options: ["Resident flora", "Transient flora", "Opportunistic flora", "Pathogenic flora"], a: 1 },
        { q: "Which vitamin is synthesized by E. coli in the gut?", type: "mcq", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], a: 3 },
        { q: "The 'germ-free' (gnotobiotic) animal:", type: "mcq", options: ["Is healthier than normal animals", "Has a poorly developed immune system", "Is resistant to pathogens", "Has a normal lifespan"], a: 1 },
        { q: "Which of the following is NOT a benefit of normal flora?", type: "mcq", options: ["Bacterial interference", "Vitamin synthesis", "Causing dental caries", "Immune stimulation"], a: 2 },
        { q: "The most predominant anaerobe in the colon is:", type: "mcq", options: ["E. coli", "Bacteroides fragilis", "Clostridium perfringens", "Lactobacillus"], a: 1 },
        { q: "The normal flora of the upper respiratory tract (nose, pharynx) resembles:", type: "mcq", options: ["Skin flora", "Gut flora", "Mouth flora", "Vaginal flora"], a: 2 },
        { q: "Babies acquire their initial normal flora:", type: "mcq", options: ["In the uterus (sterile)", "During and after birth", "From antibiotics", "They are born with it"], a: 1 }
      ]
    },
    sterilization: {
      title: "Sterilization & Disinfection",
      questions: [
        { q: "The complete killing or removal of all forms of life, including spores, is:", type: "mcq", options: ["Disinfection", "Sterilization", "Antisepsis", "Sanitization"], a: 1 },
        { q: "The reduction of microbial load to a safe public health level is:", type: "mcq", options: ["Disinfection", "Sterilization", "Antisepsis", "Sanitization"], a: 3 },
        { q: "Which of the following is the most resistant to sterilization?", type: "mcq", options: ["Vegetative bacteria", "Viruses (enveloped)", "Fungal spores", "Bacterial endospores"], a: 3 },
        { q: "The standard condition for autoclaving (steam under pressure) is:", type: "mcq", options: ["100°C for 30 min", "121°C for 15 min", "160°C for 2 hours", "72°C for 15 sec"], a: 1 },
        { q: "Autoclaving kills by:", type: "mcq", options: ["Denaturing proteins", "Oxidation", "Alkylation", "Radiation damage"], a: 0 },
        { q: "Dry heat sterilization (hot air oven) requires:", type: "mcq", options: ["121°C for 15 min", "100°C for 1 hour", "160°C for 2 hours", "Lower temp than autoclaving"], a: 2 },
        { q: "Pasteurization is used to:", type: "mcq", options: ["Sterilize milk", "Reduce microbial load in milk", "Kill spores in milk", "Make milk thicker"], a: 1 },
        { q: "The (HTST) pasteurization method is:", type: "mcq", options: ["63°C for 30 min", "72°C for 15 sec", "140°C for 3 sec (UHT)", "100°C for 10 min"], a: 1 },
        { q: "Which of the following is a form of ionizing radiation?", type: "mcq", options: ["UV light", "Gamma rays", "Microwaves", "Infrared"], a: 1 },
        { q: "Ionizing radiation (Gamma) is used to sterilize:", type: "mcq", options: ["Sutures and plastic syringes", "Surgical instruments (metal)", "Glassware", "Culture media"], a: 0 },
        { q: "UV light sterilizes by:", type: "mcq", options: ["Creating hydroxyl radicals", "Causing thymine dimers in DNA", "Denaturing proteins", "Puncturing the cell wall"], a: 1 },
        { q: "UV light is limited by its:", type: "mcq", options: ["High cost", "Poor penetrating power", "Toxicity", "Flammability"], a: 1 },
        { q: "Filtration is used to sterilize:", type: "mcq", options: ["Heat-labile liquids (e.g., serum)", "Glassware", "Metal instruments", "Plastic tubing"], a: 0 },
        { q: "HEPA filters are used to remove microbes from:", type: "mcq", options: ["Liquids", "Air", "Surfaces", "Food"], a: 1 },
        { q: "Which of the following is a halogen disinfectant?", type: "mcq", options: ["Alcohol", "Phenol", "Chlorine (Bleach)", "Formaldehyde"], a: 2 },
        { q: "70% alcohol is more effective than 95% alcohol because:", type: "mcq", options: ["It evaporates slower", "Water is needed for protein denaturation", "It penetrates better", "All of the above"], a: 3 },
        { q: "Which chemical is used for 'cold sterilization' of surgical instruments?", type: "mcq", options: ["70% Alcohol", "Iodine", "Glutaraldehyde", "Soap"], a: 2 },
        { q: "Ethylene oxide is a:", type: "mcq", options: ["Liquid disinfectant", "Gas used for sterilization", "Halogen", "Phenolic compound"], a: 1 },
        { q: "A disinfectant used on living tissue (skin) is called:", type: "mcq", options: ["Sterilant", "Disinfectant", "Antiseptic", "Sanitizer"], a: 2 },
        { q: "Phenol coefficient is used to:", type: "mcq", options: ["Measure the effectiveness of a disinfectant", "Count bacteria", "Test for sterility", "Identify bacteria"], a: 0 }
      ]
    },
    chemotherapy: {
      title: "Antimicrobial Chemotherapy",
      questions: [
        { q: "Which of the following inhibits cell wall synthesis?", type: "mcq", options: ["Penicillin", "Tetracycline", "Rifampin", "Sulfonamides"], a: 0 },
        { q: "Penicillin's mechanism of action is inhibition of:", type: "mcq", options: ["Protein synthesis (50S)", "Protein synthesis (30S)", "Transpeptidation (cell wall)", "Nucleic acid synthesis"], a: 2 },
        { q: "Which of the following targets the 30S ribosomal subunit?", type: "mcq", options: ["Tetracycline", "Erythromycin", "Chloramphenicol", "Vancomycin"], a: 0 },
        { q: "Which of the following targets the 50S ribosomal subunit?", type: "mcq", options: ["Gentamicin", "Erythromycin (Macrolides)", "Ciprofloxacin", "Penicillin"], a: 1 },
        { q: "Vancomycin is effective against:", type: "mcq", options: ["Gram-negative bacteria", "Gram-positive bacteria (e.g., MRSA)", "Fungi", "Viruses"], a: 1 },
        { q: "Sulfonamides work by:", type: "mcq", options: ["Inhibiting cell wall synthesis", "Inhibiting protein synthesis", "Inhibiting DNA gyrase", "Inhibiting folic acid synthesis"], a: 3 },
        { q: "Rifampin (Rifampicin) inhibits:", type: "mcq", options: ["DNA gyrase", "RNA polymerase", "Folic acid synthesis", "Protein synthesis"], a: 1 },
        { q: "Quinolones (e.g., Ciprofloxacin) inhibit:", type: "mcq", options: ["DNA gyrase (Topoisomerase)", "RNA polymerase", "Cell wall synthesis", "Protein synthesis"], a: 0 },
        { q: "An antibiotic that is effective against a wide range of bacteria is:", type: "mcq", options: ["Narrow-spectrum", "Broad-spectrum", "Bacteriostatic", "Bactericidal"], a: 1 },
        { q: "An antibiotic that kills bacteria is:", type: "mcq", options: ["Bacteriostatic", "Bactericidal", "Antiseptic", "Disinfectant"], a: 1 },
        { q: "The lowest concentration of an antibiotic that inhibits visible growth is:", type: "mcq", options: ["MIC (Minimum Inhibitory Concentration)", "MBC (Minimum Bactericidal Concentration)", "LD50", "Therapeutic index"], a: 0 },
        { q: "Beta-lactamase (Penicillinase) production is a mechanism of:", type: "mcq", options: ["Antibiotic synergism", "Antibiotic antagonism", "Antibiotic resistance", "Selective toxicity"], a: 2 },
        { q: "Which of the following is NOT a mechanism of antibiotic resistance?", type: "mcq", options: ["Enzymatic destruction (e.g., Beta-lactamase)", "Altered target site", "Decreased permeability/efflux pump", "Increased synthesis of the target"], a: 3 },
        { q: "Combining Penicillin and Gentamicin is an example of:", type: "mcq", options: ["Synergism", "Antagonism", "Resistance", "Indifference"], a: 0 },
        { q: "Which antibiotic is known for causing 'Red Man Syndrome' if infused too quickly?", type: "mcq", options: ["Penicillin", "Vancomycin", "Tetracycline", "Ciprofloxacin"], a: 1 },
        { q: "Which antibiotic is associated with 'grey baby syndrome'?", type: "mcq", options: ["Chloramphenicol", "Streptomycin", "Penicillin", "Erythromycin"], a: 0 },
        { q: "Which drug is used to treat Tuberculosis (TB)?", type: "mcq", options: ["Isoniazid (INH)", "Rifampin", "Ethambutol", "All of the above"], a: 3 },
        { q: "Isoniazid (INH) specifically inhibits the synthesis of:", type: "mcq", options: ["Peptidoglycan", "Mycolic acids", "Proteins", "Folic acid"], a: 1 },
        { q: "Polymyxins are antibiotics that:", type: "mcq", options: ["Inhibit cell wall", "Inhibit protein synthesis", "Disrupt the cell membrane", "Inhibit DNA synthesis"], a: 2 },
        { q: "'Selective toxicity' means the drug is:", type: "mcq", options: ["Toxic to all cells", "More toxic to the pathogen than the host", "Only toxic to the host", "Not toxic at all"], a: 1 }
      ]
    },
    general_tf: {
      title: "اختبار معلومات أساسية (صح وخطأ)",
      questions: [
        { q: "البكتيريا موجبة الجرام (Gram-positive) يظهر لونها أحمر بعد الصبغة.", type: "tf", a: false }, // بنفسجي
        { q: "البكتيريا سالبة الجرام (Gram-negative) تحتوي على طبقة رقيقة من الببتيدوجلايكان.", type: "tf", a: true },
        { q: "الـ Mycoplasma هي البكتيريا الوحيدة التي لا تمتلك جدار خلوي.", type: "tf", a: true },
        { q: "الأبواغ (Spores) هي وسيلة للتكاثر البكتيري.", type: "tf", a: false }, // وسيلة مقاومة
        { q: "البكتيريا (Mesophiles) تنمو بشكل أفضل في درجة حرارة 37 درجة مئوية.", type: "tf", a: true },
        { q: "البكتيريا اللاهوائية الإجبارية (Obligate anaerobes) تموت في وجود الأكسجين.", type: "tf", a: true },
        { q: "التعقيم (Sterilization) هو القضاء على جميع أشكال الحياة الميكروبية بما في ذلك الأبواغ.", type: "tf", a: true },
        { q: "التطهير (Disinfection) يقتل الأبواغ البكتيرية.", type: "tf", a: false }, // لا يقتل الأبواغ عادة
        { q: "الأوتوكلاف (Autoclave) يستخدم حرارة جافة (Dry heat) للتعقيم.", type: "tf", a: false }, // حرارة رطبة (بخار)
        { q: "البنسلين يعمل عن طريق تثبيط تصنيع البروتين في البكتيريا.", type: "tf", a: false }, // يثبط جدار الخلية
        { q: "التتراسيكلين (Tetracycline) يعمل عن طريق تثبيط وحدة 30S الريبوسومية.", type: "tf", a: true },
        { q: "البلازميدات (Plasmids) هي جزء أساسي من الكروموسوم البكتيري.", type: "tf", a: false }, // خارج الكروموسوم
        { q: "الأهداب (Pili) تستخدم للحركة البكتيرية.", type: "tf", a: false }, // تستخدم للالتصاق
        { q: "الكبسولة (Capsule) تساعد البكتيريا على مقاومة عملية البلعمة (Phagocytosis).", type: "tf", a: true },
        { q: "مرحلة الـ Log Phase هي أسرع مرحلة في نمو البكتيريا.", type: "tf", a: true },
        { q: "المطهر (Antiseptic) يستخدم لتطهير الأسطح والأدوات غير الحية.", type: "tf", a: false }, // يستخدم على الأنسجة الحية
        { q: "الـ Endotoxin (السم الداخلي) يوجد فقط في البكتيريا موجبة الجرام.", type: "tf", a: false }, // سالب
        { q: "الفلورا الطبيعية (Normal Flora) توجد في الدم بشكل طبيعي.", type: "tf", a: false } // الدم معقم
      ]
    }
  },
  anatomy: {
    respiratory: {
      title: "Respiratory System",
      questions: [
        { q: "Which structure is NOT part of the upper respiratory tract?", type: "mcq", options: ["Nose", "Pharynx", "Larynx", "Trachea"], a: 3 },
        { q: "The 'Adam's apple' is the common name for the:", type: "mcq", options: ["Cricoid cartilage", "Epiglottis", "Thyroid cartilage", "Hyoid bone"], a: 2 },
        { q: "What structure prevents food from entering the trachea during swallowing?", type: "mcq", options: ["Uvula", "Epiglottis", "Vocal cords", "Tongue"], a: 1 },
        { q: "The trachea bifurcates (splits) into the:", type: "mcq", options: ["Pharynx and Larynx", "Right and Left main bronchi", "Alveolar ducts", "Bronchioles"], a: 1 },
        { q: "Which of the following is true about the right main bronchus?", type: "mcq", options: ["It is longer than the left", "It is narrower than the left", "It is more vertical than the left", "It has 2 secondary bronchi"], a: 2 },
        { q: "Gas exchange (O2 and CO2) occurs in the:", type: "mcq", options: ["Trachea", "Main bronchi", "Bronchioles", "Alveoli"], a: 3 },
        { q: "How many lobes does the right lung have?", type: "mcq", options: ["One", "Two", "Three", "Four"], a: 2 },
        { q: "How many lobes does the left lung have?", type: "mcq", options: ["One", "Two", "Three", "Four"], a: 1 },
        { q: "The serous membrane covering the surface of the lung is the:", type: "mcq", options: ["Parietal pleura", "Visceral pleura", "Pericardium", "Peritoneum"], a: 1 },
        { q: "The main muscle of inspiration (inhalation) is the:", type: "mcq", options: ["Internal intercostals", "External intercostals", "Diaphragm", "Abdominal muscles"], a: 2 },
        { q: "The 'cardiac notch' is a feature of the:", type: "mcq", options: ["Right lung", "Left lung", "Diaphragm", "Sternum"], a: 1 }
      ]
    },
    heart: {
      title: "The Heart",
      questions: [
        { q: "The chamber of the heart that receives deoxygenated blood from the body is the:", type: "mcq", options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"], a: 0 },
        { q: "The chamber that pumps oxygenated blood to the rest of the body is the:", type: "mcq", options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"], a: 3 },
        { q: "The chamber that pumps deoxygenated blood to the lungs is the:", type: "mcq", options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"], a: 2 },
        { q: "The valve located between the right atrium and right ventricle is the:", type: "mcq", options: ["Mitral valve", "Tricuspid valve", "Aortic valve", "Pulmonary valve"], a: 1 },
        { q: "The valve located between the left atrium and left ventricle is the:", type: "mcq", options: ["Mitral (Bicuspid) valve", "Tricuspid valve", "Aortic valve", "Pulmonary valve"], a: 0 },
        { q: "The 'pacemaker' of the heart is the:", type: "mcq", options: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"], a: 1 },
        { q: "Which vessels carry oxygenated blood from the lungs to the heart?", type: "mcq", options: ["Pulmonary arteries", "Pulmonary veins", "Aorta", "Vena cava"], a: 1 },
        { q: "Which vessel carries deoxygenated blood from the heart to the lungs?", type: "mcq", options: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"], a: 0 },
        { q: "The largest artery in the human body is the:", type: "mcq", options: ["Pulmonary artery", "Femoral artery", "Aorta", "Coronary artery"], a: 2 },
        { q: "The inner lining of the heart chambers is called the:", type: "mcq", options: ["Epicardium", "Myocardium", "Endocardium", "Pericardium"], a: 2 },
        { q: "The muscular layer of the heart wall is the:", type: "mcq", options: ["Epicardium", "Myocardium", "Endocardium", "Pericardium"], a: 1 },
        { q: "The sac enclosing the heart is the:", type: "mcq", options: ["Epicardium", "Myocardium", "Endocardium", "Pericardium"], a: 3 },
        { q: "The 'lub' (S1) heart sound is caused by the closing of the:", type: "mcq", options: ["AV (Mitral & Tricuspid) valves", "Semilunar (Aortic & Pulmonary) valves", "Aortic valve only", "Mitral valve only"], a: 0 },
        { q: "The 'dub' (S2) heart sound is caused by the closing of the:", type: "mcq", options: ["AV (Mitral & Tricuspid) valves", "Semilunar (Aortic & Pulmonary) valves", "Aortic valve only", "Mitral valve only"], a: 1 },
        { q: "Which chamber has the thickest muscular wall?", type: "mcq", options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"], a: 3 },
        { q: "The coronary arteries supply blood to the:", type: "mcq", options: ["Lungs", "Brain", "Heart muscle (Myocardium)", "Liver"], a: 2 },
        { q: "The QRS complex on an ECG represents:", type: "mcq", options: ["Atrial depolarization", "Ventricular depolarization", "Ventricular repolarization", "Atrial repolarization"], a: 1 },
        { q: "The T wave on an ECG represents:", type: "mcq", options: ["Atrial depolarization", "Ventricular depolarization", "Ventricular repolarization", "Atrial repolarization"], a: 2 },
        { q: "The P wave on an ECG represents:", type: "mcq", options: ["Atrial depolarization", "Ventricular depolarization", "Ventricular repolarization", "Atrial repolarization"], a: 0 },
        { q: "Chordae tendineae ('heart strings') are attached to:", type: "mcq", options: ["Semilunar valves", "AV valves", "The SA node", "The Aorta"], a: 1 }
      ]
    },
    general: {
      title: "General Anatomy",
      questions: [
        { q: "Which plane divides the body into right and left halves?", type: "mcq", options: ["Sagittal (Median)", "Coronal (Frontal)", "Transverse (Horizontal)", "Oblique"], a: 0 },
        { q: "Which plane divides the body into anterior and posterior parts?", type: "mcq", options: ["Sagittal", "Coronal (Frontal)", "Transverse", "Median"], a: 1 },
        { q: "Which plane divides the body into superior and inferior parts?", type: "mcq", options: ["Sagittal", "Coronal", "Transverse (Horizontal)", "Frontal"], a: 2 },
        { q: "The term 'proximal' means:", type: "mcq", options: ["Further from the trunk/origin", "Closer to the trunk/origin", "Towards the midline", "Away from the midline"], a: 1 },
        { q: "The term 'lateral' means:", type: "mcq", options: ["Closer to the midline", "Away from the midline", "Towards the front", "Towards the back"], a: 1 }
      ]
    }
  },
  physiology: {
    cns: {
      title: "CNS (Central Nervous System)",
      questions: [
        { q: "Which part of the brain is responsible for coordination, balance, and motor control?", type: "mcq", options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"], a: 1 },
        { q: "Which lobe of the cerebrum is primarily responsible for vision?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 3 },
        { q: "Which lobe is responsible for hearing, memory, and language comprehension (Wernicke's area)?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 2 },
        { q: "Which lobe is responsible for voluntary movement (motor cortex) and higher executive functions?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 0 },
        { q: "Which lobe processes sensory information like touch, temperature, and pain (somatosensory cortex)?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 1 },
        { q: "The 'relay station' for most sensory information coming into the cortex is the:", type: "mcq", options: ["Hypothalamus", "Thalamus", "Cerebellum", "Medulla"], a: 1 },
        { q: "Which structure regulates homeostasis, temperature, hunger, and the endocrine system?", type: "mcq", options: ["Hypothalamus", "Thalamus", "Cerebellum", "Pons"], a: 0 },
        { q: "Which part of the brainstem controls vital functions like breathing and heart rate?", type: "mcq", options: ["Midbrain", "Pons", "Medulla oblongata", "Cerebellum"], a: 2 },
        { q: "The system responsible for emotion, learning, and memory (includes hippocampus and amygdala) is the:", type: "mcq", options: ["Reticular formation", "Limbic system", "Endocrine system", "Basal ganglia"], a: 1 },
        { q: "The 'master gland' of the endocrine system, controlled by the hypothalamus, is the:", type: "mcq", options: ["Pineal gland", "Adrenal gland", "Thyroid gland", "Pituitary gland"], a: 3 },
        { q: "The fluid that surrounds and protects the brain and spinal cord is:", type: "mcq", options: ["Blood plasma", "Cerebrospinal fluid (CSF)", "Lymph", "Synovial fluid"], a: 1 },
        { q: "The 'fight or flight' response is controlled by the:", type: "mcq", options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Enteric nervous system"], a: 0 },
        { q: "The 'rest and digest' response is controlled by the:", type: "mcq", options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Afferent division"], a: 1 },
        { q: "The primary neurotransmitter of the parasympathetic nervous system is:", type: "mcq", options: ["Norepinephrine", "Acetylcholine", "Dopamine", "Serotonin"], a: 1 },
        { q: "Broca's area, responsible for speech production, is located in which lobe?", type: "mcq", options: ["Frontal", "Parietal", "Temporal", "Occipital"], a: 0 }
      ]
    },
    blood: {
      title: "Blood",
      questions: [
        { q: "Which component makes up the largest percentage of blood volume?", type: "mcq", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], a: 3 },
        { q: "What is the primary function of Red Blood Cells (Erythrocytes)?", type: "mcq", options: ["Fight infection", "Transport oxygen", "Blood clotting", "Produce antibodies"], a: 1 },
        { q: "What is the name of the protein in RBCs that binds to oxygen?", type: "mcq", options: ["Albumin", "Globulin", "Hemoglobin", "Fibrinogen"], a: 2 },
        { q: "Which of the following is NOT a type of White Blood Cell (Leukocyte)?", type: "mcq", options: ["Neutrophil", "Lymphocyte", "Erythrocyte", "Monocyte"], a: 2 },
        { q: "Which WBC is the most abundant and is the 'first responder' to bacterial infections?", type: "mcq", options: ["Neutrophil", "Eosinophil", "Basophil", "Lymphocyte"], a: 0 },
        { q: "Which WBC is involved in allergic reactions and fighting parasitic infections?", type: "mcq", options: ["Neutrophil", "Eosinophil", "Basophil", "Monocyte"], a: 1 },
        { q: "Which WBC releases histamine during inflammation and allergic reactions?", type: "mcq", options: ["Neutrophil", "Eosinophil", "Basophil", "Lymphocyte"], a: 2 },
        { q: "Which WBCs are responsible for specific immunity (B-cells and T-cells)?", type: "mcq", options: ["Neutrophils", "Monocytes", "Basophils", "Lymphocytes"], a: 3 },
        { q: "Which cell becomes a macrophage when it leaves the bloodstream and enters tissues?", type: "mcq", options: ["Neutrophil", "Eosinophil", "Monocyte", "B-cell"], a: 2 },
        { q: "What is the function of Platelets (Thrombocytes)?", type: "mcq", options: ["Oxygen transport", "Immune defense", "Blood clotting (Hemostasis)", "Carry nutrients"], a: 2 },
        { q: "What is the name of the process of blood cell formation?", type: "mcq", options: ["Hemostasis", "Erythropoiesis", "Hematopoiesis", "Phagocytosis"], a: 2 },
        { q: "Where does hematopoiesis (blood cell formation) occur in adults?", type: "mcq", options: ["Liver", "Spleen", "Yellow bone marrow", "Red bone marrow"], a: 3 },
        { q: "A person with Type A blood has which antibodies in their plasma?", type: "mcq", options: ["Anti-A antibodies", "Anti-B antibodies", "Both Anti-A and Anti-B", "No antibodies"], a: 1 },
        { q: "A person with Type O blood can receive blood from:", type: "mcq", options: ["Type A only", "Type B only", "Type AB only", "Type O only"], a: 3 },
        { q: "The 'Universal Donor' blood type is:", type: "mcq", options: ["A+", "B-", "AB+", "O-"], a: 3 }
      ]
    },
    cvs: {
      title: "CVS (Cardiovascular System)",
      questions: [
        { q: "What is Cardiac Output (CO)?", type: "mcq", options: ["Heart Rate x Stroke Volume", "Systolic BP - Diastolic BP", "Blood flow per minute", "Both A and C"], a: 3 }, // A and C are basically the same
        { q: "What is Stroke Volume (SV)?", type: "mcq", options: ["Blood ejected per minute", "Blood ejected per beat", "Heart rate in beats/min", "Pressure in the aorta"], a: 1 },
        { q: "The Frank-Starling Law of the heart states that:", type: "mcq", options: ["Increased heart rate increases CO", "Increased preload (EDV) leads to increased stroke volume", "Increased afterload decreases stroke volume", "Parasympathetic stimulation slows the heart"], a: 1 },
        { q: "What is 'preload'?", type: "mcq", options: ["The pressure the heart must pump against", "The volume of blood in the ventricle at end-diastole", "The contractility of the heart muscle", "The heart rate"], a: 1 },
        { q: "What is 'afterload'?", type: "mcq", options: ["The pressure the heart must pump against (e.g., aortic pressure)", "The volume of blood in the ventricle", "The contractility of the heart", "The heart rate"], a: 0 },
        { q: "Systolic blood pressure represents:", type: "mcq", options: ["Pressure in the arteries during ventricular relaxation", "Pressure in the arteries during ventricular contraction", "The average pressure in the arteries", "The pressure in the veins"], a: 1 },
        { q: "Diastolic blood pressure represents:", type: "mcq", options: ["Pressure in the arteries during ventricular relaxation", "Pressure in the arteries during ventricular contraction", "The average pressure in the arteries", "The pressure in the atria"], a: 0 },
        { q: "Pulse Pressure is:", type: "mcq", options: ["Systolic + Diastolic", "Systolic - Diastolic", "(Systolic + 2*Diastolic) / 3", "Heart Rate x Stroke Volume"], a: 1 },
        { q: "Mean Arterial Pressure (MAP) is approximately:", type: "mcq", options: ["Systolic - Diastolic", "Diastolic + 1/3 (Pulse Pressure)", "Heart Rate x Stroke Volume", "Systolic + Diastolic / 2"], a: 1 },
        { q: "Where is blood pressure the lowest in the cardiovascular system?", type: "mcq", options: ["Aorta", "Arterioles", "Capillaries", "Large Veins (Vena Cava)"], a: 3 },
        { q: "Which vessels are the primary site of peripheral resistance (regulating BP)?", type: "mcq", options: ["Aorta", "Arterioles", "Capillaries", "Veins"], a: 1 },
        { q: "The baroreceptor reflex (for short-term BP control) is located in the:", type: "mcq", options: ["Carotid sinus and Aortic arch", "Kidneys", "Brain (Hypothalamus)", "Adrenal glands"], a: 0 },
        { q: "If baroreceptors detect high blood pressure, what is the reflex response?", type: "mcq", options: ["Increase heart rate, Vasoconstriction", "Decrease heart rate, Vasodilation", "Increase heart rate, Vasodilation", "Decrease heart rate, Vasoconstriction"], a: 1 },
        { q: "Which hormone system is the primary long-term regulator of blood pressure (via blood volume)?", type: "mcq", options: ["Baroreceptor reflex", "Renin-Angiotensin-Aldosterone System (RAAS)", "Sympathetic nervous system", "Epinephrine release"], a: 1 },
        { q: "What is the main factor that causes blood to return to the heart from the veins (venous return)?", type: "mcq", options: ["High pressure in the veins", "Skeletal muscle pump and Respiratory pump", "Strong contractions of the atria", "Heart suction"], a: 1 }
      ]
    }
  },
  
  fundamental: {}, // <-- تم ترك هذا فارغاً كما في الكود الذي أرسلته
  
  biochemistry: {}, // <-- تم ترك هذا فارغاً كما في الكود الذي أرسلته

  // ----- هنا يبدأ الكود المضاف من ملف الـ PDF -----
  clinical: {
    // ----- الموضوع الأول: Hand Hygiene & PPE -----
    
    clinical_1: {
      title: "Hand Hygiene & PPE - Part 1",
      questions: [
        { q: "What is the minimum duration for effective hand washing?", type: "mcq", options: ["5 seconds", "10 seconds", "40 seconds", "1 minute"], a: 2 },
        { q: "Which is the most common way infections are transmitted in healthcare settings?", type: "mcq", options: ["Airborne droplets", "Contaminated instruments", "Hands", "Food"], a: 2 },
        { q: "What is the primary reason for healthcare workers to practice hand hygiene?", type: "mcq", options: ["To clean their hands", "To prevent healthcare-associated infections", "To avoid skin irritation", "To save water"], a: 1 },
        { q: "How many key moments are recognized for hand hygiene in healthcare?", type: "mcq", options: ["3", "4", "5", "6"], a: 2 },
        { q: "Which of these is NOT one of the five moments for hand hygiene?", type: "mcq", options: ["Before patient contact", "After body fluid exposure risk", "Before putting on gloves", "After touching patient surroundings"], a: 2 },
        { q: "How long should alcohol-based hand rub be used for proper hand hygiene?", type: "mcq", options: ["5 seconds", "10 seconds", "20-30 seconds", "1 minute"], a: 2 },
        { q: "Which area of the hand is most frequently missed during hand hygiene?", type: "mcq", options: ["Palm", "Back of hand", "Fingertips and around nails", "Wrist"], a: 2 },
        { q: "When should gloves be changed?", type: "mcq", options: ["When moving from one patient to another", "When visibly dirty", "After patient care involving contamination", "All of the above"], a: 3 },
        { q: "Which method is the fastest for cleaning hands before patient contact?", type: "mcq", options: ["Washing with soap and water", "Using alcohol-based hand rub", "Wearing gloves", "Using hand lotion"], a: 1 },
        { q: "When using personal protective equipment (PPE), hand hygiene should be performed:", type: "mcq", options: ["Before putting on PPE", "After removing PPE", "Both before and after PPE use", "Hand hygiene is not necessary with gloves"], a: 2 },
        { q: "What is the recommended water temperature for hand washing?", type: "mcq", options: ["Cold water", "Warm water", "Hot water", "Temperature does not matter"], a: 1 },
        { q: "What is the recommended method for drying hands after washing?", type: "mcq", options: ["Using shared towels", "Air drying or using disposable towels", "Using cloth towels shared by several people", "Shaking hands dry"], a: 1 },
        { q: "Which of the following is NOT recommended during hand hygiene practices?", type: "mcq", options: ["Wearing rings or bracelets", "Keeping nails short and clean", "Using alcohol-based hand rub when hands are not visibly soiled", "Washing hands before and after patient contact"], a: 0 },
        { q: "What should a healthcare worker do immediately after removing gloves?", type: "mcq", options: ["Ignore hand hygiene if hands look clean", "Perform hand hygiene immediately", "Put on a new pair of gloves without hand hygiene", "Use lotion to protect skin only"], a: 1 },
        { q: "What is a key reason for healthcare workers' non-compliance with hand hygiene?", type: "mcq", options: ["Lack of knowledge", "Skin irritation caused by frequent washing", "Lack of access to soap", "Disbelief in hand hygiene effectiveness"], a: 1 },
        { q: "Which of the following is NOT considered PPE?", type: "mcq", options: ["Gloves", "eye protector", "face mask", "Baseball cap"], a: 3 },
        { q: "What is the correct action if PPE is damaged?", type: "mcq", options: ["Continue to use it until replacement is available", "Modify it to fit better", "Report it and replace it immediately", "Share it with a coworker"], a: 2 },
        { q: "What is the main reason for washing our hands in a hospital?", type: "mcq", options: ["To make them smell nice", "To remove germs and prevent their spread", "To warm them up", "To remove jewelry"], a: 1 },
        { q: "How long should you wash your hands with soap and water?", type: "mcq", options: ["About 5 seconds", "About 15-30 seconds", "About 1 minute", "About 2 minutes"], a: 1 },
        { q: "When must health professionals use PPE?", type: "mcq", options: ["Only during surgical procedures.", "When they remember to do so.", "When undertaking any procedure that carries an infection risk.", "Only when dealing with patients known to be infectious."], a: 2 }
      ]
    },
    
    clinical_2: {
      title: "Hand Hygiene & PPE - Part 2",
      questions: [
        { q: "The effectiveness of PPE is heavily dependent on:", type: "mcq", options: ["The color and brand of the equipment.", "The user's skill in putting it on (donning) and taking it off (doffing).", "How expensive the equipment was.", "The time of day it is used."], a: 1 },
        { q: "How does PPE protect vulnerable patients?", type: "mcq", options: ["By making the healthcare environment look more professional.", "By curing them of their existing infections.", "By preventing them from acquiring infections from staff.", "By reducing the cost of their hospital stay."], a: 2 },
        { q: "When should PPE be changed?", type: "mcq", options: ["At the end of each shift.", "Only when it is visibly torn.", "Whenever it is heavily splashed and between procedures with different patients.", "Once a day to save resources."], a: 2 },
        { q: "What is the main reason for washing our hands in a hospital?", type: "mcq", options: ["To make them smell nice", "To remove germs and prevent their spread", "To warm them up", "To remove jewelry"], a: 1 },
        { q: "When must you wash your hands with soap and water instead of using hand sanitizer?", type: "mcq", options: ["When they feel sticky", "When they look dirty", "After touching a clean bed", "Before wearing gloves"], a: 1 },
        { q: "How long should you wash your hands with soap and water?", type: "mcq", options: ["About 5 seconds", "About 15-30 seconds", "About 1 minute", "About 2 minutes"], a: 1 },
        { q: "What is the first thing you should do before washing your hands?", type: "mcq", options: ["Dry them with a towel", "Put on gloves", "Remove jewelry like rings and watches", "Use hand sanitizer"], a: 2 },
        { q: "When using an alcohol-based hand rub, what should you do until your hands are dry?", type: "mcq", options: ["Rinse them with water", "Wipe them on your clothes", "Keep rubbing them together", "Put on gloves immediately"], a: 2 },
        { q: "What is a major advantage of using an alcohol-based hand rub?", type: "mcq", options: ["It works better than soap on visibly dirty hands.", "It is faster and more accessible than finding a sink.", "It makes your hands feel wetter.", "You don't need to dry your hands."], a: 1 },
        { q: "When should you perform 'Clinical Hand Hygiene' with special soap?", type: "mcq", options: ["After using the toilet", "Before eating your lunch", "Before a task like inserting a catheter", "When your hands are visibly clean"], a: 2 },
        { q: "Why is it important to keep your nails short and clean?", type: "mcq", options: ["It looks more professional.", "Germs can hide under long or dirty nails.", "Soap works better on short nails.", "Gloves fit better."], a: 1 },
        { q: "What should you use to turn off the water tap after washing your hands if you don't have elbow controls?", type: "mcq", options: ["Your clean hands", "Your elbow", "A paper towel", "Your uniform"], a: 2 },
        { q: "When should you wear gloves?", type: "mcq", options: ["For all patient contacts", "Only when you remember", "When you might touch blood or body fluids", "As a replacement for hand washing"], a: 2 },
        { q: "What must you do immediately after taking off gloves?", type: "mcq", options: ["Throw them in the regular trash.", "Clean your hands again.", "Put on a new pair.", "Wipe your hands on a towel."], a: 1 },
        { q: "The statement 'Gloves are not a substitute for hand hygiene' means:", type: "mcq", options: ["You don't need to wash your hands if you wear gloves.", "You must clean your hands before putting on and after taking off gloves.", "Gloves are more important than handwashing.", "Hand sanitizer doesn't work on gloves."], a: 1 },
        { q: "What does PPE stand for?", type: "mcq", options: ["Personal Patient Equipment", "Protective Patient Environment", "Personal Protective Equipment", "Professional Protective Ensembles"], a: 2 },
        { q: "What is the main purpose of PPE?", type: "mcq", options: ["To make staff look uniform", "To prevent the spread of infection to both staff and patients", "To keep staff warm", "To replace the need for cleaning"], a: 1 },
        { q: "When should you change your PPE (like gloves and gown)?", type: "mcq", options: ["At the end of your shift", "When they become heavily soiled or before a new procedure", "Only if the patient asks you to", "Once a day"], a: 1 },
        { q: "What should you do if you have a cut on your hand?", type: "mcq", options: ["Wash it with extra soap.", "Cover it with a waterproof bandage.", "Avoid washing that hand.", "Wear an extra pair of gloves."], a: 1 },
        { q: "What is the purpose of the 'rotational rubbing of thumbs' step?", type: "mcq", options: ["To clean the palms", "To clean the often-missed thumbs", "To clean the wrists", "To dry the hands faster"], a: 1 }
      ]
    },

    clinical_3: {
      title: "Hand Hygiene & PPE - Part 3",
      questions: [
        { q: "Who is responsible for performing hand hygiene correctly?", type: "mcq", options: ["Only doctors", "Only nurses", "Anyone involved in patient care", "Only cleaning staff"], a: 2 },
        { q: "The main reason for the specific hand rubbing steps is to:", type: "mcq", options: ["Make it a fun activity", "Ensure every part of the hand is cleaned", "Follow the latest trend", "Use more soap or sanitizer"], a: 1 },
        { q: "When must health professionals use PPE?", type: "mcq", options: ["Only during surgical procedures.", "When they remember to do so.", "When undertaking any procedure that carries an infection risk.", "Only when dealing with patients known to be infectious."], a: 2 },
        { q: "The effectiveness of PPE is heavily dependent on:", type: "mcq", options: ["The color and brand of the equipment.", "The user's skill in putting it on (donning) and taking it off (doffing).", "How expensive the equipment was.", "The time of day it is used."], a: 1 },
        { q: "How does PPE protect vulnerable patients?", type: "mcq", options: ["By making the healthcare environment look more professional.", "By curing them of their existing infections.", "By preventing them from acquiring infections from staff.", "By reducing the cost of their hospital stay."], a: 2 },
        { q: "When should PPE be changed?", type: "mcq", options: ["At the end of each shift.", "Only when it is visibly torn.", "Whenever it is heavily splashed and between procedures with different patients.", "Once a day to save resources."], a: 2 }
      ]
    },

    // ----- الموضوع الثاني: Patient Positioning -----

    clinical_4: {
      title: "Patient Positioning - Part 1",
      questions: [
        { q: "What is the primary interval recommended for regularly changing a client's position?", type: "mcq", options: ["Every 1 hour", "Every 2 hours", "Every 3 hours", "Once per shift"], a: 1 },
        { q: "Before and after a position change, what essential aspect of care should a nurse assess and provide?", type: "mcq", options: ["Oral hygiene", "Range of motion exercises", "Skin assessment and skin care", "Vital signs monitoring"], a: 2 },
        { q: "One of the main purposes of patient positioning is to prevent muscle discomfort, contractures, and what other body issue?", type: "mcq", options: ["Increased pain perception", "Body deformities", "Respiratory alkalosis", "Fluid volume deficit"], a: 1 },
        { q: "Which principle should be followed when positioning a patient, particularly concerning the mattress?", type: "mcq", options: ["The mattress should be soft and conforming to the body.", "The mattress should be firm and support natural body curvatures.", "The mattress should be replaced every 24 hours.", "The client should never lie directly on the mattress."], a: 1 },
        { q: "Wrinkled or damp sheets significantly increase the risk for:", type: "mcq", options: ["Muscle atrophy", "Pressure ulcer formation", "Decreased circulation", "Joint stiffness"], a: 1 },
        { q: "In positioning, what should be avoided, especially with bony prominences?", type: "mcq", options: ["Placing one body part directly on top of another body part.", "Using supportive devices like pillows.", "Turning the patient systematically.", "Consulting the client about their comfort."], a: 0 },
        { q: "For clients capable of movement, what is a potential negative consequence of using too many supportive devices?", type: "mcq", options: ["Decreased risk for contractures", "Limited mobility, muscle weakness, and atrophy", "Increased comfort and relaxation", "Enhanced physiological functions"], a: 1 },
        { q: "What is the final step of documenting a position change?", type: "mcq", options: ["Recording the client's new vital signs.", "Listing all the supportive devices available in the room.", "Documenting the time, position moved from/to, and the client's response.", "Charting the next scheduled position change time."], a: 2 },
        { q: "What category of patients primarily relies on nurses for position changes?", type: "mcq", options: ["Ambulatory patients", "Patients who can move easily", "Patients who are weak, frail, paralyzed, or unconscious", "Patients undergoing daily physical therapy"], a: 2 },
        { q: "Positioning the patient is essential to decrease the risk for bed sores by:", type: "mcq", options: ["Promoting normal physiological functions.", "Providing proper body alignment.", "Removing pressure on various parts.", "Stimulating circulation."], a: 2 },
        { q: "Which supportive device is specifically designed to keep the feet in dorsiflexion and prevent plantar flexion (foot drop)?", type: "mcq", options: ["Suspension or heel guard boot", "Trochanter roll", "Footboard", "High-top sneakers"], a: 2 },
        { q: "A triangular-shaped foam pillow used to maintain hip abduction, often following total hip replacement, is called a(n):", type: "mcq", options: ["Trochanter roll", "Abduction pillow", "Hand and wrist splint", "Bed board"], a: 1 },
        { q: "Which device is made from tightly rolled towels or foam pads and is placed adjacent to the hips and thighs to prevent their external rotation?", type: "mcq", options: ["Sandbag", "Heel or elbow protector", "Trochanter roll", "Hand roll"], a: 2 },
        { q: "What is the primary purpose of a Hand Roll, which can be made by rolling a washcloth?", type: "mcq", options: ["To keep the hand in a functional position and prevent finger contractures.", "To relieve pressure on the elbow.", "To prevent wrist drop.", "To secure the IV line."], a: 0 },
        { q: "What device is attached to an overhead bed frame and helps the patient change positions in bed with minimal or self-help?", type: "mcq", options: ["Side rails", "Bed loops", "Bed cradle", "Trapeze Bar"], a: 3 },
        { q: "Which device is placed under the entire mattress to improve spinal alignment by providing firm support?", type: "mcq", options: ["Waterbed mattress", "Egg-crate mattress", "Bed board", "Suspension boot"], a: 2 },
        { q: "Metal or plastic devices secured at the foot of the bed to hold bedding up off the toes are known as:", type: "mcq", options: ["Over Bed Table", "Bed cradle", "Footboard", "Side rails"], a: 1 },
        { q: "What is the main difference between Trochanter Rolls and Sandbags in terms of support provided?", type: "mcq", options: ["Trochanter rolls are used only for the hips, while sandbags are used only for the feet.", "Sandbags provide firmer support.", "Trochanter rolls are used only after surgery.", "Sandbags are lighter and easier to position."], a: 1 },
        { q: "What is the purpose of Heel or Elbow Protectors?", type: "mcq", options: ["To prevent foot drop.", "To reduce mattress pressure and alleviate friction.", "To hold the joint in a natural position.", "To prevent hip rotation."], a: 1 },
        { q: "The Orthopneic position is particularly helpful for clients with problems exhaling because:", type: "mcq", options: ["It allows them to press the lower part of the chest against the overbed table.", "It prevents hip dislocation.", "It maintains the knees in a flexed position.", "It decreases pressure on the heels."], a: 0 }
      ]
    },

    clinical_5: {
      title: "Patient Positioning - Part 2",
      questions: [
        { q: "The Orthopneic position facilitates respiration by allowing what?", type: "mcq", options: ["Reduced metabolic demand", "Maximum chest expansion", "Full hip extension", "Decreased cerebral blood flow"], a: 1 },
        { q: "Which type of position is typically used for lower abdominal, colorectal, and gynecological surgeries, and also for central venous catheter placement?", type: "mcq", options: ["Reverse Trendelenburg Position", "Jackknife Position", "Lithotomy Position", "Trendelenburg Position"], a: 3 },
        { q: "The Dorsal Recumbent Position can be used to assess which areas?", type: "mcq", options: ["Spine and back", "Head and neck only", "Female genitals, rectum, and female reproductive tract", "Lower extremities and reflexes only"], a: 2 },
        { q: "The Sitting Position is appropriate for assessing which of the following?", type: "mcq", options: ["Only the abdomen", "Head, neck, thorax, breasts, heart, and extremities", "Only the spinal column", "Only the reflexes and vital signs"], a: 1 },
        { q: "The Orthopneic position is classified as a:", type: "mcq", options: ["Examination position", "Surgical position", "Comfort position", "Hypotensive position"], a: 2 },
        { q: "Examination positions are typically used for what duration?", type: "mcq", options: ["For long periods (2 hours)", "For a short period of time", "Only during sleep", "Only when the patient is unconscious"], a: 1 },
        { q: "The Lithotomy Position is typically used for procedures related to:", type: "mcq", options: ["Spine and neck", "Gynecology, colorectal, urology, perineal, or pelvis", "Gallbladder and stomach", "Cardiovascular system"], a: 1 },
        { q: "Before turning a client, the bed should be adjusted to a flat position or:", type: "mcq", options: ["As high as the nurse can reach comfortably.", "As low as the client can tolerate.", "Trendelenburg position.", "Reverse Trendelenburg position."], a: 1 },
        { q: "Why should the nurse raise the bed to a height appropriate for personnel safety (at the caregiver's elbows) before turning the client?", type: "mcq", options: ["To prevent the client from sliding off the bed.", "To facilitate better client participation.", "To follow the principles of proper body mechanics.", "To allow for easier documentation."], a: 2 },
        { q: "When preparing to turn a client to the lateral position, why is it necessary to move the client closer to the side of the bed opposite the side they will face?", type: "mcq", options: ["To prevent friction-reducing devices from slipping.", "To ensure the client will be positioned safely in the center of the bed after turning.", "To maintain proper spinal alignment.", "To make it easier for the client to grab the side rails."], a: 1 },
        { q: "When turning a client to the lateral position, what action facilitates the turning motion?", type: "mcq", options: ["Placing the client's far arm across the chest.", "Pulling the client's near arm forward across the chest.", "Elevating the head of the bed to 45 degrees.", "Placing the knees in a flexed position."], a: 1 },
        { q: "When rolling a client to the lateral position, the nurse places one hand on the client's far shoulder and the other hand on the client's:", type: "mcq", options: ["Near hip", "Far knee", "Far hip", "Near ankle"], a: 2 },
        { q: "To prevent the far arm from being caught beneath the client's body during the roll to the lateral position, the nurse should:", type: "mcq", options: ["Keep it alongside the body.", "Place it across the client's chest.", "Abduct it slightly and externally rotate the shoulder.", "Place a pillow underneath it."], a: 2 },
        { q: "What is an important exception when turning a client to the prone position compared to the lateral position?", type: "mcq", options: ["The client must be in the Trendelenburg position.", "Instead of abducting the far arm, keep the client's arm alongside the body to roll over.", "The client must wear a footboard.", "It only requires one nurse."], a: 1 },
        { q: "Why should a nurse never pull a client across the bed while the client is in the prone position?", type: "mcq", options: ["It can injure a woman's breasts or a man's genitals.", "It increases the risk of foot drop.", "It can damage the bed sheets.", "It is an ineffective technique."], a: 0 },
        { q: "Before performing the turning procedure, the nurse's first action should be to:", type: "mcq", options: ["Lock the wheels on the bed.", "Perform hand hygiene and introduce self/verify client identity.", "Raise the bed to a working height.", "Remove all pillows."], a: 1 },
        { q: "When preparing to turn a patient, what action is taken with the bed wheels?", type: "mcq", options: ["They are left unlocked for easy movement.", "They are locked and the rail on the side opposite the nurse is raised.", "They are locked and both side rails are lowered.", "They are removed temporarily."], a: 1 },
        { q: "Which condition would least require significant positioning assistance from a nurse?", type: "mcq", options: ["Paralysis", "Severe pain", "Weakness", "Ability to move easily for comfort"], a: 3 },
        { q: "The term for placing a client on their side, which is often necessary when placing a bedpan or changing linens, is:", type: "mcq", options: ["Prone", "Supine", "Lateral", "Orthopneic"], a: 2 },
        { q: "Which position is typically used for head and neck surgeries?", type: "mcq", options: ["Lithotomy", "Reverse Trendelenburg", "Trendelenburg", "Knee Chest"], a: 1 }
      ]
    },

    clinical_6: {
      title: "Patient Positioning - Part 3",
      questions: [
        { q: "An Over Bed Table, when arranged with pillows to keep a patient in a sitting position on the bed, is sometimes referred to as a:", type: "mcq", options: ["Bed board", "Trapeze Bar", "Cardiac table", "Bed Loop"], a: 2 },
        { q: "The purpose of using a friction-reducing device or mechanical lift when moving a client to the side of the bed is:", type: "mcq", options: ["To increase the client's muscle strength.", "To maintain proper body alignment during the pull.", "To prevent external rotation of the hips.", "To stimulate circulation."], a: 1 },
        { q: "What specific complication of immobility does positioning help to prevent?", type: "mcq", options: ["Increased appetite", "Normal physiological functions", "Contractures", "Improved joint range of motion"], a: 2 },
        { q: "What is the role of the second individual(s) when rolling a client to the lateral position?", type: "mcq", options: ["To document the procedure.", "To secure the bed cradle.", "To help roll the client from the opposite side of the bed.", "To remove the pillows."], a: 2 },
        { q: "Which position involves the patient lying flat on their back with knees flexed, and feet flat on the bed?", type: "mcq", options: ["Lithotomy Position", "Jackknife Position", "Dorsal Recumbent Position", "Kidney Position"], a: 2 },
        { q: "If a client is capable of movement, which supportive devices should be used judiciously (carefully to avoid limiting mobility)?", type: "mcq", options: ["Pillows", "Side rails", "Bed boards", "All supportive devices"], a: 3 }
      ]
    },

    // ----- الموضوع الثالث: Body Mechanics -----

    clinical_7: {
      title: "Body Mechanics - Part 1",
      questions: [
        { q: "What is the primary definition of Body Mechanics according to the text?", type: "mcq", options: ["The use of mechanical lifts for all patient transfers.", "The study of the human musculoskeletal system.", "The efficient, coordinated, and safe use of the body to move objects and carry out ADLs.", "The process of aligning a client's body for comfort."], a: 2 },
        { q: "Which of the following is NOT listed as a purpose of good body mechanics?", type: "mcq", options: ["To avoid skeletal injury.", "To increase client independence.", "To conserve energy.", "To prevent excessive fatigue."], a: 1 },
        { q: "The term used to describe the relationship of body parts to one another is:", type: "mcq", options: ["Center of Gravity.", "Base of Support.", "Line of Gravity.", "Posture (alignment)."], a: 3 },
        { q: "The point at which the mass of a body or object is centered is known as the:", type: "mcq", options: ["Line of Gravity.", "Base of Support.", "Center of Gravity.", "Posture."], a: 2 },
        { q: "The imaginary vertical line drawn through the body's center of gravity is called the:", type: "mcq", options: ["Base of Support.", "Line of Gravity.", "Posture.", "Center of Mass."], a: 1 },
        { q: "To maintain correct body alignment and prevent back muscle fatigue when lifting, a caregiver should:", type: "mcq", options: ["Always twist the body toward the object.", "Keep the back as straight as possible.", "Stop the back frequently.", "Use small, jerky motions."], a: 1 },
        { q: "To shift work to the large and strongest muscles (hips and legs) when lifting, a caregiver should:", type: "mcq", options: ["Bend at the waist.", "Keep knees straight.", "Bend knees instead of the back.", "Use only arm muscles."], a: 2 },
        { q: "Maximum stability is achieved when the line of gravity:", type: "mcq", options: ["Falls outside the base of support.", "Is as close as possible to the center of the base of support.", "Is as close as possible to the edge of the base of support.", "Is not considered."], a: 1 },
        { q: "The technique used to turn the body in a way that avoids twisting of the spine is called:", type: "mcq", options: ["Logrolling.", "Dangling.", "Pivoting.", "Flexing."], a: 0 },
        { q: "The maximum weight a nurse should lift without assistance from proper equipment or other individuals is:", type: "mcq", options: ["50 pounds (22.7 kg).", "35 pounds (15.9 kg).", "45 pounds (20.4 kg).", "25 pounds (11.3 kg)."], a: 1 },
        { q: "Which action should be used when lifting an object from the ground to utilize hip and leg muscles?", type: "mcq", options: ["Stoop down and keep knees straight.", "Flex knees and stoop down, keeping the back straight.", "Round the back to increase leverage.", "Twist and lift simultaneously."], a: 1 },
        { q: "When working with a team to lift or move a client, what is essential for coordination?", type: "mcq", options: ["Everyone lifts at their own pace.", "A team leader and a signal (e.g., 'count 1, 2, 3 and lift').", "Using only the arms to lift.", "Avoiding eye contact to maintain focus."], a: 1 },
        { q: "Why is it recommended to push, pull, or slide an object instead of lifting it?", type: "mcq", options: ["Lifting is against the line of gravity and requires more force.", "Pushing and pulling build more muscle.", "Sliding an object is always faster.", "Lifting is prohibited in all situations."], a: 0 },
        { q: "Which piece of equipment is designed to help move a client with minimal friction?", type: "mcq", options: ["Mobile-powered mechanical lift.", "Sit-to-stand powered lift.", "Friction-reducing device.", "Ceiling-mounted lift."], a: 2 },
        { q: "An Air Transfer System is recommended for a client weighing more than 300 pounds (136.1 kg) with how many assistants?", type: "mcq", options: ["One assistant.", "Two assistants.", "Four assistants.", "Six assistants."], a: 1 },
        { q: "A client weighing between 201-300 pounds (91.2- 136.1 kg) who is partially able to assist should be moved up in bed using:", type: "mcq", options: ["A friction-reducing device and two assistants.", "A friction-reducing slide sheet and four assistants OR an air transfer system and two assistants.", "Manual lifting by two nurses.", "A total transfer lift only."], a: 1 },
        { q: "Before moving a client up in bed, why is a pillow placed against the head of the bed?", type: "mcq", options: ["To make the client more comfortable.", "To protect the client's head from injury against the top of the bed.", "To maintain the Fowler's position.", "To help the nurse pull the client."], a: 1 },
        { q: "What should be done with the bed wheels before moving a client up in bed?", type: "mcq", options: ["Keep them unlocked for easy adjustment.", "Lock them.", "Only lock the wheels nearest the head of the bed.", "Remove them entirely."], a: 1 },
        { q: "When moving a client who is able to reposition without assistance, the nurse should encourage the client to:", type: "mcq", options: ["Lift the head and pull up with only the arms.", "Push off with the feet and pull up with the arms simultaneously.", "Keep the body completely flat and still.", "Only push with the feet."], a: 1 },
        { q: "For a client who is partially able to assist and weighs less than 200 pounds, the protocol suggests using:", type: "mcq", options: ["A total transfer lift.", "Manual lift by one assistant.", "A friction-reducing device and two assistants.", "A ceiling lift with a supine sling."], a: 2 }
      ]
    },

    clinical_8: {
      title: "Body Mechanics - Part 2",
      questions: [
        { q: "When moving a client who is unable to assist, the recommended equipment/staff are:", type: "mcq", options: ["Friction-reducing slide sheet and four assistants.", "Use the ceiling lift with supine sling or mobile floor-based lift and two or more caregivers.", "Two nurses manually lifting.", "Ask the client to push on the count of three."], a: 1 },
        { q: "The main purpose of Logrolling is to turn a client while keeping the body:", type: "mcq", options: ["Bent at the hips and knees.", "In a completely straight alignment (like a log).", "Flexed laterally.", "Turned in segments."], a: 1 },
        { q: "Logrolling is typically used for clients with:", type: "mcq", options: ["Diabetes.", "Severe pressure ulcers.", "Back surgery or a spinal injury.", "Respiratory distress."], a: 2 },
        { q: "Before logrolling, the client's arms should be positioned:", type: "mcq", options: ["Extended straight above the head.", "Held by the nurses.", "Across the chest.", "Dangling over the side of the bed."], a: 2 },
        { q: "During logrolling, the client is first pulled to the side of the bed by how many nurses on the same side?", type: "mcq", options: ["One nurse.", "Two nurses.", "Three nurses.", "Four nurses."], a: 1 },
        { q: "Why is a pillow placed between the client's legs before logrolling?", type: "mcq", options: ["To increase comfort during the move.", "To prevent adduction of the upper leg and keep the legs aligned.", "To help the client push off the bed.", "To prevent the nurse from twisting their back."], a: 1 },
        { q: "Dangling is performed primarily to prepare a client for:", type: "mcq", options: ["Logrolling.", "Moving to a chair/wheelchair or walking.", "A full bed bath.", "Sleeping."], a: 1 },
        { q: "Before assisting a client to a sitting position (dangling), the head of the bed should be raised:", type: "mcq", options: ["Slowly to its highest position.", "Only to a 30-degree angle.", "To a flat position.", "Quickly to maximize momentum."], a: 0 },
        { q: "When preparing for the move, the nurse should stand beside the client's hips and face:", type: "mcq", options: ["The client's face.", "The far corner of the bottom of the bed.", "Directly down the length of the bed.", "The wall opposite the bed."], a: 1 },
        { q: "During the move, the nurse places the arm nearest the head of the bed:", type: "mcq", options: ["Under the client's knees.", "Under the client's thighs.", "Under the client's shoulders.", "On the client's abdomen."], a: 2 },
        { q: "The purpose of having the nurse pivot on the balls of their feet in the desired direction is to:", type: "mcq", options: ["Increase the client's downward momentum.", "Prevent twisting of the nurse's spine.", "Check the client's balance.", "Signal the completion of the move."], a: 1 },
        { q: "After the client is sitting on the side of the bed (dangling), what should the nurse immediately assess, as indicated by the client's health status?", type: "mcq", options: ["Skin integrity.", "Level of pain.", "Vital signs (e.g., pulse, respirations, and blood pressure).", "Appetite."], a: 2 },
        { q: "Why is good body mechanics important for the caregiver?", type: "mcq", options: ["To avoid skeletal injury and muscle strain or tears.", "To speed up the transfer process.", "To use smaller, easily fatigued muscles.", "To force against the line of gravity."], a: 0 },
        { q: "The knowledge of a client's body and how it moves is important because it allows the caregiver to:", type: "mcq", options: ["Use minimal staff for all transfers.", "Move the client without causing additional discomfort.", "Avoid using any assistive equipment.", "Skip the assessment phase."], a: 1 },
        { q: "Before performing any procedure, the first two steps listed in all techniques are to:", type: "mcq", options: ["Perform hand hygiene and provide for client privacy.", "Introduce self, verify client identity, and explain the procedure.", "Document vital signs and adjust the bed height.", "Roll the client to the side of the bed."], a: 1 },
        { q: "What is an essential piece of information to record after moving or turning a client?", type: "mcq", options: ["The nurse's lunch break time.", "The weather outside.", "The ability of the client to assist in moving and turning.", "The agency's policy number."], a: 2 },
        { q: "When using the friction-reducing slide sheet for a partially assisting client less than 200 pounds, the client is asked to push on the count of:", type: "mcq", options: ["Two.", "Three.", "Four.", "Five."], a: 1 },
        { q: "What happens if the line of gravity falls outside the base of support?", type: "mcq", options: ["The individual's stability increases.", "The individual falls.", "The center of gravity is lowered.", "The individual is perfectly balanced."], a: 1 },
        { q: "When attempting to lift an object, if necessary, the nurse should:", type: "mcq", options: ["Lift it quickly before fatigue sets in.", "Evaluate the weight of the object and get help.", "Always lift it alone to conserve resources.", "Round the back to increase strength."], a: 1 },
        { q: "The rationale for raising the bed to the caregiver's elbow height before moving a client up in bed is primarily to:", type: "mcq", options: ["Give the client a better view.", "Adjust the client's head.", "Make the work easier for the client.", "Ensure personnel safety and avoid back strain."], a: 3 }
      ]
    },

    clinical_9: {
      title: "Body Mechanics - Part 3",
      questions: [
        { q: "When preparing to move a client up in bed, the nurse should lock the wheels on the bed and:", type: "mcq", options: ["Lower all side rails.", "Raise the rail on the side of the bed opposite the nurse.", "Remove the headboard.", "Lower the bed to its lowest position."], a: 1 },
        { q: "When assisting a client to sit on the side of the bed, the weight of the client's legs swinging downward helps to:", type: "mcq", options: ["Increase friction on the bed surface.", "Prevent the nurse from pivoting.", "Increase downward movement of the lower body and make the upper body vertical.", "Stabilize the client's blood pressure."], a: 2 },
        { q: "A client with a spinal injury is an example of a client who requires which technique?", type: "mcq", options: ["Moving up in bed using a friction-reducing device.", "Dangling.", "Logrolling.", "Independent repositioning."], a: 2 },
        { q: "Why does the text advise using smooth, coordinated motions instead of jerky movements?", type: "mcq", options: ["To prevent skin shearing.", "Jerky movements are inefficient and can cause injury.", "Jerky movements make the client fall asleep.", "Coordinated motions require less staff."], a: 1 }
      ]
    }
  }
  
};
