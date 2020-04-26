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
            var max = 10;
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
