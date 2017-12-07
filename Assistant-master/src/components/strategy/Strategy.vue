<template>
  <div class="position">
    <div v-if="show===true" class="loading">
      <Loading></Loading>
    </div>
    <div class="top">
      <div class="backgroundAlpha"></div>
      <span class="search"><i class="icon-search"></i></span>
      <div class="content">
        <span class="left-name" :class="{active:moveWidth===0}" @click="spanFn(0)">发现</span>
        <span class="right-name" :class="{active:moveWidth!==0}" @click="spanFn(1)">攻略</span>
      </div>
      <span class="news"><i class="icon-bell"></i></span>
    </div>
    <div v-show="show===false">
      <div class="ulScroll" ref="ulScroll">
        <ul class="pagbox">
          <li class="content-wrapper" ref="liScroll">
            <div class="scroll">
              <div class="fx-yuhun-list r">
                <div class="title">
                  <h3>今日御魂掉落</h3>
                </div>
                <div class="right">
                  <ul class="clearfix" ref="tHook"></ul>
                </div>
                <div class="right-botton">
                  <a href="http://localhost:8080/#/page/9"></a>
                </div>
              </div>
              <div class="panel">
                <div class="panel-header">
                  <h3><b>副本攻略</b></h3>
                  <div class="right">
                    <a href="javascript:void(0);"><span>更多</span><i class="more-icon"></i></a>
                  </div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item"><a class="fx-fgbl-grids-item1_1" href="javascript:void(0);">真·八岐大蛇</a></div>
                      <div class="item"><a class="fx-fgbl-grids-item1_2" href="javascript:void(0);">夏之风物诗</a></div>
                      <div class="item"><a class="fx-fgbl-grids-item1_3" href="javascript:void(0);">伞剑的守护</a></div>
                      <div class="item"><a class="fx-fgbl-grids-item1_4" href="javascript:void(0);">暴风之巅</a></div>
                      <div class="item"><a class="fx-fgbl-grids-item1_5" href="javascript:void(0);">红叶的羁绊</a></div>
                      <div class="item"><a class="fx-fgbl-grids-item1_6" href="javascript:void(0);">妖刀之秘籍</a></div>
                      <div class="item"><a class="fx-fgbl-grids-item1_7" href="javascript:void(0);">石距</a></div>
                      <div class="item"><a class="fx-fgbl-grids-item1_8" href="javascript:void(0);">河畔的童谣</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel">
                <div class="panel-header">
                  <h3><b>热门式神攻略</b></h3>
                  <div class="right">
                    <a href="javascript:void(0);"><span>更多</span><i class="more-icon"></i></a>
                  </div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item"><a href="javascript:void(0);"><img
                        src="https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/yzq_jx1.jpg"
                        alt=""><span class="name">玉藻前<i class="state-tips-new">新</i></span></a></div>
                      <div class="item"><a href="javascript:void(0);"><img
                        src="https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/xtz_jx1.jpg"
                        alt=""><span class="name">雪童子<i class="state-tips-new">新</i></span></a></div>
                      <div class="item"><a href="javascript:void(0);"><img
                        src="https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/bmg_jx1.jpg"
                        alt=""><span class="name">百目鬼<i class="state-tips-new">新</i></span></a></div>
                      <div class="item"><a href="javascript:void(0);"><img
                        src="https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/tw_jx1.jpg"
                        alt=""><span
                        class="name">兔丸</span></a></div>
                      <div class="item"><a href="javascript:void(0);"><img
                        src="https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/sw_jx1.jpg"
                        alt=""><span
                        class="name">书翁</span></a></div>
                      <div class="item"><a href="javascript:void(0);"><img
                        src="https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/bah_jx1.jpg"
                        alt=""><span class="name">彼岸花</span></a></div>
                      <div class="item"><a href="javascript:void(0);"><img
                        src="https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/hnj_jx1.jpg"
                        alt=""><span class="name">花鸟卷</span></a></div>
                      <div class="item"><a href="javascript:void(0);"><img
                        src="https://www.16163.com/zt/yys/app/gonglue2/images/common/ss/skill_jx_ss/yml_jx1.jpg"
                        alt=""><span class="name">一目连</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel fx-rmtj-panel">
                <div class="panel-header">
                  <h3><b>热门推荐</b></h3>
                  <div class="right"></div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item1"><a href="http://yys.16163.com/thread-3365020-1-1.html">最新公告</a></div>
                      <div class="item1"><a
                        href="http://xmapi.gameyw.netease.com/xiaomei/fetch_news/276611.html?from=faxian">周年庆活动<i
                        class="state-tips-new">热</i></a></div>
                      <div class="item1"><a
                        href="http://xmapi.gameyw.netease.com/xiaomei/fetch_news/277723.html?from=faxian">十月神秘符咒</a>
                      </div>
                      <div class="item1"><a
                        href="http://xmapi.gameyw.netease.com/xiaomei/fetch_news/264197.html?from=faxian">胧车攻略</a></div>
                      <div class="item1"><a
                        href="http://xmapi.gameyw.netease.com/xiaomei/fetch_news/263811.html?from=faxian">狗粮技巧<i
                        class="state-tips-recommend">荐</i></a></div>
                      <div class="item1"><a href="http://yys.16163.com/thread-2919261-1-1.html">御魂强化</a></div>
                      <div class="item1"><a href="http://www.16163.com/zt/yys/app/gonglue/pages/jjk.html">结界卡合成</a>
                      </div>
                      <div class="item1"><a href="http://www.16163.com/zt/yys/app/gonglue/pages/sswp.html">式神委派</a>
                      </div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2079370-1-1.html">结界突破</a></div>
                    </div>
                  </div>
                </div>

                <div class="panel-header">
                  <h3><b>斗技阵容</b></h3>
                  <div class="right"><a class="rl" href="./djzr1.html"><span>更多</span><i class="more-icon"></i></a>
                  </div>
                </div>
                <div id="page_i">

                  <div class="panel djzr-panel">
                    <div class="panel-header">
                      <h3>先手控制流</h3>
                      <div class="right"></div>
                    </div>
                    <div class="panel-body">
                      <a href="javascript:void(0);">
                        <ul class="djzr-role-list clearfix">
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201705/15/113210hbmbf0fmngibq5ea.jpg" alt="">
                            <span class="name">晴明</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/191643kti20drxx2xix0it.png" alt="">
                            <span class="name">般若</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/191204eadauwwwwkxav2su.png" alt="">
                            <span class="name">雪女</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/190926my5ykf4mlwyw7rzm.png" alt="">
                            <span class="name">座敷童子</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/191643ot1yre4har4l19eq.png" alt="">
                            <span class="name">姑获鸟</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/191644ymt2m5ie77u57w5t.png" alt="">
                            <span class="name">樱花妖</span></li>
                        </ul>
                        <p class="djzr-role-info scale-fix">
                          <span>阵容介绍：</span>靠速度抢得先机后进行一系列的控制，打退，集火等手段先行对对手核心进行制裁，掌握战斗主动权，突出一速的爆发与群控式神的配合优势，在斗技中体现出强大的底气和优势。
                        </p></a>
                    </div>
                  </div>


                  <div class="panel djzr-panel">
                    <div class="panel-header">
                      <h3>慢速后手流</h3>
                      <div class="right"></div>
                    </div>
                    <div class="panel-body">
                      <a href="./djzr2.html#3">
                        <ul class="djzr-role-list clearfix">
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201705/15/113210hi2au222azmbzzi8.jpg" alt="">
                            <span class="name">源博雅</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/193257uyjrhj81gl11l90h.png" alt="">
                            <span class="name">酒吞童子</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/192536bx00clvdul4cbczd.png" alt="">
                            <span class="name">桃花妖</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/193258utsouwv5300iljjy.png" alt="">
                            <span class="name">雨女</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/192535ziirrr1lje2ir9r8.png" alt="">
                            <span class="name">椒图</span></li>
                          <li>
                            <img src="https://mgame-f.netease.com/forum/201704/26/193257q86t8tf6kvz1efwj.png" alt="">
                            <span class="name">惠比寿</span></li>
                        </ul>
                        <p class="djzr-role-info scale-fix">
                          <span>阵容介绍：</span>不停挨打，绝处逢生，打乱对手节奏将对局拖入后期，强大阵容韧性与血量厚度在伤害加成和减治疗的帮助下通过持续不断的AOE压制对方，最后斩杀敌人。</p>
                      </a>
                    </div>
                  </div>

                </div>
                <div class="panel-header">
                  <h3><b>式神培养</b></h3>
                  <div class="right"></div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item1"><a href="./djzr1.html">斗技阵容</a></div>
                      <div class="item1"><a href="http://yys.16163.com/thread-2725825-1-1.html">式神解读汇总<i
                        class="state-tips-new">新</i></a></div>
                      <div class="item1"><a href="http://www.16163.com/zt/yys/xsfy/?from=faxian">式神位置分布</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-1991936-1-1.html">式神来源</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2983062-1-1.html">式神升级经验</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2139856-1-1.html">快速升级</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2058180-1-1.html">式神觉醒</a></div>
                      <div class="item1"><a
                        href="http://xmapi.gameyw.netease.com/xiaomei/fetch_news/263811.html?from=faxian">狗粮技巧<i
                        class="state-tips-recommend">荐</i></a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2625557-1-1.html">欧洲人搭配</a></div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="panel fx-fbgl-panel">
                <div class="panel-header">
                  <h3><b>御灵攻略</b></h3>
                  <div class="right"></div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item"><a class="yl-fgbl-grids-item1_1"
                                           href="https://yys.16163.com/thread-2818137-1-1.html">御灵之境</a></div>
                      <div class="item"><a class="yl-fgbl-grids-item1_2"
                                           href="https://yys.16163.com/thread-2958518-1-1.html">御灵境之钥</a></div>
                      <div class="item"><a class="yl-fgbl-grids-item1_3"
                                           href="https://yys.16163.com/thread-2958528-1-1.html">御灵成就</a></div>
                      <div class="item"><a class="yl-fgbl-grids-item1_4"
                                           href="https://yys.16163.com/thread-2958535-1-1.html">强化材料</a></div>
                      <div class="item"><a class="yl-fgbl-grids-item1_5"
                                           href="https://yys.16163.com/thread-2958551-1-1.html">满级属性</a></div>
                      <div class="item"><a class="yl-fgbl-grids-item1_6"
                                           href="https://yys.16163.com/thread-2958569-1-1.html">御灵升级</a></div>
                      <div class="item"><a class="yl-fgbl-grids-item1_7"
                                           href="https://yys.16163.com/thread-2914933-1-1.html">白藏主攻略</a></div>
                      <div class="item"><a class="yl-fgbl-grids-item1_8"
                                           href="https://yys.16163.com/thread-2820774-1-1.html">暗孔雀御灵3</a></div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="panel fx-rmtj-panel">

                <div class="panel-header">
                  <h3><b>御魂培养</b></h3>
                  <div class="right"></div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item1"><a href="http://yys.16163.com/thread-2919261-1-1.html">御魂强化攻略<i
                        class="state-tips-new">热</i></a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2967139-1-1.html">御魂出处</a></div>
                      <div class="item1"><a href="https://www.16163.com/zt/yys/app_tj/yhtj.html">暴伤御魂<i
                        class="state-tips-recommend">荐</i></a></div>
                      <div class="item1"><a
                        href="http://16163.gameyw.netease.com:8080/zt/yys/app/gonglue/pages/fbxq.html#7">业原火</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2313393-1-1.html">搭配大全<i
                        class="state-tips-recommend">荐</i></a></div>
                      <div class="item1"><a href="https://www.16163.com/zt/yys/app_tj/yhtj.html">位置属性</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2170582-1-1.html">刷御魂狗粮</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2465590-1-1.html">黑科技<i
                        class="state-tips-recommend">荐</i></a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2415015-1-1.html">御魂盒</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2895445-1-1.html">御魂副属性</a></div>
                      <div class="item1"><a href="http://yys.16163.com/thread-2941969-1-1.html">如何堆一速<i
                        class="state-tips-new">热</i></a></div>
                      <div class="item1"><a href="http://yys.16163.com/thread-2984228-1-1.html">星级差别</a></div>

                    </div>
                  </div>
                </div>

                <div class="panel-header">
                  <h3><b>阴阳师晴明</b></h3>
                  <div class="right"></div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item1"><a href="https://yys.16163.com/thread-2429907-1-1.html">技能搭配</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958589-1-1.html">晴明速度</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958575-1-1.html">信物掉落<i
                        class="state-tips-recommend">荐</i></a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958644-1-1.html">对比神乐</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-1859931-1-167.html">被动技能</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2335023-1-1.html">技能升级</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958581-1-1.html">对比源博雅</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958585-1-1.html">传记</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2072586-1-1.html">黑晴明</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958589-1-1.html">满级属性<i
                        class="state-tips-recommend">荐</i></a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958599-1-1.html">面具获得</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958877-1-1.html">换皮肤</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel fx-fbgl-panel">
                <div class="panel-header">
                  <h3><b>阴阳师神乐</b></h3>
                  <div class="right"></div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item"><a class="bb-fgbl-grids-item1"
                                           href="https://yys.16163.com/thread-2958776-1-1.html">技能解锁</a>
                      </div>
                      <div class="item"><a class="bb-fgbl-grids-item2"
                                           href="https://yys.16163.com/thread-2958786-1-1.html">技能搭配</a>
                      </div>
                      <div class="item"><a class="bb-fgbl-grids-item3"
                                           href="https://yys.16163.com/thread-2958795-1-1.html">皮肤更换</a>
                      </div>
                      <div class="item"><a class="bb-fgbl-grids-item4"
                                           href="https://yys.16163.com/thread-2340092-1-1.html">复活技能</a>
                      </div>
                      <div class="item"><a class="bb-fgbl-grids-item5"
                                           href="https://yys.16163.com/thread-2340092-1-1.html">反弹伤害</a>
                      </div>
                      <div class="item"><a class="bb-fgbl-grids-item6"
                                           href="https://yys.16163.com/thread-2340092-1-1.html">技能升级</a>
                      </div>
                      <div class="item"><a class="bb-fgbl-grids-item7"
                                           href="https://yys.16163.com/thread-2958802-1-1.html">一拖五</a>
                      </div>
                      <div class="item"><a class="bb-fgbl-grids-item8"
                                           href="https://yys.16163.com/thread-2958818-1-1.html">带狗粮</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="panel fx-rmtj-panel">

                <div class="panel-header">
                  <h3><b>八百比丘尼</b></h3>
                  <div class="right"></div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item1"><a href="https://yys.16163.com/thread-2181479-1-1.html">技能搭配</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2361251-1-1.html">角色分析<i
                        class="state-tips-new">热</i></a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2269594-1-1.html">技能解锁</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2186299-1-1.html">辅助技能</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2178888-1-1.html">星陨技能</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2184130-1-1.html">视频解说<i
                        class="state-tips-recommend">荐</i></a></div>
                    </div>
                  </div>
                </div>

                <div class="panel-header">
                  <h3><b>阴阳师源博雅</b></h3>
                  <div class="right"></div>
                </div>
                <div class="panel-body">
                  <div class="grids">
                    <div class="grids-item-wrapper clearfix">
                      <div class="item1"><a href="https://yys.16163.com/thread-2958824-1-1.html">信物掉落</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2351220-1-1.html">技能搭配</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958895-1-1.html">打鬼王<i
                        class="state-tips-recommend">荐</i></a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958676-1-1.html">源博雅分身</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958644-1-1.html">对比晴明<i
                        class="state-tips-new">热</i></a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958647-1-1.html">技能解锁</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958644-1-1.html">对比神乐</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958638-1-1.html">快速升级</a></div>
                      <div class="item1"><a href="https://yys.16163.com/thread-2958635-1-1.html">一拖五</a></div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </li>
          <li class="strateg-wrapper" ref="newScroll">
            <div class="secont">
              <ul class="list-item-box">
                <li class="list-item" @click="clickData(0)" :class="{active:index===0}">全部</li>
                <li class="list-item" @click="clickData(1)" :class="{active:index===1}">新手指引</li>
                <li class="list-item" @click="clickData(2)" :class="{active:index===2}">进阶攻略</li>
                <li class="list-item" @click="clickData(3)" :class="{active:index===3}">式神养成</li>
                <li class="list-item" @click="clickData(4)" :class="{active:index===4}">副本攻略</li>
                <li class="list-item" @click="clickData(5)" :class="{active:index===5}">御魂搭配</li>
              </ul>
              <div class="all-wrapper">
                <gonglue :glData="glData[index]"></gonglue>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import gonglue from './Gonglue'
  import Loading from '../loading/Loading'
  import IScroll from 'iscroll'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    props: {
      yuhunData: {
        type: Array
      },
      shishenData: {
        type: Array
      }
    },
    data() {
      return {
        glData: [[], [], [], [], []],
        index: 0,
        show: true
      }
    },
    computed: {
      ...mapGetters(['moveWidth'])
    },
    methods: {
      ...mapMutations(['touchWidth', 'clickSpanFn']),
      setTitle() {
        let day = new Date().getDay()
        switch (day) {
          case 1:
            this.yuhunDay = this.yuhunData.slice(0, 4)
            break
          case 2:
            this.yuhunDay = this.yuhunData.slice(4, 8)
            break
          case 3:
            this.yuhunDay = this.yuhunData.slice(8, 12)
            break
          case 4:
            this.yuhunDay = this.yuhunData.slice(12, 16)
            break
          case 5:
            this.yuhunDay = this.yuhunData.slice(16, 20)
            break
        }
        if (day === 0 || day === 6) {
          let li = document.createElement('span')
          li.style = 'display:block;margin-top:0.2rem;font-size:0.32000rem;text-align:center;'
          li.innerHTML = '周末御魂随机掉落'
          this.$refs.tHook.appendChild(li)
        } else {
          for (let i = 0; i < this.yuhunDay.length; i++) {
            let li = document.createElement('li')
            li.style.width = 30 + 'px'
            li.style.height = 30 + 'px'
            li.style.borderRadius = 50 + '%'
            li.style.display = 'inline-block'
            li.style.margin = 10 + 'px'
            let img = document.createElement('img')
            img.style.width = 30 + 'px'
            img.style.height = 30 + 'px'
            img.style.borderRadius = 50 + '%'
            img.src = 'https://www.16163.com/zt/yys/app/gonglue/images/yhtj/icon/' + this.yuhunDay[i].御魂图标
            li.appendChild(img)
            this.$refs.tHook.appendChild(li)
          }
        }
      },
      initWidth() {
        this.heightScroll = new IScroll(this.$refs.liScroll, {
          click: true,
          scrollY: true
        })
      },
      spanFn(num) {
        let obj = this.$refs.ulScroll.getElementsByClassName('pagbox')[0]
        this.clickSpanFn({obj, num})
      },
      clickData(index) {
        this.index = index
      },
      setHeight() {
        this.memuScroll = new IScroll(this.$refs.newScroll, {
          click: true,
          scrollY: true
        })
      }
    },
    created() {
      this.$axios.get('/api/gl')
        .then((res) => {
          res = res.data
          if (res.error === 0) {
            let data = res.data
            this.glData.unshift(data)
            for (let i = 0; i < data.length; i++) {
              if (/新手指引/g.test(data[i].tags)) {
                this.glData[1].push(data[i])
              }
              if (/进阶攻略/g.test(data[i].tags)) {
                this.glData[2].push(data[i])
              }
              if (/式神养成/g.test(data[i].tags)) {
                this.glData[3].push(data[i])
              }
              if (/副本攻略/g.test(data[i].tags)) {
                this.glData[4].push(data[i])
              }
              if (/御魂搭配/g.test(data[i].tags)) {
                this.glData[5].push(data[i])
              }
            }
          }
        })
        .catch((err) => {
          alert(err)
        })
      setTimeout(() => {
        this.show = false
      }, 1000)
    },
    mounted() {
      this.setTitle()
      this.$nextTick(() => {
        let obj = this.$refs.ulScroll.getElementsByClassName('pagbox')[0]
        this.touchWidth(obj)
      })
    },
    components: {
      gonglue,
      Loading
    }
  }
</script>

<style lang="less" rel=stylesheet/less  scoped>
  @import '../../common/less/base.css';
  @import "../../common/less/strategy";

  .position {
    position: relative;
    height: 100%;
    width: 100%;
    .top {
      position: fixed;
      display: flex;
      top: 0;
      left: 0;
      height: 50px;
      width: 100%;
      line-height: 50px;
      font-size: 16px;
      text-align: center;
      color: #000;
      z-index: 100;
      .backgroundAlpha {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #A7C1CC;
        z-index: -1;
      }
      .search, .news {
        flex: 0 0 30px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin: 10px 20px;
        color: #000;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
      }
      .content {
        flex: 1;
        font-size: 20px;
        .active {
          font-size: 24px;
          font-weight: 700;
        }
      }
    }
    .pagbox {
      position: absolute;
      width: 200%;
      top: 50px;
      bottom: 48px;
      font-size: 0;
      .content-wrapper {
        float: left;
        width: 50%;
        height: 100%;
        overflow: scroll;
        .fx-yuhun-list {
          display: flex;
          .title {
            flex: 0 0 72px;
            height: 48px;
            line-height: 48px;
            margin: 0 10px;
            h3 {
              font-family: "PingFang";
              font-size: 0.32000rem;
            }
          }
          .right {
            flex: 2;
            height: 48px;
          }
          .right-botton {
            flex: 0 0 0.7257rem;
            width: 0.9257rem;
            height: 48px;
            a {
              position: absolute;
              display: block;
              /*right: 0.37333rem;*/
              top: 0.45000rem;
              width: 0.24000rem;
              height: 0.40000rem;
              margin: 0;
              background: url(../../common/img/gt-icon.png) no-repeat 0 0;;
              background-size: 0.24000rem 0.40000rem;
            }
          }
        }
        .panel {
          position: relative;
          width: 100%;
          .panel-header {
            position: relative;
            display: flex;
            height: 0.80000rem;
            margin-top: 1px;
            background: #F7F7F7;
            border-bottom: 1PX solid #ebebeb;
            h3 {
              flex: 1;
              font-size: 0.32000rem;
              margin-left: 10px;
            }
            .right {
              flex: 0 0 1.3rem;
              span {
                font-size: 12px;
              }
              .more-icon {
                position: absolute;
                display: block;
                right: 0.37333rem;
                top: 0.25000rem;
                width: 0.24000rem;
                height: 0.30000rem;
                margin: 0;
                background: url(../../common/img/gt-icon.png) no-repeat 0 0;;
                background-size: 0.24000rem 0.30000rem;
              }
            }
          }
          .panel-body {
            width: 100%;
            background: #fff;
            .grids {
              width: 100%;
              .grids-item-wrapper {
                width: 100%;
                .item {
                  display: inline-block;
                  /*float: left;*/
                  width: 20%;
                  height: 57px;
                  margin: 2%;
                  white-space: nowrap;
                  text-align: center;
                  img {
                    display: block;
                    margin: 0 auto;
                    width: 80%;
                    border-radius: 50%;
                  }
                  .name {
                    font-size: 14px;
                    .state-tips-new {
                      position: absolute;
                      top: 40px;
                      margin-left: 3%;
                      width: 20px;
                      height: 20px;
                      line-height: 20px;
                      color: #fff;
                      background: #EA413C;
                      border-radius: 3px;
                    }
                  }
                }
              }
            }
          }
        }
        .fx-rmtj-panel {
          position: relative;
          width: 100%;
          .grids-item-wrapper {
            width: 100%;
            font-size: 0;
            .item1 {
              position: relative;
              display: inline-block;
              /*float: left;*/
              width: 33%;
              height: 57px;
              line-height: 57px;
              font-size: 16px;
              text-align: center;
              border-right: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              .state-tips-new {
                position: absolute;
                top: 5px;
                right: 5px;
                width: 15px;
                height: 15px;
                line-height: 15px;
                font-size: 10px;
                color: #fff;
                background: #EA413C;
                border-radius: 3px;
              }
              .state-tips-recommend {
                position: absolute;
                top: 5px;
                right: 5px;
                width: 15px;
                height: 15px;
                line-height: 15px;
                font-size: 10px;
                color: #fff;
                background: #009DD9;
                border-radius: 3px;
              }
            }
          }
          #page_i {
            .panel-header {
              background: #fff;
            }
            .djzr-role-list {
              &:after {
                display: block;
                content: '';
                border-top: 1px solid #ccc;
              }
              li {
                display: inline-block;
                width: 12%;
                margin: 1.5%;
                img {
                  width: 100%;
                  border-radius: 50%;
                }
                .name {
                  display: inline-block;
                  width: 100%;
                  height: 25px;
                  line-height: 25px;
                  font-size: 12px;
                  white-space: nowrap;
                  text-align: center;
                }
              }
            }
            .djzr-role-info {
              padding-left: 0.26667rem;
              padding-top: 0.26667rem;
              padding-bottom: 0.40000rem;
              color: #333;
              font-size: 0.37333rem;
              span {
                color: #ea413c;
              }
            }
          }
        }
      }
      .strateg-wrapper {
        float: left;
        width: 50%;
        height: 100%;
        font-size: 15px;
        overflow: scroll;
        .secont {
          background: #F2F5FB;
          .list-item-box {
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            .list-item {
              display: inline-block;
              width: 20%;
              height: 30px;
              line-height: 30px;
              text-align: center;
              border-radius: 16px;
              border: 1px solid #CBE3EF;
              margin: 1.5%;
              &.active {
                width: 20%;
                height: 30px;
                background: url(../../common/img/ystj-top-bgimg.png) no-repeat center top;
                background-size: 125% 115%;
              }
            }
          }
          .all-wrapper {
            width: 100%;
          }
        }
      }
    }
  }
</style>
