'use strict'

function showImage() {
    let img = document.getElementById("todayItem");
    let text = document.getElementById("todayComment");
    let random = Math.floor(Math.random() * 22);

    switch (random) {
        case 0:
            img.src = "img/img30.jpg";
            text.innerHTML = "今日はラッキーです。コツコツ積み上げができそう！";
            break;
        case 1:
            img.src = "img/img31.jpg";
            text.innerHTML = "今日は最高の１日！思い切りが大事。";
            break;
        case 2:
            img.src = "img/img32.jpg";
            text.innerHTML = "今日は友人を大事に。";
            break;
        case 3:
            img.src = "img/img33.jpg";
            text.innerHTML = "今日は探し物が見つかります。";
            break;
        case 4:
            img.src = "img/img34.jpg";
            text.innerHTML = "意外な才能に気付ける日。外出してみよう！";
            break;
        case 5:
            img.src = "img/img35.jpg";
            text.innerHTML = "なんとなく落ち着かない日。大丈夫！クルクル回してリラックス。";
            break;
        case 6:
            img.src = "img/img59.jpg";
            text.innerHTML = "今日はみんなから注目されそう！オシャレに着飾ろう。";
            break;
        case 7:
            img.src = "img/img38.jpg";
            text.innerHTML = "大物に出会えそう。準備をしっかりと。";
            break;
        case 8:
            img.src = "img/img39.jpg";
            text.innerHTML = "仲間が増えるかも。好きなものを共有しよう！";
            break;
        case 9:
            img.src = "img/img40.jpg";
            text.innerHTML = "運命の人に出会える日。明日もきっと幸せです。";
            break;
        case 10:
            img.src = "img/img41.jpg";
            text.innerHTML = "最高のめぐり合わせがある日。お気に入りのカバンで出かけよう！";
            break;
        case 11:
            img.src = "img/img42.jpg";
            text.innerHTML = "お掃除の日。家と心をリフレッシュ☆";
            break;
        case 12:
            img.src = "img/img43.jpg";
            text.innerHTML = "支えてもらえる日。たまには他人を頼っても大丈夫！";
            break;
        case 13:
            img.src = "img/img45.jpg";
            text.innerHTML = "冒険に出発！どんな困難にも打ち勝てます。";
            break;
        case 14:
            img.src = "img/img46.jpg";
            text.innerHTML = "おめでたい日。祝福あれ！";
            break;
        case 15:
            img.src = "img/img47.jpg";
            text.innerHTML = "スクラムを組める日。周りにいる友達に感謝しよう！";
            break;
        case 16:
            img.src = "img/img57.jpg";
            text.innerHTML = "目が合う日。雑談力の見せ所！";
            break;
        case 17:
            img.src = "img/img50.jpg";
            text.innerHTML = "己の道をつき進む！アナタはそのままでステキです！";
            break;
        case 18:
            img.src = "img/img51.jpg";
            text.innerHTML = "同じ目標を持った仲間に出会える日。きっと笑顔になれます。";
            break;
        case 19:
            img.src = "img/img52.jpg";
            text.innerHTML = "ゆっくり過ごす日になりそう。休むことも大切です。";
            break;
        case 20:
            img.src = "img/img53.jpg";
            text.innerHTML = "感謝される日。アナタがいてくれて助かる人がいます。";
            break;
        case 21:
            img.src = "img/img55.jpg";
            text.innerHTML = "美味しいご飯に出会える日。あわてずよく噛みましょう。";
            break;
    }
}
