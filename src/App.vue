<template>
<div id="app">
    <header id="navTop">
        <div id="navBtnList" class="clearfixbox">
            <span class="clearfix">图标</span>
            <router-link class="navBtn clearfix" to="/">
                <span>回到主页</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/introduction">
                <span>游戏介绍</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/character">
                <span>角色图鉴</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/story">
                <span>故事概要</span>
                <div class="underline"></div>
            </router-link>
            <router-link class="navBtn clearfix" to="/team">
                <span>主创团队</span>
                <div class="underline"></div>
            </router-link>
        </div>
        <div id="optionBox">
            <span>语言/言語/Language</span>
            <select>
                <option value="zh">简体中文</option>
                <option value="jp">日本語</option>
                <option value="en">English</option>
            </select>
        </div>
    </header>
    <transition enter-active-class="animated fadeIn" >
        <router-view class="content" id="mainContent"></router-view>
    </transition>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import '../node_modules/animate.css/animate.min.css';

body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background: #e3e3e3;
    margin: 0;
    padding: 0;
}
/*清除浮动*/
.clearfixbox:after {
    clear: both;
    content: '';
    display: block;
}

.clearfix{
	float: left;
}
    
.clickable {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: black;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
}

#navTop {
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    background: transparent;
    z-index: 1010;
}
#navBtnList {
    display: inline-block;
    position: relative;
    padding-left: 100px;
    width: 100%;
}

.navBtn {
    min-width: 50px;
    padding-top: 30px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 0 20px;
    text-align: center;
    transition: background-color .2s ease-in-out 0s;
}
.navBtn:hover {
    background: pink;
}
.navBtn:hover > .underline {
    width: 100%;
}

.underline {
    margin-top: 3px; 
    height: 10px;
    width: 0%;
    transition: background-color .2s ease-in-out 0s;
    transition: width .2s;
}

#optionBox {
    position: fixed;
    right: 0;
    top: 0;
}

#mainContent {
    text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#navTop a.router-link-exact-active {
    background: pink;
}

#navTop a.router-link-exact-active > .underline {
    background: #e3e3e3;
    width: 100%;
}

.content {
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
    min-height: calc(100vh - 150px)
}


/* 路由切换动画 */ 
.fade-enter, .fade-leave-active {
    opacity: 0
}
.fade-enter-active, .fade-leave {
    opacity: 1
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

</style>
