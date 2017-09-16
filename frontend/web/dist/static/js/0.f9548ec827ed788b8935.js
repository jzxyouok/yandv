webpackJsonp([0],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72285797_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(320);
function injectStyle (ssrContext) {
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(8)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-72285797"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72285797_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = openWindow;
/**
 *Created by jiachenpan on 16/11/29.
 * @param {Sting} url
 * @param {Sting} title
 * @param {Number} w
 * @param {Number} h
 */

function openWindow(url, title, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = width / 2 - w / 2 + dualScreenLeft;
  var top = height / 2 - h / 2 + dualScreenTop;
  var newWindow = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
}

/***/ }),

/***/ 281:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_Star__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_Moon__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_js_Meteor__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_auth__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_openWindow__ = __webpack_require__(272);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // 验权


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            login: false,
            customer: false,
            admin: false
        };
    },
    created: function created() {
        if (sessionStorage.id) {
            this.$router.push('/matters');
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_auth__["a" /* getToken */])()) {
            this.login = true;
            this.customer = true;
        }
        window.addEventListener('hashchange', this.afterQRScan);
    },
    destroyed: function destroyed() {
        window.removeEventListener('hashchange', this.afterQRScan);
    },
    mounted: function mounted() {
        var canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d'),
            width = window.innerWidth,
            height = window.innerHeight,

        //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
        moon = new __WEBPACK_IMPORTED_MODULE_1__static_js_Moon__["a" /* default */](ctx, width, height),
            stars = new __WEBPACK_IMPORTED_MODULE_0__static_js_Star__["a" /* default */](ctx, width, height, 200),
            meteors = [],
            count = 0;

        canvas.width = width;
        canvas.height = height;

        var meteorGenerator = function meteorGenerator() {
            //x位置偏移，以免经过月亮
            var x = Math.random() * width + 800;
            meteors.push(new __WEBPACK_IMPORTED_MODULE_2__static_js_Meteor__["a" /* default */](ctx, x, height));

            //每隔随机时间，生成新流星
            setTimeout(function () {
                meteorGenerator();
            }, Math.random() * 2000);
        };

        var frame = function frame() {
            count++;
            count % 10 == 0 && stars.blink();
            moon.draw();
            stars.draw();

            meteors.forEach(function (meteor, index, arr) {
                //如果流星离开视野之内，销毁流星实例，回收内存
                if (meteor.flow()) {
                    meteor.draw();
                } else {
                    arr.splice(index, 1);
                }
            });
            requestAnimationFrame(frame);
        };
        meteorGenerator();
        frame();
    },

    methods: {
        wechatHandleClick: function wechatHandleClick(thirdpart) {
            this.$store.commit('SET_AUTH_TYPE', thirdpart);
            var appid = 'wxca623dcd43dc4b8e';
            var redirect_uri = encodeURIComponent(window.location.origin + '/authredirect');
            var url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect';
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_openWindow__["a" /* default */])(url, thirdpart, 540, 540);
        },
        customerLogin: function customerLogin() {
            this.login = true;
            this.customer = true;
        },
        adminLogin: function adminLogin() {
            this.login = true;
            this.admin = true;
        },
        back: function back() {
            this.login = false;
            this.customer = false;
            this.admin = false;
        },
        getQueryObject: function getQueryObject(url) {
            url = url == null ? window.location.href : url;
            var search = url.substring(url.lastIndexOf('?') + 1);
            var obj = {};
            var reg = /([^?&=]+)=([^?&=]*)/g;
            search.replace(reg, function (rs, $1, $2) {
                var name = decodeURIComponent($1);
                var val = decodeURIComponent($2);
                val = String(val);
                obj[name] = val;
                return rs;
            });
            return obj;
        },
        afterQRScan: function afterQRScan() {
            var _this = this;

            var hash = window.location.hash.slice(1);
            var hashObj = this.getQueryObject(hash);
            var originUrl = window.location.origin;
            history.replaceState({}, '', originUrl);
            var codeName = hashObj['code'];
            if (!codeName) {
                alert('第三方登录失败');
            } else {
                this.$store.dispatch('LoginByThirdparty', codeName).then(function () {
                    _this.$router.push({ path: '/dashboard' });
                });
            }
        }
    }
});

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(258)(true);
// imports


// module
exports.push([module.i, "#menu[data-v-72285797]{height:100%;overflow:hidden;position:relative}.canvas[data-v-72285797]{z-index:-1}.logo-bg[data-v-72285797]{width:800px;height:200px;position:absolute;z-index:10000;top:120px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:url(" + __webpack_require__(312) + ") no-repeat}.nav[data-v-72285797]{width:200px;height:auto;position:absolute;z-index:10000;top:400px;left:50%;margin-left:-100px}.gv[data-v-72285797]{text-decoration:none;background:url(" + __webpack_require__(281) + ") repeat 0 0;width:130px;height:43px;display:block;text-align:center;line-height:43px;cursor:pointer;float:left;margin:10px 2px;font:18px/43px microsoft yahei;color:#066197}a.gv[data-v-72285797]:hover{background:url(" + __webpack_require__(281) + ") repeat 0 -43px;color:#1d7eb8;-webkit-box-shadow:0 0 6px #1d7eb8;transition-duration:.5s}.city[data-v-72285797]{width:100%;height:170px;position:fixed;bottom:0;z-index:100;background:url(" + __webpack_require__(310) + ") no-repeat;background-size:cover}.moon[data-v-72285797]{width:100px;height:100px;position:absolute;left:100px;top:100px;background:url(" + __webpack_require__(311) + ") no-repeat;background-size:cover}.fade-out-enter-active[data-v-72285797],.fade-out-leave-active[data-v-72285797]{transition:all .5s}.fade-out-enter[data-v-72285797],.fade-out-leave-active[data-v-72285797]{opacity:0;-webkit-transform:translateX(-400px);transform:translateX(-400px)}.fade-in-enter-active[data-v-72285797],.fade-in-leave-active[data-v-72285797]{transition:all .5s}.fade-in-enter[data-v-72285797],.fade-in-leave-active[data-v-72285797]{opacity:0;-webkit-transform:translateX(400px);transform:translateX(400px)}", "", {"version":3,"sources":["/Users/mfhj-dz-001-331/work360/skeeks/frontend/web/src/views/home/index.vue"],"names":[],"mappings":"AACA,uBACE,YAAa,AACb,gBAAiB,AACjB,iBAAmB,CACpB,AACD,yBACI,UAAY,CACf,AACD,0BACE,YAAa,AACX,aAAc,AAChB,kBAAmB,AACnB,cAAe,AACf,UAAW,AACX,SAAU,AACV,mCAAoC,AAC5B,2BAA4B,AACpC,kDAA8D,CAC/D,AACD,sBACE,YAAa,AACX,YAAa,AACb,kBAAmB,AACnB,cAAe,AACf,UAAW,AACX,SAAU,AACV,kBAAoB,CACvB,AACD,qBACE,qBAAsB,AACpB,oDAAiE,AACjE,YAAa,AACb,YAAa,AACb,cAAe,AACf,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,gBAA0B,AAC1B,+BAAkC,AAClC,aAAe,CAClB,AACD,4BACE,wDAAmE,AACnE,cAAc,AACd,mCAAoC,AACpC,uBAA0B,CAC3B,AACD,uBACE,WAAY,AACZ,aAAc,AACZ,eAAgB,AAChB,SAAY,AACZ,YAAa,AACb,mDAA0D,AAC1D,qBAAuB,CAC1B,AACD,uBACE,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,WAAY,AACZ,UAAW,AACX,mDAA0D,AAC1D,qBAAuB,CACxB,AACD,gFACI,kBAAmB,CACtB,AACD,yEACI,UAAW,AACX,qCAAsC,AAC9B,4BAA8B,CACzC,AACD,8EACI,kBAAmB,CACtB,AACD,uEACI,UAAW,AACX,oCAAqC,AAC7B,2BAA6B,CACxC","file":"index.vue","sourcesContent":["\n#menu[data-v-72285797] {\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.canvas[data-v-72285797] {\n    z-index: -1;\n}\n.logo-bg[data-v-72285797] {\n  width: 800px;\n    height: 200px;\n  position: absolute;\n  z-index: 10000;\n  top: 120px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background: url('../../assets/images/top_logo.png') no-repeat;\n}\n.nav[data-v-72285797] {\n  width: 200px;\n    height: auto;\n    position: absolute;\n    z-index: 10000;\n    top: 400px;\n    left: 50%;\n    margin-left: -100px;\n}\n.gv[data-v-72285797] {\n  text-decoration: none;\n    background: url('../../assets/images/nav_gv.png') repeat 0px 0px;\n    width: 130px;\n    height: 43px;\n    display: block;\n    text-align: center;\n    line-height: 43px;\n    cursor: pointer;\n    float: left;\n    margin: 10px 2px 10px 2px;\n    font: 18px/43px 'microsoft yahei';\n    color: #066197;\n}\na.gv[data-v-72285797]:hover {\n  background: url('../../assets/images/nav_gv.png') repeat 0px -43px;\n  color:#1d7eb8;\n  -webkit-box-shadow: 0 0 6px #1d7eb8;\n  transition-duration: 0.5s;\n}\n.city[data-v-72285797] {\n  width: 100%;\n  height: 170px;\n    position: fixed;\n    bottom: 0px;\n    z-index: 100;\n    background: url('../../assets/images/city.png') no-repeat;\n    background-size: cover;\n}\n.moon[data-v-72285797] {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  left: 100px;\n  top: 100px;\n  background: url('../../assets/images/moon.png') no-repeat;\n  background-size: cover;\n}\n.fade-out-enter-active[data-v-72285797], .fade-out-leave-active[data-v-72285797] {\n    transition: all .5s\n}\n.fade-out-enter[data-v-72285797], .fade-out-leave-active[data-v-72285797] {\n    opacity: 0;\n    -webkit-transform: translateX(-400px);\n            transform: translateX(-400px);\n}\n.fade-in-enter-active[data-v-72285797], .fade-in-leave-active[data-v-72285797] {\n    transition: all .5s\n}\n.fade-in-enter[data-v-72285797], .fade-in-leave-active[data-v-72285797] {\n    opacity: 0;\n    -webkit-transform: translateX(400px);\n            transform: translateX(400px);\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("94769498", content, true);

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/city.a49fa22.png";

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/moon.bb94236.png";

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/top_logo.3a11cc5.png";

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "menu"
    }
  }, [_c('canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "canvas"
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade-out"
    }
  }, [_c('div', [_c('div', {
    staticClass: "logo-bg"
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.login),
      expression: "!login"
    }],
    staticClass: "nav"
  }, [_c('a', {
    staticClass: "gv",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.wechatHandleClick('wechat')
      }
    }
  }, [_vm._v("登录")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.login),
      expression: "login"
    }],
    staticClass: "nav"
  }, [_c('router-link', {
    attrs: {
      "to": "/dashboard"
    }
  }, [_c('a', {
    staticClass: "gv",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("进入系统")])])], 1)])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade-in"
    }
  }, [_c('router-view', {
    attrs: {
      "customer": _vm.customer,
      "login": _vm.login,
      "admin": _vm.admin
    },
    on: {
      "back": _vm.back
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "city"
  }), _vm._v(" "), _c('div', {
    staticClass: "moon"
  })], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Meteor {
    constructor(ctx, x, h) {
        this.ctx = ctx
        this.x = x
        this.y = 0
        this.h = h
        this.vx = -(4 + Math.random() * 4)
        this.vy = -this.vx
        this.len = Math.random() * 300 + 500
    }

    flow() {
        //判定流星出界
        if (this.x < -this.len || this.y > this.h + this.len) {
            return false
        }
        this.x += this.vx
        this.y += this.vy
        return true
    }

    draw() {
        let ctx = this.ctx,
            //径向渐变，从流星头尾圆心，半径越大，透明度越高
            gra = ctx.createRadialGradient(
                this.x, this.y, 0, this.x, this.y, this.len)

        const PI = Math.PI
        gra.addColorStop(0, 'rgba(255,255,255,1)')
        gra.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.save()
        ctx.fillStyle = gra
        ctx.beginPath()
        //流星头，二分之一圆
        ctx.arc(this.x, this.y, 1, PI / 4, 5 * PI / 4)
        //绘制流星尾，三角形
        ctx.lineTo(this.x + this.len, this.y - this.len)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Meteor;



/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Moon {
	constructor(ctx, width, height) {
		this.ctx = ctx
		this.width = width
		this.height = height
	}

	draw() {
		let ctx = this.ctx,
			gradient = ctx.createRadialGradient(100, 100, 60, 200, 200, 600)
			//月亮
			// gradient.addColorStop(0, 'rgba(255,255,255,0.5)')
			// gradient.addColorStop(0.01, 'rgb(70,70,80)')
			// gradient.addColorStop(0.2, 'rgb(40,40,50)')
			gradient.addColorStop(0.4, 'rgb(20,20,30)')
			gradient.addColorStop(1, 'rgb(0,0,10)')
			ctx.save()
			ctx.fillStyle = gradient
			ctx.fillRect(0, 0, this.width, this.height)
			ctx.restore()
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Moon;


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Stars {
	constructor(ctx, width, height, amount) {
		this.ctx = ctx
		this.width = width
		this.height = height
		this.stars = this.getStars(amount)
	}

	//返回一堆的小星星
	getStars(amount) {
		let stars = []
		while(amount--) {
			// console.log(amount)
			// 创建一个星星的坐标及大小数据描述JSON对象，添加到stars数组
			stars.push({
				x: Math.random()*this.width,
				y: Math.random()*this.height,
				r: Math.random()+0.2
			})
		}
		return stars
	}

	//画满天星
	draw() {
		let ctx = this.ctx
		ctx.save()   //保存canvas当前绘制，一般新绘制前调用
		ctx.fillStyle = 'white'
		//star 是从stars里的一颗star 这里是function的参数
		this.stars.forEach(star => {
			ctx.beginPath()  //开始绘制
			ctx.arc(star.x, star.y, star.r, 0, 2*Math.PI)  //画椭圆
			ctx.fill()  //填充色
		})
		ctx.restore() //再次保存
	}

	//星星没隔10帧闪一下
	blink() {
		//map方法 找到合适的星星放进新数组 匹配
		this.stars = this.stars.map(star => {
			let sign = Math.random()>0.5 ? 1 : -1
			star.r += sign * 0.2
			if (star.r < 0) {
				star.r = -star.r
			} else if (star.r > 1){
				star.r -= 0.2
			// console.log(star.r)

			}
			return star
		})
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stars;


/***/ })

});
//# sourceMappingURL=0.f9548ec827ed788b8935.js.map