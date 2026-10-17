// 第1期（Week 1〜13）文字と音・あいさつ・自己紹介 — CEFR A0→A1
window.WEEKS = (window.WEEKS || []).concat([
  // ===== Week 1 =====
  {
    week: 1,
    title: "文字①母音と「नमस्ते」",
    scene: "初めてのあいさつ",
    cefr: "A0",
    goal: "नमस्ते・धन्यवाद・आप कैसे हैं? などのあいさつを丸ごと言え、母音の文字と क ख ग घ が読める。",
    letters: [
      { ch: "अ", rom: "a", ja: "ア（短く軽く。口はあまり開けない）", ex: "अब", exRom: "ab", exJa: "今" },
      { ch: "आ", rom: "ā", ja: "アー（口を大きく開けて長く）", ex: "आम", exRom: "ām", exJa: "マンゴー" },
      { ch: "इ", rom: "i", ja: "イ（短く）", ex: "इधर", exRom: "idhar", exJa: "こちら" },
      { ch: "ई", rom: "ī", ja: "イー（口を横に引いて長く）", ex: "ईद", exRom: "īd", exJa: "イード（イスラムのお祭り）" },
      { ch: "उ", rom: "u", ja: "ウ（唇を丸めて短く）", ex: "उधर", exRom: "udhar", exJa: "あちら" },
      { ch: "ऊ", rom: "ū", ja: "ウー（唇を丸めて前に出し、長く）", ex: "ऊन", exRom: "ūn", exJa: "毛糸" },
      { ch: "ए", rom: "e", ja: "エー（日本語のエより少し長く）", ex: "एक", exRom: "ek", exJa: "1" },
      { ch: "ऐ", rom: "ai", ja: "エァ（エより口を広く開ける。アイとは読まない）", ex: "ऐसा", exRom: "aisā", exJa: "こんな" },
      { ch: "ओ", rom: "o", ja: "オー（唇を丸めて長く）", ex: "ओर", exRom: "or", exJa: "〜の方（方向）" },
      { ch: "औ", rom: "au", ja: "オァ（オより口を大きく開ける。アウとは読まない）", ex: "और", exRom: "aur", exJa: "そして・〜と" },
      { ch: "ऋ", rom: "ri", ja: "リ（軽く「リ」。古い言葉に多い）", ex: "ऋषि", exRom: "rishi", exJa: "聖者" },
      { ch: "अं", rom: "aṁ", ja: "アン（上の点 ं は「ン」の印。鼻に抜ける）", ex: "अंगूर", exRom: "angūr", exJa: "ぶどう" },
      { ch: "क", rom: "k", ja: "カ（息をあまり出さない。手のひらに息が当たらないように）", ex: "कल", exRom: "kal", exJa: "明日・昨日" },
      { ch: "ख", rom: "kh", ja: "カ を息を強く出して。手のひらに息が当たる（有気音）", ex: "खाना", exRom: "khānā", exJa: "ごはん・食べ物" },
      { ch: "ग", rom: "g", ja: "ガ（日本語のガとほぼ同じ）", ex: "गाना", exRom: "gānā", exJa: "歌" },
      { ch: "घ", rom: "gh", ja: "ガ のあとに息を「ハッ」と混ぜる（有気音）", ex: "घर", exRom: "ghar", exJa: "家" }
    ],
    grammar: {
      title: "あいさつの決まり文句・語順・जी",
      points: [
        "नमस्ते（namaste）は朝・昼・夜、会うときも別れるときも使える万能のあいさつです。胸の前で手を合わせて軽く頭を下げると、とても好印象です。",
        "ヒンディー語の語順は日本語と同じで、主語が先、動詞（です・ます）が最後に来ます。मैं ठीक हूँ は「私は・元気・です」と、日本語をそのまま並べた形です。英語のように語順を入れ替える必要はありません。",
        "जी（jī）は言葉にていねいさを足す小さな語です。名前のあとにつけると「〜さん」（राज जी＝ラージさん）、返事につけると जी हाँ（はい）・जी नहीं（いいえ）になります。迷ったら जी をつければ失礼になりません。",
        "「ありがとう」は धन्यवाद（ややあらたまった言い方）と शुक्रिया（日常的な言い方）の2つがあります。どちらも通じます。親しい間柄では何度もお礼を言わないことも多いので、言われなくても気にしなくて大丈夫です。",
        "「お元気ですか」は、相手が男性なら आप कैसे हैं?、女性なら आप कैसी हैं? と形が変わります。言葉が相手の男女で変わるのは日本語にないところです。今週は理屈より、決まり文句として丸ごと覚えましょう。"
      ],
      examples: [
        { hi: "नमस्ते जी।", rom: "namaste jī.", ja: "こんにちは（ていねいに）。", eng: "Hello." },
        { hi: "आप कैसे हैं?", rom: "āp kaise haiṁ?", ja: "お元気ですか（男性に）。", eng: "How are you?" },
        { hi: "मैं ठीक हूँ, धन्यवाद।", rom: "maiṁ ṭhīk hūṁ, dhanyavād.", ja: "元気です、ありがとうございます。", eng: "I'm fine, thank you." },
        { hi: "आपसे मिलकर खुशी हुई।", rom: "āpse milkar khushī huī.", ja: "お会いできてうれしいです。", eng: "Nice to meet you." },
        { hi: "जी हाँ, शुक्रिया।", rom: "jī hāṁ, shukriyā.", ja: "はい、ありがとう。", eng: "Yes, thanks." },
        { hi: "फिर मिलेंगे।", rom: "phir mileṁge.", ja: "また会いましょう。", eng: "See you again." }
      ],
      tip: "まずは「नमस्ते・धन्यवाद・जी」の3つだけで、あいさつ・お礼・返事ができます。手を合わせる動きとセットで体に覚えさせましょう。"
    },
    vocab: [
      { hi: "नमस्ते", rom: "namaste", ja: "こんにちは・さようなら", eng: "hello / goodbye", ex: "नमस्ते, राज जी।", exRom: "namaste, Rāj jī.", exJa: "こんにちは、ラージさん。" },
      { hi: "जी", rom: "jī", ja: "はい・〜さん（ていねいさを足す）", eng: "yes / Mr. / Ms.", ex: "जी हाँ, मैं ठीक हूँ।", exRom: "jī hāṁ, maiṁ ṭhīk hūṁ.", exJa: "はい、元気です。" },
      { hi: "हाँ", rom: "hāṁ", ja: "はい・うん", eng: "yes", ex: "हाँ, ठीक है।", exRom: "hāṁ, ṭhīk hai.", exJa: "はい、わかりました。" },
      { hi: "नहीं", rom: "nahīṁ", ja: "いいえ・〜ない", eng: "no / not", ex: "जी नहीं, धन्यवाद।", exRom: "jī nahīṁ, dhanyavād.", exJa: "いいえ、結構です。" },
      { hi: "धन्यवाद", rom: "dhanyavād", ja: "ありがとう（ややあらたまった言い方）", eng: "thank you", ex: "धन्यवाद, शर्मा जी।", exRom: "dhanyavād, Sharmā jī.", exJa: "ありがとうございます、シャルマさん。" },
      { hi: "शुक्रिया", rom: "shukriyā", ja: "ありがとう（日常的な言い方）", eng: "thanks", ex: "बहुत शुक्रिया, नेहा जी।", exRom: "bahut shukriyā, Nehā jī.", exJa: "どうもありがとう、ネハさん。" },
      { hi: "ठीक", rom: "ṭhīk", ja: "元気な・大丈夫な・正しい", eng: "fine / okay", ex: "मैं ठीक हूँ।", exRom: "maiṁ ṭhīk hūṁ.", exJa: "私は元気です。" },
      { hi: "आप", rom: "āp", ja: "あなた（ていねい）", eng: "you (polite)", ex: "आप कैसे हैं?", exRom: "āp kaise haiṁ?", exJa: "お元気ですか（男性に）。" },
      { hi: "मैं", rom: "maiṁ", ja: "私", eng: "I", ex: "मैं आकिहिरो हूँ।", exRom: "maiṁ Ākihiro hūṁ.", exJa: "私は章弘です。" },
      { hi: "भी", rom: "bhī", ja: "〜も", eng: "also / too", ex: "मुझे भी खुशी हुई।", exRom: "mujhe bhī khushī huī.", exJa: "私もうれしいです。" },
      { hi: "कैसे", rom: "kaise", ja: "どう・どのように（男性に）", eng: "how", ex: "राज जी, आप कैसे हैं?", exRom: "Rāj jī, āp kaise haiṁ?", exJa: "ラージさん、お元気ですか。" },
      { hi: "कैसी", rom: "kaisī", ja: "どう（女性に）", eng: "how (to a woman)", ex: "प्रिया जी, आप कैसी हैं?", exRom: "Priyā jī, āp kaisī haiṁ?", exJa: "プリヤさん、お元気ですか。" },
      { hi: "बहुत", rom: "bahut", ja: "とても・たくさん", eng: "very / a lot", ex: "बहुत अच्छा!", exRom: "bahut achchhā!", exJa: "とてもいいですね！" },
      { hi: "अच्छा", rom: "achchhā", ja: "よい・なるほど", eng: "good / I see", ex: "अच्छा, ठीक है।", exRom: "achchhā, ṭhīk hai.", exJa: "なるほど、わかりました。" },
      { hi: "खुशी", rom: "khushī", ja: "うれしさ・喜び（女）", eng: "happiness / pleasure", ex: "आपसे मिलकर खुशी हुई।", exRom: "āpse milkar khushī huī.", exJa: "お会いできてうれしいです。" },
      { hi: "फिर", rom: "phir", ja: "また・それから", eng: "again / then", ex: "फिर मिलेंगे।", exRom: "phir mileṁge.", exJa: "また会いましょう。" },
      { hi: "मिलना", rom: "milnā", ja: "会う", eng: "to meet", ex: "कल मिलते हैं।", exRom: "kal milte haiṁ.", exJa: "明日会いましょう。" },
      { hi: "स्वागत", rom: "svāgat", ja: "歓迎（男）", eng: "welcome", ex: "आपका स्वागत है।", exRom: "āpkā svāgat hai.", exJa: "ようこそ。" },
      { hi: "माफ़ कीजिए", rom: "māf kījie", ja: "すみません・ごめんなさい", eng: "excuse me / sorry", ex: "माफ़ कीजिए, एक मिनट।", exRom: "māf kījie, ek minaṭ.", exJa: "すみません、ちょっと待ってください。" },
      { hi: "कोई बात नहीं", rom: "koī bāt nahīṁ", ja: "大丈夫です・どういたしまして", eng: "no problem", ex: "जी, कोई बात नहीं।", exRom: "jī, koī bāt nahīṁ.", exJa: "はい、大丈夫ですよ。" }
    ],
    sentences: [
      { ja: "こんにちは、ラージさん。", hi: "नमस्ते, राज जी।", rom: "namaste, Rāj jī.", eng: "Hello, Raj." },
      { ja: "お元気ですか（男性に）。", hi: "आप कैसे हैं?", rom: "āp kaise haiṁ?", eng: "How are you?" },
      { ja: "はい（ていねいに）。", hi: "जी हाँ।", rom: "jī hāṁ.", eng: "Yes." },
      { ja: "いいえ、結構です。", hi: "जी नहीं, शुक्रिया।", rom: "jī nahīṁ, shukriyā.", eng: "No, thanks." },
      { ja: "元気です、ありがとうございます。", hi: "मैं ठीक हूँ, धन्यवाद।", rom: "maiṁ ṭhīk hūṁ, dhanyavād.", eng: "I'm fine, thank you." },
      { ja: "プリヤさん、お元気ですか。", hi: "प्रिया जी, आप कैसी हैं?", rom: "Priyā jī, āp kaisī haiṁ?", eng: "Priya, how are you?" },
      { ja: "私も元気です。", hi: "मैं भी ठीक हूँ।", rom: "maiṁ bhī ṭhīk hūṁ.", eng: "I'm fine too." },
      { ja: "お会いできてうれしいです。", hi: "आपसे मिलकर खुशी हुई।", rom: "āpse milkar khushī huī.", eng: "Nice to meet you." },
      { ja: "私もお会いできてうれしいです。", hi: "मुझे भी आपसे मिलकर खुशी हुई।", rom: "mujhe bhī āpse milkar khushī huī.", eng: "Nice to meet you too." },
      { ja: "どうもありがとうございます。また会いましょう。", hi: "बहुत धन्यवाद, फिर मिलेंगे।", rom: "bahut dhanyavād, phir mileṁge.", eng: "Thank you very much. See you again." }
    ],
    dialogue: {
      title: "デリーの空港で初めて会う",
      lines: [
        { s: "A", name: "Akihiro", hi: "नमस्ते जी।", rom: "namaste jī.", ja: "こんにちは。", eng: "Hello." },
        { s: "B", name: "Raj", hi: "नमस्ते! आकिहिरो जी?", rom: "namaste! Ākihiro jī?", ja: "こんにちは！章弘さんですか。", eng: "Hello! Akihiro?" },
        { s: "A", name: "Akihiro", hi: "जी हाँ। नमस्ते, राज जी।", rom: "jī hāṁ. namaste, Rāj jī.", ja: "はい。こんにちは、ラージさん。", eng: "Yes. Hello, Raj." },
        { s: "B", name: "Raj", hi: "दिल्ली में आपका स्वागत है!", rom: "Dillī meṁ āpkā svāgat hai!", ja: "デリーへようこそ！", eng: "Welcome to Delhi!" },
        { s: "A", name: "Akihiro", hi: "आपका बहुत धन्यवाद।", rom: "āpkā bahut dhanyavād.", ja: "どうもありがとうございます。", eng: "Thank you very much." },
        { s: "B", name: "Raj", hi: "आप कैसे हैं?", rom: "āp kaise haiṁ?", ja: "お元気ですか。", eng: "How are you?" },
        { s: "A", name: "Akihiro", hi: "मैं ठीक हूँ। आप कैसे हैं?", rom: "maiṁ ṭhīk hūṁ. āp kaise haiṁ?", ja: "元気です。ラージさんはお元気ですか。", eng: "I'm fine. How are you?" },
        { s: "B", name: "Raj", hi: "मैं भी ठीक हूँ, धन्यवाद।", rom: "maiṁ bhī ṭhīk hūṁ, dhanyavād.", ja: "私も元気です、ありがとう。", eng: "I'm fine too, thanks." },
        { s: "A", name: "Akihiro", hi: "आपसे मिलकर खुशी हुई।", rom: "āpse milkar khushī huī.", ja: "お会いできてうれしいです。", eng: "Nice to meet you." },
        { s: "B", name: "Raj", hi: "मुझे भी। चलिए, गाड़ी बाहर है।", rom: "mujhe bhī. chalie, gāṛī bāhar hai.", ja: "私もです。さあ行きましょう、車は外です。", eng: "Me too. Let's go, the car is outside." },
        { s: "A", name: "Akihiro", hi: "ठीक है, शुक्रिया।", rom: "ṭhīk hai, shukriyā.", ja: "わかりました、ありがとう。", eng: "Okay, thanks." }
      ]
    },
    writing: "あいさつを3つ、デーヴァナーガリーで書き写そう：नमस्ते (namaste)／आप कैसे हैं? (āp kaise haiṁ?)／मैं ठीक हूँ, धन्यवाद। (maiṁ ṭhīk hūṁ, dhanyavād.)。母音 अ〜औ と क ख ग घ も3回ずつ書きます。",
    speaking: "手を合わせて「नमस्ते जी」から始め、ラージさん（男性）には आप कैसे हैं?、プリヤさん（女性）には आप कैसी हैं? と言い分けて、30秒のあいさつを録音しよう。ख・घ で手のひらに息が当たっているかも確かめます。"
  },

  // ===== Week 2 =====
  {
    week: 2,
    title: "文字②子音と「मैं … हूँ」",
    scene: "自己紹介",
    cefr: "A0",
    goal: "名前・出身・仕事を मैं … हूँ で言え、子音の文字（そり舌音・歯音・有気音）が読める。",
    letters: [
      { ch: "च", rom: "ch", ja: "チャ（息をあまり出さない）", ex: "चाय", exRom: "chāy", exJa: "お茶・チャイ" },
      { ch: "छ", rom: "chh", ja: "チャ を息を強く出して（有気音）", ex: "छोटा", exRom: "chhoṭā", exJa: "小さい" },
      { ch: "ज", rom: "j", ja: "ジャ（日本語のジャとほぼ同じ）", ex: "जापान", exRom: "Jāpān", exJa: "日本" },
      { ch: "झ", rom: "jh", ja: "ジャ のあとに息を「ハッ」と混ぜる（有気音）", ex: "झील", exRom: "jhīl", exJa: "湖" },
      { ch: "ट", rom: "ṭ", ja: "そり舌のタ：舌先を上あごの奥へ反らせ、弾いて「タ」。こもった音になる", ex: "टैक्सी", exRom: "ṭaiksī", exJa: "タクシー" },
      { ch: "ठ", rom: "ṭh", ja: "そり舌のタ＋強い息（有気音）", ex: "ठीक", exRom: "ṭhīk", exJa: "大丈夫・元気" },
      { ch: "ड", rom: "ḍ", ja: "そり舌のダ：舌先を反らせて「ダ」", ex: "डिब्बा", exRom: "ḍibbā", exJa: "箱" },
      { ch: "ढ", rom: "ḍh", ja: "そり舌のダ＋息（有気音）", ex: "ढाबा", exRom: "ḍhābā", exJa: "道ばたの食堂" },
      { ch: "ण", rom: "ṇ", ja: "そり舌のナ：舌先を反らせたまま「ナ」。語の中や終わりに出る", ex: "गणेश", exRom: "Gaṇesh", exJa: "ガネーシャ神" },
      { ch: "त", rom: "t", ja: "歯のタ：舌先を上の前歯の裏にぴったり当てて「タ」。日本語のタより軽く明るい", ex: "तीन", exRom: "tīn", exJa: "3" },
      { ch: "थ", rom: "th", ja: "歯のタ＋強い息（有気音）。英語の th ではない", ex: "थोड़ा", exRom: "thoṛā", exJa: "少し" },
      { ch: "द", rom: "d", ja: "歯のダ：舌先を前歯の裏に当てて「ダ」", ex: "दस", exRom: "das", exJa: "10" },
      { ch: "ध", rom: "dh", ja: "歯のダ＋息（有気音）", ex: "धन्यवाद", exRom: "dhanyavād", exJa: "ありがとう" },
      { ch: "न", rom: "n", ja: "ナ（日本語のナとほぼ同じ）", ex: "नाम", exRom: "nām", exJa: "名前" },
      { ch: "प", rom: "p", ja: "パ（息をあまり出さない）", ex: "पानी", exRom: "pānī", exJa: "水" },
      { ch: "फ", rom: "ph", ja: "パ を息を強く出して（有気音）。英語の f ではない", ex: "फल", exRom: "phal", exJa: "果物" },
      { ch: "ब", rom: "b", ja: "バ（日本語のバとほぼ同じ）", ex: "बस", exRom: "bas", exJa: "バス・もう十分" },
      { ch: "भ", rom: "bh", ja: "バ のあとに息を「ハッ」と混ぜる（有気音）", ex: "भारत", exRom: "Bhārat", exJa: "インド" },
      { ch: "म", rom: "m", ja: "マ（日本語のマとほぼ同じ）", ex: "माँ", exRom: "māṁ", exJa: "お母さん" },
      { ch: "ङ", rom: "ṅ", ja: "「ング」の ン（説明だけ）。ふつうは ं で書くので、単独ではほとんど出てきません" },
      { ch: "ञ", rom: "ñ", ja: "「ニャ」の ニ（説明だけ）。これも ं で書くことが多く、単独ではほとんど出てきません" }
    ],
    grammar: {
      title: "मैं … हूँ（私は〜です）・आप … हैं・否定 नहीं",
      points: [
        "「私は〜です」は मैं ＋ 名詞 ＋ हूँ です。हूँ は日本語の「です」と同じく文の最後に来ます。日本語の「は」に当たる語はなく、मैं（私）のあとにそのまま名詞を置けばよいので、日本人には並べやすい形です。",
        "「です」に当たる語は主語で変わります。मैं（私）なら हूँ、आप（あなた）なら हैं です（来週は यह・वह の है を学びます）。英語の am／are と同じ考え方です。友だち同士で使う तुम には हो を使いますが、まずは आप … हैं で十分です。",
        "否定は नहीं を हूँ・हैं のすぐ前に置きます：मैं डॉक्टर नहीं हूँ（私は医者ではありません）。英語の a／an のような語はいらないので、職業や国の名前をそのまま置きます。",
        "名前は मेरा नाम … है（私の名前は〜です）と言います。今週はこの形を決まり文句として丸ごと覚えましょう。相手の名前は आपका नाम क्या है?（お名前は？）と聞きます。",
        "出身は से（〜から）を使って मैं जापान से हूँ（日本から＝日本出身）と言います。से は日本語の「から」と同じで名詞の後ろに置く語（後置詞）です。ローマ字でも Jāpān se と分けて書きます。"
      ],
      examples: [
        { hi: "मैं आकिहिरो हूँ।", rom: "maiṁ Ākihiro hūṁ.", ja: "私は章弘です。", eng: "I am Akihiro." },
        { hi: "मेरा नाम आकिहिरो इवाता है।", rom: "merā nām Ākihiro Ivātā hai.", ja: "私の名前は岩田章弘です。", eng: "My name is Akihiro Iwata." },
        { hi: "मैं जापान से हूँ।", rom: "maiṁ Jāpān se hūṁ.", ja: "私は日本出身です。", eng: "I am from Japan." },
        { hi: "मैं डॉक्टर नहीं हूँ।", rom: "maiṁ ḍokṭar nahīṁ hūṁ.", ja: "私は医者ではありません。", eng: "I am not a doctor." },
        { hi: "मैं थेरेपिस्ट हूँ।", rom: "maiṁ therepisṭ hūṁ.", ja: "私は施術者（セラピスト）です。", eng: "I am a therapist." },
        { hi: "आप दिल्ली से हैं?", rom: "āp Dillī se haiṁ?", ja: "あなたはデリー出身ですか。", eng: "Are you from Delhi?" }
      ],
      tip: "「मैं→हूँ、आप→हैं」をセットで覚えましょう。どちらも最後は鼻に抜ける「ン」の音（hūṁ・haiṁ）です。"
    },
    vocab: [
      { hi: "नाम", rom: "nām", ja: "名前（男）", eng: "name", ex: "मेरा नाम आकिहिरो है।", exRom: "merā nām Ākihiro hai.", exJa: "私の名前は章弘です。" },
      { hi: "मेरा", rom: "merā", ja: "私の", eng: "my", ex: "मेरा नाम नेहा है।", exRom: "merā nām Nehā hai.", exJa: "私の名前はネハです。" },
      { hi: "आपका", rom: "āpkā", ja: "あなたの", eng: "your", ex: "आपका नाम क्या है?", exRom: "āpkā nām kyā hai?", exJa: "お名前は何ですか。" },
      { hi: "जापान", rom: "Jāpān", ja: "日本（男）", eng: "Japan", ex: "मैं जापान से हूँ।", exRom: "maiṁ Jāpān se hūṁ.", exJa: "私は日本出身です。" },
      { hi: "जापानी", rom: "jāpānī", ja: "日本人・日本の・日本語", eng: "Japanese", ex: "मैं जापानी हूँ।", exRom: "maiṁ jāpānī hūṁ.", exJa: "私は日本人です。" },
      { hi: "भारत", rom: "Bhārat", ja: "インド（男）", eng: "India", ex: "राज जी भारत से हैं।", exRom: "Rāj jī Bhārat se haiṁ.", exJa: "ラージさんはインド出身です。" },
      { hi: "भारतीय", rom: "bhāratīy", ja: "インド人・インドの", eng: "Indian", ex: "नेहा जी भारतीय हैं।", exRom: "Nehā jī bhāratīy haiṁ.", exJa: "ネハさんはインド人です。" },
      { hi: "से", rom: "se", ja: "〜から（出身・出発点）", eng: "from", ex: "मैं योकोहामा से हूँ।", exRom: "maiṁ Yokohāmā se hūṁ.", exJa: "私は横浜出身です。" },
      { hi: "हूँ", rom: "hūṁ", ja: "（私は）〜です", eng: "am", ex: "मैं तैयार हूँ।", exRom: "maiṁ taiyār hūṁ.", exJa: "私は準備ができています。" },
      { hi: "हैं", rom: "haiṁ", ja: "（あなたは・目上の人は）〜です", eng: "are / is (polite)", ex: "आप राज जी हैं?", exRom: "āp Rāj jī haiṁ?", exJa: "あなたがラージさんですか。" },
      { hi: "थेरेपिस्ट", rom: "therepisṭ", ja: "施術者・セラピスト", eng: "therapist", ex: "मैं थेरेपिस्ट हूँ।", exRom: "maiṁ therepisṭ hūṁ.", exJa: "私は施術者です。" },
      { hi: "डॉक्टर", rom: "ḍokṭar", ja: "医者", eng: "doctor", ex: "मैं डॉक्टर नहीं हूँ।", exRom: "maiṁ ḍokṭar nahīṁ hūṁ.", exJa: "私は医者ではありません。" },
      { hi: "क्लिनिक", rom: "klinik", ja: "院・診療所（男）", eng: "clinic", ex: "मेरा क्लिनिक जापान में है।", exRom: "merā klinik Jāpān meṁ hai.", exJa: "私の院は日本にあります。" },
      { hi: "मालिक", rom: "mālik", ja: "オーナー・経営者（男）", eng: "owner", ex: "मैं क्लिनिक का मालिक हूँ।", exRom: "maiṁ klinik kā mālik hūṁ.", exJa: "私は院の経営者です。" },
      { hi: "शहर", rom: "shahar", ja: "町・都市（男）", eng: "city", ex: "योकोहामा बड़ा शहर है।", exRom: "Yokohāmā baṛā shahar hai.", exJa: "横浜は大きな町です。" },
      { hi: "दोस्त", rom: "dost", ja: "友だち", eng: "friend", ex: "राज जी मेरे दोस्त हैं।", exRom: "Rāj jī mere dost haiṁ.", exJa: "ラージさんは私の友人です。" },
      { hi: "बिज़नेस", rom: "biznes", ja: "仕事・ビジネス（男）", eng: "business", ex: "यह मेरा बिज़नेस कार्ड है।", exRom: "yah merā biznes kārḍ hai.", exJa: "これは私の名刺です。" },
      { hi: "यहाँ", rom: "yahāṁ", ja: "ここ・ここに", eng: "here", ex: "मैं यहाँ हूँ।", exRom: "maiṁ yahāṁ hūṁ.", exJa: "私はここにいます。" },
      { hi: "और", rom: "aur", ja: "〜と・そして", eng: "and", ex: "नेहा और अर्जुन भारत से हैं।", exRom: "Nehā aur Arjun Bhārat se haiṁ.", exJa: "ネハさんとアルジュンさんはインド出身です。" },
      { hi: "मैनेजर", rom: "mainejar", ja: "マネージャー・責任者", eng: "manager", ex: "प्रिया जी मैनेजर हैं।", exRom: "Priyā jī mainejar haiṁ.", exJa: "プリヤさんはマネージャーです。" }
    ],
    sentences: [
      { ja: "私は章弘です。", hi: "मैं आकिहिरो हूँ।", rom: "maiṁ Ākihiro hūṁ.", eng: "I am Akihiro." },
      { ja: "私は日本人です。", hi: "मैं जापानी हूँ।", rom: "maiṁ jāpānī hūṁ.", eng: "I am Japanese." },
      { ja: "私の名前は岩田章弘です。", hi: "मेरा नाम आकिहिरो इवाता है।", rom: "merā nām Ākihiro Ivātā hai.", eng: "My name is Akihiro Iwata." },
      { ja: "私は横浜出身です。", hi: "मैं योकोहामा से हूँ।", rom: "maiṁ Yokohāmā se hūṁ.", eng: "I am from Yokohama." },
      { ja: "私は医者ではありません。", hi: "मैं डॉक्टर नहीं हूँ।", rom: "maiṁ ḍokṭar nahīṁ hūṁ.", eng: "I am not a doctor." },
      { ja: "私は施術者（セラピスト）です。", hi: "मैं थेरेपिस्ट हूँ।", rom: "maiṁ therepisṭ hūṁ.", eng: "I am a therapist." },
      { ja: "あなたはデリー出身ですか。", hi: "आप दिल्ली से हैं?", rom: "āp Dillī se haiṁ?", eng: "Are you from Delhi?" },
      { ja: "ラージさんはインド人です。", hi: "राज जी भारतीय हैं।", rom: "Rāj jī bhāratīy haiṁ.", eng: "Raj is Indian." },
      { ja: "私の院は大洲にあります。", hi: "मेरा क्लिनिक ओज़ू में है।", rom: "merā klinik Ozū meṁ hai.", eng: "My clinic is in Ozu." },
      { ja: "私はインド人ではありません、日本人です。", hi: "मैं भारतीय नहीं हूँ, जापानी हूँ।", rom: "maiṁ bhāratīy nahīṁ hūṁ, jāpānī hūṁ.", eng: "I am not Indian, I am Japanese." }
    ],
    dialogue: {
      title: "ホテルのロビーでネハさんと自己紹介",
      lines: [
        { s: "A", name: "Akihiro", hi: "नमस्ते। मेरा नाम आकिहिरो है।", rom: "namaste. merā nām Ākihiro hai.", ja: "こんにちは。私の名前は章弘です。", eng: "Hello. My name is Akihiro." },
        { s: "B", name: "Neha", hi: "नमस्ते, आकिहिरो जी। मैं नेहा हूँ।", rom: "namaste, Ākihiro jī. maiṁ Nehā hūṁ.", ja: "こんにちは、章弘さん。ネハです。", eng: "Hello, Akihiro. I'm Neha." },
        { s: "A", name: "Akihiro", hi: "आपसे मिलकर खुशी हुई।", rom: "āpse milkar khushī huī.", ja: "お会いできてうれしいです。", eng: "Nice to meet you." },
        { s: "B", name: "Neha", hi: "मुझे भी। आप जापान से हैं?", rom: "mujhe bhī. āp Jāpān se haiṁ?", ja: "私もです。日本からいらしたんですか。", eng: "Me too. Are you from Japan?" },
        { s: "A", name: "Akihiro", hi: "जी हाँ, मैं योकोहामा से हूँ।", rom: "jī hāṁ, maiṁ Yokohāmā se hūṁ.", ja: "はい、横浜出身です。", eng: "Yes, I'm from Yokohama." },
        { s: "B", name: "Neha", hi: "अच्छा! आप डॉक्टर हैं?", rom: "achchhā! āp ḍokṭar haiṁ?", ja: "そうなんですね！お医者さんですか。", eng: "I see! Are you a doctor?" },
        { s: "A", name: "Akihiro", hi: "जी नहीं, मैं थेरेपिस्ट हूँ।", rom: "jī nahīṁ, maiṁ therepisṭ hūṁ.", ja: "いいえ、施術者です。", eng: "No, I'm a therapist." },
        { s: "B", name: "Neha", hi: "बहुत अच्छा। मैं दिल्ली से हूँ।", rom: "bahut achchhā. maiṁ Dillī se hūṁ.", ja: "すてきですね。私はデリー出身です。", eng: "Very nice. I'm from Delhi." },
        { s: "A", name: "Akihiro", hi: "आप भी थेरेपिस्ट हैं?", rom: "āp bhī therepisṭ haiṁ?", ja: "あなたも施術者ですか。", eng: "Are you a therapist too?" },
        { s: "B", name: "Neha", hi: "नहीं, मैं टीचर हूँ।", rom: "nahīṁ, maiṁ ṭīchar hūṁ.", ja: "いいえ、私は先生です。", eng: "No, I'm a teacher." },
        { s: "A", name: "Akihiro", hi: "अच्छा। फिर मिलेंगे, नेहा जी।", rom: "achchhā. phir mileṁge, Nehā jī.", ja: "そうですか。また会いましょう、ネハさん。", eng: "I see. See you again, Neha." },
        { s: "B", name: "Neha", hi: "जी, फिर मिलेंगे!", rom: "jī, phir mileṁge!", ja: "はい、また会いましょう！", eng: "Yes, see you!" }
      ]
    },
    writing: "自己紹介を3文書こう。मेरा नाम … है। (merā nām … hai.)／मैं … से हूँ। (maiṁ … se hūṁ.)／मैं … हूँ। (maiṁ … hūṁ.) の型を使い、名前・出身・仕事を入れます。否定 मैं … नहीं हूँ। も1文足せたら◎。",
    speaking: "नमस्ते から始めて、名前・出身（横浜）・仕事を20秒で言ってみよう。ट（そり舌）と त（歯）、प と फ（息）の違いを意識して、録音を聞き返します。"
  },

  // ===== Week 3 =====
  {
    week: 3,
    title: "文字③母音記号と है・हैं",
    scene: "人や物を紹介する",
    cefr: "A0→A1",
    goal: "यह/वह … है・ये/वे … हैं で人や物を紹介でき、क्या で「はい・いいえ」の質問ができる。母音記号のついた文字が読める。",
    letters: [
      { ch: "य", rom: "y", ja: "ヤ（日本語のヤとほぼ同じ）", ex: "यह", exRom: "yah", exJa: "これ・この人" },
      { ch: "र", rom: "r", ja: "ラ（舌先を軽く1回弾く。日本語のラでよい）", ex: "रात", exRom: "rāt", exJa: "夜" },
      { ch: "ल", rom: "l", ja: "ラ（舌先を上の歯ぐきにつけたまま「ラ」。英語の l）", ex: "लाल", exRom: "lāl", exJa: "赤い" },
      { ch: "व", rom: "v", ja: "ヴァとワの間（上の歯を下唇に軽く当てるか、軽いワ）", ex: "वह", exRom: "vah", exJa: "あれ・あの人" },
      { ch: "श", rom: "sh", ja: "シャ（日本語のシャ）", ex: "शहर", exRom: "shahar", exJa: "町" },
      { ch: "ष", rom: "sh", ja: "シャ（श と同じ音で読んでよい。サンスクリット由来の語に出る）", ex: "भाषा", exRom: "bhāshā", exJa: "言葉・言語" },
      { ch: "स", rom: "s", ja: "サ（日本語のサ）", ex: "सात", exRom: "sāt", exJa: "7" },
      { ch: "ह", rom: "h", ja: "ハ（日本語のハ。語の終わりではほとんど聞こえないことも）", ex: "हाथ", exRom: "hāth", exJa: "手" },
      { ch: "का", rom: "ā", ja: "ā（アー）をつける記号 ा。文字の右に縦棒。का＝カー", ex: "काम", exRom: "kām", exJa: "仕事" },
      { ch: "कि", rom: "i", ja: "i（イ）をつける記号 ि。文字の左に書くが、読むのは子音のあと。कि＝キ", ex: "किताब", exRom: "kitāb", exJa: "本" },
      { ch: "की", rom: "ī", ja: "ī（イー）をつける記号 ी。文字の右に書く。की＝キー", ex: "चीनी", exRom: "chīnī", exJa: "砂糖" },
      { ch: "कु", rom: "u", ja: "u（ウ）をつける記号 ु。文字の下に書く。कु＝ク", ex: "कुछ", exRom: "kuchh", exJa: "何か・少し" },
      { ch: "कू", rom: "ū", ja: "ū（ウー）をつける記号 ू。文字の下に書く。कू＝クー", ex: "दूध", exRom: "dūdh", exJa: "牛乳" },
      { ch: "के", rom: "e", ja: "e（エー）をつける記号 े。文字の上に斜め線1本。के＝ケー", ex: "केला", exRom: "kelā", exJa: "バナナ" },
      { ch: "कै", rom: "ai", ja: "ai（エァ）をつける記号 ै。上に斜め線2本。कै＝ケァ", ex: "पैसा", exRom: "paisā", exJa: "お金" },
      { ch: "को", rom: "o", ja: "o（オー）をつける記号 ो。縦棒＋上に線1本。को＝コー", ex: "सोना", exRom: "sonā", exJa: "寝る" },
      { ch: "कौ", rom: "au", ja: "au（オァ）をつける記号 ौ。縦棒＋上に線2本。कौ＝コァ", ex: "कौन", exRom: "kaun", exJa: "誰" },
      { ch: "कृ", rom: "ri", ja: "ri（リ）をつける記号 ृ。文字の下に小さなかぎ。कृ＝クリ", ex: "कृपया", exRom: "kripayā", exJa: "どうか・お願いします" },
      { ch: "कं", rom: "ṁ", ja: "上の点 ं（アヌスヴァーラ）。「ン」をつける。次の子音に合わせて n や m の音になる。कं＝カン", ex: "हिंदी", exRom: "hindī", exJa: "ヒンディー語" },
      { ch: "काँ", rom: "ṁ", ja: "月と点 ँ（チャンドラビンドゥ）。母音を鼻に抜いて言う印。काँ＝カーン（鼻声）", ex: "हाँ", exRom: "hāṁ", exJa: "はい" },
      { ch: "क्", rom: "k", ja: "下の斜め線 ्（ハラント）。母音 a を消して子音だけにする印。क्＝ク（母音なし）", ex: "नमस्ते", exRom: "namaste", exJa: "こんにちは（स्ते の部分）" }
    ],
    grammar: {
      title: "यह/वह … है・ये/वे … हैं・क्या の疑問文",
      points: [
        "यह は「これ・この人」（近く）、वह は「あれ・あの人」（遠く）です。人にも物にも使え、「彼・彼女」も वह で言います。男女で形は変わりません。会話では यह を「イェ」、वह を「ヴォ」のように発音することが多いです。",
        "1つ・1人なら है、2つ以上なら ये（これら）・वे（あれら）を使い、動詞は हैं になります。目上の人や敬意を払う人は1人でも ये・वे … हैं と言います（ये शर्मा जी हैं＝こちらはシャルマさんです）。数と敬意で「です」が変わるのは、日本語にないところです。",
        "語順は日本語と同じです。यह मेरा होटल है は「これは・私の・ホテル・です」と、そのまま日本語の順に並びます。物にも男・女があり、「私の」は男性名詞なら मेरा、女性名詞なら मेरी になります（मेरा कमरा・मेरी चाय）。",
        "「はい・いいえ」で答える質問は、文の頭に क्या をつけ、最後を上げて言います：क्या यह आपका फ़ोन है?（これはあなたの電話ですか）。語順はそのままでよく、日本語の「〜か」を文の頭に置くイメージです。会話では क्या を省いて上げ調子だけで聞くこともよくあります。",
        "否定は है・हैं のすぐ前に नहीं を置きます：यह मेरा बैग नहीं है（これは私のかばんではありません）。答えは जी हाँ（はい）／जी नहीं（いいえ）がていねいです。"
      ],
      examples: [
        { hi: "यह मेरा फ़ोन है।", rom: "yah merā fon hai.", ja: "これは私の電話です。", eng: "This is my phone." },
        { hi: "वह मेरा होटल है।", rom: "vah merā hoṭal hai.", ja: "あれは私のホテルです。", eng: "That is my hotel." },
        { hi: "ये राज जी हैं।", rom: "ye Rāj jī haiṁ.", ja: "こちらはラージさんです。", eng: "This is Raj." },
        { hi: "वे मेरे दोस्त हैं।", rom: "ve mere dost haiṁ.", ja: "あの人たちは私の友だちです。", eng: "They are my friends." },
        { hi: "क्या यह आपका बैग है?", rom: "kyā yah āpkā baig hai?", ja: "これはあなたのかばんですか。", eng: "Is this your bag?" },
        { hi: "जी नहीं, यह मेरा बैग नहीं है।", rom: "jī nahīṁ, yah merā baig nahīṁ hai.", ja: "いいえ、これは私のかばんではありません。", eng: "No, this is not my bag." }
      ],
      tip: "「1つ・1人＝है、2つ以上・目上の人＝हैं」。हैं の上の点（ं）は「敬意と複数の鼻声」と覚えると、読むときも迷いません。"
    },
    vocab: [
      { hi: "यह", rom: "yah", ja: "これ・この人", eng: "this", ex: "यह मेरी चाय है।", exRom: "yah merī chāy hai.", exJa: "これは私のお茶です。" },
      { hi: "वह", rom: "vah", ja: "あれ・あの人・彼・彼女", eng: "that / he / she", ex: "वह मेरा दोस्त है।", exRom: "vah merā dost hai.", exJa: "あの人は私の友だちです。" },
      { hi: "ये", rom: "ye", ja: "これら・こちらの方", eng: "these / this person (polite)", ex: "ये प्रिया जी हैं।", exRom: "ye Priyā jī haiṁ.", exJa: "こちらはプリヤさんです。" },
      { hi: "वे", rom: "ve", ja: "あれら・あちらの方", eng: "those / they", ex: "वे शर्मा जी हैं।", exRom: "ve Sharmā jī haiṁ.", exJa: "あちらはシャルマさんです。" },
      { hi: "है", rom: "hai", ja: "〜です（1つ・1人）", eng: "is", ex: "यह ठीक है।", exRom: "yah ṭhīk hai.", exJa: "これで大丈夫です。" },
      { hi: "क्या", rom: "kyā", ja: "〜ですか（はい・いいえの質問の印）・何", eng: "question marker / what", ex: "क्या आप तैयार हैं?", exRom: "kyā āp taiyār haiṁ?", exJa: "準備はできましたか。" },
      { hi: "फ़ोन", rom: "fon", ja: "電話・スマホ（男）", eng: "phone", ex: "क्या यह आपका फ़ोन है?", exRom: "kyā yah āpkā fon hai?", exJa: "これはあなたの電話ですか。" },
      { hi: "होटल", rom: "hoṭal", ja: "ホテル（男）", eng: "hotel", ex: "यह होटल बहुत अच्छा है।", exRom: "yah hoṭal bahut achchhā hai.", exJa: "このホテルはとてもいいです。" },
      { hi: "कमरा", rom: "kamrā", ja: "部屋（男）", eng: "room", ex: "मेरा कमरा बड़ा है।", exRom: "merā kamrā baṛā hai.", exJa: "私の部屋は広いです。" },
      { hi: "पासपोर्ट", rom: "pāsporṭ", ja: "パスポート（男）", eng: "passport", ex: "यह मेरा पासपोर्ट है।", exRom: "yah merā pāsporṭ hai.", exJa: "これは私のパスポートです。" },
      { hi: "चाबी", rom: "chābī", ja: "鍵（女）", eng: "key", ex: "यह मेरी चाबी नहीं है।", exRom: "yah merī chābī nahīṁ hai.", exJa: "これは私の鍵ではありません。" },
      { hi: "टैक्सी", rom: "ṭaiksī", ja: "タクシー（女）", eng: "taxi", ex: "क्या यह आपकी टैक्सी है?", exRom: "kyā yah āpkī ṭaiksī hai?", exJa: "これはあなたのタクシーですか。" },
      { hi: "बैग", rom: "baig", ja: "かばん（男）", eng: "bag", ex: "क्या यह आपका बैग है?", exRom: "kyā yah āpkā baig hai?", exJa: "これはあなたのかばんですか。" },
      { hi: "पानी", rom: "pānī", ja: "水（男）", eng: "water", ex: "यह पानी ठंडा है।", exRom: "yah pānī ṭhanḍā hai.", exJa: "この水は冷たいです。" },
      { hi: "चाय", rom: "chāy", ja: "お茶・チャイ（女）", eng: "tea", ex: "चाय बहुत अच्छी है।", exRom: "chāy bahut achchhī hai.", exJa: "チャイがとてもおいしいです。" },
      { hi: "सामान", rom: "sāmān", ja: "荷物（男）", eng: "luggage", ex: "मेरा सामान बहुत भारी है।", exRom: "merā sāmān bahut bhārī hai.", exJa: "私の荷物はとても重いです。" },
      { hi: "गाड़ी", rom: "gāṛī", ja: "車（女）", eng: "car", ex: "गाड़ी बाहर है।", exRom: "gāṛī bāhar hai.", exJa: "車は外にあります。" },
      { hi: "बड़ा", rom: "baṛā", ja: "大きい", eng: "big", ex: "दिल्ली बहुत बड़ा शहर है।", exRom: "Dillī bahut baṛā shahar hai.", exJa: "デリーはとても大きな町です。" },
      { hi: "छोटा", rom: "chhoṭā", ja: "小さい", eng: "small", ex: "मेरा क्लिनिक छोटा है।", exRom: "merā klinik chhoṭā hai.", exJa: "私の院は小さいです。" },
      { hi: "नया", rom: "nayā", ja: "新しい", eng: "new", ex: "मेरा फ़ोन नया है।", exRom: "merā fon nayā hai.", exJa: "私の電話は新しいです。" }
    ],
    sentences: [
      { ja: "これは私の部屋です。", hi: "यह मेरा कमरा है।", rom: "yah merā kamrā hai.", eng: "This is my room." },
      { ja: "あれは私のホテルです。", hi: "वह मेरा होटल है।", rom: "vah merā hoṭal hai.", eng: "That is my hotel." },
      { ja: "こちらはラージさんです。", hi: "ये राज जी हैं।", rom: "ye Rāj jī haiṁ.", eng: "This is Raj." },
      { ja: "あの人たちは私の友だちです。", hi: "वे मेरे दोस्त हैं।", rom: "ve mere dost haiṁ.", eng: "They are my friends." },
      { ja: "これはあなたの電話ですか。", hi: "क्या यह आपका फ़ोन है?", rom: "kyā yah āpkā fon hai?", eng: "Is this your phone?" },
      { ja: "このチャイはとてもおいしいです。", hi: "यह चाय बहुत अच्छी है।", rom: "yah chāy bahut achchhī hai.", eng: "This tea is very good." },
      { ja: "いいえ、これは私のかばんではありません。", hi: "जी नहीं, यह मेरा बैग नहीं है।", rom: "jī nahīṁ, yah merā baig nahīṁ hai.", eng: "No, this is not my bag." },
      { ja: "こちらはプリヤさんです。マネージャーです。", hi: "ये प्रिया जी हैं। ये मैनेजर हैं।", rom: "ye Priyā jī haiṁ. ye mainejar haiṁ.", eng: "This is Priya. She is the manager." },
      { ja: "デリーはとても大きな町ですか。", hi: "क्या दिल्ली बहुत बड़ा शहर है?", rom: "kyā Dillī bahut baṛā shahar hai?", eng: "Is Delhi a very big city?" },
      { ja: "あれはタクシーではありません、ラージさんの車です。", hi: "वह टैक्सी नहीं है, राज जी की गाड़ी है।", rom: "vah ṭaiksī nahīṁ hai, Rāj jī kī gāṛī hai.", eng: "That is not a taxi, it is Raj's car." }
    ],
    dialogue: {
      title: "取引先の事務所で紹介してもらう",
      lines: [
        { s: "A", name: "Akihiro", hi: "नमस्ते, राज जी।", rom: "namaste, Rāj jī.", ja: "こんにちは、ラージさん。", eng: "Hello, Raj." },
        { s: "B", name: "Raj", hi: "नमस्ते, आकिहिरो जी! ये शर्मा जी हैं।", rom: "namaste, Ākihiro jī! ye Sharmā jī haiṁ.", ja: "こんにちは、章弘さん！こちらはシャルマさんです。", eng: "Hello, Akihiro! This is Mr. Sharma." },
        { s: "B", name: "Sharma ji", hi: "नमस्ते। आपका स्वागत है।", rom: "namaste. āpkā svāgat hai.", ja: "こんにちは。ようこそ。", eng: "Hello. Welcome." },
        { s: "A", name: "Akihiro", hi: "नमस्ते, शर्मा जी। आपसे मिलकर खुशी हुई।", rom: "namaste, Sharmā jī. āpse milkar khushī huī.", ja: "こんにちは、シャルマさん。お会いできてうれしいです。", eng: "Hello, Mr. Sharma. Nice to meet you." },
        { s: "B", name: "Raj", hi: "और ये प्रिया जी हैं। ये हमारी मैनेजर हैं।", rom: "aur ye Priyā jī haiṁ. ye hamārī mainejar haiṁ.", ja: "それから、こちらはプリヤさんです。うちのマネージャーです。", eng: "And this is Priya. She is our manager." },
        { s: "B", name: "Priya", hi: "नमस्ते, आकिहिरो जी। क्या आप पहली बार भारत में हैं?", rom: "namaste, Ākihiro jī. kyā āp pahlī bār Bhārat meṁ haiṁ?", ja: "こんにちは、章弘さん。インドは初めてですか。", eng: "Hello, Akihiro. Is this your first time in India?" },
        { s: "A", name: "Akihiro", hi: "जी हाँ, पहली बार। यह मेरा बिज़नेस कार्ड है।", rom: "jī hāṁ, pahlī bār. yah merā biznes kārḍ hai.", ja: "はい、初めてです。これは私の名刺です。", eng: "Yes, the first time. This is my business card." },
        { s: "B", name: "Priya", hi: "धन्यवाद। यह बहुत सुंदर है!", rom: "dhanyavād. yah bahut sundar hai!", ja: "ありがとうございます。とてもすてきですね！", eng: "Thank you. It's very nice!" },
        { s: "A", name: "Akihiro", hi: "क्या यह आपका ऑफ़िस है?", rom: "kyā yah āpkā ofis hai?", ja: "ここがみなさんの事務所ですか。", eng: "Is this your office?" },
        { s: "B", name: "Raj", hi: "जी हाँ, यह हमारा ऑफ़िस है।", rom: "jī hāṁ, yah hamārā ofis hai.", ja: "はい、ここが私たちの事務所です。", eng: "Yes, this is our office." },
        { s: "A", name: "Akihiro", hi: "बहुत बड़ा ऑफ़िस है!", rom: "bahut baṛā ofis hai!", ja: "とても大きな事務所ですね！", eng: "It's a very big office!" }
      ]
    },
    writing: "身の回りの物を3つ紹介する文を書こう。यह मेरा … है। (yah merā … hai.)／वह … है। (vah … hai.)／क्या यह आपका … है? (kyā yah āpkā … hai?) の型を使います。女性名詞（चाय・चाबी・टैक्सी）には मेरी を使うことに注意。",
    speaking: "部屋の物（スマホ・かばん・お茶など）を指さしながら、यह … है／वह … है と10個言ってみよう。最後に、家族や仲間の写真を見せるつもりで ये … जी हैं と2人紹介します。"
  }
]);

window.WEEKS = (window.WEEKS || []).concat([
  // ===== Week 4 =====
  {
    week: 4,
    title: "文字④結合文字と疑問詞 क्या・कौन・कहाँ",
    scene: "空港・ホテルで聞く",
    cefr: "A1",
    goal: "空港やホテルで「何？」「誰？」「どこ？」「いつ？」「どう？」を短く聞ける。",
    letters: [
      { ch: "क्ष", rom: "ksh", ja: "クシュ。क्（k）と ष（sh）が合体して形が大きく変わった文字です。", ex: "परीक्षा", exRom: "parīkshā", exJa: "試験" },
      { ch: "त्र", rom: "tr", ja: "トゥル。त्（t）と र（r）が合体した文字。त の下に斜めの線が入ります。", ex: "मित्र", exRom: "mitr", exJa: "友人" },
      { ch: "ज्ञ", rom: "gy", ja: "ギャ。ज्（j）と ञ が合体した文字ですが、ヒンディー語では「ギャ」と読みます。", ex: "ज्ञान", exRom: "gyān", exJa: "知識" },
      { ch: "श्र", rom: "shr", ja: "シュル。श्（sh）と र（r）が合体した文字。名前の前の「〜様」श्री で毎日見ます。", ex: "श्री", exRom: "shrī", exJa: "〜様（敬称）" },
      { ch: "स्त", rom: "st", ja: "ス＋タ。स の縦線が取れた「半分の形」が、次の त にくっつきます。母音なしの音です。", ex: "दोस्त", exRom: "dost", exJa: "友だち" },
      { ch: "न्द", rom: "nd", ja: "ン＋ダ。न の半分の形＋द。हिंदी は हिन्दी とも書きます（読みは同じ）。", ex: "हिन्दी", exRom: "hindī", exJa: "ヒンディー語" },
      { ch: "क्य", rom: "ky", ja: "キャ。क の半分の形（右のしっぽだけ短くなる）＋य。今週の主役 क्या に出てきます。", ex: "क्या", exRom: "kyā", exJa: "何・〜ですか" },
      { ch: "प्य", rom: "py", ja: "ピャ。प の縦線が取れた半分の形＋य。", ex: "प्यार", exRom: "pyār", exJa: "愛" },
      { ch: "प्र", rom: "pr", ja: "プル。子音のあとの र は、縦線の下に斜めの短い線になります。", ex: "प्रिया", exRom: "Priyā", exJa: "プリヤ（名前）" },
      { ch: "क्र", rom: "kr", ja: "クル。क の場合も र は斜めの線になって、क の下にくっつきます。", ex: "क्रिकेट", exRom: "krikeṭ", exJa: "クリケット" },
      { ch: "र्म", rom: "rm", ja: "ル＋マ。子音の前の र は、次の文字の頭に乗る小さなフック（ˇ）になります。読む順番は र が先です。", ex: "गर्म", exRom: "garm", exJa: "暑い・熱い" },
      { ch: "र्च", rom: "rch", ja: "ル＋チャ。र が च の頭に乗った形。フックを見たら「先に r」と覚えます。", ex: "मिर्च", exRom: "mirch", exJa: "唐辛子" },
      { ch: "ज़", rom: "z", ja: "ズ。ज の下に点がつくと、英語の z の音になります（ペルシャ語・英語から来た言葉）。", ex: "ज़रूर", exRom: "zarūr", exJa: "もちろん" },
      { ch: "फ़", rom: "f", ja: "フ（英語の f）。फ（ph）の下に点。fon（電話）や fāil（ファイル）など英語の語に多いです。", ex: "फ़ोन", exRom: "fon", exJa: "電話" },
      { ch: "ड़", rom: "ṛ", ja: "舌を奥に巻いて、前にはじく「ル」と「ド」の間の音。語の頭には来ません。", ex: "बड़ा", exRom: "baṛā", exJa: "大きい" },
      { ch: "ढ़", rom: "ṛh", ja: "ड़ に息（h）がつく音。साढ़े（半）などで使います。", ex: "पढ़ाई", exRom: "paṛhāī", exJa: "勉強" },
      { ch: "क़", rom: "q", ja: "のどの奥で出す「カ」。ふだんは क と同じに発音する人も多いので、気にしすぎなくて大丈夫です。", ex: "क़ीमत", exRom: "qīmat", exJa: "値段" },
      { ch: "ख़", rom: "kh", ja: "のどをこする「ハ」に近い音。ख の下に点。同じく点つきの ग़（のどでこする「ガ」）もあります。", ex: "ख़ुश", exRom: "khush", exJa: "うれしい" }
    ],
    grammar: {
      title: "疑問詞 क्या・कौन・कहाँ・कब・कैसा",
      points: [
        "疑問詞は「聞きたい所にそのまま置く」だけです。これは日本語と同じで、英語のように文の頭に出しません。यह होटल है।（これはホテルです）の「ホテル」を聞きたければ、そこを क्या に替えて यह क्या है?（これは何ですか）となります。",
        "क्या には2つの働きがあります。文の頭の क्या は Week 3 で習った「〜ですか」（はい／いいえの質問）、文の中の क्या は「何」です。क्या यह होटल है?（これはホテルですか）と यह क्या है?（これは何ですか）を比べてみましょう。",
        "कौन＝誰、कहाँ＝どこ、कब＝いつ。答えるときは、疑問詞の場所に答えを入れるだけです。टैक्सी कहाँ है? → टैक्सी वहाँ है।（タクシーはあそこです）。है は最後のまま動きません。",
        "कैसा（どう・どんな）は、主語の男女・数に合わせて形が変わります。男性の名詞なら कैसा（होटल कैसा है?）、女性なら कैसी（दिल्ली कैसी है?）、आप や複数なら कैसे（आप कैसे हैं?）。女性に聞くときは आप कैसी हैं? です。日本語にはない決まりなので、少しずつ慣れましょう。",
        "目上の人や取引先のことを聞くときは、1人でも है ではなく हैं を使います：शर्मा जी कहाँ हैं?（シャルマさんはどこですか）。名前に जी をつけ、हैं で結ぶとていねいになります。"
      ],
      examples: [
        { hi: "यह क्या है?", rom: "yah kyā hai?", ja: "これは何ですか。", eng: "What is this?" },
        { hi: "वह कौन है?", rom: "vah kaun hai?", ja: "あの人は誰ですか。", eng: "Who is that?" },
        { hi: "टैक्सी कहाँ है?", rom: "ṭaiksī kahāṁ hai?", ja: "タクシーはどこですか。", eng: "Where is the taxi?" },
        { hi: "फ़्लाइट कब है?", rom: "flāiṭ kab hai?", ja: "フライトはいつですか。", eng: "When is the flight?" },
        { hi: "होटल कैसा है?", rom: "hoṭal kaisā hai?", ja: "ホテルはどうですか。", eng: "How is the hotel?" },
        { hi: "दिल्ली कैसी है?", rom: "dillī kaisī hai?", ja: "デリーはどうですか。", eng: "How is Delhi?" }
      ],
      tip: "「日本語の文を作って、聞きたい所を疑問詞に替える」と覚えましょう。क＝聞く文字です（क्या・कौन・कहाँ・कब・कैसा はみんな क で始まります）。"
    },
    vocab: [
      { hi: "क्या", rom: "kyā", ja: "何", eng: "what", ex: "यह क्या है?", exRom: "yah kyā hai?", exJa: "これは何ですか。" },
      { hi: "कौन", rom: "kaun", ja: "誰", eng: "who", ex: "वह कौन है?", exRom: "vah kaun hai?", exJa: "あの人は誰ですか。" },
      { hi: "कहाँ", rom: "kahāṁ", ja: "どこ", eng: "where", ex: "प्रिया जी कहाँ हैं?", exRom: "Priyā jī kahāṁ haiṁ?", exJa: "プリヤさんはどこですか。" },
      { hi: "कब", rom: "kab", ja: "いつ", eng: "when", ex: "मीटिंग कब है?", exRom: "mīṭing kab hai?", exJa: "会議はいつですか。" },
      { hi: "कैसा", rom: "kaisā", ja: "どう・どんな（女性は कैसी、आप は कैसे）", eng: "how, what kind", ex: "कमरा कैसा है?", exRom: "kamrā kaisā hai?", exJa: "部屋はどうですか。" },
      { hi: "यहाँ", rom: "yahāṁ", ja: "ここ", eng: "here", ex: "मैं यहाँ हूँ।", exRom: "maiṁ yahāṁ hūṁ.", exJa: "私はここです。" },
      { hi: "वहाँ", rom: "vahāṁ", ja: "そこ・あそこ", eng: "there", ex: "टैक्सी वहाँ है।", exRom: "ṭaiksī vahāṁ hai.", exJa: "タクシーはあそこです。" },
      { hi: "हवाई अड्डा", rom: "havāī aḍḍā", ja: "空港（男）", eng: "airport", ex: "हवाई अड्डा कहाँ है?", exRom: "havāī aḍḍā kahāṁ hai?", exJa: "空港はどこですか。" },
      { hi: "होटल", rom: "hoṭal", ja: "ホテル（男）", eng: "hotel", ex: "होटल बहुत अच्छा है।", exRom: "hoṭal bahut achchhā hai.", exJa: "ホテルはとてもいいです。" },
      { hi: "कमरा", rom: "kamrā", ja: "部屋（男）", eng: "room", ex: "मेरा कमरा कहाँ है?", exRom: "merā kamrā kahāṁ hai?", exJa: "私の部屋はどこですか。" },
      { hi: "चाबी", rom: "chābī", ja: "鍵（女）", eng: "key", ex: "चाबी कहाँ है?", exRom: "chābī kahāṁ hai?", exJa: "鍵はどこですか。" },
      { hi: "सामान", rom: "sāmān", ja: "荷物（男）", eng: "luggage", ex: "यह मेरा सामान है।", exRom: "yah merā sāmān hai.", exJa: "これが私の荷物です。" },
      { hi: "पासपोर्ट", rom: "pāsporṭ", ja: "パスポート（男）", eng: "passport", ex: "मेरा पासपोर्ट कहाँ है?", exRom: "merā pāsporṭ kahāṁ hai?", exJa: "私のパスポートはどこですか。" },
      { hi: "फ़्लाइट", rom: "flāiṭ", ja: "飛行機の便（女）", eng: "flight", ex: "फ़्लाइट कब है?", exRom: "flāiṭ kab hai?", exJa: "フライトはいつですか。" },
      { hi: "टैक्सी", rom: "ṭaiksī", ja: "タクシー（女）", eng: "taxi", ex: "टैक्सी कहाँ है?", exRom: "ṭaiksī kahāṁ hai?", exJa: "タクシーはどこですか。" },
      { hi: "ड्राइवर", rom: "ḍrāivar", ja: "運転手（男）", eng: "driver", ex: "ड्राइवर कौन है?", exRom: "ḍrāivar kaun hai?", exJa: "運転手は誰ですか。" },
      { hi: "बाथरूम", rom: "bāthrūm", ja: "トイレ・浴室（男）", eng: "bathroom", ex: "बाथरूम कहाँ है?", exRom: "bāthrūm kahāṁ hai?", exJa: "トイレはどこですか。" },
      { hi: "पानी", rom: "pānī", ja: "水（男）※ -ī でも男性", eng: "water", ex: "पानी ठंडा है।", exRom: "pānī ṭhanḍā hai.", exJa: "水は冷たいです。" },
      { hi: "लिफ़्ट", rom: "lifṭ", ja: "エレベーター（女）", eng: "lift, elevator", ex: "लिफ़्ट कहाँ है?", exRom: "lifṭ kahāṁ hai?", exJa: "エレベーターはどこですか。" },
      { hi: "रिसेप्शन", rom: "risepshan", ja: "フロント・受付（男）", eng: "reception", ex: "रिसेप्शन वहाँ है।", exRom: "risepshan vahāṁ hai.", exJa: "フロントはあそこです。" }
    ],
    sentences: [
      { ja: "これは何ですか。", hi: "यह क्या है?", rom: "yah kyā hai?", eng: "What is this?" },
      { ja: "あの人は誰ですか。", hi: "वह कौन है?", rom: "vah kaun hai?", eng: "Who is that?" },
      { ja: "トイレはどこですか。", hi: "बाथरूम कहाँ है?", rom: "bāthrūm kahāṁ hai?", eng: "Where is the bathroom?" },
      { ja: "タクシーはあそこです。", hi: "टैक्सी वहाँ है।", rom: "ṭaiksī vahāṁ hai.", eng: "The taxi is over there." },
      { ja: "ホテルはどうですか。", hi: "होटल कैसा है?", rom: "hoṭal kaisā hai?", eng: "How is the hotel?" },
      { ja: "フライトはいつですか。", hi: "फ़्लाइट कब है?", rom: "flāiṭ kab hai?", eng: "When is the flight?" },
      { ja: "あなたのお名前は何ですか。", hi: "आपका नाम क्या है?", rom: "āpkā nām kyā hai?", eng: "What is your name?" },
      { ja: "シャルマさんはどこですか。", hi: "शर्मा जी कहाँ हैं?", rom: "Sharmā jī kahāṁ haiṁ?", eng: "Where is Mr. Sharma?" },
      { ja: "部屋はとてもきれいです。", hi: "कमरा बहुत साफ़ है।", rom: "kamrā bahut sāf hai.", eng: "The room is very clean." },
      { ja: "すみません、エレベーターはどこですか。", hi: "माफ़ कीजिए, लिफ़्ट कहाँ है?", rom: "māf kījie, lifṭ kahāṁ hai?", eng: "Excuse me, where is the lift?" }
    ],
    dialogue: {
      title: "デリーの空港でアルジュンさんと会う",
      lines: [
        { s: "A", name: "Akihiro", hi: "नमस्ते! आप अर्जुन जी हैं?", rom: "namaste! āp Arjun jī haiṁ?", ja: "こんにちは！アルジュンさんですか。", eng: "Hello! Are you Arjun?" },
        { s: "B", name: "Arjun", hi: "जी हाँ, मैं अर्जुन हूँ। स्वागत है!", rom: "jī hāṁ, maiṁ Arjun hūṁ. svāgat hai!", ja: "はい、アルジュンです。ようこそ！", eng: "Yes, I'm Arjun. Welcome!" },
        { s: "A", name: "Akihiro", hi: "धन्यवाद! टैक्सी कहाँ है?", rom: "dhanyavād! ṭaiksī kahāṁ hai?", ja: "ありがとうございます！タクシーはどこですか。", eng: "Thank you! Where is the taxi?" },
        { s: "B", name: "Arjun", hi: "टैक्सी बाहर है। आपका सामान कहाँ है?", rom: "ṭaiksī bāhar hai. āpkā sāmān kahāṁ hai?", ja: "タクシーは外です。荷物はどこですか。", eng: "The taxi is outside. Where is your luggage?" },
        { s: "A", name: "Akihiro", hi: "यह मेरा सामान है। होटल कहाँ है?", rom: "yah merā sāmān hai. hoṭal kahāṁ hai?", ja: "これが私の荷物です。ホテルはどこですか。", eng: "This is my luggage. Where is the hotel?" },
        { s: "B", name: "Arjun", hi: "होटल पास है।", rom: "hoṭal pās hai.", ja: "ホテルは近いです。", eng: "The hotel is near." },
        { s: "A", name: "Akihiro", hi: "अच्छा। मीटिंग कब है?", rom: "achchhā. mīṭing kab hai?", ja: "そうですか。会議はいつですか。", eng: "I see. When is the meeting?" },
        { s: "B", name: "Arjun", hi: "मीटिंग कल सुबह है।", rom: "mīṭing kal subah hai.", ja: "会議は明日の朝です。", eng: "The meeting is tomorrow morning." },
        { s: "A", name: "Akihiro", hi: "राज जी कहाँ हैं?", rom: "Rāj jī kahāṁ haiṁ?", ja: "ラージさんはどこですか。", eng: "Where is Raj?" },
        { s: "B", name: "Arjun", hi: "वे आज बहुत बिज़ी हैं।", rom: "ve āj bahut bizī haiṁ.", ja: "あの方は今日とても忙しいんです。", eng: "He is very busy today." },
        { s: "A", name: "Akihiro", hi: "ठीक है। दिल्ली कैसी है?", rom: "ṭhīk hai. dillī kaisī hai?", ja: "わかりました。デリーはどうですか。", eng: "OK. How is Delhi?" },
        { s: "B", name: "Arjun", hi: "दिल्ली बहुत गर्म है! चलिए!", rom: "dillī bahut garm hai! chalie!", ja: "デリーはとても暑いですよ！さあ、行きましょう！", eng: "Delhi is very hot! Let's go!" }
      ]
    },
    writing: "空港やホテルで使う質問を5つ書こう。「〇〇 कहाँ है?（〇〇 kahāṁ hai?）＝〇〇はどこですか」「〇〇 कब है?（〇〇 kab hai?）＝〇〇はいつですか」「〇〇 कैसा है?（〇〇 kaisā hai?）＝〇〇はどうですか」の型を使い、〇〇には今週の単語（टैक्सी・चाबी・फ़्लाइट など）を入れます。",
    speaking: "デリーの空港に着いた場面を想像して、「タクシーはどこですか」「荷物はどこですか」「ホテルはどうですか」を声に出して聞こう。答えの文（टैक्सी वहाँ है। など）も続けて言ってみます。"
  },

  // ===== Week 5 =====
  {
    week: 5,
    title: "家族と का・की・के（〜の）",
    scene: "家族の話",
    cefr: "A1",
    goal: "写真を見せながら、自分の家族を紹介し、相手の家族のことをていねいに聞ける。",
    grammar: {
      title: "का・की・के と मेरा・आपका",
      points: [
        "का・की・के は日本語の「の」です。並び方も日本語と同じで、「राज का घर」＝「ラージさんの家」。持ち主が前、持たれる物があとに来ます。",
        "日本語と違うのは、का・की・के が「後ろの名詞」の男女と数に合わせて変わることです。後ろが男性1つなら का、女性なら की、男性の複数や目上の人なら के。持ち主の男女は関係ありません：प्रिया का भाई（プリヤさんのお兄さん）、राज की बहन（ラージさんのお姉さん）。",
        "「私の」「あなたの」も同じ決まりです。मेरा बेटा（私の息子）／मेरी बेटी（私の娘）／मेरे पिताजी（私の父）。आपका・आपकी・आपके も同じように変わります。「मैं का」とは言わないので注意しましょう。",
        "名詞の男女の入口：-ā で終わる名詞は男性が多く（बेटा 息子、कमरा 部屋）、-ī で終わる名詞は女性が多いです（बेटी 娘、चाबी 鍵）。ただし पानी（水）や भाई（兄弟）は男性。人を表す語は、その人の性に合わせます。",
        "父・母・年上の人・取引先には、1人でも複数のように扱って敬意を表します。मेरे पिताजी ठीक हैं।（父は元気です）のように、के／मेरे と हैं を使います。紹介するときも यह ではなく ये（この方）が自然です。"
      ],
      examples: [
        { hi: "यह मेरा बेटा है।", rom: "yah merā beṭā hai.", ja: "これは私の息子です。", eng: "This is my son." },
        { hi: "यह मेरी बेटी है।", rom: "yah merī beṭī hai.", ja: "これは私の娘です。", eng: "This is my daughter." },
        { hi: "मेरे पिताजी बहुत अच्छे हैं।", rom: "mere pitājī bahut achchhe haiṁ.", ja: "私の父はとてもいい人です。", eng: "My father is a very good man." },
        { hi: "राज का भाई डॉक्टर है।", rom: "Rāj kā bhāī ḍokṭar hai.", ja: "ラージさんの弟さんは医者です。", eng: "Raj's brother is a doctor." },
        { hi: "प्रिया जी की बहन टीचर है।", rom: "Priyā jī kī bahan ṭīchar hai.", ja: "プリヤさんの妹さんは先生です。", eng: "Priya's sister is a teacher." },
        { hi: "आपकी पत्नी कैसी हैं?", rom: "āpkī patnī kaisī haiṁ?", ja: "奥さまはお元気ですか。", eng: "How is your wife?" }
      ],
      tip: "का・की・के は「後ろを見て決める」。後ろが男なら का、女なら की、男の複数・目上なら के。持ち主（前）は見なくて大丈夫です。"
    },
    vocab: [
      { hi: "परिवार", rom: "parivār", ja: "家族（男）", eng: "family", ex: "मेरा परिवार छोटा है।", exRom: "merā parivār chhoṭā hai.", exJa: "私の家族は小さいです。" },
      { hi: "पिताजी", rom: "pitājī", ja: "お父さん（男）", eng: "father", ex: "राज जी के पिताजी डॉक्टर हैं।", exRom: "Rāj jī ke pitājī ḍokṭar haiṁ.", exJa: "ラージさんのお父さんは医者です。" },
      { hi: "माताजी", rom: "mātājī", ja: "お母さん（女）", eng: "mother", ex: "मेरी माताजी बहुत अच्छी हैं।", exRom: "merī mātājī bahut achchhī haiṁ.", exJa: "私の母はとてもいい人です。" },
      { hi: "माता-पिता", rom: "mātā-pitā", ja: "両親（男・複数）", eng: "parents", ex: "मेरे माता-पिता जापानी हैं।", exRom: "mere mātā-pitā jāpānī haiṁ.", exJa: "私の両親は日本人です。" },
      { hi: "पत्नी", rom: "patnī", ja: "妻（女）", eng: "wife", ex: "ये मेरी पत्नी हैं।", exRom: "ye merī patnī haiṁ.", exJa: "こちらは私の妻です。" },
      { hi: "पति", rom: "pati", ja: "夫（男）", eng: "husband", ex: "प्रिया जी के पति कहाँ हैं?", exRom: "Priyā jī ke pati kahāṁ haiṁ?", exJa: "プリヤさんのご主人はどこですか。" },
      { hi: "बेटा", rom: "beṭā", ja: "息子（男）", eng: "son", ex: "मेरा बेटा छोटा है।", exRom: "merā beṭā chhoṭā hai.", exJa: "私の息子は小さいです。" },
      { hi: "बेटी", rom: "beṭī", ja: "娘（女）", eng: "daughter", ex: "आपकी बेटी कैसी है?", exRom: "āpkī beṭī kaisī hai?", exJa: "娘さんは元気ですか。" },
      { hi: "भाई", rom: "bhāī", ja: "兄・弟（男）", eng: "brother", ex: "नेहा का भाई डॉक्टर है।", exRom: "Nehā kā bhāī ḍokṭar hai.", exJa: "ネハさんのお兄さんは医者です。" },
      { hi: "बहन", rom: "bahan", ja: "姉・妹（女）", eng: "sister", ex: "अर्जुन की बहन टीचर है।", exRom: "Arjun kī bahan ṭīchar hai.", exJa: "アルジュンさんのお姉さんは先生です。" },
      { hi: "बच्चा", rom: "bachchā", ja: "子ども（男）※女の子は बच्ची", eng: "child", ex: "बच्चा बहुत प्यारा है।", exRom: "bachchā bahut pyārā hai.", exJa: "その子はとてもかわいいです。" },
      { hi: "दादाजी", rom: "dādājī", ja: "おじいさん（父方）（男）", eng: "grandfather", ex: "ये मेरे दादाजी हैं।", exRom: "ye mere dādājī haiṁ.", exJa: "こちらは私の祖父です。" },
      { hi: "दादीजी", rom: "dādījī", ja: "おばあさん（父方）（女）", eng: "grandmother", ex: "आपकी दादीजी कैसी हैं?", exRom: "āpkī dādījī kaisī haiṁ?", exJa: "おばあさまはお元気ですか。" },
      { hi: "दोस्त", rom: "dost", ja: "友だち（男女とも）", eng: "friend", ex: "राज मेरा अच्छा दोस्त है।", exRom: "Rāj merā achchhā dost hai.", exJa: "ラージさんは私のいい友だちです。" },
      { hi: "घर", rom: "ghar", ja: "家（男）", eng: "house, home", ex: "यह शर्मा जी का घर है।", exRom: "yah Sharmā jī kā ghar hai.", exJa: "これはシャルマさんの家です。" },
      { hi: "का", rom: "kā", ja: "〜の（後ろが男性。女性は की、複数・目上は के）", eng: "of, 's", ex: "यह राज का कमरा है।", exRom: "yah Rāj kā kamrā hai.", exJa: "これはラージさんの部屋です。" },
      { hi: "मेरा", rom: "merā", ja: "私の（後ろが男性。女性は मेरी、複数・目上は मेरे）", eng: "my", ex: "यह मेरा फ़ोन है।", exRom: "yah merā fon hai.", exJa: "これは私の電話です。" },
      { hi: "आपका", rom: "āpkā", ja: "あなたの（女性は आपकी、複数・目上は आपके）", eng: "your", ex: "आपका परिवार कैसा है?", exRom: "āpkā parivār kaisā hai?", exJa: "ご家族はお元気ですか。" },
      { hi: "बड़ा", rom: "baṛā", ja: "大きい・年上の", eng: "big, elder", ex: "यह मेरा बड़ा भाई है।", exRom: "yah merā baṛā bhāī hai.", exJa: "これは私の兄です。" },
      { hi: "छोटा", rom: "chhoṭā", ja: "小さい・年下の", eng: "small, younger", ex: "यह मेरी छोटी बहन है।", exRom: "yah merī chhoṭī bahan hai.", exJa: "これは私の妹です。" }
    ],
    sentences: [
      { ja: "これは私の家族です。", hi: "यह मेरा परिवार है।", rom: "yah merā parivār hai.", eng: "This is my family." },
      { ja: "これは私の娘です。", hi: "यह मेरी बेटी है।", rom: "yah merī beṭī hai.", eng: "This is my daughter." },
      { ja: "私の両親は元気です。", hi: "मेरे माता-पिता ठीक हैं।", rom: "mere mātā-pitā ṭhīk haiṁ.", eng: "My parents are fine." },
      { ja: "ご家族はお元気ですか。", hi: "आपका परिवार कैसा है?", rom: "āpkā parivār kaisā hai?", eng: "How is your family?" },
      { ja: "私の妻は日本人です。", hi: "मेरी पत्नी जापानी हैं।", rom: "merī patnī jāpānī haiṁ.", eng: "My wife is Japanese." },
      { ja: "これはシャルマさんの家です。", hi: "यह शर्मा जी का घर है।", rom: "yah Sharmā jī kā ghar hai.", eng: "This is Mr. Sharma's house." },
      { ja: "ネハさんの弟さんは学生です。", hi: "नेहा का छोटा भाई स्टूडेंट है।", rom: "Nehā kā chhoṭā bhāī sṭūḍenṭ hai.", eng: "Neha's younger brother is a student." },
      { ja: "プリヤさんのお兄さんは先生です。", hi: "प्रिया जी के बड़े भाई टीचर हैं।", rom: "Priyā jī ke baṛe bhāī ṭīchar haiṁ.", eng: "Priya's elder brother is a teacher." },
      { ja: "奥さまのお名前は何ですか。", hi: "आपकी पत्नी का नाम क्या है?", rom: "āpkī patnī kā nām kyā hai?", eng: "What is your wife's name?" },
      { ja: "私の息子は小さいですが、娘は大きいです。", hi: "मेरा बेटा छोटा है, लेकिन बेटी बड़ी है।", rom: "merā beṭā chhoṭā hai, lekin beṭī baṛī hai.", eng: "My son is small, but my daughter is big." }
    ],
    dialogue: {
      title: "WhatsApp の家族写真を見せ合う",
      lines: [
        { s: "B", name: "Raj", hi: "आकिहिरो जी, यह कौन है?", rom: "Ākihiro jī, yah kaun hai?", ja: "章弘さん、これは誰ですか。", eng: "Akihiro, who is this?" },
        { s: "A", name: "Akihiro", hi: "ये मेरी पत्नी हैं।", rom: "ye merī patnī haiṁ.", ja: "こちらは私の妻です。", eng: "This is my wife." },
        { s: "B", name: "Raj", hi: "बहुत अच्छा! और यह बच्चा कौन है?", rom: "bahut achchhā! aur yah bachchā kaun hai?", ja: "いいですね！それで、この子は誰ですか。", eng: "Very nice! And who is this child?" },
        { s: "A", name: "Akihiro", hi: "यह मेरा बेटा है।", rom: "yah merā beṭā hai.", ja: "これは私の息子です。", eng: "This is my son." },
        { s: "B", name: "Raj", hi: "बहुत प्यारा है!", rom: "bahut pyārā hai!", ja: "とてもかわいいですね！", eng: "He is very cute!" },
        { s: "A", name: "Akihiro", hi: "राज जी, आपका परिवार कैसा है?", rom: "Rāj jī, āpkā parivār kaisā hai?", ja: "ラージさん、ご家族はお元気ですか。", eng: "Raj, how is your family?" },
        { s: "B", name: "Raj", hi: "सब ठीक है, धन्यवाद। यह मेरी बेटी है।", rom: "sab ṭhīk hai, dhanyavād. yah merī beṭī hai.", ja: "みんな元気です、ありがとう。これは私の娘です。", eng: "Everyone is fine, thanks. This is my daughter." },
        { s: "A", name: "Akihiro", hi: "आपकी बेटी का नाम क्या है?", rom: "āpkī beṭī kā nām kyā hai?", ja: "娘さんのお名前は何ですか。", eng: "What is your daughter's name?" },
        { s: "B", name: "Raj", hi: "उसका नाम अनन्या है।", rom: "uskā nām Ananyā hai.", ja: "名前はアナニャです。", eng: "Her name is Ananya." },
        { s: "A", name: "Akihiro", hi: "बहुत सुंदर नाम है! आपके पिताजी कैसे हैं?", rom: "bahut sundar nām hai! āpke pitājī kaise haiṁ?", ja: "とてもきれいな名前ですね！お父さまはお元気ですか。", eng: "What a beautiful name! How is your father?" },
        { s: "B", name: "Raj", hi: "वे ठीक हैं। ये मेरे पिताजी हैं।", rom: "ve ṭhīk haiṁ. ye mere pitājī haiṁ.", ja: "元気です。こちらが父です。", eng: "He is fine. This is my father." },
        { s: "A", name: "Akihiro", hi: "नमस्ते, अंकल जी!", rom: "namaste, ankal jī!", ja: "こんにちは、おじさま！", eng: "Hello, uncle!" }
      ]
    },
    writing: "家族の写真を1枚選んで、3〜5文で紹介を書こう。「यह मेरा 〇〇 है।（yah merā 〇〇 hai.）」「यह मेरी 〇〇 है।（yah merī 〇〇 hai.）」「ये मेरे 〇〇 हैं।（ye mere 〇〇 haiṁ.）」の型を使い、〇〇が男性か女性か、目上かを考えて मेरा／मेरी／मेरे を選びます。",
    speaking: "ラージさんに家族の写真を見せる場面で、自分の家族を3人紹介し、最後に「आपका परिवार कैसा है?」と聞き返そう。का・की・के を言うときに、後ろの名詞を思い浮かべてから選びます。"
  },

  // ===== Week 6 =====
  {
    week: 6,
    title: "数字・値段・時刻",
    scene: "買い物と待ち合わせ",
    cefr: "A1",
    goal: "市場で値段を聞いて答えがわかり、待ち合わせの時刻を言える。",
    grammar: {
      title: "数字・कितना・रुपये・बजे",
      points: [
        "1〜10：एक・दो・तीन・चार・पाँच・छह・सात・आठ・नौ・दस。11〜20 は形が不規則なので、1つずつ覚えます：ग्यारह 11・बारह 12・तेरह 13・चौदह 14・पंद्रह 15・सोलह 16・सत्रह 17・अठारह 18・उन्नीस 19・बीस 20。ほかに तीस 30・पचास 50・सौ 100・हज़ार 1000。数字はデーヴァナーガリー数字でも書きます：१ २ ३ ४ ५ ६ ७ ८ ९ १०（新聞や看板で見かけます。値札は 123 がふつう）。",
        "値段を聞くときは यह कितने का है?（これはいくらですか）。答えは यह सौ रुपये का है।（100ルピーです）。数字のあとに रुपये（ルピー）を置くのは、日本語の「100円」と同じ順番です。1ルピーだけは एक रुपया と言います。",
        "कितना（どれくらい・いくら）は、後ろや主語に合わせて変わります。男性1つ→कितना（किराया कितना है? 料金はいくら？）、複数→कितने（कितने रुपये? 何ルピー？）、女性→कितनी（कितनी चाय? お茶はいくつ？）。Week 5 の का・की・के と同じ考え方です。",
        "時刻は「数字＋बजे」：दो बजे（2時）。「今何時ですか」は अभी कितने बजे हैं?、答えは अभी तीन बजे हैं।（今3時です）。1時だけは एक बजा है です。「〜時に」も同じ形で、मीटिंग चार बजे है।（会議は4時です）。",
        "半・15分の言い方：साढ़े ＋数字＝〜時半（साढ़े चार＝4時半）、सवा ＋数字＝〜時15分（सवा दो＝2時15分）、पौने ＋数字＝〜時の15分前（पौने छह＝5時45分）。1時半は डेढ़、2時半は ढाई と特別な言い方をします。"
      ],
      examples: [
        { hi: "यह कितने का है?", rom: "yah kitne kā hai?", ja: "これはいくらですか。", eng: "How much is this?" },
        { hi: "यह सौ रुपये का है।", rom: "yah sau rupaye kā hai.", ja: "これは100ルピーです。", eng: "This is 100 rupees." },
        { hi: "अभी कितने बजे हैं?", rom: "abhī kitne baje haiṁ?", ja: "今何時ですか。", eng: "What time is it now?" },
        { hi: "अभी तीन बजे हैं।", rom: "abhī tīn baje haiṁ.", ja: "今3時です。", eng: "It's three o'clock now." },
        { hi: "मीटिंग साढ़े दस बजे है।", rom: "mīṭing sāṛhe das baje hai.", ja: "会議は10時半です。", eng: "The meeting is at ten thirty." },
        { hi: "आम कितने रुपये किलो हैं?", rom: "ām kitne rupaye kilo haiṁ?", ja: "マンゴーは1キロいくらですか。", eng: "How much are mangoes per kilo?" }
      ],
      tip: "まず1〜10と、20・50・100・1000を口ぐせにしましょう。11〜19 は市場で値段を聞くたびに1つずつ増やせば大丈夫です。「साढ़े＝半、सवा＝＋15分、पौने＝−15分」は時計の絵で覚えると早いです。"
    },
    vocab: [
      { hi: "एक", rom: "ek", ja: "1", eng: "one", ex: "एक चाय, प्लीज़।", exRom: "ek chāy, plīz.", exJa: "チャイを1つ、お願いします。" },
      { hi: "दो", rom: "do", ja: "2", eng: "two", ex: "हम दो हैं।", exRom: "ham do haiṁ.", exJa: "私たちは2人です。" },
      { hi: "तीन", rom: "tīn", ja: "3", eng: "three", ex: "अभी तीन बजे हैं।", exRom: "abhī tīn baje haiṁ.", exJa: "今3時です。" },
      { hi: "चार", rom: "chār", ja: "4", eng: "four", ex: "कमरा चार सौ चार है।", exRom: "kamrā chār sau chār hai.", exJa: "部屋は404号室です。" },
      { hi: "पाँच", rom: "pāṁch", ja: "5", eng: "five", ex: "बस पाँच मिनट!", exRom: "bas pāṁch minaṭ!", exJa: "あと5分だけ！" },
      { hi: "छह", rom: "chhah", ja: "6", eng: "six", ex: "मीटिंग छह बजे है।", exRom: "mīṭing chhah baje hai.", exJa: "会議は6時です。" },
      { hi: "सात", rom: "sāt", ja: "7", eng: "seven", ex: "यह सात सौ रुपये का है।", exRom: "yah sāt sau rupaye kā hai.", exJa: "これは700ルピーです。" },
      { hi: "आठ", rom: "āṭh", ja: "8", eng: "eight", ex: "नाश्ता आठ बजे है।", exRom: "nāshtā āṭh baje hai.", exJa: "朝ごはんは8時です。" },
      { hi: "नौ", rom: "nau", ja: "9", eng: "nine", ex: "फ़्लाइट नौ बजे है।", exRom: "flāiṭ nau baje hai.", exJa: "フライトは9時です。" },
      { hi: "दस", rom: "das", ja: "10", eng: "ten", ex: "यह दस रुपये का है।", exRom: "yah das rupaye kā hai.", exJa: "これは10ルピーです。" },
      { hi: "बीस", rom: "bīs", ja: "20", eng: "twenty", ex: "बीस मिनट, ठीक है?", exRom: "bīs minaṭ, ṭhīk hai?", exJa: "20分でいいですか。" },
      { hi: "पचास", rom: "pachās", ja: "50", eng: "fifty", ex: "आम पचास रुपये किलो हैं।", exRom: "ām pachās rupaye kilo haiṁ.", exJa: "マンゴーは1キロ50ルピーです。" },
      { hi: "सौ", rom: "sau", ja: "100", eng: "hundred", ex: "सौ रुपये, ठीक है?", exRom: "sau rupaye, ṭhīk hai?", exJa: "100ルピーでいいですか。" },
      { hi: "हज़ार", rom: "hazār", ja: "1000", eng: "thousand", ex: "यह दो हज़ार रुपये का है।", exRom: "yah do hazār rupaye kā hai.", exJa: "これは2000ルピーです。" },
      { hi: "कितना", rom: "kitnā", ja: "いくら・どれくらい（複数は कितने、女性は कितनी）", eng: "how much", ex: "किराया कितना है?", exRom: "kirāyā kitnā hai?", exJa: "料金はいくらですか。" },
      { hi: "रुपया", rom: "rupayā", ja: "ルピー（男）※2以上は रुपये", eng: "rupee", ex: "चाय दस रुपये की है।", exRom: "chāy das rupaye kī hai.", exJa: "チャイは10ルピーです。" },
      { hi: "बजे", rom: "baje", ja: "〜時", eng: "o'clock", ex: "कितने बजे?", exRom: "kitne baje?", exJa: "何時に？" },
      { hi: "साढ़े", rom: "sāṛhe", ja: "〜半（〜時30分）", eng: "half past", ex: "साढ़े चार बजे, ठीक है?", exRom: "sāṛhe chār baje, ṭhīk hai?", exJa: "4時半でいいですか。" },
      { hi: "सवा", rom: "savā", ja: "〜時15分（＋4分の1）", eng: "quarter past", ex: "मीटिंग सवा दो बजे है।", exRom: "mīṭing savā do baje hai.", exJa: "会議は2時15分です。" },
      { hi: "पौने", rom: "paune", ja: "〜時15分前（−4分の1）", eng: "quarter to", ex: "अभी पौने छह बजे हैं।", exRom: "abhī paune chhah baje haiṁ.", exJa: "今5時45分です。" }
    ],
    sentences: [
      { ja: "これはいくらですか。", hi: "यह कितने का है?", rom: "yah kitne kā hai?", eng: "How much is this?" },
      { ja: "100ルピーです。", hi: "सौ रुपये।", rom: "sau rupaye.", eng: "One hundred rupees." },
      { ja: "今何時ですか。", hi: "अभी कितने बजे हैं?", rom: "abhī kitne baje haiṁ?", eng: "What time is it now?" },
      { ja: "今2時です。", hi: "अभी दो बजे हैं।", rom: "abhī do baje haiṁ.", eng: "It's two o'clock now." },
      { ja: "会議は10時半です。", hi: "मीटिंग साढ़े दस बजे है।", rom: "mīṭing sāṛhe das baje hai.", eng: "The meeting is at ten thirty." },
      { ja: "マンゴーは1キロいくらですか。", hi: "आम कितने रुपये किलो हैं?", rom: "ām kitne rupaye kilo haiṁ?", eng: "How much are mangoes per kilo?" },
      { ja: "リキシャ代はいくらですか。", hi: "रिक्शा का किराया कितना है?", rom: "rikshā kā kirāyā kitnā hai?", eng: "How much is the rickshaw fare?" },
      { ja: "私の部屋は305号室です。", hi: "मेरा कमरा तीन सौ पाँच है।", rom: "merā kamrā tīn sau pāṁch hai.", eng: "My room is 305." },
      { ja: "ラージさん、3時15分でいいですか。", hi: "राज जी, सवा तीन बजे ठीक है?", rom: "Rāj jī, savā tīn baje ṭhīk hai?", eng: "Raj, is quarter past three OK?" },
      { ja: "これはとても高いです。500でいいですか。", hi: "यह बहुत महँगा है। पाँच सौ ठीक है?", rom: "yah bahut mahaṁgā hai. pāṁch sau ṭhīk hai?", eng: "This is very expensive. Is 500 OK?" }
    ],
    dialogue: {
      title: "市場で値段を聞いて、ネハさんと待ち合わせ",
      lines: [
        { s: "A", name: "Akihiro", hi: "भैया, यह कितने का है?", rom: "bhaiyā, yah kitne kā hai?", ja: "お兄さん、これはいくらですか。", eng: "Brother, how much is this?" },
        { s: "B", name: "Shopkeeper", hi: "यह आठ सौ रुपये का है।", rom: "yah āṭh sau rupaye kā hai.", ja: "これは800ルピーです。", eng: "This is 800 rupees." },
        { s: "A", name: "Akihiro", hi: "बहुत महँगा है! पाँच सौ ठीक है?", rom: "bahut mahaṁgā hai! pāṁch sau ṭhīk hai?", ja: "とても高いです！500でいいですか。", eng: "That's very expensive! Is 500 OK?" },
        { s: "B", name: "Shopkeeper", hi: "छह सौ, आख़िरी!", rom: "chhah sau, ākhirī!", ja: "600、これが最後です！", eng: "600, final!" },
        { s: "A", name: "Akihiro", hi: "ठीक है, छह सौ। धन्यवाद!", rom: "ṭhīk hai, chhah sau. dhanyavād!", ja: "わかりました、600で。ありがとう！", eng: "OK, 600. Thank you!" },
        { s: "B", name: "Neha", hi: "हैलो, आकिहिरो जी! आप कहाँ हैं?", rom: "hailo, Ākihiro jī! āp kahāṁ haiṁ?", ja: "もしもし、章弘さん！今どこですか。", eng: "Hello, Akihiro! Where are you?" },
        { s: "A", name: "Akihiro", hi: "नमस्ते, नेहा जी! मीटिंग कितने बजे है?", rom: "namaste, Nehā jī! mīṭing kitne baje hai?", ja: "こんにちは、ネハさん！会議は何時ですか。", eng: "Hello, Neha! What time is the meeting?" },
        { s: "B", name: "Neha", hi: "साढ़े चार बजे।", rom: "sāṛhe chār baje.", ja: "4時半です。", eng: "At four thirty." },
        { s: "A", name: "Akihiro", hi: "अभी कितने बजे हैं?", rom: "abhī kitne baje haiṁ?", ja: "今何時ですか。", eng: "What time is it now?" },
        { s: "B", name: "Neha", hi: "अभी पौने चार बजे हैं।", rom: "abhī paune chār baje haiṁ.", ja: "今3時45分です。", eng: "It's quarter to four now." },
        { s: "A", name: "Akihiro", hi: "ठीक है, बस बीस मिनट!", rom: "ṭhīk hai, bas bīs minaṭ!", ja: "わかりました、あと20分で行きます！", eng: "OK, just twenty minutes!" }
      ]
    },
    writing: "インド出張の1日の予定を、時刻つきで4つ書こう。「〇〇 △ बजे है।（〇〇 △ baje hai.）＝〇〇は△時です」の型を使い、△には साढ़े・सवा・पौने も1つ以上入れます（例：नाश्ता आठ बजे है।／मीटिंग साढ़े दस बजे है।）。",
    speaking: "市場の場面を想像して、品物を3つ指さしながら「यह कितने का है?」と聞き、店員の答え（○○ रुपये）を自分で言ってから「बहुत महँगा है!」と値段交渉してみよう。最後に今の時刻をヒンディー語で言います。"
  }
]);

window.WEEKS = (window.WEEKS || []).concat([
  // ===== Week 7 =====
  {
    week: 7,
    title: "後置詞 में・पर・से・को（助詞のように）",
    scene: "場所と行き先",
    cefr: "A1",
    goal: "人や物がどこにあるか、どこから来たか、だれと一緒かを短く言える。",
    grammar: {
      title: "後置詞 में・पर・से・को・तक・के पास・के साथ",
      points: [
        "ヒンディー語の後置詞は、日本語の助詞（に・で・から・まで）と同じく名詞のあとに置きます：घर में（家で）、दिल्ली से（デリーから）。英語の in や from のように前に置かないので、日本語の「名詞＋助詞」をそのまま置きかえる感覚で使えます。",
        "में は「〜の中に・〜で」（कमरे में 部屋の中に、दिल्ली में デリーで）、पर は「〜の上に・〜で」（मेज़ पर 机の上に、घर पर 家で）。建物や町の中は में、物の上や「家に（いる）」は पर がよく使われます。",
        "से は「〜から」と「〜で（手段）」（जापान से 日本から、मेट्रो से メトロで）、तक は「〜まで」（स्टेशन तक 駅まで）。से … तक で「〜から〜まで」：नौ बजे से सात बजे तक（9時から7時まで）。को は「〜に」で、まずは時の「に」から覚えます：सोमवार को（月曜日に）、शाम को（夕方に）。人に向ける को は Week 9 からたくさん出てきます。",
        "के पास（〜の近くに）と के साथ（〜と一緒に）は、2語でひとかたまりの後置詞です：स्टेशन के पास（駅の近く）、राज जी के साथ（ラージさんと一緒に）。代名詞のときは くっつけて書きます：आपके साथ（あなたと）、हमारे साथ（私たちと）。",
        "日本語と違うところ：後置詞の前では、形が少し変わります（後置格）。मेरा → मेरे、कमरा → कमरे（-आ で終わる男性名詞）、यह → इस、वह → उस。मेरा कमरा（私の部屋）→ मेरे कमरे में（私の部屋で）、यह होटल → इस होटल में（このホテルで）。घर・होटल・दुकान のように -आ で終わらない語は、1つならそのままです。"
      ],
      examples: [
        { hi: "मैं होटल में हूँ।", rom: "maiṁ hoṭal meṁ hūṁ.", ja: "私はホテルにいます。", eng: "I am in the hotel." },
        { hi: "फ़ोन मेज़ पर है।", rom: "fon mez par hai.", ja: "電話は机の上にあります。", eng: "The phone is on the table." },
        { hi: "मैं जापान से हूँ।", rom: "maiṁ jāpān se hūṁ.", ja: "私は日本から来ました（日本出身です）。", eng: "I am from Japan." },
        { hi: "रविवार को क्लिनिक बंद है।", rom: "ravivār ko klinik band hai.", ja: "日曜日に院は休みです。", eng: "The clinic is closed on Sunday." },
        { hi: "होटल स्टेशन के पास है।", rom: "hoṭal sṭeshan ke pās hai.", ja: "ホテルは駅の近くです。", eng: "The hotel is near the station." },
        { hi: "मेरे कमरे में एक बड़ी खिड़की है।", rom: "mere kamre meṁ ek baṛī khiṛkī hai.", ja: "私の部屋には大きな窓が1つあります。", eng: "There is a big window in my room." }
      ],
      tip: "「名詞＋後置詞」で1セット。迷ったら日本語の助詞を先に言ってから置きかえましょう（デリー＋で → दिल्ली में）。後置詞の前では「-आ は -ए に、यह は इस に」と口で覚えると楽です。"
    },
    vocab: [
      { hi: "में", rom: "meṁ", ja: "〜の中に・〜で", eng: "in", ex: "राज जी दफ़्तर में हैं।", exRom: "Rāj jī daftar meṁ haiṁ.", exJa: "ラージさんは事務所にいます。" },
      { hi: "पर", rom: "par", ja: "〜の上に・〜で", eng: "on, at", ex: "चाबी मेज़ पर है।", exRom: "chābī mez par hai.", exJa: "鍵は机の上にあります。" },
      { hi: "से", rom: "se", ja: "〜から・〜で（手段）", eng: "from, by", ex: "प्रिया जी दिल्ली से हैं।", exRom: "Priyā jī dillī se haiṁ.", exJa: "プリヤさんはデリーの出身です。" },
      { hi: "को", rom: "ko", ja: "〜に（時・人）", eng: "on, to", ex: "सोमवार को मीटिंग है।", exRom: "somvār ko mīṭing hai.", exJa: "月曜日に会議があります。" },
      { hi: "तक", rom: "tak", ja: "〜まで", eng: "until, up to", ex: "दुकान रात दस बजे तक खुली है।", exRom: "dukān rāt das baje tak khulī hai.", exJa: "店は夜10時まで開いています。" },
      { hi: "के पास", rom: "ke pās", ja: "〜の近くに", eng: "near", ex: "हमारा होटल स्टेशन के पास है।", exRom: "hamārā hoṭal sṭeshan ke pās hai.", exJa: "私たちのホテルは駅の近くです。" },
      { hi: "के साथ", rom: "ke sāth", ja: "〜と一緒に", eng: "with", ex: "मैं नेहा जी के साथ हूँ।", exRom: "maiṁ Nehā jī ke sāth hūṁ.", exJa: "私はネハさんと一緒にいます。" },
      { hi: "घर", rom: "ghar", ja: "家（男）", eng: "house, home", ex: "मैं अभी घर पर हूँ।", exRom: "maiṁ abhī ghar par hūṁ.", exJa: "私は今、家にいます。" },
      { hi: "दफ़्तर", rom: "daftar", ja: "事務所・オフィス（男）", eng: "office", ex: "दफ़्तर तीसरी मंज़िल पर है।", exRom: "daftar tīsrī manzil par hai.", exJa: "事務所は3階にあります。" },
      { hi: "कमरा", rom: "kamrā", ja: "部屋（男）", eng: "room", ex: "मेरे कमरे में टीवी नहीं है।", exRom: "mere kamre meṁ ṭīvī nahīṁ hai.", exJa: "私の部屋にはテレビがありません。" },
      { hi: "मेज़", rom: "mez", ja: "机・テーブル（女）", eng: "table", ex: "फ़ाइल मेज़ पर है।", exRom: "fāil mez par hai.", exJa: "ファイルは机の上です。" },
      { hi: "शहर", rom: "shahar", ja: "町・都市（男）", eng: "city", ex: "इस शहर में बहुत ट्रैफ़िक है।", exRom: "is shahar meṁ bahut ṭraifik hai.", exJa: "この町は車がとても多いです。" },
      { hi: "स्टेशन", rom: "sṭeshan", ja: "駅（男）", eng: "station", ex: "स्टेशन यहाँ से दूर नहीं है।", exRom: "sṭeshan yahāṁ se dūr nahīṁ hai.", exJa: "駅はここから遠くありません。" },
      { hi: "होटल", rom: "hoṭal", ja: "ホテル（男）", eng: "hotel", ex: "मैं इस होटल में हूँ।", exRom: "maiṁ is hoṭal meṁ hūṁ.", exJa: "私はこのホテルにいます。" },
      { hi: "दुकान", rom: "dukān", ja: "店（女）", eng: "shop", ex: "उस दुकान में अच्छी चाय है।", exRom: "us dukān meṁ achchhī chāy hai.", exJa: "あの店にはおいしいチャイがあります。" },
      { hi: "शाम", rom: "shām", ja: "夕方（女）", eng: "evening", ex: "शाम को मैं होटल में हूँ।", exRom: "shām ko maiṁ hoṭal meṁ hūṁ.", exJa: "夕方、私はホテルにいます。" },
      { hi: "दूर", rom: "dūr", ja: "遠い・遠くに", eng: "far", ex: "क्या एयरपोर्ट यहाँ से दूर है?", exRom: "kyā eyarporṭ yahāṁ se dūr hai?", exJa: "空港はここから遠いですか。" },
      { hi: "मेट्रो", rom: "meṭro", ja: "メトロ・地下鉄（女）", eng: "metro", ex: "दिल्ली में मेट्रो बहुत अच्छी है।", exRom: "dillī meṁ meṭro bahut achchhī hai.", exJa: "デリーではメトロがとても便利です。" },
      { hi: "बाहर", rom: "bāhar", ja: "外に", eng: "outside", ex: "ड्राइवर होटल के बाहर है।", exRom: "ḍrāivar hoṭal ke bāhar hai.", exJa: "運転手さんはホテルの外にいます。" },
      { hi: "बाज़ार", rom: "bāzār", ja: "市場・商店街（男）", eng: "market", ex: "चाँदनी चौक में बड़ा बाज़ार है।", exRom: "Chāṁdnī Chauk meṁ baṛā bāzār hai.", exJa: "チャーンドニー・チョークには大きな市場があります。" }
    ],
    sentences: [
      { ja: "私は家にいます。", hi: "मैं घर पर हूँ।", rom: "maiṁ ghar par hūṁ.", eng: "I am at home." },
      { ja: "私の携帯はかばんの中です。", hi: "मेरा फ़ोन बैग में है।", rom: "merā fon baig meṁ hai.", eng: "My phone is in the bag." },
      { ja: "シャルマさんはムンバイの出身です。", hi: "शर्मा जी मुंबई से हैं।", rom: "Sharmā jī mumbaī se haiṁ.", eng: "Sharma ji is from Mumbai." },
      { ja: "私の院は駅の近くです。", hi: "मेरा क्लिनिक स्टेशन के पास है।", rom: "merā klinik sṭeshan ke pās hai.", eng: "My clinic is near the station." },
      { ja: "月曜日、私はデリーにいます。", hi: "सोमवार को मैं दिल्ली में हूँ।", rom: "somvār ko maiṁ dillī meṁ hūṁ.", eng: "I am in Delhi on Monday." },
      { ja: "今日、私はアルジュンさんと一緒です。", hi: "आज मैं अर्जुन जी के साथ हूँ।", rom: "āj maiṁ Arjun jī ke sāth hūṁ.", eng: "Today I am with Arjun." },
      { ja: "ホテルから事務所は遠くありません。", hi: "होटल से दफ़्तर दूर नहीं है।", rom: "hoṭal se daftar dūr nahīṁ hai.", eng: "The office is not far from the hotel." },
      { ja: "この町にはいい店がたくさんあります。", hi: "इस शहर में बहुत अच्छी दुकानें हैं।", rom: "is shahar meṁ bahut achchhī dukāneṁ haiṁ.", eng: "There are many good shops in this city." },
      { ja: "院は9時から7時まで開いています。", hi: "क्लिनिक नौ बजे से सात बजे तक खुला है।", rom: "klinik nau baje se sāt baje tak khulā hai.", eng: "The clinic is open from 9 to 7." },
      { ja: "私の家は大洲の、川の近くにあります。", hi: "मेरा घर ओज़ू में, नदी के पास है।", rom: "merā ghar Ozū meṁ, nadī ke pās hai.", eng: "My house is in Ozu, near the river." }
    ],
    dialogue: {
      title: "デリーに着いて、ラージさんに電話",
      lines: [
        { s: "A", name: "Akihiro", hi: "नमस्ते राज जी! मैं दिल्ली में हूँ।", rom: "namaste Rāj jī! maiṁ dillī meṁ hūṁ.", ja: "こんにちは、ラージさん！デリーに着きました。", eng: "Hello, Raj ji! I'm in Delhi." },
        { s: "B", name: "Raj", hi: "अरे वाह! आप किस होटल में हैं?", rom: "are vāh! āp kis hoṭal meṁ haiṁ?", ja: "おお、いいですね！どのホテルにいるんですか。", eng: "Oh, great! Which hotel are you in?" },
        { s: "A", name: "Akihiro", hi: "मैं मेट्रो स्टेशन के पास एक होटल में हूँ।", rom: "maiṁ meṭro sṭeshan ke pās ek hoṭal meṁ hūṁ.", ja: "メトロの駅の近くのホテルにいます。", eng: "I'm in a hotel near the metro station." },
        { s: "B", name: "Raj", hi: "अच्छा। हमारा दफ़्तर वहाँ से दूर नहीं है।", rom: "achchhā. hamārā daftar vahāṁ se dūr nahīṁ hai.", ja: "そうですか。私たちの事務所はそこから遠くないですよ。", eng: "I see. Our office isn't far from there." },
        { s: "A", name: "Akihiro", hi: "दफ़्तर कहाँ है?", rom: "daftar kahāṁ hai?", ja: "事務所はどこですか。", eng: "Where is the office?" },
        { s: "B", name: "Raj", hi: "नेहरू प्लेस में है। मेट्रो से बीस मिनट।", rom: "Nehrū Ples meṁ hai. meṭro se bīs minaṭ.", ja: "ネルー・プレイスです。メトロで20分です。", eng: "It's in Nehru Place. Twenty minutes by metro." },
        { s: "A", name: "Akihiro", hi: "ठीक है। मीटिंग कितने बजे है?", rom: "ṭhīk hai. mīṭing kitne baje hai?", ja: "わかりました。会議は何時ですか。", eng: "OK. What time is the meeting?" },
        { s: "B", name: "Raj", hi: "सोमवार को, सुबह दस बजे।", rom: "somvār ko, subah das baje.", ja: "月曜日の朝10時です。", eng: "On Monday, at 10 in the morning." },
        { s: "A", name: "Akihiro", hi: "क्या प्रिया जी भी वहाँ हैं?", rom: "kyā Priyā jī bhī vahāṁ haiṁ?", ja: "プリヤさんもそこにいますか。", eng: "Is Priya ji also there?" },
        { s: "B", name: "Raj", hi: "हाँ, प्रिया जी और शर्मा जी भी हमारे साथ हैं।", rom: "hāṁ, Priyā jī aur Sharmā jī bhī hamāre sāth haiṁ.", ja: "はい、プリヤさんもシャルマさんも一緒です。", eng: "Yes, Priya ji and Sharma ji are with us too." },
        { s: "A", name: "Akihiro", hi: "बहुत अच्छा। सोमवार को मिलते हैं!", rom: "bahut achchhā. somvār ko milte haiṁ!", ja: "よかった。では月曜日に会いましょう！", eng: "Great. See you on Monday!" }
      ]
    },
    writing: "自分の院・家・よく行く場所の位置を3文で書こう。型：… में है。／… के पास है。／… से … तक …。例：मेरा क्लिनिक ओज़ू में है।（merā klinik Ozū meṁ hai.）",
    speaking: "スマホの地図を見ながら、今いる場所と近くにある物を声に出して言おう（मैं … में हूँ。… के पास … है。）。後置詞の前の मेरे・इस・उस に気をつけます。"
  },

  // ===== Week 8 =====
  {
    week: 8,
    title: "現在形で毎日のことを話す",
    scene: "ふだんの1日",
    cefr: "A1",
    goal: "自分のふだんの1日（起きる・食べる・働く・寝る）を現在形で言え、相手にも聞ける。",
    grammar: {
      title: "習慣の現在形 -ता／-ती／-ते ＋ हूँ／है／हैं",
      points: [
        "動詞の辞書の形は -ना で終わります（करना する、खाना 食べる）。-ना を取って -ता／-ती／-ते を付け、最後に हूँ／है／हैं を置くと「いつも〜します」という現在形になります：करना → मैं काम करता हूँ（私は仕事をします）。",
        "語順は日本語と同じで、動詞は文の最後です：मैं सुबह चाय पीता हूँ（私は朝チャイを飲みます）。「だれが・いつ・どこで・何を・する」の順に、日本語をそのまま置きかえられます。",
        "日本語と違うところ：主語が男性か女性かで形が変わります。男性1人は -ता、女性は -ती、男性の複数と आप（男性）は -ते。岩田さんは मैं … करता हूँ、プリヤさんのことは वह … करती हैं（ていねいに हैं）。女性に आप で聞くときは आप … करती हैं? になります。",
        "否定は नहीं を動詞のすぐ前に置きます：मैं टीवी नहीं देखता（テレビは見ません）。否定のときは最後の हूँ／है／हैं を省くことが多いです（付けても間違いではありません）。",
        "よく使う時の言葉：रोज़（毎日）、सुबह（朝）、दोपहर को（昼に）、शाम को（夕方に）、रात को（夜に）、कभी-कभी（ときどき）。「〜へ行く」は को を付けずに場所だけ置くのがふつうです：मैं दफ़्तर जाता हूँ（事務所へ行きます）。"
      ],
      examples: [
        { hi: "मैं सुबह छह बजे उठता हूँ।", rom: "maiṁ subah chhah baje uṭhtā hūṁ.", ja: "私は朝6時に起きます。", eng: "I get up at six in the morning." },
        { hi: "मैं नाश्ते में चावल खाता हूँ।", rom: "maiṁ nāshte meṁ chāval khātā hūṁ.", ja: "私は朝ご飯にご飯を食べます。", eng: "I eat rice for breakfast." },
        { hi: "प्रिया जी रोज़ दफ़्तर जाती हैं।", rom: "Priyā jī roz daftar jātī haiṁ.", ja: "プリヤさんは毎日事務所へ行きます。", eng: "Priya ji goes to the office every day." },
        { hi: "आप कहाँ काम करते हैं?", rom: "āp kahāṁ kām karte haiṁ?", ja: "どちらで働いていますか。", eng: "Where do you work?" },
        { hi: "मैं टीवी नहीं देखता।", rom: "maiṁ ṭīvī nahīṁ dekhtā.", ja: "私はテレビを見ません。", eng: "I don't watch TV." },
        { hi: "नेहा जी और अर्जुन जी हिंदी और अंग्रेज़ी बोलते हैं।", rom: "Nehā jī aur Arjun jī hindī aur angrezī bolte haiṁ.", ja: "ネハさんとアルジュンさんはヒンディー語と英語を話します。", eng: "Neha and Arjun speak Hindi and English." }
      ],
      tip: "まず「मैं … करता हूँ」を体に入れましょう。自分（男性）は -ता हूँ、相手の आप には -ते हैं。女性のことを話すときだけ -ती に切りかえます。"
    },
    vocab: [
      { hi: "उठना", rom: "uṭhnā", ja: "起きる", eng: "get up", ex: "मैं रोज़ छह बजे उठता हूँ।", exRom: "maiṁ roz chhah baje uṭhtā hūṁ.", exJa: "私は毎日6時に起きます。" },
      { hi: "खाना", rom: "khānā", ja: "食べる（名詞なら「食事」（男））", eng: "eat; food", ex: "हम रात को घर पर खाना खाते हैं।", exRom: "ham rāt ko ghar par khānā khāte haiṁ.", exJa: "私たちは夜、家でご飯を食べます。" },
      { hi: "पीना", rom: "pīnā", ja: "飲む", eng: "drink", ex: "मैं सुबह ग्रीन टी पीता हूँ।", exRom: "maiṁ subah grīn ṭī pītā hūṁ.", exJa: "私は朝、緑茶を飲みます。" },
      { hi: "जाना", rom: "jānā", ja: "行く", eng: "go", ex: "मैं आठ बजे क्लिनिक जाता हूँ।", exRom: "maiṁ āṭh baje klinik jātā hūṁ.", exJa: "私は8時に院へ行きます。" },
      { hi: "आना", rom: "ānā", ja: "来る", eng: "come", ex: "राज जी हर साल जापान आते हैं।", exRom: "Rāj jī har sāl jāpān āte haiṁ.", exJa: "ラージさんは毎年日本に来ます。" },
      { hi: "करना", rom: "karnā", ja: "する", eng: "do", ex: "मैं क्लिनिक में काम करता हूँ।", exRom: "maiṁ klinik meṁ kām kartā hūṁ.", exJa: "私は院で働いています。" },
      { hi: "सोना", rom: "sonā", ja: "寝る", eng: "sleep", ex: "मैं रात को ग्यारह बजे सोता हूँ।", exRom: "maiṁ rāt ko gyārah baje sotā hūṁ.", exJa: "私は夜11時に寝ます。" },
      { hi: "पढ़ना", rom: "paṛhnā", ja: "読む・勉強する", eng: "read, study", ex: "मैं रोज़ हिंदी पढ़ता हूँ।", exRom: "maiṁ roz hindī paṛhtā hūṁ.", exJa: "私は毎日ヒンディー語を勉強します。" },
      { hi: "बोलना", rom: "bolnā", ja: "話す", eng: "speak", ex: "प्रिया जी थोड़ी जापानी बोलती हैं।", exRom: "Priyā jī thoṛī jāpānī boltī haiṁ.", exJa: "プリヤさんは日本語を少し話します。" },
      { hi: "देखना", rom: "dekhnā", ja: "見る", eng: "see, watch", ex: "शाम को मैं यूट्यूब देखता हूँ।", exRom: "shām ko maiṁ yūṭyūb dekhtā hūṁ.", exJa: "夕方、私はユーチューブを見ます。" },
      { hi: "रहना", rom: "rahnā", ja: "住む・いる", eng: "live, stay", ex: "मैं एहिमे में रहता हूँ।", exRom: "maiṁ Ehime meṁ rahtā hūṁ.", exJa: "私は愛媛に住んでいます。" },
      { hi: "नहाना", rom: "nahānā", ja: "風呂に入る・シャワーを浴びる", eng: "bathe", ex: "मैं रात को नहाता हूँ।", exRom: "maiṁ rāt ko nahātā hūṁ.", exJa: "私は夜にお風呂に入ります。" },
      { hi: "बनाना", rom: "banānā", ja: "作る", eng: "make", ex: "मैं सुबह मिसो सूप बनाता हूँ।", exRom: "maiṁ subah miso sūp banātā hūṁ.", exJa: "私は朝、味噌汁を作ります。" },
      { hi: "काम", rom: "kām", ja: "仕事（男）", eng: "work", ex: "आज बहुत काम है।", exRom: "āj bahut kām hai.", exJa: "今日は仕事がたくさんあります。" },
      { hi: "रोज़", rom: "roz", ja: "毎日", eng: "every day", ex: "मैं रोज़ तीस मिनट चलता हूँ।", exRom: "maiṁ roz tīs minaṭ chaltā hūṁ.", exJa: "私は毎日30分歩きます。" },
      { hi: "सुबह", rom: "subah", ja: "朝（女）", eng: "morning", ex: "सुबह मैं अख़बार पढ़ता हूँ।", exRom: "subah maiṁ akhbār paṛhtā hūṁ.", exJa: "朝、私は新聞を読みます。" },
      { hi: "दोपहर", rom: "dopahar", ja: "昼（女）", eng: "afternoon, noon", ex: "दोपहर को मैं क्लिनिक में खाना खाता हूँ।", exRom: "dopahar ko maiṁ klinik meṁ khānā khātā hūṁ.", exJa: "昼は院でご飯を食べます。" },
      { hi: "रात", rom: "rāt", ja: "夜（女）", eng: "night", ex: "रात को मैं जल्दी सोता हूँ।", exRom: "rāt ko maiṁ jaldī sotā hūṁ.", exJa: "夜は早く寝ます。" },
      { hi: "नाश्ता", rom: "nāshtā", ja: "朝ご飯（男）", eng: "breakfast", ex: "जापान में नाश्ते में मछली भी होती है।", exRom: "jāpān meṁ nāshte meṁ machhlī bhī hotī hai.", exJa: "日本では朝ご飯に魚も出ます。" },
      { hi: "कभी-कभी", rom: "kabhī-kabhī", ja: "ときどき", eng: "sometimes", ex: "मैं कभी-कभी योग करता हूँ।", exRom: "maiṁ kabhī-kabhī yog kartā hūṁ.", exJa: "私はときどきヨガをします。" }
    ],
    sentences: [
      { ja: "私は毎日働きます。", hi: "मैं रोज़ काम करता हूँ।", rom: "maiṁ roz kām kartā hūṁ.", eng: "I work every day." },
      { ja: "私は朝6時半に起きます。", hi: "मैं सुबह साढ़े छह बजे उठता हूँ।", rom: "maiṁ subah sāṛhe chhah baje uṭhtā hūṁ.", eng: "I get up at 6:30 in the morning." },
      { ja: "私はタバコを吸いません。", hi: "मैं सिगरेट नहीं पीता।", rom: "maiṁ sigreṭ nahīṁ pītā.", eng: "I don't smoke." },
      { ja: "どちらに住んでいますか。", hi: "आप कहाँ रहते हैं?", rom: "āp kahāṁ rahte haiṁ?", eng: "Where do you live?" },
      { ja: "院は9時に開きます。", hi: "क्लिनिक नौ बजे खुलता है।", rom: "klinik nau baje khultā hai.", eng: "The clinic opens at nine." },
      { ja: "院には毎日たくさんの患者さんが来ます。", hi: "क्लिनिक में रोज़ बहुत मरीज़ आते हैं।", rom: "klinik meṁ roz bahut marīz āte haiṁ.", eng: "Many patients come to the clinic every day." },
      { ja: "プリヤさんは毎日メトロで事務所へ行きます。", hi: "प्रिया जी रोज़ मेट्रो से दफ़्तर जाती हैं।", rom: "Priyā jī roz meṭro se daftar jātī haiṁ.", eng: "Priya ji goes to the office by metro every day." },
      { ja: "日本人は朝ご飯にご飯と魚を食べます。", hi: "जापानी लोग नाश्ते में चावल और मछली खाते हैं।", rom: "jāpānī log nāshte meṁ chāval aur machhlī khāte haiṁ.", eng: "Japanese people eat rice and fish for breakfast." },
      { ja: "私は夜、WhatsApp でネハさんと話します。", hi: "मैं रात को व्हाट्सऐप पर नेहा जी से बात करता हूँ।", rom: "maiṁ rāt ko vhāṭsaip par Nehā jī se bāt kartā hūṁ.", eng: "At night I talk with Neha on WhatsApp." },
      { ja: "日曜日は家族と一緒に家にいます。", hi: "रविवार को मैं परिवार के साथ घर पर रहता हूँ।", rom: "ravivār ko maiṁ parivār ke sāth ghar par rahtā hūṁ.", eng: "On Sundays I stay at home with my family." }
    ],
    dialogue: {
      title: "ネハさんとビデオ通話：ふだんの1日",
      lines: [
        { s: "A", name: "Akihiro", hi: "नेहा जी, आप सुबह कितने बजे उठती हैं?", rom: "Nehā jī, āp subah kitne baje uṭhtī haiṁ?", ja: "ネハさん、朝は何時に起きますか。", eng: "Neha ji, what time do you get up in the morning?" },
        { s: "B", name: "Neha", hi: "मैं सात बजे उठती हूँ। और आप?", rom: "maiṁ sāt baje uṭhtī hūṁ. aur āp?", ja: "7時に起きます。あなたは？", eng: "I get up at seven. And you?" },
        { s: "A", name: "Akihiro", hi: "मैं छह बजे उठता हूँ।", rom: "maiṁ chhah baje uṭhtā hūṁ.", ja: "私は6時に起きます。", eng: "I get up at six." },
        { s: "B", name: "Neha", hi: "इतनी जल्दी! आप नाश्ते में क्या खाते हैं?", rom: "itnī jaldī! āp nāshte meṁ kyā khāte haiṁ?", ja: "そんなに早く！朝ご飯は何を食べますか。", eng: "So early! What do you eat for breakfast?" },
        { s: "A", name: "Akihiro", hi: "मैं चावल, मछली और मिसो सूप खाता हूँ।", rom: "maiṁ chāval, machhlī aur miso sūp khātā hūṁ.", ja: "ご飯と魚と味噌汁を食べます。", eng: "I eat rice, fish and miso soup." },
        { s: "B", name: "Neha", hi: "वाह! मैं सिर्फ़ चाय और टोस्ट लेती हूँ।", rom: "vāh! maiṁ sirf chāy aur ṭosṭ letī hūṁ.", ja: "わあ！私はチャイとトーストだけです。", eng: "Wow! I just have tea and toast." },
        { s: "A", name: "Akihiro", hi: "आप दफ़्तर कैसे जाती हैं?", rom: "āp daftar kaise jātī haiṁ?", ja: "事務所へはどうやって行きますか。", eng: "How do you go to the office?" },
        { s: "B", name: "Neha", hi: "मैं मेट्रो से जाती हूँ। आपका क्लिनिक कितने बजे खुलता है?", rom: "maiṁ meṭro se jātī hūṁ. āpkā klinik kitne baje khultā hai?", ja: "メトロで行きます。院は何時に開くんですか。", eng: "I go by metro. What time does your clinic open?" },
        { s: "A", name: "Akihiro", hi: "नौ बजे। मैं शाम सात बजे तक काम करता हूँ।", rom: "nau baje. maiṁ shām sāt baje tak kām kartā hūṁ.", ja: "9時です。夕方7時まで働きます。", eng: "At nine. I work until seven in the evening." },
        { s: "B", name: "Neha", hi: "आप बहुत मेहनत करते हैं!", rom: "āp bahut mehnat karte haiṁ!", ja: "よく頑張っていますね！", eng: "You work very hard!" },
        { s: "A", name: "Akihiro", hi: "नहीं नहीं। रात को मैं जल्दी सोता हूँ।", rom: "nahīṁ nahīṁ. rāt ko maiṁ jaldī sotā hūṁ.", ja: "いえいえ。夜は早く寝ますよ。", eng: "No, no. I go to bed early at night." }
      ]
    },
    writing: "自分のふだんの1日を5文で書こう（起きる・食べる・行く・働く・寝る）。型：मैं … बजे …ता हूँ。例：मैं छह बजे उठता हूँ।（maiṁ chhah baje uṭhtā hūṁ.）",
    speaking: "朝から夜までの1日を、時計の順に30秒で話そう。最後に「आप …ते हैं?」と相手にも1つ聞き返します（女性には「आप …ती हैं?」）。"
  },

  // ===== Week 9 =====
  {
    week: 9,
    title: "मुझे … पसंद है・चाहिए（好き・要る）",
    scene: "レストランと好み",
    cefr: "A1",
    goal: "好きな物・要る物をレストランや会話で伝えられ、相手の好みも聞ける。",
    grammar: {
      title: "मुझे … पसंद है／चाहिए／मालूम है",
      points: [
        "「私は〜が好きです」は मुझे … पसंद है と言います。मुझे は「私に」。直訳すると「私には〜が好ましい」で、日本語の「私には〜が合う」に近い言い方です。मैं ではなく मुझे で始めるのがポイントです。",
        "चाहिए は「要る・ほしい」：मुझे पानी चाहिए（水がほしいです）。मालूम है は「知っている」：मुझे मालूम है（知っています）、मुझे मालूम नहीं（知りません）。どれも「मुझे＋もの＋言葉」の同じ形です。",
        "ほかの人にも同じ形で使えます：आपको（あなたに）、उसे／उसको（彼・彼女に）、हमें（私たちに）、राज जी को（ラージさんに）。目上の人のことは उन्हें（その方に）と言います。आपको क्या पसंद है?（何がお好きですか）。ここの को は Week 7 で習った「〜に」です。",
        "日本語・英語と違うところ：है／हैं は「好きな物」の数に合わせ、मुझे には合わせません：मुझे चाय पसंद है（チャイが好き）、मुझे छोले भटूरे पसंद हैं（チョーレー・バトゥーレ〈複数〉が好き）。否定は नहीं を入れて मुझे … पसंद नहीं है。",
        "レストランで便利：मुझे कम मिर्च चाहिए（唐辛子は少なめで）、ज़्यादा तीखा नहीं（あまり辛くなく）、… प्लीज़（〜をお願いします）。ていねいなお願いの दीजिए は Week 10 で習うので、今週は चाहिए で注文できれば十分です。"
      ],
      examples: [
        { hi: "मुझे चाय पसंद है।", rom: "mujhe chāy pasand hai.", ja: "私はチャイが好きです。", eng: "I like tea." },
        { hi: "मुझे पानी चाहिए।", rom: "mujhe pānī chāhie.", ja: "水がほしいです。", eng: "I need water." },
        { hi: "आपको क्या पसंद है?", rom: "āpko kyā pasand hai?", ja: "何がお好きですか。", eng: "What do you like?" },
        { hi: "मुझे बहुत तीखा पसंद नहीं है।", rom: "mujhe bahut tīkhā pasand nahīṁ hai.", ja: "とても辛いのは好きではありません。", eng: "I don't like very spicy food." },
        { hi: "प्रिया जी को पनीर पसंद है।", rom: "Priyā jī ko panīr pasand hai.", ja: "プリヤさんはパニールが好きです。", eng: "Priya ji likes paneer." },
        { hi: "मुझे मालूम नहीं।", rom: "mujhe mālūm nahīṁ.", ja: "知りません。", eng: "I don't know." }
      ],
      tip: "「मुझे＝私には」と覚えましょう。日本語で「私には〜が要る／私には〜が好み」と言ってから置きかえると、मैं と言いまちがえません。"
    },
    vocab: [
      { hi: "पसंद", rom: "pasand", ja: "好き・好み", eng: "liking", ex: "मुझे दाल पसंद है।", exRom: "mujhe dāl pasand hai.", exJa: "私はダールが好きです。" },
      { hi: "चाहिए", rom: "chāhie", ja: "要る・ほしい", eng: "need, want", ex: "मुझे एक और रोटी चाहिए।", exRom: "mujhe ek aur roṭī chāhie.", exJa: "ロティをもう1枚ほしいです。" },
      { hi: "मालूम", rom: "mālūm", ja: "知っている", eng: "known", ex: "क्या आपको मालूम है?", exRom: "kyā āpko mālūm hai?", exJa: "ご存じですか。" },
      { hi: "मुझे", rom: "mujhe", ja: "私に", eng: "to me", ex: "मुझे मेन्यू चाहिए।", exRom: "mujhe menyū chāhie.", exJa: "メニューがほしいです。" },
      { hi: "आपको", rom: "āpko", ja: "あなたに", eng: "to you", ex: "आपको चाय चाहिए?", exRom: "āpko chāy chāhie?", exJa: "チャイは要りますか。" },
      { hi: "चाय", rom: "chāy", ja: "チャイ・お茶（女）", eng: "tea", ex: "मुझे मसाला चाय बहुत पसंद है।", exRom: "mujhe masālā chāy bahut pasand hai.", exJa: "私はマサラチャイが大好きです。" },
      { hi: "दाल", rom: "dāl", ja: "ダール・豆のカレー（女）", eng: "lentils", ex: "यहाँ की दाल बहुत अच्छी है।", exRom: "yahāṁ kī dāl bahut achchhī hai.", exJa: "ここのダールはとてもおいしいです。" },
      { hi: "रोटी", rom: "roṭī", ja: "ロティ・薄焼きパン（女）", eng: "flatbread", ex: "मुझे दो रोटी चाहिए।", exRom: "mujhe do roṭī chāhie.", exJa: "ロティを2枚ほしいです。" },
      { hi: "चावल", rom: "chāval", ja: "ご飯・米（男）", eng: "rice", ex: "जापान में हम रोज़ चावल खाते हैं।", exRom: "jāpān meṁ ham roz chāval khāte haiṁ.", exJa: "日本では毎日ご飯を食べます。" },
      { hi: "पनीर", rom: "panīr", ja: "パニール・インドのチーズ（男）", eng: "paneer", ex: "मुझे पालक पनीर पसंद है।", exRom: "mujhe pālak panīr pasand hai.", exJa: "私はほうれん草とパニールのカレーが好きです。" },
      { hi: "मसाला", rom: "masālā", ja: "スパイス（男）", eng: "spice", ex: "इसमें बहुत मसाला है।", exRom: "ismeṁ bahut masālā hai.", exJa: "これはスパイスがたくさん入っています。" },
      { hi: "तीखा", rom: "tīkhā", ja: "辛い（女性名詞には तीखी）", eng: "spicy", ex: "यह सब्ज़ी बहुत तीखी है।", exRom: "yah sabzī bahut tīkhī hai.", exJa: "この野菜カレーはとても辛いです。" },
      { hi: "मिर्च", rom: "mirch", ja: "唐辛子（女）", eng: "chili", ex: "कम मिर्च, प्लीज़।", exRom: "kam mirch, plīz.", exJa: "唐辛子は少なめでお願いします。" },
      { hi: "कम", rom: "kam", ja: "少ない・控えめ", eng: "less, little", ex: "मुझे कम चीनी चाहिए।", exRom: "mujhe kam chīnī chāhie.", exJa: "砂糖は少なめがいいです。" },
      { hi: "पानी", rom: "pānī", ja: "水（男）", eng: "water", ex: "मुझे गरम पानी चाहिए।", exRom: "mujhe garam pānī chāhie.", exJa: "お湯がほしいです。" },
      { hi: "मीठा", rom: "mīṭhā", ja: "甘い・甘いもの", eng: "sweet", ex: "मुझे मीठा ज़्यादा पसंद नहीं है।", exRom: "mujhe mīṭhā zyādā pasand nahīṁ hai.", exJa: "甘いものはあまり好きではありません。" },
      { hi: "स्वाद", rom: "svād", ja: "味（男）", eng: "taste", ex: "इस दाल का स्वाद बहुत अच्छा है।", exRom: "is dāl kā svād bahut achchhā hai.", exJa: "このダールはとてもいい味です。" },
      { hi: "मेन्यू", rom: "menyū", ja: "メニュー（男）", eng: "menu", ex: "क्या मेन्यू अंग्रेज़ी में है?", exRom: "kyā menyū angrezī meṁ hai?", exJa: "メニューは英語でありますか。" },
      { hi: "बिल", rom: "bil", ja: "お会計・伝票（男）", eng: "bill", ex: "हमें बिल चाहिए।", exRom: "hameṁ bil chāhie.", exJa: "お会計をお願いします。" },
      { hi: "शाकाहारी", rom: "shākāhārī", ja: "ベジタリアン（菜食の）", eng: "vegetarian", ex: "प्रिया जी शाकाहारी हैं।", exRom: "Priyā jī shākāhārī haiṁ.", exJa: "プリヤさんはベジタリアンです。" }
    ],
    sentences: [
      { ja: "私はインド料理が好きです。", hi: "मुझे भारतीय खाना पसंद है।", rom: "mujhe bhāratīy khānā pasand hai.", eng: "I like Indian food." },
      { ja: "スプーンがほしいです。", hi: "मुझे चम्मच चाहिए।", rom: "mujhe chammach chāhie.", eng: "I need a spoon." },
      { ja: "何が要りますか。", hi: "आपको क्या चाहिए?", rom: "āpko kyā chāhie?", eng: "What do you need?" },
      { ja: "唐辛子は少なめがいいです。", hi: "मुझे कम मिर्च चाहिए।", rom: "mujhe kam mirch chāhie.", eng: "I'd like less chili." },
      { ja: "あまり辛いのは好きではありません。", hi: "मुझे ज़्यादा तीखा पसंद नहीं है।", rom: "mujhe zyādā tīkhā pasand nahīṁ hai.", eng: "I don't like it too spicy." },
      { ja: "ラージさんはお寿司が好きです。", hi: "राज जी को सुशी पसंद है।", rom: "Rāj jī ko sushī pasand hai.", eng: "Raj ji likes sushi." },
      { ja: "ネハさんはベジタリアンです。パニールが好きです。", hi: "नेहा जी शाकाहारी हैं। उन्हें पनीर पसंद है।", rom: "Nehā jī shākāhārī haiṁ. unheṁ panīr pasand hai.", eng: "Neha ji is vegetarian. She likes paneer." },
      { ja: "あのレストランの場所を知っていますか。", hi: "क्या आपको उस रेस्टोरेंट का पता मालूम है?", rom: "kyā āpko us resṭorenṭ kā patā mālūm hai?", eng: "Do you know where that restaurant is?" },
      { ja: "ロティ4枚とご飯1皿がほしいです。", hi: "हमें चार रोटी और एक प्लेट चावल चाहिए।", rom: "hameṁ chār roṭī aur ek pleṭ chāval chāhie.", eng: "We'd like four rotis and a plate of rice." },
      { ja: "日本の朝ご飯が好きですが、インドの朝ご飯も好きです。", hi: "मुझे जापानी नाश्ता पसंद है, लेकिन भारतीय नाश्ता भी पसंद है।", rom: "mujhe jāpānī nāshtā pasand hai, lekin bhāratīy nāshtā bhī pasand hai.", eng: "I like Japanese breakfast, but I like Indian breakfast too." }
    ],
    dialogue: {
      title: "シャルマさんとデリーのレストランで",
      lines: [
        { s: "B", name: "Sharma ji", hi: "आकिहिरो जी, आपको क्या पसंद है?", rom: "Ākihiro jī, āpko kyā pasand hai?", ja: "章弘さん、何がお好きですか。", eng: "Akihiro ji, what do you like?" },
        { s: "A", name: "Akihiro", hi: "मुझे पनीर बहुत पसंद है।", rom: "mujhe panīr bahut pasand hai.", ja: "パニールが大好きです。", eng: "I really like paneer." },
        { s: "B", name: "Sharma ji", hi: "अच्छा! तो पालक पनीर और दाल मखनी लेते हैं।", rom: "achchhā! to pālak panīr aur dāl makhnī lete haiṁ.", ja: "いいですね！ではパーラク・パニールとダール・マカニーにしましょう。", eng: "Great! Then let's get palak paneer and dal makhani." },
        { s: "A", name: "Akihiro", hi: "बहुत अच्छा। लेकिन मुझे बहुत तीखा पसंद नहीं है।", rom: "bahut achchhā. lekin mujhe bahut tīkhā pasand nahīṁ hai.", ja: "いいですね。でも、とても辛いのは苦手です。", eng: "Very good. But I don't like it very spicy." },
        { s: "B", name: "Sharma ji", hi: "कोई बात नहीं। भैया, कम मिर्च, प्लीज़।", rom: "koī bāt nahīṁ. bhaiyā, kam mirch, plīz.", ja: "大丈夫ですよ。（店員さんに）お兄さん、唐辛子少なめでお願いします。", eng: "No problem. (To the waiter) Brother, less chili, please." },
        { s: "A", name: "Akihiro", hi: "शर्मा जी, आपको क्या पसंद है?", rom: "Sharmā jī, āpko kyā pasand hai?", ja: "シャルマさんは何がお好きですか。", eng: "Sharma ji, what do you like?" },
        { s: "B", name: "Sharma ji", hi: "मुझे छोले भटूरे पसंद हैं। दिल्ली की ख़ास चीज़ है!", rom: "mujhe chhole bhaṭūre pasand haiṁ. dillī kī khās chīz hai!", ja: "チョーレー・バトゥーレが好きです。デリーの名物ですよ！", eng: "I like chole bhature. It's a Delhi special!" },
        { s: "A", name: "Akihiro", hi: "मुझे मालूम है! राज जी भी यही कहते हैं।", rom: "mujhe mālūm hai! Rāj jī bhī yahī kahte haiṁ.", ja: "知っています！ラージさんも同じことを言います。", eng: "I know! Raj ji says the same thing." },
        { s: "B", name: "Sharma ji", hi: "आपको और कुछ चाहिए? चाय या लस्सी?", rom: "āpko aur kuchh chāhie? chāy yā lassī?", ja: "ほかに何か要りますか。チャイかラッシーは？", eng: "Do you need anything else? Tea or lassi?" },
        { s: "A", name: "Akihiro", hi: "मुझे एक मीठी लस्सी चाहिए।", rom: "mujhe ek mīṭhī lassī chāhie.", ja: "甘いラッシーを1つお願いします。", eng: "I'd like a sweet lassi." },
        { s: "B", name: "Sharma ji", hi: "बहुत बढ़िया। खाने के बाद मसाला चाय भी!", rom: "bahut baṛhiyā. khāne ke bād masālā chāy bhī!", ja: "いいですね。食事のあとはマサラチャイもどうぞ！", eng: "Excellent. And masala tea after the meal!" },
        { s: "A", name: "Akihiro", hi: "शुक्रिया, शर्मा जी। सब कुछ बहुत अच्छा है।", rom: "shukriyā, Sharmā jī. sab kuchh bahut achchhā hai.", ja: "ありがとうございます、シャルマさん。何もかもとてもおいしいです。", eng: "Thank you, Sharma ji. Everything is very good." }
      ]
    },
    writing: "好きな食べ物を3つ、苦手なものを1つ、レストランで頼みたい物を1つ書こう。型：मुझे … पसंद है।／मुझे … पसंद नहीं है।／मुझे … चाहिए।（mujhe … pasand hai. / mujhe … chāhie.）",
    speaking: "インド料理店（またはメニューの写真）を思い浮かべて、注文を声に出そう。辛さの頼み方（कम मिर्च）と、相手への質問（आपको क्या पसंद है?）を必ず入れます。"
  }
]);

window.WEEKS = (window.WEEKS || []).concat([
  // ===== Week 10 =====
  {
    week: 10,
    title: "お願いの言い方 दीजिए・कृपया",
    scene: "タクシー・お店・ホテルでお願い",
    cefr: "A1",
    goal: "タクシー・お店・ホテルで「〜をください」「〜してください」「〜しないでください」をていねいに言える。",
    grammar: {
      title: "आप の命令形 -इए（〜してください）と कृपया・ज़रा・मत",
      points: [
        "आप（あなた）へのお願いは、動詞の語幹（-ना を取った形）に -इए をつけます。बैठना（座る）→ बैठिए（お座りください）、बताना（教える）→ बताइए、रुकना（待つ・止まる）→ रुकिए、आना（来る）→ आइए。動詞が文の最後に来るのは日本語の「〜てください」と同じです。",
        "よく使う3つは形が特別です。देना（あげる）→ दीजिए（ください）、लेना（取る）→ लीजिए（どうぞ、お取りください）、करना（する）→ कीजिए（してください）。「物＋दीजिए」で「〜をください」になり、日本語の「を」にあたる語は要りません（पानी दीजिए＝水をください）。",
        "-इए の形だけで十分ていねいです。前に कृपया（どうか）をつけると少し改まった言い方、ज़रा（ちょっと）をつけると「ちょっと〜してもらえますか」という柔らかい言い方になります。会話では英語の प्लीज़（plīz）もよく使います。",
        "「〜しないでください」は、動詞の前に मत か न を置きます。चिंता मत कीजिए（心配しないでください）。मत ははっきり、न はやわらかい感じです（देर न कीजिए＝遅れないでくださいね）。日本語と違い、否定の語は動詞のすぐ前に来ます。",
        "友だちや年下には तुम を使い、命令形は -ओ になります（बैठो, आओ, दो, लो, करो）。インドの仲間同士ではよく聞きますが、岩田さんはまず आप の -इए だけ使えば大丈夫です。運転手さんや店員さんには भैया（お兄さん）と呼びかけると親しみが出ます。"
      ],
      examples: [
        { hi: "कृपया बैठिए।", rom: "kripayā baiṭhie.", ja: "どうぞお座りください。", eng: "Please have a seat." },
        { hi: "ज़रा पानी दीजिए।", rom: "zarā pānī dījie.", ja: "ちょっとお水をください。", eng: "Could I have some water?" },
        { hi: "भैया, यहाँ रुकिए।", rom: "bhaiyā, yahāṁ rukie.", ja: "運転手さん、ここで止まってください。", eng: "Please stop here." },
        { hi: "कृपया एसी चालू कीजिए।", rom: "kripayā esī chālū kījie.", ja: "エアコンをつけてください。", eng: "Please turn on the AC." },
        { hi: "खाना बहुत तीखा मत बनाइए।", rom: "khānā bahut tīkhā mat banāie.", ja: "料理をあまり辛くしないでください。", eng: "Please don't make the food too spicy." },
        { hi: "आओ, बैठो।", rom: "āo, baiṭho.", ja: "おいで、座って。（友だち同士）", eng: "Come, sit down." }
      ],
      tip: "दीजिए（ください）・लीजिए（どうぞ）・कीजिए（してください）の3つを口ぐせにすると、旅先のお願いの半分は言えます。"
    },
    vocab: [
      { hi: "दीजिए", rom: "dījie", ja: "ください（देना）", eng: "please give", ex: "एक बोतल पानी दीजिए।", exRom: "ek botal pānī dījie.", exJa: "水を1本ください。" },
      { hi: "लीजिए", rom: "lījie", ja: "どうぞ（लेना）", eng: "please take", ex: "यह लीजिए, मेरा कार्ड।", exRom: "yah lījie, merā kārḍ.", exJa: "どうぞ、私の名刺です。" },
      { hi: "बैठिए", rom: "baiṭhie", ja: "お座りください", eng: "please sit", ex: "आइए, बैठिए।", exRom: "āie, baiṭhie.", exJa: "どうぞ、お座りください。" },
      { hi: "आइए", rom: "āie", ja: "いらっしゃい、来てください", eng: "please come", ex: "अंदर आइए।", exRom: "andar āie.", exJa: "中へどうぞ。" },
      { hi: "बताइए", rom: "batāie", ja: "教えてください", eng: "please tell", ex: "ज़रा बताइए, स्टेशन कहाँ है?", exRom: "zarā batāie, sṭeshan kahāṁ hai?", exJa: "ちょっと教えてください、駅はどこですか。" },
      { hi: "रुकिए", rom: "rukie", ja: "待ってください、止まってください", eng: "please wait", ex: "एक मिनट रुकिए।", exRom: "ek minaṭ rukie.", exJa: "1分待ってください。" },
      { hi: "चलिए", rom: "chalie", ja: "行ってください、行きましょう", eng: "please go", ex: "एयरपोर्ट चलिए।", exRom: "eyarporṭ chalie.", exJa: "空港までお願いします。" },
      { hi: "दिखाइए", rom: "dikhāie", ja: "見せてください", eng: "please show", ex: "मेनू दिखाइए।", exRom: "menū dikhāie.", exJa: "メニューを見せてください。" },
      { hi: "कृपया", rom: "kripayā", ja: "どうか（ていねい）", eng: "please", ex: "कृपया बिल दीजिए।", exRom: "kripayā bil dījie.", exJa: "お会計をお願いします。" },
      { hi: "ज़रा", rom: "zarā", ja: "ちょっと", eng: "a little, just", ex: "ज़रा रुकिए।", exRom: "zarā rukie.", exJa: "ちょっと待ってください。" },
      { hi: "मत", rom: "mat", ja: "〜しないで（否定のお願い）", eng: "don't", ex: "चिंता मत कीजिए।", exRom: "chintā mat kījie.", exJa: "心配しないでください。" },
      { hi: "पानी", rom: "pānī", ja: "水（男）", eng: "water", ex: "ठंडा पानी दीजिए।", exRom: "ṭhanḍā pānī dījie.", exJa: "冷たい水をください。" },
      { hi: "बिल", rom: "bil", ja: "請求書、お会計（男）", eng: "bill", ex: "बिल कितना है?", exRom: "bil kitnā hai?", exJa: "お会計はいくらですか。" },
      { hi: "रसीद", rom: "rasīd", ja: "領収書（女）", eng: "receipt", ex: "रसीद भी दीजिए।", exRom: "rasīd bhī dījie.", exJa: "領収書もください。" },
      { hi: "चाबी", rom: "chābī", ja: "鍵（女）", eng: "key", ex: "कमरे की चाबी दीजिए।", exRom: "kamre kī chābī dījie.", exJa: "部屋の鍵をください。" },
      { hi: "तौलिया", rom: "tauliyā", ja: "タオル（男）", eng: "towel", ex: "एक और तौलिया दीजिए।", exRom: "ek aur tauliyā dījie.", exJa: "タオルをもう1枚ください。" },
      { hi: "सीधे", rom: "sīdhe", ja: "まっすぐ", eng: "straight", ex: "सीधे चलिए।", exRom: "sīdhe chalie.", exJa: "まっすぐ行ってください。" },
      { hi: "दाएँ", rom: "dāeṁ", ja: "右へ", eng: "to the right", ex: "यहाँ से दाएँ मुड़िए।", exRom: "yahāṁ se dāeṁ muṛie.", exJa: "ここから右に曲がってください。" },
      { hi: "बाएँ", rom: "bāeṁ", ja: "左へ", eng: "to the left", ex: "अगले सिग्नल पर बाएँ मुड़िए।", exRom: "agle signal par bāeṁ muṛie.", exJa: "次の信号で左に曲がってください。" },
      { hi: "जल्दी", rom: "jaldī", ja: "急いで、早く", eng: "quickly", ex: "थोड़ा जल्दी चलिए।", exRom: "thoṛā jaldī chalie.", exJa: "少し急いでください。" }
    ],
    sentences: [
      { ja: "お水をください。", hi: "पानी दीजिए।", rom: "pānī dījie.", eng: "Water, please." },
      { ja: "少し待ってください。", hi: "एक मिनट रुकिए।", rom: "ek minaṭ rukie.", eng: "Please wait a minute." },
      { ja: "運転手さん、ちょうどここで止めてください。", hi: "भैया, यहीं रोकिए।", rom: "bhaiyā, yahīṁ rokie.", eng: "Please stop right here." },
      { ja: "心配しないでください。", hi: "चिंता मत कीजिए।", rom: "chintā mat kījie.", eng: "Please don't worry." },
      { ja: "先にホテルへ行ってください。", hi: "पहले होटल चलिए।", rom: "pahle hoṭal chalie.", eng: "Please go to the hotel first." },
      { ja: "もう少しゆっくり運転してください。", hi: "थोड़ा धीरे चलाइए।", rom: "thoṛā dhīre chalāie.", eng: "Please drive a little slower." },
      { ja: "エアコンをつけてください。", hi: "कृपया एसी चालू कीजिए।", rom: "kripayā esī chālū kījie.", eng: "Please turn on the AC." },
      { ja: "お会計と領収書をください。", hi: "बिल और रसीद दीजिए।", rom: "bil aur rasīd dījie.", eng: "The bill and a receipt, please." },
      { ja: "ちょっと教えてください、市場はどこですか。", hi: "ज़रा बताइए, मार्केट कहाँ है?", rom: "zarā batāie, mārkeṭ kahāṁ hai?", eng: "Excuse me, where is the market?" },
      { ja: "私の部屋に水を届けてください。", hi: "कृपया मेरे कमरे में पानी भेजिए।", rom: "kripayā mere kamre meṁ pānī bhejie.", eng: "Please send some water to my room." }
    ],
    dialogue: {
      title: "デリーのタクシーで",
      lines: [
        { s: "A", name: "Akihiro", hi: "नमस्ते भैया, चाँदनी चौक चलिए।", rom: "namaste bhaiyā, Chāṁdnī Chauk chalie.", ja: "こんにちは、チャンドニー・チョークまでお願いします。", eng: "Hello, to Chandni Chowk, please." },
        { s: "B", name: "Driver", hi: "जी साहब, बैठिए।", rom: "jī sāhab, baiṭhie.", ja: "はい、どうぞお乗りください。", eng: "Yes sir, please get in." },
        { s: "A", name: "Akihiro", hi: "कृपया एसी चालू कीजिए।", rom: "kripayā esī chālū kījie.", ja: "エアコンをつけてください。", eng: "Please turn on the AC." },
        { s: "B", name: "Driver", hi: "ठीक है। आप कहाँ से हैं?", rom: "ṭhīk hai. āp kahāṁ se haiṁ?", ja: "わかりました。どちらから来られたんですか。", eng: "Okay. Where are you from?" },
        { s: "A", name: "Akihiro", hi: "मैं जापान से हूँ। ज़रा धीरे चलाइए।", rom: "maiṁ Jāpān se hūṁ. zarā dhīre chalāie.", ja: "日本からです。少しゆっくり走ってください。", eng: "I'm from Japan. Please drive a bit slower." },
        { s: "B", name: "Driver", hi: "चिंता मत कीजिए, साहब।", rom: "chintā mat kījie, sāhab.", ja: "ご心配なく。", eng: "Don't worry, sir." },
        { s: "A", name: "Akihiro", hi: "वहाँ बाएँ मुड़िए, फिर सीधे चलिए।", rom: "vahāṁ bāeṁ muṛie, phir sīdhe chalie.", ja: "あそこを左に曲がって、それからまっすぐ行ってください。", eng: "Turn left there, then go straight." },
        { s: "B", name: "Driver", hi: "लीजिए साहब, चाँदनी चौक आ गया।", rom: "lījie sāhab, Chāṁdnī Chauk ā gayā.", ja: "はい、チャンドニー・チョークに着きました。", eng: "Here you are, sir. This is Chandni Chowk." },
        { s: "A", name: "Akihiro", hi: "भैया, यहीं रोकिए। कितने रुपये?", rom: "bhaiyā, yahīṁ rokie. kitne rupaye?", ja: "ここで止めてください。いくらですか。", eng: "Stop right here, please. How much?" },
        { s: "B", name: "Driver", hi: "दो सौ रुपये।", rom: "do sau rupaye.", ja: "200ルピーです。", eng: "Two hundred rupees." },
        { s: "A", name: "Akihiro", hi: "यह लीजिए। रसीद भी दीजिए।", rom: "yah lījie. rasīd bhī dījie.", ja: "どうぞ。領収書もください。", eng: "Here you go. A receipt too, please." },
        { s: "B", name: "Driver", hi: "जी, यह लीजिए। शुक्रिया!", rom: "jī, yah lījie. shukriyā!", ja: "はい、どうぞ。ありがとうございます！", eng: "Sure, here it is. Thank you!" }
      ]
    },
    writing: "ホテルやタクシー、お店で使うお願いを5つ書きましょう。型：「〜 दीजिए（〜 dījie）」「कृपया 〜 कीजिए（kripayā 〜 kījie）」「〜 मत कीजिए（〜 mat kījie）」。例：कृपया रसीद दीजिए।（kripayā rasīd dījie.）",
    speaking: "デリーでタクシーに乗った場面を想像して、①行き先 ②ゆっくり走って ③ここで止めて ④領収書をください、の4つを声に出して言いましょう。"
  },

  // ===== Week 11 =====
  {
    week: 11,
    title: "形容詞の男性・女性と比べ方",
    scene: "物や場所を比べる",
    cefr: "A1",
    goal: "物や場所を「大きい・安い・きれい」と言い、「AはBより〜」「いちばん〜」と比べられる。",
    grammar: {
      title: "形容詞の一致（-ā / -ī / -e）と से ज़्यादा・सबसे",
      points: [
        "-ā（आ）で終わる形容詞は、あとの名詞の性と数に合わせて形が変わります。男性・1つ：अच्छा कमरा（よい部屋）、女性：अच्छी चाय（おいしいチャイ・女性は1つでも複数でも -ī）、男性・複数：अच्छे आम（おいしいマンゴー）。日本語の形容詞は変わらないので、ここがいちばん違うところです。",
        "語順は日本語と同じで「形容詞＋名詞」（बड़ा शहर＝大きな町）、「名詞は 形容詞 है」（कमरा बड़ा है＝部屋は大きいです）です。है の前の形容詞も主語に合わせます：दुकान बड़ी है（店は大きいです）。目上の人をほめるときは複数の -e を使います：शर्मा जी बहुत अच्छे हैं。",
        "-ā で終わらない形容詞は変わりません。सुंदर（きれい）、ख़राब（悪い）、साफ़（清潔な）、गरम（熱い・暑い）、मुश्किल（難しい）などです。सुंदर लड़का も सुंदर साड़ी も同じ形です。",
        "比べるときは「A B से ज़्यादा 〜 है」＝「AはBより〜です」。से が日本語の「より」にあたり、語順も日本語と同じです：यह होटल उस होटल से सस्ता है（このホテルはあのホテルより安い）。ज़्यादा は省いてもよく、「より少ない」は कम を使います。",
        "「いちばん〜」は सबसे を形容詞の前に置きます：सबसे अच्छा（いちばんよい）。सबसे のあとも一致は残るので、सबसे अच्छी दुकान（いちばんよい店）となります。"
      ],
      examples: [
        { hi: "यह कमरा बड़ा है।", rom: "yah kamrā baṛā hai.", ja: "この部屋は大きいです。", eng: "This room is big." },
        { hi: "यह दुकान बड़ी है।", rom: "yah dukān baṛī hai.", ja: "この店は大きいです。", eng: "This shop is big." },
        { hi: "ये आम बहुत अच्छे हैं।", rom: "ye ām bahut achchhe haiṁ.", ja: "このマンゴーはとてもおいしいです。", eng: "These mangoes are very good." },
        { hi: "प्रिया जी का दफ़्तर बहुत साफ़ है।", rom: "Priyā jī kā daftar bahut sāf hai.", ja: "プリヤさんのオフィスはとてもきれいです。", eng: "Priya's office is very clean." },
        { hi: "दिल्ली ओज़ू से ज़्यादा गरम है।", rom: "Dillī Ozū se zyādā garam hai.", ja: "デリーは大洲より暑いです。", eng: "Delhi is hotter than Ozu." },
        { hi: "यह दुकान सबसे सस्ती है।", rom: "yah dukān sabse sastī hai.", ja: "この店がいちばん安いです。", eng: "This shop is the cheapest." }
      ],
      tip: "名詞を覚えるときは अच्छा をつけて覚えましょう。「अच्छी चाय」「अच्छा कमरा」と口が覚えれば、その名詞の性も一緒に身につきます。"
    },
    vocab: [
      { hi: "अच्छा", rom: "achchhā", ja: "よい、おいしい", eng: "good", ex: "यह चाय बहुत अच्छी है।", exRom: "yah chāy bahut achchhī hai.", exJa: "このチャイはとてもおいしいです。" },
      { hi: "बड़ा", rom: "baṛā", ja: "大きい", eng: "big", ex: "दिल्ली बड़ा शहर है।", exRom: "Dillī baṛā shahar hai.", exJa: "デリーは大きな町です。" },
      { hi: "छोटा", rom: "chhoṭā", ja: "小さい", eng: "small", ex: "मेरा क्लिनिक छोटा है।", exRom: "merā klinik chhoṭā hai.", exJa: "私の院は小さいです。" },
      { hi: "नया", rom: "nayā", ja: "新しい", eng: "new", ex: "यह मेरी नई गाड़ी है।", exRom: "yah merī naī gāṛī hai.", exJa: "これは私の新しい車です。" },
      { hi: "पुराना", rom: "purānā", ja: "古い", eng: "old", ex: "यह बहुत पुराना मंदिर है।", exRom: "yah bahut purānā mandir hai.", exJa: "これはとても古いお寺です。" },
      { hi: "सस्ता", rom: "sastā", ja: "安い", eng: "cheap", ex: "यहाँ फल सस्ते हैं।", exRom: "yahāṁ phal saste haiṁ.", exJa: "ここは果物が安いです。" },
      { hi: "महँगा", rom: "mahaṁgā", ja: "高い（値段）", eng: "expensive", ex: "यह होटल महँगा है।", exRom: "yah hoṭal mahaṁgā hai.", exJa: "このホテルは高いです。" },
      { hi: "ठंडा", rom: "ṭhanḍā", ja: "冷たい、寒い", eng: "cold", ex: "ठंडी लस्सी दीजिए।", exRom: "ṭhanḍī lassī dījie.", exJa: "冷たいラッシーをください。" },
      { hi: "गरम", rom: "garam", ja: "熱い、暑い（変わらない）", eng: "hot", ex: "चाय बहुत गरम है।", exRom: "chāy bahut garam hai.", exJa: "チャイがとても熱いです。" },
      { hi: "सुंदर", rom: "sundar", ja: "美しい（変わらない）", eng: "beautiful", ex: "ताज महल बहुत सुंदर है।", exRom: "Tāj Mahal bahut sundar hai.", exJa: "タージ・マハルはとても美しいです。" },
      { hi: "ख़राब", rom: "kharāb", ja: "悪い、壊れた（変わらない）", eng: "bad", ex: "आज मौसम ख़राब है।", exRom: "āj mausam kharāb hai.", exJa: "今日は天気が悪いです。" },
      { hi: "साफ़", rom: "sāf", ja: "清潔な、きれいな（変わらない）", eng: "clean", ex: "कमरा बहुत साफ़ है।", exRom: "kamrā bahut sāf hai.", exJa: "部屋がとてもきれいです。" },
      { hi: "ज़्यादा", rom: "zyādā", ja: "もっと、より多く", eng: "more", ex: "यह वाला ज़्यादा अच्छा है।", exRom: "yah vālā zyādā achchhā hai.", exJa: "こちらのほうがいいです。" },
      { hi: "कम", rom: "kam", ja: "少ない、より少なく", eng: "less", ex: "कम तीखा बनाइए।", exRom: "kam tīkhā banāie.", exJa: "辛さ控えめで作ってください。" },
      { hi: "सबसे", rom: "sabse", ja: "いちばん", eng: "most", ex: "यह सबसे अच्छा है।", exRom: "yah sabse achchhā hai.", exJa: "これがいちばんいいです。" },
      { hi: "तीखा", rom: "tīkhā", ja: "辛い", eng: "spicy", ex: "यह खाना बहुत तीखा है।", exRom: "yah khānā bahut tīkhā hai.", exJa: "この料理はとても辛いです。" },
      { hi: "मीठा", rom: "mīṭhā", ja: "甘い", eng: "sweet", ex: "मिठाई बहुत मीठी है।", exRom: "miṭhāī bahut mīṭhī hai.", exJa: "お菓子がとても甘いです。" },
      { hi: "शहर", rom: "shahar", ja: "町、都市（男）", eng: "city", ex: "ओज़ू एक छोटा शहर है।", exRom: "Ozū ek chhoṭā shahar hai.", exJa: "大洲は小さな町です。" },
      { hi: "दुकान", rom: "dukān", ja: "店（女）", eng: "shop", ex: "यह दुकान बहुत अच्छी है।", exRom: "yah dukān bahut achchhī hai.", exJa: "この店はとてもいいです。" },
      { hi: "मौसम", rom: "mausam", ja: "天気、季節（男）", eng: "weather", ex: "आज मौसम अच्छा है।", exRom: "āj mausam achchhā hai.", exJa: "今日はいい天気です。" }
    ],
    sentences: [
      { ja: "この部屋は清潔です。", hi: "यह कमरा साफ़ है।", rom: "yah kamrā sāf hai.", eng: "This room is clean." },
      { ja: "この店は安いです。", hi: "यह दुकान सस्ती है।", rom: "yah dukān sastī hai.", eng: "This shop is cheap." },
      { ja: "このマンゴーはとても甘いです。", hi: "ये आम बहुत मीठे हैं।", rom: "ye ām bahut mīṭhe haiṁ.", eng: "These mangoes are very sweet." },
      { ja: "大洲は小さな町です。", hi: "ओज़ू छोटा शहर है।", rom: "Ozū chhoṭā shahar hai.", eng: "Ozu is a small town." },
      { ja: "私の院は新しくありません。", hi: "मेरा क्लिनिक नया नहीं है।", rom: "merā klinik nayā nahīṁ hai.", eng: "My clinic is not new." },
      { ja: "デリーは横浜より暑いです。", hi: "दिल्ली योकोहामा से ज़्यादा गरम है।", rom: "Dillī Yokohāmā se zyādā garam hai.", eng: "Delhi is hotter than Yokohama." },
      { ja: "このホテルはあのホテルより安いです。", hi: "यह होटल उस होटल से सस्ता है।", rom: "yah hoṭal us hoṭal se sastā hai.", eng: "This hotel is cheaper than that hotel." },
      { ja: "今日は昨日より天気がいいです。", hi: "आज मौसम कल से अच्छा है।", rom: "āj mausam kal se achchhā hai.", eng: "The weather is better today than yesterday." },
      { ja: "この店のサモサがいちばんおいしいです。", hi: "इस दुकान के समोसे सबसे अच्छे हैं।", rom: "is dukān ke samose sabse achchhe haiṁ.", eng: "This shop's samosas are the best." },
      { ja: "インドのチャイは日本のお茶より甘いです。", hi: "भारत की चाय जापान की चाय से ज़्यादा मीठी है।", rom: "Bhārat kī chāy Jāpān kī chāy se zyādā mīṭhī hai.", eng: "Indian tea is sweeter than Japanese tea." }
    ],
    dialogue: {
      title: "市場でクルタを選ぶ",
      lines: [
        { s: "B", name: "Shopkeeper", hi: "आइए साहब, क्या चाहिए?", rom: "āie sāhab, kyā chāhie?", ja: "いらっしゃいませ、何をお探しですか。", eng: "Welcome, sir. What do you need?" },
        { s: "A", name: "Akihiro", hi: "एक कुर्ता चाहिए। यह कितने का है?", rom: "ek kurtā chāhie. yah kitne kā hai?", ja: "クルタが1枚ほしいです。これはいくらですか。", eng: "I need a kurta. How much is this?" },
        { s: "B", name: "Shopkeeper", hi: "यह पाँच सौ रुपये का है।", rom: "yah pāṁch sau rupaye kā hai.", ja: "これは500ルピーです。", eng: "This one is five hundred rupees." },
        { s: "A", name: "Akihiro", hi: "यह थोड़ा छोटा है। बड़ा वाला दिखाइए।", rom: "yah thoṛā chhoṭā hai. baṛā vālā dikhāie.", ja: "これは少し小さいです。大きいのを見せてください。", eng: "This is a bit small. Show me a bigger one." },
        { s: "B", name: "Shopkeeper", hi: "यह नीला वाला लीजिए। यह ज़्यादा बड़ा है।", rom: "yah nīlā vālā lījie. yah zyādā baṛā hai.", ja: "この青いのをどうぞ。こちらのほうが大きいです。", eng: "Try this blue one. It's bigger." },
        { s: "A", name: "Akihiro", hi: "अच्छा है। यह सफ़ेद वाला कैसा है?", rom: "achchhā hai. yah safed vālā kaisā hai?", ja: "いいですね。この白いのはどうですか。", eng: "Nice. How about this white one?" },
        { s: "B", name: "Shopkeeper", hi: "वह सबसे अच्छा है, पर थोड़ा महँगा है।", rom: "vah sabse achchhā hai, par thoṛā mahaṁgā hai.", ja: "それがいちばんいいですが、少し高いです。", eng: "That's the best one, but it's a little expensive." },
        { s: "A", name: "Akihiro", hi: "कितने का है?", rom: "kitne kā hai?", ja: "いくらですか。", eng: "How much is it?" },
        { s: "B", name: "Shopkeeper", hi: "आठ सौ रुपये का।", rom: "āṭh sau rupaye kā.", ja: "800ルピーです。", eng: "Eight hundred rupees." },
        { s: "A", name: "Akihiro", hi: "यह नीले वाले से बहुत महँगा है!", rom: "yah nīle vāle se bahut mahaṁgā hai!", ja: "青いのよりずいぶん高いですね！", eng: "It's much more expensive than the blue one!" },
        { s: "B", name: "Shopkeeper", hi: "अच्छा, आपके लिए सात सौ।", rom: "achchhā, āpke lie sāt sau.", ja: "じゃあ、あなたには700で。", eng: "Okay, seven hundred for you." },
        { s: "A", name: "Akihiro", hi: "ठीक है, सफ़ेद वाला दीजिए।", rom: "ṭhīk hai, safed vālā dījie.", ja: "わかりました、白いのをください。", eng: "Okay, I'll take the white one." }
      ]
    },
    writing: "大洲（ओज़ू）とデリー（दिल्ली）、または日本とインドを比べる文を4つ書きましょう。型：「A B से ज़्यादा 〜 है।（A B se zyādā 〜 hai.）」「〜 सबसे 〜 है।（〜 sabse 〜 hai.）」。形容詞の -ā / -ī / -e に気をつけましょう。",
    speaking: "身のまわりの物（院・車・スマホ・好きな食べ物）を3つ選び、「大きい／小さい」「新しい／古い」「いちばん好き」を使って、ヒンディー語で30秒話してみましょう。"
  },

  // ===== Week 12 =====
  {
    week: 12,
    title: "できる सकना・わかる",
    scene: "言葉が通じない時",
    cefr: "A1",
    goal: "「〜できます／できません」「わかりません」「ゆっくり話してください」と言って、言葉が通じない場面を乗り切れる。",
    grammar: {
      title: "語幹＋सकता हूँ（できる）、समझना（わかる）、मुझे … आती है",
      points: [
        "「〜できる」は「動詞の語幹＋सकता/सकती/सकते＋हूँ/है/हैं」です。मैं हिंदी बोल सकता हूँ（私はヒンディー語が話せます）。本動詞は -ना を取った語幹（बोल, पढ़, लिख）だけを置き、सकना のほうが性と数で変わります（男性 सकता、女性 सकती、आप・複数 सकते）。「話せる」と同じく「できる」が後ろにつくのは日本語と同じです。",
        "否定は नहीं を語幹の前、または सकना の前に置きます：मैं नहीं आ सकता / मैं लिख नहीं सकता（書けません）。否定文では最後の हूँ・है がよく省かれます。",
        "「क्या आप … सकते हैं?」は「〜していただけますか」というとてもていねいなお願いになります。क्या आप धीरे बोल सकते हैं?（ゆっくり話していただけますか）。先週の धीरे बोलिए（ゆっくり話してください）、फिर से बोलिए（もう一度言ってください）と一緒に使いましょう。",
        "समझना は「わかる・理解する」。मैं समझता हूँ（わかります）。聞き取れなかったときの「わかりませんでした」は मैं नहीं समझा（女性は समझी）という過去の形で、決まり文句として覚えます。わかったときは समझ गया（わかりました）と言います。",
        "言葉が「できる」は मुझे … आती है の形もよく使います。मुझे हिंदी आती है ＝「私にヒンディー語が来る」という言い方で、पसंद है と同じく मुझे（私に）で始めます。हिंदी が女性名詞なので आती です。少しだけなら थोड़ी-थोड़ी（少しずつ）をつけます。"
      ],
      examples: [
        { hi: "मैं हिंदी बोल सकता हूँ।", rom: "maiṁ hindī bol saktā hūṁ.", ja: "私はヒンディー語が話せます。", eng: "I can speak Hindi." },
        { hi: "नेहा जी जापानी पढ़ सकती हैं।", rom: "Nehā jī jāpānī paṛh saktī haiṁ.", ja: "ネハさんは日本語が読めます。", eng: "Neha can read Japanese." },
        { hi: "मैं कल नहीं आ सकता।", rom: "maiṁ kal nahīṁ ā saktā.", ja: "明日は来られません。", eng: "I can't come tomorrow." },
        { hi: "क्या आप धीरे बोल सकते हैं?", rom: "kyā āp dhīre bol sakte haiṁ?", ja: "ゆっくり話していただけますか。", eng: "Could you speak slowly?" },
        { hi: "मुझे थोड़ी-थोड़ी हिंदी आती है।", rom: "mujhe thoṛī-thoṛī hindī ātī hai.", ja: "ヒンディー語が少しできます。", eng: "I know a little Hindi." },
        { hi: "माफ़ कीजिए, मैं नहीं समझा।", rom: "māf kījie, maiṁ nahīṁ samjhā.", ja: "すみません、わかりませんでした。", eng: "Sorry, I didn't understand." }
      ],
      tip: "困ったら「माफ़ कीजिए, मैं नहीं समझा। धीरे बोलिए।」の2文をセットで言いましょう。これだけで、相手はゆっくり言い直してくれます。"
    },
    vocab: [
      { hi: "सकना", rom: "saknā", ja: "〜できる", eng: "can", ex: "मैं हिंदी पढ़ सकता हूँ।", exRom: "maiṁ hindī paṛh saktā hūṁ.", exJa: "私はヒンディー語が読めます。" },
      { hi: "समझना", rom: "samajhnā", ja: "わかる、理解する", eng: "understand", ex: "मैं थोड़ा-थोड़ा समझता हूँ।", exRom: "maiṁ thoṛā-thoṛā samajhtā hūṁ.", exJa: "少しずつわかります。" },
      { hi: "बोलना", rom: "bolnā", ja: "話す、言う", eng: "speak", ex: "आप अंग्रेज़ी बोलते हैं?", exRom: "āp angrezī bolte haiṁ?", exJa: "英語を話されますか。" },
      { hi: "पढ़ना", rom: "paṛhnā", ja: "読む、勉強する", eng: "read", ex: "मैं हिंदी अख़बार नहीं पढ़ सकता।", exRom: "maiṁ hindī akhbār nahīṁ paṛh saktā.", exJa: "ヒンディー語の新聞は読めません。" },
      { hi: "लिखना", rom: "likhnā", ja: "書く", eng: "write", ex: "कृपया यहाँ लिखिए।", exRom: "kripayā yahāṁ likhie.", exJa: "ここに書いてください。" },
      { hi: "सुनना", rom: "sunnā", ja: "聞く", eng: "listen", ex: "ज़रा सुनिए!", exRom: "zarā sunie!", exJa: "すみません！（呼びかけ）" },
      { hi: "धीरे", rom: "dhīre", ja: "ゆっくり", eng: "slowly", ex: "धीरे बोलिए, प्लीज़।", exRom: "dhīre bolie, plīz.", exJa: "ゆっくり話してください。" },
      { hi: "फिर से", rom: "phir se", ja: "もう一度", eng: "again", ex: "फिर से बोलिए।", exRom: "phir se bolie.", exJa: "もう一度言ってください。" },
      { hi: "थोड़ा", rom: "thoṛā", ja: "少し", eng: "a little", ex: "मुझे थोड़ी हिंदी आती है।", exRom: "mujhe thoṛī hindī ātī hai.", exJa: "ヒンディー語が少しできます。" },
      { hi: "मतलब", rom: "matlab", ja: "意味（男）", eng: "meaning", ex: "इसका मतलब क्या है?", exRom: "iskā matlab kyā hai?", exJa: "これはどういう意味ですか。" },
      { hi: "शब्द", rom: "shabd", ja: "単語、言葉（男）", eng: "word", ex: "यह शब्द मुश्किल है।", exRom: "yah shabd mushkil hai.", exJa: "この単語は難しいです。" },
      { hi: "अंग्रेज़ी", rom: "angrezī", ja: "英語（女）", eng: "English", ex: "मुझे थोड़ी अंग्रेज़ी आती है।", exRom: "mujhe thoṛī angrezī ātī hai.", exJa: "英語が少しできます。" },
      { hi: "भाषा", rom: "bhāshā", ja: "言語、言葉（女）", eng: "language", ex: "हिंदी बहुत अच्छी भाषा है।", exRom: "hindī bahut achchhī bhāshā hai.", exJa: "ヒンディー語はとてもいい言葉です。" },
      { hi: "आना", rom: "ānā", ja: "来る／（言葉が）できる", eng: "come, know", ex: "क्या आपको जापानी आती है?", exRom: "kyā āpko jāpānī ātī hai?", exJa: "日本語はできますか。" },
      { hi: "मदद", rom: "madad", ja: "助け、手伝い（女）", eng: "help", ex: "क्या आप मेरी मदद कर सकते हैं?", exRom: "kyā āp merī madad kar sakte haiṁ?", exJa: "手伝っていただけますか。" },
      { hi: "दोबारा", rom: "dobārā", ja: "もう一度、再び", eng: "again", ex: "दोबारा बताइए।", exRom: "dobārā batāie.", exJa: "もう一度教えてください。" },
      { hi: "ज़ोर से", rom: "zor se", ja: "大きな声で", eng: "loudly", ex: "थोड़ा ज़ोर से बोलिए।", exRom: "thoṛā zor se bolie.", exJa: "少し大きな声で話してください。" },
      { hi: "मुश्किल", rom: "mushkil", ja: "難しい（変わらない）", eng: "difficult", ex: "हिंदी थोड़ी मुश्किल है।", exRom: "hindī thoṛī mushkil hai.", exJa: "ヒンディー語は少し難しいです。" },
      { hi: "आसान", rom: "āsān", ja: "やさしい、簡単な（変わらない）", eng: "easy", ex: "यह शब्द आसान है।", exRom: "yah shabd āsān hai.", exJa: "この単語は簡単です。" },
      { hi: "माफ़ कीजिए", rom: "māf kījie", ja: "すみません、ごめんなさい", eng: "excuse me, sorry", ex: "माफ़ कीजिए, मैं नहीं समझा।", exRom: "māf kījie, maiṁ nahīṁ samjhā.", exJa: "すみません、わかりませんでした。" }
    ],
    sentences: [
      { ja: "わかります。", hi: "मैं समझता हूँ।", rom: "maiṁ samajhtā hūṁ.", eng: "I understand." },
      { ja: "すみません、わかりませんでした。", hi: "माफ़ कीजिए, मैं नहीं समझा।", rom: "māf kījie, maiṁ nahīṁ samjhā.", eng: "Sorry, I didn't understand." },
      { ja: "ゆっくり話してください。", hi: "कृपया धीरे बोलिए।", rom: "kripayā dhīre bolie.", eng: "Please speak slowly." },
      { ja: "もう一度言ってください。", hi: "एक बार फिर से बोलिए।", rom: "ek bār phir se bolie.", eng: "Please say it once more." },
      { ja: "ヒンディー語が少しできます。", hi: "मुझे थोड़ी-थोड़ी हिंदी आती है।", rom: "mujhe thoṛī-thoṛī hindī ātī hai.", eng: "I know a little Hindi." },
      { ja: "私はヒンディー語が読めます。", hi: "मैं हिंदी पढ़ सकता हूँ।", rom: "maiṁ hindī paṛh saktā hūṁ.", eng: "I can read Hindi." },
      { ja: "まだヒンディー語では書けません。", hi: "मैं अभी हिंदी में नहीं लिख सकता।", rom: "maiṁ abhī hindī meṁ nahīṁ likh saktā.", eng: "I can't write in Hindi yet." },
      { ja: "英語で話していただけますか。", hi: "क्या आप अंग्रेज़ी में बोल सकते हैं?", rom: "kyā āp angrezī meṁ bol sakte haiṁ?", eng: "Could you speak in English?" },
      { ja: "この言葉はどういう意味ですか。", hi: "इस शब्द का मतलब क्या है?", rom: "is shabd kā matlab kyā hai?", eng: "What does this word mean?" },
      { ja: "ここに書いていただけますか。", hi: "क्या आप यहाँ लिख सकते हैं?", rom: "kyā āp yahāṁ likh sakte haiṁ?", eng: "Could you write it here?" }
    ],
    dialogue: {
      title: "シャルマさんとヒンディー語で",
      lines: [
        { s: "B", name: "Sharma ji", hi: "आकिहिरो जी, आप हिंदी बोल सकते हैं?", rom: "Ākihiro jī, āp hindī bol sakte haiṁ?", ja: "あきひろさん、ヒンディー語は話せますか。", eng: "Akihiro, can you speak Hindi?" },
        { s: "A", name: "Akihiro", hi: "जी, थोड़ी-थोड़ी हिंदी आती है।", rom: "jī, thoṛī-thoṛī hindī ātī hai.", ja: "はい、少しだけできます。", eng: "Yes, I know a little Hindi." },
        { s: "B", name: "Sharma ji", hi: "वाह! आप हिंदी कहाँ सीखते हैं?", rom: "vāh! āp hindī kahāṁ sīkhte haiṁ?", ja: "すごい！どこでヒンディー語を習っているんですか。", eng: "Wow! Where do you learn Hindi?" },
        { s: "A", name: "Akihiro", hi: "मैं एक ऐप से रोज़ सीखता हूँ।", rom: "maiṁ ek aip se roz sīkhtā hūṁ.", ja: "アプリで毎日勉強しています。", eng: "I study every day with an app." },
        { s: "B", name: "Sharma ji", hi: "आपके क्लिनिक में कितने लोग काम करते हैं?", rom: "āpke klinik meṁ kitne log kām karte haiṁ?", ja: "あなたの院では何人働いていますか。", eng: "How many people work at your clinic?" },
        { s: "A", name: "Akihiro", hi: "माफ़ कीजिए, मैं नहीं समझा। ज़रा धीरे बोलिए।", rom: "māf kījie, maiṁ nahīṁ samjhā. zarā dhīre bolie.", ja: "すみません、わかりませんでした。少しゆっくり話してください。", eng: "Sorry, I didn't understand. Please speak a bit slower." },
        { s: "B", name: "Sharma ji", hi: "हाँ, ज़रूर। क्लिनिक में कितने लोग हैं?", rom: "hāṁ, zarūr. klinik meṁ kitne log haiṁ?", ja: "ええ、もちろん。院には何人いますか。", eng: "Sure. How many people are at the clinic?" },
        { s: "A", name: "Akihiro", hi: "अच्छा, समझ गया। चार लोग काम करते हैं।", rom: "achchhā, samajh gayā. chār log kām karte haiṁ.", ja: "ああ、わかりました。4人働いています。", eng: "Ah, I got it. Four people work there." },
        { s: "B", name: "Sharma ji", hi: "क्या आप हिंदी पढ़ भी सकते हैं?", rom: "kyā āp hindī paṛh bhī sakte haiṁ?", ja: "ヒンディー語を読むこともできますか。", eng: "Can you also read Hindi?" },
        { s: "A", name: "Akihiro", hi: "हाँ, पढ़ सकता हूँ, पर लिख नहीं सकता।", rom: "hāṁ, paṛh saktā hūṁ, par likh nahīṁ saktā.", ja: "はい、読めますが、書けません。", eng: "Yes, I can read, but I can't write." },
        { s: "B", name: "Sharma ji", hi: "कोई बात नहीं। आपकी हिंदी बहुत अच्छी है।", rom: "koī bāt nahīṁ. āpkī hindī bahut achchhī hai.", ja: "大丈夫ですよ。あなたのヒンディー語はとても上手です。", eng: "No problem. Your Hindi is very good." },
        { s: "A", name: "Akihiro", hi: "बहुत शुक्रिया, शर्मा जी।", rom: "bahut shukriyā, Sharmā jī.", ja: "どうもありがとうございます、シャルマさん。", eng: "Thank you very much, Sharma ji." }
      ]
    },
    writing: "自分が「できること」と「できないこと」を3つずつ書きましょう。型：「मैं 〜 सकता हूँ।（maiṁ 〜 saktā hūṁ.）」「मैं 〜 नहीं सकता।（maiṁ 〜 nahīṁ saktā.）」。例：मैं हिंदी पढ़ सकता हूँ, पर लिख नहीं सकता।",
    speaking: "インドの方が早口で話しかけてきた場面を想像して、「すみません、わかりません」「ゆっくり話してください」「もう一度言ってください」「英語で言っていただけますか」の4つを、止まらずに言えるまで練習しましょう。"
  },

  // ===== Week 13 =====
  {
    week: 13,
    title: "第1期まとめ：1分自己紹介",
    scene: "インドの仲間の前で自己紹介",
    cefr: "A1",
    goal: "第1期の文法を使って、インドの仲間の前で1分間の自己紹介をし、簡単な質問に答えられる。",
    grammar: {
      title: "自己紹介の型（第1期のまとめ）",
      points: [
        "①あいさつと②名前・出身は、है・हूँ の文です。नमस्ते दोस्तों!（みなさん、こんにちは）→ मेरा नाम आकिहिरो इवाता है → मैं योकोहामा से हूँ。「मैं＝हूँ、मेरा नाम＝है」の組み合わせを確かめましょう。से（〜から）は日本語の助詞と同じく名詞のあとに置きます。",
        "③仕事は後置詞と現在形で言います。मैं एहिमे के ओज़ू शहर में रहता हूँ（愛媛県大洲市に住んでいます）、मेरे क्लिनिक में चार लोग काम करते हैं（院では4人働いています）。के・में の順番は日本語の「愛媛の大洲市に」とまったく同じです。開業年の मैंने 2018 में क्लिनिक शुरू किया（2018年に開業しました）は第2期で習う過去形なので、今は決まり文句として覚えます。",
        "④家族や好きなことは मुझे … पसंद है を使います。मुझे भारतीय खाना बहुत पसंद है（インド料理が大好きです）。好きな物が女性名詞でも पसंद है は変わりません。का・की・के（〜の）で मेरा परिवार・मेरी माँ（私の母）のように家族も言えます。",
        "⑤ヒンディー語の勉強は、現在形と सकना で言います。मैं रोज़ हिंदी सीखता हूँ（毎日ヒンディー語を勉強しています）、थोड़ी-थोड़ी बोल सकता हूँ（少し話せます）。謙虚さと努力が伝わり、インドの方はとても喜んでくれます。",
        "⑥締めは決まり文句で：आप सबसे मिलकर बहुत ख़ुशी हुई（みなさんに会えてとてもうれしいです）、सुनने के लिए धन्यवाद（聞いてくださってありがとうございます）。1文を短く、ゆっくり、相手の顔を見て話せば、1分で十分に伝わります。"
      ],
      examples: [
        { hi: "नमस्ते, मेरा नाम आकिहिरो इवाता है।", rom: "namaste, merā nām Ākihiro Ivātā hai.", ja: "こんにちは、私の名前は岩田章弘です。", eng: "Hello, my name is Akihiro Iwata." },
        { hi: "मैं जापान से हूँ।", rom: "maiṁ Jāpān se hūṁ.", ja: "日本から来ました。", eng: "I'm from Japan." },
        { hi: "मैं ओज़ू में एक क्लिनिक चलाता हूँ।", rom: "maiṁ Ozū meṁ ek klinik chalātā hūṁ.", ja: "大洲で院を経営しています。", eng: "I run a clinic in Ozu." },
        { hi: "मुझे भारतीय खाना बहुत पसंद है।", rom: "mujhe bhāratīy khānā bahut pasand hai.", ja: "インド料理が大好きです。", eng: "I love Indian food." },
        { hi: "मैं थोड़ी-थोड़ी हिंदी बोल सकता हूँ।", rom: "maiṁ thoṛī-thoṛī hindī bol saktā hūṁ.", ja: "ヒンディー語が少し話せます。", eng: "I can speak a little Hindi." },
        { hi: "आपसे मिलकर बहुत ख़ुशी हुई।", rom: "āpse milkar bahut khushī huī.", ja: "お会いできてとてもうれしいです。", eng: "It's very nice to meet you." }
      ],
      tip: "①〜⑥を1行ずつカードに書き、1つのカードを10秒で言う練習をしましょう。6枚で1分です。うまく言えたら、カードを見ずに通しで言ってみましょう。"
    },
    vocab: [
      { hi: "परिचय", rom: "parichay", ja: "紹介（男）", eng: "introduction", ex: "मैं अपना परिचय देता हूँ।", exRom: "maiṁ apnā parichay detā hūṁ.", exJa: "自己紹介をします。" },
      { hi: "मालिक", rom: "mālik", ja: "経営者、持ち主（男）", eng: "owner", ex: "मैं एक क्लिनिक का मालिक हूँ।", exRom: "maiṁ ek klinik kā mālik hūṁ.", exJa: "私は院の経営者です。" },
      { hi: "स्टाफ़", rom: "sṭāf", ja: "スタッフ（男）", eng: "staff", ex: "मेरा स्टाफ़ बहुत अच्छा है।", exRom: "merā sṭāf bahut achchhā hai.", exJa: "うちのスタッフはとてもいい人たちです。" },
      { hi: "साल", rom: "sāl", ja: "年（男）", eng: "year", ex: "मेरा क्लिनिक आठ साल पुराना है।", exRom: "merā klinik āṭh sāl purānā hai.", exJa: "私の院は開業して8年です。" },
      { hi: "शुरू करना", rom: "shurū karnā", ja: "始める", eng: "to start", ex: "मैंने 2018 में क्लिनिक शुरू किया।", exRom: "maiṁne 2018 meṁ klinik shurū kiyā.", exJa: "2018年に院を始めました。" },
      { hi: "परिवार", rom: "parivār", ja: "家族（男）", eng: "family", ex: "मेरा परिवार ओज़ू में रहता है।", exRom: "merā parivār Ozū meṁ rahtā hai.", exJa: "私の家族は大洲に住んでいます。" },
      { hi: "शौक़", rom: "shauq", ja: "趣味（男）", eng: "hobby", ex: "मेरा शौक़ घूमना है।", exRom: "merā shauq ghūmnā hai.", exJa: "私の趣味は旅行です。" },
      { hi: "घूमना", rom: "ghūmnā", ja: "出かける、旅行する", eng: "to travel", ex: "मुझे भारत में घूमना पसंद है।", exRom: "mujhe Bhārat meṁ ghūmnā pasand hai.", exJa: "インドを旅するのが好きです。" },
      { hi: "सीखना", rom: "sīkhnā", ja: "習う、学ぶ", eng: "to learn", ex: "मैं हर दिन हिंदी सीखता हूँ।", exRom: "maiṁ har din hindī sīkhtā hūṁ.", exJa: "毎日ヒンディー語を勉強しています。" },
      { hi: "भारत", rom: "Bhārat", ja: "インド（男）", eng: "India", ex: "भारत बहुत बड़ा देश है।", exRom: "Bhārat bahut baṛā desh hai.", exJa: "インドはとても大きな国です。" },
      { hi: "दोस्त", rom: "dost", ja: "友だち（男）", eng: "friend", ex: "राज जी मेरे अच्छे दोस्त हैं।", exRom: "Rāj jī mere achchhe dost haiṁ.", exJa: "ラージさんは私のよい友人です。" },
      { hi: "मिलना", rom: "milnā", ja: "会う", eng: "to meet", ex: "आपसे मिलकर बहुत ख़ुशी हुई।", exRom: "āpse milkar bahut khushī huī.", exJa: "お会いできてとてもうれしいです。" },
      { hi: "ख़ुशी", rom: "khushī", ja: "うれしさ、喜び（女）", eng: "happiness", ex: "मुझे बहुत ख़ुशी है।", exRom: "mujhe bahut khushī hai.", exJa: "とてもうれしいです。" },
      { hi: "काम", rom: "kām", ja: "仕事（男）", eng: "work", ex: "मेरा काम बहुत दिलचस्प है।", exRom: "merā kām bahut dilchasp hai.", exJa: "私の仕事はとてもおもしろいです。" },
      { hi: "रहना", rom: "rahnā", ja: "住む、いる", eng: "to live", ex: "मैं एहिमे के ओज़ू शहर में रहता हूँ।", exRom: "maiṁ Ehime ke Ozū shahar meṁ rahtā hūṁ.", exJa: "愛媛県の大洲市に住んでいます。" },
      { hi: "सपना", rom: "sapnā", ja: "夢（男）", eng: "dream", ex: "मेरा सपना भारत में काम करना है।", exRom: "merā sapnā Bhārat meṁ kām karnā hai.", exJa: "私の夢はインドで仕事をすることです。" },
      { hi: "धन्यवाद", rom: "dhanyavād", ja: "ありがとう（ていねい）", eng: "thank you", ex: "सुनने के लिए धन्यवाद।", exRom: "sunne ke lie dhanyavād.", exJa: "聞いてくださってありがとうございます。" },
      { hi: "सब", rom: "sab", ja: "みんな、全部", eng: "all", ex: "आप सबको नमस्ते!", exRom: "āp sabko namaste!", exJa: "みなさん、こんにちは！" },
      { hi: "खाना", rom: "khānā", ja: "料理、食べ物（男）／食べる", eng: "food", ex: "मुझे भारतीय खाना बहुत पसंद है।", exRom: "mujhe bhāratīy khānā bahut pasand hai.", exJa: "インド料理が大好きです。" },
      { hi: "सेहत", rom: "sehat", ja: "健康（女）", eng: "health", ex: "सेहत सबसे ज़रूरी है।", exRom: "sehat sabse zarūrī hai.", exJa: "健康がいちばん大切です。" }
    ],
    sentences: [
      { ja: "みなさん、こんにちは！", hi: "नमस्ते दोस्तों!", rom: "namaste doston!", eng: "Hello, friends!" },
      { ja: "私の名前は岩田章弘です。", hi: "मेरा नाम आकिहिरो इवाता है।", rom: "merā nām Ākihiro Ivātā hai.", eng: "My name is Akihiro Iwata." },
      { ja: "横浜の出身です。", hi: "मैं योकोहामा से हूँ।", rom: "maiṁ Yokohāmā se hūṁ.", eng: "I'm from Yokohama." },
      { ja: "今は愛媛県の大洲市に住んでいます。", hi: "अभी मैं एहिमे के ओज़ू शहर में रहता हूँ।", rom: "abhī maiṁ Ehime ke Ozū shahar meṁ rahtā hūṁ.", eng: "Now I live in Ozu City, Ehime." },
      { ja: "私は鍼灸の院を経営しています。", hi: "मैं एक एक्यूपंक्चर क्लिनिक चलाता हूँ।", rom: "maiṁ ek ekyūpankchar klinik chalātā hūṁ.", eng: "I run an acupuncture clinic." },
      { ja: "2018年に院を始めました。", hi: "मैंने 2018 में यह क्लिनिक शुरू किया।", rom: "maiṁne 2018 meṁ yah klinik shurū kiyā.", eng: "I started this clinic in 2018." },
      { ja: "院では4人が働いています。", hi: "मेरे क्लिनिक में चार लोग काम करते हैं।", rom: "mere klinik meṁ chār log kām karte haiṁ.", eng: "Four people work at my clinic." },
      { ja: "インド料理とチャイが大好きです。", hi: "मुझे भारतीय खाना और चाय बहुत पसंद है।", rom: "mujhe bhāratīy khānā aur chāy bahut pasand hai.", eng: "I love Indian food and chai." },
      { ja: "毎日ヒンディー語を勉強しています。", hi: "मैं रोज़ हिंदी सीखता हूँ।", rom: "maiṁ roz hindī sīkhtā hūṁ.", eng: "I study Hindi every day." },
      { ja: "聞いてくださって、どうもありがとうございます。", hi: "सुनने के लिए बहुत धन्यवाद।", rom: "sunne ke lie bahut dhanyavād.", eng: "Thank you very much for listening." }
    ],
    dialogue: {
      title: "仲間の集まりで1分自己紹介",
      lines: [
        { s: "B", name: "Neha", hi: "आकिहिरो जी, अब आपकी बारी। अपना परिचय दीजिए।", rom: "Ākihiro jī, ab āpkī bārī. apnā parichay dījie.", ja: "あきひろさん、次はあなたの番です。自己紹介をお願いします。", eng: "Akihiro, it's your turn. Please introduce yourself." },
        { s: "A", name: "Akihiro", hi: "नमस्ते दोस्तों! मेरा नाम आकिहिरो इवाता है। मैं जापान से हूँ।", rom: "namaste doston! merā nām Ākihiro Ivātā hai. maiṁ Jāpān se hūṁ.", ja: "みなさん、こんにちは！岩田章弘です。日本から来ました。", eng: "Hello, friends! My name is Akihiro Iwata. I'm from Japan." },
        { s: "A", name: "Akihiro", hi: "मैं एहिमे के ओज़ू शहर में रहता हूँ। वहाँ मेरा एक्यूपंक्चर क्लिनिक है।", rom: "maiṁ Ehime ke Ozū shahar meṁ rahtā hūṁ. vahāṁ merā ekyūpankchar klinik hai.", ja: "愛媛県の大洲市に住んでいます。そこで鍼灸の院をしています。", eng: "I live in Ozu City, Ehime. I have an acupuncture clinic there." },
        { s: "A", name: "Akihiro", hi: "मैंने 2018 में क्लिनिक शुरू किया। अब चार लोग काम करते हैं।", rom: "maiṁne 2018 meṁ klinik shurū kiyā. ab chār log kām karte haiṁ.", ja: "2018年に開業しました。今は4人が働いています。", eng: "I started the clinic in 2018. Now four people work there." },
        { s: "A", name: "Akihiro", hi: "मुझे भारतीय खाना और घूमना बहुत पसंद है।", rom: "mujhe bhāratīy khānā aur ghūmnā bahut pasand hai.", ja: "インド料理と旅行が大好きです。", eng: "I love Indian food and traveling." },
        { s: "A", name: "Akihiro", hi: "मैं रोज़ हिंदी सीखता हूँ। अभी थोड़ी-थोड़ी बोल सकता हूँ।", rom: "maiṁ roz hindī sīkhtā hūṁ. abhī thoṛī-thoṛī bol saktā hūṁ.", ja: "毎日ヒンディー語を勉強しています。今は少しだけ話せます。", eng: "I study Hindi every day. I can speak a little now." },
        { s: "A", name: "Akihiro", hi: "आप सबसे मिलकर बहुत ख़ुशी हुई। धन्यवाद!", rom: "āp sabse milkar bahut khushī huī. dhanyavād!", ja: "みなさんに会えてとてもうれしいです。ありがとうございました！", eng: "I'm very happy to meet you all. Thank you!" },
        { s: "B", name: "Arjun", hi: "वाह, बहुत अच्छी हिंदी! आपका क्लिनिक बड़ा है?", rom: "vāh, bahut achchhī hindī! āpkā klinik baṛā hai?", ja: "すごい、とても上手なヒンディー語ですね！院は大きいんですか。", eng: "Wow, great Hindi! Is your clinic big?" },
        { s: "A", name: "Akihiro", hi: "नहीं, छोटा है, पर बहुत अच्छा है।", rom: "nahīṁ, chhoṭā hai, par bahut achchhā hai.", ja: "いいえ、小さいですが、とてもいい院です。", eng: "No, it's small, but it's very good." },
        { s: "B", name: "Neha", hi: "आपको सबसे ज़्यादा कौन-सा खाना पसंद है?", rom: "āpko sabse zyādā kaun-sā khānā pasand hai?", ja: "どの料理がいちばん好きですか。", eng: "Which food do you like the most?" },
        { s: "A", name: "Akihiro", hi: "मुझे बटर चिकन सबसे ज़्यादा पसंद है।", rom: "mujhe baṭar chikan sabse zyādā pasand hai.", ja: "バターチキンがいちばん好きです。", eng: "I like butter chicken the most." },
        { s: "B", name: "Arjun", hi: "तो चलिए, आज साथ में खाना खाते हैं!", rom: "to chalie, āj sāth meṁ khānā khāte haiṁ!", ja: "じゃあ、今日は一緒にご飯を食べに行きましょう！", eng: "Then let's eat together today!" }
      ]
    },
    writing: "自分の1分自己紹介を6文で書きましょう。①नमस्ते दोस्तों! ②मेरा नाम … है। मैं … से हूँ। ③मैं … क्लिनिक चलाता हूँ। ④मुझे … पसंद है। ⑤मैं रोज़ हिंदी सीखता हूँ। ⑥आप सबसे मिलकर बहुत ख़ुशी हुई। の型に、自分のことばを入れてください（ローマ字：namaste doston! / merā nām … hai. / maiṁ … klinik chalātā hūṁ. / mujhe … pasand hai. / maiṁ roz hindī sīkhtā hūṁ. / āp sabse milkar bahut khushī huī.）。",
    speaking: "スマホのタイマーを1分にして、①〜⑥の自己紹介を録音しましょう。聞き直して、止まったところをもう一度練習し、最後はインドの仲間やネハさん・アルジュンさんに WhatsApp で送ってみましょう。"
  }
]);

