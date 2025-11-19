window.biochemistryData = {
  // ==========================================================
  // القسم الأول: الكربوهيدرات
  // ==========================================================
  biochem_carbs: {
    title: "Carbohydrate Metabolism",
    questions: [
      { 
        q: "Which of the following is a monosaccride?", 
        type: "mcq", 
        options: ["Glucose", "Lactose", "Maltose", "Sucrose"], 
        a: 0, 
        hint: "هو أبسط أنواع السكريات ويُعرف بسكر الدم.",
        explanation: "الجلوكوز هو سكر أحادي (Monosaccharide) لا يمكن تكسيره لسكريات أبسط، وهو المصدر الرئيسي للطاقة."
      },
      { 
        q: "Which of the following is a disaccride?", 
        type: "mcq", 
        options: ["Glucose", "Galactose", "Fructose", "Sucrose"], 
        a: 3, 
        hint: "يتكون هذا السكر من اتحاد الجلوكوز والفركتوز.",
        explanation: "السكروز (سكر المائدة) هو سكر ثنائي (Disaccharide) يتكون من وحدتي جلوكوز وفركتوز مرتبطتين معاً."
      },
      { 
        q: "Gluconeogenesis is decreased by:", 
        type: "mcq", 
        options: ["Glucagon", "Epinephrine", "Noradrenaline", "Insulin"], 
        a: 3, 
        hint: "هذا الهرمون هو 'هرمون التخزين' ويقلل تصنيع السكر.",
        explanation: "الأنسولين يقلل مستوى السكر في الدم، وبالتالي يثبط عملية استحداث السكر (Gluconeogenesis) التي تنتج جلوكوز جديد."
      },
      { 
        q: "Glycogenesis is increased by:", 
        type: "mcq", 
        options: ["Glucagon", "Epinephrine", "Noradrenaline", "Insulin"], 
        a: 3, 
        hint: "هذا الهرمون يحفز 'تخزين' الجلوكوز على هيئة جليكوجين.",
        explanation: "الأنسولين يحفز تخزين الجلوكوز الزائد في الكبد والعضلات على شكل جليكوجين (Glycogenesis)."
      },
      { 
        q: "Glycogenolysis is decreased by:", 
        type: "mcq", 
        options: ["Glucagon", "Epinephrine", "Noradrenaline", "Insulin"], 
        a: 3, 
        hint: "هذا الهرمون يمنع 'تكسير' الجليكوجين المخزن.",
        explanation: "بما أن الأنسولين يهدف لتقليل سكر الدم، فإنه يوقف عملية تكسير الجليكوجين (Glycogenolysis) التي ترفع السكر."
      },
      { 
        q: "Glycolysis is increased by:", 
        type: "mcq", 
        options: ["Glucagon", "Epinephrine", "Noradrenaline", "Insulin"], 
        a: 3, 
        hint: "هذا الهرمون يحفز 'حرق' الجلوكوز لإنتاج الطاقة.",
        explanation: "الأنسولين ينشط إنزيمات التحلل السكري (Glycolysis) لاستهلاك الجلوكوز وإنتاج الطاقة أو الدهون."
      },
      { 
        q: "As regard glucose, all of the following are true except:", 
        type: "mcq", 
        options: ["It is monosaccharide sugar.", "It is the main sugar of fetal blood and semen.", "It condenses with fructose to form sucrose.", "Maltose is formed of condensation of two glucose units."], 
        a: 1, 
        hint: "السكر الرئيسي في السائل المنوي ودم الجنين هو الفركتوز وليس الجلوكوز.",
        explanation: "الفركتوز هو السكر الرئيسي في السائل المنوي لتغذية الحيوانات المنوية، وليس الجلوكوز."
      },
      { 
        q: "All of the following about polysaccharides are true except:", 
        type: "mcq", 
        options: ["They are formed of more than 10 sugar units.", "They are classified into homopolysaccharides and heteropolysaccharides.", "Starch is provided only in plants and never exists in animals.", "Mucopolysaccharides are homopolysaccharides."], 
        a: 3, 
        hint: "الـ Mucopolysaccharides (أو GAGs) تتكون من وحدات مختلفة، لذا هي 'Hetero'.",
        explanation: "السكريات المخاطية (Mucopolysaccharides) هي سكريات عديدة غير متجانسة (Heteropolysaccharides) تتكون من وحدات سكرية مشتقة مختلفة."
      },
      { 
        q: "All of the following are homopolysaccharides except:", 
        type: "mcq", 
        options: ["Starch", "Dextrin", "Glycosaminoglycans", "Cellulose"], 
        a: 2, 
        hint: "الـ Glycosaminoglycans (GAGs) تتكون من وحدات سكرية ثنائية متكررة ومختلفة.",
        explanation: "Glycosaminoglycans (GAGs) هي سكريات عديدة غير متجانسة (Hetero)، بينما النشا والسليلوز يتكونان فقط من الجلوكوز (Homo)."
      },
      { 
        q: "Gluconeogenic substrates are:", 
        type: "mcq", 
        options: ["lactate", "glucogenic amino acids", "glycerol", "all of the above"], 
        a: 3, 
        hint: "كل هذه المواد يمكن استخدامها 'كمصادر غير كربوهيدراتية' لتصنيع الجلوكوز.",
        explanation: "عملية استحداث السكر (Gluconeogenesis) تستخدم مصادر غير كربوهيدراتية مثل اللاكتات، الجلسرين، والأحماض الأمينية لتصنيع الجلوكوز."
      }
    ]
  },

  // ==========================================================
  // القسم الثاني: الدهون (الجزء الأول)
  // ==========================================================
  biochem_lipids_1: {
    title: "Lipid Metabolism - Part 1",
    questions: [
      { 
        q: "Triglycerides are composed of three molecules of fatty acids joined to", 
        type: "mcq", 
        options: ["One molecule of glycerol", "Two molecules of glycerol", "Three molecules of glycerol", "None of the above"], 
        a: 0, 
        hint: "الاسم 'Tri' (ثلاثي) يشير للأحماض الدهنية، والـ 'glyceride' يشير إلى جزيء واحد من الجلسرين.",
        explanation: "الدهون الثلاثية (TAG) تتكون من هيكل جلسرين واحد مرتبط بـ 3 أحماض دهنية."
      },
      { 
        q: "The major lipid component of cell membrane is", 
        type: "mcq", 
        options: ["Phospholipids", "Triglycerides", "Waxes", "None of the above"], 
        a: 0, 
        hint: "هو المكون الذي يشكل الطبقة المزدوجة (Bilayer) لغشاء الخلية.",
        explanation: "الفوسفوليبيدات (Phospholipids) هي المكون الأساسي للغشاء الخلوي لأنها تمتلك رأساً محباً للماء وذيلاً كارهاً للماء."
      },
      { 
        q: "Which of the following is a good example of saturated fatty acids?", 
        type: "mcq", 
        options: ["Palmitic acid", "Oleic acid", "Arachidonic acid", "None of the above"], 
        a: 0, 
        hint: "هو حمض دهني 'مشبع' (لا يحتوي روابط مزدوجة) شائع جداً.",
        explanation: "حمض البالمتيك هو حمض دهني مشبع (16 ذرة كربون) لا يحتوي على أي روابط مزدوجة."
      },
      { 
        q: "Which of the following is a good example of monounsaturated fatty acids?", 
        type: "mcq", 
        options: ["Palmitic acid", "Oleic acid", "Arachidonic acid", "None of the above"], 
        a: 1, 
        hint: "هو حمض دهني 'أحادي' (Mono) عدم التشبع، يوجد في زيت الزيتون.",
        explanation: "حمض الأوليك (الموجود في زيت الزيتون) يحتوي على رابطة مزدوجة واحدة فقط (Monounsaturated)."
      },
      { 
        q: "Which of the following is a good example of polyunsaturated fatty acids?", 
        type: "mcq", 
        options: ["Palmitic acid", "Oleic acid", "Arachidonic acid", "None of the above"], 
        a: 2, 
        hint: "هو حمض دهني 'متعدد' (Poly) عدم التشبع، ويعتبر من الأوميجا-6.",
        explanation: "حمض الأراكيدونيك يحتوي على 4 روابط مزدوجة، لذا فهو حمض دهني متعدد عدم التشبع (PUFA)."
      },
      { 
        q: "Fats and oils are examples of", 
        type: "mcq", 
        options: ["Simple lipids", "Conjugated lipids", "Derived lipids", "None of the above"], 
        a: 0, 
        hint: "هي 'دهون بسيطة' تتكون أساساً من الجلسرين والأحماض الدهنية.",
        explanation: "الدهون والزيوت هي دهون بسيطة لأنها استرات للأحماض الدهنية مع الكحولات."
      },
      { 
        q: "Triglycerides (TAG) are examples of", 
        type: "mcq", 
        options: ["Simple lipids", "Conjugated lipids", "Derived lipids", "None of the above"], 
        a: 0, 
        hint: "مثل الزيوت والدهون، هي 'دهون بسيطة'.",
        explanation: "الدهون الثلاثية تعتبر دهوناً بسيطة (Simple Lipids)."
      },
      { 
        q: "Cholesterol is the metabolic precursor of", 
        type: "mcq", 
        options: ["Vitamin A", "Steroid hormones", "Vitamin D", "Both b and c"], 
        a: 3, 
        hint: "الكوليسترول هو المادة الخام لتصنيع 'كل' الهرمونات الستيرويدية وفيتامين د.",
        explanation: "الكوليسترول يستخدم في الجسم لتصنيع الهرمونات الستيرويدية (مثل الكورتيزول والهرمونات الجنسية) وفيتامين د."
      },
      { 
        q: "Cholesterol is an example of", 
        type: "mcq", 
        options: ["Simple lipids", "Conjugated lipids", "Derived lipids", "None of the above"], 
        a: 2, 
        hint: "هي دهون 'مشتقة' (Derived) من وحدات الأيزوبرين.",
        explanation: "الكوليسترول يُصنف كـ دهون مشتقة (Derived Lipid) لأنه ينتج من التحلل المائي للدهون البسيطة والمركبة."
      },
      { 
        q: "Sex hormones belong to which of the following category of lipid?", 
        type: "mcq", 
        options: ["Simple lipids", "Conjugated lipids", "Derived lipids", "None of the above"], 
        a: 2, 
        hint: "الهرمونات الجنسية (مثل الاستروجين) هي 'مشتقات' (Derived) من الكوليسترول.",
        explanation: "الهرمونات الجنسية هي ستيرويدات، والستيرويدات تعتبر دهوناً مشتقة (Derived Lipids)."
      },
      { 
        q: "Bile acids belong to which group of lipids?", 
        type: "mcq", 
        options: ["Simple lipids", "Derived lipids", "Complex lipids", "None of the above"], 
        a: 1, 
        hint: "الأحماض الصفراوية هي أيضاً 'مشتقات' (Derived) من الكوليسترول.",
        explanation: "الأحماض الصفراوية تُشتق من الكوليسترول في الكبد، لذا فهي دهون مشتقة."
      },
      { 
        q: "All of the following is an example of complex or conjugated lipid except...", 
        type: "mcq", 
        options: ["Phospholipids", "High density lipoprotein", "Chylomicron", "Bile acids"], 
        a: 3, 
        hint: "الأحماض الصفراوية (Bile acids) هي دهون مشتقة، وليست معقدة.",
        explanation: "Bile acids هي دهون مشتقة، بينما الباقي (فوسفوليبيدات، بروتينات دهنية) هي دهون معقدة (Conjugated)."
      },
      { 
        q: "All of the following is true about phospholipids except...", 
        type: "mcq", 
        options: ["They are important constituents of cell membranes & plasma lipoproteins.", "They provide arachidonic acid for synthesis of eicosanoids.", "They represent a good example for simple lipids.", "None of the above."], 
        a: 2, 
        hint: "هي دهون 'معقدة' (Complex) لاحتوائها على الفوسفات.",
        explanation: "العبارة الخاطئة هي أنها دهون بسيطة. الفوسفوليبيدات هي دهون معقدة لأنها تحتوي على مجموعة فوسفات بجانب الأحماض الدهنية."
      },
      { 
        q: "All of the following are examples for derived lipids except...", 
        type: "mcq", 
        options: ["Triglycerides.", "Cholesterol", "Steroid hormones", "Bile acids"], 
        a: 0, 
        hint: "الـ Triglycerides هي دهون 'بسيطة' (Simple)، وليست مشتقة.",
        explanation: "Triglycerides هي دهون بسيطة (Simple Lipids)، بينما الباقي دهون مشتقة."
      },
      { 
        q: "Which of the following is the rate limiting enzyme in cholesterol synthesis?", 
        type: "mcq", 
        options: ["Hormone sensitive lipase", "Ketothiolase", "Glutathione peroxidase", "HMG-CoA reductase"], 
        a: 3, 
        hint: "هذا هو الإنزيم الرئيسي الذي تستهدفه أدوية خفض الكوليسترول (Statins).",
        explanation: "إنزيم HMG-CoA reductase هو الإنزيم المحدد لسرعة تصنيع الكوليسترول، وتثبيطه هو طريقة عمل أدوية الستاتين."
      },
      { 
        q: "Which of the following statement is NOT true about bile acids?", 
        type: "mcq", 
        options: ["It is a good example for derived lipid.", "They are good emulsifying factors important for digestion and absorption of fats.", "They allow precipitation of cholesterol in the bile as cholesterol stones.", "None of the above"], 
        a: 2, 
        hint: "وظيفتها العكس؛ هي 'تمنع' ترسب الكوليسترول عن طريق إذابته.",
        explanation: "الأحماض الصفراوية تساعد على إذابة الكوليسترول في الصفراء؛ نقصها هو ما يؤدي إلى ترسبه وتكوين حصوات."
      },
      { 
        q: "All of the following are considered a possible cause for hypercholesterolemia except.", 
        type: "mcq", 
        options: ["Diet rich in carbohydrates and cholesterol.", "Diabetes mellitus.", "Hyperthyroidism.", "Obstructive jaundice."], 
        a: 2, 
        hint: "خمول الغدة (Hypo) هو الذي يسبب ارتفاع الكوليسترول، وليس فرط النشاط (Hyper).",
        explanation: "فرط نشاط الغدة الدرقية (Hyperthyroidism) يزيد من تكسير وإخراج الكوليسترول، مما يقلل مستواه في الدم، العكس في خمول الغدة."
      },
      { 
        q: "The main controlling enzyme of the lipolytic pathway is", 
        type: "mcq", 
        options: ["Lipoprotein lipase", "Hormone sensitive lipase", "Hepatic lipase", "None of the above"], 
        a: 1, 
        hint: "هذا الإنزيم (الذي 'يتحسس للهرمونات') هو المسؤول عن 'تكسير' الدهون (Lipolysis) المخزنة.",
        explanation: "إنزيم Hormone sensitive lipase (HSL) هو الإنزيم الرئيسي الذي يتحكم في تحلل الدهون المخزنة في الأنسجة الدهنية."
      },
      { 
        q: "The end products of lipolysis include...", 
        type: "mcq", 
        options: ["Acetyl coA", "Pyruvate", "Lactate", "Glycerol and free fatty acids"], 
        a: 3, 
        hint: "تكسير الدهون (TAG) ينتج المكونات الأساسية التي كونتّها.",
        explanation: "تكسير الدهون الثلاثية ينتج مكوناتها الأولية: الجلسرين والأحماض الدهنية الحرة."
      },
      { 
        q: "The main form of lipid in chylomicron is", 
        type: "mcq", 
        options: ["Triglycerides", "Phospholipids", "Cholesterol", "None of the above"], 
        a: 0, 
        hint: "وظيفة الكيلوميكرون الأساسية هي نقل الدهون الثلاثية (الغذائية) من الأمعاء.",
        explanation: "الكيلوميكرونات تنقل الدهون الغذائية، لذا فإن الدهون الثلاثية (Triglycerides) تشكل المكون الأكبر فيها."
      }
    ]
  },

  // ==========================================================
  // القسم الثالث: الدهون (الجزء الثاني)
  // ==========================================================
  biochem_lipids_2: {
    title: "Lipid Metabolism - Part 2",
    questions: [
      { 
        q: "is the main lipid constituent of chylomicron.", 
        type: "mcq", 
        options: ["Triglycerides", "Phospholipids", "Cholesterol", "None of the above"], 
        a: 0, 
        hint: "هذا سؤال مكرر، وظيفتها نقل الدهون الغذائية (الدهون الثلاثية).",
        explanation: "الدهون الثلاثية (Triglycerides) تشكل حوالي 90% من محتوى الكيلوميكرون."
      },
      { 
        q: "The main lipid constituent of low density lipoprotein is", 
        type: "mcq", 
        options: ["Triglycerides", "Phospholipids", "Cholesterol", "None of the above"], 
        a: 2, 
        hint: "الـ LDL يُعرف بـ 'الكوليسترول الضار' لأنه الناقل الرئيسي للكوليسترول للأنسجة.",
        explanation: "الـ LDL غني جداً بالكوليسترول (Cholesterol) وينقله من الكبد إلى الأنسجة، ولهذا يسمى الكوليسترول السيء."
      },
      { 
        q: "Which of the following plasma lipoprotein types is cardioprotective?", 
        type: "mcq", 
        options: ["Chylomicron", "Low density lipoprotein", "High density lipoprotein", "Very low density lipoprotein"], 
        a: 2, 
        hint: "الـ HDL يُعرف بـ 'الكوليسترول الجيد' لأنه ينقل الكوليسترول بعيداً عن الأنسجة.",
        explanation: "الـ HDL (عالي الكثافة) يحمي القلب لأنه يقوم بالنقل العكسي للكوليسترول من الأنسجة إلى الكبد للتخلص منه."
      },
      { 
        q: "Which of the following plasma lipoproteins is implicated in dietary TAG absorption?", 
        type: "mcq", 
        options: ["Chylomicron", "Low density lipoprotein", "High density lipoprotein", "Very low density lipoprotein"], 
        a: 0, 
        hint: "هو النوع الذي يتكون في 'الأمعاء' لنقل الدهون 'الغذائية' (Dietary).",
        explanation: "الكيلوميكرون (Chylomicron) هو المسؤول عن نقل الدهون الثلاثية الغذائية الممتصة من الأمعاء."
      },
      { 
        q: "Elevated plasma level of which of the following lipoprotein types predisposes atherosclerotic heart disease?", 
        type: "mcq", 
        options: ["Chylomicron", "Low density lipoprotein", "High density lipoprotein", "Very low density lipoprotein"], 
        a: 1, 
        hint: "ارتفاع 'الكوليسترول الضار' (LDL) يسبب تصلب الشرايين.",
        explanation: "ارتفاع مستوى LDL يؤدي لترسب الكوليسترول في جدران الشرايين وتكوين اللويحات (Atherosclerosis)."
      },
      { 
        q: "The main form of dietary lipids is", 
        type: "mcq", 
        options: ["Cholesterol", "Triacylglycerol", "Glycolipid", "None of the above"], 
        a: 1, 
        hint: "معظم الدهون التي نأكلها تكون في صورة 'دهون ثلاثية' (Triacylglycerol).",
        explanation: "الدهون الثلاثية (Triacylglycerol) تشكل النسبة العظمى من الدهون في طعامنا."
      },
      { 
        q: "The Enzyme responsible for dietary TAG digestion is........", 
        type: "mcq", 
        options: ["Hepatic lipase", "Pancreatic lipase", "Gastric lipase", "None of the above"], 
        a: 1, 
        hint: "هو الإنزيم الرئيسي لهضم الدهون ويُفرز من 'البنكرياس'.",
        explanation: "إنزيم الليباز البنكرياسي (Pancreatic lipase) هو الإنزيم الأهم والأساسي لهضم الدهون الثلاثية في الأمعاء."
      }
    ]
  },

  // ==========================================================
  // القسم الرابع: البروتينات
  // ==========================================================
  biochem_proteins: {
    title: "Protein & Amino Acid Metabolism",
    questions: [
      { 
        q: "All proteins contain the", 
        type: "mcq", 
        options: ["Same 20 amino acids", "Different amino acids", "300 Amino acids occurring in nature", "Only a few amino acids"], 
        a: 0, 
        hint: "هناك 20 حمض أميني 'قياسي' (Standard) تدخل في تركيب البروتينات.",
        explanation: "البروتينات في جميع الكائنات الحية تتكون من تشكيلات مختلفة من نفس الـ 20 حمض أميني القياسي."
      },
      { 
        q: "In proteins the a-helix and b-pleated sheet are examples of", 
        type: "mcq", 
        options: ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"], 
        a: 1, 
        hint: "التركيب 'الأولي' هو التسلسل، والـ 'الثانوي' هو أول أشكال الطي.",
        explanation: "حلزون ألفا وصفائح بيتا هي أشكال منتظمة من الطي المحلي للسلسلة الببتيدية وتعرف بالتركيب الثانوي (Secondary Structure)."
      },
      { 
        q: "Pepsin acts on denatured proteins to produce", 
        type: "mcq", 
        options: ["Proteoses and peptones", "Polypeptides", "Peptides", "Dipeptides"], 
        a: 0, 
        hint: "الببسين يكسر البروتينات الكبيرة إلى أجزاء أصغر تسمى بروتيوزات وببتونات.",
        explanation: "إنزيم الببسين في المعدة يهضم البروتينات جزئياً وينتج خليطاً من البروتيوز والببتونات (سلاسل ببتيدية أقصر)."
      },
      { 
        q: "The main site of urea synthesis in mammals", 
        type: "mcq", 
        options: ["Liver", "Skin", "Intestine", "Kidney"], 
        a: 0, 
        hint: "دورة اليوريا (Urea cycle) تحدث بشكل حصري تقريباً في 'الكبد'.",
        explanation: "الكبد هو العضو الوحيد الذي يحتوي على جميع إنزيمات دورة اليوريا اللازمة للتخلص من الأمونيا."
      },
      { 
        q: "The enzymes of urea synthesis are found", 
        type: "mcq", 
        options: ["Mitochondria only", "Cytosol only", "Both mitochondria and cytosol", "Nucleus"], 
        a: 2, 
        hint: "تبدأ الدورة في الميتوكوندريا وتكتمل في السيتوسول.",
        explanation: "دورة اليوريا تبدأ بإنزيمات داخل الميتوكوندريا ثم تنتقل خطواتها الباقية إلى سيتوبلازم الخلية (Cytosol)."
      },
      { 
        q: "Primary structure of a protein is formed by", 
        type: "mcq", 
        options: ["Hydrogen bonds", "Peptide bonds", "Disulphide bonds", "All of these"], 
        a: 1, 
        hint: "التركيب الأولي هو مجرد 'تسلسل' الأحماض الأمينية المرتبطة بـ 'روابط ببتيدية'.",
        explanation: "التركيب الأولي (Primary Structure) يُعرف بتسلسل الأحماض الأمينية، والرابطة التي تمسكها ببعضها هي الرابطة الببتيدية."
      },
      { 
        q: "An organ which is extremely sensitive to ammonia toxicity is", 
        type: "mcq", 
        options: ["Liver", "Brain", "Kidney", "Heart"], 
        a: 1, 
        hint: "ارتفاع الأمونيا هو سبب رئيسي للاعتلال 'الدماغي' الكبدي.",
        explanation: "المخ حساس جداً لسمية الأمونيا، وزيادتها تؤدي إلى غيبوبة وتلف دماغي."
      },
      { 
        q: "The major site of urea synthesis is", 
        type: "mcq", 
        options: ["Brain", "Kidneys", "Liver", "Muscles"], 
        a: 2, 
        hint: "هذا سؤال مكرر، 'الكبد' هو العضو المسؤول.",
        explanation: "كما ذكرنا، الكبد هو الموقع الرئيسي والأساسي لتصنيع اليوريا."
      },
      { 
        q: "Kwashiorkor occurs when the diet is severely deficient in", 
        type: "mcq", 
        options: ["Iron", "Calories", "Proteins", "Essential fatty acids"], 
        a: 2, 
        hint: "الـ 'كواشيوركور' يحدث بسبب نقص 'البروتين' (مع وجود سعرات حرارية كافية).",
        explanation: "مرض الكواشيوركور ينتج عن نقص حاد في البروتين في الغذاء، رغم أن السعرات الحرارية قد تكون كافية."
      },
      { 
        q: "Clinical features of Kwashiorkor include all of the following except", 
        type: "mcq", 
        options: ["Mental retardation", "Muscle wasting", "Oedema", "Anaemia"], 
        a: 1, 
        hint: "الـ 'Oedema' (التورم) هو السمة المميزة، ويخفي 'الهزال العضلي' (Wasting) الذي يميز 'الماراسمس'.",
        explanation: "رغم حدوث ضمور عضلي، إلا أنه يكون 'مخفياً' بسبب التورم (Oedema). الهزال العضلي الشديد والواضح هو العلامة المميزة للماراسمس وليس الكواشيوركور."
      },
      { 
        q: "Marasmus occurs from deficient intake of", 
        type: "mcq", 
        options: ["Essential amino acids", "Essential fatty acids", "Calories", "Zinc"], 
        a: 2, 
        hint: "الـ 'ماراسمس' هو 'مجاعة' (نقص عام في 'السعرات' والبروتين).",
        explanation: "الماراسمس هو حالة سوء تغذية شاملة تنتج عن نقص حاد في السعرات الحرارية (الطاقة) والبروتين معاً."
      },
      { 
        q: "During starvation, the first reserve nutrient to be depleted is", 
        type: "mcq", 
        options: ["Glycogen", "Proteins", "Triglycerides (", "Cholesterol"], 
        a: 0, 
        hint: "مخزون 'الجليكوجين' (في الكبد والعضلات) هو أول ما يستهلك (خلال 24 ساعة).",
        explanation: "الجليكوجين هو مخزون الطاقة قصير الأمد، ويُستنفد أولاً خلال ساعات الصيام الأولى قبل اللجوء للدهون."
      },
      { 
        q: "Normal range of serum urea is", 
        type: "mcq", 
        options: ["0.6-1.5 mg/dl", "9-11 mg/dl", "20-45 mg/dl", "60-100 mg/dl"], 
        a: 2, 
        hint: "النسب الطبيعية لليوريا تقع في هذا النطاق (أو ما يعادله 0-40 حسب الملف).",
        explanation: "المعدل الطبيعي لليوريا في الدم يتراوح تقريباً بين 20 إلى 45 مجم/ديسيلتر (قد تختلف المراجع قليلاً)."
      }
    ]
  }
};
console.log("Biochemistry file loaded successfully");
