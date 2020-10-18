/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/time_helpers.js":
/*!*************************************!*\
  !*** ./src/helpers/time_helpers.js ***!
  \*************************************/
/*! exports provided: seconds_to_minutes, minutes_to_seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds_to_minutes", function() { return seconds_to_minutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes_to_seconds", function() { return minutes_to_seconds; });
function seconds_to_minutes(seconds) {
  if (seconds.toString().indexOf(":")) seconds = minutes_to_seconds(seconds.toString());
  seconds = parseInt(seconds);
  var sec = seconds % 60;
  var min = parseInt(seconds / 60);
  return "".concat(min, ":").concat(("00" + sec.toString()).slice(-2));
}
function minutes_to_seconds(minutes_string) {
  if (minutes_string.indexOf(":") == -1) return parseInt(minutes_string);
  var parts = minutes_string.split(":");
  var sec = parseInt(parts[1]);
  var min = parseInt(parts[0]);
  if (isNaN(min)) return sec;
  if (isNaN(sec)) return min * 60;
  return min * 60 + sec;
}

/***/ }),

/***/ "./src/index.frontend.js":
/*!*******************************!*\
  !*** ./src/index.frontend.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_time_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/time_helpers.js */ "./src/helpers/time_helpers.js");
// This script is for the frontend of the playlist block

document.addEventListener("DOMContentLoaded", function () {
  var playlists = document.getElementsByClassName("wp-block-create-block-playlist");
  Array.from(playlists).forEach(function (playlist_node) {
    var url = playlist_node.src;
    var player = playlist_node.getElementsByTagName("audio")[0];
    var playlist = [];

    player.ontimeupdate = function () {
      var currentTime = player.currentTime;
      playlist.forEach(function (record) {
        record.node.classList.remove("paused");

        if (record.start <= currentTime && record.end >= currentTime) {
          record.node.classList.add("clip-playing");
        } else {
          record.node.classList.remove("clip-playing");
        }

        ;
      });
    };

    player.onpause = function () {
      playlist.forEach(function (record) {
        record.node.classList.add("paused");
      });
    };

    Array.from(playlist_node.getElementsByClassName("playlist-clip")).forEach(function (clip_node) {
      var start = Object(_helpers_time_helpers_js__WEBPACK_IMPORTED_MODULE_0__["minutes_to_seconds"])(clip_node.dataset.playlistClipStart);
      var end = Object(_helpers_time_helpers_js__WEBPACK_IMPORTED_MODULE_0__["minutes_to_seconds"])(clip_node.dataset.playlistClipEnd);
      playlist.push({
        start: start,
        end: end,
        node: clip_node
      });
      clip_node.addEventListener("click", function () {
        if (!clip_node.classList.contains('clip-playing')) {
          player.currentTime = start;
          player.play();
        } else if (clip_node.classList.contains('paused')) {
          player.play();
        } else {
          player.pause();
        }
      });
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=index.frontend.js.map