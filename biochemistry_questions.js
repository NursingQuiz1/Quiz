window.biochemistryData = {
  // ==========================================================
  // القسم الأول: الكربوهيدرات
  // ==========================================================
  biochem_carbs: {
    title: "Carbohydrate Metabolism",
    questions: [
      { q: "Which of the following is a monosaccride?", type: "mcq", options: ["Glucose", "Lactose", "Maltose", "Sucrose"], a: 0, hint: "هو أبسط أنواع السكريات ويُعرف بسكر الدم." },
      { q: "Which of the following is a disaccride?", type: "mcq", options: ["Glucose", "Galactose", "Fructose", "Sucrose"], a: 3, hint: "يتكون هذا السكر من اتحاد الجلوكوز والفركتوز." },
      { q: "Gluconeogenesis is decreased by:", type: "mcq", options: ["Glucagon", "Epinephrine", "Noradrenaline", "Insulin"], a: 3, hint: "هذا الهرمون هو 'هرمون التخزين' ويقلل تصنيع السكر." },
      { q: "Glycogenesis is increased by:", type: "mcq", options: ["Glucagon", "Epinephrine", "Noradrenaline", "Insulin"], a: 3, hint: "هذا الهرمون يحفز 'تخزين' الجلوكوز على هيئة جليكوجين." },
      { q: "Glycogenolysis is decreased by:", type: "mcq", options: ["Glucagon", "Epinephrine", "Noradrenaline", "Insulin"], a: 3, hint: "هذا الهرمون يمنع 'تكسير' الجليكوجين المخزن." },
      { q: "Glycolysis is increased by:", type: "mcq", options: ["Glucagon", "Epinephrine", "Noradrenaline", "Insulin"], a: 3, hint: "هذا الهرمون يحفز 'حرق' الجلوكوز لإنتاج الطاقة." },
      { q: "As regard glucose, all of the following are true except:", type: "mcq", options: ["It is monosaccharide sugar.", "It is the main sugar of fetal blood and semen.", "It condenses with fructose to form sucrose.", "Maltose is formed of condensation of two glucose units."], a: 1, hint: "السكر الرئيسي في السائل المنوي ودم الجنين هو الفركتوز وليس الجلوكوز." },
      { q: "All of the following about polysaccharides are true except:", type: "mcq", options: ["They are formed of more than 10 sugar units.", "They are classified into homopolysaccharides and heteropolysaccharides.", "Starch is provided only in plants and never exists in animals.", "Mucopolysaccharides are homopolysaccharides."], a: 3, hint: "الـ Mucopolysaccharides (أو GAGs) تتكون من وحدات مختلفة، لذا هي 'Hetero'." },
      { q: "All of the following are homopolysaccharides except:", type: "mcq", options: ["Starch", "Dextrin", "Glycosaminoglycans", "Cellulose"], a: 2, hint: "الـ Glycosaminoglycans (GAGs) تتكون من وحدات سكرية ثنائية متكررة ومختلفة." },
      { q: "Gluconeogenic substrates are:", type: "mcq", options: ["lactate", "glucogenic amino acids", "glycerol", "all of the above"], a: 3, hint: "كل هذه المواد يمكن استخدامها 'كمصادر غير كربوهيدراتية' لتصنيع الجلوكوز." }
    ]
  },

  // ==========================================================
  // القسم الثاني: الدهون (الجزء الأول)
  // ==========================================================
  biochem_lipids_1: {
    title: "Lipid Metabolism - Part 1",
    questions: [
      { q: "Triglycerides are composed of three molecules of fatty acids joined to", type: "mcq", options: ["One molecule of glycerol", "Two molecules of glycerol", "Three molecules of glycerol", "None of the above"], a: 0, hint: "الاسم 'Tri' (ثلاثي) يشير للأحماض الدهنية، والـ 'glyceride' يشير إلى جزيء واحد من الجلسرين." },
      { q: "The major lipid component of cell membrane is", type: "mcq", options: ["Phospholipids", "Triglycerides", "Waxes", "None of the above"], a: 0, hint: "هو المكون الذي يشكل الطبقة المزدوجة (Bilayer) لغشاء الخلية." },
      { q: "Which of the following is a good example of saturated fatty acids?", type: "mcq", options: ["Palmitic acid", "Oleic acid", "Arachidonic acid", "None of the above"], a: 0, hint: "هو حمض دهني 'مشبع' (لا يحتوي روابط مزدوجة) شائع جداً." },
      { q: "Which of the following is a good example of monounsaturated fatty acids?", type: "mcq", options: ["Palmitic acid", "Oleic acid", "Arachidonic acid", "None of the above"], a: 1, hint: "هو حمض دهني 'أحادي' (Mono) عدم التشبع، يوجد في زيت الزيتون." },
      { q: "Which of the following is a good example of polyunsaturated fatty acids?", type: "mcq", options: ["Palmitic acid", "Oleic acid", "Arachidonic acid", "None of the above"], a: 2, hint: "هو حمض دهني 'متعدد' (Poly) عدم التشبع، ويعتبر من الأوميجا-6." },
      { q: "Fats and oils are examples of", type: "mcq", options: ["Simple lipids", "Conjugated lipids", "Derived lipids", "None of the above"], a: 0, hint: "هي 'دهون بسيطة' تتكون أساساً من الجلسرين والأحماض الدهنية." },
      { q: "Triglycerides (TAG) are examples of", type: "mcq", options: ["Simple lipids", "Conjugated lipids", "Derived lipids", "None of the above"], a: 0, hint: "مثل الزيوت والدهون، هي 'دهون بسيطة'." },
      { q: "Cholesterol is the metabolic precursor of", type: "mcq", options: ["Vitamin A", "Steroid hormones", "Vitamin D", "Both b and c"], a: 3, hint: "الكوليسترول هو المادة الخام لتصنيع 'كل' الهرمونات الستيرويدية وفيتامين د." },
      { q: "Cholesterol is an example of", type: "mcq", options: ["Simple lipids", "Conjugated lipids", "Derived lipids", "None of the above"], a: 2, hint: "هي دهون 'مشتقة' (Derived) من وحدات الأيزوبرين." },
      { q: "Sex hormones belong to which of the following category of lipid?", type: "mcq", options: ["Simple lipids", "Conjugated lipids", "Derived lipids", "None of the above"], a: 2, hint: "الهرمونات الجنسية (مثل الاستروجين) هي 'مشتقات' (Derived) من الكوليسترول." },
      { q: "Bile acids belong to which group of lipids?", type: "mcq", options: ["Simple lipids", "Derived lipids", "Complex lipids", "None of the above"], a: 1, hint: "الأحماض الصفراوية هي أيضاً 'مشتقات' (Derived) من الكوليسترول." },
      { q: "All of the following is an example of complex or conjugated lipid except...", type: "mcq", options: ["Phospholipids", "High density lipoprotein", "Chylomicron", "Bile acids"], a: 3, hint: "الأحماض الصفراوية (Bile acids) هي دهون مشتقة، وليست معقدة." },
      { q: "All of the following is true about phospholipids except...", type: "mcq", options: ["They are important constituents of cell membranes & plasma lipoproteins.", "They provide arachidonic acid for synthesis of eicosanoids.", "They represent a good example for simple lipids.", "None of the above."], a: 2, hint: "هي دهون 'معقدة' (Complex) لاحتوائها على الفوسفات." },
      { q: "All of the following are examples for derived lipids except...", type: "mcq", options: ["Triglycerides.", "Cholesterol", "Steroid hormones", "Bile acids"], a: 0, hint: "الـ Triglycerides هي دهون 'بسيطة' (Simple)، وليست مشتقة." },
      { q: "Which of the following is the rate limiting enzyme in cholesterol synthesis?", type: "mcq", options: ["Hormone sensitive lipase", "Ketothiolase", "Glutathione peroxidase", "HMG-CoA reductase"], a: 3, hint: "هذا هو الإنزيم الرئيسي الذي تستهدفه أدوية خفض الكوليسترول (Statins)." },
      { q: "Which of the following statement is NOT true about bile acids?", type: "mcq", options: ["It is a good example for derived lipid.", "They are good emulsifying factors important for digestion and absorption of fats.", "They allow precipitation of cholesterol in the bile as cholesterol stones.", "None of the above"], a: 2, hint: "وظيفتها العكس؛ هي 'تمنع' ترسب الكوليسترول عن طريق إذابته." },
      { q: "All of the following are considered a possible cause for hypercholesterolemia except.", type: "mcq", options: ["Diet rich in carbohydrates and cholesterol.", "Diabetes mellitus.", "Hyperthyroidism.", "Obstructive jaundice."], a: 2, hint: "خمول الغدة (Hypo) هو الذي يسبب ارتفاع الكوليسترول، وليس فرط النشاط (Hyper)." },
      { q: "The main controlling enzyme of the lipolytic pathway is", type: "mcq", options: ["Lipoprotein lipase", "Hormone sensitive lipase", "Hepatic lipase", "None of the above"], a: 1, hint: "هذا الإنزيم (الذي 'يتحسس للهرمونات') هو المسؤول عن 'تكسير' الدهون (Lipolysis) المخزنة." },
      { q: "The end products of lipolysis include...", type: "mcq", options: ["Acetyl coA", "Pyruvate", "Lactate", "Glycerol and free fatty acids"], a: 3, hint: "تكسير الدهون (TAG) ينتج المكونات الأساسية التي كونتّها." },
      { q: "The main form of lipid in chylomicron is", type: "mcq", options: ["Triglycerides", "Phospholipids", "Cholesterol", "None of the above"], a: 0, hint: "وظيفة الكيلوميكرون الأساسية هي نقل الدهون الثلاثية (الغذائية) من الأمعاء." }
    ]
  },

  // ==========================================================
  // القسم الثالث: الدهون (الجزء الثاني)
  // ==========================================================
  biochem_lipids_2: {
    title: "Lipid Metabolism - Part 2",
    questions: [
      { q: "is the main lipid constituent of chylomicron.", type: "mcq", options: ["Triglycerides", "Phospholipids", "Cholesterol", "None of the above"], a: 0, hint: "هذا سؤال مكرر، وظيفتها نقل الدهون الغذائية (الدهون الثلاثية)." },
      { q: "The main lipid constituent of low density lipoprotein is", type: "mcq", options: ["Triglycerides", "Phospholipids", "Cholesterol", "None of the above"], a: 2, hint: "الـ LDL يُعرف بـ 'الكوليسترول الضار' لأنه الناقل الرئيسي للكوليسترول للأنسجة." },
      { q: "Which of the following plasma lipoprotein types is cardioprotective?", type: "mcq", options: ["Chylomicron", "Low density lipoprotein", "High density lipoprotein", "Very low density lipoprotein"], a: 2, hint: "الـ HDL يُعرف بـ 'الكوليسترول الجيد' لأنه ينقل الكوليسترول بعيداً عن الأنسجة." },
      { q: "Which of the following plasma lipoproteins is implicated in dietary TAG absorption?", type: "mcq", options: ["Chylomicron", "Low density lipoprotein", "High density lipoprotein", "Very low density lipoprotein"], a: 0, hint: "هو النوع الذي يتكون في 'الأمعاء' لنقل الدهون 'الغذائية' (Dietary)." },
      { q: "Elevated plasma level of which of the following lipoprotein types predisposes atherosclerotic heart disease?", type: "mcq", options: ["Chylomicron", "Low density lipoprotein", "High density lipoprotein", "Very low density lipoprotein"], a: 1, hint: "ارتفاع 'الكوليسترول الضار' (LDL) يسبب تصلب الشرايين." },
      { q: "The main form of dietary lipids is", type: "mcq", options: ["Cholesterol", "Triacylglycerol", "Glycolipid", "None of the above"], a: 1, hint: "معظم الدهون التي نأكلها تكون في صورة 'دهون ثلاثية' (Triacylglycerol)." },
      { q: "The Enzyme responsible for dietary TAG digestion is........", type: "mcq", options: ["Hepatic lipase", "Pancreatic lipase", "Gastric lipase", "None of the above"], a: 1, hint: "هو الإنزيم الرئيسي لهضم الدهون ويُفرز من 'البنكرياس'." }
    ]
  },

  // ==========================================================
  // القسم الرابع: البروتينات
  // ==========================================================
  biochem_proteins: {
    title: "Protein & Amino Acid Metabolism",
    questions: [
      { q: "All proteins contain the", type: "mcq", options: ["Same 20 amino acids", "Different amino acids", "300 Amino acids occurring in nature", "Only a few amino acids"], a: 0, hint: "هناك 20 حمض أميني 'قياسي' (Standard) تدخل في تركيب البروتينات." },
      { q: "In proteins the a-helix and b-pleated sheet are examples of", type: "mcq", options: ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"], a: 1, hint: "التركيب 'الأولي' هو التسلسل، والـ 'الثانوي' هو أول أشكال الطي." },
      { q: "Pepsin acts on denatured proteins to produce", type: "mcq", options: ["Proteoses and peptones", "Polypeptides", "Peptides", "Dipeptides"], a: 0, hint: "الببسين يكسر البروتينات الكبيرة إلى أجزاء أصغر تسمى بروتيوزات وببتونات." },
      { q: "The main site of urea synthesis in mammals", type: "mcq", options: ["Liver", "Skin", "Intestine", "Kidney"], a: 0, hint: "دورة اليوريا (Urea cycle) تحدث بشكل حصري تقريباً في 'الكبد'." },
      { q: "The enzymes of urea synthesis are found", type: "mcq", options: ["Mitochondria only", "Cytosol only", "Both mitochondria and cytosol", "Nucleus"], a: 2, hint: "تبدأ الدورة في الميتوكوندريا وتكتمل في السيتوسول." },
      { q: "Primary structure of a protein is formed by", type: "mcq", options: ["Hydrogen bonds", "Peptide bonds", "Disulphide bonds", "All of these"], a: 1, hint: "التركيب الأولي هو مجرد 'تسلسل' الأحماض الأمينية المرتبطة بـ 'روابط ببتيدية'." },
      { q: "An organ which is extremely sensitive to ammonia toxicity is", type: "mcq", options: ["Liver", "Brain", "Kidney", "Heart"], a: 1, hint: "ارتفاع الأمونيا هو سبب رئيسي للاعتلال 'الدماغي' الكبدي." },
      { q: "The major site of urea synthesis is", type: "mcq", options: ["Brain", "Kidneys", "Liver", "Muscles"], a: 2, hint: "هذا سؤال مكرر، 'الكبد' هو العضو المسؤول." },
      { q: "Kwashiorkor occurs when the diet is severely deficient in", type: "mcq", options: ["Iron", "Calories", "Proteins", "Essential fatty acids"], a: 2, hint: "الـ 'كواشيوركور' يحدث بسبب نقص 'البروتين' (مع وجود سعرات حرارية كافية)." },
      { q: "Clinical features of Kwashiorkor include all of the following except", type: "mcq", options: ["Mental retardation", "Muscle wasting", "Oedema", "Anaemia"], a: 1, hint: "الـ 'Oedema' (التورم) هو السمة المميزة، ويخفي 'الهزال العضلي' (Wasting) الذي يميز 'الماراسمس'." },
      { q: "Marasmus occurs from deficient intake of", type: "mcq", options: ["Essential amino acids", "Essential fatty acids", "Calories", "Zinc"], a: 2, hint: "الـ 'ماراسمس' هو 'مجاعة' (نقص عام في 'السعرات' والبروتين)." },
      { q: "During starvation, the first reserve nutrient to be depleted is", type: "mcq", options: ["Glycogen", "Proteins", "Triglycerides (", "Cholesterol"], a: 0, hint: "مخزون 'الجليكوجين' (في الكبد والعضلات) هو أول ما يستهلك (خلال 24 ساعة)." },
      { q: "Normal range of serum urea is", type: "mcq", options: ["0.6-1.5 mg/dl", "9-11 mg/dl", "20-45 mg/dl", "60-100 mg/dl"], a: 2, hint: "النسب الطبيعية لليوريا تقع في هذا النطاق (أو ما يعادله 0-40 حسب الملف)." }
    ]
  }
};
