// getTime.jsをインポート
import GetTime from './modules/getTime';

// getTime.jsに定義された機能を実行。
const getTime = new GetTime();


export default class GetTime {
  constructor() {
    this.now = new Date();
    this.hour = this.now.getHours();
    this.min = this.now.getMinutes();
    this.sec = this.now.getSeconds();
  }

  // 現在時刻を表示
  show() {
    alert(`${this.hour}時${this.min}分${this.sec}秒`);
  }
}



// getTime.show();


// // require('dotenv').config();
// const API_KEY = env.TEST;

// $(function(){
//   $('#btn').on('click', function() {
//     // 入力された都市名でWebAPIに天気情報をリクエスト
//     $.ajax({
//       url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
//       dataType : 'jsonp',
//     }).done(function (data){
//       //通信成功
//       // 位置
//       $('#place').text(data.name);
//       // 最高気温
//       $('#temp_max').text(data.main.temp_max);
//       // 最低気温
//       $('#temp_min').text(data.main.temp_min);
//       //湿度
//       $('#humidity').text(data.main.humidity);
//       //風速
//       $('#speed').text(data.wind.speed);
//       // 天気
//       $('#weather').text(data.weather[0].main);
//       // 天気アイコン
//       $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
//       $('img').attr("alt",data.weather[0].main);
//     }).fail(function (data) {
//       //通信失敗
//       alert('通信に失敗しました。');      });
//   });
// });