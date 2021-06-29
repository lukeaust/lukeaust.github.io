/*
 * ALL RIGHTS RESERVED.
 *
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2020年03月08日
 * 开发日志：https://kksan.top/posts/12023
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com
 * slideout：https://slideout.js.org
 * bootstrap：https://getbootstrap.com
 * font-awesome：https://fontawesome.com
 *
 * 版权所有，请勿删除！
 */

var storage = window.localStorage;
var data = storage.data;
var night = storage.night;
var bg = storage.bg;
var closealert = storage.closealert;
var li = $('.sidenav-btn');
var blockquote = $('.blockquote');

if (storage.data != undefined) {
  data = data.split(',');
  // console.log('已存在localStorage的数据：' + data); //已存在localStorage的数据
  $('#state a img').attr('src', data[0]); //头图
  $('.submitButton').css('background-color', data[1]); //按钮bgc
  $('#inputText').attr('placeholder', data[2]);
  $('#form').attr('action', data[3]);
  $('#inputText').attr('name', data[4]);
  $('#Select').css('color', data[1]);
  $('.span').css('background-color', data[1]);
}

if (storage.night != undefined) {
  night = night.split(',');
  console.log(night);
  $('#main').css('background-color', night[0]); //主界面
  $('#menu').css('background-color', night[1]); //侧栏
  document.getElementById("night").innerHTML = night[2];
  li.css('background-color', night[3]);
  li.css('color', night[4]);
  blockquote.css('color', night[5]);
}

if (storage.bg != undefined) {
  bg = bg.split(',');
  $('#main').css('background-image', bg[0]);
}

if (storage.closealert != undefined) {
  closealert = closealert.split(',');
  if (closealert[0] == '4.0.9') {
    $('#alert').remove();
  }
}

// rgb to hex
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
// rgb to hex结束

// 添加书签
$(function() {
  var bookmark = {
    data: [{
      name: 'Hexo',
      link: 'https://lukeaust.gitee.io',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/book.png',
    }, {
      name: '关联论文',
      link: 'https://www.connectedpapers.com/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/meisi.png',
    }, {
      name: 'R G',
      link: 'https://www.researchgate.net/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/r.png',
    }, {
      name: '博客园',
      link: 'https://www.cnblogs.com/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/blog.png',
    }, {
      name: '南瓜书',
      link: 'https://datawhalechina.github.io/pumpkin-book/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/pumpkin.png',
    }, {
      name: 'T F',
      link: 'https://www.kesci.com/home/user/profile/5c2592861c4af0002ba2a4d9',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/tensorflow.png',
    }, {
      name: 'DL专栏',
      link: 'https://www.zhihu.com/search?q=%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0&type=column',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/dl.png',
    }, {
      name: '梅斯查询',
      link: 'https://www.medsci.cn/sci/index.do?action=search',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/m3.png',
    }, {
      name: 'ML-M',
      link: 'https://machinelearningmastery.com/start-here/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/m1.png',
    }, {
      name: 'M L',
      link: 'https://shunliz.gitbooks.io/machine-learning/content/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/m2.png',
    },{
      name: '脚本之家',
      link: 'https://m.jb51.net/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/jiaoben.png',
    }, {
      name: 'SciKit',
      link: 'https://scikit-learn.org/stable/index.html',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/code.png',
    }, {
      name: '吾爱破解',
      link: 'https://www.52pojie.cn/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/pojie.png',
    }, {
      name: '视频下载',
      link: 'https://weibo.iiilab.com/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/download.png',
    }, {
      name: '图片放大',
      link: 'https://bigjpg.com/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/fangda.png',
    }, {
      name: '临时邮箱',
      link: 'https://www.linshiyouxiang.net',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/mail.png',
    }, {
      name: 'unsplash',
      link: 'https://unsplash.com/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/shetu.png',
    }, {
      name: '懒盘搜索',
      link: 'https://www.lzpan.com/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/cloud.png',
    }, {
      name: '今日热榜',
      link: 'https://tophub.today/',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/headline.png',
    }]					
  }
  for (var i = 0; i < bookmark.data.length; i++) {
    var addList = '<li class="folder-item col-xs-3 col-sm-2"> <a href="' + bookmark.data[i].link + '"><div class="folder-item-box"><img class="folder-item-img" src="' + bookmark.data[i].icon + '" /><p>' + bookmark.data[i].name + '</p></div></a></li>'
    $('#folder ul').append(addList);
  }
})
// 添加书签结束

// 搜索相关
$(function() {
  var search = {
    data: [{
      name: 'baidu',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/baidu-xs.png',
      searchlink: 'https://www.baidu.com/s',
      searchname: 'wd',
      color: '#3245df',
      placeholder: '百度一下...'
    }, {
      name: 'google',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/google-xs.png',
      searchlink: 'https://www.google.com/search',
      searchname: 'q',
      color: '#4285f4',
      placeholder: '咕噜咕噜...'
    }, {
      name: 'bing',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/bing-xs.png',
      searchlink: 'https://cn.bing.com/search',
      searchname: 'q',
      color: '#00868B',
      placeholder: 'Bing搜索...'
    }, {
      name: 'yahoo',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/yahoo-xs.png',
      searchlink: 'https://search.yahoo.com/search',
      searchname: 'p',
      color: '#5f01d1',
      placeholder: 'Yahoo~'
    }, {
      name: 'magi',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/magi-xs.png',
      searchlink: 'https://magi.com/search',
      searchname: 'q',
      color: 'black',
      placeholder: 'Mag[i]...'
    }, {
      name: 'miji',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/miji-xs.png',
      searchlink: 'https://mijisou.com/',
      searchname: 'q',
      color: '#575757',
      placeholder: '不追踪你的搜索引擎...'
    }, {
      name: 'sougou',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/sougou-xs.png',
      searchlink: 'https://www.sogou.com/web',
      searchname: 'query',
      color: '#f94c18',
      placeholder: '搜狗搜索...'
    }, {
      name: 'duckduckgo',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/duckduckgo-xs.png',
      searchlink: 'https://duckduckgo.com',
      searchname: 'q',
      color: '#de5833',
      placeholder: '嘎嘎嘎...'
    }, {
      name: 'doge',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/doge-xs.png',
      searchlink: 'https://www.dogedoge.com/results',
      searchname: 'q',
      color: '#ffca74',
      placeholder: '手动狗头.jpg'
    }, {
      name: 'wechat',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/wechat-xs.png',
      searchlink: 'https://weixin.sogou.com/weixin',
      searchname: 'query',
      color: '#2ca43a',
      placeholder: '搜微信文章...'
    }, {
      name: 'seeres',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/seeres-xs.png',
      searchlink: 'https://seeres.com/search',
      searchname: 'q',
      color: '#414baa',
      placeholder: 'private search...'
    }, {
      name: 'quark',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/quark-xs.png',
      searchlink: 'https://quark.sm.cn/s',
      searchname: 'q',
      color: '#6182f6',
      placeholder: '夸克搜索...'
    }, {
      name: 'taobao',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/taobao-xs.png',
      searchlink: 'https://s.taobao.com/search',
      searchname: 'q',
      color: '#FF5B00',
      placeholder: '淘，我喜欢...'
    }, {
      name: 'jingdong',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/jingdong-xs.png',
      searchlink: 'https://search.jd.com/Search',
      searchname: 'keyword',
      color: '#F30213',
      placeholder: '多，快，好，省...'
    }, {
      name: 'bilibili',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/bilibili-xs.png',
      searchlink: 'https://search.bilibili.com/all',
      searchname: 'keyword',
      color: '#e47494',
      placeholder: 'b站是一个学习网站...'
    }, {
      name: 'github',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/github-xs.png',
      searchlink: 'https://github.com/search',
      searchname: 'q',
      color: '#24292e',
      placeholder: '全球最大的开源社区...'
    }, {
      name: 'toutiao',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/toutiao-xs.png',
      searchlink: 'https://m.toutiao.com/search',
      searchname: 'keyword',
      color: '#ed2f28',
      placeholder: '搜今日头条...'
    }, {
      name: 'weibo',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/weibo-xs.png',
      searchlink: 'https://s.weibo.com/weibo',
      searchname: 'q',
      color: '#e6162d',
      placeholder: '搜微博...'
    }, {
      name: 'zhihu',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/zhihu-xs.png',
      searchlink: 'https://www.zhihu.com/search',
      searchname: 'q',
      color: '#1087eb',
      placeholder: '我们都是有问题的人...'
    }, {
      name: 'kuaidi',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/kuaidi-xs.png',
      searchlink: 'https://m.kuaidi100.com/result.jsp',
      searchname: 'nu',
      color: '#317EE7',
      placeholder: '搜快递...'
    }, {
      name: 'scholar',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/scholar-xs.png',
      searchlink: 'https://scholar.google.com/scholar',
      searchname: 'q',
      color: '#317EE7',
      placeholder: '谷歌学术...'
    }, {
      name: 'arXiv',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/arXiv-xs.png',
      searchlink: 'https://arxiv.org/search/?searchtype=all&abstracts=show&order=-announced_date_first&size=50',
      searchname: 'query',
      color: '#317EE7',
      placeholder: 'arXiv...'
    }, {
      name: 'wanfang',
      icon: 'https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/wanfang-xs.png',
      searchlink: 'http://s.wanfangdata.com.cn/paper',
      searchname: 'q',
      color: '#317EE7',
      placeholder: '万方学术...'
    }]
  }
  for (var i = 0; i < search.data.length; i++) { //添加搜索按钮
    var addList = '<li class="folder-item col-xs-3 col-sm-2"> <a href="#"> <div class="folder-item-box"> <img id="' + search.data[i].name + '" class="folder-item-img" src="' + search.data[i].icon + '" /> </div> </a> </li> '
    $('.nav ul').append(addList);
  }

  // 切换搜索引擎
  $(document).click(function(e) {
    var id = e.target.id;
    for (var i = 0; i < search.data.length; i++) {
      if (id == search.data[i].name) {
        document.getElementById("state").innerHTML = "<a href='folder://'><img style='width:300px;' src='https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/" + search.data[i].name + ".png'></a>";
        $('#submitButton').css('background-color', search.data[i].color); //按钮bg
        $('#Select').css('color', search.data[i].color); //选择器
        $('#nav').css('display', 'none');
        $('#folder').css('display', 'block');
        document.getElementById("Select").innerHTML = "<hr>书签 <img src='https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/search-change.svg?v=2ae7ab8'>";
        $("#inputText").attr("placeholder", search.data[i].placeholder);
        $("#form").attr("action", search.data[i].searchlink);
        $("#inputText").attr("name", search.data[i].searchname);

        //存入用户数据
        var searchPho = $('#state a img').attr("src"); //搜索引擎头图
        var color = rgb2hex($('.submitButton').css('background-color')); //搜索按钮颜色和搜索框四边颜色
        var searchL = $('#form').attr("action"); //searchlink
        var searchN = $('#inputText').attr("name"); //searchname
        var placeholder = $('#inputText').attr('placeholder');
        storage.data = [searchPho, color, placeholder, searchL, searchN] //记录用户数据
        // console.log('新存入localStorage的数据：' + storage.data); //新存入localStorage的数据
        break;
      }
    }
  })
  // 搜索相关结束


  // 夜间模式
  $('#night').click(function() {
    if (rgb2hex($('#main').css('background-color')) == '#ffffff') {
      $('#main').css('background-color', '#2f2f33'); //主界面
      $('#menu').css('background-color', '#5C5C5C'); //侧栏
      document.getElementById("night").innerHTML = "日间模式";
      li.css({
        "background-color": "#575757",
        "color": "#DBDBDB"
      });
      blockquote.css('color', '#DBDBDB');
    } else if (rgb2hex($('#main').css('background-color')) == '#2f2f33') {
      $('#main').css('background-color', '#ffffff'); //主界面
      $('#menu').css('background-color', '#EDEDED'); //侧栏
      document.getElementById("night").innerHTML = "夜间模式";
      li.css({
        "background-color": "#E3E3E3",
        "color": "black"
      });
      blockquote.css('color', 'black');
    }
    var mainbg = rgb2hex($('#main').css('background-color'));
    var menubg = rgb2hex($('#menu').css('background-color'));
    var inner = document.getElementById("night").innerHTML;
    var libg = rgb2hex(li.css('background-color'));
    var lico = rgb2hex(li.css('color'));
    var blockquoteco = rgb2hex(blockquote.css('color'));
    // storage.night = [mainbg, menubg, inner, libg, lico, blockquoteco];
    // localStorage.clear()
  })
  // 夜间模式结束

  // 更新提示框
  $('#closealert').click(function() {
    var version = '4.0.9';
    localStorage.closealert = [version];
  })
  // 更新提示框结束

})

// 显示/干掉壁纸
var width = $(document).width();
$('#bg').click(function() {
  width < 768 ? ($('#main').css('background-image') == 'none' ? ($('#main').css('background-image', 'url(img/bg-xs.jpg)')) : ($('#main').css('background-image', 'none'))) : $('#main').css('background-image') == 'none' ? ($('#main').css('background-image', 'url(img/bg.jpg)')) : ($('#main').css('background-image', 'none'));
  var background = $('#main').css('background-image');
  storage.bg = [background];
})

//检查搜索框是否为空
function check() {
  var o = document.getElementById("inputText");
  var v = o.value;
  v = v.replace(/[ ]/g, "");
  if (v == '') {
    return false;
  }
}
//检查搜索框是否为空结束

//title问候语
var d = new Date();
var time = d.getHours();
if (time < 24) {
  document.getElementById("title").innerHTML = "一个导航 | Good evening";
}
if (time < 18) {
  document.getElementById("title").innerHTML = "一个导航 | Good afternoon";
}
if (time < 12) {
  document.getElementById("title").innerHTML = "一个导航 | Good morning";
}
if (time < 5) {
  document.getElementById("title").innerHTML = "一个导航 | Stay up late again";
}
//title问候语结束

//导航、引擎选择器
function select() {
  $('#folder').css('display') == 'block' ? ($('#folder').css('display', 'none'), $('#nav').css('display', 'block'), document.getElementById("Select").innerHTML = "<hr>搜索引擎 <img src='https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/search-change.svg?v=2ae7ab8'>") : ($('#nav').css('display', 'none'), $('#folder').css('display', 'block'), document.getElementById("Select").innerHTML = "<hr>书签 <img src='https://cdn.jsdelivr.net/gh/lukeaust/blog/index/imgs/search-change.svg?v=2ae7ab8'>");
}

// 天气插件
(function(a, h, g, f, e, d, c, b) {
  b = function() {
    d = h.createElement(g);
    c = h.getElementsByTagName(g)[0];
    d.src = e;
    d.charset = "utf-8";
    d.async = 1;
    c.parentNode.insertBefore(d, c)
  };
  a["SeniverseWeatherWidgetObject"] = f;
  a[f] || (a[f] = function() {
    (a[f].q = a[f].q || []).push(arguments)
  });
  a[f].l = +new Date();
  if (a.attachEvent) {
    a.attachEvent("onload", b)
  } else {
    a.addEventListener("load", b, false)
  }
}(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((new Date().getTime() / 100000000).toString(), 10)));
window.SeniverseWeatherWidget('show', {
  flavor: "bubble",
  location: "WX4FBXXFKE4F",
  geolocation: true,
  language: "auto",
  unit: "c",
  theme: "auto",
  token: "e14489a8-9a7e-477d-9c6c-b4b390175cca",
  hover: "enabled",
  container: "tp-weather-widget"
})
//更多资源请关注：三岁半资源网:sansuib.com
// 搜索提示词
class searchHint {
  constructor() {
    this.search = inputText;
    this.list = list;
    this.body = document.body;
    this.init();
  };
  init() {
    this.watchInput();
  };
  watchInput() {
    this.search.onkeyup = () => {
      if (this.search.value.length == 0) {
        this.list.innerHTML = '';
        return;
      }
      const script = document.createElement('script');
      script.src = "https://www.baidu.com/su?wd=" + this.search.value + "&cb=jsonp.showMsg";
      this.body.appendChild(script);
      this.body.removeChild(script);
    }
  };
  showMsg(msg) {
    var href = $('#form').attr('action');
    var name = $('#inputText').attr('name');
    var v = $('#inputText').val();
    var str = '';
    for (var i = 0; i < msg.s.length; i++) {
      var sk = new Array();
      sk[i] = msg.s[i].replace(/\s*/g, ''); //去掉关键字空格
      str += '<a href=' + href + '?' + name + '=' + sk[i] + '><li><span>' + (i + 1) + '</span>' + msg.s[i] + '</li></a>';
    }
    this.list.innerHTML = str;
    if (str) { //有返回才显示#searchlist
      $('#searchlist').css("display", "block");
    }
    document.onkeydown = function(event) {
      if (event.keyCode == 8 && v.length == 1) {
        $('#searchlist').css("display", "none");
      }
    };
    $(document).click(function() { //点击其他地方隐藏#searchlist
      $('#searchlist').css("display", "none");
    });
  }
}
const jsonp = new searchHint();

//导航、引擎选择器结束

/*
 * ALL RIGHTS RESERVED.
 *
 * 作者：酷安@_小K同學
 * 项目开始日期：2020年01月26日
 * 上次修改时间：2020年03月08日
 * 开发日志：https://kksan.top/posts/12023
 *
 * 开源相关：
 * Github：https://github.com/Jackie1123/aNavigation
 * CSSFX：https://cssfx.netlify.com
 * jQuery：https://jquery.com
 * slideout：https://slideout.js.org
 * bootstrap：https://getbootstrap.com
 * font-awesome：https://fontawesome.com
 *
 * 版权所有，请勿删除！
 */
