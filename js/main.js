// ===== ポートフォリオデータ =====
const portfolioData = {
    profile: {
        name: "浅野 勇仁",
        university: "龍谷大学 先端理工学部",
        bio: "興味を持った技術には果敢に挑戦し、UnityやBlenderを用いたゲーム開発から動画編集まで幅広く経験を積んできました。多角的な視点と実践的なスキルを活かし、チーム開発に貢献します。",
        avatarUrl: "images/DragonIcon.jpg"
    },
    projects: [
        {
            title: "KANSAI UP!",
            description: "KC3 HACKに参加した際に作成した、関西の名所を巡りながらアスレチックを楽しむ3Dゲームです UnityとBlenderを使用しています。主に3Dオブジェクトの作成、キャラ動作の実装、PV動画編集を担当しました。",
            detailedDescription: `## 開発概要
- **役割**: 3Dモデラー / ゲームプログラマー
- **開発期間**: 2週間（アイデアソン1週間、開発1週間）
- **チーム規模**: 3名
- **使用技術**: Unity (C#), Blender

## 担当業務
- **3Dアセット制作**: ゲームのコンセプトに基づき、関西の名所をモチーフとした3Dオブジェクト（約20点）のモデリング、テクスチャリングを担当。
- **キャラクター制御**: プレイヤーの没入感を高めるため、移動やジャンプ等の基本的な挙動に加え、SEやエフェクトによるフィードバックを実装。
- **プロモーションビデオ制作**: Blenderのレンダリング機能と外部編集ソフトを用い、ゲームの魅力を伝えるためのPVを企画から撮影、編集まで一貫して担当。

## 技術的ハイライト
- **物理演算**: Unityの物理エンジンを応用し、アスレチックゲームとしての爽快感を追求したキャラクター挙動を実装。
- **リアルタイムAPI連携**: ChatGPT APIと連携し、ゲーム内の名所に関する説明文を動的に生成する機能を実装（※現在APIキーは停止中）。
- **アセット制作パイプライン**: Blenderで制作した3Dモデルを、Unityへ効率的にインポートしゲーム内で利用するまでの一連のワークフローを構築。

## 工夫した点
- **学習と体験のデザイン**: プレイヤーが楽しみながら関西の名所を知れるよう、アスレチックの難易度曲線とオブジェクトの配置を意識したコースを設計しました。
- **没入感を高めるUI/UX**: ゲームの世界観に集中できるよう、没入感を阻害しないUIデザインを工夫しました。
- **短期間での貢献**: 全体で約40点配置されているアセットのうち、**半数にあたる約20点を1週間のスプリントで制作**し、プロジェクトのビジュアル面のクオリティ向上に貢献しました。`,
            image: "images/KANSAIUP_Making.png",
            images: [
                "images/KANSAIUP_1.png",
                "images/KANSAIUP_Making.png",
                "images/KansaiUP_Title.png",
                "images/KANSAIUPMaking2.png"
            ],
            githubUrls: ["https://github.com/Y230253/KC3_2025/"],
            youtubeUrls: ["https://youtu.be/cEGDkOx8yRY"]
        },
        {
            title: "Dragon Valley 竜の棲む谷",
            description: "部内ハッカソンで作成した、Unityで開発した3Dランゲームです。主に3Dモデリング、アニメーション、PV動画編集を担当しました。",
            detailedDescription: `## プロジェクト概要
部内ハッカソンで制作した3Dエンドレスランナーゲームです。ドラゴンと一緒に神秘的な谷を駆け抜けるファンタジー世界観を表現しました。

## 開発概要
- **開発期間**: 1週間
- **チーム規模**: 4名  
- **開発環境**: Unity(C#)、Blender

## 担当箇所
- **3Dモデリング**: プレイヤーが駆け抜ける、複数パターンの地形（直線、コーナー）や岩、アイテムなどの環境アセット全般
- **アニメーション制作**: ドラゴンの通常時の飛行モーション、及びプレイヤーを威嚇する攻撃モーション
- **テクスチャ作成**: ドラゴンのモデルに対し、UV展開からノーマルマップ・ラフネスマップ等を用いたPBRテクスチャリングを行い、リアルな質感を表現
- **タイトル画面のドラゴンの挙動**: タイトル画面でのドラゴンの動きをアニメーションとスクリプトを用いて、プレイヤーの興味を引く演出を行いました。
- **プロモーション動画制作**: ゲームの魅力を伝えるための映像撮影、BGM選定、編集作業全般

## 技術的なポイント
- **重み付けを用いたプロシージャル地形生成**: StageGenerator.csにおいて、WeightedPrefabクラスを実装し、直線やカーブ、障害物シーケンスといった**各ステージ部品の出現確率を重み付けで制御**しました。これにより、単調なランダム生成ではなく、ゲームの難易度や展開をある程度デザインできる、柔軟性の高いステージ生成システムを構築しています。

- **無限スクロールとオブジェクト管理**: プレイヤーの前方にforwardCount分のステージを常に生成し、後方のbackwardCount分を越えたものは削除する機能を実装しました。これにより、**無限に続くステージを、パフォーマンスの低下を招くことなく実現**しています。

- **動的な分岐パスシステム**: 分岐路では、プレイヤーが進行可能な全てのルートを一時的に生成します。そして、プレイヤーがPlayerController.csのHandleBranchingメソッドを通じて方向を確定させた後、**CommitDirectionメソッドが選択されなかったルートを破棄する**という動的なシステムを構築しました。これにより、自然なゲーム体験と効率的なリソース管理を両立させています。

- **プレイヤーのミスに反応する追従AI**: 追跡してくるドラゴンは、ChaserController.cs内で管理されるプレイヤーのミス回数に応じて、プレイヤーとの距離を動的に変化させます。ミスをすると距離を詰め、プレッシャーを与えることで、**単なる追跡者ではなく、ゲームの緊張感を高めるためのインタラクティブな要素**として機能します。

## こだわりポイント
ドラゴンの翼の動きにリアリティを持たせるため、**実際に家で飼っている文鳥の飛行映像を参考に**アニメーションを制作し、生命感あふれる動きを追求しました。また、ドラゴンをよりリアルに見せるための**テクスチャリング**にも注力し、ザラッとした鱗の質感などを細かく表現しています。

ゲームプレイの面では、ただ走り続けるだけでなく、**地形シーケンス（lOnlyLaneRoadPrefabsなど）を導入**することで、「特定のレーンだけが安全」といった戦略的な場面を作り出し、プレイヤーを飽きさせない工夫を凝らしました。

さらに、**プロモーション動画**では、ゲームの魅力を最大限に引き出すため、BGM選定から編集まで一貫して担当し、視覚的にも聴覚的にも楽しめる内容に仕上げました。`,
            image: "images/DragonIcon.png",
            images: [
                "images/DragonMaking.png",
                "images/DragonValley_Miss.jpg",
                "images/スクリーンショット 2025-08-29 233432.png"
            ],
            githubUrls: ["https://github.com/Y230253/DragonValley"],
            youtubeUrls: ["https://youtu.be/V3p6LL0YKDM"]
        },
        {
            title: "ShareChat",
            description: "JavaScriptおよびVue.jsを学習したのでアウトプットとして作成したチャットアプリです。Firebaseを使用してリアルタイムチャット機能を実装しました。GoogleCloudとFirebaseの学習も兼ねています。（現在はサイト閉鎖中）",
            detailedDescription: `## プロジェクト概要
Vue.js 3、Firebaseといったモダンな技術スタックの学習アウトプットとして開発した、リアルタイムチャットアプリケーションです。「既存のSNSでは共有しにくい日常も、安心して共有できるプラットフォーム」をコンセプトに、企画から設計、開発、インフラ構築まで一貫して個人で担当しました。

## 開発概要
- **開発期間**: 2ヶ月
- **開発形式**: 個人プロジェクト
- **技術スタック**:
  - **フロントエンド**: Vue.js 3 (Composition API), Vite
  - **バックエンド**: Firebase (Authentication, Firestore, Cloud Storage), Node.js (Express)
  - **インフラ**: Google Cloud Platform

## 実装機能
- **リアルタイムメッセージング**: Firebase Realtime Listenerを利用し、遅延のないメッセージ送受信を実現。
- **堅牢なユーザー認証**: Firebase Authenticationによる、セキュアなサインアップ・ログイン機能。
- **メディア共有**: Cloud Storage for Firebaseを活用した、画像・動画のアップロード機能。
- **高度な検索機能**: メッセージの全文検索、および投稿に付与されたタグ(#)による絞り込み検索。
- **インタラクティブなUI**: 投稿されたメディアのモーダル拡大表示や、いいね・ブックマーク機能。

## 技術的ハイライト
### フロントエンド (Vue.js 3)
- **Composition API中心の設計**: setup関数内でロジックをカプセル化し、関心事（いいね機能、表示状態監視など）ごとに処理をまとめることで、見通しが良く再利用性の高いコンポーネントを構築しました。
- **リアクティブなグローバル状態管理**: Vue.js 3標準のリアクティビティシステム（ref, reactive）のみで、軽量かつ高機能な認証状態管理ストア（authStore.js）を実装。外部ライブラリに依存せず、トークンの有効期限切れを検知して自動でログイン画面へ遷移させるなどの高度な制御も実現しました。
- **パフォーマンス最適化**: Viteの高速なHMR（ホットモジュールリプレイスメント）を活用し開発効率を向上させると共に、Intersection Observer APIを用いた画像の遅延読み込みを実装し、初期表示速度を高速化しました。

### バックエンド & インフラ (Firebase / GCP)
- **サーバーレスアーキテクチャ**: Firebaseの各種サービスを全面的に採用することで、サーバーのプロビジョニングや管理を不要にし、開発者がアプリケーションロジックに集中できる環境を構築しました。
- **Firestoreのリアルタイム同期**: データベースの変更をクライアント側で即座に検知するonSnapshotリスナーを活用し、ポーリングなしでリアルタイム性の高いチャット機能を実現しました。
- **セキュアなAPI設計**: フロントエンドとFirebase間の通信は、Firebase SDKが提供するセキュアな接続を利用。重要なAPIエンドポイントには、Firebase Authenticationと連携した認証ミドルウェアを導入し、不正なアクセスを防止しました。

## こだわりと学習成果
このプロジェクトを通して、単に機能を実装するだけでなく、**保守性・再利用性の高いコードとは何か**を常に意識しました。特にVue 3のComposition APIは、ロジックの分割と再結合を容易にし、複雑な状態を持つコンポーネントでもクリーンに保つ強力なツールであることを学びました。

また、個人開発だからこそ、フロントエンドからバックエンド、インフラまで一気通貫で担当することで、**アプリケーション全体を見通す広い視野**と、それぞれの技術領域における実践的なスキルを習得できました。現在はサイトを閉鎖していますが、この開発経験は、今後のどのようなプロジェクトにおいても必ず活かせると確信しています。`,
            image: "images/スクリーンショット 2025-03-29 141957.png",
            images: [
                "images/スクリーンショット 2025-03-29 141957.png",
                "images/スクリーンショット 2025-09-04 211602.png",
                "images/スクリーンショット 2025-09-04 211629.png"
            ],
            githubUrls: ["https://github.com/Y230253/ShareChat"],
            youtubeUrls: []
        },
        {
            title: "龍谷大学キャンパスナビゲーションアプリ",
            description: "サイトのURL：<a href=\"https://r-navi.math.ryukoku.ac.jp/\" class=\"text-blue-500 hover:text-blue-700 underline\" target=\"_blank\" rel=\"noopener noreferrer\">https://r-navi.math.ryukoku.ac.jp/</a>\n現在進行中のプロジェクトです。🚧 龍谷大学 2D/3D デジタルキャンパスマップ新入生や来訪者が抱える「キャンパス内で迷ってしまう」という課題を解決するために、GPSと連動した2D/3DマップWebアプリケーションを開発しています。私は主にUnityとBlenderを担当し、正確な3D建物のモデリングから、建物内での快適な経路探索を実現するためのデータ構造設計、視認性を向上させるためのシェーダー開発まで、3D空間におけるユーザー体験の根幹を担いました。",
            detailedDescription: `## プロジェクト概要
[現在制作中のプロジェクトです。🚧]

サイトのURL：<a href="https://r-navi.math.ryukoku.ac.jp/" class="text-blue-500 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">https://r-navi.math.ryukoku.ac.jp/</a>

新入生やオープンキャンパスの来訪者が広大で複雑なキャンパスで迷うことなく、円滑に目的地へたどり着けるように支援することを目的とした、Webベースの2D/3Dデジタル構内マップアプリケーションです。屋外ではGPSを利用した2Dマップで建物を案内し、建物に近づくとシームレスに3Dマップへ移行。複雑な建物内部の教室や施設まで、立体的に経路を案内します。

---

## 担当役割：3Dモデラー / Unityデベロッパー
私はこのプロジェクトで、ユーザーが最も長く触れることになる**3D空間の設計と実装**を担当しました。主な担当業務は以下の通りです。

- **高精度な3Dアセット制作**:
  - Blenderを使用し、瀬田キャンパスの主要な建物をローポリでモデリング。WebGL環境でのパフォーマンスを意識しつつ、現地の写真や大学提供の地図を元に制作しました。
  - モデルの正確性を担保するため、**実際に現地調査を行い、建物の壁の高さや通路の幅をメジャーで計測**。設計図と現実の齟齬をなくし、信頼性の高いナビゲーションの土台を築きました。

- **屋内ナビゲーションシステムの基盤構築**:
  - UnityのNavMeshを利用した経路探索の精度を高めるため、**全教室・施設の入口にScriptableObjectを用いたアンカーポイントを500ヶ所以上設置**。これにより、「3-101教室」といった具体的な部屋名での目的地設定と、そこまでの正確なルート表示を実現しました。
  - アンカーデータには部屋ID、表示名、建物ID、階層情報などを含め、拡張性の高いデータ構造を設計しました。

- **ユーザー体験を向上させるシェーダー開発**:
  - 3Dマップ内でカメラが壁に近づいた際や、特定の角度から見た際に、**壁やオブジェクトが半透明に透けるカスタムシェーダーを作成**。これにより、建物内部の構造や経路が遮蔽されることなく、ユーザーが直感的に現在地とルートを把握できるUI/UXを実現しました。

---

## 技術的ハイライト
- **ReactとUnity (WebGL) の連携**: フロントエンドはReactで構築し、GPSで取得した緯度経度情報をUnityへ送信。Unity側でそのデータをワールド座標に変換し、2Dマップと3Dマップ上でユーザーの現在地をリアルタイムに表示します。

- **ScriptableObjectによる柔軟なデータ管理**: 教室や施設（トイレ、給水器など）の位置情報をScriptableObjectとしてデータ化。これにより、エンジニアでないメンバーでも容易に地点情報の追加・修正が可能となり、メンテナンス性に優れたシステムを構築しました。

- **パフォーマンスを意識した3D空間設計**:
  - **実地調査**に基づく正確なローポリモデリングに加え、Unityの**静的バッチング**や**オクルージョンカリング**といった最適化手法を計画的に導入。
  - WebGLの上限メモリ（4GB）を考慮し、目標使用量を1.5GB以内に抑えることで、様々なデバイスで快適に動作するアプリケーションを目指しました。`,
            image: "images/ryukokuMapPR.png",
            images: [
                "images/ryukokuMapPR.png",
                "images/MapBuildingAncker.png",
                "images/スクリーンショット 2025-07-19 232253.png",
                "images/スクリーンショット 2025-07-20 234821.png",
                "images/スクリーンショット 2025-08-13 222003.png",
                "images/スクリーンショット 2025-09-04 222118.png"
            ],
            githubUrls: [
                "https://github.com/0xygen123/PR_Frontend",
                "https://github.com/0xygen123/PR_Map"
            ],
            youtubeUrls: [
                "https://youtu.be/a1uhx5Spzzo"
            ]
        },
        {
            title: "和銭遊戯",
            description: "UnityとBlenderを駆使し、企画から3Dモデリング、開発まで全て個人で手掛けた3Dゲームです。「和風ホラー」と「メダルゲーム」を融合させ、独自のゲーム体験を追求しました。（現在、別プロジェクトに注力しているため開発は一時休止中です）",
            detailedDescription: `## プロジェクト概要
UnityとBlenderの学習アウトプットとして、企画、3Dアセット制作、開発の全工程を個人で担当した3Dゲームです。「和風ホラーの世界で繰り広げられる、魂を賭けたメダルシューティングすごろく」をコンセプトに、複数ジャンルを組み合わせた独創的なゲームシステムの構築に挑戦しました。

## 開発概要
- **開発期間**: 開発休止中（他プロジェクトへリソースを集中しているため）
- **開発形式**: 個人プロジェクト
- **技術スタック**:
  - **ゲームエンジン**: Unity (C#)
  - **3Dモデリング**: Blender
  - **テクスチャ**: 自作 / AI生成素材を加工

## 実装機能
- **物理演算ベースのメダルシューティング**: Unityの物理エンジンを全面的に採用し、撃ち出したメダルのリアルな挙動と、チェッカー（井戸）に入った際の抽選ギミックを実現。
- **おみくじによるアイテム抽選**: 井戸（発射台）にメダルが入ることで「おみくじ」が抽選され、サイコロや各種アイテムが排出される、運と戦略が絡むシステム。
- **すごろくによるステージ進行**: 獲得したサイコロの出目に応じて、絵巻物のようなすごろく盤を進み、様々なイベントマスを体験。
- **怪異とのシューティングバトル**: マスに応じて出現する怪異と、メダルを撃ち出して戦うアクション要素。
- **永続的なプレイヤー強化**: ゲーム内で集めた「魂」を消費し、蜘蛛の巣状のスキルツリーでプレイヤーの能力を恒久的に成長させる「魂魄解放」システム。

## 技術的ハイライト
### ゲームデザイン & システム設計
- **複合的ゲームループの構築**: 「メダルを撃つ → アイテム獲得 → すごろくを進む → イベント・戦闘 → 強化」という、複数のゲームジャンルを組み合わせた中毒性の高いコアゲームループを設計しました。
- **物理演算の積極活用**: メダルやサイコロ、JPチャンスのルーレットなど、ゲームの根幹をなす要素のほとんどをRigidbodyとMeshColliderを用いた物理演算で制御。予測不能なライブ感と、プレイヤーのスキルが介在する戦略性を両立させました。
- **リスクとリターンの創出**: メダルが0になると大幅なペナルティが発生する「魂の担保」システムを考案。プレイヤーに常に緊張感を持たせ、単調な作業になりがちなメダルゲームに深みを与えました。

### 3Dアセット制作パイプライン
- **フルスクラッチの3Dモデル**: プレイヤーが操作する井戸や各種アイテム、背景に至るまで、ゲーム内に登場する全ての3DモデルをBlenderで自作。和風ホラーという独特な世界観を、一貫性のあるアートスタイルで構築しました。
- **効率的なテクスチャワークフロー**: 手描きのテクスチャに加え、AIによって生成した画像を加工して利用することで、個人開発でありながらクオリティの高いビジュアルを効率的に制作するワークフローを確立しました。

## こだわりと学習成果
このプロジェクトでは、誰も見たことのない**独創的なゲーム体験**を創出することに最も注力しました。メダルゲームの持つ「貯めて増やす楽しさ」と、シューティングの「狙って当てる爽快感」、そしてすごろくの「次に何が起こるか分からないワクワク感」を融合させるため、システム設計の段階で試行錯誤を重ねました。

また、個人開発として企画から3Dモデリング、Unityでの実装までを一貫して手掛けたことで、ゲーム開発における一連のプロセスを深く理解することができました。特に、**物理演算をゲームデザインの核に据える**という挑戦は、多くの知見と、複雑な仕様を形にする問題解決能力をもたらしてくれました。この経験は、今後のどのようなチーム開発においても、俯瞰的な視点を持って貢献できる礎になったと確信しています。`,
            image: "images/meifu/スクリーンショット 2025-09-22 210510.png",
            images: [
                "images/meifu/スクリーンショット 2025-09-22 210510.png",
                "images/meifu/torii.png",
                "images/meifu/tousya.png",
                "images/meifu/スクリーンショット 2025-06-03 222003.png",
                "images/meifu/スクリーンショット 2025-09-22 210241.png",
                "images/meifu/スクリーンショット 2025-09-22 210251.png",
                "images/meifu/スクリーンショット 2025-09-22 210310.png",
                "images/meifu/スクリーンショット 2025-09-22 210327.png"
            ],
            githubUrls: [],
            youtubeUrls: []
        }
    ],
    skills: [
        { name: "HTML", iconClass: "fab fa-html5 text-orange-500" },
        { name: "CSS", iconClass: "fab fa-css3-alt text-blue-500" },
        { name: "JavaScript", iconClass: "fab fa-js-square text-yellow-500" },
        { name: "Python", iconClass: "fab fa-python text-blue-400" },
        { name: "Java", iconClass: "fab fa-java text-red-500" },
        { name: "Git", iconClass: "fab fa-git-alt text-orange-600" },
        { name: "Unity", iconClass: "fab fa-unity text-blue-500" },
        { name: "Blender", iconClass: "fab fa-blender text-orange-500" },
        { name: "C#", iconClass: "fab fa-cuttlefish text-purple-500" }
    ],
    other: [
        {
            title: "学歴",
            content: "2022年4月 - 現在: 龍谷大学 先端理工学部"
        },
        {
            title: "活動",
            content: "・大学内の部活動Horizonに所属\n・KC3ハッカソンに参加\n・大学で開催されるプロジェクトリサーチに参加中"
        },
        {
            title: "[補足]プロジェクトリサーチについて",
            content: "龍谷大学で開催される約半年間の長期開発プロジェクトです。4月から企画計画を行い6月中旬～9月中旬に開発を行い11月に成果発表を行う。\n各自でチームを組み、アドバイザー教員を交えながら実際の課題解決に取り組み、企画から開発、発表まで一貫して行います。現在は「龍谷大学キャンパスナビゲーションアプリ」の開発に携わっており、Unity・Blender・C#などを使用したアプリケーション開発を行っています。"
        }
    ]
};

// =================================================================
//  UIコンポーネント生成関数
// =================================================================

/**
 * 自己紹介セクションのHTMLを生成して描画する
 * @param {object} profile - プロフィールデータ
 */
function renderProfile(profile) {
    const container = document.getElementById('profile-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="flex flex-col md:flex-row items-center gap-8">
            <img src="${profile.avatarUrl}" alt="プロフィール画像" class="w-36 h-36 rounded-full object-cover shadow-md">
            <div class="text-center md:text-left">
                <h3 class="text-3xl font-bold text-slate-800 dark:text-white">${profile.name}</h3>
                <p class="text-lg text-indigo-500 dark:text-indigo-400 mb-2">${profile.university}</p>
                <p class="text-slate-600 dark:text-slate-300">${profile.bio}</p>
            </div>
        </div>
    `;
    // フッターに名前を設定
    document.getElementById('footer-name').textContent = profile.name;
}

/**
 * 作品カードのHTML要素を生成する
 * @param {object} project - 単一のプロジェクトデータ
 * @returns {HTMLElement} - 生成されたdiv要素
 */
function createProjectCard(project) {
    const div = document.createElement('div');
    div.className = 'card rounded-lg overflow-hidden shadow-lg cursor-pointer';
    
    // YouTubeサムネイル自動化（最初のYouTube URLを使用）
    let imageUrl = project.image;
    if (project.youtubeUrls && project.youtubeUrls.length > 0) {
        const videoId = getYouTubeVideoId(project.youtubeUrls[0]);
        if (videoId) {
            imageUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
        }
    }

    // リンクボタンのHTMLを生成
    let linksHTML = '';
    
    // 複数のGitHub URLに対応
    if (project.githubUrls && project.githubUrls.length > 0) {
        project.githubUrls.forEach((url, index) => {
            const buttonText = project.githubUrls.length > 1 ? `GitHub${index + 1}` : 'GitHub';
            linksHTML += `
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-block bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium transition mr-2">
                    <i class="fab fa-github mr-2"></i>${buttonText}
                </a>`;
        });
    }
    
    // 複数のYouTube URLに対応
    if (project.youtubeUrls && project.youtubeUrls.length > 0) {
        project.youtubeUrls.forEach((url, index) => {
            const buttonText = project.youtubeUrls.length > 1 ? `YouTube${index + 1}` : 'YouTube';
            linksHTML += `
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition mr-2">
                    <i class="fab fa-youtube mr-2"></i>${buttonText}
                </a>`;
        });
    }

    // YouTube埋め込みまたは画像を生成（最初のYouTube URLを使用）
    let mediaHTML = '';
    if (project.youtubeUrls && project.youtubeUrls.length > 0) {
        const videoId = getYouTubeVideoId(project.youtubeUrls[0]);
        if (videoId) {
            mediaHTML = `
                <div class="w-full h-48 relative">
                    <iframe src="https://www.youtube.com/embed/${videoId}" 
                            class="w-full h-full object-cover" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                </div>`;
        } else {
            mediaHTML = `<img src="${imageUrl}" alt="${project.title}" class="w-full h-48 object-contain bg-gray-100 dark:bg-gray-800">`;
        }
    } else {
        mediaHTML = `<img src="${imageUrl}" alt="${project.title}" class="w-full h-48 object-contain bg-gray-100 dark:bg-gray-800">`;
    }

    // descriptionの見切れ対策: 折りたたみ式
    div.innerHTML = `
        ${mediaHTML}
        <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-slate-800 dark:text-white">${project.title}</h3>
            <div class="mb-4">
                <p class="text-slate-600 dark:text-slate-300 project-desc" style="max-height:5.5em; overflow:hidden; position:relative;">${project.description}</p>
                <button class="desc-toggle text-indigo-500 text-sm mt-1 underline">もっと見る</button>
            </div>
            <div class="flex items-center">
                ${linksHTML}
            </div>
        </div>
    `;
    // 折りたたみ機能
    setTimeout(() => {
        const desc = div.querySelector('.project-desc');
        const btn = div.querySelector('.desc-toggle');
        if (desc && btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (desc.style.maxHeight === 'none') {
                    desc.style.maxHeight = '5.5em';
                    btn.textContent = 'もっと見る';
                } else {
                    desc.style.maxHeight = 'none';
                    btn.textContent = '閉じる';
                }
            });
        }
    }, 0);
    // 作品詳細モーダル表示
    div.addEventListener('click', (e) => {
        // 「もっと見る」ボタンやiframe内のクリックは除外
        if (e.target.classList.contains('desc-toggle') || e.target.tagName === 'IFRAME') return;
        showProjectModal(project, imageUrl);
    });
    return div;
}

// 作品詳細モーダル表示関数
function showProjectModal(project, imageUrl) {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('project-modal-content');
    const closeBtn = document.getElementById('project-modal-close');
    
    // 複数のリンクボタンを生成
    let linksHTML = '';
    
    // GitHub URLsの処理
    if (project.githubUrls && project.githubUrls.length > 0) {
        project.githubUrls.forEach((url, index) => {
            const buttonText = project.githubUrls.length > 1 ? `GitHub${index + 1}` : 'GitHub';
            linksHTML += `<a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-block bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium transition mr-2"><i class="fab fa-github mr-2"></i>${buttonText}</a>`;
        });
    }
    
    // YouTube URLsの処理
    if (project.youtubeUrls && project.youtubeUrls.length > 0) {
        project.youtubeUrls.forEach((url, index) => {
            const buttonText = project.youtubeUrls.length > 1 ? `YouTube${index + 1}` : 'YouTube';
            linksHTML += `<a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition mr-2"><i class="fab fa-youtube mr-2"></i>${buttonText}</a>`;
        });
    }

    // モーダル内でもYouTube埋め込みまたは画像を表示
    let modalMediaHTML = '';
    let currentIndex = 0;
    const mediaItems = [];
    
    // YouTube動画を順番に追加（存在する場合）
    if (project.youtubeUrls && project.youtubeUrls.length > 0) {
        project.youtubeUrls.forEach(url => {
            const videoId = getYouTubeVideoId(url);
            if (videoId) {
                mediaItems.push({
                    type: 'youtube',
                    content: `
                        <div class="w-full h-64 relative">
                            <iframe src="https://www.youtube.com/embed/${videoId}" 
                                    class="w-full h-full rounded" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                            </iframe>
                        </div>`
                });
            }
        });
    }
    
    // 追加の画像を配列に追加
    if (project.images && project.images.length > 0) {
        project.images.forEach(img => {
            mediaItems.push({
                type: 'image',
                content: `<img src="${img}" alt="${project.title}" class="w-full max-h-96 object-contain bg-gray-100 dark:bg-gray-800 rounded">`
            });
        });
    } else {
        // imagesがない場合は元の画像を使用
        mediaItems.push({
            type: 'image',
            content: `<img src="${imageUrl}" alt="${project.title}" class="w-full max-h-96 object-contain bg-gray-100 dark:bg-gray-800 rounded">`
        });
    }

    // スライダーのHTMLを生成
    if (mediaItems.length > 1) {
        modalMediaHTML = `
            <div class="relative mb-4">
                <div id="media-container" class="w-full min-h-64 max-h-96 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded">
                    ${mediaItems[currentIndex].content}
                </div>
                <button id="prev-btn" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button id="next-btn" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    ${mediaItems.map((_, i) => `<div class="w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}" data-index="${i}"></div>`).join('')}
                </div>
            </div>`;
    } else {
        modalMediaHTML = `<div class="mb-4 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded min-h-64 max-h-96">${mediaItems[0].content}</div>`;
    }

    content.innerHTML = `
        ${modalMediaHTML}
        <h3 class="text-2xl font-bold mb-2 text-slate-800 dark:text-white">${project.title}</h3>
        <div class="text-slate-600 dark:text-slate-300 mb-4 prose prose-slate dark:prose-invert max-w-none">${marked.parse(project.detailedDescription || project.description)}</div>
        <div class="flex items-center">${linksHTML}</div>
    `;
    
    // スライダー機能の設定
    if (mediaItems.length > 1) {
        const mediaContainer = document.getElementById('media-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const indicators = content.querySelectorAll('[data-index]');
        
        function updateMedia(index) {
            currentIndex = index;
            mediaContainer.innerHTML = mediaItems[currentIndex].content;
            indicators.forEach((indicator, i) => {
                indicator.className = `w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`;
            });
        }
        
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newIndex = currentIndex > 0 ? currentIndex - 1 : mediaItems.length - 1;
            updateMedia(newIndex);
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newIndex = currentIndex < mediaItems.length - 1 ? currentIndex + 1 : 0;
            updateMedia(newIndex);
        });
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', (e) => {
                e.stopPropagation();
                updateMedia(index);
            });
        });
    }
    modal.classList.remove('hidden');
    closeBtn.onclick = () => {
        modal.classList.add('hidden');
    };
    // モーダル外クリックで閉じる
    modal.onclick = (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    };
}

/**
 * 全ての作品を描画する
 * @param {Array<object>} projects - プロジェクトデータの配列
 */
function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '';
    projects.forEach(project => {
        const card = createProjectCard(project);
        container.appendChild(card);
    });
}

/**
 * スキルアイコンを描画する
 * @param {Array<object>} skills - スキルデータの配列
 */
function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    if (!container) return;
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'flex flex-col items-center p-4 rounded-lg card';
        div.innerHTML = `
            <i class="${skill.iconClass} text-5xl mb-2"></i>
            <span class="font-medium text-slate-700 dark:text-slate-200">${skill.name}</span>
        `;
        container.appendChild(div);
    });
}

/**
 * その他セクションを描画する
 * @param {Array<object>} others - その他データの配列
 */
function renderOther(others) {
    const container = document.getElementById('other-container');
    if (!container) return;
    others.forEach(item => {
        const div = document.createElement('div');
        div.className = 'p-6 rounded-lg card shadow-lg';
        // 改行文字を<br>タグに変換
        const contentHTML = item.content.replace(/\n/g, '<br>');
        div.innerHTML = `
            <h3 class="text-2xl font-bold mb-2 text-slate-800 dark:text-white">${item.title}</h3>
            <p class="text-slate-600 dark:text-slate-300 whitespace-pre-line">${item.content.replace(/\n/g, '<br>')}</p>
        `;
        container.appendChild(div);
    });
}

/**
 * YouTubeのURLからビデオIDを抽出する
 * @param {string} url - YouTubeのURL
 * @returns {string|null} - ビデオID or null
 */
function getYouTubeVideoId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

/**
 * YouTubeモーダルのセットアップ
 */
function setupYoutubeModal() {
    const modal = document.getElementById('youtube-modal');
    const closeBtn = document.getElementById('modal-close');
    const playerContainer = document.getElementById('youtube-player-container');
    
    document.querySelectorAll('.youtube-btn').forEach(button => {
        button.addEventListener('click', () => {
            const videoId = button.dataset.videoId;
            if (videoId) {
                playerContainer.innerHTML = `<iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                modal.classList.remove('hidden');
            }
        });
    });

    const closeModal = () => {
        modal.classList.add('hidden');
        playerContainer.innerHTML = '';
    };
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

/**
 * ダークモード/ライトモードの切り替え
 */
function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // 初期テーマを設定
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        // class 'dark' があるかチェック
        const isDark = document.documentElement.classList.toggle('dark');
        // ローカルストレージに保存
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        // パーティクルの色を更新
        updateParticlesColor(isDark);
    });
}

/**
 * Particles.jsの初期化
 */
function initializeParticles() {
    const isDark = document.documentElement.classList.contains('dark');
    
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": isDark ? "#ffffff" : "#000000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": isDark ? "#ffffff" : "#000000",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "enable": true,
            "mouse": {
                "distance": 100
            },
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": ["grab", "attract"]
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

/**
 * パーティクルの色を更新
 */
function updateParticlesColor(isDark) {
    // まず背景色を更新
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        particlesContainer.style.backgroundColor = isDark ? '#000000' : '#ffffff';
    }
    
    // パーティクルを再初期化して色を正しく設定
    if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
        initializeParticles();
    }
}

/**
 * ページ初期化関数
 */
function initializePage() {
    // フッターの年を自動更新
    document.getElementById('footer-year').textContent = new Date().getFullYear();
    
    // 各セクションの描画
    renderProfile(portfolioData.profile);
    renderProjects(portfolioData.projects);
    renderSkills(portfolioData.skills);
    renderOther(portfolioData.other);
    
    // イベントリスナーの設定
    setupYoutubeModal();
    setupThemeToggle();
    setupProjectModal();
    
    // パーティクルの初期化
    initializeParticles();
}

/**
 * 作品詳細モーダルの初期化
 */
function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('project-modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }
    
    // モーダル外クリックで閉じる
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// DOMの読み込みが完了したら初期化関数を実行
document.addEventListener('DOMContentLoaded', initializePage);