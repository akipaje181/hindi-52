// 第4期（Week 40〜52）実践 — CEFR A2→B1
window.WEEKS = (window.WEEKS || []).concat([
  {
    week: 40,
    title: "話の組み立て",
    scene: "インド出張の1日を、ラージさんに順番に話す",
    cefr: "A2→B1",
    goal: "पहले・फिर・उसके बाद・आख़िर में と क्योंकि・इसलिए・लेकिन・फिर भी を使って、出来事を順番に、理由をつけて話せる。",
    grammar: {
      title: "話をつなぐ言葉（順番・理由・逆接）",
      points: [
        "順番は पहले（まず）→ फिर（それから）→ उसके बाद（その後）→ आख़िर में（最後に）で並べます。どれも文の頭に置き、日本語の「まず・それから・最後に」とまったく同じ使い方です。いちばん最初を強めたいときは सबसे पहले（まず最初に）と言います。",
        "क्योंकि（なぜなら、〜だから）は理由を「あと」に言う言葉です。मैं देर से पहुँचा क्योंकि फ़्लाइट लेट थी（遅れて着きました、フライトが遅れたので）。日本語は「フライトが遅れたので遅れた」と理由が先ですが、ヒンディー語では「結果＋क्योंकि＋理由」の順がふつうです。",
        "इसलिए（だから、それで）は理由を「先」に言うときに使います。फ़्लाइट लेट थी, इसलिए मैं देर से पहुँचा。こちらは日本語の「〜。だから〜」と同じ順番なので、日本人には言いやすい形です。क्योंकि と इसलिए は、同じ内容を逆の順番で言える組み合わせだと覚えましょう。",
        "लेकिन（しかし）は前の文と反対のことを言うときに使います。会話では पर もよく使います。फिर भी（それでも）は「〜なのに、それでも〜した」という気持ちで、लेकिन より「がんばった・意外だった」感じが強く出ます：ट्रैफ़िक बहुत था, फिर भी हम समय पर पहुँच गए。",
        "長い話は「順番の言葉＋過去形の短い文」を重ねると、聞き手がついてきやすくなります。1文を長くせず、文と文の間に फिर・इसलिए を入れるのがコツです。途中で वैसे（ところで）や दरअसल（実は）をはさむと、ぐっと自然な話し方になります。"
      ],
      examples: [
        { hi: "सबसे पहले हम एयरपोर्ट से सीधे होटल गए।", rom: "sabse pahle ham eyarporṭ se sīdhe hoṭal gae.", ja: "まず最初に、空港からまっすぐホテルへ行きました。", eng: "First of all, we went straight from the airport to the hotel." },
        { hi: "फिर हमने राज जी के ऑफ़िस में मीटिंग की।", rom: "phir hamne Rāj jī ke ofis meṁ mīṭing kī.", ja: "それから、ラージさんのオフィスで会議をしました。", eng: "Then we had a meeting at Raj's office." },
        { hi: "उसके बाद हम सबने साथ में खाना खाया।", rom: "uske bād ham sabne sāth meṁ khānā khāyā.", ja: "その後、みんなで一緒にご飯を食べました。", eng: "After that, we all ate together." },
        { hi: "फ़्लाइट लेट थी, इसलिए मैं देर से पहुँचा।", rom: "flāiṭ leṭ thī, islie maiṁ der se pahuṁchā.", ja: "フライトが遅れたので、着くのが遅くなりました。", eng: "The flight was late, so I arrived late." },
        { hi: "मैं हिंदी सीख रहा हूँ क्योंकि मेरे कई दोस्त भारत में हैं।", rom: "maiṁ hindī sīkh rahā hūṁ kyoṁki mere kaī dost Bhārat meṁ haiṁ.", ja: "ヒンディー語を勉強しています。インドに友だちがたくさんいるからです。", eng: "I'm learning Hindi because I have many friends in India." },
        { hi: "ट्रैफ़िक बहुत था, फिर भी हम समय पर पहुँच गए।", rom: "ṭraifik bahut thā, phir bhī ham samay par pahuṁch gae.", ja: "道がとても混んでいましたが、それでも時間どおりに着きました。", eng: "There was a lot of traffic, but we still arrived on time." }
      ],
      tip: "話す前に、手のひらに「पहले・फिर・उसके बाद・आख़िर में」と4つ書いて、指を折りながら話してみましょう。理由は「先に言うなら इसलिए、あとに言うなら क्योंकि」と覚えると迷いません。"
    },
    vocab: [
      { hi: "सबसे पहले", rom: "sabse pahle", ja: "まず最初に", eng: "first of all", ex: "सबसे पहले मैं आप सबको धन्यवाद देता हूँ।", exRom: "sabse pahle maiṁ āp sabko dhanyavād detā hūṁ.", exJa: "まず最初に、みなさんにお礼を申し上げます。" },
      { hi: "उसके बाद", rom: "uske bād", ja: "その後で", eng: "after that", ex: "उसके बाद हम बाज़ार गए।", exRom: "uske bād ham bāzār gae.", exJa: "その後、市場へ行きました。" },
      { hi: "आख़िर में", rom: "ākhir meṁ", ja: "最後に", eng: "finally", ex: "आख़िर में हमने चाय पी।", exRom: "ākhir meṁ hamne chāy pī.", exJa: "最後にチャイを飲みました。" },
      { hi: "क्योंकि", rom: "kyoṁki", ja: "なぜなら、〜だから", eng: "because", ex: "मैं बहुत ख़ुश हूँ क्योंकि आज आप आए।", exRom: "maiṁ bahut khush hūṁ kyoṁki āj āp āe.", exJa: "今日あなたが来てくれたので、とてもうれしいです。" },
      { hi: "इसलिए", rom: "islie", ja: "だから、それで", eng: "so, therefore", ex: "बारिश हो रही है, इसलिए हम टैक्सी लेंगे।", exRom: "bārish ho rahī hai, islie ham ṭaiksī leṁge.", exJa: "雨が降っているので、タクシーに乗りましょう。" },
      { hi: "फिर भी", rom: "phir bhī", ja: "それでも", eng: "even so", ex: "मैं थका हुआ था, फिर भी मीटिंग में गया।", exRom: "maiṁ thakā huā thā, phir bhī mīṭing meṁ gayā.", exJa: "疲れていましたが、それでも会議に行きました。" },
      { hi: "वैसे", rom: "vaise", ja: "ところで", eng: "by the way", ex: "वैसे, आप अगले महीने जापान आ रहे हैं?", exRom: "vaise, āp agle mahīne Jāpān ā rahe haiṁ?", exJa: "ところで、来月日本に来られるんですか。" },
      { hi: "दरअसल", rom: "darasal", ja: "実は", eng: "actually", ex: "दरअसल, मैं कल ही दिल्ली पहुँचा।", exRom: "darasal, maiṁ kal hī Dillī pahuṁchā.", exJa: "実は、昨日デリーに着いたばかりなんです。" },
      { hi: "वजह", rom: "vajah", ja: "理由、わけ（女）", eng: "reason", ex: "इसकी वजह क्या है?", exRom: "iskī vajah kyā hai?", exJa: "その理由は何ですか。" },
      { hi: "नतीजा", rom: "natījā", ja: "結果（男）", eng: "result", ex: "मीटिंग का नतीजा अच्छा रहा।", exRom: "mīṭing kā natījā achchhā rahā.", exJa: "会議の結果はよかったです。" },
      { hi: "शुरुआत", rom: "shuruāt", ja: "始まり、はじめ（女）", eng: "beginning", ex: "शुरुआत में हिंदी बहुत मुश्किल थी।", exRom: "shuruāt meṁ hindī bahut mushkil thī.", exJa: "はじめはヒンディー語がとても難しかったです。" },
      { hi: "कहानी", rom: "kahānī", ja: "話、物語（女）", eng: "story", ex: "मैं आपको एक छोटी कहानी सुनाता हूँ।", exRom: "maiṁ āpko ek chhoṭī kahānī sunātā hūṁ.", exJa: "短いお話をしますね。" },
      { hi: "हिस्सा", rom: "hissā", ja: "部分（男）", eng: "part", ex: "यह कहानी का सबसे अच्छा हिस्सा है।", exRom: "yah kahānī kā sabse achchhā hissā hai.", exJa: "ここが話のいちばんいいところです。" },
      { hi: "समझाना", rom: "samjhānā", ja: "説明する", eng: "to explain", ex: "मैं धीरे-धीरे समझाता हूँ।", exRom: "maiṁ dhīre-dhīre samjhātā hūṁ.", exJa: "ゆっくり説明しますね。" },
      { hi: "अचानक", rom: "achānak", ja: "急に、突然", eng: "suddenly", ex: "अचानक बहुत तेज़ बारिश शुरू हो गई।", exRom: "achānak bahut tez bārish shurū ho gaī.", exJa: "急にとても強い雨が降り出しました。" },
      { hi: "धीरे-धीरे", rom: "dhīre-dhīre", ja: "少しずつ、ゆっくり", eng: "gradually", ex: "मेरी हिंदी धीरे-धीरे बेहतर हो रही है।", exRom: "merī hindī dhīre-dhīre behtar ho rahī hai.", exJa: "私のヒンディー語は少しずつ上達しています。" },
      { hi: "इसके अलावा", rom: "iske alāvā", ja: "そのほかに", eng: "besides", ex: "इसके अलावा, हमने ताज महल भी देखा।", exRom: "iske alāvā, hamne Tāj Mahal bhī dekhā.", exJa: "そのほかに、タージ・マハルも見ました。" },
      { hi: "यानी", rom: "yānī", ja: "つまり", eng: "that is", ex: "परसों, यानी शुक्रवार को, मैं लौटूँगा।", exRom: "parsoṁ, yānī shukravār ko, maiṁ lauṭūṁgā.", exJa: "あさって、つまり金曜日に帰ります。" },
      { hi: "उदाहरण", rom: "udāharaṇ", ja: "例（男）", eng: "example", ex: "मैं एक उदाहरण देता हूँ।", exRom: "maiṁ ek udāharaṇ detā hūṁ.", exJa: "例をひとつ挙げますね。" },
      { hi: "तैयारी", rom: "taiyārī", ja: "準備（女）", eng: "preparation", ex: "मीटिंग की तैयारी हो गई है।", exRom: "mīṭing kī taiyārī ho gaī hai.", exJa: "会議の準備はできています。" }
    ],
    sentences: [
      { ja: "まず、空港からホテルへ行きました。", hi: "पहले मैं एयरपोर्ट से होटल गया।", rom: "pahle maiṁ eyarporṭ se hoṭal gayā.", eng: "First, I went from the airport to the hotel." },
      { ja: "それから、ホテルで少し休みました。", hi: "फिर मैंने होटल में थोड़ा आराम किया।", rom: "phir maiṁne hoṭal meṁ thoṛā ārām kiyā.", eng: "Then I rested a little at the hotel." },
      { ja: "その後、プリヤさんの会社へ行きました。", hi: "उसके बाद मैं प्रिया जी की कंपनी गया।", rom: "uske bād maiṁ Priyā jī kī kampanī gayā.", eng: "After that, I went to Priya's company." },
      { ja: "最後に、みんなで一緒にチャイを飲みました。", hi: "आख़िर में हम सबने साथ में चाय पी।", rom: "ākhir meṁ ham sabne sāth meṁ chāy pī.", eng: "Finally, we all had chai together." },
      { ja: "道がとても混んでいたので、遅れてしまいました。", hi: "रास्ते में बहुत ट्रैफ़िक था, इसलिए मुझे देर हो गई।", rom: "rāste meṁ bahut ṭraifik thā, islie mujhe der ho gaī.", eng: "There was a lot of traffic on the way, so I was late." },
      { ja: "遅れてしまいました。道がとても混んでいたからです。", hi: "मुझे देर हो गई क्योंकि रास्ते में बहुत ट्रैफ़िक था।", rom: "mujhe der ho gaī kyoṁki rāste meṁ bahut ṭraifik thā.", eng: "I was late because there was a lot of traffic on the way." },
      { ja: "とても疲れていましたが、それでも会議に出ました。", hi: "मैं बहुत थका हुआ था, फिर भी मैं मीटिंग में गया।", rom: "maiṁ bahut thakā huā thā, phir bhī maiṁ mīṭing meṁ gayā.", eng: "I was very tired, but I still went to the meeting." },
      { ja: "会議は長かったですが、結果はよかったです。", hi: "मीटिंग लंबी थी, लेकिन उसका नतीजा अच्छा रहा।", rom: "mīṭing lambī thī, lekin uskā natījā achchhā rahā.", eng: "The meeting was long, but the result was good." },
      { ja: "実は、デリーに来たのは今回で3回目です。", hi: "दरअसल, मैं तीसरी बार दिल्ली आया हूँ।", rom: "darasal, maiṁ tīsrī bār Dillī āyā hūṁ.", eng: "Actually, this is my third time in Delhi." },
      { ja: "急に雨が降り出したので、タクシーで帰りました。", hi: "अचानक बारिश शुरू हो गई, इसलिए हम टैक्सी से वापस आए।", rom: "achānak bārish shurū ho gaī, islie ham ṭaiksī se vāpas āe.", eng: "It suddenly started raining, so we came back by taxi." }
    ],
    dialogue: {
      title: "ラージさんに出張の1日を話す",
      lines: [
        { s: "B", name: "Raj", hi: "आकिहिरो जी, कल मुंबई में आपका दिन कैसा रहा?", rom: "Ākihiro jī, kal Mumbaī meṁ āpkā din kaisā rahā?", ja: "あきひろさん、昨日のムンバイの1日はどうでしたか。", eng: "Akihiro, how was your day in Mumbai yesterday?" },
        { s: "A", name: "Akihiro", hi: "बहुत अच्छा रहा, लेकिन थोड़ा लंबा दिन था।", rom: "bahut achchhā rahā, lekin thoṛā lambā din thā.", ja: "とてもよかったです。でも、ちょっと長い1日でした。", eng: "It went very well, but it was a bit of a long day." },
        { s: "B", name: "Raj", hi: "अच्छा? शुरू से बताइए, क्या-क्या किया?", rom: "achchhā? shurū se batāie, kyā-kyā kiyā?", ja: "そうですか。はじめから教えてください。何をしたんですか。", eng: "Really? Tell me from the beginning. What did you do?" },
        { s: "A", name: "Akihiro", hi: "सबसे पहले, सुबह सात बजे मेरी फ़्लाइट थी।", rom: "sabse pahle, subah sāt baje merī flāiṭ thī.", ja: "まず、朝7時のフライトでした。", eng: "First of all, my flight was at seven in the morning." },
        { s: "A", name: "Akihiro", hi: "लेकिन फ़्लाइट एक घंटा लेट थी, इसलिए मैं दस बजे पहुँचा।", rom: "lekin flāiṭ ek ghanṭā leṭ thī, islie maiṁ das baje pahuṁchā.", ja: "でもフライトが1時間遅れたので、着いたのは10時でした。", eng: "But the flight was an hour late, so I arrived at ten." },
        { s: "B", name: "Raj", hi: "अरे! फिर क्या हुआ?", rom: "are! phir kyā huā?", ja: "ええっ！それでどうなりました？", eng: "Oh no! Then what happened?" },
        { s: "A", name: "Akihiro", hi: "फिर मैं सीधे प्रिया जी के ऑफ़िस गया। मीटिंग ग्यारह बजे शुरू हुई।", rom: "phir maiṁ sīdhe Priyā jī ke ofis gayā. mīṭing gyārah baje shurū huī.", ja: "それから、まっすぐプリヤさんのオフィスへ行きました。会議は11時に始まりました。", eng: "Then I went straight to Priya's office. The meeting started at eleven." },
        { s: "B", name: "Raj", hi: "आप थके हुए थे, फिर भी सीधे मीटिंग में गए?", rom: "āp thake hue the, phir bhī sīdhe mīṭing meṁ gae?", ja: "疲れていたのに、それでもまっすぐ会議へ？", eng: "You were tired, and you still went straight to the meeting?" },
        { s: "A", name: "Akihiro", hi: "हाँ, क्योंकि वह मीटिंग बहुत ज़रूरी थी।", rom: "hāṁ, kyoṁki vah mīṭing bahut zarūrī thī.", ja: "はい、その会議はとても大事だったので。", eng: "Yes, because that meeting was very important." },
        { s: "B", name: "Raj", hi: "मीटिंग का नतीजा कैसा रहा?", rom: "mīṭing kā natījā kaisā rahā?", ja: "会議の結果はどうでしたか。", eng: "How did the meeting turn out?" },
        { s: "A", name: "Akihiro", hi: "अच्छा रहा। उसके बाद हम सबने साथ में लंच किया।", rom: "achchhā rahā. uske bād ham sabne sāth meṁ lanch kiyā.", ja: "よかったです。その後、みんなで一緒にお昼を食べました。", eng: "It went well. After that, we all had lunch together." },
        { s: "A", name: "Akihiro", hi: "आख़िर में शाम को मैं मरीन ड्राइव पर थोड़ा घूमा।", rom: "ākhir meṁ shām ko maiṁ Marīn Ḍrāiv par thoṛā ghūmā.", ja: "最後に、夕方マリーン・ドライブを少し歩きました。", eng: "Finally, in the evening I walked around Marine Drive a little." },
        { s: "B", name: "Raj", hi: "वाह! आपने पूरी कहानी बहुत अच्छे से सुनाई।", rom: "vāh! āpne pūrī kahānī bahut achchhe se sunāī.", ja: "すごい！話の全部を、とても上手に話してくれましたね。", eng: "Wow! You told the whole story really well." },
        { s: "A", name: "Akihiro", hi: "धन्यवाद! दरअसल, मैं यही अभ्यास कर रहा हूँ।", rom: "dhanyavād! darasal, maiṁ yahī abhyās kar rahā hūṁ.", ja: "ありがとうございます！実は、ちょうどその練習をしているんです。", eng: "Thank you! Actually, that's exactly what I'm practicing." }
      ]
    },
    writing: "最近の1日（出張の日、院の1日など）を5文で書きましょう。पहले …। फिर …। उसके बाद …। आख़िर में …। の4文に、क्योंकि か इसलिए を使った文を1つ加えてください（ローマ字：pahle … / phir … / uske bād … / ākhir meṁ … / … islie …）。",
    speaking: "昨日の1日を、पहले・फिर・उसके बाद・आख़िर में を使って1分で話し、録音しましょう。途中に理由（क्योंकि／इसलिए）と「それでも」（फिर भी）を1回ずつ入れてみてください。"
  },

  {
    week: 41,
    title: "自分のストーリーを語る",
    scene: "取引先との食事会で、これまでの歩みを話す",
    cefr: "A2→B1",
    goal: "-ता था（よく〜していた）と रहा था（〜しているところだった）を使って、生まれてから今までの自分の歩みを2〜3分で語れる。",
    grammar: {
      title: "過去の習慣 -ता था と過去進行 रहा था",
      points: [
        "「よく〜していた・〜したものだ」という過去の習慣は、現在の習慣 -ता है の है を था に変えるだけです。मैं रोज़ बाहर खेलता था（毎日外で遊んでいました）。主語が女性なら -ती थी、複数や आप なら -ते थे になります。",
        "大事な注意：-ता था には ने を使いません。खेलना・देखना のような他動詞でも मैं … खेलता था です（मैंने खेला は「1回した」という単純な過去）。ने が出るのは単純過去と完了の形だけ、と覚えておきましょう。",
        "「（そのとき）〜しているところだった」は रहा था／रही थी／रहे थे です。現在進行 रहा हूँ の हूँ を था に変えた形です。जब मैं टीम में काम कर रहा था, तब…（チームで働いていたころ…）のように、第3期の जब…तब と組むと、話の背景を作れます。",
        "3つの過去を使い分けます。①1回の出来事＝मैंने 2018 में क्लिनिक खोला ②くり返し・習慣＝मैं हर हफ़्ते मैच देखता था ③その時の途中＝मैं ट्रेनर का काम कर रहा था。日本語ではどれも「〜した／〜していた」ですが、ヒンディー語では形で区別します。",
        "人生の話では、時を表す言葉を文の頭に置くと聞きやすくなります：बचपन में（子どものころ）、उन दिनों（そのころ）、बीस साल की उम्र में（20歳のとき）、अक्टूबर 2018 में（2018年10月に）。Week 40 の पहले・फिर・उसके बाद と組み合わせれば、長いストーリーも順番に話せます。"
      ],
      examples: [
        { hi: "बचपन में मैं हर दिन बाहर खेलता था।", rom: "bachpan meṁ maiṁ har din bāhar kheltā thā.", ja: "子どものころ、毎日外で遊んでいました。", eng: "As a child, I used to play outside every day." },
        { hi: "मुझे खेलकूद बहुत पसंद था।", rom: "mujhe khelkūd bahut pasand thā.", ja: "スポーツが大好きでした。", eng: "I loved sports." },
        { hi: "कॉलेज में मैं रोज़ शाम को टीम के साथ प्रैक्टिस करता था।", rom: "kolej meṁ maiṁ roz shām ko ṭīm ke sāth praikṭis kartā thā.", ja: "大学時代は、毎日夕方にチームと練習していました。", eng: "In college, I used to practice with the team every evening." },
        { hi: "जब मैं प्रोफ़ेशनल टीम में काम कर रहा था, तब मैंने बहुत कुछ सीखा।", rom: "jab maiṁ profeshanal ṭīm meṁ kām kar rahā thā, tab maiṁne bahut kuchh sīkhā.", ja: "プロのチームで働いていたころ、たくさんのことを学びました。", eng: "When I was working for a professional team, I learned a lot." },
        { hi: "अक्टूबर 2018 में मैंने ओज़ू में अपना क्लिनिक खोला।", rom: "akṭūbar 2018 meṁ maiṁne Ozū meṁ apnā klinik kholā.", ja: "2018年10月に、大洲で自分の院を開きました。", eng: "In October 2018, I opened my own clinic in Ozu." },
        { hi: "जब मैं पहली बार दिल्ली आया, तब बारिश हो रही थी।", rom: "jab maiṁ pahlī bār Dillī āyā, tab bārish ho rahī thī.", ja: "初めてデリーに来たとき、雨が降っていました。", eng: "When I first came to Delhi, it was raining." }
      ],
      tip: "自分の年表を作り、それぞれの時代に「よくしていたこと（-ता था）」を1つずつ書いてみましょう。ने を付けたくなったら「1回だけのこと？」と自分に聞くと、間違えにくくなります。"
    },
    vocab: [
      { hi: "बचपन", rom: "bachpan", ja: "子どものころ（男）", eng: "childhood", ex: "बचपन में मैं बहुत शरारती था।", exRom: "bachpan meṁ maiṁ bahut sharārtī thā.", exJa: "子どものころは、とてもいたずらっ子でした。" },
      { hi: "पैदा होना", rom: "paidā honā", ja: "生まれる", eng: "to be born", ex: "मैं योकोहामा में पैदा हुआ।", exRom: "maiṁ Yokohāmā meṁ paidā huā.", exJa: "私は横浜で生まれました。" },
      { hi: "बड़ा होना", rom: "baṛā honā", ja: "育つ、大きくなる", eng: "to grow up", ex: "मैं एक बड़े शहर में बड़ा हुआ।", exRom: "maiṁ ek baṛe shahar meṁ baṛā huā.", exJa: "私は大きな街で育ちました。" },
      { hi: "खेलकूद", rom: "khelkūd", ja: "スポーツ、運動（男）", eng: "sports", ex: "मुझे बचपन से खेलकूद पसंद है।", exRom: "mujhe bachpan se khelkūd pasand hai.", exJa: "子どものころからスポーツが好きです。" },
      { hi: "खिलाड़ी", rom: "khilāṛī", ja: "選手（男）", eng: "player", ex: "उस टीम में बहुत अच्छे खिलाड़ी थे।", exRom: "us ṭīm meṁ bahut achchhe khilāṛī the.", exJa: "そのチームにはとてもいい選手がいました。" },
      { hi: "ट्रेनर", rom: "ṭrenar", ja: "トレーナー（男）", eng: "trainer", ex: "मैं कई साल तक टीम का ट्रेनर था।", exRom: "maiṁ kaī sāl tak ṭīm kā ṭrenar thā.", exJa: "何年もチームのトレーナーをしていました。" },
      { hi: "अनुभव", rom: "anubhav", ja: "経験（男）", eng: "experience", ex: "वह मेरे लिए बहुत अच्छा अनुभव था।", exRom: "vah mere lie bahut achchhā anubhav thā.", exJa: "それは私にとってとてもいい経験でした。" },
      { hi: "उम्र", rom: "umr", ja: "年齢（女）", eng: "age", ex: "उम्र सिर्फ़ एक नंबर है।", exRom: "umr sirf ek nambar hai.", exJa: "年齢はただの数字です。" },
      { hi: "उन दिनों", rom: "un dinoṁ", ja: "そのころ", eng: "in those days", ex: "उन दिनों मैं रोज़ सुबह जल्दी उठता था।", exRom: "un dinoṁ maiṁ roz subah jaldī uṭhtā thā.", exJa: "そのころは毎朝早く起きていました。" },
      { hi: "खोलना", rom: "kholnā", ja: "開ける、開業する", eng: "to open", ex: "मैंने 2018 में अपना क्लिनिक खोला।", exRom: "maiṁne 2018 meṁ apnā klinik kholā.", exJa: "2018年に自分の院を開きました。" },
      { hi: "संभालना", rom: "sambhālnā", ja: "受け持つ、切り盛りする", eng: "to handle", ex: "मैं परिवार की दुकान का इंटरनेशनल काम संभालता हूँ।", exRom: "maiṁ parivār kī dukān kā inṭarneshanal kām sambhāltā hūṁ.", exJa: "家族の店の国際関係の仕事を受け持っています。" },
      { hi: "व्यापार", rom: "vyāpār", ja: "商売、取引（男）", eng: "business, trade", ex: "हमारा परिवार 1957 से यह व्यापार कर रहा है।", exRom: "hamārā parivār 1957 se yah vyāpār kar rahā hai.", exJa: "私の家族は1957年からこの商売をしています。" },
      { hi: "पीढ़ी", rom: "pīṛhī", ja: "世代（女）", eng: "generation", ex: "हर पीढ़ी की अपनी कहानी होती है।", exRom: "har pīṛhī kī apnī kahānī hotī hai.", exJa: "どの世代にも、その世代の物語があります。" },
      { hi: "ज़िम्मेदारी", rom: "zimmedārī", ja: "責任、役目（女）", eng: "responsibility", ex: "भारत का काम मेरी ज़िम्मेदारी है।", exRom: "Bhārat kā kām merī zimmedārī hai.", exJa: "インドの仕事は私の担当です。" },
      { hi: "रिश्ता", rom: "rishtā", ja: "関係、つながり（男）", eng: "relationship", ex: "भारत से मेरा रिश्ता अब बहुत गहरा है।", exRom: "Bhārat se merā rishtā ab bahut gahrā hai.", exJa: "インドとのつながりは、今ではとても深いです。" },
      { hi: "मौक़ा", rom: "mauqā", ja: "機会、チャンス（男）", eng: "opportunity", ex: "मुझे भारत आने का मौक़ा मिला।", exRom: "mujhe Bhārat āne kā mauqā milā.", exJa: "インドに来る機会がありました。" },
      { hi: "फ़ैसला", rom: "faislā", ja: "決心、決定（男）", eng: "decision", ex: "मैंने अपना क्लिनिक खोलने का फ़ैसला किया।", exRom: "maiṁne apnā klinik kholne kā faislā kiyā.", exJa: "自分の院を開くと決めました。" },
      { hi: "सफ़र", rom: "safar", ja: "旅、道のり（男）", eng: "journey", ex: "मेरा सफ़र योकोहामा से शुरू हुआ।", exRom: "merā safar Yokohāmā se shurū huā.", exJa: "私の道のりは横浜から始まりました。" },
      { hi: "बदलना", rom: "badalnā", ja: "変わる、変える", eng: "to change", ex: "उस सफ़र ने मेरी ज़िंदगी बदल दी।", exRom: "us safar ne merī zindagī badal dī.", exJa: "あの旅が私の人生を変えました。" },
      { hi: "पेशा", rom: "peshā", ja: "職業（男）", eng: "profession", ex: "खेल से जुड़ा पेशा मुझे हमेशा से पसंद था।", exRom: "khel se juṛā peshā mujhe hameshā se pasand thā.", exJa: "スポーツに関わる仕事が、ずっと好きでした。" }
    ],
    sentences: [
      { ja: "私は横浜で生まれました。", hi: "मैं योकोहामा में पैदा हुआ।", rom: "maiṁ Yokohāmā meṁ paidā huā.", eng: "I was born in Yokohama." },
      { ja: "子どものころは、毎日なにかしらスポーツをしていました。", hi: "बचपन में मैं रोज़ कोई न कोई खेल खेलता था।", rom: "bachpan meṁ maiṁ roz koī na koī khel kheltā thā.", eng: "As a child, I played some sport or other every day." },
      { ja: "スポーツが大好きだったので、トレーナーになりました。", hi: "मुझे खेलकूद बहुत पसंद था, इसलिए मैं ट्रेनर बना।", rom: "mujhe khelkūd bahut pasand thā, islie maiṁ ṭrenar banā.", eng: "I loved sports, so I became a trainer." },
      { ja: "高校や大学のチームのトレーナーをしていました。", hi: "मैं हाई स्कूल और यूनिवर्सिटी की टीमों का ट्रेनर था।", rom: "maiṁ hāī skūl aur yūnivarsiṭī kī ṭīmoṁ kā ṭrenar thā.", eng: "I was a trainer for high school and university teams." },
      { ja: "その後、実業団やプロのチームでも働きました。", hi: "उसके बाद मैंने कंपनी की टीम और प्रोफ़ेशनल टीम में भी काम किया।", rom: "uske bād maiṁne kampanī kī ṭīm aur profeshanal ṭīm meṁ bhī kām kiyā.", eng: "After that, I also worked for a company team and a professional team." },
      { ja: "そのころは、週末もいつも試合に行っていました。", hi: "उन दिनों मैं वीकेंड पर भी हमेशा मैच के लिए जाता था।", rom: "un dinoṁ maiṁ vīkenḍ par bhī hameshā maich ke lie jātā thā.", eng: "In those days, I always went to matches, even on weekends." },
      { ja: "2018年10月に、愛媛県大洲市で鍼灸整骨院を開きました。", hi: "अक्टूबर 2018 में मैंने एहिमे के ओज़ू शहर में अपना क्लिनिक खोला।", rom: "akṭūbar 2018 meṁ maiṁne Ehime ke Ozū shahar meṁ apnā klinik kholā.", eng: "In October 2018, I opened my clinic in Ozu City, Ehime." },
      { ja: "ほかの院の経営のお手伝いもしています。", hi: "मैं दूसरे क्लिनिकों के मैनेजमेंट में भी मदद करता हूँ।", rom: "maiṁ dūsre klinikoṁ ke mainejmenṭ meṁ bhī madad kartā hūṁ.", eng: "I also help with the management of other clinics." },
      { ja: "家族の酒店は1957年に始まりました。", hi: "हमारे परिवार की लिकर शॉप 1957 में शुरू हुई थी।", rom: "hamāre parivār kī likar shop 1957 meṁ shurū huī thī.", eng: "Our family's liquor shop started in 1957." },
      { ja: "店の国際担当として、初めてインドに来ました。", hi: "मैं दुकान के इंटरनेशनल काम के लिए पहली बार भारत आया।", rom: "maiṁ dukān ke inṭarneshanal kām ke lie pahlī bār Bhārat āyā.", eng: "I first came to India for the shop's international work." }
    ],
    dialogue: {
      title: "シャルマさんとの食事会で、これまでの話をする",
      lines: [
        { s: "B", name: "Sharma ji", hi: "आकिहिरो जी, आप हमेशा से इसी काम में हैं?", rom: "Ākihiro jī, āp hameshā se isī kām meṁ haiṁ?", ja: "あきひろさん、ずっとこのお仕事をされてきたんですか。", eng: "Akihiro, have you always been in this line of work?" },
        { s: "A", name: "Akihiro", hi: "नहीं, शर्मा जी। मेरी कहानी थोड़ी लंबी है।", rom: "nahīṁ, Sharmā jī. merī kahānī thoṛī lambī hai.", ja: "いいえ、シャルマさん。私の話は少し長いんです。", eng: "No, Sharma ji. My story is a little long." },
        { s: "A", name: "Akihiro", hi: "मैं योकोहामा में पैदा हुआ। बचपन में मैं हर दिन कोई न कोई खेल खेलता था।", rom: "maiṁ Yokohāmā meṁ paidā huā. bachpan meṁ maiṁ har din koī na koī khel kheltā thā.", ja: "横浜で生まれました。子どものころは、毎日なにかしらスポーツをしていました。", eng: "I was born in Yokohama. As a child, I played some sport every day." },
        { s: "B", name: "Sharma ji", hi: "अच्छा, तो आप खिलाड़ी थे?", rom: "achchhā, to āp khilāṛī the?", ja: "なるほど、では選手だったんですか。", eng: "I see, so you were an athlete?" },
        { s: "A", name: "Akihiro", hi: "हाँ, लेकिन मुझे खिलाड़ियों की मदद करना ज़्यादा अच्छा लगता था, इसलिए मैं ट्रेनर बना।", rom: "hāṁ, lekin mujhe khilāṛiyoṁ kī madad karnā zyādā achchhā lagtā thā, islie maiṁ ṭrenar banā.", ja: "はい。でも選手を支えるほうが好きだったので、トレーナーになりました。", eng: "Yes, but I liked helping players more, so I became a trainer." },
        { s: "A", name: "Akihiro", hi: "मैंने हाई स्कूल, यूनिवर्सिटी, कंपनी की टीम और प्रो टीम में काम किया।", rom: "maiṁne hāī skūl, yūnivarsiṭī, kampanī kī ṭīm aur pro ṭīm meṁ kām kiyā.", ja: "高校、大学、実業団、プロのチームで働きました。", eng: "I worked with high school, university, company and pro teams." },
        { s: "B", name: "Sharma ji", hi: "वाह! फिर क्लिनिक कब खोला?", rom: "vāh! phir klinik kab kholā?", ja: "すごい！それで、院はいつ開いたんですか。", eng: "Wow! So when did you open the clinic?" },
        { s: "A", name: "Akihiro", hi: "अक्टूबर 2018 में, एहिमे के ओज़ू शहर में। अब चार लोग मेरे साथ काम करते हैं।", rom: "akṭūbar 2018 meṁ, Ehime ke Ozū shahar meṁ. ab chār log mere sāth kām karte haiṁ.", ja: "2018年10月、愛媛県の大洲市です。今は4人が一緒に働いています。", eng: "In October 2018, in Ozu City, Ehime. Now four people work with me." },
        { s: "B", name: "Sharma ji", hi: "और भारत से आपका रिश्ता कैसे शुरू हुआ?", rom: "aur Bhārat se āpkā rishtā kaise shurū huā?", ja: "では、インドとのつながりはどうやって始まったんですか。", eng: "And how did your connection with India begin?" },
        { s: "A", name: "Akihiro", hi: "हमारे परिवार की एक पुरानी लिकर शॉप है, ओदानी साकेतेन। वह 1957 में शुरू हुई थी।", rom: "hamāre parivār kī ek purānī likar shop hai, Odānī Sāketen. vah 1957 meṁ shurū huī thī.", ja: "家族が古い酒店をやっていて、小谷酒店といいます。1957年に始まった店です。", eng: "My family has an old liquor shop, Kotani Saketen. It started in 1957." },
        { s: "A", name: "Akihiro", hi: "मैं उसका इंटरनेशनल काम देखता हूँ। इसी काम के लिए मैं पहली बार भारत आया।", rom: "maiṁ uskā inṭarneshanal kām dekhtā hūṁ. isī kām ke lie maiṁ pahlī bār Bhārat āyā.", ja: "私はその店の国際担当です。その仕事で、初めてインドに来ました。", eng: "I look after its international work. I first came to India for that work." },
        { s: "B", name: "Sharma ji", hi: "और आप हिंदी क्यों सीख रहे हैं?", rom: "aur āp hindī kyoṁ sīkh rahe haiṁ?", ja: "それで、どうしてヒンディー語を勉強しているんですか。", eng: "And why are you learning Hindi?" },
        { s: "A", name: "Akihiro", hi: "पहले मैं यहाँ सब लोगों से अंग्रेज़ी में बात करता था। लेकिन मैं आप लोगों से आपकी भाषा में बात करना चाहता था।", rom: "pahle maiṁ yahāṁ sab logoṁ se angrezī meṁ bāt kartā thā. lekin maiṁ āp logoṁ se āpkī bhāshā meṁ bāt karnā chāhtā thā.", ja: "前は、こちらの人たちとはいつも英語で話していました。でも、みなさんの言葉で話したかったんです。", eng: "Before, I used to speak with everyone here in English. But I wanted to talk with you in your own language." },
        { s: "B", name: "Sharma ji", hi: "बहुत ख़ूब! आपकी कहानी सचमुच प्रेरणा देने वाली है।", rom: "bahut khūb! āpkī kahānī sachmuch preraṇā dene vālī hai.", ja: "すばらしい！本当に励みになるお話ですね。", eng: "Wonderful! Your story is truly inspiring." }
      ]
    },
    writing: "自分の歩みを6文で書きましょう。①मैं … में पैदा हुआ। ②बचपन में मैं … करता था। ③उन दिनों …। ④जब मैं … कर रहा था, तब …। ⑤… में मैंने … खोला／शुरू किया। ⑥अब मैं …। の型を使ってください（ローマ字：maiṁ … meṁ paidā huā. / bachpan meṁ maiṁ … kartā thā. / un dinoṁ … / jab maiṁ … kar rahā thā, tab … / … meṁ maiṁne … kholā. / ab maiṁ …）。",
    speaking: "年表（横浜→スポーツ→トレーナー→開業→酒店の国際担当→インド→ヒンディー語）を見ながら、2分で自分のストーリーを話して録音しましょう。-ता था を3回以上、रहा था を1回以上使えたか、聞き直して確かめましょう。"
  },

  {
    week: 42,
    title: "意見と理由を言う",
    scene: "プリヤさんと「会って話すか、オンラインか」を話し合う",
    cefr: "A2→B1",
    goal: "मेरे ख़याल से・मुझे लगता है कि・मेरा मानना है कि で意見を言い、賛成・やわらかい反対と、その理由を添えて話し合える。",
    grammar: {
      title: "意見・賛成・反対の言い方",
      points: [
        "意見の入口はいくつかあります。मेरे ख़याल से（私の考えでは）は文の頭に置くだけの気軽な言い方。मेरी राय में（私の意見では）は少し改まった言い方です。どちらも日本語の「私の考えでは〜」と同じ位置に置きます。",
        "मुझे लगता है कि…（〜と思います）は第3期でも習いました。思う人は मुझे（को の形）で、कि のあとに普通の文をそのまま続けます。日本語の「〜と思う」の「と」に当たる कि が、文の『前』に来るのが違うところです。",
        "मेरा मानना है कि…（私は〜だと考えています）は、自分の信念や大事な考えを言うときの、少し強くてていねいな形です。मानना は「信じる・考える・認める」。मैं मानता हूँ कि… と言うこともできます。",
        "賛成は मैं आपसे सहमत हूँ（あなたに賛成です）。सहमत は形容詞なので、男性でも女性でも形が変わりません。日本語は「〜に賛成」ですが、ヒンディー語は से（〜と）を使います。強めるときは बिल्कुल（まったく）・पूरी तरह（完全に）を前に置きます。",
        "反対はやわらかく言うのが、インドでもふつうです。आपकी बात सही है, लेकिन…（おっしゃることはもっともですが…）や मैं थोड़ा अलग सोचता हूँ（私は少し違う考えです）でクッションを入れ、最後に क्योंकि で理由を言いましょう。"
      ],
      examples: [
        { hi: "मेरे ख़याल से आमने-सामने मिलना बेहतर है।", rom: "mere khayāl se āmne-sāmne milnā behtar hai.", ja: "私の考えでは、直接会うほうがいいです。", eng: "In my view, meeting face to face is better." },
        { hi: "मेरी राय में यह तरीक़ा ज़्यादा आसान है।", rom: "merī rāy meṁ yah tarīqā zyādā āsān hai.", ja: "私の意見では、このやり方のほうが簡単です。", eng: "In my opinion, this way is easier." },
        { hi: "मुझे लगता है कि यह अच्छा सुझाव है।", rom: "mujhe lagtā hai ki yah achchhā sujhāv hai.", ja: "それはいい提案だと思います。", eng: "I think it's a good suggestion." },
        { hi: "मेरा मानना है कि भरोसा सबसे ज़रूरी है।", rom: "merā mānnā hai ki bharosā sabse zarūrī hai.", ja: "信頼がいちばん大切だと、私は考えています。", eng: "I believe trust is the most important thing." },
        { hi: "मैं आपसे बिल्कुल सहमत हूँ।", rom: "maiṁ āpse bilkul sahmat hūṁ.", ja: "まったく同感です。", eng: "I completely agree with you." },
        { hi: "आपकी बात सही है, लेकिन मैं थोड़ा अलग सोचता हूँ।", rom: "āpkī bāt sahī hai, lekin maiṁ thoṛā alag sochtā hūṁ.", ja: "おっしゃることはもっともですが、私は少し違う考えです。", eng: "You have a point, but I see it a little differently." }
      ],
      tip: "意見の文は「入口（मेरे ख़याल से）＋意見＋क्योंकि＋理由」の3つの部品で作ります。反対するときは、まず相手の話を認める一言を入れると、関係を壊さずに話し合えます。"
    },
    vocab: [
      { hi: "ख़याल", rom: "khayāl", ja: "考え（男）", eng: "thought, view", ex: "मेरे ख़याल से यह ठीक है।", exRom: "mere khayāl se yah ṭhīk hai.", exJa: "私の考えでは、それでいいと思います。" },
      { hi: "राय", rom: "rāy", ja: "意見（女）", eng: "opinion", ex: "इस बारे में आपकी क्या राय है?", exRom: "is bāre meṁ āpkī kyā rāy hai?", exJa: "この件について、ご意見はいかがですか。" },
      { hi: "मानना", rom: "mānnā", ja: "考える、信じる、認める", eng: "to believe", ex: "मैं मानता हूँ कि मेहनत ज़रूरी है।", exRom: "maiṁ māntā hūṁ ki mehnat zarūrī hai.", exJa: "努力が大切だと私は考えています。" },
      { hi: "सहमत", rom: "sahmat", ja: "賛成の、同じ意見の", eng: "agreed", ex: "क्या आप मुझसे सहमत हैं?", exRom: "kyā āp mujhse sahmat haiṁ?", exJa: "私の意見に賛成ですか。" },
      { hi: "असहमत", rom: "asahmat", ja: "反対の、意見が違う", eng: "disagreeing", ex: "माफ़ कीजिए, मैं इससे असहमत हूँ।", exRom: "māf kījie, maiṁ isse asahmat hūṁ.", exJa: "すみません、その点には賛成できません。" },
      { hi: "विचार", rom: "vichār", ja: "考え、アイデア（男）", eng: "idea", ex: "यह बहुत अच्छा विचार है।", exRom: "yah bahut achchhā vichār hai.", exJa: "それはとてもいい考えです。" },
      { hi: "फ़ायदा", rom: "fāydā", ja: "利点、得（男）", eng: "advantage", ex: "ऑनलाइन मीटिंग का एक फ़ायदा है, समय बचता है।", exRom: "onlāin mīṭing kā ek fāydā hai, samay bachtā hai.", exJa: "オンライン会議の利点は、時間が節約できることです。" },
      { hi: "नुक़सान", rom: "nuqsān", ja: "欠点、損（男）", eng: "disadvantage", ex: "इसका नुक़सान क्या है?", exRom: "iskā nuqsān kyā hai?", exJa: "その欠点は何ですか。" },
      { hi: "तरीक़ा", rom: "tarīqā", ja: "やり方、方法（男）", eng: "way, method", ex: "यह काम करने का सबसे अच्छा तरीक़ा है।", exRom: "yah kām karne kā sabse achchhā tarīqā hai.", exJa: "これがいちばんいい仕事のやり方です。" },
      { hi: "सुझाव", rom: "sujhāv", ja: "提案（男）", eng: "suggestion", ex: "आपके सुझाव के लिए धन्यवाद।", exRom: "āpke sujhāv ke lie dhanyavād.", exJa: "ご提案、ありがとうございます。" },
      { hi: "बिल्कुल", rom: "bilkul", ja: "まったく、もちろん", eng: "absolutely", ex: "बिल्कुल, मैं भी यही सोचता हूँ।", exRom: "bilkul, maiṁ bhī yahī sochtā hūṁ.", exJa: "もちろん、私もそう思います。" },
      { hi: "हो सकता है", rom: "ho saktā hai", ja: "〜かもしれない", eng: "maybe", ex: "हो सकता है कि आप सही हों।", exRom: "ho saktā hai ki āp sahī hoṁ.", exJa: "あなたが正しいのかもしれません。" },
      { hi: "दोनों", rom: "donoṁ", ja: "両方", eng: "both", ex: "दोनों तरीक़े अच्छे हैं।", exRom: "donoṁ tarīqe achchhe haiṁ.", exJa: "どちらのやり方もいいです。" },
      { hi: "बेहतर", rom: "behtar", ja: "よりよい", eng: "better", ex: "चाय से बेहतर कुछ नहीं!", exRom: "chāy se behtar kuchh nahīṁ!", exJa: "チャイよりいいものはありません！" },
      { hi: "आमने-सामने", rom: "āmne-sāmne", ja: "向かい合って、直接会って", eng: "face to face", ex: "आमने-सामने बात करना अच्छा लगता है।", exRom: "āmne-sāmne bāt karnā achchhā lagtā hai.", exJa: "直接会って話すのはいいものです。" },
      { hi: "भरोसा", rom: "bharosā", ja: "信頼（男）", eng: "trust", ex: "भरोसा धीरे-धीरे बनता है।", exRom: "bharosā dhīre-dhīre bantā hai.", exJa: "信頼は少しずつできていくものです。" },
      { hi: "असर", rom: "asar", ja: "効果、影響（男）", eng: "effect", ex: "इसका असर अच्छा होगा।", exRom: "iskā asar achchhā hogā.", exJa: "それはいい効果があるでしょう。" },
      { hi: "अलग", rom: "alag", ja: "違う、別の", eng: "different", ex: "हर देश का तरीक़ा अलग होता है।", exRom: "har desh kā tarīqā alag hotā hai.", exJa: "国ごとにやり方は違うものです。" },
      { hi: "पक्का", rom: "pakkā", ja: "確かな、確実に", eng: "sure", ex: "क्या आपको पक्का पता है?", exRom: "kyā āpko pakkā patā hai?", exJa: "確かにご存じですか。" },
      { hi: "बहस", rom: "bahas", ja: "議論（女）", eng: "debate", ex: "यह अच्छी बहस है, मज़ा आ रहा है।", exRom: "yah achchhī bahas hai, mazā ā rahā hai.", exJa: "いい議論ですね、楽しいです。" }
    ],
    sentences: [
      { ja: "私の考えでは、それはいいアイデアです。", hi: "मेरे ख़याल से यह एक अच्छा विचार है।", rom: "mere khayāl se yah ek achchhā vichār hai.", eng: "In my view, that's a good idea." },
      { ja: "この件について、ご意見はいかがですか。", hi: "इस बारे में आपकी क्या राय है?", rom: "is bāre meṁ āpkī kyā rāy hai?", eng: "What is your opinion about this?" },
      { ja: "オンラインの会議は楽だと思います。", hi: "मुझे लगता है कि ऑनलाइन मीटिंग आसान होती है।", rom: "mujhe lagtā hai ki onlāin mīṭing āsān hotī hai.", eng: "I think online meetings are easy." },
      { ja: "でも私の考えでは、初めてのときは直接会うほうがいいです。", hi: "लेकिन मेरे ख़याल से पहली बार आमने-सामने मिलना बेहतर है।", rom: "lekin mere khayāl se pahlī bār āmne-sāmne milnā behtar hai.", eng: "But in my view, it's better to meet face to face the first time." },
      { ja: "よい関係には信頼がいちばん大切だと、私は考えています。", hi: "मेरा मानना है कि अच्छे रिश्ते के लिए भरोसा सबसे ज़रूरी है।", rom: "merā mānnā hai ki achchhe rishte ke lie bharosā sabse zarūrī hai.", eng: "I believe trust is the most important thing for a good relationship." },
      { ja: "全面的に賛成です。", hi: "मैं आपसे पूरी तरह सहमत हूँ।", rom: "maiṁ āpse pūrī tarah sahmat hūṁ.", eng: "I fully agree with you." },
      { ja: "おっしゃることはわかりますが、欠点もひとつあります。", hi: "आपकी बात ठीक है, लेकिन इसका एक नुक़सान भी है।", rom: "āpkī bāt ṭhīk hai, lekin iskā ek nuqsān bhī hai.", eng: "You have a point, but there is also one disadvantage." },
      { ja: "どちらのやり方にも、それぞれいい点があります。", hi: "दोनों तरीक़ों के अपने-अपने फ़ायदे हैं।", rom: "donoṁ tarīqoṁ ke apne-apne fāyde haiṁ.", eng: "Both ways have their own advantages." },
      { ja: "今回は、あなたのやり方のほうがいいかもしれません。", hi: "हो सकता है कि इस बार आपका तरीक़ा बेहतर हो।", rom: "ho saktā hai ki is bār āpkā tarīqā behtar ho.", eng: "Maybe your way is better this time." },
      { ja: "時間の節約になるので、月に一度はオンラインで話しましょう。", hi: "समय बचता है, इसलिए महीने में एक बार ऑनलाइन बात करते हैं।", rom: "samay bachtā hai, islie mahīne meṁ ek bār onlāin bāt karte haiṁ.", eng: "It saves time, so let's talk online once a month." }
    ],
    dialogue: {
      title: "次の会議は会う？オンライン？",
      lines: [
        { s: "B", name: "Priya", hi: "आकिहिरो जी, अगली मीटिंग ऑनलाइन करें या आप दिल्ली आएँगे?", rom: "Ākihiro jī, aglī mīṭing onlāin kareṁ yā āp Dillī āeṁge?", ja: "あきひろさん、次の会議はオンラインにしますか、それともデリーに来られますか。", eng: "Akihiro, shall we do the next meeting online, or will you come to Delhi?" },
        { s: "A", name: "Akihiro", hi: "अच्छा सवाल है। आपकी क्या राय है?", rom: "achchhā savāl hai. āpkī kyā rāy hai?", ja: "いい質問ですね。プリヤさんのご意見は？", eng: "Good question. What's your opinion?" },
        { s: "B", name: "Priya", hi: "मेरे ख़याल से ऑनलाइन बेहतर है, क्योंकि इससे समय और पैसे दोनों बचते हैं।", rom: "mere khayāl se onlāin behtar hai, kyoṁki isse samay aur paise donoṁ bachte haiṁ.", ja: "私はオンラインがいいと思います。時間もお金も両方節約できますから。", eng: "I think online is better, because it saves both time and money." },
        { s: "A", name: "Akihiro", hi: "आपकी बात सही है। ऑनलाइन का यह बड़ा फ़ायदा है।", rom: "āpkī bāt sahī hai. onlāin kā yah baṛā fāydā hai.", ja: "そのとおりです。それはオンラインの大きな利点ですね。", eng: "You're right. That's a big advantage of online." },
        { s: "A", name: "Akihiro", hi: "लेकिन मेरा मानना है कि नए पार्टनर से पहली बार आमने-सामने मिलना बेहतर है।", rom: "lekin merā mānnā hai ki nae pārṭnar se pahlī bār āmne-sāmne milnā behtar hai.", ja: "でも、新しい取引先とは、最初は直接会うほうがいいと私は考えています。", eng: "But I believe it's better to meet a new partner face to face the first time." },
        { s: "B", name: "Priya", hi: "क्यों? आपको ऐसा क्यों लगता है?", rom: "kyoṁ? āpko aisā kyoṁ lagtā hai?", ja: "どうしてですか。なぜそう思うんですか。", eng: "Why? Why do you feel that way?" },
        { s: "A", name: "Akihiro", hi: "क्योंकि साथ में चाय पीने से भरोसा जल्दी बनता है।", rom: "kyoṁki sāth meṁ chāy pīne se bharosā jaldī bantā hai.", ja: "一緒にチャイを飲むと、信頼が早くできるからです。", eng: "Because drinking chai together builds trust quickly." },
        { s: "B", name: "Priya", hi: "हाँ, यह तो सच है। भारत में भी लोग ऐसा ही मानते हैं।", rom: "hāṁ, yah to sach hai. Bhārat meṁ bhī log aisā hī mānte haiṁ.", ja: "ええ、それは本当ですね。インドでもみんなそう考えています。", eng: "Yes, that's true. People in India think the same way." },
        { s: "A", name: "Akihiro", hi: "तो मेरा सुझाव है कि पहली मीटिंग दिल्ली में हो, और बाद की मीटिंगें ऑनलाइन।", rom: "to merā sujhāv hai ki pahlī mīṭing Dillī meṁ ho, aur bād kī mīṭingeṁ onlāin.", ja: "では、最初の会議はデリーで、そのあとの会議はオンラインにするのはどうでしょう。", eng: "So my suggestion is: the first meeting in Delhi, and the later meetings online." },
        { s: "B", name: "Priya", hi: "बहुत अच्छा विचार! इस तरह दोनों तरीक़ों का फ़ायदा मिलेगा।", rom: "bahut achchhā vichār! is tarah donoṁ tarīqoṁ kā fāydā milegā.", ja: "とてもいい考えです！そうすれば両方の利点が生かせますね。", eng: "Great idea! That way we get the benefits of both." },
        { s: "A", name: "Akihiro", hi: "तो क्या आप मुझसे सहमत हैं?", rom: "to kyā āp mujhse sahmat haiṁ?", ja: "では、賛成していただけますか。", eng: "So do you agree with me?" },
        { s: "B", name: "Priya", hi: "बिल्कुल! मैं आपसे पूरी तरह सहमत हूँ।", rom: "bilkul! maiṁ āpse pūrī tarah sahmat hūṁ.", ja: "もちろんです！全面的に賛成です。", eng: "Absolutely! I fully agree with you." },
        { s: "A", name: "Akihiro", hi: "बढ़िया! तो मैं अगले महीने की तारीख़ें भेजता हूँ।", rom: "baṛhiyā! to maiṁ agle mahīne kī tārīkheṁ bhejtā hūṁ.", ja: "よかった！では、来月の候補日を送りますね。", eng: "Great! Then I'll send you some dates for next month." }
      ]
    },
    writing: "「直接会って話す」と「オンライン」のどちらがいいか、自分の意見を4文で書きましょう。①मेरे ख़याल से … बेहतर है। ②क्योंकि …। ③… का एक नुक़सान भी है। ④लेकिन मेरा मानना है कि …।（ローマ字：mere khayāl se … behtar hai. / kyoṁki … / … kā ek nuqsān bhī hai. / lekin merā mānnā hai ki …）",
    speaking: "「日本の夏とインドの夏、どちらが過ごしやすい？」「朝型と夜型、どちらがいい？」などからテーマを1つ選び、意見→理由→相手の考えを聞く（आपकी क्या राय है?）の順で1分話しましょう。मैं आपसे सहमत हूँ と आपकी बात सही है, लेकिन… の返し方も声に出して練習しましょう。"
  },

  {
    week: 43,
    title: "健康と生活習慣の話",
    scene: "アルジュンさんと、睡眠・歩くこと・食事の習慣について雑談する",
    cefr: "A2→B1",
    goal: "不定詞＋चाहिए（〜したほうがいい）と आदत（習慣）を使って、自分の生活習慣と、気をつけていることを雑談で話せる。",
    grammar: {
      title: "〜したほうがいい：不定詞＋चाहिए／習慣 आदत",
      points: [
        "「〜したほうがいい・〜すべき」は「する人＋को の形＋動詞の -ना 形＋चाहिए」です。मुझे जल्दी सोना चाहिए（早く寝たほうがいい）。第1期の मुझे पानी चाहिए（水がほしい）と同じ形で、名詞の場所に動詞の -ना 形が入るだけです。",
        "否定は नहीं … चाहिए です：रात को देर तक फ़ोन नहीं देखना चाहिए（夜遅くまでスマホを見ないほうがいい）。人に言う आपको … चाहिए は少し強く聞こえることがあるので、雑談では मैं … करने की कोशिश करता हूँ（私は〜するようにしています）と、自分の話にするとやわらかくなります。",
        "目的語が女性名詞や複数のとき、ていねいな話し方では -ना も目的語に合わせて -नी／-ने に変えます：मुझे हरी सब्ज़ियाँ खानी चाहिए、रात को स्क्रीन कम देखनी चाहिए。日常会話では -ना のままでも通じますが、この一致に気づけると B1 への一歩です。",
        "習慣は आदत（女）を使います。मुझे सुबह टहलने की आदत है（朝散歩する習慣があります）。動詞は -ने の形にして की आदत につなげます。よい習慣は अच्छी आदत、やめたい習慣は बुरी आदत です。",
        "回数と量の言葉：रोज़（毎日）、हफ़्ते में तीन बार（週に3回）、कम（少なく）、ज़्यादा（多く）、थोड़ा（少し）。日本語の「毎日・週に3回」と同じく、動詞の前に置きます。インドの人とは、食事や散歩の話でよく盛り上がります。"
      ],
      examples: [
        { hi: "मुझे रात को जल्दी सोना चाहिए।", rom: "mujhe rāt ko jaldī sonā chāhie.", ja: "私は夜早く寝たほうがいいです。", eng: "I should go to bed early at night." },
        { hi: "आपको ज़्यादा पानी पीना चाहिए।", rom: "āpko zyādā pānī pīnā chāhie.", ja: "もっと水を飲んだほうがいいですよ。", eng: "You should drink more water." },
        { hi: "सोने से पहले फ़ोन नहीं देखना चाहिए।", rom: "sone se pahle fon nahīṁ dekhnā chāhie.", ja: "寝る前にスマホは見ないほうがいいです。", eng: "You shouldn't look at your phone before bed." },
        { hi: "मुझे रोज़ हरी सब्ज़ियाँ खानी चाहिए।", rom: "mujhe roz harī sabziyāṁ khānī chāhie.", ja: "毎日、緑の野菜を食べたほうがいいですね。", eng: "I should eat green vegetables every day." },
        { hi: "मुझे सुबह टहलने की आदत है।", rom: "mujhe subah ṭahalne kī ādat hai.", ja: "朝、散歩する習慣があります。", eng: "I have a habit of walking in the morning." },
        { hi: "मैं हफ़्ते में तीन बार कसरत करता हूँ।", rom: "maiṁ hafte meṁ tīn bār kasrat kartā hūṁ.", ja: "週に3回運動しています。", eng: "I exercise three times a week." }
      ],
      tip: "自分に言う「मुझे … चाहिए」を3つ、明日からの目標として書いてみましょう。人に言うときは「मैं … करता हूँ」と自分の習慣を先に話すと、押しつけにならず雑談らしくなります。"
    },
    vocab: [
      { hi: "नींद", rom: "nīṁd", ja: "眠り、睡眠（女）", eng: "sleep", ex: "कल रात मुझे अच्छी नींद आई।", exRom: "kal rāt mujhe achchhī nīṁd āī.", exJa: "昨夜はよく眠れました。" },
      { hi: "आदत", rom: "ādat", ja: "習慣、くせ（女）", eng: "habit", ex: "यह बहुत अच्छी आदत है।", exRom: "yah bahut achchhī ādat hai.", exJa: "それはとてもいい習慣ですね。" },
      { hi: "टहलना", rom: "ṭahalnā", ja: "散歩する", eng: "to take a walk", ex: "मैं शाम को नदी के किनारे टहलता हूँ।", exRom: "maiṁ shām ko nadī ke kināre ṭahaltā hūṁ.", exJa: "夕方、川沿いを散歩します。" },
      { hi: "पैदल", rom: "paidal", ja: "歩いて", eng: "on foot", ex: "पास में है, पैदल चलते हैं।", exRom: "pās meṁ hai, paidal chalte haiṁ.", exJa: "近いので、歩いて行きましょう。" },
      { hi: "क़दम", rom: "qadam", ja: "歩、一歩（男）", eng: "step", ex: "मैं रोज़ आठ हज़ार क़दम चलता हूँ।", exRom: "maiṁ roz āṭh hazār qadam chaltā hūṁ.", exJa: "毎日8,000歩歩いています。" },
      { hi: "कसरत", rom: "kasrat", ja: "運動、体操（女）", eng: "exercise", ex: "सुबह की कसरत से दिन अच्छा शुरू होता है।", exRom: "subah kī kasrat se din achchhā shurū hotā hai.", exJa: "朝の運動で、1日が気持ちよく始まります。" },
      { hi: "स्ट्रेचिंग", rom: "sṭreching", ja: "ストレッチ（女）", eng: "stretching", ex: "मैं सोने से पहले थोड़ी स्ट्रेचिंग करता हूँ।", exRom: "maiṁ sone se pahle thoṛī sṭreching kartā hūṁ.", exJa: "寝る前に少しストレッチをします。" },
      { hi: "पोस्चर", rom: "poschar", ja: "姿勢（男）", eng: "posture", ex: "लैपटॉप पर काम करते समय पोस्चर का ध्यान रखिए।", exRom: "laipṭop par kām karte samay poschar kā dhyān rakhie.", exJa: "パソコンで仕事をするときは、姿勢に気をつけてください。" },
      { hi: "झुकना", rom: "jhuknā", ja: "前かがみになる、曲がる", eng: "to bend, to slouch", ex: "फ़ोन देखते समय हम आगे झुक जाते हैं।", exRom: "fon dekhte samay ham āge jhuk jāte haiṁ.", exJa: "スマホを見ているとき、つい前かがみになります。" },
      { hi: "ध्यान रखना", rom: "dhyān rakhnā", ja: "気をつける、大事にする", eng: "to take care", ex: "अपनी सेहत का ध्यान रखिए।", exRom: "apnī sehat kā dhyān rakhie.", exJa: "体を大事にしてくださいね。" },
      { hi: "तनाव", rom: "tanāv", ja: "ストレス、緊張（男）", eng: "stress", ex: "काम में कभी-कभी बहुत तनाव होता है।", exRom: "kām meṁ kabhī-kabhī bahut tanāv hotā hai.", exJa: "仕事では、ときどきとてもストレスがあります。" },
      { hi: "थकान", rom: "thakān", ja: "疲れ（女）", eng: "tiredness", ex: "लंबे सफ़र के बाद थकान होती है।", exRom: "lambe safar ke bād thakān hotī hai.", exJa: "長旅のあとは疲れが出ます。" },
      { hi: "चीनी", rom: "chīnī", ja: "砂糖（女）", eng: "sugar", ex: "मैं चाय में कम चीनी डालता हूँ।", exRom: "maiṁ chāy meṁ kam chīnī ḍāltā hūṁ.", exJa: "チャイには砂糖を少なめに入れます。" },
      { hi: "तला हुआ", rom: "talā huā", ja: "揚げた", eng: "fried", ex: "तला हुआ खाना मुझे पसंद है, पर कम खाता हूँ।", exRom: "talā huā khānā mujhe pasand hai, par kam khātā hūṁ.", exJa: "揚げ物は好きですが、少なめにしています。" },
      { hi: "हल्का", rom: "halkā", ja: "軽い、あっさりした", eng: "light", ex: "रात को हल्का खाना अच्छा रहता है।", exRom: "rāt ko halkā khānā achchhā rahtā hai.", exJa: "夜はあっさりした食事がいいです。" },
      { hi: "वज़न", rom: "vazan", ja: "体重、重さ（男）", eng: "weight", ex: "भारत में मेरा वज़न बढ़ जाता है!", exRom: "Bhārat meṁ merā vazan baṛh jātā hai!", exJa: "インドに行くと体重が増えてしまいます！" },
      { hi: "स्क्रीन", rom: "skrīn", ja: "画面（女）", eng: "screen", ex: "रात को स्क्रीन कम देखनी चाहिए।", exRom: "rāt ko skrīn kam dekhnī chāhie.", exJa: "夜は画面をあまり見ないほうがいいです。" },
      { hi: "नियमित", rom: "niyamit", ja: "規則正しい、定期的な", eng: "regular", ex: "नियमित नींद बहुत ज़रूरी है।", exRom: "niyamit nīṁd bahut zarūrī hai.", exJa: "規則正しい睡眠はとても大切です。" },
      { hi: "संतुलित", rom: "santulit", ja: "バランスのとれた", eng: "balanced", ex: "संतुलित खाना सेहत के लिए अच्छा है।", exRom: "santulit khānā sehat ke lie achchhā hai.", exJa: "バランスのとれた食事は健康にいいです。" },
      { hi: "ताज़ा", rom: "tāzā", ja: "新鮮な、すっきりした", eng: "fresh", ex: "सुबह टहलने के बाद मैं ताज़ा महसूस करता हूँ।", exRom: "subah ṭahalne ke bād maiṁ tāzā mahsūs kartā hūṁ.", exJa: "朝散歩したあとは、すっきりした気分になります。" }
    ],
    sentences: [
      { ja: "毎晩、少なくとも7時間は寝るようにしています。", hi: "मैं रोज़ रात कम से कम सात घंटे सोने की कोशिश करता हूँ।", rom: "maiṁ roz rāt kam se kam sāt ghanṭe sone kī koshish kartā hūṁ.", eng: "I try to sleep at least seven hours every night." },
      { ja: "朝、30分散歩する習慣があります。", hi: "मुझे सुबह आधा घंटा टहलने की आदत है।", rom: "mujhe subah ādhā ghanṭā ṭahalne kī ādat hai.", eng: "I have a habit of walking for half an hour in the morning." },
      { ja: "私たちはもっと水を飲んだほうがいいですね。", hi: "हमें ज़्यादा पानी पीना चाहिए।", rom: "hameṁ zyādā pānī pīnā chāhie.", eng: "We should drink more water." },
      { ja: "夜遅くまでスマホを見ないほうがいいのに、つい見てしまいます！", hi: "रात को देर तक फ़ोन नहीं देखना चाहिए, लेकिन मैं देखता हूँ!", rom: "rāt ko der tak fon nahīṁ dekhnā chāhie, lekin maiṁ dekhtā hūṁ!", eng: "I shouldn't look at my phone late at night, but I do!" },
      { ja: "パソコンで仕事をするときは、姿勢に気をつけています。", hi: "कंप्यूटर पर काम करते समय मैं अपने पोस्चर का ध्यान रखता हूँ।", rom: "kampyūṭar par kām karte samay maiṁ apne poschar kā dhyān rakhtā hūṁ.", eng: "When I work on the computer, I pay attention to my posture." },
      { ja: "インドの料理はおいしいので、つい食べすぎてしまいます。", hi: "भारत में खाना इतना स्वादिष्ट है कि मैं ज़्यादा खा लेता हूँ।", rom: "Bhārat meṁ khānā itnā svādishṭ hai ki maiṁ zyādā khā letā hūṁ.", eng: "The food in India is so tasty that I end up eating too much." },
      { ja: "夜はあっさりしたものを食べるようにしています。", hi: "रात को मैं हल्का खाना खाने की कोशिश करता हूँ।", rom: "rāt ko maiṁ halkā khānā khāne kī koshish kartā hūṁ.", eng: "I try to eat light food at night." },
      { ja: "揚げ物は少し控えたほうがいいですね。", hi: "तला हुआ खाना थोड़ा कम खाना चाहिए।", rom: "talā huā khānā thoṛā kam khānā chāhie.", eng: "We should eat a little less fried food." },
      { ja: "週に2回、ジムで運動しています。", hi: "मैं हफ़्ते में दो बार जिम में कसरत करता हूँ।", rom: "maiṁ hafte meṁ do bār jim meṁ kasrat kartā hūṁ.", eng: "I work out at the gym twice a week." },
      { ja: "忙しいときこそ、よく眠ることがもっと大切だと思います。", hi: "मुझे लगता है कि व्यस्त समय में अच्छी नींद और भी ज़रूरी है।", rom: "mujhe lagtā hai ki vyast samay meṁ achchhī nīṁd aur bhī zarūrī hai.", eng: "I think good sleep is even more important when you're busy." }
    ],
    dialogue: {
      title: "アルジュンさんと元気の秘訣を話す",
      lines: [
        { s: "B", name: "Arjun", hi: "आकिहिरो जी, आप हमेशा इतने फ़्रेश दिखते हैं। राज़ क्या है?", rom: "Ākihiro jī, āp hameshā itne fresh dikhte haiṁ. rāz kyā hai?", ja: "あきひろさん、いつも元気そうですね。秘訣は何ですか。", eng: "Akihiro, you always look so fresh. What's the secret?" },
        { s: "A", name: "Akihiro", hi: "कोई बड़ा राज़ नहीं है। बस कुछ अच्छी आदतें हैं।", rom: "koī baṛā rāz nahīṁ hai. bas kuchh achchhī ādateṁ haiṁ.", ja: "大きな秘訣はありませんよ。いい習慣がいくつかあるだけです。", eng: "No big secret. Just a few good habits." },
        { s: "B", name: "Arjun", hi: "जैसे? मुझे भी बताइए।", rom: "jaise? mujhe bhī batāie.", ja: "たとえば？ぼくにも教えてください。", eng: "Like what? Tell me too." },
        { s: "A", name: "Akihiro", hi: "सबसे पहले, नींद। मैं रोज़ लगभग सात घंटे सोता हूँ।", rom: "sabse pahle, nīṁd. maiṁ roz lagbhag sāt ghanṭe sotā hūṁ.", ja: "まずは睡眠です。毎日だいたい7時間寝ています。", eng: "First, sleep. I sleep about seven hours every day." },
        { s: "B", name: "Arjun", hi: "सात घंटे! मैं तो रात को देर तक फ़ोन देखता रहता हूँ।", rom: "sāt ghanṭe! maiṁ to rāt ko der tak fon dekhtā rahtā hūṁ.", ja: "7時間も！ぼくなんか、夜遅くまでずっとスマホを見ています。", eng: "Seven hours! I keep looking at my phone till late at night." },
        { s: "A", name: "Akihiro", hi: "हा हा, मैं भी पहले ऐसा करता था। लेकिन सोने से पहले स्क्रीन नहीं देखनी चाहिए।", rom: "hā hā, maiṁ bhī pahle aisā kartā thā. lekin sone se pahle skrīn nahīṁ dekhnī chāhie.", ja: "ははは、私も前はそうでした。でも、寝る前は画面を見ないほうがいいですよ。", eng: "Haha, I used to do that too. But you shouldn't look at screens before bed." },
        { s: "B", name: "Arjun", hi: "और खाने में आप किस बात का ध्यान रखते हैं?", rom: "aur khāne meṁ āp kis bāt kā dhyān rakhte haiṁ?", ja: "食事では、どんなことに気をつけていますか。", eng: "And what do you watch out for in your food?" },
        { s: "A", name: "Akihiro", hi: "रात को मैं हल्का खाना खाता हूँ। लेकिन भारत में यह मुश्किल है!", rom: "rāt ko maiṁ halkā khānā khātā hūṁ. lekin Bhārat meṁ yah mushkil hai!", ja: "夜はあっさりしたものを食べます。でも、インドではそれが難しいんです！", eng: "I eat light at night. But in India, that's difficult!" },
        { s: "B", name: "Arjun", hi: "हाँ, यहाँ तो रात का खाना सबसे भारी होता है!", rom: "hāṁ, yahāṁ to rāt kā khānā sabse bhārī hotā hai!", ja: "そうですね、こっちでは夕食がいちばんしっかりしていますから！", eng: "Yes, here dinner is the heaviest meal!" },
        { s: "A", name: "Akihiro", hi: "और मुझे सुबह टहलने की आदत है। ओज़ू में नदी के किनारे रोज़ चलता हूँ।", rom: "aur mujhe subah ṭahalne kī ādat hai. Ozū meṁ nadī ke kināre roz chaltā hūṁ.", ja: "それから、朝散歩する習慣があります。大洲では毎日川沿いを歩いています。", eng: "And I have a habit of walking in the morning. In Ozu, I walk along the river every day." },
        { s: "B", name: "Arjun", hi: "मुझे भी ज़्यादा चलना चाहिए। मैं पूरा दिन लैपटॉप के सामने बैठा रहता हूँ।", rom: "mujhe bhī zyādā chalnā chāhie. maiṁ pūrā din laipṭop ke sāmne baiṭhā rahtā hūṁ.", ja: "ぼくももっと歩いたほうがいいですね。1日じゅうパソコンの前に座りっぱなしなんです。", eng: "I should walk more too. I sit in front of my laptop all day." },
        { s: "A", name: "Akihiro", hi: "तब पोस्चर का भी ध्यान रखिए। हर घंटे थोड़ा उठकर स्ट्रेचिंग कीजिए।", rom: "tab poschar kā bhī dhyān rakhie. har ghanṭe thoṛā uṭhkar sṭreching kījie.", ja: "それなら姿勢にも気をつけてくださいね。1時間ごとに立って、少しストレッチしましょう。", eng: "Then take care of your posture too. Get up every hour and stretch a little." },
        { s: "B", name: "Arjun", hi: "ठीक है! कल से मैं भी सुबह टहलूँगा। चलिए, साथ में कोशिश करते हैं!", rom: "ṭhīk hai! kal se maiṁ bhī subah ṭahalūṁgā. chalie, sāth meṁ koshish karte haiṁ!", ja: "わかりました！明日からぼくも朝散歩します。一緒にがんばりましょう！", eng: "Okay! From tomorrow I'll walk in the mornings too. Let's try it together!" },
        { s: "A", name: "Akihiro", hi: "बहुत बढ़िया! रोज़ शाम को व्हाट्सऐप पर अपने क़दम भेजिए।", rom: "bahut baṛhiyā! roz shām ko vhāṭsaip par apne qadam bhejie.", ja: "いいですね！毎晩、WhatsApp で歩数を送ってください。", eng: "Excellent! Send me your step count on WhatsApp every evening." }
      ]
    },
    writing: "自分の生活習慣を5文で書きましょう。①मुझे … की आदत है। ②मैं रोज़ …। ③मैं हफ़्ते में … बार …। ④मुझे … ज़्यादा／कम … चाहिए। ⑤… नहीं … चाहिए। の型を使ってください（ローマ字：mujhe … kī ādat hai. / maiṁ roz … / maiṁ hafte meṁ … bār … / mujhe … chāhie. / … nahīṁ … chāhie.）。",
    speaking: "睡眠・歩くこと・食事・姿勢から2つ選び、「自分の習慣（मुझे … की आदत है）」と「これから気をつけたいこと（मुझे … चाहिए）」を1分で話しましょう。最後に आप क्या करते हैं?（あなたはどうしていますか）と聞き返す練習もしましょう。"
  }
]);

window.WEEKS = (window.WEEKS || []).concat([
  {
    week: 44,
    title: "ていねいな依頼と断り方",
    scene: "取引先からの頼みごと・メールでのお願い",
    cefr: "A2→B1",
    goal: "取引先にていねいにお願いし、できないときは理由と代わりの案をそえて、角を立てずに断れる。",
    grammar: {
      title: "-ने की कृपा करें・पाना・やわらかい断り方",
      points: [
        "お願いの言い方には段階があります。भेजिए（送ってください）→ ज़रा भेज दीजिए（ちょっと送ってください）→ क्या आप भेज सकते हैं?（送っていただけますか）の順にていねいになります。メールや案内文では、कृपया … भेजें のように -एँ で終わる形（命令の書き言葉）もよく使います。日本語の「〜してください」「〜していただけますか」「〜くださいますようお願いします」と同じように、場面で使い分けます。",
        "書き言葉でいちばん改まったお願いは「不定詞の -ने ＋ की कृपा करें」です。जवाब देने की कृपा करें（ご返信くださいますようお願いします）。कृपा（ご厚意）は女性名詞なので का ではなく की になります。招待状・メール・掲示でよく見ますが、話すときに使うと大げさに聞こえるので、会話では क्या आप … सकते हैं? で十分です。",
        "पाना は「動詞の語幹＋पाना」で「（事情があって）〜できる・〜しきれる」です。मैं कल नहीं आ पाऊँगा（明日は行けそうにありません）、मैं ईमेल नहीं पढ़ पाया（メールを読みきれませんでした）。सकना が「能力・可能性」なのに対し、पाना は「やろうとしたが、都合で結局できない／できた」の気持ちで、否定や過去でよく使います。पाना は ने を取らず、主語の性・数に合わせて पाया／पाई／पाए と変わります。",
        "断るときは日本語と同じく、はっきり「いいえ」と言わずに順番を踏みます。①お礼か謝罪（बुलाने के लिए धन्यवाद／माफ़ कीजिए）②理由（क्योंकि …）③やわらげた断り（शायद नहीं हो पाएगा＝たぶん無理そうです）④代わりの案（लेकिन … कर सकता हूँ）。शायद（たぶん）と पाना を組み合わせると、日本語の「ちょっと難しいかもしれません」にとても近い響きになります。",
        "断られたとき・受け入れるときの返事も覚えておきましょう。कोई बात नहीं（大丈夫ですよ）、समझने के लिए धन्यवाद（ご理解ありがとうございます）、असुविधा के लिए माफ़ी चाहता हूँ（ご不便をおかけしてすみません）。インドのビジネスでは、断ったあとに必ず次の約束（अगली बार ज़रूर）をつけると関係がよく保てます。"
      ],
      examples: [
        { hi: "कृपया अपना जवाब शुक्रवार तक भेजें।", rom: "kripayā apnā javāb shukravār tak bhejeṁ.", ja: "金曜日までにお返事をお送りください。", eng: "Please send your reply by Friday." },
        { hi: "बैठक में समय पर आने की कृपा करें।", rom: "baiṭhak meṁ samay par āne kī kripā kareṁ.", ja: "会議には時間どおりにお越しくださいますようお願いします。", eng: "Kindly come to the meeting on time." },
        { hi: "माफ़ कीजिए, मैं कल नहीं आ पाऊँगा।", rom: "māf kījie, maiṁ kal nahīṁ ā pāūṁgā.", ja: "すみません、明日は行けそうにありません。", eng: "Sorry, I won't be able to come tomorrow." },
        { hi: "शायद इस हफ़्ते नहीं हो पाएगा।", rom: "shāyad is hafte nahīṁ ho pāegā.", ja: "今週はたぶん難しそうです。", eng: "It probably won't be possible this week." },
        { hi: "मैं कल आपका ईमेल नहीं पढ़ पाया।", rom: "maiṁ kal āpkā īmel nahīṁ paṛh pāyā.", ja: "昨日はあなたのメールを読みきれませんでした。", eng: "I couldn't read your email yesterday." },
        { hi: "क्या आप यह फ़ाइल दोबारा भेज सकती हैं?", rom: "kyā āp yah fāil dobārā bhej saktī haiṁ?", ja: "（女性に）このファイルをもう一度送っていただけますか。", eng: "Could you send this file again?" }
      ],
      tip: "断るときは「धन्यवाद → माफ़ कीजिए → शायद … नहीं हो पाएगा → लेकिन …」の4拍子で覚えましょう。最後の लेकिन（でも）で代わりの案を出せば、断っても気持ちよく終われます。"
    },
    vocab: [
      { hi: "कृपा", rom: "kripā", ja: "ご厚意、親切（女）", eng: "kindness", ex: "कार्यक्रम में ज़रूर आने की कृपा करें।", exRom: "kāryakram meṁ zarūr āne kī kripā kareṁ.", exJa: "ぜひ会にお越しくださいますようお願いします。" },
      { hi: "अनुरोध", rom: "anurodh", ja: "お願い、依頼（男）", eng: "request", ex: "मेरा आपसे एक छोटा-सा अनुरोध है।", exRom: "merā āpse ek chhoṭā-sā anurodh hai.", exJa: "ちょっとしたお願いがあります。" },
      { hi: "निवेदन", rom: "nivedan", ja: "（改まった）お願い（男）", eng: "humble request", ex: "आपसे निवेदन है कि जल्दी जवाब दें।", exRom: "āpse nivedan hai ki jaldī javāb deṁ.", exJa: "早めにお返事くださるようお願いいたします。" },
      { hi: "मना करना", rom: "manā karnā", ja: "断る", eng: "to refuse", ex: "मुझे मना करना अच्छा नहीं लगता।", exRom: "mujhe manā karnā achchhā nahīṁ lagtā.", exJa: "断るのは気が引けます。" },
      { hi: "मजबूरी", rom: "majbūrī", ja: "やむを得ない事情（女）", eng: "compulsion", ex: "यह मेरी मजबूरी है, माफ़ कीजिए।", exRom: "yah merī majbūrī hai, māf kījie.", exJa: "やむを得ない事情なんです、すみません。" },
      { hi: "संभव", rom: "sambhav", ja: "可能な", eng: "possible", ex: "क्या यह अगले महीने संभव है?", exRom: "kyā yah agle mahīne sambhav hai?", exJa: "来月なら可能ですか。" },
      { hi: "मुश्किल", rom: "mushkil", ja: "難しい／困難（女）", eng: "difficult", ex: "इस हफ़्ते थोड़ा मुश्किल है।", exRom: "is hafte thoṛā mushkil hai.", exJa: "今週はちょっと難しいです。" },
      { hi: "व्यस्त", rom: "vyast", ja: "忙しい", eng: "busy", ex: "मैं आजकल बहुत व्यस्त हूँ।", exRom: "maiṁ ājkal bahut vyast hūṁ.", exJa: "最近とても忙しいです。" },
      { hi: "क्षमा", rom: "kshamā", ja: "許し（女）※改まった言い方", eng: "pardon", ex: "देर से जवाब के लिए क्षमा करें।", exRom: "der se javāb ke lie kshamā kareṁ.", exJa: "返信が遅くなり、申し訳ありません。" },
      { hi: "असुविधा", rom: "asuvidhā", ja: "不便、迷惑（女）", eng: "inconvenience", ex: "असुविधा के लिए खेद है।", exRom: "asuvidhā ke lie khed hai.", exJa: "ご不便をおかけして申し訳ありません。" },
      { hi: "विकल्प", rom: "vikalp", ja: "別の案、選択肢（男）", eng: "option", ex: "क्या कोई दूसरा विकल्प है?", exRom: "kyā koī dūsrā vikalp hai?", exJa: "ほかの案はありますか。" },
      { hi: "पाना", rom: "pānā", ja: "（語幹＋）〜できる、〜しきれる", eng: "to manage to", ex: "मैं समय पर नहीं पहुँच पाया।", exRom: "maiṁ samay par nahīṁ pahuṁch pāyā.", exJa: "時間どおりに着けませんでした。" },
      { hi: "अगली बार", rom: "aglī bār", ja: "次回", eng: "next time", ex: "अगली बार ज़रूर आऊँगा।", exRom: "aglī bār zarūr āūṁgā.", exJa: "次回は必ず行きます。" },
      { hi: "फ़िलहाल", rom: "filhāl", ja: "今のところ", eng: "for now", ex: "फ़िलहाल यह नहीं हो पाएगा।", exRom: "filhāl yah nahīṁ ho pāegā.", exJa: "今のところ、それはできそうにありません。" },
      { hi: "इजाज़त", rom: "ijāzat", ja: "許可（女）", eng: "permission", ex: "इजाज़त हो तो मैं थोड़ा जल्दी निकलूँ?", exRom: "ijāzat ho to maiṁ thoṛā jaldī nikalūṁ?", exJa: "よろしければ、少し早めに失礼してもいいですか。" },
      { hi: "इंतज़ाम", rom: "intazām", ja: "手配、準備（男）", eng: "arrangement", ex: "होटल का इंतज़ाम हो गया है।", exRom: "hoṭal kā intazām ho gayā hai.", exJa: "ホテルの手配はできています。" },
      { hi: "दोबारा", rom: "dobārā", ja: "もう一度", eng: "again", ex: "क्या आप दोबारा बता सकते हैं?", exRom: "kyā āp dobārā batā sakte haiṁ?", exJa: "もう一度教えていただけますか。" },
      { hi: "ज़िम्मेदारी", rom: "zimmedārī", ja: "責任、担当（女）", eng: "responsibility", ex: "यह काम मेरी ज़िम्मेदारी है।", exRom: "yah kām merī zimmedārī hai.", exJa: "この仕事は私の担当です。" },
      { hi: "उम्मीद", rom: "ummīd", ja: "望み、期待（女）", eng: "hope", ex: "उम्मीद है आप समझेंगे।", exRom: "ummīd hai āp samjheṁge.", exJa: "ご理解いただけるとうれしいです。" },
      { hi: "भरोसा", rom: "bharosā", ja: "信頼（男）", eng: "trust", ex: "मुझे आप पर पूरा भरोसा है।", exRom: "mujhe āp par pūrā bharosā hai.", exJa: "あなたを全面的に信頼しています。" }
    ],
    sentences: [
      { ja: "あなたにひとつお願いがあります。", hi: "मेरा आपसे एक अनुरोध है।", rom: "merā āpse ek anurodh hai.", eng: "I have a request for you." },
      { ja: "この書類を確認していただけますか。", hi: "क्या आप यह दस्तावेज़ जाँच सकते हैं?", rom: "kyā āp yah dastāvez jāṁch sakte haiṁ?", eng: "Could you check this document?" },
      { ja: "すみません、明日は行けそうにありません。", hi: "माफ़ कीजिए, कल मैं नहीं आ पाऊँगा।", rom: "māf kījie, kal maiṁ nahīṁ ā pāūṁgā.", eng: "Sorry, I won't be able to come tomorrow." },
      { ja: "今週はたぶん難しそうです。", hi: "इस हफ़्ते शायद नहीं हो पाएगा।", rom: "is hafte shāyad nahīṁ ho pāegā.", eng: "It probably won't be possible this week." },
      { ja: "昨日はあなたのメールを読みきれませんでした。", hi: "कल मैं आपका ईमेल नहीं पढ़ पाया।", rom: "kal maiṁ āpkā īmel nahīṁ paṛh pāyā.", eng: "I couldn't read your email yesterday." },
      { ja: "金曜日までにご返信くださいますようお願いします。（書き言葉）", hi: "शुक्रवार तक जवाब देने की कृपा करें।", rom: "shukravār tak javāb dene kī kripā kareṁ.", eng: "Kindly reply by Friday." },
      { ja: "来週なら、私は大丈夫です。", hi: "अगर अगले हफ़्ते हो, तो मेरे लिए ठीक है।", rom: "agar agle hafte ho, to mere lie ṭhīk hai.", eng: "If it's next week, it's fine for me." },
      { ja: "誘ってくださってありがとうございます。でも今回は行けません。", hi: "बुलाने के लिए धन्यवाद, लेकिन इस बार मैं नहीं आ पाऊँगा।", rom: "bulāne ke lie dhanyavād, lekin is bār maiṁ nahīṁ ā pāūṁgā.", eng: "Thank you for inviting me, but I can't come this time." },
      { ja: "ご不便をおかけして申し訳ありません。", hi: "आपको हुई असुविधा के लिए माफ़ी चाहता हूँ।", rom: "āpko huī asuvidhā ke lie māfī chāhtā hūṁ.", eng: "I apologize for the inconvenience caused to you." },
      { ja: "その代わり、月曜日にオンラインでお話しできます。", hi: "उसकी जगह, हम सोमवार को ऑनलाइन बात कर सकते हैं।", rom: "uskī jagah, ham somvār ko onlāin bāt kar sakte haiṁ.", eng: "Instead, we can talk online on Monday." }
    ],
    dialogue: {
      title: "プリヤさんの頼みをていねいに断る",
      lines: [
        { s: "B", name: "Priya", hi: "आकिहिरो जी, नमस्ते। आपसे एक अनुरोध है।", rom: "Ākihiro jī, namaste. āpse ek anurodh hai.", ja: "あきひろさん、こんにちは。ひとつお願いがあるんです。", eng: "Hello, Akihiro. I have a request for you." },
        { s: "A", name: "Akihiro", hi: "जी, बताइए प्रिया जी।", rom: "jī, batāie Priyā jī.", ja: "はい、どうぞ、プリヤさん。", eng: "Yes, please go ahead, Priya." },
        { s: "B", name: "Priya", hi: "क्या आप अगले हफ़्ते दिल्ली आ सकते हैं? एक ज़रूरी बैठक है।", rom: "kyā āp agle hafte Dillī ā sakte haiṁ? ek zarūrī baiṭhak hai.", ja: "来週デリーに来ていただけますか。大事な会議があるんです。", eng: "Could you come to Delhi next week? There's an important meeting." },
        { s: "A", name: "Akihiro", hi: "बुलाने के लिए धन्यवाद। लेकिन माफ़ कीजिए, अगले हफ़्ते मैं नहीं आ पाऊँगा।", rom: "bulāne ke lie dhanyavād. lekin māf kījie, agle hafte maiṁ nahīṁ ā pāūṁgā.", ja: "お声がけありがとうございます。でもすみません、来週は行けそうにありません。", eng: "Thank you for inviting me. But sorry, I won't be able to come next week." },
        { s: "B", name: "Priya", hi: "अच्छा, कोई बात नहीं। क्या कोई मुश्किल है?", rom: "achchhā, koī bāt nahīṁ. kyā koī mushkil hai?", ja: "そうですか、大丈夫ですよ。何かご事情が？", eng: "I see, no problem. Is there some difficulty?" },
        { s: "A", name: "Akihiro", hi: "जी, क्लिनिक में स्टाफ़ कम है, इसलिए जापान छोड़ना मुश्किल है।", rom: "jī, klinik meṁ sṭāf kam hai, islie Jāpān chhoṛnā mushkil hai.", ja: "はい、院の人手が足りなくて、日本を離れるのが難しいんです。", eng: "Yes, we're short of staff at the clinic, so it's hard to leave Japan." },
        { s: "A", name: "Akihiro", hi: "उसकी जगह, क्या हम ऑनलाइन बात कर सकते हैं?", rom: "uskī jagah, kyā ham onlāin bāt kar sakte haiṁ?", ja: "その代わり、オンラインでお話しできますか。", eng: "Instead, could we talk online?" },
        { s: "B", name: "Priya", hi: "हाँ, यह संभव है। मंगलवार शाम कैसा रहेगा?", rom: "hāṁ, yah sambhav hai. mangalvār shām kaisā rahegā?", ja: "ええ、できますよ。火曜日の夕方はどうですか。", eng: "Yes, that's possible. How about Tuesday evening?" },
        { s: "A", name: "Akihiro", hi: "मंगलवार ठीक है। मैं समय पर जुड़ जाऊँगा।", rom: "mangalvār ṭhīk hai. maiṁ samay par juṛ jāūṁgā.", ja: "火曜日で大丈夫です。時間どおりにつなぎます。", eng: "Tuesday is fine. I'll join on time." },
        { s: "B", name: "Priya", hi: "बहुत अच्छा। और कृपया नई क़ीमतों की फ़ाइल सोमवार तक भेज दीजिए।", rom: "bahut achchhā. aur kripayā naī qīmatoṁ kī fāil somvār tak bhej dījie.", ja: "よかった。それから、新しい価格のファイルを月曜日までに送ってください。", eng: "Great. And please send the file with the new prices by Monday." },
        { s: "A", name: "Akihiro", hi: "ज़रूर। लेकिन शायद पूरी फ़ाइल सोमवार तक नहीं हो पाएगी।", rom: "zarūr. lekin shāyad pūrī fāil somvār tak nahīṁ ho pāegī.", ja: "もちろんです。ただ、月曜日までに全部は仕上がらないかもしれません。", eng: "Of course. But the whole file probably won't be ready by Monday." },
        { s: "A", name: "Akihiro", hi: "आधी सोमवार को और बाक़ी बुधवार तक भेजूँ?", rom: "ādhī somvār ko aur bāqī budhvār tak bhejūṁ?", ja: "半分を月曜日に、残りを水曜日までにお送りしてもいいですか。", eng: "Shall I send half on Monday and the rest by Wednesday?" },
        { s: "B", name: "Priya", hi: "ठीक है, बुधवार तक चलेगा।", rom: "ṭhīk hai, budhvār tak chalegā.", ja: "わかりました、水曜日までで大丈夫です。", eng: "Okay, Wednesday will work." },
        { s: "A", name: "Akihiro", hi: "समझने के लिए धन्यवाद, प्रिया जी। मंगलवार को मिलते हैं।", rom: "samajhne ke lie dhanyavād, Priyā jī. mangalvār ko milte haiṁ.", ja: "ご理解ありがとうございます、プリヤさん。火曜日にお会いしましょう。", eng: "Thank you for understanding, Priya. See you on Tuesday." }
      ]
    },
    writing: "取引先へのメールを4文で書きましょう。①お礼 ②断り ③代わりの案 ④ていねいなお願い。型：बुलाने के लिए धन्यवाद। / माफ़ कीजिए, … मैं नहीं आ पाऊँगा। / लेकिन हम … ऑनलाइन बात कर सकते हैं। / … तक जवाब देने की कृपा करें।（ローマ字：bulāne ke lie dhanyavād. / māf kījie, … maiṁ nahīṁ ā pāūṁgā. / lekin ham … onlāin bāt kar sakte haiṁ. / … tak javāb dene kī kripā kareṁ.）。会話なら最後の文は क्या आप … तक जवाब दे सकते हैं? でもかまいません。",
    speaking: "「来週デリーに来られますか」と頼まれた場面を想定し、①お礼 ②謝罪 ③理由 ④शायद … नहीं हो पाएगा ⑤代わりの案、の順に声に出して断ってみましょう。録音して、ていねいでやわらかい調子になっているか聞き直してください。"
  },
  {
    week: 45,
    title: "予定調整・待ち合わせ",
    scene: "デリーで会う日時と場所をラージさんと決める",
    cefr: "A2→B1",
    goal: "会う日時と場所を提案・確認し、遅れや変更があってもていねいに調整できる。",
    grammar: {
      title: "提案の接続法・-ने के लिए・予定の変更",
      points: [
        "「〜しましょうか」「〜してもいいですか」と提案するときは、第3期で習った接続法（-ऊँ／-एँ）を使います。क्या हम गुरुवार को मिलें?（木曜日に会いましょうか）、मैं तीन बजे आऊँ?（3時に行きましょうか）。決まった予定を言うときは未来形です：मैं बुधवार को पहुँचूँगा（水曜日に着きます）。日本語の「〜ましょうか」と「〜ます」の使い分けと同じ感覚です。",
        "相手の都合を聞くときは रहेगा（〜になるでしょう）が便利です。आपके लिए कौन-सा दिन ठीक रहेगा?（どの日がご都合よろしいですか）、गुरुवार दोपहर कैसा रहेगा?（木曜日の午後はいかがですか）。くだけた確認には चलेगा?（〜で大丈夫？）もよく使います。दिन は男性名詞なので कौन-सा、तारीख़（日付）なら कौन-सी になります。",
        "「〜するために」は「不定詞の -ने ＋ के लिए」です。आपसे मिलने के लिए（あなたに会うために）、टिकट लेने के लिए（切符を買うために）。日本語の「〜するために」と同じく、目的が動詞の前に来ます。आना・जाना と一緒なら के लिए を省いて मिलने आऊँगा（会いに行きます）とも言えます。",
        "予定を変えるときは、謝罪＋接続法か सकते हैं? でたずねます。क्या हम मीटिंग एक घंटा आगे बढ़ा सकते हैं?（会議を1時間遅らせられますか）。注意：ヒンディー語の आगे बढ़ाना は「（日時を）後ろにずらす・延期する」の意味です。「前倒しにする」は पहले करना と言います。日本語の「前に」と逆に感じるので気をつけましょう。",
        "待ち合わせの場所は後置詞で言います。होटल के सामने（ホテルの前で）、गेट पर（門で）、स्टेशन के आसपास（駅の近くで）。最後に तो, … पक्का?（じゃあ…で決まりですね）と確認し、पहुँचकर मैसेज करूँगा（着いたらメッセージします）と添えると安心です。"
      ],
      examples: [
        { hi: "क्या हम गुरुवार को मिलें?", rom: "kyā ham guruvār ko mileṁ?", ja: "木曜日に会いましょうか。", eng: "Shall we meet on Thursday?" },
        { hi: "आपके लिए कौन-सा समय ठीक रहेगा?", rom: "āpke lie kaun-sā samay ṭhīk rahegā?", ja: "何時がご都合よろしいですか。", eng: "What time would suit you?" },
        { hi: "मैं आपसे मिलने के लिए दिल्ली आऊँगा।", rom: "maiṁ āpse milne ke lie Dillī āūṁgā.", ja: "あなたに会うためにデリーへ行きます。", eng: "I'll come to Delhi to meet you." },
        { hi: "क्या हम मीटिंग एक घंटा आगे बढ़ा सकते हैं?", rom: "kyā ham mīṭing ek ghanṭā āge baṛhā sakte haiṁ?", ja: "会議を1時間遅らせることはできますか。", eng: "Can we push the meeting back by an hour?" },
        { hi: "होटल के सामने दस बजे मिलते हैं।", rom: "hoṭal ke sāmne das baje milte haiṁ.", ja: "10時にホテルの前で会いましょう。", eng: "Let's meet in front of the hotel at ten." },
        { hi: "पहुँचकर मैं आपको मैसेज करूँगा।", rom: "pahuṁchkar maiṁ āpko maisej karūṁgā.", ja: "着いたらメッセージします。", eng: "I'll message you when I arrive." }
      ],
      tip: "予定の相談は「提案（क्या हम … मिलें?）→ 都合を聞く（… कैसा रहेगा?）→ 確認（तो, … पक्का?）」の3段で。手帳やカレンダーを開きながら、実際の予定で言ってみると早く身につきます。"
    },
    vocab: [
      { hi: "तारीख़", rom: "tārīkh", ja: "日付（女）", eng: "date", ex: "मीटिंग की तारीख़ क्या है?", exRom: "mīṭing kī tārīkh kyā hai?", exJa: "会議の日付はいつですか。" },
      { hi: "तय करना", rom: "tay karnā", ja: "決める", eng: "to fix, decide", ex: "चलिए, मिलने का दिन तय करते हैं।", exRom: "chalie, milne kā din tay karte haiṁ.", exJa: "では、会う日を決めましょう。" },
      { hi: "फ़्री", rom: "frī", ja: "空いている、ひまな", eng: "free", ex: "क्या आप शुक्रवार को फ़्री हैं?", exRom: "kyā āp shukravār ko frī haiṁ?", exJa: "金曜日は空いていますか。" },
      { hi: "मुलाक़ात", rom: "mulāqāt", ja: "会うこと、面会（女）", eng: "meeting", ex: "हमारी अगली मुलाक़ात दिल्ली में होगी।", exRom: "hamārī aglī mulāqāt Dillī meṁ hogī.", exJa: "次はデリーでお会いすることになります。" },
      { hi: "आगे बढ़ाना", rom: "āge baṛhānā", ja: "（予定を）後ろにずらす、延期する", eng: "to postpone", ex: "क्या हम मीटिंग आगे बढ़ा सकते हैं?", exRom: "kyā ham mīṭing āge baṛhā sakte haiṁ?", exJa: "会議を延期できますか。" },
      { hi: "बदलना", rom: "badalnā", ja: "変える、変わる", eng: "to change", ex: "मुझे समय बदलना है।", exRom: "mujhe samay badalnā hai.", exJa: "時間を変えなければなりません。" },
      { hi: "रद्द करना", rom: "radd karnā", ja: "取り消す、キャンセルする", eng: "to cancel", ex: "मैंने अपनी उड़ान रद्द की।", exRom: "maiṁne apnī uṛān radd kī.", exJa: "フライトをキャンセルしました。" },
      { hi: "पक्का", rom: "pakkā", ja: "確かな、決まりの", eng: "confirmed", ex: "तो, सोमवार पक्का?", exRom: "to, somvār pakkā?", exJa: "じゃあ、月曜日で決まりですね？" },
      { hi: "देर", rom: "der", ja: "遅れ（女）", eng: "delay", ex: "मुझे दस मिनट की देर होगी।", exRom: "mujhe das minaṭ kī der hogī.", exJa: "10分遅れます。" },
      { hi: "इंतज़ार करना", rom: "intazār karnā", ja: "待つ", eng: "to wait", ex: "मैं लॉबी में आपका इंतज़ार करूँगा।", exRom: "maiṁ lobī meṁ āpkā intazār karūṁgā.", exJa: "ロビーでお待ちしています。" },
      { hi: "सामने", rom: "sāmne", ja: "前に、向かいに", eng: "in front", ex: "होटल के सामने एक कैफ़े है।", exRom: "hoṭal ke sāmne ek kaife hai.", exJa: "ホテルの前にカフェがあります。" },
      { hi: "लोकेशन", rom: "lokeshan", ja: "位置情報、場所（女）", eng: "location", ex: "मैं आपको लोकेशन भेजता हूँ।", exRom: "maiṁ āpko lokeshan bhejtā hūṁ.", exJa: "位置情報を送りますね。" },
      { hi: "परसों", rom: "parsoṁ", ja: "あさって／おととい", eng: "day after tomorrow", ex: "परसों मैं बेंगलुरु जाऊँगा।", exRom: "parsoṁ maiṁ Bengaluru jāūṁgā.", exJa: "あさってベンガルールに行きます。" },
      { hi: "दोपहर", rom: "dopahar", ja: "昼、午後（女）", eng: "afternoon", ex: "दोपहर दो बजे मिलते हैं।", exRom: "dopahar do baje milte haiṁ.", exJa: "午後2時に会いましょう。" },
      { hi: "आसपास", rom: "āspās", ja: "近く、あたり", eng: "nearby", ex: "स्टेशन के आसपास कोई अच्छा कैफ़े है?", exRom: "sṭeshan ke āspās koī achchhā kaife hai?", exJa: "駅の近くにいいカフェはありますか。" },
      { hi: "मैसेज", rom: "maisej", ja: "メッセージ（男）", eng: "message", ex: "पहुँचकर मैसेज कीजिए।", exRom: "pahuṁchkar maisej kījie.", exJa: "着いたらメッセージをください。" },
      { hi: "याद दिलाना", rom: "yād dilānā", ja: "思い出させる、念を押す", eng: "to remind", ex: "कृपया मुझे एक दिन पहले याद दिलाइए।", exRom: "kripayā mujhe ek din pahle yād dilāie.", exJa: "前の日に一度声をかけてください。" },
      { hi: "कैलेंडर", rom: "kailenḍar", ja: "カレンダー、予定表（男）", eng: "calendar", ex: "एक मिनट, मैं अपना कैलेंडर देखता हूँ।", exRom: "ek minaṭ, maiṁ apnā kailenḍar dekhtā hūṁ.", exJa: "ちょっと待ってください、予定表を見ます。" },
      { hi: "वीकेंड", rom: "vīkenḍ", ja: "週末（男）", eng: "weekend", ex: "इस वीकेंड आप क्या कर रहे हैं?", exRom: "is vīkenḍ āp kyā kar rahe haiṁ?", exJa: "今週末は何をなさる予定ですか。" },
      { hi: "ट्रैफ़िक", rom: "ṭraifik", ja: "交通量、渋滞（男）", eng: "traffic", ex: "दिल्ली में शाम को बहुत ट्रैफ़िक होता है।", exRom: "Dillī meṁ shām ko bahut ṭraifik hotā hai.", exJa: "デリーは夕方とても混みます。" }
    ],
    sentences: [
      { ja: "どの日がご都合よろしいですか。", hi: "आपके लिए कौन-सा दिन ठीक रहेगा?", rom: "āpke lie kaun-sā din ṭhīk rahegā?", eng: "Which day would suit you?" },
      { ja: "木曜日の午後はいかがですか。", hi: "गुरुवार दोपहर कैसा रहेगा?", rom: "guruvār dopahar kaisā rahegā?", eng: "How about Thursday afternoon?" },
      { ja: "3時にホテルのロビーで会いましょうか。", hi: "क्या हम तीन बजे होटल की लॉबी में मिलें?", rom: "kyā ham tīn baje hoṭal kī lobī meṁ mileṁ?", eng: "Shall we meet in the hotel lobby at three?" },
      { ja: "あなたに会うためにデリーへ行きます。", hi: "मैं आपसे मिलने के लिए दिल्ली जाऊँगा।", rom: "maiṁ āpse milne ke lie Dillī jāūṁgā.", eng: "I'll go to Delhi to meet you." },
      { ja: "新しいお客さんに会うために、ベンガルールにも行きます。", hi: "नए क्लाइंट से मिलने के लिए मैं बेंगलुरु भी जाऊँगा।", rom: "nae klāinṭ se milne ke lie maiṁ Bengaluru bhī jāūṁgā.", eng: "I'll also go to Bengaluru to meet a new client." },
      { ja: "すみません、会議を1時間遅らせてもいいですか。", hi: "माफ़ कीजिए, क्या हम मीटिंग एक घंटा आगे बढ़ा सकते हैं?", rom: "māf kījie, kyā ham mīṭing ek ghanṭā āge baṛhā sakte haiṁ?", eng: "Sorry, can we push the meeting back by an hour?" },
      { ja: "フライトが遅れているので、少し遅れます。", hi: "मेरी फ़्लाइट लेट है, इसलिए मुझे थोड़ी देर होगी।", rom: "merī flāiṭ leṭ hai, islie mujhe thoṛī der hogī.", eng: "My flight is late, so I'll be a little late." },
      { ja: "着いたら WhatsApp でメッセージします。", hi: "पहुँचकर मैं आपको व्हाट्सऐप पर मैसेज करूँगा।", rom: "pahuṁchkar maiṁ āpko vhāṭsaip par maisej karūṁgā.", eng: "I'll message you on WhatsApp when I arrive." },
      { ja: "渋滞していたら、メトロで行きましょう。", hi: "अगर ट्रैफ़िक हो, तो मेट्रो से चलें।", rom: "agar ṭraifik ho, to meṭro se chaleṁ.", eng: "If there's traffic, let's go by metro." },
      { ja: "では、金曜日の朝10時、ホテルの前で決まりですね。", hi: "तो, शुक्रवार सुबह दस बजे, होटल के सामने, पक्का?", rom: "to, shukravār subah das baje, hoṭal ke sāmne, pakkā?", eng: "So, Friday at 10 a.m., in front of the hotel. Confirmed?" }
    ],
    dialogue: {
      title: "ラージさんと会う日を決めて、当日に変更する",
      lines: [
        { s: "B", name: "Raj", hi: "आकिहिरो जी, आप दिल्ली कब आ रहे हैं?", rom: "Ākihiro jī, āp Dillī kab ā rahe haiṁ?", ja: "あきひろさん、デリーにはいつ来るんですか。", eng: "Akihiro, when are you coming to Delhi?" },
        { s: "A", name: "Akihiro", hi: "मैं अगले बुधवार को पहुँचूँगा। आपसे मिलने के लिए मैंने गुरुवार ख़ाली रखा है।", rom: "maiṁ agle budhvār ko pahuṁchūṁgā. āpse milne ke lie maiṁne guruvār khālī rakhā hai.", ja: "来週の水曜日に着きます。ラージさんに会うために木曜日を空けてあります。", eng: "I'll arrive next Wednesday. I've kept Thursday free to meet you." },
        { s: "B", name: "Raj", hi: "बहुत बढ़िया! गुरुवार को मैं भी फ़्री हूँ।", rom: "bahut baṛhiyā! guruvār ko maiṁ bhī frī hūṁ.", ja: "いいですね！木曜日なら私も空いています。", eng: "Excellent! I'm free on Thursday too." },
        { s: "A", name: "Akihiro", hi: "तो क्या हम दोपहर एक बजे मिलें? साथ में खाना भी खा लेंगे।", rom: "to kyā ham dopahar ek baje mileṁ? sāth meṁ khānā bhī khā leṁge.", ja: "では、お昼の1時に会いましょうか。一緒にご飯も食べられますし。", eng: "Then shall we meet at 1 p.m.? We can have lunch together too." },
        { s: "B", name: "Raj", hi: "एक बजे थोड़ा मुश्किल है। ढाई बजे कैसा रहेगा?", rom: "ek baje thoṛā mushkil hai. ḍhāī baje kaisā rahegā?", ja: "1時はちょっと難しいですね。2時半はどうですか。", eng: "One o'clock is a bit difficult. How about two thirty?" },
        { s: "A", name: "Akihiro", hi: "ढाई बजे ठीक है। कहाँ मिलें?", rom: "ḍhāī baje ṭhīk hai. kahāṁ mileṁ?", ja: "2時半で大丈夫です。どこで会いましょうか。", eng: "Two thirty is fine. Where shall we meet?" },
        { s: "B", name: "Raj", hi: "आपके होटल के पास एक अच्छा कैफ़े है। मैं लोकेशन भेज दूँगा।", rom: "āpke hoṭal ke pās ek achchhā kaife hai. maiṁ lokeshan bhej dūṁgā.", ja: "ホテルの近くにいいカフェがあります。位置情報を送りますね。", eng: "There's a nice café near your hotel. I'll send you the location." },
        { s: "A", name: "Akihiro", hi: "धन्यवाद। अगर फ़्लाइट लेट हुई, तो मैं आपको मैसेज करूँगा।", rom: "dhanyavād. agar flāiṭ leṭ huī, to maiṁ āpko maisej karūṁgā.", ja: "ありがとうございます。もしフライトが遅れたら、メッセージします。", eng: "Thank you. If my flight is late, I'll message you." },
        { s: "B", name: "Raj", hi: "ठीक है। और उस दिन ट्रैफ़िक का ध्यान रखिए।", rom: "ṭhīk hai. aur us din ṭraifik kā dhyān rakhie.", ja: "わかりました。それと、その日は渋滞に気をつけてくださいね。", eng: "Okay. And watch out for the traffic that day." },
        { s: "A", name: "Akihiro", hi: "जी, मैं मेट्रो से आऊँगा। तो गुरुवार ढाई बजे, पक्का?", rom: "jī, maiṁ meṭro se āūṁgā. to guruvār ḍhāī baje, pakkā?", ja: "はい、メトロで行きます。では木曜日の2時半で決まりですね？", eng: "Yes, I'll come by metro. So, Thursday at two thirty, confirmed?" },
        { s: "B", name: "Raj", hi: "पक्का! मिलते हैं, आकिहिरो जी।", rom: "pakkā! milte haiṁ, Ākihiro jī.", ja: "決まりです！お会いしましょう、あきひろさん。", eng: "Confirmed! See you, Akihiro." },
        { s: "A", name: "Akihiro", hi: "राज जी, माफ़ कीजिए, मेरी फ़्लाइट तीन घंटे लेट है।", rom: "Rāj jī, māf kījie, merī flāiṭ tīn ghanṭe leṭ hai.", ja: "（水曜日に）ラージさん、すみません、フライトが3時間遅れています。", eng: "(On Wednesday) Raj, sorry, my flight is three hours late." },
        { s: "A", name: "Akihiro", hi: "क्या कल हम ढाई की जगह चार बजे मिल सकते हैं?", rom: "kyā kal ham ḍhāī kī jagah chār baje mil sakte haiṁ?", ja: "明日は2時半ではなく、4時に会えますか。", eng: "Could we meet at four tomorrow instead of two thirty?" },
        { s: "B", name: "Raj", hi: "कोई बात नहीं! चार बजे मिलते हैं। आराम से आइए।", rom: "koī bāt nahīṁ! chār baje milte haiṁ. ārām se āie.", ja: "大丈夫ですよ！4時に会いましょう。気をつけて、ゆっくり来てください。", eng: "No problem! See you at four. Take your time." }
      ]
    },
    writing: "インドの方へ、会う約束のメッセージを4文で書きましょう。①提案 ②目的 ③場所 ④確認。型：क्या हम … को … बजे मिलें? / मैं आपसे मिलने के लिए … आऊँगा। / … के सामने मिलते हैं। / तो, … पक्का?（ローマ字：kyā ham … ko … baje mileṁ? / maiṁ āpse milne ke lie … āūṁgā. / … ke sāmne milte haiṁ. / to, … pakkā?）。",
    speaking: "自分の実際の予定表を見ながら、①会う日を提案する ②相手に「その日は難しい」と言われたと想定して別の日を出す ③当日「30分遅れます」と連絡する、の3場面を声に出して練習しましょう。"
  },
  {
    week: 46,
    title: "ボリウッドの台詞で聞き取り",
    scene: "映画館でラージさんと映画を見る",
    cefr: "B1",
    goal: "映画やドラマの तू・तुम を使ったくだけた台詞を聞いて気持ちがわかり、自分は आप でていねいに感想を言える。",
    grammar: {
      title: "आप・तुम・तू の3つの「あなた」と感情表現",
      points: [
        "ヒンディー語の「あなた」は3段階です。आप（ていねい・目上・初対面）、तुम（友だち・同年代・家族）、तू（とても親しい相手・子ども・神さま、またはけんか）。日本語の「あなた・きみ・おまえ」に近いですが、तू は親しみが強いとき（幼なじみ・母と子）にも使われるので、いつも失礼とは限りません。映画ではこの切り替えで、2人の距離や気持ちを表します。岩田さん本人は、これまでどおり आप で話せば大丈夫です。",
        "動詞の形は主語ごとに変わります。आप हैं／तुम हो／तू है。命令形は आप आइए／तुम आओ／तू आ（語幹だけ）。未来形は आप करेंगे／तुम करोगे／तू करेगा。「君の」は तुम्हारा、「おまえの」は तेरा、「君に」は तुम्हें、「おまえに」は तुझे です。聞き取りでは文の最後（हो か है か हैं か）を聞くと、誰にどんな距離で話しているかがわかります。",
        "映画の台詞には呼びかけと間投詞がたくさん出てきます。अरे（おい、あれ）、यार（なあ、おまえ）、भाई（兄弟、友よ）、बस（もういい、それだけ）、चल（さあ、行こう）、क़सम से（誓って、本当に）。日本語の「ねえ」「ほら」と同じで、意味より気持ちを伝える言葉です。अबे のように乱暴な呼びかけもありますが、聞いてわかるだけにして、自分では使いません。",
        "感情を表す決まった形も覚えましょう。मुझे तुम पर गर्व है（君を誇りに思う）、मुझे तुम्हारी याद आएगी（君がいなくなると寂しい）、मुझे माफ़ कर दो（許して）、डरो मत（怖がらないで）、वादा करो（約束して）。「気持ちを持つ人＋को（मुझे）」の形は、第1期の मुझे पसंद है と同じ考え方です。",
        "映画らしい言葉には、ウルドゥー語から来た詩的な単語が多く出てきます。दिल（心）、ज़िंदगी（人生）、दोस्ती（友情）、जुदाई（別れ）、वादा（約束）。日常会話より少し大げさですが、歌や台詞を楽しむにはとても大事な言葉です。"
      ],
      examples: [
        { hi: "अरे यार, तुम कहाँ थे?", rom: "are yār, tum kahāṁ the?", ja: "おい、どこにいたんだよ？（友だちに）", eng: "Hey man, where were you?" },
        { hi: "तू मेरा सबसे अच्छा दोस्त है।", rom: "tū merā sabse achchhā dost hai.", ja: "おまえは俺のいちばんの親友だ。", eng: "You're my best friend." },
        { hi: "तुम चिंता मत करो, सब ठीक हो जाएगा।", rom: "tum chintā mat karo, sab ṭhīk ho jāegā.", ja: "心配しないで、全部うまくいくよ。", eng: "Don't worry, everything will be fine." },
        { hi: "मुझे तुम पर गर्व है, बेटा।", rom: "mujhe tum par garv hai, beṭā.", ja: "おまえを誇りに思うよ。（親から子へ）", eng: "I'm proud of you, son." },
        { hi: "रुको! मेरी बात तो सुनो।", rom: "ruko! merī bāt to suno.", ja: "待って！私の話も聞いてよ。", eng: "Wait! At least listen to me." },
        { hi: "आप चिंता मत कीजिए, मैं आपकी मदद करूँगा।", rom: "āp chintā mat kījie, maiṁ āpkī madad karūṁgā.", ja: "（ていねいに）ご心配なく、私がお手伝いします。", eng: "Please don't worry, I'll help you." }
      ],
      tip: "台詞を聞いたら、まず文の最後が हो・है・हैं のどれかを聞き分けましょう。次に自分で同じ文を आप の形に言い直すと、聞く力と話す力が同時に伸びます。"
    },
    vocab: [
      { hi: "तू", rom: "tū", ja: "おまえ（とても親しい・くだけた）", eng: "you (intimate)", ex: "तू कब आया?", exRom: "tū kab āyā?", exJa: "おまえ、いつ来たんだ？" },
      { hi: "तुम", rom: "tum", ja: "きみ（友だち・家族）", eng: "you (familiar)", ex: "तुम कैसे हो?", exRom: "tum kaise ho?", exJa: "元気？" },
      { hi: "तुम्हारा", rom: "tumhārā", ja: "きみの", eng: "your (familiar)", ex: "यह तुम्हारा घर भी है।", exRom: "yah tumhārā ghar bhī hai.", exJa: "ここはきみの家でもあるんだよ。" },
      { hi: "तेरा", rom: "terā", ja: "おまえの", eng: "your (intimate)", ex: "तेरा फ़ोन कहाँ है?", exRom: "terā fon kahāṁ hai?", exJa: "おまえの電話はどこだ？" },
      { hi: "अरे", rom: "are", ja: "おい、あれっ（驚き・呼びかけ）", eng: "hey, oh", ex: "अरे, तुम यहाँ?", exRom: "are, tum yahāṁ?", exJa: "あれっ、きみがここに？" },
      { hi: "दिल", rom: "dil", ja: "心、ハート（男）", eng: "heart", ex: "आज मेरा दिल बहुत ख़ुश है।", exRom: "āj merā dil bahut khush hai.", exJa: "今日は心からうれしいです。" },
      { hi: "दोस्ती", rom: "dostī", ja: "友情（女）", eng: "friendship", ex: "हमारी दोस्ती बीस साल पुरानी है।", exRom: "hamārī dostī bīs sāl purānī hai.", exJa: "私たちの友情は20年になります。" },
      { hi: "याद आना", rom: "yād ānā", ja: "恋しくなる、思い出す", eng: "to miss", ex: "मुझे तुम्हारी बहुत याद आएगी।", exRom: "mujhe tumhārī bahut yād āegī.", exJa: "きみがいないととても寂しくなるよ。" },
      { hi: "गर्व", rom: "garv", ja: "誇り（男）", eng: "pride", ex: "मुझे तुम पर गर्व है।", exRom: "mujhe tum par garv hai.", exJa: "きみを誇りに思う。" },
      { hi: "ग़ुस्सा", rom: "ghussā", ja: "怒り（男）／怒っている", eng: "anger", ex: "तुम मुझसे ग़ुस्सा हो?", exRom: "tum mujhse ghussā ho?", exJa: "私に怒ってるの？" },
      { hi: "क़सम", rom: "qasam", ja: "誓い（女）", eng: "oath", ex: "क़सम से, मैंने कुछ नहीं किया!", exRom: "qasam se, maiṁne kuchh nahīṁ kiyā!", exJa: "誓って、ぼくは何もしてないよ！" },
      { hi: "वादा", rom: "vādā", ja: "約束（男）", eng: "promise", ex: "वादा करो, तुम वापस आओगे।", exRom: "vādā karo, tum vāpas āoge.", exJa: "約束して、戻ってくるって。" },
      { hi: "जुदाई", rom: "judāī", ja: "別れ、離ればなれ（女）", eng: "separation", ex: "जुदाई का दर्द बहुत बड़ा होता है।", exRom: "judāī kā dard bahut baṛā hotā hai.", exJa: "別れのつらさはとても大きいものです。" },
      { hi: "आँसू", rom: "āṁsū", ja: "涙（男）", eng: "tear", ex: "उसकी आँखों में आँसू थे।", exRom: "uskī āṁkhoṁ meṁ āṁsū the.", exJa: "その人の目には涙がありました。" },
      { hi: "ज़िंदगी", rom: "zindagī", ja: "人生（女）", eng: "life", ex: "ज़िंदगी बहुत छोटी है, यार।", exRom: "zindagī bahut chhoṭī hai, yār.", exJa: "人生は短いんだぜ。" },
      { hi: "रिश्ता", rom: "rishtā", ja: "関係、縁（男）", eng: "relationship", ex: "यह रिश्ता बहुत ख़ास है।", exRom: "yah rishtā bahut khās hai.", exJa: "この縁はとても特別です。" },
      { hi: "माफ़ करना", rom: "māf karnā", ja: "許す", eng: "to forgive", ex: "मुझे माफ़ कर दो।", exRom: "mujhe māf kar do.", exJa: "許して。" },
      { hi: "रुकना", rom: "ruknā", ja: "止まる、待つ", eng: "to stop, wait", ex: "रुको! मत जाओ।", exRom: "ruko! mat jāo.", exJa: "待って！行かないで。" },
      { hi: "डरना", rom: "ḍarnā", ja: "怖がる", eng: "to be afraid", ex: "डरो मत, मैं तुम्हारे साथ हूँ।", exRom: "ḍaro mat, maiṁ tumhāre sāth hūṁ.", exJa: "怖がらないで、私がそばにいるよ。" },
      { hi: "हमेशा", rom: "hameshā", ja: "いつも", eng: "always", ex: "तुम हमेशा देर से आते हो!", exRom: "tum hameshā der se āte ho!", exJa: "きみはいつも遅れてくるね！" }
    ],
    sentences: [
      { ja: "おい、どこにいたんだよ？（友だちに）", hi: "अरे यार, तुम कहाँ थे?", rom: "are yār, tum kahāṁ the?", eng: "Hey man, where were you?" },
      { ja: "心配しないで、全部うまくいくよ。", hi: "तुम चिंता मत करो, सब ठीक हो जाएगा।", rom: "tum chintā mat karo, sab ṭhīk ho jāegā.", eng: "Don't worry, everything will be fine." },
      { ja: "きみがいないと、とても寂しくなるよ。", hi: "मुझे तुम्हारी बहुत याद आएगी।", rom: "mujhe tumhārī bahut yād āegī.", eng: "I'll miss you a lot." },
      { ja: "父さんは、おまえを誇りに思っているよ。", hi: "पापा को तुझ पर गर्व है।", rom: "pāpā ko tujh par garv hai.", eng: "Dad is proud of you." },
      { ja: "約束して、必ず戻ってくるって。", hi: "वादा करो कि तुम ज़रूर वापस आओगे।", rom: "vādā karo ki tum zarūr vāpas āoge.", eng: "Promise that you'll definitely come back." },
      { ja: "ごめん、許してくれよ。", hi: "मुझे माफ़ कर दो, यार।", rom: "mujhe māf kar do, yār.", eng: "Forgive me, buddy." },
      { ja: "10年ぶりだな、友よ！", hi: "दस साल बाद मिले हैं, दोस्त!", rom: "das sāl bād mile haiṁ, dost!", eng: "We're meeting after ten years, my friend!" },
      { ja: "（ていねいに）ご心配なく、私がお手伝いします。", hi: "आप चिंता मत कीजिए, मैं आपकी मदद करूँगा।", rom: "āp chintā mat kījie, maiṁ āpkī madad karūṁgā.", eng: "Please don't worry, I'll help you." },
      { ja: "この映画の台詞は速いですが、少しわかりました。", hi: "इस फ़िल्म के डायलॉग तेज़ हैं, लेकिन मैं थोड़ा समझ पाया।", rom: "is film ke ḍāyalog tez haiṁ, lekin maiṁ thoṛā samajh pāyā.", eng: "The dialogues in this film are fast, but I could understand a little." },
      { ja: "तुम と तू の違いを教えていただけますか。", hi: "क्या आप मुझे तुम और तू का फ़र्क़ बता सकते हैं?", rom: "kyā āp mujhe tum aur tū kā farq batā sakte haiṁ?", eng: "Could you tell me the difference between tum and tu?" }
    ],
    dialogue: {
      title: "映画館で：再会の場面を聞き取る（台詞は教材用の創作です）",
      lines: [
        { s: "B", name: "Raj", hi: "आकिहिरो जी, यह सीन देखिए। दो पुराने दोस्त दस साल बाद मिल रहे हैं।", rom: "Ākihiro jī, yah sīn dekhie. do purāne dost das sāl bād mil rahe haiṁ.", ja: "あきひろさん、この場面を見てください。昔の友だち2人が10年ぶりに会うんです。", eng: "Akihiro, watch this scene. Two old friends are meeting after ten years." },
        { s: "B", name: "Vikram（映画）", hi: "अरे कबीर! तू? इतने साल कहाँ था, यार?", rom: "are Kabīr! tū? itne sāl kahāṁ thā, yār?", ja: "おい、カビール！おまえか？何年もどこにいたんだよ？", eng: "Hey, Kabir! You? Where were you all these years, man?" },
        { s: "B", name: "Kabir（映画）", hi: "माफ़ कर दे, भाई। मैं तुझे बहुत याद करता था।", rom: "māf kar de, bhāī. maiṁ tujhe bahut yād kartā thā.", ja: "許してくれ、兄弟。ずっとおまえのことを思い出してたんだ。", eng: "Forgive me, brother. I used to miss you a lot." },
        { s: "A", name: "Akihiro", hi: "राज जी, वे तू क्यों बोल रहे हैं? क्या यह बदतमीज़ी नहीं है?", rom: "Rāj jī, ve tū kyoṁ bol rahe haiṁ? kyā yah badtamīzī nahīṁ hai?", ja: "ラージさん、どうして2人は तू を使っているんですか。失礼じゃないんですか。", eng: "Raj, why are they saying 'tu'? Isn't that rude?" },
        { s: "B", name: "Raj", hi: "नहीं, बचपन के दोस्त तू बोलते हैं। इसमें बहुत प्यार है।", rom: "nahīṁ, bachpan ke dost tū bolte haiṁ. ismeṁ bahut pyār hai.", ja: "いいえ、幼なじみは तू を使うんです。そこにはたくさんの愛情があるんですよ。", eng: "No, childhood friends say 'tu'. There's a lot of affection in it." },
        { s: "B", name: "Vikram（映画）", hi: "चल, अब कहीं मत जाना। वादा कर!", rom: "chal, ab kahīṁ mat jānā. vādā kar!", ja: "さあ、もうどこにも行くなよ。約束しろ！", eng: "Come on, don't go anywhere now. Promise!" },
        { s: "A", name: "Akihiro", hi: "अच्छा, वादा कर मतलब आप वादा कीजिए, है ना?", rom: "achchhā, vādā kar matlab āp vādā kījie, hai nā?", ja: "なるほど、वादा कर は आप なら वादा कीजिए ということですよね？", eng: "I see, 'vada kar' means 'aap vada kijiye', right?" },
        { s: "B", name: "Raj", hi: "बिल्कुल सही! आप बहुत अच्छा समझ रहे हैं।", rom: "bilkul sahī! āp bahut achchhā samajh rahe haiṁ.", ja: "そのとおり！とてもよくわかっていますね。", eng: "Exactly right! You're understanding very well." },
        { s: "B", name: "Mother（映画）", hi: "बेटा, डरो मत। मैं हमेशा तुम्हारे साथ हूँ।", rom: "beṭā, ḍaro mat. maiṁ hameshā tumhāre sāth hūṁ.", ja: "（別の場面で母が）怖がらないで。母さんはいつもあなたのそばにいるよ。", eng: "Son, don't be afraid. I'm always with you." },
        { s: "A", name: "Akihiro", hi: "अब माँ तुम बोल रही हैं, तू नहीं।", rom: "ab māṁ tum bol rahī haiṁ, tū nahīṁ.", ja: "今度はお母さんは तू ではなく तुम を使っていますね。", eng: "Now the mother is saying 'tum', not 'tu'." },
        { s: "B", name: "Raj", hi: "हाँ, माँ-बाप बच्चों को तुम या तू, दोनों बोलते हैं।", rom: "hāṁ, māṁ-bāp bachchoṁ ko tum yā tū, donoṁ bolte haiṁ.", ja: "ええ、親は子どもに तुम も तू も、どちらも使います。", eng: "Yes, parents use both 'tum' and 'tu' with their children." },
        { s: "A", name: "Akihiro", hi: "फ़िल्म बहुत भावुक है। मेरी आँखों में भी आँसू आ गए।", rom: "film bahut bhāvuk hai. merī āṁkhoṁ meṁ bhī āṁsū ā gae.", ja: "とても感動的な映画ですね。私も涙が出てきました。", eng: "The film is very emotional. Tears came to my eyes too." },
        { s: "B", name: "Raj", hi: "हा हा, यही तो बॉलीवुड है, आकिहिरो जी!", rom: "hā hā, yahī to bolīvuḍ hai, Ākihiro jī!", ja: "ははは、それこそがボリウッドですよ、あきひろさん！", eng: "Ha ha, that's Bollywood for you, Akihiro!" }
      ]
    },
    writing: "友情の場面の台詞を自分で3行作りましょう（実在の映画の台詞はまねしない）。まず तुम で書き、次に同じ内容を आप で書き直します。型：तुम चिंता मत करो। → आप चिंता मत कीजिए। / वादा करो कि तुम … आओगे। → वादा कीजिए कि आप … आएँगे।（ローマ字：tum chintā mat karo. → āp chintā mat kījie. / vādā karo ki tum … āoge. → vādā kījie ki āp … āeṁge.）。",
    speaking: "ヒンディー語の映画やドラマを字幕つきで5分見て、聞こえた तू・तुम・आप と、अरे・यार などの呼びかけを数えてみましょう。そのあと、見た感想を आप の形で3文、声に出して言ってみてください（例：फ़िल्म बहुत भावुक थी।）。"
  },
  {
    week: 47,
    title: "ニュースの見出しを読む",
    scene: "朝、ラージさんと新聞・ニュースアプリを読む",
    cefr: "B1",
    goal: "天気・交通・祭り・経済・スポーツの短い見出しを読んで意味をつかみ、受け身の文で内容を説明できる。",
    grammar: {
      title: "受け身 -या गया・-ई जाएगी と見出しの書き言葉",
      points: [
        "受け身は「他動詞の過去分詞（खोला・किया・मनाया）＋ जाना の変化」で作ります。第3期で習った「〜される（習慣）」 किया जाता है に加えて、過去は किया गया（〜された）、未来は किया जाएगा（〜される予定だ）です。日本語の「〜される」と同じく、だれがしたかを言わないことが多いのが特徴です。",
        "受け身では、2つの部分がどちらも「されるもの（主語）」の性・数に合わせて変わります。पुल खोला गया（橋が開通した・男単）、सड़क खोली गई（道路が開通した・女単）、नए नियम लागू किए गए（新しい規則が施行された・男複）、छुट्टियाँ घोषित की गईं（休みが発表された・女複）。未来も同じで、प्रतियोगिता आयोजित की जाएगी（大会が開催される・女単）となります。",
        "だれがしたかを言いたいときは द्वारा（〜によって）を使います。सरकार द्वारा नई योजना शुरू की गई（政府によって新しい制度が始められた）。ने 構文の सरकार ने … शुरू की と意味はほぼ同じですが、द्वारा の方が改まった書き言葉で、ニュースや公式の文によく出ます。",
        "見出しは短くするため、है・था・गया などを省くことがよくあります。दिल्ली में भारी बारिश（デリーで大雨）、शहर में तीन दिन का उत्सव शुरू（市で3日間の祭りが開幕）。また、… की संभावना（〜の見込み）、… में बढ़ोतरी（〜が増加）、… में गिरावट（〜が下落）のように名詞で終わる形が多く、日本語の新聞の見出し「〜の見込み」「〜が増加」ととてもよく似ています。",
        "読むときは、①場所（में の前）②何が（主語）③どうなった（最後の動詞か名詞）の順に拾いましょう。数字と地名が先に目に入るので、そこを手がかりにします。わからない改まった言葉（घोषणा・आयोजित など）は、まず話し言葉の言いかえ（बताया・किया）で考えると意味がつかめます。"
      ],
      examples: [
        { hi: "दिल्ली में नया मेट्रो स्टेशन खोला गया।", rom: "Dillī meṁ nayā meṭro sṭeshan kholā gayā.", ja: "デリーで新しいメトロの駅が開業しました。", eng: "A new metro station was opened in Delhi." },
        { hi: "शहर में नई सड़क खोली गई।", rom: "shahar meṁ naī saṛak kholī gaī.", ja: "市内で新しい道路が開通しました。", eng: "A new road was opened in the city." },
        { hi: "नई ट्रेन सेवा अगले महीने शुरू की जाएगी।", rom: "naī ṭren sevā agle mahīne shurū kī jāegī.", ja: "新しい列車の運行が来月始まります。", eng: "A new train service will be started next month." },
        { hi: "दिवाली पर स्कूलों में छुट्टियाँ घोषित की गईं।", rom: "Divālī par skūloṁ meṁ chhuṭṭiyāṁ ghoshit kī gaīṁ.", ja: "ディワリに合わせて、学校の休みが発表されました。", eng: "Holidays were announced in schools for Diwali." },
        { hi: "सरकार द्वारा नई बस योजना शुरू की गई।", rom: "sarkār dvārā naī bas yojnā shurū kī gaī.", ja: "政府によって新しいバスの制度が始められました。", eng: "A new bus scheme was launched by the government." },
        { hi: "अगले हफ़्ते भारी बारिश की संभावना।", rom: "agle hafte bhārī bārish kī sambhāvnā.", ja: "来週、大雨の見込み。", eng: "Heavy rain likely next week." }
      ],
      tip: "受け身は「गया／गई／गए／गईं」の4つの語尾を、前の過去分詞の語尾（-ा／-ी／-ए／-ी）とセットで覚えましょう。खोला गया・खोली गई のように、母音の音がそろうと覚えやすくなります。"
    },
    vocab: [
      { hi: "समाचार", rom: "samāchār", ja: "ニュース（男）※改まった言い方", eng: "news", ex: "मैं रोज़ सुबह हिंदी समाचार सुनता हूँ।", exRom: "maiṁ roz subah hindī samāchār suntā hūṁ.", exJa: "毎朝ヒンディー語のニュースを聞いています。" },
      { hi: "ख़बर", rom: "khabar", ja: "知らせ、ニュース（女）", eng: "news", ex: "आज की सबसे बड़ी ख़बर क्या है?", exRom: "āj kī sabse baṛī khabar kyā hai?", exJa: "今日いちばん大きなニュースは何ですか。" },
      { hi: "सुर्ख़ी", rom: "surkhī", ja: "見出し（女）", eng: "headline", ex: "यह ख़बर आज की सुर्ख़ी है।", exRom: "yah khabar āj kī surkhī hai.", exJa: "このニュースが今日の見出しです。" },
      { hi: "सरकार", rom: "sarkār", ja: "政府（女）", eng: "government", ex: "सरकार ने नई योजना शुरू की।", exRom: "sarkār ne naī yojnā shurū kī.", exJa: "政府が新しい制度を始めました。" },
      { hi: "बाज़ार", rom: "bāzār", ja: "市場、マーケット（男）", eng: "market", ex: "त्योहार से पहले बाज़ार में भीड़ बढ़ी।", exRom: "tyohār se pahle bāzār meṁ bhīṛ baṛhī.", exJa: "祭りの前に市場の人出が増えました。" },
      { hi: "घोषणा", rom: "ghoshṇā", ja: "発表（女）", eng: "announcement", ex: "स्कूल ने छुट्टी की घोषणा की।", exRom: "skūl ne chhuṭṭī kī ghoshṇā kī.", exJa: "学校が休みを発表しました。" },
      { hi: "घोषित", rom: "ghoshit", ja: "発表された", eng: "announced", ex: "परिणाम कल घोषित किए जाएँगे।", exRom: "pariṇām kal ghoshit kie jāeṁge.", exJa: "結果は明日発表されます。" },
      { hi: "योजना", rom: "yojnā", ja: "計画、制度（女）", eng: "plan, scheme", ex: "शहर के लिए नई बस योजना।", exRom: "shahar ke lie naī bas yojnā.", exJa: "市の新しいバス計画。" },
      { hi: "लागू", rom: "lāgū", ja: "施行された、適用される", eng: "in effect", ex: "नया नियम आज से लागू हुआ।", exRom: "nayā niyam āj se lāgū huā.", exJa: "新しい規則が今日から施行されました。" },
      { hi: "आयोजित", rom: "āyojit", ja: "開催された", eng: "organized", ex: "योग प्रतियोगिता रविवार को आयोजित की जाएगी।", exRom: "yog pratiyogitā ravivār ko āyojit kī jāegī.", exJa: "ヨガ大会は日曜日に開催されます。" },
      { hi: "संभावना", rom: "sambhāvnā", ja: "見込み、可能性（女）", eng: "likelihood", ex: "कल बारिश की संभावना है।", exRom: "kal bārish kī sambhāvnā hai.", exJa: "明日は雨の見込みです。" },
      { hi: "अनुमान", rom: "anumān", ja: "予想、予報（男）", eng: "forecast", ex: "मौसम विभाग का अनुमान: तीन दिन तेज़ धूप।", exRom: "mausam vibhāg kā anumān: tīn din tez dhūp.", exJa: "気象局の予報：3日間強い日差し。" },
      { hi: "बढ़ोतरी", rom: "baṛhotarī", ja: "増加、上昇（女）", eng: "increase", ex: "पर्यटकों की संख्या में बढ़ोतरी।", exRom: "paryaṭkoṁ kī sankhyā meṁ baṛhotarī.", exJa: "観光客の数が増加。" },
      { hi: "गिरावट", rom: "girāvaṭ", ja: "下落、低下（女）", eng: "decline", ex: "सब्ज़ियों के दाम में गिरावट।", exRom: "sabziyoṁ ke dām meṁ girāvaṭ.", exJa: "野菜の値段が下落。" },
      { hi: "दाम", rom: "dām", ja: "値段（男）", eng: "price", ex: "प्याज़ के दाम कम हुए।", exRom: "pyāz ke dām kam hue.", exJa: "玉ねぎの値段が下がりました。" },
      { hi: "यात्री", rom: "yātrī", ja: "乗客、旅行者（男）", eng: "passenger", ex: "मेट्रो में यात्रियों की भीड़ बढ़ी।", exRom: "meṭro meṁ yātriyoṁ kī bhīṛ baṛhī.", exJa: "メトロの乗客が増えました。" },
      { hi: "प्रभावित", rom: "prabhāvit", ja: "影響を受けた", eng: "affected", ex: "बारिश से ट्रेनें प्रभावित हुईं।", exRom: "bārish se ṭreneṁ prabhāvit huīṁ.", exJa: "雨で列車に影響が出ました。" },
      { hi: "द्वारा", rom: "dvārā", ja: "〜によって", eng: "by", ex: "यह मेला शहर के लोगों द्वारा आयोजित किया गया।", exRom: "yah melā shahar ke logoṁ dvārā āyojit kiyā gayā.", exJa: "この市（いち）は町の人たちによって開かれました。" },
      { hi: "जीत", rom: "jīt", ja: "勝利（女）", eng: "victory", ex: "स्थानीय टीम की शानदार जीत।", exRom: "sthānīy ṭīm kī shāndār jīt.", exJa: "地元チームが見事な勝利。" },
      { hi: "उत्सव", rom: "utsav", ja: "祭り、祝祭（男）", eng: "festival", ex: "शहर में तीन दिन का उत्सव शुरू।", exRom: "shahar meṁ tīn din kā utsav shurū.", exJa: "市で3日間の祭りが開幕。" }
    ],
    sentences: [
      { ja: "新しいメトロの駅が開業しました。", hi: "नया मेट्रो स्टेशन खोला गया।", rom: "nayā meṭro sṭeshan kholā gayā.", eng: "A new metro station was opened." },
      { ja: "明日から新しい規則が施行されます。", hi: "कल से नए नियम लागू किए जाएँगे।", rom: "kal se nae niyam lāgū kie jāeṁge.", eng: "New rules will be implemented from tomorrow." },
      { ja: "雨のため、何本もの列車が遅れて走りました。", hi: "बारिश के कारण कई ट्रेनें देर से चलीं।", rom: "bārish ke kāraṇ kaī ṭreneṁ der se chalīṁ.", eng: "Because of the rain, many trains ran late." },
      { ja: "来週、大雨の見込み。（見出し）", hi: "अगले हफ़्ते भारी बारिश की संभावना।", rom: "agle hafte bhārī bārish kī sambhāvnā.", eng: "Heavy rain likely next week." },
      { ja: "ディワリの前、市場は買い物客でにぎわいました。", hi: "दिवाली से पहले बाज़ार में ख़रीदारों की भीड़ रही।", rom: "Divālī se pahle bāzār meṁ kharīdāroṁ kī bhīṛ rahī.", eng: "Before Diwali, the market was crowded with shoppers." },
      { ja: "野菜の値段が下がりました。", hi: "सब्ज़ियों के दाम में गिरावट आई।", rom: "sabziyoṁ ke dām meṁ girāvaṭ āī.", eng: "Vegetable prices fell." },
      { ja: "祭りの日程が発表されました。", hi: "उत्सव की तारीख़ें घोषित की गईं।", rom: "utsav kī tārīkheṁ ghoshit kī gaīṁ.", eng: "The festival dates were announced." },
      { ja: "地元のチームが決勝戦で勝ちました。", hi: "स्थानीय टीम ने फ़ाइनल मैच जीता।", rom: "sthānīy ṭīm ne fāinal maich jītā.", eng: "The local team won the final match." },
      { ja: "凧揚げ大会は日曜日に開催されます。", hi: "पतंग प्रतियोगिता रविवार को आयोजित की जाएगी।", rom: "patang pratiyogitā ravivār ko āyojit kī jāegī.", eng: "The kite competition will be held on Sunday." },
      { ja: "日本のニュースでも、愛媛のみかんが紹介されました。", hi: "जापान की ख़बरों में एहिमे के संतरों के बारे में बताया गया।", rom: "Jāpān kī khabaroṁ meṁ Ehime ke santroṁ ke bāre meṁ batāyā gayā.", eng: "Ehime's mandarin oranges were featured in Japanese news too." }
    ],
    dialogue: {
      title: "朝の新聞を一緒に読む（見出しは教材用の架空の例です）",
      lines: [
        { s: "B", name: "Raj", hi: "आकिहिरो जी, आज का अख़बार देखिए। हिंदी में पढ़ सकते हैं?", rom: "Ākihiro jī, āj kā akhbār dekhie. hindī meṁ paṛh sakte haiṁ?", ja: "あきひろさん、今日の新聞を見てください。ヒンディー語で読めますか。", eng: "Akihiro, look at today's newspaper. Can you read it in Hindi?" },
        { s: "A", name: "Akihiro", hi: "कोशिश करता हूँ। पहली सुर्ख़ी है: दिल्ली में नया मेट्रो रूट शुरू।", rom: "koshish kartā hūṁ. pahlī surkhī hai: Dillī meṁ nayā meṭro rūṭ shurū.", ja: "やってみます。最初の見出しは「デリーで新しいメトロ路線が開業」。", eng: "I'll try. The first headline is: New metro route starts in Delhi." },
        { s: "B", name: "Raj", hi: "बहुत अच्छे! इसका मतलब क्या है?", rom: "bahut achchhe! iskā matlab kyā hai?", ja: "すばらしい！どういう意味ですか。", eng: "Very good! What does it mean?" },
        { s: "A", name: "Akihiro", hi: "मतलब, एक नया मेट्रो रूट शुरू किया गया। है ना?", rom: "matlab, ek nayā meṭro rūṭ shurū kiyā gayā. hai nā?", ja: "つまり、新しいメトロの路線が始められた、ということですよね？", eng: "It means a new metro route was started, right?" },
        { s: "B", name: "Raj", hi: "बिल्कुल। सुर्ख़ियों में है या था अक्सर नहीं लिखते।", rom: "bilkul. surkhiyoṁ meṁ hai yā thā aksar nahīṁ likhte.", ja: "そのとおり。見出しでは है や था はたいてい書かないんです。", eng: "Exactly. In headlines, they often don't write 'hai' or 'tha'." },
        { s: "A", name: "Akihiro", hi: "अच्छा, इसलिए छोटी लगती हैं। अब दूसरी: अगले तीन दिन भारी बारिश की संभावना।", rom: "achchhā, islie chhoṭī lagtī haiṁ. ab dūsrī: agle tīn din bhārī bārish kī sambhāvnā.", ja: "なるほど、だから短く見えるんですね。次は「今後3日間、大雨の見込み」。", eng: "I see, that's why they look short. Next: Heavy rain likely for the next three days." },
        { s: "B", name: "Raj", hi: "हाँ, मौसम विभाग ने चेतावनी दी है। ट्रेनें भी प्रभावित हो सकती हैं।", rom: "hāṁ, mausam vibhāg ne chetāvnī dī hai. ṭreneṁ bhī prabhāvit ho saktī haiṁ.", ja: "ええ、気象局が注意を出しています。列車にも影響が出るかもしれません。", eng: "Yes, the weather department has issued a warning. Trains may be affected too." },
        { s: "A", name: "Akihiro", hi: "तो कल हमें जल्दी निकलना चाहिए।", rom: "to kal hameṁ jaldī nikalnā chāhie.", ja: "じゃあ、明日は早めに出たほうがいいですね。", eng: "Then we should leave early tomorrow." },
        { s: "B", name: "Raj", hi: "सही बात। और यह देखिए: दिवाली पर शहर में बड़ा मेला आयोजित किया जाएगा।", rom: "sahī bāt. aur yah dekhie: Divālī par shahar meṁ baṛā melā āyojit kiyā jāegā.", ja: "そうですね。それとこれを見てください。「ディワリに市内で大きな市（いち）が開催される」。", eng: "Right. And look at this: A big fair will be held in the city for Diwali." },
        { s: "A", name: "Akihiro", hi: "आयोजित किया जाएगा, यानी मेला होगा। मैं ज़रूर जाना चाहूँगा!", rom: "āyojit kiyā jāegā, yānī melā hogā. maiṁ zarūr jānā chāhūṁgā!", ja: "「開催される」、つまり市があるということですね。ぜひ行ってみたいです！", eng: "'Will be organized' means there will be a fair. I'd love to go!" },
        { s: "B", name: "Raj", hi: "और खेल की ख़बर: स्थानीय टीम ने फ़ाइनल जीता।", rom: "aur khel kī khabar: sthānīy ṭīm ne fāinal jītā.", ja: "それからスポーツのニュース。「地元チームが決勝で勝利」。", eng: "And sports news: The local team won the final." },
        { s: "A", name: "Akihiro", hi: "वाह! जापान में भी मैं रोज़ सुबह समाचार पढ़ता हूँ, लेकिन जापानी में।", rom: "vāh! Jāpān meṁ bhī maiṁ roz subah samāchār paṛhtā hūṁ, lekin jāpānī meṁ.", ja: "すごい！日本でも毎朝ニュースを読みますが、日本語でです。", eng: "Wow! In Japan too I read the news every morning, but in Japanese." },
        { s: "B", name: "Raj", hi: "अब से हिंदी में भी पढ़िए। हर दिन एक सुर्ख़ी!", rom: "ab se hindī meṁ bhī paṛhie. har din ek surkhī!", ja: "これからはヒンディー語でも読んでください。毎日1つの見出しを！", eng: "From now on, read in Hindi too. One headline a day!" },
        { s: "A", name: "Akihiro", hi: "अच्छा सुझाव है। कल से शुरू करूँगा।", rom: "achchhā sujhāv hai. kal se shurū karūṁgā.", ja: "いい考えですね。明日から始めます。", eng: "That's a good suggestion. I'll start tomorrow." }
      ]
    },
    writing: "愛媛や大洲の出来事を、架空の見出しにして3つ書きましょう（実在の人や事件にはしない）。受け身と見出しの形を使います。型：ओज़ू में … खोला गया। / … आयोजित की जाएगी। / … की संभावना।（ローマ字：Ozū meṁ … kholā gayā. / … āyojit kī jāegī. / … kī sambhāvnā.）例：ओज़ू में शरद उत्सव रविवार को आयोजित किया जाएगा।（Ozū meṁ sharad utsav ravivār ko āyojit kiyā jāegā.）",
    speaking: "ヒンディー語のニュースサイトやアプリで、天気・祭り・スポーツの見出しを1日1つ選び、①声に出して読む ②「場所・何が・どうなった」を日本語で言う ③ है・गया を補って普通の文として言い直す、の3つを1週間続けましょう。"
  }
]);

window.WEEKS = (window.WEEKS || []).concat([
  {
    week: 48,
    title: "ヒンディー語の動画テロップを作る",
    scene: "インドの仲間向けの短い動画に字幕を入れる",
    cefr: "B1",
    goal: "日本の風景・食べ物・あいさつ・感謝・学んだことを伝える短い動画のテロップを、短く言い切るヒンディー語で書ける。",
    grammar: {
      title: "テロップの文：呼びかけ・言い切り・誘いかけ",
      points: [
        "動画のはじめは呼びかけから。नमस्ते दोस्तों!（みなさん、こんにちは！）の दोस्तों は、दोस्त（友だち）を複数で呼びかける形です（正式なつづりは दोस्तो ですが、SNS では दोस्तों がよく使われます）。日本語の「みなさん！」と同じように文の頭に置き、「,」や「!」で区切ります。",
        "テロップは短く言い切ります。ふつうは है を文末に置きますが、यह है ओज़ू का क़िला।（これが大洲城です）のように है を前に出すと「ほら、これが〜」という紹介の調子になります。आज का विषय: जापानी खाना（今日のテーマ：日本の食べ物）のように名詞だけで止める書き方も自然です。日本語の「体言止め」と同じ感覚です。",
        "「〜しましょう」と誘うときは चलिए／आइए ＋ 現在形の複数（-ते हैं）を使います。चलिए, नाश्ता करते हैं!（さあ、朝ごはんにしましょう！）、आइए देखते हैं（では、見てみましょう）。主語の हम（私たち）は省くのがふつうです。",
        "見ている人へのお願いは आप の命令形 -इए で言います。कमेंट में बताइए（コメントで教えてください）、ज़रूर देखिए（ぜひ見てください）。ただし、商品をすすめる文や「もうかる」という文は書きません。テロップは、景色・食べ物・あいさつ・感謝・学んだことを伝えるために使います。",
        "締めは感謝と次回の予告です。देखने के लिए दिल से शुक्रिया!（見てくれて心からありがとう！）、अगली बार मिलते हैं!（また次回！）。-ने के लिए はここでは「〜してくれたことに」と感謝の理由を表します。"
      ],
      examples: [
        { hi: "नमस्ते दोस्तों! आज मैं आपको ओज़ू दिखाऊँगा।", rom: "namaste doston! āj maiṁ āpko Ozū dikhāūṁgā.", ja: "みなさん、こんにちは！今日は大洲をご案内します。", eng: "Hello, friends! Today I'll show you Ozu." },
        { hi: "यह है ओज़ू का क़िला।", rom: "yah hai Ozū kā qilā.", ja: "これが大洲城です。", eng: "This is Ozu Castle." },
        { hi: "चलिए, जापानी नाश्ता करते हैं!", rom: "chalie, jāpānī nāshtā karte haiṁ!", ja: "さあ、日本の朝ごはんを食べましょう！", eng: "Let's have a Japanese breakfast!" },
        { hi: "आज का सवाल: आपको कौन-सा मौसम पसंद है?", rom: "āj kā savāl: āpko kaun-sā mausam pasand hai?", ja: "今日の質問：どの季節が好きですか。", eng: "Today's question: Which season do you like?" },
        { hi: "अपना जवाब कमेंट में लिखिए।", rom: "apnā javāb kamenṭ meṁ likhie.", ja: "答えをコメントに書いてください。", eng: "Write your answer in the comments." },
        { hi: "देखने के लिए दिल से शुक्रिया! अगली बार मिलते हैं।", rom: "dekhne ke lie dil se shukriyā! aglī bār milte haiṁ.", ja: "見てくれて心からありがとう！また次回お会いしましょう。", eng: "Thank you so much for watching! See you next time." }
      ],
      tip: "テロップ1枚は、スマホの画面で1行におさまる長さ（だいたい5〜8語）が目安です。長い文は2枚に分け、声に出して3秒で読めるか確かめましょう。"
    },
    vocab: [
      { hi: "वीडियो", rom: "vīḍiyo", ja: "動画（男）", eng: "video", ex: "यह मेरा पहला हिंदी वीडियो है।", exRom: "yah merā pahlā hindī vīḍiyo hai.", exJa: "これは私の初めてのヒンディー語の動画です。" },
      { hi: "दर्शक", rom: "darshak", ja: "見ている人、視聴者（男）", eng: "viewer", ex: "सभी दर्शकों को नमस्ते!", exRom: "sabhī darshakoṁ ko namaste!", exJa: "見てくださっているみなさん、こんにちは！" },
      { hi: "विषय", rom: "vishay", ja: "テーマ、話題（男）", eng: "topic", ex: "आज का विषय है जापानी चाय।", exRom: "āj kā vishay hai jāpānī chāy.", exJa: "今日のテーマは日本茶です。" },
      { hi: "झलक", rom: "jhalak", ja: "ひとこま、ちらっと見えるもの（女）", eng: "glimpse", ex: "देखिए ओज़ू की एक झलक।", exRom: "dekhie Ozū kī ek jhalak.", exJa: "大洲のひとこまをご覧ください。" },
      { hi: "नज़ारा", rom: "nazārā", ja: "景色、ながめ（男）", eng: "view, scenery", ex: "यहाँ से नज़ारा बहुत ख़ूबसूरत है।", exRom: "yahāṁ se nazārā bahut khūbsūrat hai.", exJa: "ここからのながめはとても美しいです。" },
      { hi: "ख़ूबसूरत", rom: "khūbsūrat", ja: "美しい", eng: "beautiful", ex: "यह नदी कितनी ख़ूबसूरत है!", exRom: "yah nadī kitnī khūbsūrat hai!", exJa: "この川はなんて美しいのでしょう！" },
      { hi: "शांत", rom: "shānt", ja: "静かな、おだやかな", eng: "calm, quiet", ex: "सुबह का शहर बहुत शांत है।", exRom: "subah kā shahar bahut shānt hai.", exJa: "朝の町はとても静かです。" },
      { hi: "सफ़र", rom: "safar", ja: "旅、道のり（男）", eng: "journey", ex: "मेरे साथ इस सफ़र पर चलिए!", exRom: "mere sāth is safar par chalie!", exJa: "一緒にこの旅に出かけましょう！" },
      { hi: "पल", rom: "pal", ja: "瞬間、ひととき（男）", eng: "moment", ex: "यह पल मैं कभी नहीं भूलूँगा।", exRom: "yah pal maiṁ kabhī nahīṁ bhūlūṁgā.", exJa: "この瞬間はけっして忘れません。" },
      { hi: "याद", rom: "yād", ja: "思い出（女）", eng: "memory", ex: "यह मेरी सबसे प्यारी याद है।", exRom: "yah merī sabse pyārī yād hai.", exJa: "これは私のいちばん大切な思い出です。" },
      { hi: "फूल", rom: "phūl", ja: "花（男）", eng: "flower", ex: "अप्रैल में यहाँ चेरी के फूल खिलते हैं।", exRom: "aprail meṁ yahāṁ cherī ke phūl khilte haiṁ.", exJa: "4月にはここに桜が咲きます。" },
      { hi: "पतझड़", rom: "patjhaṛ", ja: "秋、落葉の季節（男）", eng: "autumn", ex: "पतझड़ में यहाँ के पत्ते लाल हो जाते हैं।", exRom: "patjhaṛ meṁ yahāṁ ke patte lāl ho jāte haiṁ.", exJa: "秋にはここの葉が赤くなります。" },
      { hi: "ज़ायक़ा", rom: "zāyqā", ja: "味わい（男）", eng: "taste, flavor", ex: "इस सूप का ज़ायक़ा बहुत हल्का है।", exRom: "is sūp kā zāyqā bahut halkā hai.", exJa: "このスープはとてもやさしい味です。" },
      { hi: "कमेंट", rom: "kamenṭ", ja: "コメント（男）", eng: "comment", ex: "अपनी राय कमेंट में लिखिए।", exRom: "apnī rāy kamenṭ meṁ likhie.", exJa: "ご意見をコメントに書いてください。" },
      { hi: "शेयर करना", rom: "sheyar karnā", ja: "シェアする、分かち合う", eng: "to share", ex: "अपने शहर की फ़ोटो भी शेयर कीजिए।", exRom: "apne shahar kī foṭo bhī sheyar kījie.", exJa: "あなたの町の写真もシェアしてください。" },
      { hi: "जुड़े रहिए", rom: "juṛe rahie", ja: "（このまま）つながっていてください", eng: "stay tuned", ex: "अगले वीडियो के लिए जुड़े रहिए!", exRom: "agle vīḍiyo ke lie juṛe rahie!", exJa: "次の動画もお楽しみに！" },
      { hi: "अगली बार", rom: "aglī bār", ja: "次回", eng: "next time", ex: "अगली बार हम मंदिर चलेंगे।", exRom: "aglī bār ham mandir chaleṁge.", exJa: "次回はお寺に行きます。" },
      { hi: "सीख", rom: "sīkh", ja: "学び、教え（女）", eng: "lesson", ex: "आज की सीख: हर दिन थोड़ा-थोड़ा।", exRom: "āj kī sīkh: har din thoṛā-thoṛā.", exJa: "今日の学び：毎日少しずつ。" },
      { hi: "दिल से", rom: "dil se", ja: "心から", eng: "from the heart", ex: "आप सबको दिल से शुक्रिया!", exRom: "āp sabko dil se shukriyā!", exJa: "みなさん、心からありがとう！" },
      { hi: "भाग", rom: "bhāg", ja: "〜編、パート（男）", eng: "part", ex: "यह जापानी खाने का पहला भाग है।", exRom: "yah jāpānī khāne kā pahlā bhāg hai.", exJa: "これは日本の食べ物編のパート1です。" }
    ],
    sentences: [
      { ja: "みなさん、こんにちは。大洲からお届けします！", hi: "नमस्ते दोस्तों, मैं ओज़ू से बोल रहा हूँ!", rom: "namaste doston, maiṁ Ozū se bol rahā hūṁ!", eng: "Hello, friends, I'm talking to you from Ozu!" },
      { ja: "今日は日本の秋をお見せします。", hi: "आज मैं आपको जापान का पतझड़ दिखाऊँगा।", rom: "āj maiṁ āpko Jāpān kā patjhaṛ dikhāūṁgā.", eng: "Today I'll show you autumn in Japan." },
      { ja: "見てください、この景色！", hi: "देखिए, यह नज़ारा!", rom: "dekhie, yah nazārā!", eng: "Look at this view!" },
      { ja: "この川はとても静かです。", hi: "यह नदी बहुत शांत है।", rom: "yah nadī bahut shānt hai.", eng: "This river is very calm." },
      { ja: "これが日本の朝ごはん：ご飯、みそ汁、そして魚です。", hi: "यह है जापानी नाश्ता: चावल, मिसो सूप और मछली।", rom: "yah hai jāpānī nāshtā: chāval, miso sūp aur machhlī.", eng: "This is a Japanese breakfast: rice, miso soup and fish." },
      { ja: "日本では食べる前に「いただきます」と言います。", hi: "जापान में खाने से पहले लोग इतादाकिमासु कहते हैं।", rom: "Jāpān meṁ khāne se pahle log itādākimāsu kahte haiṁ.", eng: "In Japan, people say 'itadakimasu' before eating." },
      { ja: "今日の学び：ゆっくり進むのも大丈夫。", hi: "आज की सीख: धीरे चलना भी ठीक है।", rom: "āj kī sīkh: dhīre chalnā bhī ṭhīk hai.", eng: "Today's lesson: it's okay to go slowly." },
      { ja: "インドのみなさん、いつも心からありがとう。", hi: "भारत के सभी दोस्तों को दिल से धन्यवाद।", rom: "Bhārat ke sabhī doston ko dil se dhanyavād.", eng: "Heartfelt thanks to all my friends in India." },
      { ja: "あなたの町の美しい場所をコメントで教えてください。", hi: "अपने शहर की कोई ख़ूबसूरत जगह कमेंट में बताइए।", rom: "apne shahar kī koī khūbsūrat jagah kamenṭ meṁ batāie.", eng: "Tell us about a beautiful place in your city in the comments." },
      { ja: "次回は日本のお祭りです。お楽しみに！", hi: "अगली बार: जापान के त्योहार। जुड़े रहिए!", rom: "aglī bār: Jāpān ke tyohār. juṛe rahie!", eng: "Next time: festivals of Japan. Stay tuned!" }
    ],
    dialogue: {
      title: "ネハさんにテロップを見てもらう",
      lines: [
        { s: "A", name: "Akihiro", hi: "नेहा जी, मैंने एक छोटा वीडियो बनाया है। क्या आप सबटाइटल देख सकती हैं?", rom: "Nehā jī, maiṁne ek chhoṭā vīḍiyo banāyā hai. kyā āp sabṭāiṭal dekh saktī haiṁ?", ja: "ネハさん、短い動画を作りました。字幕を見てもらえますか。", eng: "Neha, I've made a short video. Could you check the subtitles?" },
        { s: "B", name: "Neha", hi: "ज़रूर! वीडियो किस बारे में है?", rom: "zarūr! vīḍiyo kis bāre meṁ hai?", ja: "もちろん！何についての動画ですか。", eng: "Of course! What's the video about?" },
        { s: "A", name: "Akihiro", hi: "जापान के पतझड़ के बारे में। मैंने ओज़ू की नदी और पहाड़ दिखाए हैं।", rom: "Jāpān ke patjhaṛ ke bāre meṁ. maiṁne Ozū kī nadī aur pahāṛ dikhāe haiṁ.", ja: "日本の秋についてです。大洲の川と山を見せています。", eng: "About autumn in Japan. I've shown the river and mountains of Ozu." },
        { s: "B", name: "Neha", hi: "पहली लाइन क्या है?", rom: "pahlī lāin kyā hai?", ja: "1行目は何ですか。", eng: "What's the first line?" },
        { s: "A", name: "Akihiro", hi: "नमस्ते दोस्तों, मैं ओज़ू से बोल रहा हूँ!", rom: "namaste doston, maiṁ Ozū se bol rahā hūṁ!", ja: "「みなさん、こんにちは。大洲からお届けします！」です。", eng: "\"Hello, friends, I'm talking to you from Ozu!\"" },
        { s: "B", name: "Neha", hi: "बहुत बढ़िया! छोटी और साफ़ है।", rom: "bahut baṛhiyā! chhoṭī aur sāf hai.", ja: "とてもいいですね！短くてわかりやすいです。", eng: "Excellent! It's short and clear." },
        { s: "A", name: "Akihiro", hi: "दूसरी लाइन लंबी है: आज मैं आपको दिखाऊँगा कि जापान में पतझड़ में पत्ते कैसे लाल हो जाते हैं।", rom: "dūsrī lāin lambī hai: āj maiṁ āpko dikhāūṁgā ki Jāpān meṁ patjhaṛ meṁ patte kaise lāl ho jāte haiṁ.", ja: "2行目は長いんです。「今日は、日本で秋に葉がどうやって赤くなるかをお見せします」。", eng: "The second line is long: \"Today I'll show you how the leaves turn red in autumn in Japan.\"" },
        { s: "B", name: "Neha", hi: "इसे दो हिस्सों में बाँटिए। पहला: आज का विषय, जापान का पतझड़।", rom: "ise do hissoṁ meṁ bāṁṭie. pahlā: āj kā vishay, Jāpān kā patjhaṛ.", ja: "それは2つに分けましょう。1枚目は「今日のテーマ、日本の秋」。", eng: "Split it into two. First: today's topic, autumn in Japan." },
        { s: "A", name: "Akihiro", hi: "अच्छा, फिर दूसरा: देखिए, पत्ते कैसे लाल हो जाते हैं!", rom: "achchhā, phir dūsrā: dekhie, patte kaise lāl ho jāte haiṁ!", ja: "なるほど。じゃあ2枚目は「見てください、葉がこんなに赤くなります！」ですね。", eng: "I see, then the second: look how the leaves turn red!" },
        { s: "B", name: "Neha", hi: "परफ़ेक्ट! आख़िर में क्या लिखेंगे?", rom: "parfekṭ! ākhir meṁ kyā likheṁge?", ja: "完璧です！最後は何と書きますか。", eng: "Perfect! What will you write at the end?" },
        { s: "A", name: "Akihiro", hi: "देखने के लिए दिल से शुक्रिया। अपने शहर का मौसम कमेंट में बताइए!", rom: "dekhne ke lie dil se shukriyā. apne shahar kā mausam kamenṭ meṁ batāie!", ja: "「見てくれて心からありがとう。あなたの町の季節をコメントで教えてください！」です。", eng: "\"Thank you so much for watching. Tell us about the weather in your city in the comments!\"" },
        { s: "B", name: "Neha", hi: "बहुत अच्छा! सीधा दिल से। लोगों को यह ज़रूर पसंद आएगा।", rom: "bahut achchhā! sīdhā dil se. logoṁ ko yah zarūr pasand āegā.", ja: "とてもいいです！まっすぐ心から、ですね。みんなきっと気に入りますよ。", eng: "Very good! Straight from the heart. People will surely like it." },
        { s: "A", name: "Akihiro", hi: "शुक्रिया, नेहा जी। आज शाम को अपलोड करूँगा।", rom: "shukriyā, Nehā jī. āj shām ko aplod karūṁgā.", ja: "ありがとう、ネハさん。今晩アップします。", eng: "Thanks, Neha. I'll upload it this evening." }
      ]
    },
    writing: "日本の風景か食べ物を1つ選び、テロップを5枚分書きましょう。①呼びかけ नमस्ते दोस्तों! ②テーマ आज का विषय: … ③紹介 यह है … ④学び आज की सीख: … ⑤感謝と予告 देखने के लिए दिल से शुक्रिया! अगली बार मिलते हैं।（ローマ字：namaste doston! / āj kā vishay: … / yah hai … / āj kī sīkh: … / dekhne ke lie dil se shukriyā! aglī bār milte haiṁ.）宣伝や勧誘の文は入れず、1枚8語以内にしましょう。",
    speaking: "書いた5枚のテロップを、大洲の景色や食事の写真に合わせて声に出して読みましょう。1枚3秒で読めるか確かめ、読みにくい文は短く直します。できたらネハさんに WhatsApp で送り、自然かどうか聞いてみましょう。"
  },
  {
    week: 49,
    title: "現地での1日",
    scene: "デリー出張：空港→ホテル→取引先との打ち合わせの前後の雑談→夕食",
    cefr: "B1",
    goal: "空港・ホテル・取引先での雑談・夕食の場面で、第1〜4期の表現を組み合わせて、ヒンディー語で1日を始めて終えられる。",
    grammar: {
      title: "1日の場面ごとの型（第1〜4期の総合）",
      points: [
        "空港では目的と滞在日数を短く言います。मैं बिज़नेस के लिए आया हूँ（仕事で来ました）、पाँच दिन रुकूँगा（5日間滞在します）。के लिए（〜のために）と未来形 -ऊँगा の組み合わせです。入国審査の質問は短いので、答えも短く言い切ってかまいません。",
        "ホテルでは मेरी बुकिंग इवाता के नाम से है（岩田の名前で予約しています）。お願いは क्या मुझे जल्दी चेक-इन मिल सकता है?（早めにチェックインできますか）のように क्या … सकता है? を使います。मिलना（手に入る）の主語は「もらう物」なので、चेक-इन（男）に合わせて सकता है になります。日本語の「私に〜がもらえる」と同じ考え方です。",
        "打ち合わせそのものは英語でしますが、入口と出口の数分はヒンディー語で話しましょう。आप कैसे हैं? のあとに、रास्ते में बहुत ट्रैफ़िक था（途中すごい渋滞でした）、कल रात अच्छी नींद आई（昨夜はよく眠れました）など過去形で一言そえると、場がやわらぎます。",
        "打ち合わせのあとは आज की मीटिंग बहुत अच्छी रही（今日の打ち合わせはとてもよかったです）。रहना の過去 रहा/रही は「〜という結果だった」という感想に使います。मीटिंग は女性名詞なので रही です。最後に आपके समय के लिए धन्यवाद（お時間をありがとうございました）とヒンディー語でお礼を言って締めくくりましょう。",
        "夕食では、ごちそうになったら खाना बहुत लज़ीज़ था、自分が払いたいときは आज मेरी तरफ़ से（今日は私に持たせてください）。インドでは「お客さまには払わせない」と言われることが多いので、一度ゆずられたら अगली बार ज़रूर मेरी तरफ़ से!（次は必ず私が！）と笑って返すのが自然です。"
      ],
      examples: [
        { hi: "मैं बिज़नेस के लिए आया हूँ, पाँच दिन रुकूँगा।", rom: "maiṁ biznes ke lie āyā hūṁ, pāṁch din rukūṁgā.", ja: "仕事で来ました。5日間滞在します。", eng: "I've come on business, and I'll stay for five days." },
        { hi: "मेरी बुकिंग इवाता के नाम से है।", rom: "merī buking Ivātā ke nām se hai.", ja: "岩田の名前で予約しています。", eng: "My booking is under the name Iwata." },
        { hi: "क्या मुझे जल्दी चेक-इन मिल सकता है?", rom: "kyā mujhe jaldī chek-in mil saktā hai?", ja: "早めにチェックインできますか。", eng: "Could I get an early check-in?" },
        { hi: "रास्ते में बहुत ट्रैफ़िक था, पर समय पर पहुँच गया।", rom: "rāste meṁ bahut ṭraifik thā, par samay par pahuṁch gayā.", ja: "途中すごい渋滞でしたが、時間どおりに着きました。", eng: "There was a lot of traffic on the way, but I arrived on time." },
        { hi: "आज की मीटिंग बहुत अच्छी रही।", rom: "āj kī mīṭing bahut achchhī rahī.", ja: "今日の打ち合わせはとてもよかったです。", eng: "Today's meeting went very well." },
        { hi: "आज का खाना मेरी तरफ़ से।", rom: "āj kā khānā merī taraf se.", ja: "今日の食事は私に持たせてください。", eng: "Today's meal is on me." }
      ],
      tip: "1日を「空港・ホテル・前の雑談・後のお礼・夕食」の5つの場面に分け、各場面で言う1文を決めておきましょう。5文あれば、1日をヒンディー語で始めて終えられます。"
    },
    vocab: [
      { hi: "इमिग्रेशन", rom: "imigreshan", ja: "入国審査（男）", eng: "immigration", ex: "इमिग्रेशन में ज़्यादा देर नहीं लगी।", exRom: "imigreshan meṁ zyādā der nahīṁ lagī.", exJa: "入国審査はあまり時間がかかりませんでした。" },
      { hi: "वीज़ा", rom: "vīzā", ja: "ビザ（男）", eng: "visa", ex: "मेरे पास बिज़नेस वीज़ा है।", exRom: "mere pās biznes vīzā hai.", exJa: "私はビジネスビザを持っています。" },
      { hi: "बुकिंग", rom: "buking", ja: "予約（女）", eng: "booking", ex: "मैंने ऑनलाइन बुकिंग की थी।", exRom: "maiṁne onlāin buking kī thī.", exJa: "オンラインで予約しておきました。" },
      { hi: "चेक-इन", rom: "chek-in", ja: "チェックイン（男）", eng: "check-in", ex: "चेक-इन दो बजे से है।", exRom: "chek-in do baje se hai.", exJa: "チェックインは2時からです。" },
      { hi: "ट्रैफ़िक", rom: "ṭraifik", ja: "交通、渋滞（男）", eng: "traffic", ex: "शाम को दिल्ली में बहुत ट्रैफ़िक होता है।", exRom: "shām ko Dillī meṁ bahut ṭraifik hotā hai.", exJa: "夕方のデリーはとても渋滞します。" },
      { hi: "रास्ता", rom: "rāstā", ja: "道、道中（男）", eng: "way, route", ex: "रास्ता कैसा रहा?", exRom: "rāstā kaisā rahā?", exJa: "道中はいかがでしたか。" },
      { hi: "मीटिंग", rom: "mīṭing", ja: "打ち合わせ、会議（女）", eng: "meeting", ex: "मीटिंग ग्यारह बजे शुरू होगी।", exRom: "mīṭing gyārah baje shurū hogī.", exJa: "打ち合わせは11時に始まります。" },
      { hi: "ऑफ़िस", rom: "ofis", ja: "事務所、オフィス（男）", eng: "office", ex: "प्रिया जी का ऑफ़िस दसवीं मंज़िल पर है।", exRom: "Priyā jī kā ofis dasvīṁ manzil par hai.", exJa: "プリヤさんのオフィスは10階です。" },
      { hi: "मेहमान", rom: "mehmān", ja: "お客さま（男）", eng: "guest", ex: "भारत में मेहमान भगवान जैसा होता है।", exRom: "Bhārat meṁ mehmān bhagvān jaisā hotā hai.", exJa: "インドではお客さまは神さまのような存在です。" },
      { hi: "थकान", rom: "thakān", ja: "疲れ（女）", eng: "tiredness", ex: "लंबी फ़्लाइट के बाद थोड़ी थकान है।", exRom: "lambī flāiṭ ke bād thoṛī thakān hai.", exJa: "長いフライトのあとで少し疲れています。" },
      { hi: "नींद", rom: "nīnd", ja: "眠り（女）", eng: "sleep", ex: "कल रात मुझे अच्छी नींद आई।", exRom: "kal rāt mujhe achchhī nīnd āī.", exJa: "昨夜はよく眠れました。" },
      { hi: "लज़ीज़", rom: "lazīz", ja: "とてもおいしい", eng: "delicious", ex: "यह बिरयानी बहुत लज़ीज़ है।", exRom: "yah biryānī bahut lazīz hai.", exJa: "このビリヤニはとてもおいしいです。" },
      { hi: "मेज़बानी", rom: "mezbānī", ja: "おもてなし（女）", eng: "hospitality", ex: "आपकी मेज़बानी के लिए बहुत शुक्रिया।", exRom: "āpkī mezbānī ke lie bahut shukriyā.", exJa: "おもてなしをありがとうございます。" },
      { hi: "देर", rom: "der", ja: "遅れ、（かかる）時間（女）", eng: "delay", ex: "माफ़ कीजिए, मुझे थोड़ी देर हो गई।", exRom: "māf kījie, mujhe thoṛī der ho gaī.", exJa: "すみません、少し遅れてしまいました。" },
      { hi: "समय पर", rom: "samay par", ja: "時間どおりに", eng: "on time", ex: "हमारी फ़्लाइट समय पर पहुँची।", exRom: "hamārī flāiṭ samay par pahuṁchī.", exJa: "私たちの便は時間どおりに着きました。" },
      { hi: "इंतज़ार", rom: "intazār", ja: "待つこと（男）", eng: "waiting", ex: "मैं लॉबी में आपका इंतज़ार कर रहा हूँ।", exRom: "maiṁ lobī meṁ āpkā intazār kar rahā hūṁ.", exJa: "ロビーでお待ちしています。" },
      { hi: "आराम से", rom: "ārām se", ja: "ゆっくり、楽に", eng: "comfortably", ex: "आराम से बैठिए, चाय आ रही है।", exRom: "ārām se baiṭhie, chāy ā rahī hai.", exJa: "どうぞ楽になさってください。チャイが来ますから。" },
      { hi: "रवाना होना", rom: "ravānā honā", ja: "出発する", eng: "to set off", ex: "हम छह बजे होटल से रवाना होंगे।", exRom: "ham chhah baje hoṭal se ravānā hoṁge.", exJa: "6時にホテルを出発します。" },
      { hi: "तरफ़", rom: "taraf", ja: "側、方（女）", eng: "side", ex: "आज का बिल मेरी तरफ़ से।", exRom: "āj kā bil merī taraf se.", exJa: "今日のお会計は私が持ちます。" },
      { hi: "मुलाक़ात", rom: "mulāqāt", ja: "会うこと、面会（女）", eng: "meeting (in person)", ex: "आपसे मुलाक़ात करके बहुत अच्छा लगा।", exRom: "āpse mulāqāt karke bahut achchhā lagā.", exJa: "お会いできてとてもよかったです。" }
    ],
    sentences: [
      { ja: "仕事で来ました。5日間滞在します。", hi: "मैं काम के लिए आया हूँ। पाँच दिन रहूँगा।", rom: "maiṁ kām ke lie āyā hūṁ. pāṁch din rahūṁgā.", eng: "I've come for work. I'll stay five days." },
      { ja: "岩田の名前で予約しています。", hi: "बुकिंग इवाता के नाम से है।", rom: "buking Ivātā ke nām se hai.", eng: "The booking is under Iwata." },
      { ja: "静かな階の部屋にしてもらえますか。", hi: "क्या मुझे किसी शांत मंज़िल पर कमरा मिल सकता है?", rom: "kyā mujhe kisī shānt manzil par kamrā mil saktā hai?", eng: "Could I have a room on a quiet floor?" },
      { ja: "明日の朝7時にタクシーを呼んでいただけますか。", hi: "क्या आप कल सुबह सात बजे टैक्सी बुला सकते हैं?", rom: "kyā āp kal subah sāt baje ṭaiksī bulā sakte haiṁ?", eng: "Could you call a taxi for 7 tomorrow morning?" },
      { ja: "遅れてすみません。すごい渋滞でした。", hi: "देर के लिए माफ़ कीजिए, बहुत ट्रैफ़िक था।", rom: "der ke lie māf kījie, bahut ṭraifik thā.", eng: "Sorry for the delay, there was a lot of traffic." },
      { ja: "昨夜はよく眠れたので、今日はすっきりしています。", hi: "कल रात अच्छी नींद आई, इसलिए आज मैं ताज़ा महसूस कर रहा हूँ।", rom: "kal rāt achchhī nīnd āī, islie āj maiṁ tāzā mahsūs kar rahā hūṁ.", eng: "I slept well last night, so I feel fresh today." },
      { ja: "では、ここからは英語で話しましょうか。", hi: "तो अब बाक़ी बात अंग्रेज़ी में करें?", rom: "to ab bāqī bāt angrezī meṁ kareṁ?", eng: "So, shall we continue in English now?" },
      { ja: "今日の打ち合わせはとても実りがありました。", hi: "आज की मीटिंग बहुत अच्छी और काम की रही।", rom: "āj kī mīṭing bahut achchhī aur kām kī rahī.", eng: "Today's meeting was very good and productive." },
      { ja: "お時間をいただき、本当にありがとうございました。", hi: "आपके समय के लिए बहुत-बहुत धन्यवाद।", rom: "āpke samay ke lie bahut-bahut dhanyavād.", eng: "Thank you very much for your time." },
      { ja: "今日の食事はとてもおいしかったです。次は必ず私にごちそうさせてください！", hi: "आज का खाना बहुत लज़ीज़ था। अगली बार ज़रूर मेरी तरफ़ से!", rom: "āj kā khānā bahut lazīz thā. aglī bār zarūr merī taraf se!", eng: "Today's food was delicious. Next time it's definitely on me!" }
    ],
    dialogue: {
      title: "デリーでの1日（空港→ホテル→取引先→夕食）",
      lines: [
        { s: "B", name: "Officer", hi: "आप भारत किस काम से आए हैं?", rom: "āp Bhārat kis kām se āe haiṁ?", ja: "（空港で）インドへはどんなご用件で来ましたか。", eng: "What brings you to India?" },
        { s: "A", name: "Akihiro", hi: "बिज़नेस के लिए आया हूँ। पाँच दिन दिल्ली में रहूँगा।", rom: "biznes ke lie āyā hūṁ. pāṁch din Dillī meṁ rahūṁgā.", ja: "仕事で来ました。デリーに5日間滞在します。", eng: "I'm here on business. I'll stay in Delhi for five days." },
        { s: "B", name: "Receptionist", hi: "नमस्ते सर, होटल में आपका स्वागत है। बुकिंग किस नाम से है?", rom: "namaste sar, hoṭal meṁ āpkā svāgat hai. buking kis nām se hai?", ja: "（ホテルで）いらっしゃいませ。ご予約はどなたのお名前ですか。", eng: "Hello sir, welcome to the hotel. What name is the booking under?" },
        { s: "A", name: "Akihiro", hi: "इवाता के नाम से। क्या मुझे जल्दी चेक-इन मिल सकता है?", rom: "Ivātā ke nām se. kyā mujhe jaldī chek-in mil saktā hai?", ja: "岩田です。早めにチェックインできますか。", eng: "Under Iwata. Could I get an early check-in?" },
        { s: "B", name: "Receptionist", hi: "जी हाँ, आपका कमरा तैयार है।", rom: "jī hāṁ, āpkā kamrā taiyār hai.", ja: "はい、お部屋のご用意ができております。", eng: "Yes, your room is ready." },
        { s: "B", name: "Priya", hi: "आकिहिरो जी, स्वागत है! रास्ता कैसा रहा?", rom: "Ākihiro jī, svāgat hai! rāstā kaisā rahā?", ja: "（取引先のオフィスで）あきひろさん、ようこそ！道中はいかがでしたか。", eng: "Welcome, Akihiro! How was the trip here?" },
        { s: "A", name: "Akihiro", hi: "थोड़ा ट्रैफ़िक था, पर ड्राइवर बहुत अच्छे थे। आपका ऑफ़िस बहुत सुंदर है!", rom: "thoṛā ṭraifik thā, par ḍrāivar bahut achchhe the. āpkā ofis bahut sundar hai!", ja: "少し渋滞しましたが、運転手さんがとてもよい方でした。すてきなオフィスですね！", eng: "There was a little traffic, but the driver was very nice. Your office is beautiful!" },
        { s: "B", name: "Priya", hi: "शुक्रिया! चाय लेंगे? फिर मीटिंग शुरू करते हैं।", rom: "shukriyā! chāy leṁge? phir mīṭing shurū karte haiṁ.", ja: "ありがとうございます！チャイはいかがですか。それから打ち合わせを始めましょう。", eng: "Thank you! Would you like some chai? Then let's start the meeting." },
        { s: "A", name: "Akihiro", hi: "आज की मीटिंग बहुत अच्छी रही। आपके समय के लिए धन्यवाद।", rom: "āj kī mīṭing bahut achchhī rahī. āpke samay ke lie dhanyavād.", ja: "（英語の打ち合わせのあとで）今日の打ち合わせはとてもよかったです。お時間をありがとうございました。", eng: "Today's meeting went very well. Thank you for your time." },
        { s: "B", name: "Raj", hi: "आकिहिरो भाई, यहाँ की दाल मखनी ज़रूर खाइए!", rom: "Ākihiro bhāī, yahāṁ kī dāl makhnī zarūr khāie!", ja: "（夕食で）あきひろさん、ここのダール・マッカニーはぜひ食べてください！", eng: "Akihiro, you must try the dal makhani here!" },
        { s: "A", name: "Akihiro", hi: "वाह, बहुत लज़ीज़ है! आज का बिल मेरी तरफ़ से।", rom: "vāh, bahut lazīz hai! āj kā bil merī taraf se.", ja: "わあ、とてもおいしい！今日のお会計は私に持たせてください。", eng: "Wow, it's delicious! Tonight's bill is on me." },
        { s: "B", name: "Raj", hi: "बिल्कुल नहीं! आप हमारे मेहमान हैं।", rom: "bilkul nahīṁ! āp hamāre mehmān haiṁ.", ja: "とんでもない！あなたは私たちのお客さまですから。", eng: "No way! You're our guest." },
        { s: "A", name: "Akihiro", hi: "ठीक है, पर अगली बार ज़रूर मेरी तरफ़ से। आपकी मेज़बानी के लिए शुक्रिया।", rom: "ṭhīk hai, par aglī bār zarūr merī taraf se. āpkī mezbānī ke lie shukriyā.", ja: "わかりました。でも次は必ず私が。おもてなしをありがとうございます。", eng: "All right, but next time it's definitely on me. Thank you for your hospitality." },
        { s: "B", name: "Raj", hi: "पक्का! आराम से होटल पहुँचिए, कल मिलते हैं।", rom: "pakkā! ārām se hoṭal pahuṁchie, kal milte haiṁ.", ja: "約束ですよ！気をつけてホテルに帰ってください。また明日。", eng: "Deal! Get back to the hotel safely. See you tomorrow." }
      ]
    },
    writing: "次の出張の1日を5つの場面に分け、各場面で自分が言う1文を書きましょう。①空港 मैं … के लिए आया हूँ। ②ホテル बुकिंग … के नाम से है। ③打ち合わせの前 रास्ते में … था। ④打ち合わせのあと आज की मीटिंग … रही। ⑤夕食 आपकी मेज़बानी के लिए शुक्रिया।（ローマ字：maiṁ … ke lie āyā hūṁ. / buking … ke nām se hai. / rāste meṁ … thā. / āj kī mīṭing … rahī. / āpkī mezbānī ke lie shukriyā.）",
    speaking: "会話の相手の行を自分で録音し、それに合わせて A の役を通しで練習しましょう。場面が変わるたびに一呼吸おき、「あいさつ→一言の雑談→お礼」の順に言えるか確かめます。次のインド出張の前に、実際の予定に合わせて言い換えてみましょう。"
  },
  {
    week: 50,
    title: "感謝のスピーチ",
    scene: "年末の集まりで、インドの仲間と取引先に1年のお礼を述べる",
    cefr: "B1",
    goal: "改まった感謝の表現とスピーチの型を使い、1年のお礼を2分ほどのスピーチで伝えられる。",
    grammar: {
      title: "改まった感謝の言い方とスピーチの型",
      points: [
        "ふだんの शुक्रिया・धन्यवाद より改まった言い方が、हार्दिक धन्यवाद（心からの感謝を）と मैं आपका आभारी हूँ（あなたに感謝しています）です。आभारी は形容詞で、話す人が男性でも女性でも आभारी हूँ のまま変わりません。感謝する相手は का/की/के で表し、आप सबका आभारी हूँ（みなさんに感謝しています）と言います。日本語の「〜に」が का になるところが違います。",
        "スピーチは呼びかけから始めます。年上や立場の高い人には आदरणीय（敬愛する）、仲間には प्रिय（親愛なる）をつけ、आदरणीय शर्मा जी, प्रिय दोस्तों … と並べます。日本語の「〇〇様、そしてお集まりのみなさま」と同じく、目上の人を先に呼びます。",
        "何に感謝するかは के लिए で言います。आपके सहयोग के लिए（ご協力に）、動詞なら -ने के लिए：मुझ पर भरोसा करने के लिए（私を信頼してくださったことに）。「〜のおかげで」は की वजह से、「〜なしでは」は के बिना です。",
        "具体的な思い出を1つ、過去形で入れると心に届きます。जब मैं पहली बार दिल्ली आया था, तब आपने मुझे पूरा शहर दिखाया था（初めてデリーに来たとき、町じゅうを案内してくださいました）。ने 構文なので、動詞は目的語 शहर（男）に合わせて दिखाया です。目的語が मदद（女）なら आपने मेरी मदद की になります。",
        "締めは今後への願いです。आगे भी हमारा रिश्ता ऐसे ही बना रहे（これからもこの関係が続きますように）は、Week 31 で習った願いの形 -ए です。最後に आप सबको नए साल की शुभकामनाएँ（みなさんによい新年を）、एक बार फिर, हार्दिक धन्यवाद（あらためて、心からありがとうございます）で終えます。"
      ],
      examples: [
        { hi: "आदरणीय शर्मा जी, प्रिय दोस्तों, आप सबको नमस्कार।", rom: "ādarṇīy Sharmā jī, priy doston, āp sabko namaskār.", ja: "敬愛するシャルマさん、親愛なるみなさん、こんばんは。", eng: "Respected Sharma ji, dear friends, greetings to you all." },
        { hi: "इस साल के लिए मैं आप सबका दिल से आभारी हूँ।", rom: "is sāl ke lie maiṁ āp sabkā dil se ābhārī hūṁ.", ja: "この1年のことで、みなさんに心から感謝しています。", eng: "I'm truly grateful to all of you for this year." },
        { hi: "आपके सहयोग के लिए हार्दिक धन्यवाद।", rom: "āpke sahyog ke lie hārdik dhanyavād.", ja: "ご協力に心より感謝申し上げます。", eng: "Heartfelt thanks for your cooperation." },
        { hi: "जब मैं पहली बार दिल्ली आया था, तब आपने मुझे पूरा शहर दिखाया था।", rom: "jab maiṁ pahlī bār Dillī āyā thā, tab āpne mujhe pūrā shahar dikhāyā thā.", ja: "初めてデリーに来たとき、町じゅうを案内してくださいました。", eng: "When I first came to Delhi, you showed me the whole city." },
        { hi: "आपके बिना यह सफ़र मुमकिन नहीं था।", rom: "āpke binā yah safar mumkin nahīṁ thā.", ja: "みなさんなしでは、この道のりはありえませんでした。", eng: "This journey wouldn't have been possible without you." },
        { hi: "आगे भी हमारा रिश्ता ऐसे ही बना रहे।", rom: "āge bhī hamārā rishtā aise hī banā rahe.", ja: "これからもこの関係が続きますように。", eng: "May our relationship stay like this in the future too." }
      ],
      tip: "スピーチは「呼びかけ→感謝の中心→思い出1つ→これから→もう一度ありがとう」の5段で組み立てます。各段を2文にすれば、ちょうど2分ほどになります。"
    },
    vocab: [
      { hi: "हार्दिक", rom: "hārdik", ja: "心からの（改まった言い方）", eng: "heartfelt", ex: "आप सबका हार्दिक स्वागत है।", exRom: "āp sabkā hārdik svāgat hai.", exJa: "みなさんを心より歓迎いたします。" },
      { hi: "आभारी", rom: "ābhārī", ja: "感謝している", eng: "grateful", ex: "मैं आपका बहुत आभारी हूँ।", exRom: "maiṁ āpkā bahut ābhārī hūṁ.", exJa: "あなたにとても感謝しています。" },
      { hi: "आदरणीय", rom: "ādarṇīy", ja: "敬愛する（目上への呼びかけ）", eng: "respected", ex: "आदरणीय शर्मा जी, नमस्कार।", exRom: "ādarṇīy Sharmā jī, namaskār.", exJa: "敬愛するシャルマさん、こんにちは。" },
      { hi: "प्रिय", rom: "priy", ja: "親愛なる", eng: "dear", ex: "प्रिय दोस्तों, आज का दिन बहुत ख़ास है।", exRom: "priy doston, āj kā din bahut khās hai.", exJa: "親愛なるみなさん、今日はとても特別な日です。" },
      { hi: "सहयोग", rom: "sahyog", ja: "協力（男）", eng: "cooperation", ex: "आपके सहयोग से सब आसान हो गया।", exRom: "āpke sahyog se sab āsān ho gayā.", exJa: "ご協力のおかげで、すべてがスムーズにいきました。" },
      { hi: "भरोसा", rom: "bharosā", ja: "信頼（男）", eng: "trust", ex: "आपने मुझ पर भरोसा किया।", exRom: "āpne mujh par bharosā kiyā.", exJa: "あなたは私を信頼してくださいました。" },
      { hi: "रिश्ता", rom: "rishtā", ja: "関係、つながり（男）", eng: "relationship", ex: "हमारा रिश्ता हर साल मज़बूत होता है।", exRom: "hamārā rishtā har sāl mazbūt hotā hai.", exJa: "私たちのつながりは年ごとに強くなります。" },
      { hi: "मार्गदर्शन", rom: "mārgdarshan", ja: "導き、助言（男）", eng: "guidance", ex: "शर्मा जी के मार्गदर्शन से मैंने बहुत सीखा।", exRom: "Sharmā jī ke mārgdarshan se maiṁne bahut sīkhā.", exJa: "シャルマさんの導きで、たくさんのことを学びました。" },
      { hi: "धैर्य", rom: "dhairya", ja: "忍耐、辛抱強さ（男）", eng: "patience", ex: "मेरी हिंदी सुनने में आपने बहुत धैर्य रखा।", exRom: "merī hindī sunne meṁ āpne bahut dhairya rakhā.", exJa: "私のヒンディー語を辛抱強く聞いてくださいました。" },
      { hi: "साल भर", rom: "sāl bhar", ja: "1年じゅう", eng: "all year", ex: "साल भर आपने मेरा साथ दिया।", exRom: "sāl bhar āpne merā sāth diyā.", exJa: "1年じゅう、私を支えてくださいました。" },
      { hi: "यादगार", rom: "yādgār", ja: "思い出深い", eng: "memorable", ex: "यह साल मेरे लिए बहुत यादगार रहा।", exRom: "yah sāl mere lie bahut yādgār rahā.", exJa: "今年は私にとってとても思い出深い年になりました。" },
      { hi: "सम्मान", rom: "sammān", ja: "光栄、敬意（男）", eng: "honor", ex: "यहाँ बोलना मेरे लिए सम्मान की बात है।", exRom: "yahāṁ bolnā mere lie sammān kī bāt hai.", exJa: "ここでお話しできるのは光栄なことです。" },
      { hi: "गर्व", rom: "garv", ja: "誇り（男）", eng: "pride", ex: "मुझे आप जैसे दोस्तों पर गर्व है।", exRom: "mujhe āp jaise doston par garv hai.", exJa: "みなさんのような友人がいることを誇りに思います。" },
      { hi: "मुमकिन", rom: "mumkin", ja: "可能な", eng: "possible", ex: "आपकी मदद से सब मुमकिन हुआ।", exRom: "āpkī madad se sab mumkin huā.", exJa: "あなたの助けで、すべてが実現しました。" },
      { hi: "शुभकामनाएँ", rom: "shubhkāmnāeṁ", ja: "幸せを願う言葉（女・複）", eng: "best wishes", ex: "आप सबको नए साल की शुभकामनाएँ!", exRom: "āp sabko nae sāl kī shubhkāmnāeṁ!", exJa: "みなさん、よい新年を！" },
      { hi: "भूलना", rom: "bhūlnā", ja: "忘れる", eng: "to forget", ex: "आपकी मेहरबानी मैं कभी नहीं भूलूँगा।", exRom: "āpkī mehrbānī maiṁ kabhī nahīṁ bhūlūṁgā.", exJa: "ご親切はけっして忘れません。" },
      { hi: "आगे बढ़ना", rom: "āge baṛhnā", ja: "前へ進む", eng: "to move forward", ex: "चलिए, साथ मिलकर आगे बढ़ते हैं।", exRom: "chalie, sāth milkar āge baṛhte haiṁ.", exJa: "さあ、一緒に前へ進みましょう。" },
      { hi: "मेहनत", rom: "mehnat", ja: "努力、がんばり（女）", eng: "hard work", ex: "आप सबकी मेहनत के लिए धन्यवाद।", exRom: "āp sabkī mehnat ke lie dhanyavād.", exJa: "みなさんのがんばりに感謝します。" },
      { hi: "उम्मीद", rom: "ummīd", ja: "希望、期待（女）", eng: "hope", ex: "मुझे उम्मीद है कि हम अगले साल फिर मिलेंगे।", exRom: "mujhe ummīd hai ki ham agle sāl phir mileṁge.", exJa: "来年またお会いできることを願っています。" },
      { hi: "अवसर", rom: "avsar", ja: "機会（男）", eng: "opportunity", ex: "इस अवसर के लिए मैं आभारी हूँ।", exRom: "is avsar ke lie maiṁ ābhārī hūṁ.", exJa: "この機会に感謝しています。" }
    ],
    sentences: [
      { ja: "敬愛するシャルマさん、親愛なるみなさん、こんばんは。", hi: "आदरणीय शर्मा जी, प्रिय दोस्तों, नमस्कार।", rom: "ādarṇīy Sharmā jī, priy doston, namaskār.", eng: "Respected Sharma ji, dear friends, good evening." },
      { ja: "今日は、みなさんにお礼を言いたくてここに立っています。", hi: "आज मैं आप सबको धन्यवाद कहने के लिए यहाँ खड़ा हूँ।", rom: "āj maiṁ āp sabko dhanyavād kahne ke lie yahāṁ khaṛā hūṁ.", eng: "Today I'm standing here to say thank you to all of you." },
      { ja: "この1年は、私にとってとても思い出深い年になりました。", hi: "यह साल मेरे लिए बहुत यादगार रहा।", rom: "yah sāl mere lie bahut yādgār rahā.", eng: "This year has been very memorable for me." },
      { ja: "プリヤさん、いつも辛抱強く助けてくださってありがとうございます。", hi: "प्रिया जी, हमेशा धैर्य से मदद करने के लिए शुक्रिया।", rom: "Priyā jī, hameshā dhairya se madad karne ke lie shukriyā.", eng: "Priya, thank you for always helping me so patiently." },
      { ja: "ラージさんは、私のたどたどしいヒンディー語をいつも笑顔で聞いてくれました。", hi: "राज जी, आपने मेरी टूटी-फूटी हिंदी हमेशा मुस्कुराकर सुनी।", rom: "Rāj jī, āpne merī ṭūṭī-phūṭī hindī hameshā muskurākar sunī.", eng: "Raj, you always listened to my broken Hindi with a smile." },
      { ja: "みなさんの協力なしでは、この仕事はできませんでした。", hi: "आपके सहयोग के बिना यह काम मुमकिन नहीं था।", rom: "āpke sahyog ke binā yah kām mumkin nahīṁ thā.", eng: "This work wouldn't have been possible without your cooperation." },
      { ja: "私を信頼してくださったことに、心から感謝しています。", hi: "मुझ पर भरोसा करने के लिए मैं दिल से आभारी हूँ।", rom: "mujh par bharosā karne ke lie maiṁ dil se ābhārī hūṁ.", eng: "I'm truly grateful that you trusted me." },
      { ja: "来年もヒンディー語の勉強を続けます。", hi: "अगले साल भी मैं हिंदी सीखता रहूँगा।", rom: "agle sāl bhī maiṁ hindī sīkhtā rahūṁgā.", eng: "Next year too, I'll keep learning Hindi." },
      { ja: "これからも、このつながりが続きますように。", hi: "आगे भी हमारा यह रिश्ता ऐसे ही बना रहे।", rom: "āge bhī hamārā yah rishtā aise hī banā rahe.", eng: "May this relationship of ours continue like this." },
      { ja: "みなさん、よい新年を。あらためて、心からありがとうございます！", hi: "आप सबको नए साल की शुभकामनाएँ। एक बार फिर, हार्दिक धन्यवाद!", rom: "āp sabko nae sāl kī shubhkāmnāeṁ. ek bār phir, hārdik dhanyavād!", eng: "Happy New Year to you all. Once again, heartfelt thanks!" }
    ],
    dialogue: {
      title: "年末の集まりでお礼のスピーチ",
      lines: [
        { s: "B", name: "Neha", hi: "अब आकिहिरो जी कुछ शब्द कहेंगे। तालियाँ!", rom: "ab Ākihiro jī kuchh shabd kaheṁge. tāliyāṁ!", ja: "では、あきひろさんからひとことお願いします。拍手！", eng: "Now Akihiro will say a few words. A round of applause!" },
        { s: "A", name: "Akihiro", hi: "आदरणीय शर्मा जी, प्रिय दोस्तों, आप सबको नमस्कार।", rom: "ādarṇīy Sharmā jī, priy doston, āp sabko namaskār.", ja: "敬愛するシャルマさん、親愛なるみなさん、こんばんは。", eng: "Respected Sharma ji, dear friends, greetings to you all." },
        { s: "A", name: "Akihiro", hi: "आज मैं इस साल के लिए अपना आभार व्यक्त करना चाहता हूँ।", rom: "āj maiṁ is sāl ke lie apnā ābhār vyakt karnā chāhtā hūṁ.", ja: "今日は、この1年への感謝の気持ちをお伝えしたいと思います。", eng: "Today I'd like to express my gratitude for this year." },
        { s: "A", name: "Akihiro", hi: "जब मैं पहली बार दिल्ली आया था, तब मुझे बहुत कम हिंदी आती थी।", rom: "jab maiṁ pahlī bār Dillī āyā thā, tab mujhe bahut kam hindī ātī thī.", ja: "初めてデリーに来たとき、私はヒンディー語がほとんどできませんでした。", eng: "When I first came to Delhi, I knew very little Hindi." },
        { s: "A", name: "Akihiro", hi: "लेकिन आप सबने धैर्य से मेरी बात सुनी और मुझे बहुत कुछ सिखाया।", rom: "lekin āp sabne dhairya se merī bāt sunī aur mujhe bahut kuchh sikhāyā.", ja: "でもみなさんは辛抱強く私の話を聞き、たくさんのことを教えてくれました。", eng: "But you all listened to me patiently and taught me so much." },
        { s: "A", name: "Akihiro", hi: "आपके भरोसे और सहयोग के बिना यह साल इतना अच्छा नहीं होता।", rom: "āpke bharose aur sahyog ke binā yah sāl itnā achchhā nahīṁ hotā.", ja: "みなさんの信頼と協力がなければ、今年はこんなによい年にはならなかったでしょう。", eng: "Without your trust and cooperation, this year wouldn't have been so good." },
        { s: "A", name: "Akihiro", hi: "आगे भी हमारा रिश्ता ऐसे ही बना रहे। एक बार फिर, हार्दिक धन्यवाद!", rom: "āge bhī hamārā rishtā aise hī banā rahe. ek bār phir, hārdik dhanyavād!", ja: "これからもこのつながりが続きますように。あらためて、心からありがとうございます！", eng: "May our relationship continue like this. Once again, heartfelt thanks!" },
        { s: "B", name: "Sharma ji", hi: "वाह, आकिहिरो जी! इतनी अच्छी हिंदी में भाषण, हमें आप पर गर्व है।", rom: "vāh, Ākihiro jī! itnī achchhī hindī meṁ bhāshaṇ, hameṁ āp par garv hai.", ja: "すばらしい、あきひろさん！こんなに上手なヒンディー語でスピーチとは。誇りに思いますよ。", eng: "Wow, Akihiro! A speech in such good Hindi. We're proud of you." },
        { s: "A", name: "Akihiro", hi: "यह सब आपके मार्गदर्शन की वजह से है, शर्मा जी।", rom: "yah sab āpke mārgdarshan kī vajah se hai, Sharmā jī.", ja: "すべてシャルマさんのお導きのおかげです。", eng: "It's all thanks to your guidance, Sharma ji." },
        { s: "B", name: "Arjun", hi: "आपका भाषण सुनकर हम सबको बहुत अच्छा लगा।", rom: "āpkā bhāshaṇ sunkar ham sabko bahut achchhā lagā.", ja: "スピーチを聞いて、みんなとてもうれしかったです。", eng: "We all really enjoyed hearing your speech." },
        { s: "A", name: "Akihiro", hi: "शुक्रिया, अर्जुन जी। मैं थोड़ा घबराया हुआ था!", rom: "shukriyā, Arjun jī. maiṁ thoṛā ghabrāyā huā thā!", ja: "ありがとう、アルジュンさん。少し緊張していました！", eng: "Thanks, Arjun. I was a little nervous!" },
        { s: "B", name: "Neha", hi: "बिल्कुल पता नहीं चला! चलिए, अब सब मिलकर खाना खाते हैं।", rom: "bilkul patā nahīṁ chalā! chalie, ab sab milkar khānā khāte haiṁ.", ja: "全然わかりませんでしたよ！さあ、みんなで食事にしましょう。", eng: "It didn't show at all! Come on, let's all eat together now." }
      ]
    },
    writing: "5段の型で、1年のお礼のスピーチを10文で書きましょう。①आदरणीय … जी, प्रिय दोस्तों, नमस्कार। ②… के लिए मैं आप सबका आभारी हूँ। ③जब मैं …, तब आपने … ④आगे भी हमारा रिश्ता ऐसे ही बना रहे। ⑤एक बार फिर, हार्दिक धन्यवाद!（ローマ字：ādarṇīy … jī, priy doston, namaskār. / … ke lie maiṁ āp sabkā ābhārī hūṁ. / jab maiṁ …, tab āpne … / āge bhī hamārā rishtā aise hī banā rahe. / ek bār phir, hārdik dhanyavād!）③には自分の本当の思い出を1つ入れましょう。",
    speaking: "書いたスピーチを、立ってゆっくり2分で読み上げ、録音しましょう。呼びかけのあとと、最後の हार्दिक धन्यवाद の前で一呼吸おくと、改まった感じが出ます。年末の集まりやオンラインの会で、実際に話してみましょう。"
  },
  {
    week: 51,
    title: "よくある質問に答える",
    scene: "インドの人によく聞かれる質問（日本・愛媛・仕事・インド・ヒンディー語）に答える",
    cefr: "B1",
    goal: "日本・愛媛・仕事・インド・ヒンディー語についてよく聞かれる質問に、「結論→理由→ひとこと」の2〜3文で答えられる。",
    grammar: {
      title: "2〜3文で答える型：結論→理由→ひとこと",
      points: [
        "質問には、まず短く結論を言います。आप कहाँ के रहने वाले हैं? → मैं योकोहामा का रहने वाला हूँ（横浜の出身です）。質問の形（कहाँ के रहने वाले）をそのまま答えに使うと、まちがいが少なく、相手にも伝わりやすくなります。日本語でも「どちらのご出身？」「横浜の出身です」と同じ言葉で返すのと同じです。",
        "次に理由や説明を क्योंकि（なぜなら）でつなぎます。मुझे ओज़ू पसंद है, क्योंकि वहाँ के लोग बहुत मिलनसार हैं（大洲が好きです。人がとても気さくだからです）。理由を先に言いたいときは …, इसलिए …（〜だから…）を使えば、日本語と同じ「理由→結果」の順になります。",
        "最後に気持ちや例をひとこと。जैसे（たとえば）で例を出し、मेरे लिए（私にとって）・सच कहूँ तो（正直に言うと）で自分の気持ちを添えます。सच कहूँ तो, व्याकरण मुश्किल है, पर बहुत मज़ेदार है（正直、文法は難しいですが、とても楽しいです）。",
        "経歴の質問には過去形と過去の習慣で答えます。उससे पहले मैं एक स्पोर्ट्स टीम का ट्रेनर था（その前はスポーツチームのトレーナーでした）、मैंने 2018 में ओज़ू में अपना क्लिनिक खोला（2018年に大洲で開業しました）。「〜から続いている」は進行形 चल रही है：मेरे परिवार की साके की दुकान 1957 से चल रही है（家族の酒店は1957年から続いています）。",
        "答えにくい質問やわからないときの言い方も覚えておきます。यह अच्छा सवाल है（いい質問ですね）で考える時間をつくり、मुझे ठीक से नहीं पता（よくはわかりません）、यह थोड़ा निजी है（それは少し個人的なことなので）と返します。答えたくない話題は、笑顔でこう言えば十分です。"
      ],
      examples: [
        { hi: "मैं योकोहामा का रहने वाला हूँ, लेकिन अब ओज़ू में रहता हूँ।", rom: "maiṁ Yokohāmā kā rahne vālā hūṁ, lekin ab Ozū meṁ rahtā hūṁ.", ja: "横浜の出身ですが、今は大洲に住んでいます。", eng: "I'm from Yokohama, but now I live in Ozu." },
        { hi: "मुझे ओज़ू पसंद है, क्योंकि वहाँ के लोग बहुत मिलनसार हैं।", rom: "mujhe Ozū pasand hai, kyonki vahāṁ ke log bahut milansār haiṁ.", ja: "大洲が好きです。人がとても気さくだからです。", eng: "I like Ozu because the people there are very friendly." },
        { hi: "उससे पहले मैं एक स्पोर्ट्स टीम का ट्रेनर था।", rom: "usse pahle maiṁ ek sporṭs ṭīm kā ṭrenar thā.", ja: "その前は、スポーツチームのトレーナーでした。", eng: "Before that, I was a trainer for a sports team." },
        { hi: "मैंने 2018 में ओज़ू में अपना क्लिनिक खोला।", rom: "maiṁne 2018 meṁ Ozū meṁ apnā klinik kholā.", ja: "2018年に大洲で自分の院を開きました。", eng: "I opened my own clinic in Ozu in 2018." },
        { hi: "मेरे परिवार की साके की दुकान 1957 से चल रही है।", rom: "mere parivār kī sāke kī dukān 1957 se chal rahī hai.", ja: "家族の日本酒の店は1957年から続いています。", eng: "My family's sake shop has been running since 1957." },
        { hi: "सच कहूँ तो, व्याकरण मुश्किल है, पर बहुत मज़ेदार है।", rom: "sach kahūṁ to, vyākaraṇ mushkil hai, par bahut mazedār hai.", ja: "正直、文法は難しいですが、とても楽しいです。", eng: "To be honest, the grammar is hard, but it's a lot of fun." }
      ],
      tip: "よく聞かれる質問を10個カードに書き、裏に2〜3文の答えを書いておきましょう。答えは毎回「結論→理由→ひとこと」の順にすると、思いがけない質問にもあわてず答えられます。"
    },
    vocab: [
      { hi: "प्रीफ़ेक्चर", rom: "prīfekchar", ja: "県（男）", eng: "prefecture", ex: "एहिमे जापान का एक प्रीफ़ेक्चर है।", exRom: "Ehime Jāpān kā ek prīfekchar hai.", exJa: "愛媛は日本の県の1つです。" },
      { hi: "द्वीप", rom: "dvīp", ja: "島（男）", eng: "island", ex: "एहिमे शिकोकू द्वीप पर है।", exRom: "Ehime Shikokū dvīp par hai.", exJa: "愛媛は四国という島にあります。" },
      { hi: "समुद्र", rom: "samudra", ja: "海（男）", eng: "sea", ex: "ओज़ू से समुद्र ज़्यादा दूर नहीं है।", exRom: "Ozū se samudra zyādā dūr nahīṁ hai.", exJa: "大洲から海はそれほど遠くありません。" },
      { hi: "ख़ासियत", rom: "khāsiyat", ja: "特色、名物（女）", eng: "specialty", ex: "एहिमे की ख़ासियत संतरे हैं।", exRom: "Ehime kī khāsiyat santre haiṁ.", exJa: "愛媛の名物はみかんです。" },
      { hi: "पैदा होना", rom: "paidā honā", ja: "生まれる", eng: "to be born", ex: "मैं योकोहामा में पैदा हुआ।", exRom: "maiṁ Yokohāmā meṁ paidā huā.", exJa: "私は横浜で生まれました。" },
      { hi: "ट्रेनर", rom: "ṭrenar", ja: "トレーナー（男）", eng: "trainer", ex: "मैं पहले एक स्पोर्ट्स टीम का ट्रेनर था।", exRom: "maiṁ pahle ek sporṭs ṭīm kā ṭrenar thā.", exJa: "以前はスポーツチームのトレーナーでした。" },
      { hi: "खिलाड़ी", rom: "khilāṛī", ja: "選手（男）", eng: "player", ex: "मैं खिलाड़ियों की सेहत का ध्यान रखता था।", exRom: "maiṁ khilāṛiyoṁ kī sehat kā dhyān rakhtā thā.", exJa: "選手たちの体調を見守っていました。" },
      { hi: "साके", rom: "sāke", ja: "日本酒", eng: "sake", ex: "साके जापान की पारंपरिक शराब है।", exRom: "sāke Jāpān kī pāramparik sharāb hai.", exJa: "日本酒は日本の伝統的なお酒です。" },
      { hi: "स्थापना", rom: "sthāpnā", ja: "創業、設立（女）", eng: "founding", ex: "हमारी दुकान की स्थापना 1957 में हुई थी।", exRom: "hamārī dukān kī sthāpnā 1957 meṁ huī thī.", exJa: "うちの店は1957年に創業しました。" },
      { hi: "अंतरराष्ट्रीय", rom: "antarrāshṭrīy", ja: "国際的な", eng: "international", ex: "मैं दुकान का अंतरराष्ट्रीय काम देखता हूँ।", exRom: "maiṁ dukān kā antarrāshṭrīy kām dekhtā hūṁ.", exJa: "私は店の国際関係の仕事を担当しています。" },
      { hi: "ज़िम्मेदारी", rom: "zimmedārī", ja: "責任、担当（女）", eng: "responsibility", ex: "विदेश से जुड़ा काम मेरी ज़िम्मेदारी है।", exRom: "videsh se juṛā kām merī zimmedārī hai.", exJa: "海外に関わる仕事は私の担当です。" },
      { hi: "विदेश", rom: "videsh", ja: "外国、海外（男）", eng: "abroad", ex: "मैं साल में कई बार विदेश जाता हूँ।", exRom: "maiṁ sāl meṁ kaī bār videsh jātā hūṁ.", exJa: "年に何度か海外に行きます。" },
      { hi: "सच कहूँ तो", rom: "sach kahūṁ to", ja: "正直に言うと", eng: "to be honest", ex: "सच कहूँ तो, मुझे थोड़ा डर लगा था।", exRom: "sach kahūṁ to, mujhe thoṛā ḍar lagā thā.", exJa: "正直に言うと、少しこわかったです。" },
      { hi: "दरअसल", rom: "darasal", ja: "実は", eng: "actually", ex: "दरअसल, मुझे तीखा खाना बहुत पसंद है।", exRom: "darasal, mujhe tīkhā khānā bahut pasand hai.", exJa: "実は、辛い料理が大好きなんです。" },
      { hi: "वजह", rom: "vajah", ja: "理由（女）", eng: "reason", ex: "इसकी वजह भारत के मेरे दोस्त हैं।", exRom: "iskī vajah Bhārat ke mere dost haiṁ.", exJa: "その理由は、インドの友人たちです。" },
      { hi: "दिलचस्पी", rom: "dilchaspī", ja: "興味（女）", eng: "interest", ex: "मुझे भारतीय संस्कृति में बहुत दिलचस्पी है।", exRom: "mujhe bhāratīy sanskriti meṁ bahut dilchaspī hai.", exJa: "インドの文化にとても興味があります。" },
      { hi: "व्याकरण", rom: "vyākaraṇ", ja: "文法（男）", eng: "grammar", ex: "हिंदी का व्याकरण कुछ हद तक जापानी जैसा है।", exRom: "hindī kā vyākaraṇ kuchh had tak jāpānī jaisā hai.", exJa: "ヒンディー語の文法は、ある程度日本語に似ています。" },
      { hi: "उच्चारण", rom: "uchchāraṇ", ja: "発音（男）", eng: "pronunciation", ex: "हिंदी का उच्चारण मेरे लिए सबसे मुश्किल है।", exRom: "hindī kā uchchāraṇ mere lie sabse mushkil hai.", exJa: "私にはヒンディー語の発音がいちばん難しいです。" },
      { hi: "लिपि", rom: "lipi", ja: "文字（の体系）（女）", eng: "script", ex: "देवनागरी लिपि बहुत सुंदर है।", exRom: "devnāgrī lipi bahut sundar hai.", exJa: "デーヴァナーガリー文字はとても美しいです。" },
      { hi: "बदलाव", rom: "badlāv", ja: "変化（男）", eng: "change", ex: "हिंदी सीखने से मेरी ज़िंदगी में बड़ा बदलाव आया।", exRom: "hindī sīkhne se merī zindagī meṁ baṛā badlāv āyā.", exJa: "ヒンディー語を学んで、私の人生は大きく変わりました。" }
    ],
    sentences: [
      { ja: "横浜で生まれ、今は愛媛県大洲市に住んでいます。", hi: "मैं योकोहामा में पैदा हुआ, और अब एहिमे के ओज़ू शहर में रहता हूँ।", rom: "maiṁ Yokohāmā meṁ paidā huā, aur ab Ehime ke Ozū shahar meṁ rahtā hūṁ.", eng: "I was born in Yokohama, and now I live in Ozu City, Ehime." },
      { ja: "愛媛は四国にあって、みかんで有名です。", hi: "एहिमे शिकोकू द्वीप पर है और संतरों के लिए मशहूर है।", rom: "Ehime Shikokū dvīp par hai aur santroṁ ke lie mashhūr hai.", eng: "Ehime is on the island of Shikoku and is famous for mandarin oranges." },
      { ja: "大洲は、川とお城のある静かで美しい町です。", hi: "ओज़ू नदी और क़िले वाला एक शांत और सुंदर शहर है।", rom: "Ozū nadī aur qile vālā ek shānt aur sundar shahar hai.", eng: "Ozu is a quiet, beautiful town with a river and a castle." },
      { ja: "以前は、スポーツチームでトレーナーの仕事をしていました。", hi: "पहले मैं एक स्पोर्ट्स टीम में ट्रेनर का काम करता था।", rom: "pahle maiṁ ek sporṭs ṭīm meṁ ṭrenar kā kām kartā thā.", eng: "I used to work as a trainer for a sports team." },
      { ja: "2018年10月に、大洲で鍼灸整骨院を開きました。", hi: "मैंने अक्टूबर 2018 में ओज़ू में अपना एक्यूपंक्चर क्लिनिक खोला।", rom: "maiṁne akṭūbar 2018 meṁ Ozū meṁ apnā ekyūpankchar klinik kholā.", eng: "I opened my acupuncture clinic in Ozu in October 2018." },
      { ja: "今は院で4人のスタッフが一緒に働いています。", hi: "अभी मेरे क्लिनिक में मेरे साथ चार लोग काम करते हैं।", rom: "abhī mere klinik meṁ mere sāth chār log kām karte haiṁ.", eng: "Now four staff members work with me at my clinic." },
      { ja: "家族の日本酒の店は1957年創業で、私は海外とのやりとりを担当しています。", hi: "मेरे परिवार की साके की दुकान 1957 में शुरू हुई थी, और मैं उसका अंतरराष्ट्रीय काम देखता हूँ।", rom: "mere parivār kī sāke kī dukān 1957 meṁ shurū huī thī, aur maiṁ uskā antarrāshṭrīy kām dekhtā hūṁ.", eng: "My family's sake shop was founded in 1957, and I handle its international work." },
      { ja: "インドが好きなのは、人の心がとても広いからです。", hi: "भारत मुझे इसलिए पसंद है क्योंकि यहाँ के लोगों का दिल बहुत बड़ा है।", rom: "Bhārat mujhe islie pasand hai kyonki yahāṁ ke logoṁ kā dil bahut baṛā hai.", eng: "I like India because the people here have big hearts." },
      { ja: "インドの友人ともっと近づきたくて、ヒンディー語を始めました。", hi: "मैंने हिंदी इसलिए सीखनी शुरू की, क्योंकि मैं भारतीय दोस्तों के और क़रीब आना चाहता था।", rom: "maiṁne hindī islie sīkhnī shurū kī, kyonki maiṁ bhāratīy doston ke aur qarīb ānā chāhtā thā.", eng: "I started learning Hindi because I wanted to get closer to my Indian friends." },
      { ja: "正直、発音は難しいですが、毎日少しずつ上達しています。", hi: "सच कहूँ तो उच्चारण मुश्किल है, पर मैं रोज़ थोड़ा-थोड़ा बेहतर हो रहा हूँ।", rom: "sach kahūṁ to uchchāraṇ mushkil hai, par maiṁ roz thoṛā-thoṛā behtar ho rahā hūṁ.", eng: "Honestly, pronunciation is hard, but I'm getting a little better every day." }
    ],
    dialogue: {
      title: "食事の席で質問ぜめ",
      lines: [
        { s: "B", name: "Arjun", hi: "आकिहिरो जी, आप जापान में कहाँ के रहने वाले हैं?", rom: "Ākihiro jī, āp Jāpān meṁ kahāṁ ke rahne vāle haiṁ?", ja: "あきひろさん、日本のどちらのご出身ですか。", eng: "Akihiro, where in Japan are you from?" },
        { s: "A", name: "Akihiro", hi: "मैं योकोहामा में पैदा हुआ, लेकिन अब एहिमे के ओज़ू में रहता हूँ।", rom: "maiṁ Yokohāmā meṁ paidā huā, lekin ab Ehime ke Ozū meṁ rahtā hūṁ.", ja: "横浜で生まれましたが、今は愛媛の大洲に住んでいます。", eng: "I was born in Yokohama, but now I live in Ozu, Ehime." },
        { s: "B", name: "Arjun", hi: "एहिमे किस चीज़ के लिए मशहूर है?", rom: "Ehime kis chīz ke lie mashhūr hai?", ja: "愛媛は何で有名なんですか。", eng: "What is Ehime famous for?" },
        { s: "A", name: "Akihiro", hi: "संतरों के लिए! वहाँ बहुत तरह के संतरे होते हैं, और समुद्र भी पास है।", rom: "santroṁ ke lie! vahāṁ bahut tarah ke santre hote haiṁ, aur samudra bhī pās hai.", ja: "みかんです！いろいろな種類のみかんがあって、海も近いんですよ。", eng: "Mandarin oranges! There are many kinds there, and the sea is close too." },
        { s: "B", name: "Priya", hi: "आप क्लिनिक से पहले क्या करते थे?", rom: "āp klinik se pahle kyā karte the?", ja: "院を始める前は何をされていたんですか。", eng: "What did you do before the clinic?" },
        { s: "A", name: "Akihiro", hi: "मैं एक स्पोर्ट्स टीम का ट्रेनर था। फिर 2018 में मैंने ओज़ू में अपना क्लिनिक खोला।", rom: "maiṁ ek sporṭs ṭīm kā ṭrenar thā. phir 2018 meṁ maiṁne Ozū meṁ apnā klinik kholā.", ja: "スポーツチームのトレーナーでした。それから2018年に大洲で院を開きました。", eng: "I was a trainer for a sports team. Then in 2018 I opened my clinic in Ozu." },
        { s: "B", name: "Priya", hi: "और साके की दुकान? वह भी आपकी है?", rom: "aur sāke kī dukān? vah bhī āpkī hai?", ja: "日本酒のお店は？それもあなたのお店ですか。", eng: "And the sake shop? Is that yours too?" },
        { s: "A", name: "Akihiro", hi: "वह मेरे परिवार की दुकान है, 1957 से चल रही है। मैं उसका अंतरराष्ट्रीय काम देखता हूँ।", rom: "vah mere parivār kī dukān hai, 1957 se chal rahī hai. maiṁ uskā antarrāshṭrīy kām dekhtā hūṁ.", ja: "家族の店で、1957年から続いています。私は国際関係の仕事を担当しています。", eng: "It's my family's shop, running since 1957. I handle its international work." },
        { s: "B", name: "Arjun", hi: "आपने हिंदी क्यों सीखनी शुरू की?", rom: "āpne hindī kyoṁ sīkhnī shurū kī?", ja: "どうしてヒンディー語を学び始めたんですか。", eng: "Why did you start learning Hindi?" },
        { s: "A", name: "Akihiro", hi: "अच्छा सवाल है! क्योंकि मैं आप लोगों से आपकी अपनी भाषा में बात करना चाहता था।", rom: "achchhā savāl hai! kyonki maiṁ āp logoṁ se āpkī apnī bhāshā meṁ bāt karnā chāhtā thā.", ja: "いい質問ですね！みなさんと、みなさん自身の言葉で話したかったからです。", eng: "Good question! Because I wanted to talk with you all in your own language." },
        { s: "B", name: "Priya", hi: "हिंदी में सबसे मुश्किल क्या है?", rom: "hindī meṁ sabse mushkil kyā hai?", ja: "ヒンディー語でいちばん難しいのは何ですか。", eng: "What's the hardest thing in Hindi?" },
        { s: "A", name: "Akihiro", hi: "सच कहूँ तो, ने वाले वाक्य! पर व्याकरण जापानी से थोड़ा मिलता-जुलता है, इसलिए मज़ा आता है।", rom: "sach kahūṁ to, ne vāle vākya! par vyākaraṇ jāpānī se thoṛā miltā-jultā hai, islie mazā ātā hai.", ja: "正直に言うと、ने を使う文です！でも文法が日本語に少し似ているので、楽しいです。", eng: "Honestly, sentences with 'ne'! But the grammar is a bit like Japanese, so it's fun." },
        { s: "B", name: "Arjun", hi: "आपकी हिंदी सच में बहुत अच्छी है!", rom: "āpkī hindī sach meṁ bahut achchhī hai!", ja: "あなたのヒンディー語は本当に上手ですよ！", eng: "Your Hindi is really very good!" },
        { s: "A", name: "Akihiro", hi: "शुक्रिया! यह सब आप जैसे दोस्तों की वजह से है।", rom: "shukriyā! yah sab āp jaise doston kī vajah se hai.", ja: "ありがとう！すべてみなさんのような友人のおかげです。", eng: "Thank you! It's all thanks to friends like you." }
      ]
    },
    writing: "次の5つの質問に、それぞれ2〜3文（結論→理由→ひとこと）で答えを書きましょう。①आप कहाँ के रहने वाले हैं? ②एहिमे कैसी जगह है? ③आप क्या काम करते हैं? ④आपको भारत क्यों पसंद है? ⑤आपने हिंदी क्यों सीखनी शुरू की?（ローマ字：āp kahāṁ ke rahne vāle haiṁ? / Ehime kaisī jagah hai? / āp kyā kām karte haiṁ? / āpko Bhārat kyoṁ pasand hai? / āpne hindī kyoṁ sīkhnī shurū kī?）",
    speaking: "質問カードをシャッフルして1枚ずつ引き、10秒考えてから20〜30秒で答える練習をしましょう。すぐに答えが出ないときは、यह अच्छा सवाल है… と言って時間をつくる練習も一緒にします。"
  },
  {
    week: 52,
    title: "卒業テスト：5分スピーチ＋15分会話",
    scene: "インドの仲間と取引先の前で、1年の学びを話す",
    cefr: "B1",
    goal: "1年の学びをまとめた5分スピーチを話し、そのあとの15分の会話で、質問に答え・聞き返し・話をつなぐことができる。",
    grammar: {
      title: "5分スピーチの型と、会話をつなぐ表現",
      points: [
        "5分スピーチは6つの段に分けます：①あいさつ ②自己紹介 ③この1年 ④学んだこと ⑤これから ⑥感謝。1段を4〜5文、1文を10秒で話せば、ちょうど5分です。この週の例文と瞬間作文の文は、そのままスピーチ原稿の材料として使えます。",
        "③この1年は、過去形・過去の習慣・ने 構文を使い分けます。एक साल पहले मैं सिर्फ़ नमस्ते कह सकता था（1年前はナマステしか言えませんでした）、हर सुबह मैं तीस मिनट हिंदी पढ़ता था（毎朝30分ヒンディー語を勉強していました）、आप सबने मुझे नए शब्द सिखाए（みなさんが新しい言葉を教えてくれました）。ने 構文では、動詞が目的語 शब्द（男・複）に合わせて सिखाए になります。",
        "④学んだことは मैंने सीखा कि …（〜ということを学びました）と मुझे लगता है कि …（〜と思います）で言います。कि のあとは普通の文をそのまま続けます。日本語の「〜ということ」を कि ひとつで言えるので、長い考えも組み立てやすくなります。",
        "⑤これからは未来形・-ते रहना（〜し続ける）・अगर … तो … で。आगे भी मैं रोज़ अभ्यास करता रहूँगा（これからも毎日練習を続けます）、अगर अगले साल फिर आ सका, तो पूरी बातचीत हिंदी में करूँगा（来年また来られたら、会話を全部ヒンディー語でします）。目標は小さく具体的に言うほうが、聞く人の心に残ります。",
        "15分の会話では、完璧に話す必要はありません。聞き返す（फिर से बोलिए・इसका मतलब क्या है?）、考える時間をつくる（एक मिनट・कैसे कहूँ）、言い換える（मेरा मतलब है・दूसरे शब्दों में）、相手に返す（आपका क्या ख़याल है?）。この4つがあれば、会話は止まりません。"
      ],
      examples: [
        { hi: "नमस्कार दोस्तों! आज मैं पहली बार पाँच मिनट हिंदी में बोलूँगा।", rom: "namaskār doston! āj maiṁ pahlī bār pāṁch minaṭ hindī meṁ bolūṁgā.", ja: "みなさん、こんにちは！今日、初めて5分間ヒンディー語で話します。", eng: "Hello, friends! Today, for the first time, I'll speak in Hindi for five minutes." },
        { hi: "एक साल पहले मैं सिर्फ़ नमस्ते कह सकता था।", rom: "ek sāl pahle maiṁ sirf namaste kah saktā thā.", ja: "1年前、私はナマステしか言えませんでした。", eng: "A year ago, I could only say namaste." },
        { hi: "हर सुबह क्लिनिक जाने से पहले मैं तीस मिनट हिंदी पढ़ता था।", rom: "har subah klinik jāne se pahle maiṁ tīs minaṭ hindī paṛhtā thā.", ja: "毎朝、院に行く前に30分ヒンディー語を勉強していました。", eng: "Every morning before going to the clinic, I studied Hindi for thirty minutes." },
        { hi: "इस साल मैंने सीखा कि ग़लतियों से डरना नहीं चाहिए।", rom: "is sāl maiṁne sīkhā ki ghaltiyoṁ se ḍarnā nahīṁ chāhie.", ja: "今年、まちがいをこわがってはいけないと学びました。", eng: "This year I learned that we shouldn't be afraid of mistakes." },
        { hi: "मुझे लगता है कि भाषा दिलों को जोड़ती है।", rom: "mujhe lagtā hai ki bhāshā diloṁ ko joṛtī hai.", ja: "言葉は心と心をつなぐものだと思います。", eng: "I think language connects hearts." },
        { hi: "अगर अगले साल फिर आ सका, तो पूरी बातचीत हिंदी में करूँगा।", rom: "agar agle sāl phir ā sakā, to pūrī bātchīt hindī meṁ karūṁgā.", ja: "来年また来られたら、会話を全部ヒンディー語でします。", eng: "If I can come again next year, I'll have the whole conversation in Hindi." }
      ],
      tip: "原稿は6段それぞれを1枚のカードにし、カードの上に段の題（①あいさつ…）だけを大きく書いておきましょう。本番で言葉が出なくなっても、題を見てその段の最初の1文さえ思い出せば、続けられます。"
    },
    vocab: [
      { hi: "बिल्कुल", rom: "bilkul", ja: "まったく、もちろん", eng: "absolutely", ex: "बिल्कुल, मैं आपसे सहमत हूँ।", exRom: "bilkul, maiṁ āpse sahmat hūṁ.", exJa: "もちろん、あなたに賛成です。" },
      { hi: "वैसे", rom: "vaise", ja: "ところで", eng: "by the way", ex: "वैसे, आप जापान कब आ रहे हैं?", exRom: "vaise, āp Jāpān kab ā rahe haiṁ?", exJa: "ところで、いつ日本に来られるんですか。" },
      { hi: "मेरा मतलब है", rom: "merā matlab hai", ja: "つまり、言いたいのは", eng: "I mean", ex: "मेरा मतलब है, मुझे और अभ्यास चाहिए।", exRom: "merā matlab hai, mujhe aur abhyās chāhie.", exJa: "つまり、もっと練習が必要だということです。" },
      { hi: "एक मिनट", rom: "ek minaṭ", ja: "ちょっと待ってください", eng: "just a moment", ex: "एक मिनट, सही शब्द सोच रहा हूँ।", exRom: "ek minaṭ, sahī shabd soch rahā hūṁ.", exJa: "ちょっと待ってください、合う言葉を考えています。" },
      { hi: "कैसे कहूँ", rom: "kaise kahūṁ", ja: "何と言えばいいか", eng: "how shall I put it", ex: "कैसे कहूँ, यह एहसास बहुत ख़ास है।", exRom: "kaise kahūṁ, yah ehsās bahut khās hai.", exJa: "何と言えばいいか、この気持ちはとても特別です。" },
      { hi: "दूसरे शब्दों में", rom: "dūsre shabdoṁ meṁ", ja: "言いかえると", eng: "in other words", ex: "दूसरे शब्दों में, मैं अभी भी सीख रहा हूँ।", exRom: "dūsre shabdoṁ meṁ, maiṁ abhī bhī sīkh rahā hūṁ.", exJa: "言いかえると、私はまだ学んでいる途中です。" },
      { hi: "जैसा कि", rom: "jaisā ki", ja: "〜のように、〜とおり", eng: "as", ex: "जैसा कि मैंने कहा, मुझे भारत बहुत पसंद है।", exRom: "jaisā ki maiṁne kahā, mujhe Bhārat bahut pasand hai.", exJa: "さっき言ったように、インドが大好きです。" },
      { hi: "आपका क्या ख़याल है?", rom: "āpkā kyā khayāl hai?", ja: "どう思いますか", eng: "what do you think?", ex: "इस बारे में आपका क्या ख़याल है?", exRom: "is bāre meṁ āpkā kyā khayāl hai?", exJa: "これについてどう思いますか。" },
      { hi: "सही कहा", rom: "sahī kahā", ja: "そのとおりです", eng: "you're right", ex: "आपने बिल्कुल सही कहा।", exRom: "āpne bilkul sahī kahā.", exJa: "まったくおっしゃるとおりです。" },
      { hi: "मैं समझ गया", rom: "maiṁ samajh gayā", ja: "わかりました（男性）", eng: "I got it", ex: "अच्छा, अब मैं समझ गया।", exRom: "achchhā, ab maiṁ samajh gayā.", exJa: "ああ、やっとわかりました。" },
      { hi: "ज़रूर", rom: "zarūr", ja: "ぜひ、きっと", eng: "surely", ex: "अगली बार ज़रूर ओज़ू आइए।", exRom: "aglī bār zarūr Ozū āie.", exJa: "次はぜひ大洲に来てください。" },
      { hi: "याद नहीं आ रहा", rom: "yād nahīṁ ā rahā", ja: "思い出せない", eng: "I can't recall", ex: "उस जगह का नाम याद नहीं आ रहा।", exRom: "us jagah kā nām yād nahīṁ ā rahā.", exJa: "あの場所の名前が思い出せません。" },
      { hi: "बात यह है कि", rom: "bāt yah hai ki", ja: "実はですね", eng: "the thing is", ex: "बात यह है कि मैं थोड़ा घबराया हुआ हूँ।", exRom: "bāt yah hai ki maiṁ thoṛā ghabrāyā huā hūṁ.", exJa: "実は、少し緊張しているんです。" },
      { hi: "आख़िरकार", rom: "ākhirkār", ja: "ついに", eng: "finally", ex: "आख़िरकार आज वह दिन आ गया।", exRom: "ākhirkār āj vah din ā gayā.", exJa: "ついに今日、その日が来ました。" },
      { hi: "उपलब्धि", rom: "upalabdhi", ja: "達成、成果（女）", eng: "achievement", ex: "यह भाषण मेरे लिए बड़ी उपलब्धि है।", exRom: "yah bhāshaṇ mere lie baṛī upalabdhi hai.", exJa: "このスピーチは私にとって大きな成果です。" },
      { hi: "लक्ष्य", rom: "lakshya", ja: "目標（男）", eng: "goal", ex: "मेरा अगला लक्ष्य हिंदी में किताब पढ़ना है।", exRom: "merā aglā lakshya hindī meṁ kitāb paṛhnā hai.", exJa: "次の目標は、ヒンディー語で本を読むことです。" },
      { hi: "आत्मविश्वास", rom: "ātmavishvās", ja: "自信（男）", eng: "self-confidence", ex: "अब मुझमें थोड़ा आत्मविश्वास आ गया है।", exRom: "ab mujhmeṁ thoṛā ātmavishvās ā gayā hai.", exJa: "今は少し自信がついてきました。" },
      { hi: "प्रगति", rom: "pragati", ja: "上達、進歩（女）", eng: "progress", ex: "आपकी प्रगति देखकर हमें ख़ुशी है।", exRom: "āpkī pragati dekhkar hameṁ khushī hai.", exJa: "あなたの上達ぶりを見て、うれしいです。" },
      { hi: "अभ्यास", rom: "abhyās", ja: "練習（男）", eng: "practice", ex: "रोज़ का अभ्यास सबसे ज़रूरी है।", exRom: "roz kā abhyās sabse zarūrī hai.", exJa: "毎日の練習がいちばん大切です。" },
      { hi: "बातचीत", rom: "bātchīt", ja: "会話（女）", eng: "conversation", ex: "आज की बातचीत बहुत मज़ेदार रही।", exRom: "āj kī bātchīt bahut mazedār rahī.", exJa: "今日の会話はとても楽しかったです。" }
    ],
    sentences: [
      { ja: "みなさん、こんにちは！今日は私にとって特別な日です。", hi: "नमस्ते दोस्तों! आज का दिन मेरे लिए बहुत ख़ास है।", rom: "namaste doston! āj kā din mere lie bahut khās hai.", eng: "Hello, friends! Today is a very special day for me." },
      { ja: "私は横浜で生まれ、愛媛県大洲市で鍼灸整骨院を経営しています。", hi: "मैं योकोहामा में पैदा हुआ और एहिमे के ओज़ू में एक क्लिनिक चलाता हूँ।", rom: "maiṁ Yokohāmā meṁ paidā huā aur Ehime ke Ozū meṁ ek klinik chalātā hūṁ.", eng: "I was born in Yokohama and I run a clinic in Ozu, Ehime." },
      { ja: "1年前、私はヒンディー語の文字が1つも読めませんでした。", hi: "एक साल पहले मैं हिंदी का एक भी अक्षर नहीं पढ़ सकता था।", rom: "ek sāl pahle maiṁ hindī kā ek bhī akshar nahīṁ paṛh saktā thā.", eng: "A year ago, I couldn't read a single Hindi letter." },
      { ja: "毎朝、院に行く前に30分勉強しました。", hi: "हर सुबह क्लिनिक जाने से पहले मैंने तीस मिनट पढ़ाई की।", rom: "har subah klinik jāne se pahle maiṁne tīs minaṭ paṛhāī kī.", eng: "Every morning before going to the clinic, I studied for thirty minutes." },
      { ja: "インドに来るたびに、みなさんが新しい言葉を教えてくれました。", hi: "जब भी मैं भारत आया, आप सबने मुझे नए शब्द सिखाए।", rom: "jab bhī maiṁ Bhārat āyā, āp sabne mujhe nae shabd sikhāe.", eng: "Every time I came to India, you all taught me new words." },
      { ja: "この1年で、ゆっくりでも進み続けることが大切だと学びました。", hi: "इस एक साल में मैंने सीखा कि धीरे-धीरे ही सही, आगे बढ़ते रहना ज़रूरी है।", rom: "is ek sāl meṁ maiṁne sīkhā ki dhīre-dhīre hī sahī, āge baṛhte rahnā zarūrī hai.", eng: "In this one year, I learned that it's important to keep moving forward, even slowly." },
      { ja: "言葉が通じると、心の距離が近くなると思います。", hi: "मुझे लगता है कि भाषा से दिलों की दूरी कम हो जाती है।", rom: "mujhe lagtā hai ki bhāshā se diloṁ kī dūrī kam ho jātī hai.", eng: "I think language brings hearts closer together." },
      { ja: "これからも毎日ヒンディー語の練習を続けます。", hi: "आगे भी मैं रोज़ हिंदी का अभ्यास करता रहूँगा।", rom: "āge bhī maiṁ roz hindī kā abhyās kartā rahūṁgā.", eng: "I'll keep practicing Hindi every day from now on." },
      { ja: "次の目標は、通訳なしでみなさんと1時間話すことです。", hi: "मेरा अगला लक्ष्य है बिना दुभाषिए के आप सबसे एक घंटा बात करना।", rom: "merā aglā lakshya hai binā dubhāshie ke āp sabse ek ghanṭā bāt karnā.", eng: "My next goal is to talk with you all for an hour without an interpreter." },
      { ja: "1年間、一緒にいてくださって心からありがとうございます。これからもよろしくお願いします！", hi: "पूरे साल के साथ के लिए दिल से धन्यवाद। आगे भी ऐसे ही साथ रहिए!", rom: "pūre sāl ke sāth ke lie dil se dhanyavād. āge bhī aise hī sāth rahie!", eng: "Heartfelt thanks for being with me all year. Please stay with me like this in the future too!" }
    ],
    dialogue: {
      title: "スピーチのあとの質問タイム",
      lines: [
        { s: "B", name: "Sharma ji", hi: "शाबाश, आकिहिरो जी! पाँच मिनट, पूरी हिंदी में!", rom: "shābāsh, Ākihiro jī! pāṁch minaṭ, pūrī hindī meṁ!", ja: "おみごと、あきひろさん！5分間、全部ヒンディー語で！", eng: "Well done, Akihiro! Five minutes, entirely in Hindi!" },
        { s: "A", name: "Akihiro", hi: "धन्यवाद, शर्मा जी। सच कहूँ तो, मैं बहुत घबराया हुआ था।", rom: "dhanyavād, Sharmā jī. sach kahūṁ to, maiṁ bahut ghabrāyā huā thā.", ja: "ありがとうございます、シャルマさん。正直、とても緊張していました。", eng: "Thank you, Sharma ji. To be honest, I was very nervous." },
        { s: "B", name: "Priya", hi: "मुझे एक सवाल पूछना है। इस साल का सबसे मुश्किल पल कौन-सा था?", rom: "mujhe ek savāl pūchhnā hai. is sāl kā sabse mushkil pal kaun-sā thā?", ja: "1つ質問があります。今年いちばん大変だった瞬間はいつでしたか。", eng: "I have a question. What was the hardest moment this year?" },
        { s: "A", name: "Akihiro", hi: "एक मिनट, कैसे कहूँ, शायद पहली बार फ़ोन पर हिंदी में बात करना।", rom: "ek minaṭ, kaise kahūṁ, shāyad pahlī bār fon par hindī meṁ bāt karnā.", ja: "ちょっと待ってください、何と言えばいいか…たぶん、初めて電話でヒンディー語で話したときです。", eng: "Just a moment, how shall I put it, probably talking in Hindi on the phone for the first time." },
        { s: "B", name: "Priya", hi: "हाँ, फ़ोन पर चेहरा नहीं दिखता, इसलिए मुश्किल होता है।", rom: "hāṁ, fon par chehrā nahīṁ dikhtā, islie mushkil hotā hai.", ja: "ええ、電話だと顔が見えないから難しいですよね。", eng: "Yes, you can't see the face on the phone, so it's hard." },
        { s: "A", name: "Akihiro", hi: "बिल्कुल सही कहा। मेरा मतलब है, हाथ के इशारे भी काम नहीं आते!", rom: "bilkul sahī kahā. merā matlab hai, hāth ke ishāre bhī kām nahīṁ āte!", ja: "まさにそのとおりです。つまり、身ぶり手ぶりも使えないんですよ！", eng: "Exactly right. I mean, hand gestures don't help either!" },
        { s: "B", name: "Raj", hi: "वैसे, आपका पसंदीदा हिंदी शब्द कौन-सा है?", rom: "vaise, āpkā pasandīdā hindī shabd kaun-sā hai?", ja: "ところで、いちばん好きなヒンディー語の言葉は何ですか。", eng: "By the way, what's your favorite Hindi word?" },
        { s: "A", name: "Akihiro", hi: "अपनापन! इसका मतलब है, जैसे कोई अपना हो। भारत में मुझे यही महसूस होता है।", rom: "apnāpan! iskā matlab hai, jaise koī apnā ho. Bhārat meṁ mujhe yahī mahsūs hotā hai.", ja: "「アプナーパン」です！身内のように感じる、という意味です。インドで私が感じるのは、まさにそれなんです。", eng: "Apnapan! It means feeling like someone is your own. That's exactly what I feel in India." },
        { s: "B", name: "Raj", hi: "वाह! और अगले साल का लक्ष्य क्या है?", rom: "vāh! aur agle sāl kā lakshya kyā hai?", ja: "いいですね！それで、来年の目標は？", eng: "Wow! And what's your goal for next year?" },
        { s: "A", name: "Akihiro", hi: "जैसा कि मैंने कहा, बिना दुभाषिए के एक घंटा बात करना। आपका क्या ख़याल है, हो पाएगा?", rom: "jaisā ki maiṁne kahā, binā dubhāshie ke ek ghanṭā bāt karnā. āpkā kyā khayāl hai, ho pāegā?", ja: "スピーチで言ったとおり、通訳なしで1時間話すことです。どう思いますか、できそうでしょうか。", eng: "As I said, to talk for an hour without an interpreter. What do you think, can I do it?" },
        { s: "B", name: "Sharma ji", hi: "ज़रूर हो पाएगा। बस अभ्यास करते रहिए।", rom: "zarūr ho pāegā. bas abhyās karte rahie.", ja: "きっとできますよ。とにかく練習を続けてください。", eng: "You'll surely manage it. Just keep practicing." },
        { s: "A", name: "Akihiro", hi: "जी, मैं समझ गया। हर दिन थोड़ा-थोड़ा, यही मेरा तरीक़ा है।", rom: "jī, maiṁ samajh gayā. har din thoṛā-thoṛā, yahī merā tarīqā hai.", ja: "はい、わかりました。毎日少しずつ、それが私のやり方です。", eng: "Yes, understood. A little every day, that's my way." },
        { s: "B", name: "Priya", hi: "तो अगली मीटिंग का पहला आधा घंटा हिंदी में करें?", rom: "to aglī mīṭing kā pahlā ādhā ghanṭā hindī meṁ kareṁ?", ja: "じゃあ、次の打ち合わせの最初の30分はヒンディー語でやりましょうか。", eng: "So shall we do the first half hour of the next meeting in Hindi?" },
        { s: "A", name: "Akihiro", hi: "पक्का! आख़िरकार वह दिन भी आ गया। आप सबका दिल से धन्यवाद!", rom: "pakkā! ākhirkār vah din bhī ā gayā. āp sabkā dil se dhanyavād!", ja: "ぜひ！ついにその日が来ましたね。みなさん、心からありがとうございます！", eng: "Deal! At last that day has come. Heartfelt thanks to you all!" }
      ]
    },
    writing: "6段の型で、5分スピーチの原稿を書きましょう（各段4〜5文、全部で25〜30文）。①नमस्ते दोस्तों! ②मैं … ③एक साल पहले मैं … ④इस साल मैंने सीखा कि … ⑤आगे भी मैं … करता रहूँगा। ⑥… के लिए दिल से धन्यवाद।（ローマ字：namaste doston! / maiṁ … / ek sāl pahle maiṁ … / is sāl maiṁne sīkhā ki … / āge bhī maiṁ … kartā rahūṁgā. / … ke lie dil se dhanyavād.）書けたら、15分の会話で聞かれそうな質問を5つ考え、答えも1〜2文ずつ書きましょう。",
    speaking: "卒業テストです。①原稿を見ずに5分スピーチを録音します（つまったらカードの題だけ見てかまいません）。②インドの仲間か取引先に15分の会話をお願いし、एक मिनट・मेरा मतलब है・आपका क्या ख़याल है? を最低1回ずつ使いましょう。録音を聞き直して、1年前の自分と比べてみてください。1年間、おつかれさまでした！"
  }
]);

