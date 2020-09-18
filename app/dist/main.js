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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/index.js":
/*!************************!*\
  !*** ../dist/index.js ***!
  \************************/
/*! exports provided: GLRun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLRun\", function() { return GLRun; });\nvar GLContext = {\n    canvas: null,\n    gl: null\n};\nconst GLRun = (app, conf) => {\n    GLContext.canvas = document.createElement(\"canvas\");\n    GLContext.canvas.id = conf.CanvasID;\n    GLContext.canvas.setAttribute(\"width\", `${conf.Width}`);\n    GLContext.canvas.setAttribute(\"Height\", `${conf.Width}`);\n    document.body.appendChild(GLContext.canvas);\n    GLContext.gl = GLContext.canvas.getContext(\"webgl2\");\n    app.GLContext = GLContext;\n    app.Init();\n    const MainLoop = () => {\n        app.Update();\n        app.Draw();\n        requestAnimationFrame(MainLoop);\n    };\n    MainLoop(0);\n};\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vZGlzdC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9kaXN0L2luZGV4LmpzP2M4YjkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEdMQ29udGV4dCA9IHtcbiAgICBjYW52YXM6IG51bGwsXG4gICAgZ2w6IG51bGxcbn07XG5jb25zdCBHTFJ1biA9IChhcHAsIGNvbmYpID0+IHtcbiAgICBHTENvbnRleHQuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBHTENvbnRleHQuY2FudmFzLmlkID0gY29uZi5DYW52YXNJRDtcbiAgICBHTENvbnRleHQuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke2NvbmYuV2lkdGh9YCk7XG4gICAgR0xDb250ZXh0LmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJIZWlnaHRcIiwgYCR7Y29uZi5XaWR0aH1gKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEdMQ29udGV4dC5jYW52YXMpO1xuICAgIEdMQ29udGV4dC5nbCA9IEdMQ29udGV4dC5jYW52YXMuZ2V0Q29udGV4dChcIndlYmdsMlwiKTtcbiAgICBhcHAuR0xDb250ZXh0ID0gR0xDb250ZXh0O1xuICAgIGFwcC5Jbml0KCk7XG4gICAgY29uc3QgTWFpbkxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGFwcC5VcGRhdGUoKTtcbiAgICAgICAgYXBwLkRyYXcoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKE1haW5Mb29wKTtcbiAgICB9O1xuICAgIE1haW5Mb29wKDApO1xufTtcbmV4cG9ydCB7IEdMUnVuIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../dist/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ \"../dist/index.js\");\n\n\nconst vertices = [\n    // front\n    -1.0, -1.0,  1.0, 0.0, 0.0, 0.0, 0.0, 1.0,\n    1.0, -1.0,  1.0, 1.0, 0.0, 0.0, 0.0, 1.0,\n    1.0,  1.0,  1.0, 1.0, 1.0, 0.0, 0.0, 1.0,\n    -1.0,  1.0,  1.0, 0.0, 1.0, 0.0, 0.0, 1.0,\n    // top\n    -1.0,  1.0,  1.0, 0.0, 0.0, 0.0, 1.0, 0.0,\n    1.0,  1.0,  1.0, 1.0, 0.0, 0.0, 1.0, 0.0,\n    1.0,  1.0, -1.0, 1.0, 1.0, 0.0, 1.0, 0.0,\n    -1.0,  1.0, -1.0, 0.0, 1.0, 0.0, 1.0, 0.0,\n    // back\n    1.0, -1.0, -1.0, 0.0, 0.0, 0.0, 0.0, 1.0,\n    -1.0, -1.0, -1.0, 1.0, 0.0, 0.0, 0.0, 1.0,\n    -1.0,  1.0, -1.0, 1.0, 1.0, 0.0, 0.0, 1.0,\n    1.0,  1.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0,\n    // bottom\n    -1.0, -1.0, -1.0, 0.0, 0.0, 0.0, -1.0, 0.0,\n    1.0, -1.0, -1.0, 1.0, 0.0, 0.0, -1.0, 0.0,\n    1.0, -1.0,  1.0, 1.0, 1.0, 0.0, -1.0, 0.0,\n    -1.0, -1.0,  1.0, 0.0, 1.0, 0.0, -1.0, 0.0,\n    // left\n    -1.0, -1.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,\n    -1.0, -1.0,  1.0, 1.0, 0.0, -1.0, 0.0, 0.0,\n    -1.0,  1.0,  1.0, 1.0, 1.0, -1.0, 0.0, 0.0,\n    -1.0,  1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 0.0,\n    // right\n    1.0, -1.0,  1.0, 0.0, 0.0, 1.0, 0.0, 0.0,\n    1.0, -1.0, -1.0, 1.0, 0.0, 1.0, 0.0, 0.0,\n    1.0,  1.0, -1.0, 1.0, 1.0, 1.0, 0.0, 0.0,\n    1.0,  1.0,  1.0, 0.0, 1.0, 1.0, 0.0, 0.0\n];\n\nconst indices = [\n    // front\n    0,  1,  2,\n    2,  3,  0,\n    // top\n    4,  5,  6,\n    6,  7,  4,\n    // back\n    8,  9, 10,\n    10, 11,  8,\n    // bottom\n    12, 13, 14,\n    14, 15, 12,\n    // left\n    16, 17, 18,\n    18, 19, 16,\n    // right\n    20, 21, 22,\n    22, 23, 20\n];\n\nlet vb;\nlet ib;\nlet va;\nlet shader;\n\nfunction CompileShader(gl, src, type) {\n    let shader = gl.createShader(type);\n    gl.shaderSource(shader, src);\n    gl.compileShader(shader);\n    return shader;\n}\n\nfunction CreateShader(gl, srcList){\n    let program = gl.createProgram();\n\n    for(let type in Object.keys(srcList)){\n        for(let src in srcList[type])\n            gl.attachShader(program, CompileShader(gl, src, type));\n    }\n\n    gl.linkProgram(program);\n    return program;\n}\n\nfunction InitScene() {\n    const { gl } = this.GLContext;\n\n    vb = gl.createBuffer();\n    gl.bindBuffer(gl.ARRAY_BUFFER, vb);\n    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);\n\n    ib = gl.createBuffer();\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib);\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);\n\n    va = gl.createVertexArray();\n    gl.bindVertexArray(va);\n\n    gl.enableVertexAttribArray(0);\n    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);\n    gl.enableVertexAttribArray(1);\n    gl.vertexAttribPointer(1, 2, gl.INT, false, 4*8, 4*3);\n    gl.enableVertexAttribArray(2);\n    gl.vertexAttribPointer(2, 3, gl.FLOAT, false, 4*8, 4*5);\n\n    shader = CreateShader(gl, {\n        [gl.VERTEX_SHADER]: [\n            `#version 330 core\n\n            layout(location=0) in vec3 a_Position;\n            layout(location=1) in vec2 a_TextPos;\n            layout(location=2) in vec3 a_Normal;\n            \n            uniform mat4 u_ViewProjection;\n            uniform mat4 u_Model;\n\n            out vec3 Normal;\n            \n            void main(){\n                Normal = a_Normal;\n                gl_Position = u_ViewProjection * u_Model * vec4(a_Position, 1.0);\n            }`\n        ],\n        [gl.FRAGMENT_SHADER]: [\n            `#version 330 core\n            \n            layout(location=0) out vec4 color;\n            in vec3 Normal;\n            \n            void main(){\n                color = vec4(Normal, 1.0);\n            }`\n        ]\n    })\n}\n\nfunction UpdateScene() {\n\n}\n\nfunction DrawScene() {\n    const { gl } = this.GLContext;\n    gl.clear(gl.COLOR_BUFFER_BIT);\n    gl.clearColor(0.0, 0.0, 0.0, 1.0);\n\n    gl.bindVertexArray(va);\n    gl.useProgram(shader);\n    gl.drawElements(gl.TRIANGLES, ib.length, gl.UNSIGNED_INT, null);\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    document.body.style = \"margin:0;padding:0;\";\n\n    const { width, height } = document.documentElement.getBoundingClientRect();\n    const conf = {\n        CanvasID: \"screen\",\n        Width: width,\n        Height: height\n    }\n\n    const app = {\n        Init: InitScene, \n        Update: UpdateScene, \n        Draw: DrawScene\n    };\n\n    Object(___WEBPACK_IMPORTED_MODULE_0__[\"GLRun\"])(app, conf);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHTFJ1biB9IGZyb20gXCIuLi8uLi9cIjtcblxuY29uc3QgdmVydGljZXMgPSBbXG4gICAgLy8gZnJvbnRcbiAgICAtMS4wLCAtMS4wLCAgMS4wLCAwLjAsIDAuMCwgMC4wLCAwLjAsIDEuMCxcbiAgICAxLjAsIC0xLjAsICAxLjAsIDEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLFxuICAgIDEuMCwgIDEuMCwgIDEuMCwgMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsXG4gICAgLTEuMCwgIDEuMCwgIDEuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsXG4gICAgLy8gdG9wXG4gICAgLTEuMCwgIDEuMCwgIDEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgMS4wLCAgMS4wLCAgMS4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAxLjAsICAxLjAsIC0xLjAsIDEuMCwgMS4wLCAwLjAsIDEuMCwgMC4wLFxuICAgIC0xLjAsICAxLjAsIC0xLjAsIDAuMCwgMS4wLCAwLjAsIDEuMCwgMC4wLFxuICAgIC8vIGJhY2tcbiAgICAxLjAsIC0xLjAsIC0xLjAsIDAuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLFxuICAgIC0xLjAsIC0xLjAsIC0xLjAsIDEuMCwgMC4wLCAwLjAsIDAuMCwgMS4wLFxuICAgIC0xLjAsICAxLjAsIC0xLjAsIDEuMCwgMS4wLCAwLjAsIDAuMCwgMS4wLFxuICAgIDEuMCwgIDEuMCwgLTEuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLCAxLjAsXG4gICAgLy8gYm90dG9tXG4gICAgLTEuMCwgLTEuMCwgLTEuMCwgMC4wLCAwLjAsIDAuMCwgLTEuMCwgMC4wLFxuICAgIDEuMCwgLTEuMCwgLTEuMCwgMS4wLCAwLjAsIDAuMCwgLTEuMCwgMC4wLFxuICAgIDEuMCwgLTEuMCwgIDEuMCwgMS4wLCAxLjAsIDAuMCwgLTEuMCwgMC4wLFxuICAgIC0xLjAsIC0xLjAsICAxLjAsIDAuMCwgMS4wLCAwLjAsIC0xLjAsIDAuMCxcbiAgICAvLyBsZWZ0XG4gICAgLTEuMCwgLTEuMCwgLTEuMCwgMC4wLCAwLjAsIC0xLjAsIDAuMCwgMC4wLFxuICAgIC0xLjAsIC0xLjAsICAxLjAsIDEuMCwgMC4wLCAtMS4wLCAwLjAsIDAuMCxcbiAgICAtMS4wLCAgMS4wLCAgMS4wLCAxLjAsIDEuMCwgLTEuMCwgMC4wLCAwLjAsXG4gICAgLTEuMCwgIDEuMCwgLTEuMCwgMC4wLCAxLjAsIC0xLjAsIDAuMCwgMC4wLFxuICAgIC8vIHJpZ2h0XG4gICAgMS4wLCAtMS4wLCAgMS4wLCAwLjAsIDAuMCwgMS4wLCAwLjAsIDAuMCxcbiAgICAxLjAsIC0xLjAsIC0xLjAsIDEuMCwgMC4wLCAxLjAsIDAuMCwgMC4wLFxuICAgIDEuMCwgIDEuMCwgLTEuMCwgMS4wLCAxLjAsIDEuMCwgMC4wLCAwLjAsXG4gICAgMS4wLCAgMS4wLCAgMS4wLCAwLjAsIDEuMCwgMS4wLCAwLjAsIDAuMFxuXTtcblxuY29uc3QgaW5kaWNlcyA9IFtcbiAgICAvLyBmcm9udFxuICAgIDAsICAxLCAgMixcbiAgICAyLCAgMywgIDAsXG4gICAgLy8gdG9wXG4gICAgNCwgIDUsICA2LFxuICAgIDYsICA3LCAgNCxcbiAgICAvLyBiYWNrXG4gICAgOCwgIDksIDEwLFxuICAgIDEwLCAxMSwgIDgsXG4gICAgLy8gYm90dG9tXG4gICAgMTIsIDEzLCAxNCxcbiAgICAxNCwgMTUsIDEyLFxuICAgIC8vIGxlZnRcbiAgICAxNiwgMTcsIDE4LFxuICAgIDE4LCAxOSwgMTYsXG4gICAgLy8gcmlnaHRcbiAgICAyMCwgMjEsIDIyLFxuICAgIDIyLCAyMywgMjBcbl07XG5cbmxldCB2YjtcbmxldCBpYjtcbmxldCB2YTtcbmxldCBzaGFkZXI7XG5cbmZ1bmN0aW9uIENvbXBpbGVTaGFkZXIoZ2wsIHNyYywgdHlwZSkge1xuICAgIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc3JjKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG4gICAgcmV0dXJuIHNoYWRlcjtcbn1cblxuZnVuY3Rpb24gQ3JlYXRlU2hhZGVyKGdsLCBzcmNMaXN0KXtcbiAgICBsZXQgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcblxuICAgIGZvcihsZXQgdHlwZSBpbiBPYmplY3Qua2V5cyhzcmNMaXN0KSl7XG4gICAgICAgIGZvcihsZXQgc3JjIGluIHNyY0xpc3RbdHlwZV0pXG4gICAgICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgQ29tcGlsZVNoYWRlcihnbCwgc3JjLCB0eXBlKSk7XG4gICAgfVxuXG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gICAgcmV0dXJuIHByb2dyYW07XG59XG5cbmZ1bmN0aW9uIEluaXRTY2VuZSgpIHtcbiAgICBjb25zdCB7IGdsIH0gPSB0aGlzLkdMQ29udGV4dDtcblxuICAgIHZiID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZiKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheSh2ZXJ0aWNlcyksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIGliID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaWIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdmEgPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YSk7XG5cbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSgwKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKDAsIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMSk7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcigxLCAyLCBnbC5JTlQsIGZhbHNlLCA0KjgsIDQqMyk7XG4gICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMik7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcigyLCAzLCBnbC5GTE9BVCwgZmFsc2UsIDQqOCwgNCo1KTtcblxuICAgIHNoYWRlciA9IENyZWF0ZVNoYWRlcihnbCwge1xuICAgICAgICBbZ2wuVkVSVEVYX1NIQURFUl06IFtcbiAgICAgICAgICAgIGAjdmVyc2lvbiAzMzAgY29yZVxuXG4gICAgICAgICAgICBsYXlvdXQobG9jYXRpb249MCkgaW4gdmVjMyBhX1Bvc2l0aW9uO1xuICAgICAgICAgICAgbGF5b3V0KGxvY2F0aW9uPTEpIGluIHZlYzIgYV9UZXh0UG9zO1xuICAgICAgICAgICAgbGF5b3V0KGxvY2F0aW9uPTIpIGluIHZlYzMgYV9Ob3JtYWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVuaWZvcm0gbWF0NCB1X1ZpZXdQcm9qZWN0aW9uO1xuICAgICAgICAgICAgdW5pZm9ybSBtYXQ0IHVfTW9kZWw7XG5cbiAgICAgICAgICAgIG91dCB2ZWMzIE5vcm1hbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdm9pZCBtYWluKCl7XG4gICAgICAgICAgICAgICAgTm9ybWFsID0gYV9Ob3JtYWw7XG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSB1X1ZpZXdQcm9qZWN0aW9uICogdV9Nb2RlbCAqIHZlYzQoYV9Qb3NpdGlvbiwgMS4wKTtcbiAgICAgICAgICAgIH1gXG4gICAgICAgIF0sXG4gICAgICAgIFtnbC5GUkFHTUVOVF9TSEFERVJdOiBbXG4gICAgICAgICAgICBgI3ZlcnNpb24gMzMwIGNvcmVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGF5b3V0KGxvY2F0aW9uPTApIG91dCB2ZWM0IGNvbG9yO1xuICAgICAgICAgICAgaW4gdmVjMyBOb3JtYWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZvaWQgbWFpbigpe1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdmVjNChOb3JtYWwsIDEuMCk7XG4gICAgICAgICAgICB9YFxuICAgICAgICBdXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gVXBkYXRlU2NlbmUoKSB7XG5cbn1cblxuZnVuY3Rpb24gRHJhd1NjZW5lKCkge1xuICAgIGNvbnN0IHsgZ2wgfSA9IHRoaXMuR0xDb250ZXh0O1xuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcblxuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YSk7XG4gICAgZ2wudXNlUHJvZ3JhbShzaGFkZXIpO1xuICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRVMsIGliLmxlbmd0aCwgZ2wuVU5TSUdORURfSU5ULCBudWxsKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUgPSBcIm1hcmdpbjowO3BhZGRpbmc6MDtcIjtcblxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGNvbmYgPSB7XG4gICAgICAgIENhbnZhc0lEOiBcInNjcmVlblwiLFxuICAgICAgICBXaWR0aDogd2lkdGgsXG4gICAgICAgIEhlaWdodDogaGVpZ2h0XG4gICAgfVxuXG4gICAgY29uc3QgYXBwID0ge1xuICAgICAgICBJbml0OiBJbml0U2NlbmUsIFxuICAgICAgICBVcGRhdGU6IFVwZGF0ZVNjZW5lLCBcbiAgICAgICAgRHJhdzogRHJhd1NjZW5lXG4gICAgfTtcblxuICAgIEdMUnVuKGFwcCwgY29uZik7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });