(()=>{var e,a,n={190:e=>{e.exports=function(){return process.env.TEST,$((function(){$("#btn").on("click",(function(){$.ajax({url:"http://api.openweathermap.org/data/2.5/weather?q="+$("#cityname").val()+"&units=metric&appid="+t.exports,dataType:"jsonp"}).done((function(t){$("#place").text(t.name),$("#temp_max").text(t.main.temp_max),$("#temp_min").text(t.main.temp_min),$("#humidity").text(t.main.humidity),$("#speed").text(t.wind.speed),$("#weather").text(t.weather[0].main),$("img").attr("src","http://openweathermap.org/img/w/"+t.weather[0].icon+".png"),$("img").attr("alt",t.weather[0].main)})).fail((function(t){alert("通信に失敗しました。")}))}))}))}}},i={};e=function t(e){var a=i[e];if(void 0!==a)return a.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,t),r.exports}(190),a=document.createTextNode(e()),document.body.appendChild(a)})();