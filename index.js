// -----------------------------------------------------------------------------
// モジュールのインポート
const server = require("express")();
const line = require("@line/bot-sdk"); // Messaging APIのSDKをインポート

// -----------------------------------------------------------------------------
// パラメータ設定
const line_config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN, // 環境変数からアクセストークンをセットしています
    channelSecret: process.env.LINE_CHANNEL_SECRET // 環境変数からChannel Secretをセットしています
};

// -----------------------------------------------------------------------------
// Webサーバー設定
server.listen(process.env.PORT || 3000);


// APIコールのためのクライアントインスタンスを作成
const bot = new line.Client(line_config);

// -----------------------------------------------------------------------------
// ルーター設定
server.post('/bot/webhook', line.middleware(line_config), (req, res, next) => {
    // 先行してLINE側にステータスコード200でレスポンスする。
    res.sendStatus(200);

    // すべてのイベント処理のプロミスを格納する配列。
    let events_processed = [];

    // イベントオブジェクトを順次処理。
    req.body.events.forEach((event) => {

        // この処理の対象をイベントタイプがメッセージで、かつ、テキストタイプだった場合に限定。
        if (event.type == "message" && event.message.type == "text"){

            var min = 1;
            var max = 40;
            var randomNum = Math.floor( Math.random() * (max + 1 - min) ) + min ;

            switch(randomNum){
                case 1:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "cogito, ergo sum.\n我思う、故に我あり。"
                    }));
                    break;
                case 2:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "memento mori.\n死を忘れるな。"
                    }));
                    break;
                case 3:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "errare humanum est.\n間違う事（迷うこと）は人間的だ。"
                    }));
                    break;
                case 4:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "carpe diem.\n今を楽しめ。"
                    }));
                    break;
                case 5:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "vivere est militare.\n生きる事は戦う事だ。"
                    }));
                    break;
                case 6:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "parvo gaudere memento.\n小さい事に喜ぶ事を忘れるな。"
                    }));
                    break;
                case 7:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "fac, quod rectum est, dic, quod verum est.\n正しい事を為せ、真の事を言え。"
                    }));
                    break;
                case 8:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "festina lente.\nゆっくりと急げ。"
                    }));
                    break;
                case 9:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "usus est magister optimus.\n実践は最良の教師。"
                    }));
                    break;
                case 10:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "sequere naturam.\n自然に従え。"
                    }));
                    break;
                case 11:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "homines dum docent discunt.\n人は教えてる間に学ぶものだ。"
                    }));
                case 12:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "sit difficile; experiar tamen.\nそれが困難であるとしよう、それでも私は試みよう。"
                    }));
                case 13:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "superanda omnis fortuna ferendo est.\nすべての運命は耐えることで克服されなければいけない。"
                    }));
                case 14:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "qui bene serit, bene metet.\nよく種を撒く者はよく刈り取る。"
                    }));
                case 15:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "sapientia virtus est, id summum bonum est.\n叡知は徳である。それは最高の善である。"
                    }));
                case 16:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Salve, mel meum.\nやあ、私の蜂蜜よ。\n  -文人エラスムスが恋人に贈った挨拶"
                    }));
                case 17:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Philosophia sapientiae amor est et adfectatio.\n哲学とは知への愛、知の追求である。"
                    }));
                case 18:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Domina omnium et regina ratio est.\n万物を支配する女王とは、理性のことである。"
                    }));
                case 19:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Vincit qui se vincit.\n己に勝つものが、勝利者である。"
                    }));
                case 20:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Fortuna adversa virum magnae sapientiae non terret.\n逆境も知恵の長けたものには歯が立たぬ。"
                    }));
                case 21:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Ex vitio alterius sapiens emendat suum.\n他者の欠点から、賢者は自らの欠点を正す。"
                    }));
                case 22:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Varientas delectat.\nいろいろあるから面白い。"
                    }));
                case 23:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Semper bonus homo tiro est.\n善人は常に初心者である。"
                    }));
                case 24:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Nec habeo, nec careo, nec curo.\n持たず、求めず、気を揉まず。"
                    }));
                case 25:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Imago animi sermo est.\n言葉は心の姿を表す。"
                    }));
                case 26:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Dum fata sinunt vivite laeti.\n楽しく生きなさい、運命が許す間は。"
                    }));
                case 27:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Facta non verda.\n不言実行。"
                    }));
                case 28:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Per aspera ad astra.\n困難を通じて天に昇る。"
                    }));
                case 29:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Vixi et quem dederat cursum fortuna peregi.\n私は生きた。そして運命が与えた道を最後まで歩き通した。"
                    }));
                case 30:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Dum spiro, spero.\n生きる限り、希望を持つことができる。"
                    }));
                case 31:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Jucunda memoria est praetetitorum malorum.\n過ぎ去った不幸の記憶は快い。"
                    }));
                case 32:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Si vales, bene est; ego valeo.\nあなたが元気なら、それはよいこと。私は元気です。(ラテン語の「拝啓」)"
                    }));
                case 33:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Nemo enim potest omnia scire.\n誰も全てを知ることは出来ないのだから。"
                    }));
                case 34:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Non omnia possumus omnes.\n我々は皆、全てのことが出来るわけではない"
                    }));
                case 35:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Res est solliciti plena timoris amor.\n恋は不安な恐れに満ちたものでございます。"
                    }));
                case 36:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Ad uno disce omnes.\n一つからすべてを学べ。"
                    }));
                case 37:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Deliberando saepe perit occasio.\n好機は熟考することによってしばしば消滅する。"
                    }));
                case 38:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Aurea mediocritas.\n黄金の中庸。"
                    }));
                case 39:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Nullis amor est sanabilis herbis.\n恋はいかなる薬草によっても救済できない。"
                    }));
                case 40:
                    events_processed.push(bot.replyMessage(event.replyToken, {
                        type: "text",
                        text: "Sol lucet omnibus.\n太陽は万物のために輝く。"
                    }));
                }        
        }
    });

    // すべてのイベント処理が終了したら何個のイベントが処理されたか出力。
    Promise.all(events_processed).then(
        (response) => {
            console.log(`${response.length} event(s) processed.`);
        }
    );
});
