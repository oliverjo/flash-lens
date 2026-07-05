// フラッシュレンズ データ
// カテゴリ：視点 / 注意 / 発想
// 追加・編集は自由。text は体言止め不可、動詞文で終わること。

const LENSES = [

  // ── 視点レンズ ──
  {
    category: '視点',
    text: '今の自分を相手の目から見る。どう見えているか、3秒だけ確かめる。',
    duration: '3秒',
  },
  {
    category: '視点',
    text: '頭上3mにカメラがある。今このフレームに何が映っているか。',
    duration: '10秒',
  },
  {
    category: '視点',
    text: '今この場面を客席から見ている人は何を感じているか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: 'この場に無関係な人間が通りかかったら、何を見るか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: '今ここにいない人間は誰か。その人はこの場をどう見るか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: '今の自分を5歳の子供が見たら、何と言うか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: '今この場で一番力を持っているのは誰か。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: '今自分は頼んでいるのか、頼まれているのか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: '観客は今この場面に何を期待しているか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: 'このシーンが終わった直後、観客は何を感じているか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: 'このシーンは誰の物語か。主人公は誰か。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: '江戸時代にこのシーンがあったら、何が変わるか。',
    duration: '10秒',
  },
  {
    category: '視点',
    text: '全く異なる文化（遊牧民・縄文・イスラム圏など）の目でこの場を見ると。',
    duration: '10秒',
  },
  {
    category: '視点',
    text: '今の自分が担っている「役割」は何か。望んでその役割にいるか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: '今この場の主導権はどちらにあるか。',
    duration: '3秒',
  },
  {
    category: '視点',
    text: '10年後の自分がこの瞬間を振り返っている。何が見えるか。',
    duration: '5秒',
  },
  {
    category: '視点',
    text: '今これが神話の一場面だとしたら、誰が何の象徴か。',
    duration: '10秒',
  },
  {
    category: '視点',
    text: '今の自分と相手の関係を捕食関係で言うと、どちらが何か。',
    duration: '5秒',
  },

  // ── 注意レンズ ──
  {
    category: '注意',
    text: '相手の呼吸の速さ・深さ・タイミングだけを追う。',
    duration: '15秒',
  },
  {
    category: '注意',
    text: '相手の体の重さと、どこに力が入っているかを感じる。',
    duration: '10秒',
  },
  {
    category: '注意',
    text: '今の物理的距離を感じる。近すぎるか、遠すぎるか。',
    duration: '5秒',
  },
  {
    category: '注意',
    text: '言葉の意味を切り離し、音とリズムだけを聞く。',
    duration: '15秒',
  },
  {
    category: '注意',
    text: '相手の目がどこを向いているか、どう動くかだけを見る。',
    duration: '10秒',
  },
  {
    category: '注意',
    text: '今自分の足の裏に体重はかかっているか。どちらの足に多いか。',
    duration: '5秒',
  },
  {
    category: '注意',
    text: '今自分はどこで息をしているか。胸か、腹か。',
    duration: '5秒',
  },
  {
    category: '注意',
    text: '今自分の手はどこにあるか。何をしているか。',
    duration: '3秒',
  },
  {
    category: '注意',
    text: '今この空間の一番静かな部分はどこか。',
    duration: '10秒',
  },
  {
    category: '注意',
    text: 'この会話で言われていないことは何か。',
    duration: '10秒',
  },
  {
    category: '注意',
    text: '相手の声のどこに緊張があるか。',
    duration: '10秒',
  },
  {
    category: '注意',
    text: '今この場の温度を皮膚で感じる。どこが一番暖かいか。',
    duration: '10秒',
  },
  {
    category: '注意',
    text: '今自分と相手の呼吸のタイミングは合っているか、ずれているか。',
    duration: '15秒',
  },
  {
    category: '注意',
    text: '今この会話のペースは誰が決めているか。',
    duration: '5秒',
  },
  {
    category: '注意',
    text: '今この場で一番動いているものは何か。',
    duration: '5秒',
  },
  {
    category: '注意',
    text: '今自分の肩の位置を確かめる。右と左、どちらが上がっているか。',
    duration: '3秒',
  },
  {
    category: '注意',
    text: '相手が最後に言った言葉を、意味を消して音だけ心の中で繰り返す。',
    duration: '10秒',
  },
  {
    category: '注意',
    text: '今この会話で、どちらが先に沈黙を破るか。',
    duration: '15秒',
  },

  // ── 発想レンズ ──
  {
    category: '発想',
    text: 'この状況の真逆は何か。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: 'この人・この場は何の動物か。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: 'この状況のエロチックな側面はどこにあるか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今この場面を15秒のCMにするとしたら、何を切り取るか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '自分が悪役だったらどう動くか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: 'これをホラーで言うと。コメディで言うと。時代劇で言うと。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: 'この会話の色は何色か。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今この場に音楽をつけるとしたら、何の曲か。',
    duration: '10秒',
  },
  {
    category: '発想',
    text: 'このシーンを10倍速で見ると、何が見えるか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: 'この会話が始まる3秒前に何があったか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今すぐ走り出したら何が起きるか。',
    duration: '3秒',
  },
  {
    category: '発想',
    text: '今この場でのタブーは何か。やらない理由は何か。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今ここが水の底だったら、動きはどう変わるか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今これが最後の会話だとしたら、何を言うか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今の自分は人形で、誰かに動かされているとしたら。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: 'このやりとりを金額に換算したら、いくらか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今の状況を一枚の絵にするとしたら、何を描くか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今の自分は何かを避けているか。何から。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '5分後にこの場所は何になっているか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今の自分の姿勢に名前をつけるとしたら、何か。',
    duration: '3秒',
  },
  {
    category: '発想',
    text: '今ここで一番正直な行動は何か。なぜしないのか。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今この場の匂いを一言で言うと。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今ここにいる全員が同じことを考えているとしたら、それは何か。',
    duration: '5秒',
  },
  {
    category: '発想',
    text: '今この場面は映画の何分目か。序盤か、中盤か、クライマックスか。',
    duration: '5秒',
  },

  // ── 行動レンズ ──
  {
    category: '行動',
    text: '今の姿勢をほんの少しだけ変えてみる。何かが変わるか。',
    duration: '3秒',
  },
  {
    category: '行動',
    text: '1歩だけ近づいてみる。',
    duration: '3秒',
  },
  {
    category: '行動',
    text: '1歩だけ遠ざかってみる。',
    duration: '3秒',
  },
  {
    category: '行動',
    text: '今から10秒間、相手の目だけを見続けてみる。',
    duration: '10秒',
  },
  {
    category: '行動',
    text: '次に話すとき、いつもより1秒だけ間を置いてから発してみる。',
    duration: '次の発言で',
  },
  {
    category: '行動',
    text: '今から10秒間、頷かずに聞いてみる。',
    duration: '10秒',
  },
  {
    category: '行動',
    text: '今自分の肩を意識的に落としてみる。',
    duration: '3秒',
  },
  {
    category: '行動',
    text: '今から5秒間、完全に黙ってみる。',
    duration: '5秒',
  },
  {
    category: '行動',
    text: '声のトーンを一段低くして、一言だけ発してみる。',
    duration: '次の発言で',
  },
  {
    category: '行動',
    text: '今から10秒間、足の裏だけに意識を置いたまま話してみる。',
    duration: '10秒',
  },
  {
    category: '行動',
    text: '1回だけ意識的に深呼吸してから、次の言葉を発してみる。',
    duration: '次の発言で',
  },
  {
    category: '行動',
    text: '今見ている方向を90度変えてみる。',
    duration: '3秒',
  },
  {
    category: '行動',
    text: '今の歩くスピードを半分にしてみる。',
    duration: '10秒',
  },
  {
    category: '行動',
    text: '相手が話し終えるまで、どんなに間が空いても何も言わないでみる。',
    duration: '相手次第',
  },
  {
    category: '行動',
    text: '今の自分の手を意図的に静止させてみる。',
    duration: '5秒',
  },
  {
    category: '行動',
    text: '今から10秒間、視線を相手の顔ではなく首元だけに向けてみる。',
    duration: '10秒',
  },
  {
    category: '行動',
    text: '一言だけ、いつもより0.5倍のスピードで話してみる。',
    duration: '次の発言で',
  },
  {
    category: '行動',
    text: '今この場で一番硬いものに触れてみる。',
    duration: '5秒',
  },

  // ── なりきりレンズ ──
  {
    category: 'なりきり',
    text: 'お昼ごはん前に迷子になった子犬になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '宇宙空間をさまよい続ける鉄原子になる。',
    duration: '15秒',
  },
  {
    category: 'なりきり',
    text: '地球最後の1匹のアリになる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '誰かのポケットの中で40年眠っているコインになる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '羽化する直前の蝶になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '群れからはぐれた渡り鳥になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '燃え尽きる直前のろうそくになる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '捨てられた靴の片方になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '舗装の割れ目から生えた草になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '嵐の目になる。',
    duration: '15秒',
  },
  {
    category: 'なりきり',
    text: '届かなかった手紙になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '深海で光を出し続けているイカになる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '誰も渡らないままになっている橋になる。',
    duration: '15秒',
  },
  {
    category: 'なりきり',
    text: '満潮の直前の海になる。',
    duration: '15秒',
  },
  {
    category: 'なりきり',
    text: '切られた直後の木になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '億年眠っている地層の中の石になる。',
    duration: '15秒',
  },
  {
    category: 'なりきり',
    text: '試合開始の笛が吹かれる直前の空気になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '誰かが去った後の部屋の沈黙になる。',
    duration: '15秒',
  },
  {
    category: 'なりきり',
    text: '100回使われた包丁になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '夜明け前の暗がりになる。',
    duration: '15秒',
  },
  {
    category: 'なりきり',
    text: '踏まれても踏まれても生えてくる雑草になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '初めて海を見た猫になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '雪解けの最初の一滴になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '眠れない犬になる。',
    duration: '10秒',
  },
  {
    category: 'なりきり',
    text: '電話が鳴り出す直前の静寂になる。',
    duration: '10秒',
  },
];
