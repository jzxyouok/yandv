<template>
  <div id="menu">
    <canvas id="canvas" class="canvas"></canvas>
    <transition name="fade-out">
      <div>
          <div class="logo-bg"></div>
        <div class="nav" v-show="!login">
            <a class="gv" href="javascript:;" @click="wechatHandleClick('wechat')">登录</a>
        </div>

        <div class="nav" v-show="login">
          <router-link to="/dashboard">
            <a class="gv" href="javascript:;">进入系统</a>
          </router-link>
        </div>
      </div>
      </transition>

    <transition name="fade-in">
          <router-view :customer="customer" :login="login" @back="back" :admin="admin"></router-view>
      </transition>
    <div class="city"></div>
    <div class="moon"></div>
  </div>
</template>

<script>

import Stars from '../../../static/js/Star'
import Moon from '../../../static/js/Moon'
import Meteor from '../../../static/js/Meteor'
import { getToken } from '@/utils/auth' // 验权
import openWindow from '@/utils/openWindow';

export default {
  data() {
    return {
      login: false,
      customer: false,
      admin: false
    }
  },
  created() {
    if (sessionStorage.id) {
      this.$router.push('/matters')
    }
    if (getToken()) {
        this.login = true
        this.customer = true
    }
      window.addEventListener('hashchange', this.afterQRScan);

  },
    destroyed() {
        window.removeEventListener('hashchange', this.afterQRScan);
    },
  mounted() {
    let canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
        moon = new Moon(ctx, width, height),
        stars = new Stars(ctx, width, height, 200),
        meteors = [],
        count = 0

        canvas.width = width;
        canvas.height = height;

    const meteorGenerator = ()=> {
        //x位置偏移，以免经过月亮
        let x = Math.random() * width + 800
        meteors.push(new Meteor(ctx, x, height))

        //每隔随机时间，生成新流星
        setTimeout(()=> {
            meteorGenerator()

        }, Math.random() * 2000)
    }

    const frame = ()=>{
        count++
        count % 10 == 0 && stars.blink()
        moon.draw()
        stars.draw()

        meteors.forEach((meteor, index, arr)=> {
            //如果流星离开视野之内，销毁流星实例，回收内存
            if (meteor.flow()) {
                meteor.draw()
            } else {
                arr.splice(index, 1)
            }
        })
        requestAnimationFrame(frame)
    }
    meteorGenerator()
    frame()
  },
  methods: {
      wechatHandleClick(thirdpart) {
          this.$store.commit('SET_AUTH_TYPE', thirdpart);
          const appid = 'wxca623dcd43dc4b8e';
          const redirect_uri = encodeURIComponent(window.location.origin + '/authredirect');
          const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect';
          openWindow(url, thirdpart, 540, 540);
      },
    customerLogin() {
      this.login = true
      this.customer = true

    },
    adminLogin() {
      this.login = true
      this.admin = true
    },
    back() {
      this.login = false
      this.customer = false
      this.admin = false
    },
      getQueryObject(url) {
          url = url == null ? window.location.href : url;
          const search = url.substring(url.lastIndexOf('?') + 1);
          const obj = {};
          const reg = /([^?&=]+)=([^?&=]*)/g;
          search.replace(reg, (rs, $1, $2) => {
              const name = decodeURIComponent($1);
          let val = decodeURIComponent($2);
          val = String(val);
          obj[name] = val;
          return rs;
      });
          return obj;
      },
      afterQRScan() {
          const hash = window.location.hash.slice(1);
          const hashObj = this.getQueryObject(hash);
          const originUrl = window.location.origin;
          history.replaceState({}, '', originUrl);
          const codeName = hashObj['code'];
          if (!codeName) {
              alert('第三方登录失败');
          } else {
              this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
                  this.$router.push({ path: '/dashboard' });
          });
          }
      }
  }
}
</script>

<style scoped>
#menu {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.canvas {
    z-index: -1;
}
.logo-bg {
  width: 800px;
    height: 200px;
  position: absolute;
  z-index: 10000;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  background: url('../../assets/images/top_logo.png') no-repeat;
}
.nav {
  width: 200px;
    height: auto;
    position: absolute;
    z-index: 10000;
    top: 400px;
    left: 50%;
    margin-left: -100px;
}
.gv {
  text-decoration: none;
    background: url('../../assets/images/nav_gv.png') repeat 0px 0px;
    width: 130px;
    height: 43px;
    display: block;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
    float: left;
    margin: 10px 2px 10px 2px;
    font: 18px/43px 'microsoft yahei';
    color: #066197;
}
a.gv:hover {
  background: url('../../assets/images/nav_gv.png') repeat 0px -43px;
  color:#1d7eb8;
  -webkit-box-shadow: 0 0 6px #1d7eb8;
  transition-duration: 0.5s;
}
.city {
  width: 100%;
  height: 170px;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    background: url('../../assets/images/city.png') no-repeat;
    background-size: cover;
}
.moon {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 100px;
  top: 100px;
  background: url('../../assets/images/moon.png') no-repeat;
  background-size: cover;
}
.fade-out-enter-active, .fade-out-leave-active {
    transition: all .5s
}
.fade-out-enter, .fade-out-leave-active {
    opacity: 0;
    transform: translateX(-400px);
}

.fade-in-enter-active, .fade-in-leave-active {
    transition: all .5s
}
.fade-in-enter, .fade-in-leave-active {
    opacity: 0;
    transform: translateX(400px);
}
</style>