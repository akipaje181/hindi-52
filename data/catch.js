/* 会話のキャッチボール（ヒンディー語52週）
   相手（インドの方）の質問に「答える（a）→ ひとこと足す（add）→ 聞き返す（back）」の3つで返す練習。
   who＝相手。男性 Raj / Sharma ji / Arjun、女性 Priya / Neha / Anita。
   岩田さんは男性なので、自分のことは -ता हूँ・रहा हूँ・-ऊँगा・गया。
   相手が女性なら、聞き返しの動詞も -ती हैं・रही हैं・-एँगी・कैसी にする。
   lv1＝A1（第1期の文法：है・習慣の現在・पसंद・आती है・सकना）
   lv2＝A1〜A2（第2期：進行形・未来・過去・लगना・複合動詞）
   lv3＝A2（第3期：経歴・-ने से पहले・अगर…तो・जो…वह・経験の -ा है・受け身の入口）
   lv4＝A2〜B1（第4期：意見と理由 मेरे ख़याल से・क्योंकि・इसलिए・-ना चाहिए）
   hi と rom は語数をそろえる（scripts/check-extra.js で検査）。 */
window.CATCH=[
 // ---- lv1：第1期の文法だけで（A1）----
 {id:1,lv:1,topic:"雑談",who:"Raj",q:"आप कैसे हैं?",qRom:"āp kaise haiṁ?",qja:"お元気ですか？",ans:[
  {t:"a",hi:"मैं ठीक हूँ, धन्यवाद।",rom:"maiṁ ṭhīk hūṁ, dhanyavād.",ja:"元気です、ありがとう。"},
  {t:"add",hi:"आज ओज़ू में मौसम बहुत अच्छा है।",rom:"āj Ozū meṁ mausam bahut achchhā hai.",ja:"今日の大洲はとてもいい天気です。"},
  {t:"back",hi:"और आप कैसे हैं?",rom:"aur āp kaise haiṁ?",ja:"あなたはお元気ですか？"}],
  tip:"最初に और（それで、あなたは）をつけると「あなたは？」の気持ちがはっきり伝わります。"},
 {id:2,lv:1,topic:"雑談",who:"Neha",q:"नमस्ते! आप कैसे हैं?",qRom:"namaste! āp kaise haiṁ?",qja:"こんにちは！お元気ですか？",ans:[
  {t:"a",hi:"मैं अच्छा हूँ, शुक्रिया।",rom:"maiṁ achchhā hūṁ, shukriyā.",ja:"元気です、ありがとう。"},
  {t:"add",hi:"आज क्लिनिक में बहुत काम है।",rom:"āj klinik meṁ bahut kām hai.",ja:"今日は院の仕事がたくさんあります。"},
  {t:"back",hi:"आप कैसी हैं?",rom:"āp kaisī haiṁ?",ja:"あなたはお元気ですか？"}],
  tip:"相手が女性なら कैसी हैं、男性なら कैसे हैं。自分（男性）は अच्छा हूँ です。"},
 {id:3,lv:1,topic:"雑談",who:"Priya",q:"आप कहाँ से हैं?",qRom:"āp kahāṁ se haiṁ?",qja:"どちらのご出身ですか？",ans:[
  {t:"a",hi:"मैं योकोहामा से हूँ।",rom:"maiṁ Yokohāmā se hūṁ.",ja:"横浜出身です。"},
  {t:"add",hi:"अभी मैं एहिमे के ओज़ू शहर में रहता हूँ।",rom:"abhī maiṁ Ehime ke Ozū shahar meṁ rahtā hūṁ.",ja:"今は愛媛の大洲市に住んでいます。"},
  {t:"back",hi:"आप कहाँ से हैं?",rom:"āp kahāṁ se haiṁ?",ja:"あなたはどちらのご出身ですか？"}],
  tip:"生まれた町と今住んでいる町の両方を言うと、話のきっかけが増えます。"},
 {id:4,lv:1,topic:"仕事",who:"Sharma ji",q:"आप क्या काम करते हैं?",qRom:"āp kyā kām karte haiṁ?",qja:"お仕事は何をされていますか？",ans:[
  {t:"a",hi:"मैं एक एक्यूपंक्चर क्लिनिक चलाता हूँ।",rom:"maiṁ ek ekyūpankchar klinik chalātā hūṁ.",ja:"鍼灸の院をしています。"},
  {t:"add",hi:"मेरा क्लिनिक ओज़ू में है।",rom:"merā klinik Ozū meṁ hai.",ja:"院は大洲にあります。"},
  {t:"back",hi:"आपकी कंपनी क्या करती है?",rom:"āpkī kampanī kyā kartī hai?",ja:"あなたの会社は何をしているのですか？"}],
  tip:"कंपनी（会社）は女性名詞なので、आपकी・करती है になります。"},
 {id:5,lv:1,topic:"食べ物",who:"Arjun",q:"क्या आपको भारतीय खाना पसंद है?",qRom:"kyā āpko bhāratīy khānā pasand hai?",qja:"インド料理は好きですか？",ans:[
  {t:"a",hi:"जी हाँ, बहुत पसंद है।",rom:"jī hāṁ, bahut pasand hai.",ja:"はい、大好きです。"},
  {t:"add",hi:"मुझे पनीर टिक्का सबसे ज़्यादा पसंद है।",rom:"mujhe panīr ṭikkā sabse zyādā pasand hai.",ja:"パニールティッカがいちばん好きです。"},
  {t:"back",hi:"क्या आपको जापानी खाना पसंद है?",rom:"kyā āpko jāpānī khānā pasand hai?",ja:"日本料理は好きですか？"}],
  tip:"好きな料理の名前を1つ言うと、相手もうれしくなります。自分の好きな料理に入れかえましょう。"},
 {id:6,lv:1,topic:"食べ物",who:"Anita",q:"क्या आप तीखा खाना खा सकते हैं?",qRom:"kyā āp tīkhā khānā khā sakte haiṁ?",qja:"辛い料理は食べられますか？",ans:[
  {t:"a",hi:"हाँ, थोड़ा तीखा खा सकता हूँ।",rom:"hāṁ, thoṛā tīkhā khā saktā hūṁ.",ja:"はい、少しの辛さなら食べられます。"},
  {t:"add",hi:"लेकिन बहुत तीखा मेरे लिए मुश्किल है।",rom:"lekin bahut tīkhā mere lie mushkil hai.",ja:"でも、とても辛いのは私には難しいです。"},
  {t:"back",hi:"क्या आप जापानी खाना खाती हैं?",rom:"kyā āp jāpānī khānā khātī haiṁ?",ja:"日本の料理は食べますか？"}],
  tip:"女性の相手には खाती हैं。自分のことは खा सकता हूँ（男性）です。"},
 {id:7,lv:1,topic:"食べ物",who:"Raj",q:"आपको चाय पसंद है या कॉफ़ी?",qRom:"āpko chāy pasand hai yā kofī?",qja:"紅茶とコーヒー、どちらが好きですか？",ans:[
  {t:"a",hi:"मुझे चाय ज़्यादा पसंद है।",rom:"mujhe chāy zyādā pasand hai.",ja:"紅茶のほうが好きです。"},
  {t:"add",hi:"भारत की मसाला चाय बहुत अच्छी है।",rom:"Bhārat kī masālā chāy bahut achchhī hai.",ja:"インドのマサラチャイはとてもおいしいです。"},
  {t:"back",hi:"आपको क्या पसंद है?",rom:"āpko kyā pasand hai?",ja:"あなたはどちらが好きですか？"}],
  tip:"या は「または」。चाय は女性名詞なので अच्छी になります。"},
 {id:8,lv:1,topic:"日本",who:"Priya",q:"जापान में अभी मौसम कैसा है?",qRom:"jāpān meṁ abhī mausam kaisā hai?",qja:"日本は今どんな天気ですか？",ans:[
  {t:"a",hi:"अभी जापान में ठंड है।",rom:"abhī jāpān meṁ ṭhanḍ hai.",ja:"今、日本は寒いです。"},
  {t:"add",hi:"सुबह और रात में बहुत ठंड है।",rom:"subah aur rāt meṁ bahut ṭhanḍ hai.",ja:"朝と夜はとても寒いです。"},
  {t:"back",hi:"दिल्ली में मौसम कैसा है?",rom:"dillī meṁ mausam kaisā hai?",ja:"デリーの天気はどうですか？"}],
  tip:"天気の話は、相手の町の天気を聞き返すと続きます。季節に合わせて ठंड（寒さ）を गर्मी（暑さ）に変えましょう。"},
 {id:9,lv:1,topic:"仕事",who:"Sharma ji",q:"आपके क्लिनिक में कितने लोग काम करते हैं?",qRom:"āpke klinik meṁ kitne log kām karte haiṁ?",qja:"院では何人働いていますか？",ans:[
  {t:"a",hi:"मेरे क्लिनिक में चार स्टाफ़ हैं।",rom:"mere klinik meṁ chār sṭāf haiṁ.",ja:"院にはスタッフが4人います。"},
  {t:"add",hi:"सब बहुत मेहनती हैं।",rom:"sab bahut mehnatī haiṁ.",ja:"みんなとてもよく働きます。"},
  {t:"back",hi:"आपकी कंपनी में कितने लोग हैं?",rom:"āpkī kampanī meṁ kitne log haiṁ?",ja:"あなたの会社には何人いますか？"}],
  tip:"同じ「何人？」を相手の会社に返すだけで、自然な会話になります。"},
 {id:10,lv:1,topic:"雑談",who:"Arjun",q:"आप कितने बजे उठते हैं?",qRom:"āp kitne baje uṭhte haiṁ?",qja:"何時に起きますか？",ans:[
  {t:"a",hi:"मैं सुबह छह बजे उठता हूँ।",rom:"maiṁ subah chhah baje uṭhtā hūṁ.",ja:"朝6時に起きます。"},
  {t:"add",hi:"सुबह मैं थोड़ा टहलता हूँ।",rom:"subah maiṁ thoṛā ṭahaltā hūṁ.",ja:"朝は少し散歩をします。"},
  {t:"back",hi:"आप कितने बजे उठते हैं?",rom:"āp kitne baje uṭhte haiṁ?",ja:"あなたは何時に起きますか？"}],
  tip:"時刻は練習用の例です。自分の時刻に入れかえましょう。"},
 {id:11,lv:1,topic:"雑談",who:"Neha",q:"क्या आपको हिंदी आती है?",qRom:"kyā āpko hindī ātī hai?",qja:"ヒンディー語はできますか？",ans:[
  {t:"a",hi:"थोड़ी-थोड़ी आती है।",rom:"thoṛī-thoṛī ātī hai.",ja:"少しだけできます。"},
  {t:"add",hi:"मैं हर दिन हिंदी सीखता हूँ।",rom:"maiṁ har din hindī sīkhtā hūṁ.",ja:"毎日ヒンディー語を勉強しています。"},
  {t:"back",hi:"क्या आपको जापानी आती है?",rom:"kyā āpko jāpānī ātī hai?",ja:"日本語はできますか？"}],
  tip:"言葉が「できる」は मुझे … आती है。भाषा（言葉）が女性名詞なので आती です。"},
 {id:12,lv:1,topic:"雑談",who:"Anita",q:"आप हिंदी क्यों सीखते हैं?",qRom:"āp hindī kyoṁ sīkhte haiṁ?",qja:"どうしてヒンディー語を勉強しているのですか？",ans:[
  {t:"a",hi:"मेरे कई दोस्त भारत में हैं।",rom:"mere kaī dost Bhārat meṁ haiṁ.",ja:"インドに友だちがたくさんいるからです。"},
  {t:"add",hi:"और मैं अक्सर भारत आता हूँ।",rom:"aur maiṁ aksar Bhārat ātā hūṁ.",ja:"それに、よくインドに来ます。"},
  {t:"back",hi:"आपको कौन-कौन सी भाषाएँ आती हैं?",rom:"āpko kaun-kaun sī bhāshāeṁ ātī haiṁ?",ja:"あなたはどんな言葉ができますか？"}],
  tip:"インドの人は何か国語も話せることが多いので、この聞き返しは話が広がります。"},
 {id:13,lv:1,topic:"インド",who:"Raj",q:"आप कितनी बार भारत आते हैं?",qRom:"āp kitnī bār Bhārat āte haiṁ?",qja:"インドにはどのくらい来ますか？",ans:[
  {t:"a",hi:"मैं बार-बार भारत आता हूँ।",rom:"maiṁ bār-bār Bhārat ātā hūṁ.",ja:"何度も来ています。"},
  {t:"add",hi:"मुझे भारत बहुत पसंद है।",rom:"mujhe Bhārat bahut pasand hai.",ja:"インドが大好きです。"},
  {t:"back",hi:"क्या आप भी कभी जापान आते हैं?",rom:"kyā āp bhī kabhī jāpān āte haiṁ?",ja:"あなたも日本に来ることはありますか？"}],
  tip:"बार-बार は「何度も」。回数がはっきりしているなら साल में … बार（年に〜回）と言えます。"},
 {id:14,lv:1,topic:"日本",who:"Priya",q:"जापान में लोग क्या खाते हैं?",qRom:"jāpān meṁ log kyā khāte haiṁ?",qja:"日本の人は何を食べますか？",ans:[
  {t:"a",hi:"जापान में लोग चावल और मछली खाते हैं।",rom:"jāpān meṁ log chāval aur machhlī khāte haiṁ.",ja:"日本の人はごはんと魚を食べます。"},
  {t:"add",hi:"मुझे सुशी और रामेन पसंद हैं।",rom:"mujhe sushī aur rāmen pasand haiṁ.",ja:"私はすしとラーメンが好きです。"},
  {t:"back",hi:"आप घर पर क्या खाती हैं?",rom:"āp ghar par kyā khātī haiṁ?",ja:"あなたは家で何を食べますか？"}],
  tip:"好きなものが2つ以上なら पसंद हैं。女性の相手には खाती हैं で聞き返します。"},
 {id:15,lv:1,topic:"健康",who:"Sharma ji",q:"आप सेहत के लिए क्या करते हैं?",qRom:"āp sehat ke lie kyā karte haiṁ?",qja:"健康のために何をしていますか？",ans:[
  {t:"a",hi:"मैं हर दिन चलता हूँ।",rom:"maiṁ har din chaltā hūṁ.",ja:"毎日歩いています。"},
  {t:"add",hi:"और रात को जल्दी सोता हूँ।",rom:"aur rāt ko jaldī sotā hūṁ.",ja:"それから、夜は早く寝ます。"},
  {t:"back",hi:"आप क्या करते हैं?",rom:"āp kyā karte haiṁ?",ja:"あなたは何をしていますか？"}],
  tip:"習慣は -ता हूँ で言います。हर दिन（毎日）を入れると習慣だとよく伝わります。"},
 {id:16,lv:1,topic:"雑談",who:"Arjun",q:"क्या आपको क्रिकेट पसंद है?",qRom:"kyā āpko krikeṭ pasand hai?",qja:"クリケットは好きですか？",ans:[
  {t:"a",hi:"हाँ, पसंद है।",rom:"hāṁ, pasand hai.",ja:"はい、好きです。"},
  {t:"add",hi:"लेकिन मुझे इसके नियम मालूम नहीं हैं।",rom:"lekin mujhe iske niyam mālūm nahīṁ haiṁ.",ja:"でも、ルールはわかりません。"},
  {t:"back",hi:"क्या आप मुझे नियम बता सकते हैं?",rom:"kyā āp mujhe niyam batā sakte haiṁ?",ja:"ルールを教えてもらえますか？"}],
  tip:"知らないことは正直に言って「教えて」と頼むと、相手はよろこんで話してくれます。"},
 {id:17,lv:1,topic:"仕事",who:"Neha",q:"आपका क्लिनिक कहाँ है?",qRom:"āpkā klinik kahāṁ hai?",qja:"院はどこにありますか？",ans:[
  {t:"a",hi:"मेरा क्लिनिक एहिमे के ओज़ू शहर में है।",rom:"merā klinik Ehime ke Ozū shahar meṁ hai.",ja:"院は愛媛の大洲市にあります。"},
  {t:"add",hi:"ओज़ू एक छोटा और सुंदर शहर है।",rom:"Ozū ek chhoṭā aur sundar shahar hai.",ja:"大洲は小さくてきれいな町です。"},
  {t:"back",hi:"आप किस शहर में रहती हैं?",rom:"āp kis shahar meṁ rahtī haiṁ?",ja:"あなたはどの町に住んでいますか？"}],
  tip:"「〜県の〜市」は एहिमे के ओज़ू शहर。日本語と同じ順番です。"},
 {id:18,lv:1,topic:"日本",who:"Anita",q:"ओज़ू में क्या मशहूर है?",qRom:"Ozū meṁ kyā mashhūr hai?",qja:"大洲は何が有名ですか？",ans:[
  {t:"a",hi:"ओज़ू का क़िला बहुत मशहूर है।",rom:"Ozū kā qilā bahut mashhūr hai.",ja:"大洲城がとても有名です。"},
  {t:"add",hi:"शहर में एक सुंदर नदी भी है।",rom:"shahar meṁ ek sundar nadī bhī hai.",ja:"町にはきれいな川もあります。"},
  {t:"back",hi:"आपके शहर में क्या मशहूर है?",rom:"āpke shahar meṁ kyā mashhūr hai?",ja:"あなたの町は何が有名ですか？"}],
  tip:"क़िला は「城・とりで」。インドにも有名な क़िला（ラール・キラーなど）があるので通じやすい言葉です。"},
 {id:19,lv:1,topic:"雑談",who:"Raj",q:"आप छुट्टी के दिन क्या करते हैं?",qRom:"āp chhuṭṭī ke din kyā karte haiṁ?",qja:"休みの日は何をしますか？",ans:[
  {t:"a",hi:"मैं हिंदी और अंग्रेज़ी सीखता हूँ।",rom:"maiṁ hindī aur angrezī sīkhtā hūṁ.",ja:"ヒンディー語と英語を勉強します。"},
  {t:"add",hi:"कभी-कभी मैं नदी के पास टहलता हूँ।",rom:"kabhī-kabhī maiṁ nadī ke pās ṭahaltā hūṁ.",ja:"ときどき川のそばを散歩します。"},
  {t:"back",hi:"आप छुट्टी के दिन क्या करते हैं?",rom:"āp chhuṭṭī ke din kyā karte haiṁ?",ja:"あなたは休みの日に何をしますか？"}],
  tip:"कभी-कभी は「ときどき」。自分の休みの日の過ごし方に入れかえましょう。"},
 {id:20,lv:1,topic:"食べ物",who:"Priya",q:"क्या आप खाना बनाते हैं?",qRom:"kyā āp khānā banāte haiṁ?",qja:"料理はしますか？",ans:[
  {t:"a",hi:"हाँ, कभी-कभी बनाता हूँ।",rom:"hāṁ, kabhī-kabhī banātā hūṁ.",ja:"はい、ときどき作ります。"},
  {t:"add",hi:"लेकिन मैं भारतीय खाना नहीं बना सकता।",rom:"lekin maiṁ bhāratīy khānā nahīṁ banā saktā.",ja:"でも、インド料理は作れません。"},
  {t:"back",hi:"क्या आप मुझे एक आसान रेसिपी बता सकती हैं?",rom:"kyā āp mujhe ek āsān resipī batā saktī haiṁ?",ja:"かんたんなレシピを教えてもらえますか？"}],
  tip:"女性の相手には बता सकती हैं?。「できない」と言ったあとに「教えて」で返すと会話が続きます。"},
 {id:21,lv:1,topic:"インド",who:"Sharma ji",q:"आपको भारत में क्या पसंद है?",qRom:"āpko Bhārat meṁ kyā pasand hai?",qja:"インドの何が好きですか？",ans:[
  {t:"a",hi:"मुझे यहाँ के लोग बहुत पसंद हैं।",rom:"mujhe yahāṁ ke log bahut pasand haiṁ.",ja:"ここの人たちが大好きです。"},
  {t:"add",hi:"और यहाँ का खाना भी बहुत स्वादिष्ट है।",rom:"aur yahāṁ kā khānā bhī bahut svādishṭ hai.",ja:"それに、ここの料理もとてもおいしいです。"},
  {t:"back",hi:"क्या आपको जापानी चीज़ें पसंद हैं?",rom:"kyā āpko jāpānī chīzeṁ pasand haiṁ?",ja:"日本のものは好きですか？"}],
  tip:"यहाँ के लोग（ここの人たち）は複数なので पसंद हैं。「人」をほめると、とてもよろこばれます。"},
 {id:22,lv:1,topic:"雑談",who:"Arjun",q:"आपका पसंदीदा मौसम कौन-सा है?",qRom:"āpkā pasandīdā mausam kaun-sā hai?",qja:"いちばん好きな季節はどれですか？",ans:[
  {t:"a",hi:"मुझे वसंत सबसे ज़्यादा पसंद है।",rom:"mujhe vasant sabse zyādā pasand hai.",ja:"春がいちばん好きです。"},
  {t:"add",hi:"वसंत में जापान में साकुरा के फूल खिलते हैं।",rom:"vasant meṁ jāpān meṁ sākurā ke phūl khilte haiṁ.",ja:"春、日本では桜の花が咲きます。"},
  {t:"back",hi:"भारत में कौन-सा मौसम सबसे अच्छा है?",rom:"Bhārat meṁ kaun-sā mausam sabse achchhā hai?",ja:"インドではどの季節がいちばんいいですか？"}],
  tip:"सबसे ज़्यादा は「いちばん」。साकुरा は「桜」として話せばたいてい通じます。"},
 {id:23,lv:1,topic:"日本",who:"Neha",q:"क्या जापान में लोग चाय पीते हैं?",qRom:"kyā jāpān meṁ log chāy pīte haiṁ?",qja:"日本の人はお茶を飲みますか？",ans:[
  {t:"a",hi:"जी हाँ, बहुत पीते हैं।",rom:"jī hāṁ, bahut pīte haiṁ.",ja:"はい、よく飲みます。"},
  {t:"add",hi:"जापान में हरी चाय बहुत मशहूर है।",rom:"jāpān meṁ harī chāy bahut mashhūr hai.",ja:"日本では緑茶がとても有名です。"},
  {t:"back",hi:"क्या आप हरी चाय पीती हैं?",rom:"kyā āp harī chāy pītī haiṁ?",ja:"あなたは緑茶を飲みますか？"}],
  tip:"緑茶は हरी चाय（緑のお茶）。インドの चाय はミルクティーなので、ちがいの話で盛り上がります。"},
 {id:24,lv:1,topic:"仕事",who:"Anita",q:"आप कितने बजे क्लिनिक जाते हैं?",qRom:"āp kitne baje klinik jāte haiṁ?",qja:"何時に院へ行きますか？",ans:[
  {t:"a",hi:"मैं सुबह आठ बजे क्लिनिक जाता हूँ।",rom:"maiṁ subah āṭh baje klinik jātā hūṁ.",ja:"朝8時に院へ行きます。"},
  {t:"add",hi:"क्लिनिक शाम तक खुला रहता है।",rom:"klinik shām tak khulā rahtā hai.",ja:"院は夕方まで開いています。"},
  {t:"back",hi:"आप कितने बजे ऑफ़िस जाती हैं?",rom:"āp kitne baje ofis jātī haiṁ?",ja:"あなたは何時に会社へ行きますか？"}],
  tip:"時刻は練習用の例です。自分の時刻に入れかえましょう。女性の相手には जाती हैं。"},
 {id:25,lv:1,topic:"予定",who:"Raj",q:"क्या हम रविवार को बात कर सकते हैं?",qRom:"kyā ham ravivār ko bāt kar sakte haiṁ?",qja:"日曜日に話せますか？",ans:[
  {t:"a",hi:"जी हाँ, रविवार को मैं फ़्री हूँ।",rom:"jī hāṁ, ravivār ko maiṁ frī hūṁ.",ja:"はい、日曜日は空いています。"},
  {t:"add",hi:"शाम सात बजे के बाद मैं घर पर हूँ।",rom:"shām sāt baje ke bād maiṁ ghar par hūṁ.",ja:"夜7時以降は家にいます。"},
  {t:"back",hi:"आपके लिए कौन-सा समय ठीक है?",rom:"āpke lie kaun-sā samay ṭhīk hai?",ja:"あなたには何時がいいですか？"}],
  tip:"曜日には को をつけます（रविवार को＝日曜日に）。日本との時差（3時間半）も意識して時間を決めましょう。"},

 // ---- lv2：第2期（進行形・未来・過去）----
 {id:26,lv:2,topic:"雑談",who:"Raj",q:"आप अभी क्या कर रहे हैं?",qRom:"āp abhī kyā kar rahe haiṁ?",qja:"今、何をしていますか？",ans:[
  {t:"a",hi:"मैं अभी क्लिनिक में काम कर रहा हूँ।",rom:"maiṁ abhī klinik meṁ kām kar rahā hūṁ.",ja:"今、院で仕事をしています。"},
  {t:"add",hi:"आज बहुत लोग आ रहे हैं।",rom:"āj bahut log ā rahe haiṁ.",ja:"今日はたくさんの人が来ています。"},
  {t:"back",hi:"आप क्या कर रहे हैं?",rom:"āp kyā kar rahe haiṁ?",ja:"あなたは何をしていますか？"}],
  tip:"「今〜している」は रहा हूँ。電話のはじめによく聞かれる質問です。"},
 {id:27,lv:2,topic:"雑談",who:"Priya",q:"आपका वीकेंड कैसा रहा?",qRom:"āpkā vīkenḍ kaisā rahā?",qja:"週末はどうでしたか？",ans:[
  {t:"a",hi:"बहुत अच्छा रहा।",rom:"bahut achchhā rahā.",ja:"とてもよかったです。"},
  {t:"add",hi:"मैंने घर पर आराम किया और हिंदी पढ़ी।",rom:"maiṁne ghar par ārām kiyā aur hindī paṛhī.",ja:"家で休んで、ヒンディー語を勉強しました。"},
  {t:"back",hi:"आपका वीकेंड कैसा रहा?",rom:"āpkā vīkenḍ kaisā rahā?",ja:"あなたの週末はどうでしたか？"}],
  tip:"「〜はどうだった？」は कैसा रहा?。ने がつくと動詞は目的語に合わせます（हिंदी पढ़ी）。"},
 {id:28,lv:2,topic:"食べ物",who:"Arjun",q:"आज दोपहर में आपने क्या खाया?",qRom:"āj dopahar meṁ āpne kyā khāyā?",qja:"今日のお昼は何を食べましたか？",ans:[
  {t:"a",hi:"मैंने सोबा खाया।",rom:"maiṁne sobā khāyā.",ja:"そばを食べました。"},
  {t:"add",hi:"सोबा एक तरह के जापानी नूडल्स हैं।",rom:"sobā ek tarah ke jāpānī nūḍals haiṁ.",ja:"そばは日本の麺の一種です。"},
  {t:"back",hi:"आपने क्या खाया?",rom:"āpne kyā khāyā?",ja:"あなたは何を食べましたか？"}],
  tip:"आपने क्या खाया? は相手が男性でも女性でも同じ形。ने 構文は聞き返しが楽です。"},
 {id:29,lv:2,topic:"インド",who:"Sharma ji",q:"आप भारत कब आएँगे?",qRom:"āp Bhārat kab āeṁge?",qja:"インドにはいつ来ますか？",ans:[
  {t:"a",hi:"मैं अगले महीने आऊँगा।",rom:"maiṁ agle mahīne āūṁgā.",ja:"来月行きます。"},
  {t:"add",hi:"इस बार मैं दिल्ली में रुकूँगा।",rom:"is bār maiṁ dillī meṁ rukūṁgā.",ja:"今回はデリーに泊まります。"},
  {t:"back",hi:"क्या आप उस समय दिल्ली में होंगे?",rom:"kyā āp us samay dillī meṁ hoṁge?",ja:"その時、デリーにいらっしゃいますか？"}],
  tip:"自分は आऊँगा、相手（男性・आप）は होंगे。予定は練習用の例です。"},
 {id:30,lv:2,topic:"インド",who:"Neha",q:"आपकी फ़्लाइट कैसी रही?",qRom:"āpkī flāiṭ kaisī rahī?",qja:"フライトはどうでしたか？",ans:[
  {t:"a",hi:"अच्छी रही, धन्यवाद।",rom:"achchhī rahī, dhanyavād.",ja:"よかったです、ありがとう。"},
  {t:"add",hi:"लेकिन मैं थोड़ा थक गया।",rom:"lekin maiṁ thoṛā thak gayā.",ja:"でも、少し疲れました。"},
  {t:"back",hi:"आपका दिन कैसा रहा?",rom:"āpkā din kaisā rahā?",ja:"あなたの一日はどうでしたか？"}],
  tip:"फ़्लाइट は女性名詞なので कैसी रही → अच्छी रही。थक गया（疲れてしまった）は複合動詞です。"},
 {id:31,lv:2,topic:"健康",who:"Anita",q:"आप थके हुए लग रहे हैं। सब ठीक है?",qRom:"āp thake hue lag rahe haiṁ. sab ṭhīk hai?",qja:"疲れているように見えます。大丈夫ですか？",ans:[
  {t:"a",hi:"हाँ, बस नींद थोड़ी कम हुई।",rom:"hāṁ, bas nīṁd thoṛī kam huī.",ja:"はい、ちょっと寝不足なだけです。"},
  {t:"add",hi:"कल रात मैं देर से सोया।",rom:"kal rāt maiṁ der se soyā.",ja:"昨日の夜、遅く寝ました。"},
  {t:"back",hi:"आपका काम कैसा चल रहा है?",rom:"āpkā kām kaisā chal rahā hai?",ja:"お仕事はどうですか？"}],
  tip:"心配してもらったら、短く答えて話題を相手にもどすと気をつかわせません。"},
 {id:32,lv:2,topic:"予定",who:"Raj",q:"कल आप क्या करेंगे?",qRom:"kal āp kyā kareṁge?",qja:"明日は何をしますか？",ans:[
  {t:"a",hi:"कल मैं एक मीटिंग में जाऊँगा।",rom:"kal maiṁ ek mīṭing meṁ jāūṁgā.",ja:"明日は会議に行きます。"},
  {t:"add",hi:"शाम को मैं दोस्तों से मिलूँगा।",rom:"shām ko maiṁ dostoṁ se milūṁgā.",ja:"夕方は友だちに会います。"},
  {t:"back",hi:"आप कल क्या करेंगे?",rom:"āp kal kyā kareṁge?",ja:"あなたは明日何をしますか？"}],
  tip:"未来は -ऊँगा（自分・男性）。「〜に会う」は से मिलना で、को ではなく से を使います。"},
 {id:33,lv:2,topic:"予定",who:"Priya",q:"आप भारत में कितने दिन रहेंगे?",qRom:"āp Bhārat meṁ kitne din raheṁge?",qja:"インドには何日いますか？",ans:[
  {t:"a",hi:"मैं पाँच दिन रहूँगा।",rom:"maiṁ pāṁch din rahūṁgā.",ja:"5日間います。"},
  {t:"add",hi:"दिल्ली के बाद मैं बेंगलुरु जाऊँगा।",rom:"dillī ke bād maiṁ Bengaluru jāūṁgā.",ja:"デリーのあと、ベンガルールに行きます。"},
  {t:"back",hi:"क्या आप उस हफ़्ते दिल्ली में रहेंगी?",rom:"kyā āp us hafte dillī meṁ raheṁgī?",ja:"その週はデリーにいらっしゃいますか？"}],
  tip:"日数と町は練習用の例です。女性の相手の未来形は रहेंगी（-एँगी）になります。"},
 {id:34,lv:2,topic:"雑談",who:"Arjun",q:"कल आपने क्या किया?",qRom:"kal āpne kyā kiyā?",qja:"昨日は何をしましたか？",ans:[
  {t:"a",hi:"कल मैंने पूरे दिन काम किया।",rom:"kal maiṁne pūre din kām kiyā.",ja:"昨日は一日じゅう仕事をしました。"},
  {t:"add",hi:"शाम को मैंने एक हिंदी फ़िल्म देखी।",rom:"shām ko maiṁne ek hindī film dekhī.",ja:"夕方にヒンディー語の映画を見ました。"},
  {t:"back",hi:"आपने कल क्या किया?",rom:"āpne kal kyā kiyā?",ja:"あなたは昨日何をしましたか？"}],
  tip:"फ़िल्म は女性名詞なので देखी。内容は練習用の例なので、自分のしたことに入れかえましょう。"},
 {id:35,lv:2,topic:"食べ物",who:"Neha",q:"आपको यह खाना कैसा लगा?",qRom:"āpko yah khānā kaisā lagā?",qja:"この料理はどうでしたか？",ans:[
  {t:"a",hi:"बहुत स्वादिष्ट लगा।",rom:"bahut svādishṭ lagā.",ja:"とてもおいしかったです。"},
  {t:"add",hi:"पनीर थोड़ा तीखा था, लेकिन अच्छा था।",rom:"panīr thoṛā tīkhā thā, lekin achchhā thā.",ja:"パニールは少し辛かったけど、おいしかったです。"},
  {t:"back",hi:"क्या यह आपने बनाया?",rom:"kyā yah āpne banāyā?",ja:"これはあなたが作ったのですか？"}],
  tip:"感想は … लगा（〜と感じた）。手作りかどうか聞くと、作った人はとてもよろこびます。"},
 {id:36,lv:2,topic:"インド",who:"Sharma ji",q:"आपको दिल्ली कैसी लगी?",qRom:"āpko dillī kaisī lagī?",qja:"デリーはどうでしたか？",ans:[
  {t:"a",hi:"मुझे दिल्ली बहुत अच्छी लगी।",rom:"mujhe dillī bahut achchhī lagī.",ja:"デリーはとてもよかったです。"},
  {t:"add",hi:"लेकिन सड़कों पर बहुत ट्रैफ़िक था।",rom:"lekin saṛkoṁ par bahut ṭraifik thā.",ja:"でも、道はすごい渋滞でした。"},
  {t:"back",hi:"आप दिल्ली में कब से रहते हैं?",rom:"āp dillī meṁ kab se rahte haiṁ?",ja:"デリーにはいつから住んでいますか？"}],
  tip:"दिल्ली は女性扱いなので कैसी लगी → अच्छी लगी。よい点を先に、そのあと लेकिन で軽く。"},
 {id:37,lv:2,topic:"健康",who:"Anita",q:"क्या हुआ? आपकी तबीयत ठीक नहीं है?",qRom:"kyā huā? āpkī tabīyat ṭhīk nahīṁ hai?",qja:"どうしたんですか？体調がよくないのですか？",ans:[
  {t:"a",hi:"मुझे थोड़ा सिर दर्द है।",rom:"mujhe thoṛā sir dard hai.",ja:"少し頭が痛いです。"},
  {t:"add",hi:"आज मैं जल्दी सो जाऊँगा।",rom:"āj maiṁ jaldī so jāūṁgā.",ja:"今日は早く寝ます。"},
  {t:"back",hi:"क्या अदरक वाली चाय अच्छी रहेगी?",rom:"kyā adrak vālī chāy achchhī rahegī?",ja:"しょうがのチャイはいいでしょうか？"}],
  tip:"体調は मुझे … है（頭痛・熱など）。インドでは体調が悪いと अदरक वाली चाय をすすめられることがよくあります。"},
 {id:38,lv:2,topic:"日本",who:"Priya",q:"जापान में नया साल कैसे मनाते हैं?",qRom:"jāpān meṁ nayā sāl kaise manāte haiṁ?",qja:"日本ではお正月をどうやって祝いますか？",ans:[
  {t:"a",hi:"लोग परिवार के साथ घर पर रहते हैं।",rom:"log parivār ke sāth ghar par rahte haiṁ.",ja:"みんな家族と家で過ごします。"},
  {t:"add",hi:"पहली जनवरी को बहुत लोग मंदिर जाते हैं।",rom:"pahlī janvarī ko bahut log mandir jāte haiṁ.",ja:"1月1日には、たくさんの人がお寺や神社に行きます。"},
  {t:"back",hi:"भारत में नया साल कब होता है?",rom:"Bhārat meṁ nayā sāl kab hotā hai?",ja:"インドではお正月はいつですか？"}],
  tip:"インドは地方によって新年の日がちがいます。この聞き返しで地方の話が聞けます。"},
 {id:39,lv:2,topic:"仕事",who:"Raj",q:"आजकल काम कैसा चल रहा है?",qRom:"ājkal kām kaisā chal rahā hai?",qja:"最近、仕事はどうですか？",ans:[
  {t:"a",hi:"अच्छा चल रहा है।",rom:"achchhā chal rahā hai.",ja:"順調です。"},
  {t:"add",hi:"मैं अपना बुकिंग सिस्टम बेहतर बना रहा हूँ।",rom:"maiṁ apnā buking sisṭam behtar banā rahā hūṁ.",ja:"自分の予約システムをよりよくしているところです。"},
  {t:"back",hi:"आपका काम कैसा चल रहा है?",rom:"āpkā kām kaisā chal rahā hai?",ja:"あなたのお仕事はどうですか？"}],
  tip:"कैसा चल रहा है? は「調子はどう？」の決まった言い方。答えも चल रहा है で返せます。"},
 {id:40,lv:2,topic:"予定",who:"Neha",q:"अगले हफ़्ते की ऑनलाइन मीटिंग में आप आएँगे?",qRom:"agle hafte kī onlāin mīṭing meṁ āp āeṁge?",qja:"来週のオンラインの集まりに来ますか？",ans:[
  {t:"a",hi:"जी हाँ, ज़रूर आऊँगा।",rom:"jī hāṁ, zarūr āūṁgā.",ja:"はい、必ず行きます。"},
  {t:"add",hi:"मैं थोड़ा हिंदी में भी बोलूँगा।",rom:"maiṁ thoṛā hindī meṁ bhī bolūṁgā.",ja:"少しヒンディー語でも話します。"},
  {t:"back",hi:"मीटिंग कितने बजे शुरू होगी?",rom:"mīṭing kitne baje shurū hogī?",ja:"集まりは何時に始まりますか？"}],
  tip:"ज़रूर（必ず）を入れると、行く気持ちがしっかり伝わります。मीटिंग は女性名詞なので होगी。"},
 {id:41,lv:2,topic:"インド",who:"Arjun",q:"आप पहली बार भारत कब आए?",qRom:"āp pahlī bār Bhārat kab āe?",qja:"はじめてインドに来たのはいつですか？",ans:[
  {t:"a",hi:"मैं कुछ साल पहले पहली बार आया।",rom:"maiṁ kuchh sāl pahle pahlī bār āyā.",ja:"数年前にはじめて来ました。"},
  {t:"add",hi:"उस समय मैं हिंदी नहीं बोल सकता था।",rom:"us samay maiṁ hindī nahīṁ bol saktā thā.",ja:"そのころはヒンディー語が話せませんでした。"},
  {t:"back",hi:"आप जापान कब आएँगे?",rom:"āp jāpān kab āeṁge?",ja:"あなたはいつ日本に来ますか？"}],
  tip:"年がわかるなら कुछ साल पहले を 20XX में に入れかえましょう。"},
 {id:42,lv:2,topic:"お祭り",who:"Priya",q:"दिवाली पर आप कहाँ होंगे?",qRom:"divālī par āp kahāṁ hoṁge?",qja:"ディワリのときはどこにいますか？",ans:[
  {t:"a",hi:"इस साल मैं जापान में रहूँगा।",rom:"is sāl maiṁ jāpān meṁ rahūṁgā.",ja:"今年は日本にいます。"},
  {t:"add",hi:"लेकिन मैं आपको वीडियो कॉल करूँगा।",rom:"lekin maiṁ āpko vīḍiyo kol karūṁgā.",ja:"でも、ビデオ通話をしますね。"},
  {t:"back",hi:"आप दिवाली कैसे मनाएँगी?",rom:"āp divālī kaise manāeṁgī?",ja:"ディワリはどうやって祝いますか？"}],
  tip:"お祭りの話は「どう祝うの？」と聞くと、相手が楽しそうに話してくれます。女性には मनाएँगी。"},
 {id:43,lv:2,topic:"ビジネス",who:"Sharma ji",q:"आज का दिन कैसा रहा?",qRom:"āj kā din kaisā rahā?",qja:"今日一日どうでしたか？",ans:[
  {t:"a",hi:"बहुत अच्छा रहा।",rom:"bahut achchhā rahā.",ja:"とてもよかったです。"},
  {t:"add",hi:"मीटिंग में बहुत अच्छी बातें हुईं।",rom:"mīṭing meṁ bahut achchhī bāteṁ huīṁ.",ja:"会議でとてもいい話ができました。"},
  {t:"back",hi:"हम फिर कब मिलेंगे?",rom:"ham phir kab mileṁge?",ja:"次はいつ会いましょうか？"}],
  tip:"बातें（話）は女性・複数なので हुईं。最後に次の約束を聞くと関係が続きます。"},
 {id:44,lv:2,topic:"移動",who:"Anita",q:"आप होटल कैसे जाएँगे?",qRom:"āp hoṭal kaise jāeṁge?",qja:"ホテルへはどうやって行きますか？",ans:[
  {t:"a",hi:"मैं ऑटो से जाऊँगा।",rom:"maiṁ oṭo se jāūṁgā.",ja:"オートリキシャで行きます。"},
  {t:"add",hi:"होटल यहाँ से ज़्यादा दूर नहीं है।",rom:"hoṭal yahāṁ se zyādā dūr nahīṁ hai.",ja:"ホテルはここからそんなに遠くありません。"},
  {t:"back",hi:"ऑटो का किराया कितना होगा?",rom:"oṭo kā kirāyā kitnā hogā?",ja:"オートの料金はいくらくらいでしょう？"}],
  tip:"乗り物は से（〜で）。地元の人に料金の目安を聞いておくと安心です。"},
 {id:45,lv:2,topic:"健康",who:"Raj",q:"आजकल आप ठीक से सो रहे हैं?",qRom:"ājkal āp ṭhīk se so rahe haiṁ?",qja:"最近よく眠れていますか？",ans:[
  {t:"a",hi:"हाँ, ठीक से सो रहा हूँ।",rom:"hāṁ, ṭhīk se so rahā hūṁ.",ja:"はい、よく眠れています。"},
  {t:"add",hi:"रात को मैं फ़ोन जल्दी बंद कर देता हूँ।",rom:"rāt ko maiṁ fon jaldī band kar detā hūṁ.",ja:"夜はスマホを早めに切るようにしています。"},
  {t:"back",hi:"आप कितने घंटे सोते हैं?",rom:"āp kitne ghanṭe sote haiṁ?",ja:"何時間くらい寝ますか？"}],
  tip:"आजकल（最近）＋進行形で「このごろ〜している」。बंद कर देना は「切ってしまう」の複合動詞です。"},
 {id:46,lv:2,topic:"日本",who:"Neha",q:"आप जापान से क्या लाए?",qRom:"āp jāpān se kyā lāe?",qja:"日本から何を持ってきたのですか？",ans:[
  {t:"a",hi:"मैं आपके लिए जापानी मिठाई लाया।",rom:"maiṁ āpke lie jāpānī miṭhāī lāyā.",ja:"あなたに日本のお菓子を持ってきました。"},
  {t:"add",hi:"यह मेरे शहर की मशहूर मिठाई है।",rom:"yah mere shahar kī mashhūr miṭhāī hai.",ja:"私の町の有名なお菓子です。"},
  {t:"back",hi:"क्या आपको मीठा पसंद है?",rom:"kyā āpko mīṭhā pasand hai?",ja:"甘いものは好きですか？"}],
  tip:"लाना（持ってくる）は ने を使わない動詞なので मैं … लाया です。"},
 {id:47,lv:2,topic:"食べ物",who:"Arjun",q:"रात को आप क्या खाना चाहेंगे?",qRom:"rāt ko āp kyā khānā chāheṁge?",qja:"夜は何を食べたいですか？",ans:[
  {t:"a",hi:"मैं दक्षिण भारतीय खाना खाना चाहूँगा।",rom:"maiṁ dakshiṇ bhāratīy khānā khānā chāhūṁgā.",ja:"南インド料理が食べたいです。"},
  {t:"add",hi:"मैंने यहाँ अभी तक डोसा नहीं खाया।",rom:"maiṁne yahāṁ abhī tak ḍosā nahīṁ khāyā.",ja:"ここではまだドーサを食べていません。"},
  {t:"back",hi:"क्या आप कोई अच्छी जगह जानते हैं?",rom:"kyā āp koī achchhī jagah jānte haiṁ?",ja:"どこかいいお店を知っていますか？"}],
  tip:"चाहूँगा は「〜したいです」のていねいな言い方。खाना खाना（料理を食べる）は同じ語が2回でOK。"},
 {id:48,lv:2,topic:"仕事",who:"Sharma ji",q:"आज आपने क्या-क्या किया?",qRom:"āj āpne kyā-kyā kiyā?",qja:"今日はどんなことをしましたか？",ans:[
  {t:"a",hi:"सुबह मैंने कुछ ईमेल लिखे।",rom:"subah maiṁne kuchh īmel likhe.",ja:"朝はメールを何通か書きました。"},
  {t:"add",hi:"दोपहर को मैं एक होटल देखने गया।",rom:"dopahar ko maiṁ ek hoṭal dekhne gayā.",ja:"昼はホテルを見に行きました。"},
  {t:"back",hi:"आपका दिन कैसा रहा?",rom:"āpkā din kaisā rahā?",ja:"あなたの一日はどうでしたか？"}],
  tip:"क्या-क्या は「どんなことを（いくつも）」。ने がつく文（लिखे）と、つかない文（गया）を区別しましょう。"},
 {id:49,lv:2,topic:"雑談",who:"Priya",q:"आप हिंदी कब से सीख रहे हैं?",qRom:"āp hindī kab se sīkh rahe haiṁ?",qja:"いつからヒンディー語を勉強しているのですか？",ans:[
  {t:"a",hi:"मैं इस साल से हिंदी सीख रहा हूँ।",rom:"maiṁ is sāl se hindī sīkh rahā hūṁ.",ja:"今年から勉強しています。"},
  {t:"add",hi:"मैं हर दिन थोड़ा-थोड़ा पढ़ता हूँ।",rom:"maiṁ har din thoṛā-thoṛā paṛhtā hūṁ.",ja:"毎日少しずつ勉強しています。"},
  {t:"back",hi:"मेरी हिंदी कैसी लग रही है?",rom:"merī hindī kaisī lag rahī hai?",ja:"私のヒンディー語、どうですか？"}],
  tip:"कब से ＋進行形で「いつから〜している」。自分のヒンディー語の感想を聞くと、ほめてもらえたり直してもらえたりします。"},
 {id:50,lv:2,topic:"予定",who:"Anita",q:"कल आप कितने बजे निकलेंगे?",qRom:"kal āp kitne baje nikleṁge?",qja:"明日は何時に出発しますか？",ans:[
  {t:"a",hi:"मैं सुबह नौ बजे निकलूँगा।",rom:"maiṁ subah nau baje niklūṁgā.",ja:"朝9時に出ます。"},
  {t:"add",hi:"मुझे दस बजे एयरपोर्ट पहुँचना है।",rom:"mujhe das baje eyarporṭ pahuṁchnā hai.",ja:"10時に空港に着かないといけません。"},
  {t:"back",hi:"कल आप क्या कर रही हैं?",rom:"kal āp kyā kar rahī haiṁ?",ja:"あなたは明日何をする予定ですか？"}],
  tip:"मुझे … -ना है は「〜しなければ」。進行形 कर रही हैं は近い予定にも使えます。"},

 // ---- lv3：第3期（関係づくり）----
 {id:51,lv:3,topic:"仕事",who:"Priya",q:"क्लिनिक खोलने से पहले आप क्या काम करते थे?",qRom:"klinik kholne se pahle āp kyā kām karte the?",qja:"院を開く前は何の仕事をしていましたか？",ans:[
  {t:"a",hi:"क्लिनिक खोलने से पहले मैं एथलेटिक ट्रेनर था।",rom:"klinik kholne se pahle maiṁ ethleṭik ṭrenar thā.",ja:"院を開く前は、アスレティックトレーナーでした。"},
  {t:"add",hi:"मैंने कॉलेज और प्रोफ़ेशनल टीमों के साथ काम किया।",rom:"maiṁne kolej aur profeshnal ṭīmoṁ ke sāth kām kiyā.",ja:"大学やプロのチームといっしょに働きました。"},
  {t:"back",hi:"आपने अपना काम कैसे शुरू किया?",rom:"āpne apnā kām kaise shurū kiyā?",ja:"あなたはどうやって今の仕事を始めたのですか？"}],
  tip:"-ने से पहले は「〜する前に」。経歴を1つ言ったら、相手の始まりの話を聞きましょう。"},
 {id:52,lv:3,topic:"仕事",who:"Sharma ji",q:"आपने अपना क्लिनिक कब खोला?",qRom:"āpne apnā klinik kab kholā?",qja:"院はいつ開きましたか？",ans:[
  {t:"a",hi:"मैंने 2018 में अपना क्लिनिक खोला।",rom:"maiṁne 2018 meṁ apnā klinik kholā.",ja:"2018年に院を開きました。"},
  {t:"add",hi:"तब से मैं ओज़ू में काम कर रहा हूँ।",rom:"tab se maiṁ Ozū meṁ kām kar rahā hūṁ.",ja:"それからずっと大洲で働いています。"},
  {t:"back",hi:"आपकी कंपनी कब शुरू हुई?",rom:"āpkī kampanī kab shurū huī?",ja:"あなたの会社はいつ始まったのですか？"}],
  tip:"तब से（それ以来）＋進行形で「ずっと〜している」。2018 は「दो हज़ार अठारह」と読みます。"},
 {id:53,lv:3,topic:"家族",who:"Priya",q:"आपका परिवार कहाँ रहता है?",qRom:"āpkā parivār kahāṁ rahtā hai?",qja:"ご家族はどこに住んでいますか？",ans:[
  {t:"a",hi:"मेरा परिवार जापान में है।",rom:"merā parivār jāpān meṁ hai.",ja:"家族は日本にいます。"},
  {t:"add",hi:"हमारे परिवार का एक पुराना साके का बिज़नेस भी है।",rom:"hamāre parivār kā ek purānā sāke kā biznes bhī hai.",ja:"家族には古くからの酒屋の商売もあります。"},
  {t:"back",hi:"आप कहाँ की रहने वाली हैं?",rom:"āp kahāṁ kī rahne vālī haiṁ?",ja:"あなたはどちらの出身ですか？"}],
  tip:"कहाँ के रहने वाले हैं?（男性）／कहाँ की रहने वाली हैं?（女性）は「ご出身は？」のていねいな聞き方です。"},
 {id:54,lv:3,topic:"家族",who:"Raj",q:"आपके परिवार का कौन-सा बिज़नेस है?",qRom:"āpke parivār kā kaun-sā biznes hai?",qja:"ご家族はどんな商売をしているのですか？",ans:[
  {t:"a",hi:"मेरे परिवार की एक साके की दुकान है, ओदानी साकेतेन।",rom:"mere parivār kī ek sāke kī dukān hai, Odānī Sāketen.",ja:"家族の酒屋があります。小谷酒店です。"},
  {t:"add",hi:"वह 1957 में शुरू हुई थी।",rom:"vah 1957 meṁ shurū huī thī.",ja:"1957年に始まりました。"},
  {t:"back",hi:"क्या आपका परिवार भी बिज़नेस करता है?",rom:"kyā āpkā parivār bhī biznes kartā hai?",ja:"あなたのご家族も商売をしていますか？"}],
  tip:"दुकान（店）は女性名詞なので शुरू हुई थी。インドには家族で商売をする人が多く、話が合います。"},
 {id:55,lv:3,topic:"家族",who:"Anita",q:"मेरी बेटी जापानी सीखना चाहती है। आप क्या सलाह देंगे?",qRom:"merī beṭī jāpānī sīkhnā chāhtī hai. āp kyā salāh deṁge?",qja:"娘が日本語を学びたがっています。何かアドバイスはありますか？",ans:[
  {t:"a",hi:"यह तो बहुत अच्छी बात है!",rom:"yah to bahut achchhī bāt hai!",ja:"それはすばらしいですね！"},
  {t:"add",hi:"अगर वह एनीमे देखती है, तो जापानी जल्दी सीखेगी।",rom:"agar vah enīme dekhtī hai, to jāpānī jaldī sīkhegī.",ja:"アニメを見ているなら、日本語を早く覚えますよ。"},
  {t:"back",hi:"वह कितने साल की है?",rom:"vah kitne sāl kī hai?",ja:"娘さんは何歳ですか？"}],
  tip:"अगर … तो …（もし〜なら）。相手の家族の話は、名前や年を聞くと親しみが伝わります。"},
 {id:56,lv:3,topic:"家族",who:"Raj",q:"मेरे पिताजी आपसे मिलना चाहते हैं।",qRom:"mere pitājī āpse milnā chāhte haiṁ.",qja:"父があなたに会いたがっています。",ans:[
  {t:"a",hi:"जी ज़रूर, मुझे बहुत ख़ुशी होगी।",rom:"jī zarūr, mujhe bahut khushī hogī.",ja:"ぜひ。とてもうれしいです。"},
  {t:"add",hi:"आपने मुझे उनके बारे में बहुत कुछ बताया है।",rom:"āpne mujhe unke bāre meṁ bahut kuchh batāyā hai.",ja:"お父さんのことはたくさん聞いています。"},
  {t:"back",hi:"वे कब फ़्री होंगे?",rom:"ve kab frī hoṁge?",ja:"お父さんはいつご都合がいいですか？"}],
  tip:"目上の人は1人でも वे・होंगे（複数形）で話すのがていねいです。"},
 {id:57,lv:3,topic:"招待",who:"Sharma ji",q:"कल रात हमारे घर खाने पर आइए।",qRom:"kal rāt hamāre ghar khāne par āie.",qja:"明日の夜、うちに夕食に来てください。",ans:[
  {t:"a",hi:"बहुत-बहुत धन्यवाद, मैं ज़रूर आऊँगा।",rom:"bahut-bahut dhanyavād, maiṁ zarūr āūṁgā.",ja:"本当にありがとうございます。必ずうかがいます。"},
  {t:"add",hi:"मैं जापान से आपके लिए कुछ लाया हूँ।",rom:"maiṁ jāpān se āpke lie kuchh lāyā hūṁ.",ja:"日本からおみやげを持ってきています。"},
  {t:"back",hi:"मैं कितने बजे आऊँ?",rom:"maiṁ kitne baje āūṁ?",ja:"何時にうかがえばいいですか？"}],
  tip:"आऊँ? は「〜しましょうか」の形（接続法）。招かれたら時間を聞いておくと安心です。"},
 {id:58,lv:3,topic:"招待",who:"Priya",q:"और लीजिए, थोड़ी और दाल?",qRom:"aur lījie, thoṛī aur dāl?",qja:"もっとどうぞ。ダールをもう少しいかが？",ans:[
  {t:"a",hi:"बस, बहुत-बहुत शुक्रिया।",rom:"bas, bahut-bahut shukriyā.",ja:"もう十分です。本当にありがとう。"},
  {t:"add",hi:"पेट भर गया, खाना बहुत स्वादिष्ट था।",rom:"peṭ bhar gayā, khānā bahut svādishṭ thā.",ja:"おなかいっぱいです。とてもおいしかったです。"},
  {t:"back",hi:"यह दाल आपने बनाई?",rom:"yah dāl āpne banāī?",ja:"このダールはあなたが作ったのですか？"}],
  tip:"断るときは बस（もう十分）＋お礼＋ほめ言葉。दाल は女性名詞なので बनाई です。"},
 {id:59,lv:3,topic:"お祭り",who:"Neha",q:"क्या आपने कभी दिवाली देखी है?",qRom:"kyā āpne kabhī divālī dekhī hai?",qja:"ディワリを見たことはありますか？",ans:[
  {t:"a",hi:"नहीं, अभी तक नहीं देखी।",rom:"nahīṁ, abhī tak nahīṁ dekhī.",ja:"いいえ、まだ見たことがありません。"},
  {t:"add",hi:"मैं एक बार ज़रूर भारत में दिवाली देखना चाहता हूँ।",rom:"maiṁ ek bār zarūr Bhārat meṁ divālī dekhnā chāhtā hūṁ.",ja:"一度ぜひインドでディワリを見たいです。"},
  {t:"back",hi:"आप दिवाली पर क्या-क्या करती हैं?",rom:"āp divālī par kyā-kyā kartī haiṁ?",ja:"ディワリには何をするのですか？"}],
  tip:"経験は -ा है（देखी है）。見たことがあるなら हाँ, … में देखी है と入れかえましょう。"},
 {id:60,lv:3,topic:"お祭り",who:"Arjun",q:"होली पर आप भारत आएँगे?",qRom:"holī par āp Bhārat āeṁge?",qja:"ホーリーのときインドに来ますか？",ans:[
  {t:"a",hi:"अगर काम ठीक रहा, तो ज़रूर आऊँगा।",rom:"agar kām ṭhīk rahā, to zarūr āūṁgā.",ja:"仕事の都合がつけば、ぜひ行きます。"},
  {t:"add",hi:"मैंने सुना है कि होली बहुत मज़ेदार होती है।",rom:"maiṁne sunā hai ki holī bahut mazedār hotī hai.",ja:"ホーリーはとても楽しいと聞いています。"},
  {t:"back",hi:"होली पर लोग क्या-क्या करते हैं?",rom:"holī par log kyā-kyā karte haiṁ?",ja:"ホーリーではみんな何をするのですか？"}],
  tip:"अगर … तो ज़रूर（もし〜なら必ず）は、約束しすぎずに前向きな気持ちを伝えられます。"},
 {id:61,lv:3,topic:"日本",who:"Anita",q:"जापान में कौन-से त्योहार मनाए जाते हैं?",qRom:"jāpān meṁ kaun-se tyohār manāe jāte haiṁ?",qja:"日本ではどんなお祭りがありますか？",ans:[
  {t:"a",hi:"नया साल और ओबोन बड़े त्योहार हैं।",rom:"nayā sāl aur Obon baṛe tyohār haiṁ.",ja:"お正月とお盆が大きな行事です。"},
  {t:"add",hi:"ओबोन में लोग अपने पूर्वजों को याद करते हैं।",rom:"Obon meṁ log apne pūrvajoṁ ko yād karte haiṁ.",ja:"お盆には、みんなご先祖さまをしのびます。"},
  {t:"back",hi:"आपका पसंदीदा त्योहार कौन-सा है?",rom:"āpkā pasandīdā tyohār kaun-sā hai?",ja:"あなたのいちばん好きなお祭りはどれですか？"}],
  tip:"日本の行事は、インドの行事と似ているところ（家族・ご先祖・明かり）を言うと伝わりやすいです。"},
 {id:62,lv:3,topic:"日本",who:"Raj",q:"जापान में साके कैसे पिया जाता है?",qRom:"jāpān meṁ sāke kaise piyā jātā hai?",qja:"日本では日本酒をどうやって飲みますか？",ans:[
  {t:"a",hi:"साके ठंडा और गरम, दोनों तरह से पिया जाता है।",rom:"sāke ṭhanḍā aur garam, donoṁ tarah se piyā jātā hai.",ja:"日本酒は冷やしても温めても飲みます。"},
  {t:"add",hi:"जापानी खाने के साथ यह बहुत अच्छा लगता है।",rom:"jāpānī khāne ke sāth yah bahut achchhā lagtā hai.",ja:"和食といっしょだと、とてもおいしいです。"},
  {t:"back",hi:"क्या आपने कभी साके चखा है?",rom:"kyā āpne kabhī sāke chakhā hai?",ja:"日本酒を味わったことはありますか？"}],
  tip:"-या जाता है は「一般に〜される」。चखना は「味見する」で、お酒の話にちょうどいい動詞です。"},
 {id:63,lv:3,topic:"日本",who:"Sharma ji",q:"एहिमे किस चीज़ के लिए मशहूर है?",qRom:"Ehime kis chīz ke lie mashhūr hai?",qja:"愛媛は何で有名ですか？",ans:[
  {t:"a",hi:"एहिमे अपने संतरों के लिए मशहूर है।",rom:"Ehime apne santroṁ ke lie mashhūr hai.",ja:"愛媛はみかんで有名です。"},
  {t:"add",hi:"वहाँ के संतरे छोटे और बहुत मीठे होते हैं।",rom:"vahāṁ ke santre chhoṭe aur bahut mīṭhe hote haiṁ.",ja:"小さくて、とても甘いです。"},
  {t:"back",hi:"आपका शहर किस चीज़ के लिए मशहूर है?",rom:"āpkā shahar kis chīz ke lie mashhūr hai?",ja:"あなたの町は何で有名ですか？"}],
  tip:"みかんは संतरा（オレンジ）で通じます。「日本では मिकान と言います」と足すのもいいです。"},
 {id:64,lv:3,topic:"仕事",who:"Priya",q:"जो सिस्टम आपने बनाया, वह क्या करता है?",qRom:"jo sisṭam āpne banāyā, vah kyā kartā hai?",qja:"あなたが作ったシステムは何をするのですか？",ans:[
  {t:"a",hi:"वह क्लिनिक की बुकिंग और ग्राहकों का रिकॉर्ड संभालता है।",rom:"vah klinik kī buking aur grāhakoṁ kā rikorḍ sambhāltā hai.",ja:"院の予約とお客さまの記録を管理します。"},
  {t:"add",hi:"हमारे पार्टनर क्लिनिक भी उसे इस्तेमाल करते हैं।",rom:"hamāre pārṭnar klinik bhī use istemāl karte haiṁ.",ja:"提携院でも使っています。"},
  {t:"back",hi:"आपकी कंपनी कौन-सा सिस्टम इस्तेमाल करती है?",rom:"āpkī kampanī kaun-sā sisṭam istemāl kartī hai?",ja:"あなたの会社はどんなシステムを使っていますか？"}],
  tip:"जो …, वह …（〜するものは）。説明は「何をするか」を1文で言うと伝わります。"},
 {id:65,lv:3,topic:"ビジネス",who:"Sharma ji",q:"जापानी 'ओमोतेनाशी' का क्या मतलब है?",qRom:"jāpānī 'omotenāshī' kā kyā matlab hai?",qja:"日本の「おもてなし」とはどういう意味ですか？",ans:[
  {t:"a",hi:"इसका मतलब है दिल से मेहमानों का स्वागत करना।",rom:"iskā matlab hai dil se mehmānoṁ kā svāgat karnā.",ja:"心からお客さまをお迎えすることです。"},
  {t:"add",hi:"मैं भारत में होटलों और रेस्टोरेंटों की इसमें मदद करता हूँ।",rom:"maiṁ Bhārat meṁ hoṭaloṁ aur resṭorenṭoṁ kī ismeṁ madad kartā hūṁ.",ja:"インドでホテルやレストランのそのお手伝いをしています。"},
  {t:"back",hi:"आपके होटल में मेहमान ज़्यादातर कहाँ से आते हैं?",rom:"āpke hoṭal meṁ mehmān zyādātar kahāṁ se āte haiṁ?",ja:"あなたのホテルには、お客さまはおもにどこから来ますか？"}],
  tip:"इसका मतलब है … は「つまり〜です」。説明のあとに相手の仕事の話を聞くと商談につながります。"},
 {id:66,lv:3,topic:"WhatsApp",who:"Neha",q:"क्या मैं आपको व्हाट्सऐप पर मैसेज कर सकती हूँ?",qRom:"kyā maiṁ āpko vhāṭsaip par maisej kar saktī hūṁ?",qja:"WhatsApp でメッセージしてもいいですか？",ans:[
  {t:"a",hi:"जी हाँ, ज़रूर।",rom:"jī hāṁ, zarūr.",ja:"はい、もちろん。"},
  {t:"add",hi:"आप हिंदी में लिखिए, मैं पढ़ने की कोशिश करूँगा।",rom:"āp hindī meṁ likhie, maiṁ paṛhne kī koshish karūṁgā.",ja:"ヒンディー語で書いてください。読んでみます。"},
  {t:"back",hi:"क्या आप रोमन हिंदी में लिखेंगी?",rom:"kyā āp roman hindī meṁ likheṁgī?",ja:"ローマ字のヒンディー語で書きますか？"}],
  tip:"インドの人はチャットでヒンディー語をローマ字で書くことが多いです。どちらで書くか聞いておきましょう。"},
 {id:67,lv:3,topic:"雑談",who:"Arjun",q:"जो फ़िल्म हमने कल देखी, वह आपको कैसी लगी?",qRom:"jo film hamne kal dekhī, vah āpko kaisī lagī?",qja:"昨日いっしょに見た映画、どうでしたか？",ans:[
  {t:"a",hi:"मुझे बहुत अच्छी लगी।",rom:"mujhe bahut achchhī lagī.",ja:"とてもよかったです。"},
  {t:"add",hi:"मुझे सब समझ नहीं आया, लेकिन गाने बहुत अच्छे थे।",rom:"mujhe sab samajh nahīṁ āyā, lekin gāne bahut achchhe the.",ja:"全部はわからなかったけど、歌がとてもよかったです。"},
  {t:"back",hi:"आपको कौन-सा गाना सबसे अच्छा लगा?",rom:"āpko kaun-sā gānā sabse achchhā lagā?",ja:"どの歌がいちばんよかったですか？"}],
  tip:"समझ नहीं आया は「わからなかった」。わからなくても、好きだったところを1つ言えば十分です。"},
 {id:68,lv:3,topic:"雑談",who:"Raj",q:"क्या आपने कभी क्रिकेट मैच देखा है?",qRom:"kyā āpne kabhī krikeṭ maich dekhā hai?",qja:"クリケットの試合を見たことはありますか？",ans:[
  {t:"a",hi:"टीवी पर देखा है, लेकिन स्टेडियम में नहीं।",rom:"ṭīvī par dekhā hai, lekin sṭeḍiyam meṁ nahīṁ.",ja:"テレビでは見ましたが、スタジアムではまだです。"},
  {t:"add",hi:"मुझे लगता है कि स्टेडियम में बहुत मज़ा आएगा।",rom:"mujhe lagtā hai ki sṭeḍiyam meṁ bahut mazā āegā.",ja:"スタジアムはきっとすごく楽しいと思います。"},
  {t:"back",hi:"क्या आप मुझे कभी साथ ले चलेंगे?",rom:"kyā āp mujhe kabhī sāth le chaleṁge?",ja:"いつかいっしょに連れて行ってくれますか？"}],
  tip:"मुझे लगता है कि …（〜だと思う）。経験がなければ正直に言って、誘ってもらうきっかけにしましょう。"},
 {id:69,lv:3,topic:"予定",who:"Priya",q:"अगर आपके पास समय हो, तो कल आगरा चलें?",qRom:"agar āpke pās samay ho, to kal Āgrā chaleṁ?",qja:"もし時間があれば、明日アーグラに行きませんか？",ans:[
  {t:"a",hi:"हाँ, अगर मीटिंग जल्दी ख़त्म हुई, तो ज़रूर।",rom:"hāṁ, agar mīṭing jaldī khatm huī, to zarūr.",ja:"はい、会議が早く終われば、ぜひ。"},
  {t:"add",hi:"मैं सुबह आपको मैसेज करूँगा।",rom:"maiṁ subah āpko maisej karūṁgā.",ja:"朝にメッセージしますね。"},
  {t:"back",hi:"हम कितने बजे निकलेंगे?",rom:"ham kitne baje nikleṁge?",ja:"何時に出発しましょうか？"}],
  tip:"चलें? は「行きましょうか」。条件つきで答えるときも अगर … तो が使えます。"},
 {id:70,lv:3,topic:"仲間",who:"Neha",q:"कल मुझे पहली बार सबके सामने बोलना है। क्या सलाह देंगे?",qRom:"kal mujhe pahlī bār sabke sāmne bolnā hai. kyā salāh deṁge?",qja:"明日はじめてみんなの前で話します。アドバイスをもらえますか？",ans:[
  {t:"a",hi:"आप ज़रूर कर सकती हैं!",rom:"āp zarūr kar saktī haiṁ!",ja:"あなたなら絶対できますよ！"},
  {t:"add",hi:"धीरे-धीरे बोलिए और मुस्कुराते रहिए।",rom:"dhīre-dhīre bolie aur muskurāte rahie.",ja:"ゆっくり話して、笑顔でいてください。"},
  {t:"back",hi:"आप किस बारे में बोलेंगी?",rom:"āp kis bāre meṁ boleṁgī?",ja:"何について話すのですか？"}],
  tip:"女性の仲間には कर सकती हैं。-ते रहिए は「〜し続けてください」という励ましの形です。"},
 {id:71,lv:3,topic:"仲間",who:"Arjun",q:"आज के ऑनलाइन सेशन में आपको क्या अच्छा लगा?",qRom:"āj ke onlāin seshan meṁ āpko kyā achchhā lagā?",qja:"今日のオンラインの会で、何がよかったですか？",ans:[
  {t:"a",hi:"मुझे सबकी कहानियाँ बहुत अच्छी लगीं।",rom:"mujhe sabkī kahāniyāṁ bahut achchhī lagīṁ.",ja:"みんなの話がとてもよかったです。"},
  {t:"add",hi:"मैंने आज बहुत कुछ सीखा।",rom:"maiṁne āj bahut kuchh sīkhā.",ja:"今日はたくさん学びました。"},
  {t:"back",hi:"अगला सेशन कब होगा?",rom:"aglā seshan kab hogā?",ja:"次の会はいつですか？"}],
  tip:"कहानियाँ（話・女性複数）なので लगीं。感謝と学びを言って、次の予定を聞きましょう。"},
 {id:72,lv:3,topic:"インド",who:"Sharma ji",q:"भारत में आपको सबसे अलग क्या लगा?",qRom:"Bhārat meṁ āpko sabse alag kyā lagā?",qja:"インドでいちばんちがうと感じたことは何ですか？",ans:[
  {t:"a",hi:"मुझे लगता है कि यहाँ सब कुछ बहुत तेज़ चलता है।",rom:"mujhe lagtā hai ki yahāṁ sab kuchh bahut tez chaltā hai.",ja:"ここでは何でもとても速く動いていると感じます。"},
  {t:"add",hi:"लोग एक साथ कई काम करते हैं।",rom:"log ek sāth kaī kām karte haiṁ.",ja:"みんな、いくつもの仕事を同時にします。"},
  {t:"back",hi:"आपको जापान के बारे में क्या अलग लगता है?",rom:"āpko jāpān ke bāre meṁ kyā alag lagtā hai?",ja:"日本についてはどこがちがうと感じますか？"}],
  tip:"ちがいは、よい・わるいではなく「おもしろい」と思った気持ちで話すと角が立ちません。"},
 {id:73,lv:3,topic:"健康",who:"Anita",q:"भारत आने के बाद आपकी तबीयत कैसी है?",qRom:"Bhārat āne ke bād āpkī tabīyat kaisī hai?",qja:"インドに来てから体調はどうですか？",ans:[
  {t:"a",hi:"बिल्कुल ठीक है, धन्यवाद।",rom:"bilkul ṭhīk hai, dhanyavād.",ja:"すっかり元気です。ありがとう。"},
  {t:"add",hi:"मैं बस बोतल वाला पानी पीता हूँ।",rom:"maiṁ bas botal vālā pānī pītā hūṁ.",ja:"ボトルの水だけ飲むようにしています。"},
  {t:"back",hi:"आप सेहत के लिए क्या करती हैं?",rom:"āp sehat ke lie kyā kartī haiṁ?",ja:"あなたは健康のために何をしていますか？"}],
  tip:"-ने के बाद は「〜したあとで」。तबीयत（体調）は女性名詞なので कैसी है です。"},
 {id:74,lv:3,topic:"仕事",who:"Priya",q:"आप कितने साल से यह काम कर रहे हैं?",qRom:"āp kitne sāl se yah kām kar rahe haiṁ?",qja:"この仕事を何年していますか？",ans:[
  {t:"a",hi:"मैं 2018 से अपना क्लिनिक चला रहा हूँ।",rom:"maiṁ 2018 se apnā klinik chalā rahā hūṁ.",ja:"2018年から自分の院をしています。"},
  {t:"add",hi:"उससे पहले मैंने कई साल ट्रेनर का काम किया।",rom:"usse pahle maiṁne kaī sāl ṭrenar kā kām kiyā.",ja:"その前は何年もトレーナーの仕事をしました。"},
  {t:"back",hi:"आप इस कंपनी में कितने साल से हैं?",rom:"āp is kampanī meṁ kitne sāl se haiṁ?",ja:"この会社には何年いらっしゃいますか？"}],
  tip:"… से ＋進行形で「〜から（ずっと）」。उससे पहले（その前は）で経歴をつなげます。"},
 {id:75,lv:3,topic:"ビジネス",who:"Raj",q:"जो जापानी मेहमान होटल आते हैं, उन्हें क्या पसंद आता है?",qRom:"jo jāpānī mehmān hoṭal āte haiṁ, unheṁ kyā pasand ātā hai?",qja:"ホテルに来る日本人のお客さまは、何をよろこびますか？",ans:[
  {t:"a",hi:"उन्हें साफ़-सफ़ाई और समय की पाबंदी पसंद आती है।",rom:"unheṁ sāf-safāī aur samay kī pābandī pasand ātī hai.",ja:"清潔さと時間を守ることをよろこびます。"},
  {t:"add",hi:"छोटी-छोटी बातों का ध्यान रखना भी ज़रूरी है।",rom:"chhoṭī-chhoṭī bātoṁ kā dhyān rakhnā bhī zarūrī hai.",ja:"細かいことに気を配ることも大切です。"},
  {t:"back",hi:"आपके मेहमान ज़्यादातर क्या कहते हैं?",rom:"āpke mehmān zyādātar kyā kahte haiṁ?",ja:"お客さまはたいてい何と言いますか？"}],
  tip:"पसंद आना は「気に入る」。具体的な例を2つ挙げると、相手もイメージしやすくなります。"},

 // ---- lv4：第4期（意見と理由）----
 {id:76,lv:4,topic:"意見",who:"Sharma ji",q:"आपके ख़याल से बिज़नेस में सबसे ज़रूरी क्या है?",qRom:"āpke khayāl se biznes meṁ sabse zarūrī kyā hai?",qja:"ビジネスでいちばん大切なことは何だと思いますか？",ans:[
  {t:"a",hi:"मेरे ख़याल से भरोसा सबसे ज़रूरी है।",rom:"mere khayāl se bharosā sabse zarūrī hai.",ja:"信頼がいちばん大切だと思います。"},
  {t:"add",hi:"क्योंकि भरोसे के बिना लंबा रिश्ता नहीं बनता।",rom:"kyoṁki bharose ke binā lambā rishtā nahīṁ bantā.",ja:"信頼がなければ、長い関係はできないからです。"},
  {t:"back",hi:"आपका क्या ख़याल है?",rom:"āpkā kyā khayāl hai?",ja:"あなたはどう思いますか？"}],
  tip:"意見（मेरे ख़याल से）→ 理由（क्योंकि）→ 聞き返し。第4期の基本の型です。"},
 {id:77,lv:4,topic:"仕事",who:"Priya",q:"आप अपने क्लिनिक में हर दिन क्या देखते हैं?",qRom:"āp apne klinik meṁ har din kyā dekhte haiṁ?",qja:"院では毎日何をチェックしていますか？",ans:[
  {t:"a",hi:"मैं हर दिन बिक्री, ग्राहकों की संख्या और दोबारा आने की दर देखता हूँ।",rom:"maiṁ har din bikrī, grāhakoṁ kī sankhyā aur dobārā āne kī dar dekhtā hūṁ.",ja:"毎日、売上と来院数と再来院率を見ています。"},
  {t:"add",hi:"इससे मुझे पता चलता है कि क्या बदलना चाहिए।",rom:"isse mujhe patā chaltā hai ki kyā badalnā chāhie.",ja:"それで、何を変えるべきかがわかります。"},
  {t:"back",hi:"आप अपने बिज़नेस में कौन-से आँकड़े देखती हैं?",rom:"āp apne biznes meṁ kaun-se āṁkṛe dekhtī haiṁ?",ja:"あなたはビジネスでどんな数字を見ていますか？"}],
  tip:"दोबारा आने की दर＝再来院率。数字の話は相手の仕事の話につなげやすいです。"},
 {id:78,lv:4,topic:"ビジネス",who:"Raj",q:"छोटे क्लिनिकों के लिए सबसे बड़ी मुश्किल क्या है?",qRom:"chhoṭe klinikoṁ ke lie sabse baṛī mushkil kyā hai?",qja:"小さな院にとっていちばんの課題は何ですか？",ans:[
  {t:"a",hi:"मेरे ख़याल से ग्राहकों का दोबारा आना सबसे बड़ी चुनौती है।",rom:"mere khayāl se grāhakoṁ kā dobārā ānā sabse baṛī chunautī hai.",ja:"お客さまにまた来てもらうことが、いちばんの課題だと思います。"},
  {t:"add",hi:"इसलिए अच्छा रिश्ता और सही डेटा, दोनों ज़रूरी हैं।",rom:"islie achchhā rishtā aur sahī ḍeṭā, donoṁ zarūrī haiṁ.",ja:"だから、いい関係と正しいデータの両方が大切です。"},
  {t:"back",hi:"भारत में छोटे क्लिनिकों की क्या मुश्किलें हैं?",rom:"Bhārat meṁ chhoṭe klinikoṁ kī kyā mushkileṁ haiṁ?",ja:"インドの小さな院にはどんな課題がありますか？"}],
  tip:"इसलिए（だから）で結論につなげます。日本の話のあとはインドの様子を聞きましょう。"},
 {id:79,lv:4,topic:"ビジネス",who:"Sharma ji",q:"क्या आप हमारे साथ काम करना चाहेंगे?",qRom:"kyā āp hamāre sāth kām karnā chāheṁge?",qja:"私たちといっしょに仕事をしませんか？",ans:[
  {t:"a",hi:"जी हाँ, मुझे बहुत ख़ुशी होगी।",rom:"jī hāṁ, mujhe bahut khushī hogī.",ja:"はい、とてもうれしいです。"},
  {t:"add",hi:"लेकिन पहले मैं आपकी ज़रूरतें अच्छी तरह समझना चाहता हूँ।",rom:"lekin pahle maiṁ āpkī zarūrateṁ achchhī tarah samajhnā chāhtā hūṁ.",ja:"でも、まず御社のニーズをよく理解したいです。"},
  {t:"back",hi:"आप इस काम से क्या उम्मीद करते हैं?",rom:"āp is kām se kyā ummīd karte haiṁ?",ja:"この仕事に何を期待していますか？"}],
  tip:"前向きに答えてから「まず理解したい」と言うと、誠実さが伝わります。"},
 {id:80,lv:4,topic:"ビジネス",who:"Priya",q:"जापानी मेहमानों के लिए हमें क्या बदलना चाहिए?",qRom:"jāpānī mehmānoṁ ke lie hameṁ kyā badalnā chāhie?",qja:"日本人のお客さまのために、私たちは何を変えるべきですか？",ans:[
  {t:"a",hi:"मुझे लगता है कि छोटी-छोटी बातें सबसे ज़रूरी हैं।",rom:"mujhe lagtā hai ki chhoṭī-chhoṭī bāteṁ sabse zarūrī haiṁ.",ja:"小さなことがいちばん大切だと思います。"},
  {t:"add",hi:"जैसे साफ़ कमरा, समय पर सेवा और मुस्कुराकर स्वागत।",rom:"jaise sāf kamrā, samay par sevā aur muskurākar svāgat.",ja:"たとえば、きれいな部屋、時間どおりのサービス、笑顔のお迎えです。"},
  {t:"back",hi:"अभी आपके होटल में सबसे बड़ी चुनौती क्या है?",rom:"abhī āpke hoṭal meṁ sabse baṛī chunautī kyā hai?",ja:"今、ホテルでいちばんの課題は何ですか？"}],
  tip:"जैसे …（たとえば）で具体例を3つ。そのあと相手の課題を聞くと、提案につながります。"},
 {id:81,lv:4,topic:"意見",who:"Arjun",q:"क्या ऑनलाइन मीटिंग आमने-सामने मिलने जितनी अच्छी है?",qRom:"kyā onlāin mīṭing āmne-sāmne milne jitnī achchhī hai?",qja:"オンラインの会議は、直接会うのと同じくらいいいですか？",ans:[
  {t:"a",hi:"मेरे ख़याल से दोनों के अपने फ़ायदे हैं।",rom:"mere khayāl se donoṁ ke apne fāyde haiṁ.",ja:"どちらにもよさがあると思います。"},
  {t:"add",hi:"लेकिन पहली मुलाक़ात आमने-सामने हो, तो रिश्ता जल्दी बनता है।",rom:"lekin pahlī mulāqāt āmne-sāmne ho, to rishtā jaldī bantā hai.",ja:"でも、最初に直接会うと、関係が早くできます。"},
  {t:"back",hi:"आपको कौन-सा तरीका ज़्यादा पसंद है?",rom:"āpko kaun-sā tarīkā zyādā pasand hai?",ja:"あなたはどちらのやり方が好きですか？"}],
  tip:"「どちらにもよさがある」と言ってから自分の考えを足すと、やわらかい意見になります。"},
 {id:82,lv:4,topic:"考え方",who:"Neha",q:"आप अपने काम में सबसे ज़्यादा किस बात को महत्व देते हैं?",qRom:"āp apne kām meṁ sabse zyādā kis bāt ko mahatva dete haiṁ?",qja:"仕事でいちばん大切にしていることは何ですか？",ans:[
  {t:"a",hi:"जो इंसान मेरे सामने है, उसके लिए पूरी कोशिश करना।",rom:"jo insān mere sāmne hai, uske lie pūrī koshish karnā.",ja:"目の前の人に全力を尽くすことです。"},
  {t:"add",hi:"चाहे ग्राहक हो या बिज़नेस पार्टनर, मेरा तरीका यही है।",rom:"chāhe grāhak ho yā biznes pārṭnar, merā tarīkā yahī hai.",ja:"お客さまでもビジネスパートナーでも、私のやり方は同じです。"},
  {t:"back",hi:"आपके लिए सबसे ज़रूरी क्या है?",rom:"āpke lie sabse zarūrī kyā hai?",ja:"あなたにとっていちばん大切なことは何ですか？"}],
  tip:"自分の信条は短く1文で。जो …, उसके लिए（〜な人のために）は第3期の形です。"},
 {id:83,lv:4,topic:"考え方",who:"Sharma ji",q:"ट्रेनर के काम से आपने क्या सीखा?",qRom:"ṭrenar ke kām se āpne kyā sīkhā?",qja:"トレーナーの仕事から何を学びましたか？",ans:[
  {t:"a",hi:"मैंने सीखा कि टीम में हर एक की भूमिका ज़रूरी है।",rom:"maiṁne sīkhā ki ṭīm meṁ har ek kī bhūmikā zarūrī hai.",ja:"チームでは一人ひとりの役割が大切だと学びました。"},
  {t:"add",hi:"यह बात मैं आज भी अपने स्टाफ़ के साथ याद रखता हूँ।",rom:"yah bāt maiṁ āj bhī apne sṭāf ke sāth yād rakhtā hūṁ.",ja:"今もスタッフといるときに、このことを大事にしています。"},
  {t:"back",hi:"आपने अपने काम से सबसे बड़ा सबक क्या सीखा?",rom:"āpne apne kām se sabse baṛā sabak kyā sīkhā?",ja:"あなたは仕事からどんな大きな教訓を得ましたか？"}],
  tip:"मैंने सीखा कि …（〜と学んだ）。過去の学び→今のつながりの順で話すと、説得力が出ます。"},
 {id:84,lv:4,topic:"健康",who:"Anita",q:"अच्छी सेहत के लिए आप क्या सलाह देंगे?",qRom:"achchhī sehat ke lie āp kyā salāh deṁge?",qja:"健康のために何をすすめますか？",ans:[
  {t:"a",hi:"मेरे ख़याल से रोज़ थोड़ा चलना चाहिए।",rom:"mere khayāl se roz thoṛā chalnā chāhie.",ja:"毎日少し歩いたほうがいいと思います。"},
  {t:"add",hi:"और रात को अच्छी नींद लेना भी बहुत ज़रूरी है।",rom:"aur rāt ko achchhī nīṁd lenā bhī bahut zarūrī hai.",ja:"それに、夜よく眠ることもとても大切です。"},
  {t:"back",hi:"आप अपनी सेहत के लिए क्या करती हैं?",rom:"āp apnī sehat ke lie kyā kartī haiṁ?",ja:"あなたは健康のために何をしていますか？"}],
  tip:"-ना चाहिए は「〜したほうがいい」。生活習慣の雑談として話し、治療の話にはしません。"},
 {id:85,lv:4,topic:"日本酒",who:"Raj",q:"क्या भारत में लोग जापानी साके ख़रीद सकते हैं?",qRom:"kyā Bhārat meṁ log jāpānī sāke kharīd sakte haiṁ?",qja:"インドで日本酒は買えますか？",ans:[
  {t:"a",hi:"हाँ, लेकिन अभी बहुत कम जगहों पर मिलता है।",rom:"hāṁ, lekin abhī bahut kam jagahoṁ par miltā hai.",ja:"はい、でも今はまだ買える場所が少ないです。"},
  {t:"add",hi:"इसलिए मैं इसे भारत में ज़्यादा लोगों तक पहुँचाना चाहता हूँ।",rom:"islie maiṁ ise Bhārat meṁ zyādā logoṁ tak pahuṁchānā chāhtā hūṁ.",ja:"だから、インドでもっと多くの人に届けたいです。"},
  {t:"back",hi:"आपके ख़याल से यहाँ के लोगों को कौन-सा स्वाद पसंद आएगा?",rom:"āpke khayāl se yahāṁ ke logoṁ ko kaun-sā svād pasand āegā?",ja:"ここの人たちには、どんな味が好まれると思いますか？"}],
  tip:"現状 → इसलिए（だから）→ 自分のしたいこと。最後に相手の意見を聞くと、地元の目線がもらえます。"},
 {id:86,lv:4,topic:"意見",who:"Priya",q:"क्या छोटे बिज़नेस के लिए डिजिटल टूल ज़रूरी हैं?",qRom:"kyā chhoṭe biznes ke lie ḍijiṭal ṭūl zarūrī haiṁ?",qja:"小さな商売にデジタルの道具は必要ですか？",ans:[
  {t:"a",hi:"जी हाँ, मेरे ख़याल से बहुत ज़रूरी हैं।",rom:"jī hāṁ, mere khayāl se bahut zarūrī haiṁ.",ja:"はい、とても必要だと思います。"},
  {t:"add",hi:"मैंने अपने क्लिनिक के लिए ख़ुद एक सिस्टम बनाया, क्योंकि आँकड़े देखना ज़रूरी था।",rom:"maiṁne apne klinik ke lie khud ek sisṭam banāyā, kyoṁki āṁkṛe dekhnā zarūrī thā.",ja:"数字を見ることが必要だったので、院のために自分でシステムを作りました。"},
  {t:"back",hi:"आपकी टीम कौन-से टूल इस्तेमाल करती है?",rom:"āpkī ṭīm kaun-se ṭūl istemāl kartī hai?",ja:"あなたのチームはどんな道具を使っていますか？"}],
  tip:"意見のあとに自分の経験を1つ入れると、話に重みが出ます。"},
 {id:87,lv:4,topic:"計画",who:"Sharma ji",q:"अगले कुछ सालों में आपकी क्या योजना है?",qRom:"agle kuchh sāloṁ meṁ āpkī kyā yojnā hai?",qja:"これから数年の計画は何ですか？",ans:[
  {t:"a",hi:"मैं जापान और भारत के बीच और ज़्यादा काम करना चाहता हूँ।",rom:"maiṁ jāpān aur Bhārat ke bīch aur zyādā kām karnā chāhtā hūṁ.",ja:"日本とインドの間で、もっと仕事をしたいです。"},
  {t:"add",hi:"ख़ास तौर पर मेहमाननवाज़ी और साके के क्षेत्र में।",rom:"khās taur par mehmānnavāzī aur sāke ke kshetra meṁ.",ja:"とくに、おもてなしと日本酒の分野で。"},
  {t:"back",hi:"आपकी कंपनी की आगे की योजना क्या है?",rom:"āpkī kampanī kī āge kī yojnā kyā hai?",ja:"御社のこれからの計画は何ですか？"}],
  tip:"ख़ास तौर पर（とくに）で分野をしぼると、相手が協力の形を考えやすくなります。"},
 {id:88,lv:4,topic:"考え方",who:"Arjun",q:"आप इतने सारे काम एक साथ कैसे संभालते हैं?",qRom:"āp itne sāre kām ek sāth kaise sambhālte haiṁ?",qja:"そんなにたくさんの仕事をどうやって同時にこなしているのですか？",ans:[
  {t:"a",hi:"सच कहूँ तो, यह आसान नहीं है।",rom:"sach kahūṁ to, yah āsān nahīṁ hai.",ja:"正直に言うと、かんたんではありません。"},
  {t:"add",hi:"इसलिए मैं हर सुबह सबसे ज़रूरी काम पहले तय करता हूँ।",rom:"islie maiṁ har subah sabse zarūrī kām pahle tay kartā hūṁ.",ja:"だから毎朝、いちばん大事な仕事を先に決めます。"},
  {t:"back",hi:"आप अपना समय कैसे संभालते हैं?",rom:"āp apnā samay kaise sambhālte haiṁ?",ja:"あなたは時間をどう管理していますか？"}],
  tip:"सच कहूँ तो（正直に言うと）は、本音を話すときの便利な前置きです。"},
 {id:89,lv:4,topic:"ビジネス",who:"Priya",q:"जापानी और भारतीय बिज़नेस कल्चर में सबसे बड़ा फ़र्क़ क्या है?",qRom:"jāpānī aur bhāratīy biznes kalchar meṁ sabse baṛā farq kyā hai?",qja:"日本とインドのビジネス文化のいちばんのちがいは何ですか？",ans:[
  {t:"a",hi:"मुझे लगता है कि योजना बनाने का तरीका अलग है।",rom:"mujhe lagtā hai ki yojnā banāne kā tarīkā alag hai.",ja:"計画の立て方がちがうと思います。"},
  {t:"add",hi:"जापान में पहले पूरी योजना बनती है, भारत में लोग जल्दी बदलाव कर लेते हैं।",rom:"jāpān meṁ pahle pūrī yojnā bantī hai, Bhārat meṁ log jaldī badlāv kar lete haiṁ.",ja:"日本では先に計画を全部作り、インドでは早く変えていきます。"},
  {t:"back",hi:"आपको जापानी तरीके में क्या मुश्किल लगता है?",rom:"āpko jāpānī tarīke meṁ kyā mushkil lagtā hai?",ja:"日本のやり方で、何がむずかしいと感じますか？"}],
  tip:"ちがいはどちらが正しいかではなく、事実として並べて言うのがコツです。"},
 {id:90,lv:4,topic:"意見",who:"Raj",q:"क्या एआई से हेल्थकेयर बदल जाएगा?",qRom:"kyā eāī se helthker badal jāegā?",qja:"AI で医療は変わると思いますか？",ans:[
  {t:"a",hi:"मेरे ख़याल से हाँ, बहुत कुछ बदलेगा।",rom:"mere khayāl se hāṁ, bahut kuchh badlegā.",ja:"はい、多くのことが変わると思います。"},
  {t:"add",hi:"लेकिन इंसान का भरोसा और ध्यान हमेशा ज़रूरी रहेगा।",rom:"lekin insān kā bharosā aur dhyān hameshā zarūrī rahegā.",ja:"でも、人の信頼と気配りはいつまでも大切です。"},
  {t:"back",hi:"क्या आपकी कंपनी में एआई इस्तेमाल होता है?",rom:"kyā āpkī kampanī meṁ eāī istemāl hotā hai?",ja:"御社では AI を使っていますか？"}],
  tip:"「はい、でも…」の形（हाँ … लेकिन …）で、自分らしい視点を足しましょう。"},
 {id:91,lv:4,topic:"考え方",who:"Sharma ji",q:"अच्छा लीडर कौन होता है?",qRom:"achchhā līḍar kaun hotā hai?",qja:"いいリーダーとはどんな人ですか？",ans:[
  {t:"a",hi:"मेरे ख़याल से जो दूसरों की बात ध्यान से सुनता है।",rom:"mere khayāl se jo dūsroṁ kī bāt dhyān se suntā hai.",ja:"人の話をよく聞く人だと思います。"},
  {t:"add",hi:"क्योंकि सुनने से ही भरोसा बनता है।",rom:"kyoṁki sunne se hī bharosā bantā hai.",ja:"聞くことで信頼が生まれるからです。"},
  {t:"back",hi:"आपके हिसाब से अच्छे लीडर में क्या होना चाहिए?",rom:"āpke hisāb se achchhe līḍar meṁ kyā honā chāhie?",ja:"あなたは、いいリーダーに何が必要だと思いますか？"}],
  tip:"आपके हिसाब से（あなたの考えでは）は आपके ख़याल से と同じ意味。言いかえを覚えると聞き返しの幅が広がります。"},
 {id:92,lv:4,topic:"ビジネス",who:"Neha",q:"बिज़नेस तेज़ी से बढ़ाना बेहतर है या धीरे-धीरे?",qRom:"biznes tezī se baṛhānā behtar hai yā dhīre-dhīre?",qja:"ビジネスは速く大きくするのと、ゆっくりとでは、どちらがいいですか？",ans:[
  {t:"a",hi:"मेरा मानना है कि धीरे-धीरे लेकिन मज़बूती से बढ़ना बेहतर है।",rom:"merā mānnā hai ki dhīre-dhīre lekin mazbūtī se baṛhnā behtar hai.",ja:"ゆっくりでも、しっかり大きくなるほうがいいと考えています。"},
  {t:"add",hi:"क्योंकि पुराने ग्राहकों का भरोसा सबसे बड़ी पूँजी है।",rom:"kyoṁki purāne grāhakoṁ kā bharosā sabse baṛī pūṁjī hai.",ja:"なじみのお客さまの信頼が、いちばんの財産だからです。"},
  {t:"back",hi:"आप इसके बारे में क्या सोचती हैं?",rom:"āp iske bāre meṁ kyā sochtī haiṁ?",ja:"あなたはどう考えますか？"}],
  tip:"मेरा मानना है कि …（私は〜と考えています）は、少しあらたまった意見の言い方です。"},
 {id:93,lv:4,topic:"ビジネス",who:"Raj",q:"मुश्किल ग्राहक को आप कैसे संभालते हैं?",qRom:"mushkil grāhak ko āp kaise sambhālte haiṁ?",qja:"むずかしいお客さまにはどう対応しますか？",ans:[
  {t:"a",hi:"पहले मैं उनकी पूरी बात ध्यान से सुनता हूँ।",rom:"pahle maiṁ unkī pūrī bāt dhyān se suntā hūṁ.",ja:"まず、お話を最後までよく聞きます。"},
  {t:"add",hi:"ज़्यादातर लोग बस यह चाहते हैं कि कोई उन्हें समझे।",rom:"zyādātar log bas yah chāhte haiṁ ki koī unheṁ samjhe.",ja:"たいていの人は、ただわかってほしいのです。"},
  {t:"back",hi:"जब ऐसा होता है, तब आप क्या करते हैं?",rom:"jab aisā hotā hai, tab āp kyā karte haiṁ?",ja:"そういうとき、あなたはどうしますか？"}],
  tip:"पहले（まず）で手順を話します。जब …, तब …（〜のとき）で聞き返すと自然です。"},
 {id:94,lv:4,topic:"日本",who:"Anita",q:"क्या जापानी मेहमाननवाज़ी जापान के बाहर भी हो सकती है?",qRom:"kyā jāpānī mehmānnavāzī jāpān ke bāhar bhī ho saktī hai?",qja:"日本のおもてなしは、日本の外でもできますか？",ans:[
  {t:"a",hi:"हाँ, मेरे ख़याल से बिल्कुल हो सकती है।",rom:"hāṁ, mere khayāl se bilkul ho saktī hai.",ja:"はい、もちろんできると思います。"},
  {t:"add",hi:"क्योंकि ओमोतेनाशी किसी देश की नहीं, दिल की बात है।",rom:"kyoṁki omotenāshī kisī desh kī nahīṁ, dil kī bāt hai.",ja:"おもてなしは国のものではなく、心のことだからです。"},
  {t:"back",hi:"आपके हिसाब से भारतीय मेहमाननवाज़ी की सबसे अच्छी बात क्या है?",rom:"āpke hisāb se bhāratīy mehmānnavāzī kī sabse achchhī bāt kyā hai?",ja:"インドのおもてなしのいちばんいいところは何だと思いますか？"}],
  tip:"インドにも「अतिथि देवो भव（お客さまは神さま）」という言葉があります。相手の国のよさを聞くと話が深まります。"},
 {id:95,lv:4,topic:"計画",who:"Priya",q:"हिंदी सीखने में आपका क्या लक्ष्य है?",qRom:"hindī sīkhne meṁ āpkā kyā lakshya hai?",qja:"ヒンディー語の勉強の目標は何ですか？",ans:[
  {t:"a",hi:"मैं अपने भारतीय दोस्तों से हिंदी में खुलकर बात करना चाहता हूँ।",rom:"maiṁ apne bhāratīy dostoṁ se hindī meṁ khulkar bāt karnā chāhtā hūṁ.",ja:"インドの友だちと、ヒンディー語で気軽に話せるようになりたいです。"},
  {t:"add",hi:"क्योंकि अपनी भाषा में बात करने से दिल जल्दी मिलते हैं।",rom:"kyoṁki apnī bhāshā meṁ bāt karne se dil jaldī milte haiṁ.",ja:"相手の言葉で話すと、心が早く通じ合うからです。"},
  {t:"back",hi:"क्या आप भी कोई नई भाषा सीख रही हैं?",rom:"kyā āp bhī koī naī bhāshā sīkh rahī haiṁ?",ja:"あなたも何か新しい言葉を勉強していますか？"}],
  tip:"खुलकर は「気がねなく・のびのびと」。目標と理由をセットで言いましょう。"},
 {id:96,lv:4,topic:"インド",who:"Sharma ji",q:"आपकी नज़र में भारत की सबसे बड़ी ताक़त क्या है?",qRom:"āpkī nazar meṁ Bhārat kī sabse baṛī tāqat kyā hai?",qja:"あなたから見て、インドのいちばんの強みは何ですか？",ans:[
  {t:"a",hi:"मेरे ख़याल से यहाँ के युवा लोग सबसे बड़ी ताक़त हैं।",rom:"mere khayāl se yahāṁ ke yuvā log sabse baṛī tāqat haiṁ.",ja:"ここの若い人たちが、いちばんの強みだと思います。"},
  {t:"add",hi:"वे नई चीज़ें बहुत जल्दी सीखते हैं।",rom:"ve naī chīzeṁ bahut jaldī sīkhte haiṁ.",ja:"新しいことをとても早く覚えます。"},
  {t:"back",hi:"आप अगले दस सालों में भारत को कैसे देखते हैं?",rom:"āp agle das sāloṁ meṁ Bhārat ko kaise dekhte haiṁ?",ja:"これからの10年、インドはどうなると思いますか？"}],
  tip:"आपकी नज़र में（あなたの目から見て）。相手の国の強みをほめてから、未来の話を聞きましょう。"},
 {id:97,lv:4,topic:"ビジネス",who:"Raj",q:"अगर हम साथ काम करें, तो सफलता कैसी होगी?",qRom:"agar ham sāth kām kareṁ, to saphaltā kaisī hogī?",qja:"もしいっしょに仕事をするなら、成功とはどんな形でしょう？",ans:[
  {t:"a",hi:"मेरे लिए सफलता का मतलब है कि मेहमान फिर से आएँ।",rom:"mere lie saphaltā kā matlab hai ki mehmān phir se āeṁ.",ja:"私にとって成功とは、お客さまがまた来てくれることです。"},
  {t:"add",hi:"सिर्फ़ एक बार नहीं, बार-बार आएँ, तभी असली सफलता है।",rom:"sirf ek bār nahīṁ, bār-bār āeṁ, tabhī aslī saphaltā hai.",ja:"一度だけでなく何度も来てくれて、はじめて本当の成功です。"},
  {t:"back",hi:"आपके लिए सफलता का क्या मतलब है?",rom:"āpke lie saphaltā kā kyā matlab hai?",ja:"あなたにとって成功とは何ですか？"}],
  tip:"… का मतलब है कि …（〜とは…ということ）。成功の形を先にそろえておくと、協力がうまく進みます。"},
 {id:98,lv:4,topic:"意見",who:"Arjun",q:"क्या भारतीय बिज़नेस को जापान से कुछ सीखना चाहिए?",qRom:"kyā bhāratīy biznes ko jāpān se kuchh sīkhnā chāhie?",qja:"インドのビジネスは日本から何か学ぶべきですか？",ans:[
  {t:"a",hi:"हाँ, लेकिन जापान को भी भारत से बहुत कुछ सीखना चाहिए।",rom:"hāṁ, lekin jāpān ko bhī Bhārat se bahut kuchh sīkhnā chāhie.",ja:"はい。でも、日本もインドから学ぶことがたくさんあります。"},
  {t:"add",hi:"जैसे भारत की तेज़ी और नई चीज़ें आज़माने की हिम्मत।",rom:"jaise Bhārat kī tezī aur naī chīzeṁ āzmāne kī himmat.",ja:"たとえば、インドのスピードと、新しいことをためす勇気です。"},
  {t:"back",hi:"आपको क्या लगता है?",rom:"āpko kyā lagtā hai?",ja:"あなたはどう思いますか？"}],
  tip:"「おたがいに学べる」という答え方は、どちらの国の人にも気持ちよく伝わります。"},
 {id:99,lv:4,topic:"ビジネス",who:"Priya",q:"हमारे साथ प्रोजेक्ट शुरू करने के लिए आपको क्या चाहिए?",qRom:"hamāre sāth projekṭ shurū karne ke lie āpko kyā chāhie?",qja:"私たちとプロジェクトを始めるには、何が必要ですか？",ans:[
  {t:"a",hi:"सबसे पहले मुझे आपका होटल ख़ुद देखना है।",rom:"sabse pahle mujhe āpkā hoṭal khud dekhnā hai.",ja:"まず、ホテルを自分の目で見たいです。"},
  {t:"add",hi:"उसके बाद हम मिलकर एक छोटी योजना बनाएँगे।",rom:"uske bād ham milkar ek chhoṭī yojnā banāeṁge.",ja:"そのあと、いっしょに小さな計画を作りましょう。"},
  {t:"back",hi:"आपके लिए कौन-सी तारीख़ ठीक रहेगी?",rom:"āpke lie kaun-sī tārīkh ṭhīk rahegī?",ja:"どの日がご都合いいですか？"}],
  tip:"सबसे पहले → उसके बाद（まず→そのあと）で手順を話し、最後に日にちを決めると話が前に進みます。"},
 {id:100,lv:4,topic:"考え方",who:"Neha",q:"आपके हिसाब से अच्छी टीम कैसे बनती है?",qRom:"āpke hisāb se achchhī ṭīm kaise bantī hai?",qja:"いいチームはどうやってできると思いますか？",ans:[
  {t:"a",hi:"मेरे ख़याल से हर किसी को अपनी बात कहने का मौका मिलना चाहिए।",rom:"mere khayāl se har kisī ko apnī bāt kahne kā maukā milnā chāhie.",ja:"一人ひとりが自分の考えを言える機会があるべきだと思います。"},
  {t:"add",hi:"जब लोगों की बात सुनी जाती है, तब वे ज़िम्मेदारी भी लेते हैं।",rom:"jab logoṁ kī bāt sunī jātī hai, tab ve zimmedārī bhī lete haiṁ.",ja:"話を聞いてもらえると、人は責任も持つようになります。"},
  {t:"back",hi:"आपकी टीम में यह कैसे होता है?",rom:"āpkī ṭīm meṁ yah kaise hotā hai?",ja:"あなたのチームではどうしていますか？"}],
  tip:"हर किसी को（だれにでも）＋ -ना चाहिए で「〜であるべき」。最後は相手のチームの話を聞きます。"}
];

// 聞き返し30（ひとことヒンディー語の3つ目。id 201〜230）
// kind は英語版のタグ（聞き返す・くわしく聞く・話を広げる・相づち・話をつなぐ・話をもどす・確かめる）
window.HITOKOTO=(window.HITOKOTO||[]).concat([
 {id:201,tag:"聞き返す",kind:"聞き返す",ja:"あなたはどう？",scene:"自分のことを話したあとで",ans:[
  {hi:"और आप?",rom:"aur āp?",hl:"और आप",nu:"いちばん使いやすい。どんな話のあとでも使える"},
  {hi:"और आप कैसे हैं?",rom:"aur āp kaise haiṁ?",hl:"कैसे हैं",nu:"男性に「あなたはお元気？」"},
  {hi:"और आप कैसी हैं?",rom:"aur āp kaisī haiṁ?",hl:"कैसी हैं",nu:"女性に「あなたはお元気？」"}],
  tip:"答えたら、最後に और आप? をつけるくせをつけましょう。男女で कैसे／कैसी が変わります。"},
 {id:202,tag:"聞き返す",kind:"聞き返す",ja:"〜したことはありますか？",scene:"相手の経験を聞きたいとき",ans:[
  {hi:"क्या आप कभी जापान गए हैं?",rom:"kyā āp kabhī jāpān gae haiṁ?",hl:"कभी जापान गए हैं",nu:"男性に。「行く」は ने なしで、主語に合わせる"},
  {hi:"क्या आप कभी जापान गई हैं?",rom:"kyā āp kabhī jāpān gaī haiṁ?",hl:"कभी जापान गई हैं",nu:"女性に"},
  {hi:"क्या आपने कभी सुशी खाई है?",rom:"kyā āpne kabhī sushī khāī hai?",hl:"कभी सुशी खाई है",nu:"ने の文は男女どちらにも同じ。動詞は食べ物に合わせる"}],
  tip:"कभी … है? で「今までに〜したことある？」。जाना は相手の男女、खाना（ने）は目的語に合わせます。"},
 {id:203,tag:"聞き返す",kind:"聞き返す",ja:"インドでは〜はどうですか？",scene:"日本の話をしたあと、相手の国のことを聞くとき",ans:[
  {hi:"और भारत में?",rom:"aur Bhārat meṁ?",hl:"और भारत में",nu:"いちばん短い。日本の話のすぐあとに"},
  {hi:"भारत में यह कैसे होता है?",rom:"Bhārat meṁ yah kaise hotā hai?",hl:"कैसे होता है",nu:"習慣ややり方を聞く"},
  {hi:"आपके यहाँ क्या होता है?",rom:"āpke yahāṁ kyā hotā hai?",hl:"आपके यहाँ",nu:"「あなたのところ（地方・家）では？」"}],
  tip:"インドは地方で習慣がちがうので、आपके यहाँ（あなたの地方では）と聞くと話が広がります。"},
 {id:204,tag:"聞き返す",kind:"聞き返す",ja:"あなたはどう思いますか？",scene:"自分の意見を言ったあとで",ans:[
  {hi:"आपको क्या लगता है?",rom:"āpko kyā lagtā hai?",hl:"क्या लगता है",nu:"いちばん自然でよく使う"},
  {hi:"आपका क्या ख़याल है?",rom:"āpkā kyā khayāl hai?",hl:"क्या ख़याल है",nu:"少していねい"},
  {hi:"इस बारे में आपकी क्या राय है?",rom:"is bāre meṁ āpkī kyā rāy hai?",hl:"आपकी क्या राय है",nu:"会議などあらたまった場で"}],
  tip:"意見を言ったら、必ず相手の意見も聞きましょう。3つとも男女で形は変わりません。"},
 {id:205,tag:"聞き返す",kind:"聞き返す",ja:"もう一度お願いします",scene:"聞きとれなかったとき",ans:[
  {hi:"माफ़ कीजिए, फिर से बोलिए?",rom:"māf kījie, phir se bolie?",hl:"फिर से बोलिए",nu:"いちばん使いやすい"},
  {hi:"कृपया थोड़ा धीरे बोलिए।",rom:"kripayā thoṛā dhīre bolie.",hl:"धीरे बोलिए",nu:"速すぎるときに"},
  {hi:"क्या आप दोबारा बता सकते हैं?",rom:"kyā āp dobārā batā sakte haiṁ?",hl:"दोबारा बता सकते हैं",nu:"男性に。女性には सकती हैं"}],
  tip:"聞きとれないのは失礼ではありません。माफ़ कीजिए を前につけると、やわらかくなります。"},
 {id:206,tag:"聞き返す",kind:"くわしく聞く",ja:"例えば？",scene:"相手の話をもっと具体的に聞きたいとき",ans:[
  {hi:"जैसे?",rom:"jaise?",hl:"जैसे",nu:"一語で「たとえば？」"},
  {hi:"जैसे क्या?",rom:"jaise kyā?",hl:"जैसे क्या",nu:"「たとえばどんな？」"},
  {hi:"कोई उदाहरण दीजिए।",rom:"koī udāharaṇ dījie.",hl:"उदाहरण",nu:"あらたまった言い方"}],
  tip:"जैसे? は短くて便利。相手の話がふわっとしたときに使いましょう。"},
 {id:207,tag:"聞き返す",kind:"くわしく聞く",ja:"もう少しくわしく教えてください",scene:"興味のある話をもっと聞きたいとき",ans:[
  {hi:"थोड़ा और बताइए।",rom:"thoṛā aur batāie.",hl:"और बताइए",nu:"いちばん自然"},
  {hi:"इसके बारे में और बताइए।",rom:"iske bāre meṁ aur batāie.",hl:"इसके बारे में",nu:"「そのことについて」と話題をしぼる"}],
  tip:"बताइए は「教えてください」。और（もっと）を入れるだけで「くわしく」になります。"},
 {id:208,tag:"聞き返す",kind:"くわしく聞く",ja:"それはどういう意味ですか？",scene:"言葉や話の意味がわからないとき",ans:[
  {hi:"इसका क्या मतलब है?",rom:"iskā kyā matlab hai?",hl:"क्या मतलब है",nu:"いちばん基本"},
  {hi:"'जुगाड़' का मतलब क्या होता है?",rom:"'jugāṛ' kā matlab kyā hotā hai?",hl:"का मतलब क्या होता है",nu:"知らない単語を入れて聞く"},
  {hi:"मतलब?",rom:"matlab?",hl:"मतलब",nu:"一語で「つまり？」。親しい相手に"}],
  tip:"わからない言葉は、その言葉＋का मतलब क्या होता है? で聞けます。"},
 {id:209,tag:"聞き返す",kind:"くわしく聞く",ja:"どうしてですか？",scene:"理由を聞きたいとき",ans:[
  {hi:"क्यों?",rom:"kyoṁ?",hl:"क्यों",nu:"一語で"},
  {hi:"ऐसा क्यों?",rom:"aisā kyoṁ?",hl:"ऐसा क्यों",nu:"「どうしてそうなの？」"},
  {hi:"इसकी वजह क्या है?",rom:"iskī vajah kyā hai?",hl:"वजह",nu:"「理由は何ですか」。仕事の話で"}],
  tip:"क्यों? だけだと強く聞こえることもあるので、やわらかく言いたいときは इसकी वजह क्या है? を。"},
 {id:210,tag:"聞き返す",kind:"くわしく聞く",ja:"どうやって始めたのですか？",scene:"相手の仕事や趣味のきっかけを聞くとき",ans:[
  {hi:"आपने यह काम कैसे शुरू किया?",rom:"āpne yah kām kaise shurū kiyā?",hl:"कैसे शुरू किया",nu:"ने の文なので男女どちらにも同じ"},
  {hi:"आपकी शुरुआत कैसे हुई?",rom:"āpkī shuruāt kaise huī?",hl:"शुरुआत कैसे हुई",nu:"「始まりはどうだったの？」"}],
  tip:"始まりの話は、相手がいちばん話したい話のひとつです。"},
 {id:211,tag:"聞き返す",kind:"話を広げる",ja:"それでどうなったの？",scene:"相手の話の続きを聞きたいとき",ans:[
  {hi:"फिर क्या हुआ?",rom:"phir kyā huā?",hl:"फिर क्या हुआ",nu:"いちばん自然"},
  {hi:"अच्छा, फिर?",rom:"achchhā, phir?",hl:"फिर",nu:"相づちをかねて短く"},
  {hi:"उसके बाद?",rom:"uske bād?",hl:"उसके बाद",nu:"「そのあとは？」"}],
  tip:"फिर क्या हुआ? と聞くと、相手は話すのがもっと楽しくなります。"},
 {id:212,tag:"聞き返す",kind:"話を広げる",ja:"〜はどうでしたか？",scene:"相手の旅行やできごとの感想を聞くとき",ans:[
  {hi:"आपकी यात्रा कैसी रही?",rom:"āpkī yātrā kaisī rahī?",hl:"कैसी रही",nu:"यात्रा（旅）は女性名詞なので कैसी"},
  {hi:"शादी कैसी रही?",rom:"shādī kaisī rahī?",hl:"कैसी रही",nu:"結婚式のあとで"},
  {hi:"आपका वीकेंड कैसा रहा?",rom:"āpkā vīkenḍ kaisā rahā?",hl:"कैसा रहा",nu:"वीकेंड は男性名詞なので कैसा"}],
  tip:"कैसा रहा／कैसी रही は、相手ではなく「できごと」の男女に合わせます。"},
 {id:213,tag:"聞き返す",kind:"話を広げる",ja:"いちばん好きなのは何ですか？",scene:"相手の好みを聞いて話を広げるとき",ans:[
  {hi:"आपको सबसे ज़्यादा क्या पसंद है?",rom:"āpko sabse zyādā kyā pasand hai?",hl:"सबसे ज़्यादा",nu:"何についてでも使える"},
  {hi:"आपका पसंदीदा खाना कौन-सा है?",rom:"āpkā pasandīdā khānā kaun-sā hai?",hl:"पसंदीदा",nu:"「お気に入りの〜は？」"}],
  tip:"पसंदीदा（お気に入りの）のあとの名詞を変えれば、映画・歌・町…何でも聞けます。"},
 {id:214,tag:"聞き返す",kind:"話を広げる",ja:"おすすめはありますか？",scene:"相手の国や町のことを教えてもらうとき",ans:[
  {hi:"आप क्या सुझाव देंगे?",rom:"āp kyā sujhāv deṁge?",hl:"सुझाव देंगे",nu:"男性に"},
  {hi:"आप क्या सुझाव देंगी?",rom:"āp kyā sujhāv deṁgī?",hl:"सुझाव देंगी",nu:"女性に"},
  {hi:"यहाँ क्या अच्छा है?",rom:"yahāṁ kyā achchhā hai?",hl:"क्या अच्छा है",nu:"お店で「ここは何がおいしい？」"}],
  tip:"未来形は相手の男女で देंगे／देंगी と変わります。お店では यहाँ क्या अच्छा है? がいちばん使えます。"},
 {id:215,tag:"聞き返す",kind:"話を広げる",ja:"ふだんは〜しますか？",scene:"相手の習慣を聞くとき",ans:[
  {hi:"आप आमतौर पर क्या करते हैं?",rom:"āp āmtaur par kyā karte haiṁ?",hl:"आमतौर पर",nu:"男性に"},
  {hi:"आप आमतौर पर क्या करती हैं?",rom:"āp āmtaur par kyā kartī haiṁ?",hl:"आमतौर पर",nu:"女性に"},
  {hi:"क्या आप रोज़ योग करते हैं?",rom:"kyā āp roz yog karte haiṁ?",hl:"रोज़",nu:"「毎日〜しますか？」"}],
  tip:"習慣は -ते हैं（男性）／-ती हैं（女性）。आमतौर पर は「ふだんは」。"},
 {id:216,tag:"聞き返す",kind:"相づち",ja:"それはいいですね",scene:"相手のいい話を聞いたとき",ans:[
  {hi:"यह तो बहुत अच्छी बात है!",rom:"yah to bahut achchhī bāt hai!",hl:"अच्छी बात",nu:"ていねいで気持ちが伝わる"},
  {hi:"वाह, बढ़िया!",rom:"vāh, baṛhiyā!",hl:"बढ़िया",nu:"明るく短く"},
  {hi:"अरे वाह!",rom:"are vāh!",hl:"वाह",nu:"おどろき＋よろこび"}],
  tip:"वाह! は日本語の「わあ！」。インドの会話でとてもよく使います。"},
 {id:217,tag:"聞き返す",kind:"相づち",ja:"本当に？",scene:"おどろいたとき",ans:[
  {hi:"सच में?",rom:"sach meṁ?",hl:"सच में",nu:"いちばん自然"},
  {hi:"क्या बात कर रहे हैं!",rom:"kyā bāt kar rahe haiṁ!",hl:"क्या बात कर रहे हैं",nu:"男性に「まさか！」"},
  {hi:"क्या बात कर रही हैं!",rom:"kyā bāt kar rahī haiṁ!",hl:"क्या बात कर रही हैं",nu:"女性に「まさか！」"}],
  tip:"क्या बात कर रहे हैं! は「何を言ってるんですか！」＝「まさか！」。相手の男女で रहे／रही。"},
 {id:218,tag:"聞き返す",kind:"相づち",ja:"わかります",scene:"相手の気持ちに共感するとき",ans:[
  {hi:"मैं समझ सकता हूँ।",rom:"maiṁ samajh saktā hūṁ.",hl:"समझ सकता हूँ",nu:"自分（男性）の形。気持ちがわかる"},
  {hi:"हाँ, बिल्कुल।",rom:"hāṁ, bilkul.",hl:"बिल्कुल",nu:"「ほんとうにそうですね」"},
  {hi:"सही बात है।",rom:"sahī bāt hai.",hl:"सही बात",nu:"「そのとおりです」"}],
  tip:"समझ सकता हूँ は話し手（岩田さん・男性）の形。女性が言うなら सकती हूँ です。"},
 {id:219,tag:"聞き返す",kind:"相づち",ja:"それは大変でしたね",scene:"相手のつらい話や苦労を聞いたとき",ans:[
  {hi:"यह तो बहुत मुश्किल रहा होगा।",rom:"yah to bahut mushkil rahā hogā.",hl:"मुश्किल रहा होगा",nu:"「大変だったでしょう」"},
  {hi:"ओह, आपको बहुत परेशानी हुई होगी।",rom:"oh, āpko bahut pareshānī huī hogī.",hl:"परेशानी हुई होगी",nu:"「ご苦労されたでしょう」"}],
  tip:"… होगा／होगी は「〜だったでしょう」と相手を思いやる形です。"},
 {id:220,tag:"聞き返す",kind:"相づち",ja:"おもしろいですね",scene:"興味をひかれる話を聞いたとき",ans:[
  {hi:"यह तो बहुत दिलचस्प है!",rom:"yah to bahut dilchasp hai!",hl:"दिलचस्प",nu:"「興味深い」の意味のおもしろい"},
  {hi:"कितनी दिलचस्प बात है!",rom:"kitnī dilchasp bāt hai!",hl:"कितनी दिलचस्प बात",nu:"「なんておもしろい話！」"}],
  tip:"笑える「おもしろい」は मज़ेदार。話の内容に感心したときは दिलचस्प を使います。"},
 {id:221,tag:"聞き返す",kind:"話をつなぐ",ja:"ところで",scene:"話題を変えるとき",ans:[
  {hi:"वैसे, आप कल फ़्री हैं?",rom:"vaise, āp kal frī haiṁ?",hl:"वैसे",nu:"いちばんよく使う"},
  {hi:"अच्छा, एक बात बताइए।",rom:"achchhā, ek bāt batāie.",hl:"एक बात बताइए",nu:"「ところで、ひとつ教えてください」"}],
  tip:"वैसे は文の最初に置くだけ。英語の by the way と同じ感覚です。"},
 {id:222,tag:"聞き返す",kind:"話をつなぐ",ja:"それで思い出したけど",scene:"相手の話から自分の話につなげるとき",ans:[
  {hi:"इससे मुझे याद आया,",rom:"isse mujhe yād āyā,",hl:"याद आया",nu:"このあとに自分の話を続ける"},
  {hi:"अरे, याद आया!",rom:"are, yād āyā!",hl:"याद आया",nu:"「あっ、思い出した！」"}],
  tip:"मुझे याद आया は「思い出した」。日本語と同じで「私に」の形（मुझे）を使います。"},
 {id:223,tag:"聞き返す",kind:"話をつなぐ",ja:"実は",scene:"少し意外なことや本当のことを言うとき",ans:[
  {hi:"दरअसल, मैं पहले ट्रेनर था।",rom:"darasal, maiṁ pahle ṭrenar thā.",hl:"दरअसल",nu:"「実は〜」"},
  {hi:"सच कहूँ तो, मुझे थोड़ा डर लगा।",rom:"sach kahūṁ to, mujhe thoṛā ḍar lagā.",hl:"सच कहूँ तो",nu:"「正直に言うと」"}],
  tip:"दरअसल は文の最初に。意外な事実を言うときの合図になります。"},
 {id:224,tag:"聞き返す",kind:"話をつなぐ",ja:"私もです",scene:"相手と同じだとき",ans:[
  {hi:"मैं भी।",rom:"maiṁ bhī.",hl:"मैं भी",nu:"「私も（〜です／〜します）」"},
  {hi:"मुझे भी।",rom:"mujhe bhī.",hl:"मुझे भी",nu:"पसंद है・आती है など मुझे の文に"},
  {hi:"मेरे साथ भी ऐसा ही होता है।",rom:"mere sāth bhī aisā hī hotā hai.",hl:"ऐसा ही",nu:"「私もそうなんです」"}],
  tip:"相手が मुझे … पसंद है と言ったら मुझे भी、मैं … करता हूँ と言ったら मैं भी で返します。"},
 {id:225,tag:"聞き返す",kind:"話をつなぐ",ja:"ちょっと考えさせてください",scene:"すぐに答えが出ないとき",ans:[
  {hi:"एक मिनट, मुझे सोचने दीजिए।",rom:"ek minaṭ, mujhe sochne dījie.",hl:"सोचने दीजिए",nu:"「考えさせてください」"},
  {hi:"हम्म, अच्छा सवाल है।",rom:"hamm, achchhā savāl hai.",hl:"अच्छा सवाल",nu:"「いい質問ですね」で時間をかせぐ"}],
  tip:"だまってしまうより、ひとこと言ってから考えるほうが会話が止まりません。"},
 {id:226,tag:"聞き返す",kind:"話をもどす",ja:"話をもどすと",scene:"話がそれたあと、元の話題にもどるとき",ans:[
  {hi:"ख़ैर, अपनी बात पर वापस आते हैं।",rom:"khair, apnī bāt par vāpas āte haiṁ.",hl:"वापस आते हैं",nu:"「さて、話をもどしましょう」"},
  {hi:"तो, हम क्या बात कर रहे थे?",rom:"to, ham kyā bāt kar rahe the?",hl:"क्या बात कर रहे थे",nu:"「何の話でしたっけ？」"}],
  tip:"ख़ैर は「さて・まあ」。会議で話がそれたときに便利です。"},
 {id:227,tag:"聞き返す",kind:"話をもどす",ja:"さっきの話ですが",scene:"前に出た話をもう一度取り上げるとき",ans:[
  {hi:"आपने पहले जो कहा था,",rom:"āpne pahle jo kahā thā,",hl:"जो कहा था",nu:"ने の文なので男女どちらにも同じ"},
  {hi:"अभी आप जो बता रहे थे,",rom:"abhī āp jo batā rahe the,",hl:"जो बता रहे थे",nu:"男性に。女性には बता रही थीं"}],
  tip:"このあとに「それについて質問です」などを続けます。जो …（〜したこと）は第3期の形です。"},
 {id:228,tag:"聞き返す",kind:"確かめる",ja:"つまり〜ということ？",scene:"相手の話をまとめて確かめるとき",ans:[
  {hi:"मतलब, आप अगले हफ़्ते आएँगे?",rom:"matlab, āp agle hafte āeṁge?",hl:"मतलब",nu:"男性に。女性には आएँगी"},
  {hi:"यानी आप कह रहे हैं कि…?",rom:"yānī āp kah rahe haiṁ ki…?",hl:"यानी",nu:"「つまり〜とおっしゃっているのですね？」"}],
  tip:"मतलब／यानी は「つまり」。大事な約束は必ずこれで確かめましょう。"},
 {id:229,tag:"聞き返す",kind:"確かめる",ja:"〜ということで合っていますか？",scene:"大事なことを確かめるとき",ans:[
  {hi:"क्या मैं सही समझा?",rom:"kyā maiṁ sahī samjhā?",hl:"सही समझा",nu:"自分（男性）の形。「正しく理解できていますか？」"},
  {hi:"मीटिंग सोमवार को है, ठीक है न?",rom:"mīṭing somvār ko hai, ṭhīk hai na?",hl:"ठीक है न",nu:"文のあとにつけて「〜ですよね？」"}],
  tip:"… ठीक है न? は日本語の「〜ですよね？」とそっくり。日時や金額の確認に使います。"},
 {id:230,tag:"聞き返す",kind:"確かめる",ja:"話せてよかったです",scene:"会話の終わりに",ans:[
  {hi:"आपसे बात करके बहुत अच्छा लगा।",rom:"āpse bāt karke bahut achchhā lagā.",hl:"बात करके",nu:"電話や会話の終わりに"},
  {hi:"आपसे मिलकर बहुत ख़ुशी हुई।",rom:"āpse milkar bahut khushī huī.",hl:"मिलकर",nu:"会ったあとの別れぎわに"},
  {hi:"फिर मिलेंगे!",rom:"phir mileṁge!",hl:"फिर मिलेंगे",nu:"「また会いましょう！」"}],
  tip:"-कर（〜して）＋ अच्छा लगा／ख़ुशी हुई で「〜できてよかった」。最後に फिर मिलेंगे! で明るく別れましょう。"}
]);
