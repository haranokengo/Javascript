/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("\n// require('dotenv').config();\nconst API_KEY = process.env.TEST;\n\n$(function(){\n  $('#btn').on('click', function() {\n    // 入力された都市名でWebAPIに天気情報をリクエスト\n    $.ajax({\n      url: \"http://api.openweathermap.org/data/2.5/weather?q=\" + $('#cityname').val() + \"&units=metric&appid=\" + API_KEY,\n      dataType : 'jsonp',\n    }).done(function (data){\n      //通信成功\n      // 位置\n      $('#place').text(data.name);\n      // 最高気温\n      $('#temp_max').text(data.main.temp_max);\n      // 最低気温\n      $('#temp_min').text(data.main.temp_min);\n      //湿度\n      $('#humidity').text(data.main.humidity);\n      //風速\n      $('#speed').text(data.wind.speed);\n      // 天気\n      $('#weather').text(data.weather[0].main);\n      // 天気アイコン\n      $('img').attr(\"src\",\"http://openweathermap.org/img/w/\" + data.weather[0].icon + \".png\");\n      $('img').attr(\"alt\",data.weather[0].main);\n    }).fail(function (data) {\n      //通信失敗\n      alert('通信に失敗しました。');      });\n  });\n});\n\n//# sourceURL=webpack://Ajax/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;