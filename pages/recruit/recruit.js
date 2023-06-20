const util = require('../../utils/util.js')
let array_ceshi = {'s':0,'a':0,'b':0,'c':0};
let zhanbi = {'s':0,'a':0,'b':0,'c':0};
/**
 * 参数说明
 * fontfamily 当前字体，默认为空
 * animating 是否处于抽卡动画中，默认false，当为true时，主操作按钮和底部提示文字隐藏
 * 
 * 设置界面四个tab对应序号：
 * 0、基本设置；
 * 3、V等级；
 * 2、忍者配置；
 * 1、功能入口
 * 
 */
let notice_textbody = `<h1 class="h1 red mb10">公告标题</h1>
<p>1、公告文字</p>
<p>2、公告文字</p>
<p></p>`;
let needurl_font = "https://chazandrune.github.io/naruto-recruitment_simulator";
let needurl = "https://upyun.mopanda.fun";//又拍云 标准访问类型
let urls = [
    //{ id: '1', url: needurl+'/images/charactors.png'+'?' + Math.random() }, //charactors.png
    { id: '1', url: needurl+'/images/charactors-gaozhao.png'+'?' + Math.random() }, //charactors.png
];
let url_charactors = urls[0].url;

// 忍者碎片奖池
let ninjaDB = {
    ninjalist_s: [
        {"ninjaid": "99999", "ninjaname": "漩涡鸣人[九喇嘛连结]", "suipianname": "九喇嘛鸣人碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-1056", "p_y": "0" }
    ],
    ninjalist_a: [
        {"ninjaid": "90326", "ninjaname": "艾[青年]", "suipianname": "青年艾碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-1056", "p_y": "-48", "new":"new" },
        {"ninjaid": "90034", "ninjaname": "我爱罗[疾风传]", "suipianname": "疾风传我爱罗碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-48", "p_y": "-192", "longname": "text_l" }
    ],
    ninjalist_b: [
        {"ninjaid": "90035", "ninjaname": "漩涡鸣人[疾风传]", "suipianname": "疾风传鸣人碎片", "ninjarank": "b", "suipiannum": "0", "suipianneed": "--", "p_x": "0", "p_y": "-96" },
        {"ninjaid": "90051", "ninjaname": "日向雏田[疾风传]", "suipianname": "疾风传雏田碎片", "ninjarank": "b", "suipiannum": "0", "suipianneed": "--", "p_x": "-192", "p_y": "-96"},
        {"ninjaid": "90037", "ninjaname": "春野樱[疾风传]", "suipianname": "疾风传樱碎片", "ninjarank": "b", "suipiannum": "0", "suipianneed": "--", "p_x": "-48", "p_y": "-96" },
        {"ninjaid": "90029", "ninjaname": "君麻吕", "suipianname": "君麻吕碎片", "ninjarank": "b", "suipiannum": "0", "suipianneed": "--", "p_x": "-336", "p_y": "-96" },
        {"ninjaid": "90113", "ninjaname": "山中井野[疾风传]", "suipianname": "疾风传井野碎片", "ninjarank": "b", "suipiannum": "0", "suipianneed": "--", "p_x": "-384", "p_y": "-96" },
        {"ninjaid": "90109", "ninjaname": "李洛克[疾风传]", "suipianname": "疾风传李碎片", "ninjarank": "b", "suipiannum": "0", "suipianneed": "--", "p_x": "-864", "p_y": "-96" }
    ],
    ninjalist_c: [
        {"ninjaid": "90131", "ninjaname": "日向花火", "suipianname": "花火碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-1008", "p_y": "-144" },
        {"ninjaid": "90069", "ninjaname": "次郎坊", "suipianname": "次郎坊碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-768", "p_y": "-144" },
        {"ninjaid": "90070", "ninjaname": "左近右近", "suipianname": "左近右近碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-864", "p_y": "-144" },
        {"ninjaid": "90138", "ninjaname": "漩涡鸣人[忍者学员]", "suipianname": "忍者学员鸣人碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-1056", "p_y": "-144", "longname": "text_l" },
        {"ninjaid": "90139", "ninjaname": "萨克镫", "suipianname": "萨克・镫碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-1104", "p_y": "-144" },
        {"ninjaid": "90068", "ninjaname": "多由也", "suipianname": "多由也碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-912", "p_y": "-144" },
        {"ninjaid": "90018", "ninjaname": "油女志乃", "suipianname": "志乃碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-480", "p_y": "-144" },
        {"ninjaid": "90141", "ninjaname": "金槌", "suipianname": "金・槌碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-1152", "p_y": "-144" },
        {"ninjaid": "90001", "ninjaname": "漩涡鸣人", "suipianname": "鸣人碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-0", "p_y": "-144" },
        {"ninjaid": "90002", "ninjaname": "春野樱", "suipianname": "樱碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-48", "p_y": "-144" },
        {"ninjaid": "90105", "ninjaname": "海野伊鲁卡", "suipianname": "伊鲁卡碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-720", "p_y": "-144" },
        {"ninjaid": "90071", "ninjaname": "静音", "suipianname": "静音碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-672", "p_y": "-144" },
        {"ninjaid": "90003", "ninjaname": "宇智波佐助", "suipianname": "佐助碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-96", "p_y": "-144" },
        {"ninjaid": "90017", "ninjaname": "天天", "suipianname": "天天碎片", "ninjarank": "c", "suipiannum": "0", "suipianneed": "--", "p_x": "-336", "p_y": "-144" },
    ]
  };

  // 忍者配置 可选忍者，集合历来所有高招S和高招A
let ninjaSelectable = {
    ninjalist_s: [
        {"ninjaid": "90245", "ninjaname": "迈特凯[死门]", "suipianname": "死门凯碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-1008", "p_y": "0" },
        {"ninjaid": "90114", "ninjaname": "宇智波带土[忍界大战]", "suipianname": "忍战带土碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-960", "p_y": "0" },
        {"ninjaid": "90102", "ninjaname": "千手柱间[秽土转生]", "suipianname": "秽土柱间碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-912", "p_y": "0" },
        {"ninjaid": "90084", "ninjaname": "宇智波鼬[秽土转生]", "suipianname": "秽土鼬碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-864", "p_y": "0" },
        {"ninjaid": "90270", "ninjaname": "药师兜[仙人模式]", "suipianname": "仙人兜碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-816", "p_y": "0" },
        {"ninjaid": "90106", "ninjaname": "宇智波斑[秽土转生]", "suipianname": "秽土斑碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-768", "p_y": "0" },
        {"ninjaid": "90081", "ninjaname": "宇智波斑[白面具]", "suipianname": "白面具斑碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-720", "p_y": "0" },
        {"ninjaid": "90183", "ninjaname": "千手扉间[秽土转生]", "suipianname": "秽土扉间碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-672", "p_y": "0" },
        {"ninjaid": "90083", "ninjaname": "纲手[百豪]", "suipianname": "百豪纲手碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-624", "p_y": "0" },
        {"ninjaid": "90101", "ninjaname": "波风水门[秽土转生]", "suipianname": "秽土波风水门碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-576", "p_y": "0", "longname":"text_l" },
        {"ninjaid": "90272", "ninjaname": "猿飞日斩[秽土转生]", "suipianname": "秽土猿飞日斩碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-528", "p_y": "0", "longname":"text_l" },
        {"ninjaid": "90098", "ninjaname": "长门[秽土转生]", "suipianname": "长门碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-480", "p_y": "0" },
        {"ninjaid": "90100", "ninjaname": "宇智波斑", "suipianname": "宇智波斑碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-432", "p_y": "0" },
        {"ninjaid": "90024", "ninjaname": "千手柱间", "suipianname": "千手柱间碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-384", "p_y": "0" },
        {"ninjaid": "90060", "ninjaname": "艾[四代目雷影]", "suipianname": "四代目雷影碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-336", "p_y": "0" },
        {"ninjaid": "90025", "ninjaname": "千手扉间", "suipianname": "千手扉间碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-288", "p_y": "0" },
        {"ninjaid": "90174", "ninjaname": "神秘面具男", "suipianname": "神秘面具男碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-240", "p_y": "0" },
        {"ninjaid": "90054", "ninjaname": "宇智波鼬[须佐能乎]", "suipianname": "须佐能乎鼬碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-192", "p_y": "0" },
        {"ninjaid": "90055", "ninjaname": "佩恩[天道]", "suipianname": "天道佩恩碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-144", "p_y": "0" },
        {"ninjaid": "90011", "ninjaname": "波风水门", "suipianname": "波风水门碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-96", "p_y": "0" },
        {"ninjaid": "90021", "ninjaname": "大蛇丸", "suipianname": "碎片名称", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "-48", "p_y": "0" },
        {"ninjaid": "90010", "ninjaname": "自来也", "suipianname": "自来也碎片", "ninjarank": "s", "suipiannum": "0", "suipianneed": "100", "p_x": "0", "p_y": "0" },
    ],
    ninjalist_a: [
        {"ninjaid": "90326", "ninjaname": "艾[青年]", "suipianname": "青年艾碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-1056", "p_y": "-48", "new":"new" },
        {"ninjaid": "99091", "ninjaname": "达鲁伊[博人传]", "suipianname": "达鲁伊博人传碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-1008", "p_y": "-48", "new":"new", "longname":"text_l" },
        {"ninjaid": "90324", "ninjaname": "波风水门[青年]", "suipianname": "青年水门碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-960", "p_y": "-48", "new":"new" },
        {"ninjaid": "90181", "ninjaname": "奇拉比[忍界大战]", "suipianname": "忍战奇拉比碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-912", "p_y": "-48", "new":"new" },
        {"ninjaid": "99177", "ninjaname": "黑土[博人传]", "suipianname": "黑土博人传碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-864", "p_y": "-48", "new":"new" },
        {"ninjaid": "90097", "ninjaname": "宇智波佐助[须佐能乎]", "suipianname": "须佐佐助碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-816", "p_y": "-48", "new":"new" },
        {"ninjaid": "90248", "ninjaname": "迪达拉[秽土转生]", "suipianname": "秽土迪达拉碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-768", "p_y": "-48", "new":"new" },
        {"ninjaid": "99009", "ninjaname": "猿飞木叶丸[博人传]", "suipianname": "木叶丸碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-720", "p_y": "-48", "new":"new" },
        {"ninjaid": "90099", "ninjaname": "漩涡鸣人[九尾查克拉]", "suipianname": "九尾鸣人碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-672", "p_y": "-48", "new":"new" },
        {"ninjaid": "90082", "ninjaname": "药师兜[半蛇斗篷]", "suipianname": "半蛇斗篷兜碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-624", "p_y": "-48", "new":"new" },
        {"ninjaid": "90240", "ninjaname": "我爱罗[忍界大战]", "suipianname": "忍战我爱罗碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-576", "p_y": "-48", "new":"new" },
        {"ninjaid": "90191", "ninjaname": "大蛇丸[晓]", "suipianname": "大蛇丸晓碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-528", "p_y": "-48", "new":"new" },
        {"ninjaid": "90230", "ninjaname": "春野樱[百豪]", "suipianname": "百豪春野樱碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-480", "p_y": "-48", "new":"new" },
        {"ninjaid": "90061", "ninjaname": "照美冥[五代目水影]", "suipianname": "照美冥碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-432", "p_y": "-48", "new":"new" },
        {"ninjaid": "90059", "ninjaname": "宇智波佐助[万花筒写轮眼]", "suipianname": "鹰小队佐助碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-384", "p_y": "-48", "new":"new" },
        {"ninjaid": "90056", "ninjaname": "奇拉比", "suipianname": "奇拉比碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-336", "p_y": "-48", "new":"new" },
        {"ninjaid": "90058", "ninjaname": "漩涡鸣人[仙人模式]", "suipianname": "仙人鸣人碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-288", "p_y": "-48", "new":"new" },
        {"ninjaid": "90095", "ninjaname": "旗木卡卡西[万花筒写轮眼]", "suipianname": "神威卡卡西碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-240", "p_y": "-48", "new":"new" },
        {"ninjaid": "90094", "ninjaname": "宇智波止水", "suipianname": "止水碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-192", "p_y": "-48", "new":"new" },
        {"ninjaid": "90057", "ninjaname": "小南", "suipianname": "小南碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-144", "p_y": "-48", "new":"new" },
        {"ninjaid": "90038", "ninjaname": "迪达拉", "suipianname": "迪达拉碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-96", "p_y": "-48", "new":"new" },
        {"ninjaid": "90022", "ninjaname": "宇智波鼬", "suipianname": "宇智波鼬碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-48", "p_y": "-48", "new":"new" },
        {"ninjaid": "90013", "ninjaname": "迈特凯", "suipianname": "凯碎片", "ninjarank": "a", "suipiannum": "0", "suipianneed": "40", "p_x": "-0", "p_y": "-48", "new":"new" },
    ]
  };
let userDevice;
let allscreen;
let statusbarheight;
let fixratio;
let fontfamily;
let animating;
let loadcomplete_img;
let loadcomplete_img_count;
let loadcomplete;
let loadfailed;
let loadtext;
let tongjilist_wrap_hidden;
let cliktype;
let raNum;
let bisong_num;
let bisong_type;
let gailv_s;
let gailv_a;
let gailv_b;
let gailv_c;
let num_count;
let num_s;
let num_a;
let num_a_new;
let num_b;
let num_c;
let items = [];
let item_1 = {};
let ninjalist_s = [];
let ninjalist_a = [];
let ninjalist_b = [];
let ninjalist_c = [];
let audioindex;
const innerAudioContext = wx.createInnerAudioContext({
    useWebAudioImplement: true
});
const innerAudioContext1 = wx.createInnerAudioContext({
    useWebAudioImplement: true
});
innerAudioContext1.src = '/audio/smoke_2.mp3';
const innerAudioContext2 = wx.createInnerAudioContext({
    useWebAudioImplement: true
});
innerAudioContext2.src = '/audio/smoke_10.mp3'
const innerAudioContext3 = wx.createInnerAudioContext({
    useWebAudioImplement: true
});
innerAudioContext3.src = '/audio/menu_slct.mp3'
const innerAudioContext4 = wx.createInnerAudioContext({
    useWebAudioImplement: true
});
innerAudioContext4.src = '/audio/menu_cancel.mp3'
const innerAudioContext5 = wx.createInnerAudioContext({
    useWebAudioImplement: true
});
innerAudioContext5.src = '/audio/menu_err.mp3'
wx.setInnerAudioOption({
    mixWithOther:true,
    //obeyMuteSwitch: false
}).catch(err => console.log());
let gongxi_list = [];
let animation_gongxi;
let isYincangjizhi = false;
let count_invisible_s = 0;
let count_invisible_a = 0;

let pop_info_hidden;
let pop_notice_hidden;
let pop_setting_hidden;
let pop_gift_s_hidden;
let pop_gift_a_hidden;

let current_tab;
let v_now;
let v_current;

let isGaozhaofanli_s;
let isGaozhaofanli_a;
let gift_list_s = [
    {id:'0',rank:'s',status:'0',limit:'3',value:'0'},
    {id:'1',rank:'s',status:'0',limit:'6',value:'2'},
    {id:'2',rank:'s',status:'0',limit:'10',value:'3',extra:'5'},
    {id:'3',rank:'s',status:'0',limit:'30',value:'5'},
    {id:'4',rank:'s',status:'0',limit:'50',value:'5',extra:'10'},
    {id:'5',rank:'s',status:'0',limit:'70',value:'5'},
    {id:'6',rank:'s',status:'0',limit:'100',value:'5',extra:'15'}
];
let gift_list_a = [
    {id:'0',rank:'a',status:'0',limit:'3',value:'0'},
    {id:'1',rank:'a',status:'0',limit:'6',value:'1'},
    {id:'2',rank:'a',status:'0',limit:'10',value:'1',extra:'5'},
    {id:'3',rank:'a',status:'0',limit:'20',value:'2'},
    {id:'4',rank:'a',status:'0',limit:'30',value:'2',extra:'10'},
    {id:'5',rank:'a',status:'0',limit:'40',value:'2'},
    {id:'6',rank:'a',status:'0',limit:'50',value:'2',extra:'15'}  
];
let rewardedVideoAd = null;

/**
 * 随机数生成器
 */
Math.seed = Math.random(); 
Math.seededRandom = function(max, min) { 
    max = max || 1;
    min = min || 0; 
    Math.seed = (Math.seed * 9301 + 49297) % 233280; 
    var rnd = Math.seed / 233280.0;
    return min + rnd * (max - min); 
};

//随机一个基数
//let seed = new Date();
let today = new Date();
let seed = today.getTime();
// 定义方法
var myRandom = function(max, min) {
    //默认返回 0~1
    max = max || 1;
    min = min || 0;
    seed = (seed * 9301 + 49297) % 233280;
    let rnd = seed / 233280;
    return min + rnd * (max - min);
};




Page({

    /**
     * 页面的初始数据
     */
    data: {
    version:'1.4.1.20230427',
    allscreen:'',
    statusbarheight:0,
    fixratio:1,
    audioindex:0,
    se_volume:1,
    urls:JSON.parse(JSON.stringify(urls)),
    url_charactors:url_charactors,
    num_progress: 0,
    num_progress_written: 0,
    num_progress_total: 0,
    fontfamily:'',
    setfont_btn_txt:"加载字体",
    btn_setfont_disabled:false,
    animating: false,
    loadtext:'正在加载忍者头像',
    loadcomplete_img:'',
    loadcomplete_img_count:0,
    loadcomplete: false,
    loadfailed:false,
    tongjilist_wrap_hidden: false,
    cliktype: '',
    list_scrollTop: 999,
    isOpen_100clik: true,
    bisong_num: '',
    bisong_type: '',
    gailv_s: 7.5,
    gailv_a: 17.5,
    gailv_b: 35,
    gailv_c: 40,
    num_count: 0,
    raNum:0,
    num_s: 0,
    num_a: 0,
    num_a_new: 0,
    num_b: 0,
    num_c: 0,
    num_s_fanli: 0,
    num_a_fanli: 0,
    items: [],
    delaytime:320,
    speedup_btn_txt:"观看广告",
    btn_speedup_disabled:false,
    // 忍者数据池 通过writeNinjaData()方法写入
    ninjalist_s: [],
    ninjalist_a: [],
    ninjalist_b: [],
    ninjalist_c: [],

    gongxi_list: [],
    animation_gongxi:{},
    gongxi_animation_ing: false,
    toast_animation_ing: false,
    toast_txt:'提示文字',

    isYincangjizhi: false,
    pop_info_hidden:true,
    pop_notice_hidden:true,
    text_notice:notice_textbody,
    pop_setting_hidden:true,
    pop_gift_s_hidden:true,
    pop_gift_a_hidden:true,
    pop_small_hidden:true,
    current_tab:3,
    v_now:0,
    v_now_shi:0,
    v_now_ge:0,
    v_current:0,
    v_current_shi:0,
    v_current_ge:0,
    isGaozhaofanli_a:true,
    isGaozhaofanli_s:false,
    // 首付宝箱状态值解释：不可领取=0；可领取=1；已领取=2；
    gift_list_s:JSON.parse(JSON.stringify(gift_list_s)),
    gift_list_a:JSON.parse(JSON.stringify(gift_list_a)),

    ninjaSelectable:JSON.parse(JSON.stringify(ninjaSelectable)),
    current_tab_1:0,
    ninjalist_s_selectnow: JSON.parse(JSON.stringify(ninjaDB.ninjalist_s)),
    ninjalist_a_selectnow: JSON.parse(JSON.stringify(ninjaDB.ninjalist_a)),

    shareTitle:'高级招募模拟器',
    shareImageUrl:'../../images/shareImage.jpg'

    },

    /**
     * 设置字体
     */
    setfont() {
    let that = this;
    //that.setData({ loadcomplete: false, loadtext: '正在加载字体' })
    that.setData({ setfont_btn_txt:"下载中..."})
    wx.loadFontFace({
        family: 'FZYHJW',
        source: 'url("'+needurl_font+'/css/FZYHJW.ttf")',
        success: function (res) {
        //that.setData({ loadtext: '字体加载成功', fontfamily: 'FZYHJW' });
        that.setData({ setfont_btn_txt: '已加载', fontfamily: 'FZYHJW', btn_setfont_disabled:true });
        that.naruto_toast("已成功应用字体");
    },
        fail: function (res) {
        //that.setData({ loadtext: '字体加载失败' });
        that.naruto_toast("下载字体失败");
        that.setData({ setfont_btn_txt: '重新加载' });
        //console.log(res.status + "字体加载失败")
        },
        complete: function (res) {
        // setTimeout(function () {
        //   that.setData({ loadcomplete: true })
        // }, 1000);
        //console.log(res.status + "加载字体完成了")
        }
    })
    },
    setfont_cancel() {
    let that = this;
    that.setData({
        fontfamily: ''
    })
    },

    /**
     * 图像加载
     */
    imgloading(ev){
    let that = this;
    let src = ev.currentTarget.dataset.src;
    let loadcomplete_img_count = that.data.loadcomplete_img_count;
    let urls = that.data.urls;
    loadcomplete_img_count = loadcomplete_img_count + 1;
    that.setData({ loadcomplete_img_count});
    //console.log(ev.detail,loadcomplete_img_count);
    if (loadcomplete_img_count >= urls.length){
        that.setData({ loadtext: '图像加载完成', loadcomplete_img:'ok', loadfailed:false });
        setTimeout(function(){ 
            that.setData({ loadcomplete: true }) 
        }, 1000)
    //   setTimeout(function(){
    //     that.setfont();
    //   }, 1000)
    }else{
        that.setData({ loadtext: '加载进度（'+loadcomplete_img_count+'/'+urls.length+'）' });
    }
    },
    imgloadingerror(ev){
    this.setData({ loadtext: '图像加载失败，请检查网络',loadfailed:true });
    console.log(this.data.loadtext)
    },

    /**
     * 重新加载页面
     */
    onrefresh(){
    let that = this;
    // 弹出微信toast
    // wx.showToast({
    //   title: '开始重新渲染',
    //   icon: 'success',
    //   duration: 2000
    // });
    // 参考页面重置写法
    // if (getCurrentPages().length != 0) {
    //   //刷新当前页面的数据
    //   getCurrentPages()[getCurrentPages().length - 1].onLoad()
    // }
    that.setData({ loadtext: '正在重新加载', loadcomplete_img_count:0, loadcomplete: false,loadfailed:false });
    var urls_new = this.data.urls.map(function(item){
        var ii = item.url.lastIndexOf("?");
        item.url = item.url.substring(ii+1,0) + Math.random();
        return item
    })
    this.setData({
        urls:this.data.urls
    })
    console.info(this.data.urls);
    },

    /**
     * 音效
     */
    playaudio(p){
        innerAudioContext.stop();
        switch (p){
        case 'smoke':
            //innerAudioContext1.stop();
            innerAudioContext.src = "/audio/smoke_2.mp3";
            //innerAudioContext1.play();
        break;
        case 'smoke10':
            // innerAudioContext2.stop();
            innerAudioContext.src = "/audio/smoke_10.mp3";
            // innerAudioContext2.play();
        break;
        case 'smoke10_2':
            // innerAudioContext2.stop();
            innerAudioContext.src = "/audio/smoke_10_2.mp3";
            // innerAudioContext2.play();
        break;
        case 'select':
            // innerAudioContext3.stop();
            innerAudioContext.src = "/audio/menu_slct.mp3";
            // innerAudioContext3.play();
        break;
        case 'cancel':
            // innerAudioContext4.stop();
            innerAudioContext.src = "/audio/menu_cancel.mp3";
            // innerAudioContext4.play();
        break;
        case 'error':
            // innerAudioContext5.stop();
            innerAudioContext.src = "/audio/menu_err.mp3";
            // innerAudioContext5.play();
        break;
    }
    innerAudioContext.play();
    },
    change_volume(e){
        let that = this;
        let _val = e.detail.value;
        that.setData({
            se_volume:_val
        })
        innerAudioContext.volume = _val;
        innerAudioContext1.volume = _val;
        innerAudioContext2.volume = _val;
        innerAudioContext3.volume = _val;
        innerAudioContext4.volume = _val;
        innerAudioContext5.volume = _val;
        that.playaudio('select')
    },
    mute_volume(){
        let that = this;
        let _val;
        if( that.data.se_volume == 0){
            _val = 1;
            that.setData({ se_volume : _val })
        }else{
            _val = 0;
            that.setData({ se_volume : _val })
        }
        innerAudioContext.volume = _val;
        innerAudioContext1.volume = _val;
        innerAudioContext2.volume = _val;
        innerAudioContext3.volume = _val;
        innerAudioContext4.volume = _val;
        innerAudioContext5.volume = _val;
        that.playaudio('select');
    },

    /**
     * 统计面板展开收起
     */
    tongjilist_switch(){
    let that = this;
    that.playaudio("select");
    let tongjilist_wrap_hidden = this.data.tongjilist_wrap_hidden;
    if (tongjilist_wrap_hidden == false){
        that.setData({
        tongjilist_wrap_hidden:true
        })
    }else{
        that.setData({
        tongjilist_wrap_hidden: false
        })
    }
    },

        /**
     * main
     */
    A(){
        let that = this;
        let raNum = this.data.raNum;
        let gailv_s = this.data.gailv_s;
        let gailv_a = this.data.gailv_a;
        let gailv_b = this.data.gailv_b;
        let gailv_c = this.data.gailv_c;
        let gongxi_list = this.data.gongxi_list;
        console.log("随机数是%c "+raNum,'color:#0f0');

        if (0 <= raNum && raNum < gailv_s) {
            //console.log("抽到S碎片");
            //S忍 出现5片(n=1)和1片(n=2)的概率，先判断是否抽到第10次，若是第10次则必出1片
            var num_this;
            if (parseInt(that.data.num_count % 10) == 0){
                var n = 2;
            }else{
                //判断为不是第十次必出
                //判断隐形机制是否达到50
                //console.log('这个时候S隐形机制多少了'+(count_invisible_s));
                if( that.data.isYincangjizhi == true && count_invisible_s >= 50 ){
                    var n = 1;
                }else{
                    //出现5片(n=1)或1片(n=2)的几率各50%
                    //var n = parseInt(myRandom(1,0)*(2-1+1)+1, 10);
                    //试试减少5片几率
                    var n = parseInt(myRandom(1,0)*(4-1+1)+1, 10);
                }
            }
            if (n == 1) {
                num_this = 5;
                num_s = num_s + 5;
                //抽到5片s，重置隐性机制计数
                count_invisible_s = -1;
            } else {
                num_this = 1;
                num_s++;
            }
            // m为定值,指定s忍者,不用随机数
            var m = 1;
            // 把此次数量记录到对应忍者数据里
            var m_1 = m-1;
            var suipiannum = parseInt(this.data.ninjalist_s[m_1].suipiannum) + num_this;
            var suipiannum_xianshi = "ninjalist_s["+ m_1 +"].suipiannum";
            gongxi_list.push({name:this.data.ninjalist_s[m_1].suipianname,num:num_this});
            // 数值写入
            this.setData({
                num_s: this.data.num_s + num_this,
                [suipiannum_xianshi]: suipiannum,
                gongxi_list: gongxi_list
            })
            item_1 = JSON.parse(JSON.stringify({
                rank_item: "s",
                img_index: m_1,
                num_suipian: num_this,
                detail: this.data.ninjalist_s[m_1]
            }));
        } else if (gailv_s <= raNum && raNum < gailv_s+gailv_a ) {
            //console.log("抽到A碎片");
            var num_a_new_num_this = 0;
            //console.log('这个时候A隐形机制多少了'+count_invisible_a);
            if( this.data.isYincangjizhi == true && count_invisible_a >= 40 ){
                var m = 1;
                var n = 1;
            }else{
                //随机出现某个忍者 1-2，1是新A，2是副A
                var ran_m = Math.random();
                var m = parseInt(ran_m*(2-1+1)+1, 10);
                //console.log(ran_m)
                //A忍 出现4片(n=1)和1片(n=2)的概率
                var ran_n = Math.random();
                var n = parseInt(ran_n*(4-1+1)+1, 10);
                //console.log(ran_n)
            }
            if (n == 1) {
                num_this = 4;
                num_a = num_a + 4;
            } else {
                num_this = 1;
                num_a++;
            }
            // 把此次数量记录到对应忍者数据里
            var m_1 = m-1;
            var suipiannum = parseInt(this.data.ninjalist_a[m_1].suipiannum) + num_this;
            var suipiannum_xianshi = "ninjalist_a[" + m_1 + "].suipiannum";
            if (m == 1){ //判断是新A忍，追加进恭喜列表，并计入新A计数器
                gongxi_list.push({name:this.data.ninjalist_a[m_1].suipianname,num:num_this});
                num_a_new_num_this = num_this;
                if(n == 1){ //判断抽到4片，重置隐性机制计数
                    count_invisible_a = -1;
                }
            };
            // 数值写入
            this.setData({
                num_a: this.data.num_a + num_this,
                num_a_new: this.data.num_a_new + num_a_new_num_this,
                [suipiannum_xianshi]: suipiannum,
                gongxi_list: gongxi_list
            })
            item_1 = JSON.parse(JSON.stringify({
                rank_item: "a",
                img_index: m_1,
                num_suipian: num_this,
                detail: this.data.ninjalist_a[m_1]
            }));
            //that.gongxi();
            //console.log(this.data.item_1)
        } else if (gailv_s+gailv_a <= raNum  && raNum < gailv_s+gailv_a+gailv_b) {
            //console.log("抽到B碎片");
            //B忍 出现4片、2片和1片的概率
            var n = parseInt(myRandom(1,0) * (3 - 1 + 1) + 1, 10);
            if (n == 1) {
                num_this = 4;
                num_b = num_b + 4;
            } else if(n == 2){
                num_this = 2;
                num_b = num_b + 2;
            }else{
                num_this = 1;
                num_b++;
            }
            //随机出现某个忍者 1-6 共6个
            var m = parseInt(myRandom(1,0) * (6 - 1 + 1) + 1, 10);
            // 把此次数量记录到对应忍者数据里
            var m_1 = m-1;
            var suipiannum = parseInt(this.data.ninjalist_b[m_1].suipiannum) + num_this;
            var suipiannum_xianshi = "ninjalist_b[" + m_1 + "].suipiannum";
            // 数值写入
            this.setData({
                num_b: this.data.num_b + num_this,
                [suipiannum_xianshi]: suipiannum,
            })
            item_1 = JSON.parse(JSON.stringify({
                rank_item: "b",
                img_index: m_1,
                num_suipian: num_this,
                detail: this.data.ninjalist_b[m_1]
            }));
            //console.log(this.data.item_1)
        } else{
            //console.log("抽到C碎片");
            //C忍 出现5片、2片和1片的概率
            var n = parseInt(myRandom(1,0) * (3 - 1 + 1) + 1, 10);
            if (n == 1) {
                num_this = 5;
                num_c = num_c + 5;
            } else if( n==2){
                num_this = 2;
                num_c = num_c +2;
            }else{
                num_this = 1;
                num_c++;
            }
            //随机出现某个忍者 1-14 共14个
            var m = parseInt(myRandom(1,0) * (14 - 1 + 1) + 1, 10);
            // 把此次数量记录到对应忍者数据里
            var m_1 = m-1;
            var suipiannum = parseInt(this.data.ninjalist_c[m_1].suipiannum) + num_this;
            var suipiannum_xianshi = "ninjalist_c[" + m_1 + "].suipiannum";
            // 数值写入
            this.setData({
                num_c: this.data.num_c + num_this,
                [suipiannum_xianshi]: suipiannum,
            })
            item_1 = JSON.parse(JSON.stringify({
                rank_item: "c",
                img_index: m_1,
                num_suipian: num_this,
                detail: this.data.ninjalist_c[m_1]
            }));
            //console.log(this.data.item_1)
        }

        this.writebisong();
        //console.log(this.data.gongxi_list)
        //隐形机制体现，如果没抽到1组s、1组a，计数增加1
        count_invisible_a++;
        count_invisible_s++;
        //console.log("隐形机制：a计数--%c"+count_invisible_a+"%c；s计数--%c"+count_invisible_s,'color:#9581F7','color:#fff','color:#9581F7');
    },


    /**
     * 单抽操作
     */
    clik:util.throttle(function() {
    let that = this;
    let items = JSON.parse(JSON.stringify(that.data.items));
    //that.playaudio("select");
    // 清空数组
    items.splice(0, items.length);
    that.setData({
        cliktype: 'danchou',
        delaytime:320,
        items: JSON.parse(JSON.stringify(items)),
        animating: true
    });
    for (var i = 0; i < 1; i++) {
        if (parseInt(that.data.num_count % 10) == 9 || (that.data.isYincangjizhi && count_invisible_s >= 50) ) {
            //判断为第十次，或隐藏机制开启满50次没出一组S，必出S
            that.setData({ raNum:1 })
        } else if(that.data.isYincangjizhi && count_invisible_a >= 40) {
            //判断隐形机制A计数是否到40，是 则必出A（新A一组）
            that.setData({ raNum:8 })
        }else{
            var ran = myRandom(100,0)
            that.setData({ raNum: ran })
        }
        let _num_count = that.data.num_count + 1;
        that.setData({ num_count: _num_count });
        that.light_gift_a();
        that.light_gift_s();
        that.A();
        items.push(item_1);
    }
    that.setData({
        items: JSON.parse(JSON.stringify(items))
    });
    that.playaudio("smoke");
    //判断如果恭喜动画停止了，即恭喜列表播放完了，则执行gongxi方法。
    if(!that.data.gongxi_animation_ing){that.gongxi()}; 
    //等待动画时间
    setTimeout(function () {
        that.setData({
        animating: false
        })
    }, 800)
    console.log(items);
    },800),

    /**
     * 十抽操作
     */
    clik10:util.throttle(function() {
    let that = this;
    let items = JSON.parse(JSON.stringify(that.data.items));
    //that.playaudio("select");
    // 清空数组
    items.splice(0, items.length);
    that.setData({
        cliktype: 'shilian',
        delaytime:320,
        items: JSON.parse(JSON.stringify(items)),
        animating: true
    });
    let aniTime = parseInt(that.data.delaytime*10+700);
    for (var i = 0; i < 10; i++) {
        if (parseInt(that.data.num_count % 10) == 9 || (that.data.isYincangjizhi && count_invisible_s >= 50) ) {
            //判断为第十次，或隐藏机制开启满50次没出一组S，必出S
            that.setData({ raNum:1 })
        } else if(that.data.isYincangjizhi && count_invisible_a >= 40) {
            //判断隐形机制A计数是否到40，是 则必出A（新A一组）
            that.setData({ raNum:8 })
        }else{
            var ran = myRandom(100,0)
            that.setData({ raNum: ran })
        }
        let _num_count = that.data.num_count + 1;
        that.setData({ num_count: _num_count });
        that.light_gift_a();
        that.light_gift_s();
        that.A();
        items.push(item_1);
    };
    that.setData({
        items: items
    });
    //需要对items再次更新一次数据，让碎片数显示的是最新的值
    var ninjalist = new Array();
    ninjalist.push(JSON.parse(JSON.stringify(that.data.ninjalist_s)));
    ninjalist.push(JSON.parse(JSON.stringify(that.data.ninjalist_a)));
    ninjalist.push(JSON.parse(JSON.stringify(that.data.ninjalist_b)));
    ninjalist.push(JSON.parse(JSON.stringify(that.data.ninjalist_c)));
    //console.info(ninjalist);
    for(var index = 0; index < items.length; index++){
        //console.log(items[index].detail.suipiannum,items[index].rank_item,items[index].img_index)
        switch ( items[index].rank_item ){
        case 's':
            var rankindex = 0;
            break;
        case 'a':
            var rankindex = 1;
            break;
        case 'b':
            var rankindex = 2;
            break;
        case 'c':
            var rankindex = 3;
            break;
        }
        var ninjaindex = that.data.items[index].img_index;
        var tomodify = ninjalist[rankindex][ninjaindex]['suipiannum'];
        //console.log(tomodify);
        var willmodify = "items["+index+"].detail.suipiannum"
        that.setData({
            [willmodify]:tomodify
        })
    }
    if(aniTime<3900){
        that.playaudio("smoke10_2")
    }else{
        that.playaudio("smoke10")
    };
    //重复10次
	// for(let j = 0; j<10; j++){
    //     setTimeout(function(){
    //         that.playaudio('smoke');
    //     },j*320)
    // }
    //判断如果恭喜动画停止了，即恭喜列表播放完了，则执行gongxi方法。
    if(!that.data.gongxi_animation_ing){that.gongxi()}; 
    //等待动画时间
    setTimeout(function () {
        that.setData({
        animating: false
        })
    }, aniTime)
    console.log(items);
    },1000),

    /**
     * 100连抽开关
     */
    open_100clik_switch:util.throttle(function(e){
        const that = this;
        var value = e.detail.value;
        //console.log("当前隐藏机制状态："+value); 
        var obj = {}
        obj[`isOpen_100clik`] = value
        this.setData(obj);
        that.playaudio('cancel')
    },100),


    /**
     * 100连抽操作
     */
    clik100:util.throttle(function() {
        let that = this;
        let items = JSON.parse(JSON.stringify(that.data.items));
        //that.playaudio("select");
        // 清空数组
        items.splice(0, items.length);
        that.setData({
            cliktype: 'bailian',
            delaytime:10,
            items: JSON.parse(JSON.stringify(items)),
            animating: true
        });
        let aniTime = parseInt(that.data.delaytime*100+700);
        for (var i = 0; i < 100; i++) {
            if (parseInt(that.data.num_count % 10) == 9 || (that.data.isYincangjizhi && count_invisible_s >= 50) ) {
                //判断为第十次，或隐藏机制开启满50次没出一组S，必出S
                that.setData({ raNum:1 })
            } else if(that.data.isYincangjizhi && count_invisible_a >= 40) {
                //判断隐形机制A计数是否到40，是 则必出A（新A一组）
                that.setData({ raNum:8 })
            }else{
                var ran = myRandom(100,0)
                that.setData({ raNum: ran })
            }
            let _num_count = that.data.num_count + 1;
            that.setData({ num_count: _num_count });
            that.light_gift_a();
            that.light_gift_s();
            that.A();
            items.push(item_1);
            that.setData({
                items: items,
                list_scrollTop: that.data.list_scrollTop + 30
            });
            console.log(that.data.list_scrollTop)
        };
        //需要对items再次更新一次数据，让碎片数显示的是最新的值
        var ninjalist = new Array();
        ninjalist.push(JSON.parse(JSON.stringify(that.data.ninjalist_s)));
        ninjalist.push(JSON.parse(JSON.stringify(that.data.ninjalist_a)));
        ninjalist.push(JSON.parse(JSON.stringify(that.data.ninjalist_b)));
        ninjalist.push(JSON.parse(JSON.stringify(that.data.ninjalist_c)));
        //console.info(ninjalist);
        for(var index = 0; index < items.length; index++){
            //console.log(items[index].detail.suipiannum,items[index].rank_item,items[index].img_index)
            switch ( items[index].rank_item ){
            case 's':
                var rankindex = 0;
                break;
            case 'a':
                var rankindex = 1;
                break;
            case 'b':
                var rankindex = 2;
                break;
            case 'c':
                var rankindex = 3;
                break;
            }
            var ninjaindex = that.data.items[index].img_index;
            var tomodify = ninjalist[rankindex][ninjaindex]['suipiannum'];
            //console.log(tomodify);
            var willmodify = "items["+index+"].detail.suipiannum"
            that.setData({
                [willmodify]:tomodify
            })
        }
        if(aniTime<3900){
            //that.playaudio("smoke10_2")
        }else{
            that.playaudio("smoke10")
        };
        //重复10次
        // for(let j = 0; j<10; j++){
        //     setTimeout(function(){
        //         that.playaudio('smoke');
        //     },j*320)
        // }
        //判断如果恭喜动画停止了，即恭喜列表播放完了，则执行gongxi方法。
        if(!that.data.gongxi_animation_ing){that.gongxi()}; 
        //等待动画时间
        setTimeout(function () {
            that.setData({
                animating: false
            })
        }, aniTime)
        console.log(items);
        },1000),
    
    /**
     * 重置操作
     */
    reset:util.throttle(function() {
    let that = this;
    that.writeNinjaData();
    that.setData({
        cliktype: '',
        bisong_type: '',
        num_count: 0,
        num_s: 0,
        num_a: 0,
        num_a_new: 0,
        num_b: 0,
        num_c: 0,
        num_s_fanli: 0,
        num_a_fanli: 0,
        items: [],
        gift_list_s:JSON.parse(JSON.stringify(gift_list_s)),
        gift_list_a:JSON.parse(JSON.stringify(gift_list_a))
    });
    count_invisible_s = 0;
    count_invisible_a = 0;
    that.playaudio("cancel");
    },1000),

    /**
     * 忍者数据池写入，今后需要完善，此功能需要支持自定义
     */
    writeNinjaData(){
    let that = this;
    that.setData(JSON.parse(JSON.stringify(ninjaDB)));
    },

    /**
     * 必送文字输出
     */
    writebisong() {
    let that = this;
    let num_bisong = 9 - parseInt(this.data.num_count % 10);
    //console.log(this.data.num_count)
    if (parseInt(this.data.num_count % 10) == 9) {
        that.setData({
        bisong_num: num_bisong,
        bisong_type: 'now'
        })
    } else {
        that.setData({
        bisong_num: num_bisong,
        bisong_type: 'num'
        })
    }
    },

    /**
     * 恭喜文字输出方法
     */
    gongxi_in(){
    // 恭喜提示动画
    var animation_gongxi = wx.createAnimation({
        delay: 0,
        duration:1000,
        timingFunction:'ease'
    })
    animation_gongxi.opacity(1).step();
    this.setData({
        animation_gongxi:animation_gongxi.export()
    });
    },
    gongxi_out(){
    // 恭喜提示动画
    var animation_gongxi = wx.createAnimation({
        delay: 0,
        duration:1000,
        timingFunction:'ease'
    })
    animation_gongxi.opacity(0).step();
    this.setData({
        animation_gongxi:animation_gongxi.export()
    });
    },
    gongxi() {
    let that = this;
    let gongxi_list = this.data.gongxi_list;
    if(gongxi_list.length > 0){
        that.setData({
            gongxi_animation_ing : true
        });
        // 恭喜提示动画
        that.gongxi_in();
        setTimeout(function () {
            that.gongxi_out();
        }, 2000)
        console.log("剩余恭喜数量"+this.data.gongxi_list.length);
        setTimeout(function () {
            gongxi_list.splice(0,1);
            that.setData({
                gongxi_list: gongxi_list
            })
            that.gongxi();
        }, 4000)
    }else{
        that.setData({
            gongxi_animation_ing : false
        });
        console.log("没得恭喜了")
    }
    },


    /**
     * 隐藏机制开关
     */
    yincangjizhi_switch(e) {
    this.reset();
    var value = e.detail.value;
    //console.log("当前隐藏机制状态："+value); 
    var obj = {}
    obj[`isYincangjizhi`] = e.detail.value
    this.setData(obj);
    if (value){
        this.naruto_toast("隐藏机制开启");
    }else{
        this.naruto_toast("隐藏机制关闭");
    }
    },


    /**
     * 小弹窗文字提示，2022年8月27日加入了《函数防抖》，即指定时间倒计时执行某事件，如果在这个时间内再次触发，则该倒计时重置，非常适用于这种临时提示信息。
     */
    naruto_toast_disappear:util.debounce(function(){
    //toast消失函数
    this.setData({
        toast_animation_ing:false
    })
    },2000),
    naruto_toast:function(t){
    const that = this;
    this.setData({
        toast_animation_ing:true,
        toast_txt:t
    })
    that.naruto_toast_disappear();
    },
  

    /**
     * 弹窗
     */
    openpop:util.throttle(function(e){
        this.playaudio("select");
        var that = this;
        var val = e.currentTarget.dataset.value;
        if (val == "pop_setting_hidden"){
        var val_tab = e.currentTarget.dataset.tabcurrent;
        that.setData({
            [val]:false,
            current_tab: val_tab
        });
        }else{
        that.setData({
            [val]:false
        });
        }
        //console.log(e);
        //console.log(that.data.pop_info_hidden)
    },1000),
    closepop:util.throttle(function(e){
    this.playaudio("error");
    var that = this;
    var val = e.currentTarget.dataset.value;
    //console.log(e);
    that.setData({
        [val]:true
    })
    },1000),

    /**
     * 打开社区，兔小巢
     */
    gotofeed(){
        let that = this;
    wx.navigateToMiniProgram({
        appId: "wx8abaf00ee8c3202e",
        extraData :{
        // 把1368数字换成你的产品ID，否则会跳到别的产品
        id : "418399",
        // 自定义参数，具体参考文档
        customData : {
            clientInfo: "设备信息："+userDevice.model,
            clientVersion: "微信版本："+userDevice.version,
            os: "操作系统："+userDevice.system,
            osVersion: "基础库版本："+userDevice.SDKVersion     
        }
        }
        })
    },

    /**
     * 选项卡切换
     */
    //获取当前滑块的index
    change_swiper:function(e){
        //console.log(e)
        const that  = this;
        that.setData({
            //current_tab: e.detail.current,
            scrollTop:0
        })
    },
    //点击切换，滑块index赋值
    tap_tab_swiper:util.throttle(function(e){
        const that = this;
        if (that.data.current_tab == e.currentTarget.dataset.current){
            return false;
        }else{
            that.setData({
                current_tab: e.currentTarget.dataset.current
            })
            that.playaudio("select");
        }
        //console.log(this.data.current_tab)
    },500),
    //禁止手动滑动
    catchTouchMove:function(res){
        return false;
    },
    //忍者配置部分的选项卡切换
    tap_tab_swiper_1:util.throttle(function(e){
      const that = this;
      that.playaudio("select");
      //console.log(e)
      if (that.data.current_tab_1 == e.currentTarget.dataset.current){
          return false;
      }else{
          that.setData({
              current_tab_1: e.currentTarget.dataset.current
          })
      }
    },500),

    /**
     * 忍者配置
     */
    select_ninja:util.throttle(function(e){
    const that = this;
    //console.log(e)
    var _ninjaid = parseInt(e.currentTarget.dataset.value);
    var _ninjarank = e.currentTarget.dataset.rank.toString();
    var _ninjalist_s = JSON.parse(JSON.stringify(ninjaDB.ninjalist_s));
    var _ninjalist_a = JSON.parse(JSON.stringify(ninjaDB.ninjalist_a));
    if (_ninjarank == 's'){
        var obj = ninjaSelectable.ninjalist_s.find(x => x.ninjaid == _ninjaid);
        //console.log(obj);
        _ninjalist_s.splice(0,1,obj);
        //console.log(_ninjalist_s)
        that.setData({
        ninjalist_s_selectnow:_ninjalist_s
        })
    }else if( _ninjarank == 'a'){
        var obj = ninjaSelectable.ninjalist_a.find(x => x.ninjaid == _ninjaid);
        //console.log(obj);
        _ninjalist_a.splice(0,1,obj);
        //console.log(_ninjalist_a)
        that.setData({
        ninjalist_a_selectnow:_ninjalist_a
        })
    }
    that.playaudio('select');
    //console.log(that.data.ninjalist_s_selectnow)
    //console.log(ninjaDB)
    },300),
    change_ninja:function(){
    const that = this;
    ninjaDB.ninjalist_s = JSON.parse(JSON.stringify(that.data.ninjalist_s_selectnow));
    ninjaDB.ninjalist_a = JSON.parse(JSON.stringify(that.data.ninjalist_a_selectnow));
    that.reset();
    that.naruto_toast("数据已重置！")
    },
    scrollToTop(){
    this.setData({
        scrollTop:0
    })
    },


    /**
     * 滑块v等级
     */
    v_changing:function(e){
    const that  = this;
    var num_vlevel = e.detail.value.toString();
    var arr_vlevel = num_vlevel.split('');
    if (arr_vlevel.length == 1){ //判断是否有十位数
        that.setData({
            v_now: e.detail.value,
            v_now_shi: 0,
            v_now_ge: parseInt(arr_vlevel[0])
        })
    }else{
        that.setData({
            v_now: e.detail.value,
            v_now_shi: parseInt(arr_vlevel[0]),
            v_now_ge: parseInt(arr_vlevel[1])
        })
        //that.playaudio('select');
    }
    },
    v_change:util.throttle(function(){
    const that  = this;
    var num_vlevel = that.data.v_now.toString();
    //console.log(num_vlevel)
    var arr_vlevel = num_vlevel.split('');
    //console.log(arr_vlevel)
    if (arr_vlevel.length == 1){ //判断是否有十位数
        that.setData({
            v_current: that.data.v_now,
            v_current_shi: 0,
            v_current_ge: parseInt(arr_vlevel[0])
        })
    }else{
        that.setData({
            v_current: that.data.v_now,
            v_current_shi: parseInt(arr_vlevel[0]),
            v_current_ge: parseInt(arr_vlevel[1])
        })
    }
    that.reset();
    },1000),

    /**
     * 高招返利开关
     */
    gaozhaofanli_switch:util.throttle(function(e){
    const that = this;
    var rank = e.currentTarget.dataset.rank;
    //console.log(e)
    var value = e.detail.value;
    //console.log("当前开关状态："+value); 
    var obj = {}
    obj['isGaozhaofanli_'+rank] = value
    this.setData(obj);
    //console.log(this.data.isGaozhaofanli_a);
    that.playaudio('cancel')
    },100),

    /**
     * 领取首付宝箱
     */
    //宝箱状态变化函数
    light_gift_s:function(){
    const that = this;
    var num_count = that.data.num_count;
    var arr = JSON.parse(JSON.stringify(that.data.gift_list_s));
    for(var i= 0; i<arr.length; i++){
        let status = 'gift_list_s['+i+'].status';
        if(num_count>=arr[i].limit && that.data.gift_list_s[i].status==0){
            this.setData({
                [status]:1
            })
        }
    }
    //console.log(that.data.gift_list_s)
    },
    light_gift_a:function(){
    const that = this;
    var num_count = that.data.num_count;
    var arr = JSON.parse(JSON.stringify(that.data.gift_list_a));
    for(var i= 0; i<arr.length; i++){
        let status = 'gift_list_a['+i+'].status';
        if(num_count>=arr[i].limit && that.data.gift_list_a[i].status==0){
            this.setData({
                [status]:1
            })
        }
    }
    },
    getgift:util.throttle(function(e){
    const that = this;
    //console.log(e);
    var limit = e.currentTarget.dataset.limit;
    var giftid = e.currentTarget.dataset.giftid;
    var extra = e.currentTarget.dataset.extra;
    var value = parseInt(e.currentTarget.dataset.value);
    var rank = e.currentTarget.dataset.rank.toString();
    var v_current = that.data.v_current;
    var num_s_fanli = that.data.num_s_fanli;
    var num_a_fanli = that.data.num_a_fanli;
    if(rank=="s"){
        var obj = that.data.gift_list_s.find(e => e.id == giftid)
    }else if(rank=="a"){
        var obj = that.data.gift_list_a.find(e => e.id == giftid)
    }
    //let index = that.data.gift_list_s.findIndex(element => element.id == giftid); //查找当前宝箱索引
    let status = 'gift_list_'+rank+'['+giftid+'].status';
    //console.log(obj)
    //改变宝箱状态
    if(that.data.num_count >= limit && obj.status==1 ){
        console.log("领取成功");
        this.setData({
            [status]:2
        })
    }
    //console.log(that.data.gift_list_s)
    //获取当前等级，判断是否达到双倍要求的等级
    //console.log(extra)
    if (extra){
        if( v_current >= parseInt(extra)){
            value=value*2
        }
    }
    //宝箱碎片获得，改变碎片数量
    let gongxi_list = that.data.gongxi_list;
    if( rank == 's'){
        var suipiannum = parseInt(this.data.ninjalist_s[0].suipiannum) + value;
        var suipiannum_xianshi = "ninjalist_s[0].suipiannum";
        if(value!= 0){
            gongxi_list.push({name:this.data.ninjalist_s[0].suipianname,num:value});
            this.setData({
                num_s: this.data.num_s + value,
                num_s_fanli: num_s_fanli + value,
                [suipiannum_xianshi]: suipiannum,
                gongxi_list: gongxi_list
            })
        }else{
            that.naruto_toast("此礼包里没有忍者碎片");
        }
    }else if(rank == 'a'){
        var suipiannum = parseInt(this.data.ninjalist_a[0].suipiannum) + value;
        var suipiannum_xianshi = "ninjalist_a[0].suipiannum";
        if( value!=0 ){
            gongxi_list.push({name:this.data.ninjalist_a[0].suipianname,num:value});
            this.setData({
                num_a: this.data.num_a + value,
                num_a_new: this.data.num_a_new + value,
                num_a_fanli: num_a_fanli + value,
                [suipiannum_xianshi]: suipiannum,
                gongxi_list: gongxi_list
            })
        }else{
            that.naruto_toast("此礼包里没有忍者碎片");
        }
    }
    that.playaudio("select");
    //判断如果恭喜动画停止了，即恭喜列表播放完了，则执行gongxi方法。
    if(!this.data.gongxi_animation_ing){that.gongxi()}; 

    },600),


    /**
     * 测试概率
     */
    givemerandom:function(){
        let that = this;
        for(var i = 0; i<10; i++){
            var ran = Math.random();
            var num = parseInt(ran*(10-1+1)+0,10);
            console.log(Math.random())
        }
    },
    ceshigailv:function(){
    let gailv_s = this.data.gailv_s;
    let gailv_a = this.data.gailv_a;
    let gailv_b = this.data.gailv_b;
    let gailv_c = this.data.gailv_c;
    var random_num;
    for(var i = 0; i <10; i++){
        random_num = myRandom(100,0);
        //random_num = Math.random()*100;
        console.log(random_num)
        if(random_num >= 0 && random_num < gailv_s){
            array_ceshi.s++
        }else if(random_num >= gailv_s && random_num < gailv_s + gailv_a){
            array_ceshi.a++
        }else if(random_num >= gailv_s + gailv_a && random_num < gailv_s + gailv_a + gailv_b){
            array_ceshi.b++
        }else{
            array_ceshi.c++
        }
        
    }
    zhanbi.s = array_ceshi.s *100 / (array_ceshi.s + array_ceshi.a + array_ceshi.b + array_ceshi.c)
    zhanbi.a = array_ceshi.a *100 / (array_ceshi.s + array_ceshi.a + array_ceshi.b + array_ceshi.c)
    zhanbi.b = array_ceshi.b *100 / (array_ceshi.s + array_ceshi.a + array_ceshi.b + array_ceshi.c)
    zhanbi.c = array_ceshi.c *100 / (array_ceshi.s + array_ceshi.a + array_ceshi.b + array_ceshi.c)

    console.log(array_ceshi);
    console.log(zhanbi)
    },
    ceshigailv_2:function(){
    for(var i = 0; i <10; i++){
        var random_num = parseInt(myRandom(1,0)*(1-0+1)+0,10);
        //console.log(random_num)
        if(random_num ==0){
            array_ceshi.s++
        }else if(random_num == 1){
            array_ceshi.a++
        }
        
    }

    console.log(array_ceshi);
    console.log(zhanbi)
    },
    ceshigailv_reset(){
    array_ceshi = {'s':0,'a':0,'b':0,'c':0};
    zhanbi = {'s':0,'a':0,'b':0,'c':0};
    console.log(array_ceshi);
    console.log(zhanbi);
    },
    ceshigailv_zhanbi(){
    zhanbi.s = array_ceshi.s *100 / (array_ceshi.s + array_ceshi.a + array_ceshi.b + array_ceshi.c)
    zhanbi.a = array_ceshi.a *100 / (array_ceshi.s + array_ceshi.a + array_ceshi.b + array_ceshi.c)
    zhanbi.b = array_ceshi.b *100 / (array_ceshi.s + array_ceshi.a + array_ceshi.b + array_ceshi.c)
    zhanbi.c = array_ceshi.c *100 / (array_ceshi.s + array_ceshi.a + array_ceshi.b + array_ceshi.c)  
    },
    ceshigailv_look(){
    this.ceshigailv_zhanbi();
    console.log(array_ceshi);
    console.log(zhanbi);
    },

    iknow:function(){
        let that = this;
        console.log("我不管");
        that.restart_pro();
        that.setData({
            deviceError: false
        })
    },
    restart_pro:function(){
        //弹出微信toast
        wx.showToast({
          title: '开始重新渲染',
          icon: 'success',
          duration: 2000
        });
        //参考页面重置写法
        if (getCurrentPages().length != 0) {
          //刷新当前页面的数据
          getCurrentPages()[getCurrentPages().length - 1].onLoad()
        }
    },

    /**
     * 激励广告相关事件
     */
    speedup:util.throttle(function(){
        let that = this;
        // 用户触发广告后，显示激励视频广告
        if (rewardedVideoAd) {
            rewardedVideoAd.show().catch(() => {
                // 失败重试
                rewardedVideoAd.load()
                .then(() => rewardedVideoAd.show())
                .catch(err => {
                    console.log('激励视频 广告显示失败')
                    that.naruto_toast("没有广告可看")
                })
            })
        }else{
            that.naruto_toast("没有广告了！")
            console.log("没有广告了！")
        }
    },1000),
    


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;

        //console.log("正在获取网络模式");
        // wx.getNetworkType({
        //   success: function (res) {
        //     const networkType = res.networkType;
        //     console.log("当前网络模式为："+networkType)
        //   },
        // });
        // 获取状态栏高度，判断是否全面屏，以应对屏幕显示安全范围  
    var res = wx.getSystemInfo({  
        success(res) {  
            console.log(res)  
          //console.log("状态栏高度为：" + res.statusBarHeight)  
          //console.log("屏幕宽度为：" + res.screenWidth)  
          //console.log("屏幕高度为：" + res.screenHeight)  
          // console.log("窗口宽度为：" + res.windowWidth)  
          // console.log("窗口高度为：" + res.windowHeight)  
          if ( res.screenWidth < res.screenHeight ){  
              console.log("设备旋转出错！请重启小程序")  
              that.setData({  
                  deviceError: true  
              })  
            }else{  
              console.log("设备旋转正确！")  
              that.setData({  
                  deviceError: false  
              })  
            }  
              }  
          }) 

        //小程序版本更新提示
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log("请求新版本回调："+res.hasUpdate)
        })
        updateManager.onUpdateReady(function () {
        wx.showModal({
            title: '更新提示',
            content: '发现新版本，要重启更新吗？',
            success: function (res) {
            if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
            }
            }
        })
        })
        updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        })

        // 获取状态栏高度，判断是否全面屏，以应对屏幕显示安全范围
        var res = wx.getSystemInfo({
            success(res) {
                //console.log(res)
                //console.log("状态栏高为：" + res.statusBarHeight)
                //console.log("屏幕宽度为：" + res.screenWidth)
                //console.log("屏幕高度为：" + res.screenHeight)
                //console.log("窗口宽度为：" + res.windowWidth)
                //console.log("窗口高度为：" + res.windowHeight)
                if ( parseInt(res.screenWidth / res.screenHeight) > 1.78 ){
                    var fixratio = 1 / (res.screenWidth / 667);
                    that.setData({
                        allscreen: 'allscreen',
                        statusbarheight: 44
                    })
                }else{
                    var fixratio = 1;
                }
                // that.setData({
                //   fixratio: fixratio
                // })
                userDevice = {
                    model:res.model,
                    system:res.system,
                    SDKVersion:res.SDKVersion,
                    version:res.version
                };

            }
        })

        // 初始化写入忍者数据库
        that.writeNinjaData(); //以前的旧版写入忍者数据方法

        //获取远程配置json ，远程更新数据，包括 S和A忍者数据、公告的弹出、设置的弹出、SA返利开关
        wx.request({
            url: needurl+'/ninjadata_new.json'+'?'+Math.random(),
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                //将获取到的json数据，存在名字叫list的这个数组中
                console.log( res.data )
                console.log('请求时间：' +util.formatTime(new Date()))
                //下方这段代码是往忍者数组中添加新参数url，好傻
                // let s_Data = JSON.parse(JSON.stringify(res.data.ninjalist_s));
                // s_Data.forEach((e, index) => {
                //   e.url = url_charactors
                // });
                // let a_Data = JSON.parse(JSON.stringify(res.data.ninjalist_a));
                // a_Data.forEach((e, index) => {
                //   e.url = url_charactors
                // });
                //console.log(s_Data)
                //console.log(a_Data)
                // 把JSON文件中的S忍者和A忍者碎片库写入到可选列表中
                const remoteNinjalist_s = JSON.parse(JSON.stringify(res.data.ninjalist_s));
                const localNinjalist_s = JSON.parse(JSON.stringify(ninjaSelectable.ninjalist_s));
                ninjaSelectable.ninjalist_s = remoteNinjalist_s.concat(localNinjalist_s);
                //console.log(ninjaSelectable.ninjalist_s);
                const remoteNinjalist_a = JSON.parse(JSON.stringify(res.data.ninjalist_a));
                const localNinjalist_a = JSON.parse(JSON.stringify(ninjaSelectable.ninjalist_a));
                ninjaSelectable.ninjalist_a = remoteNinjalist_a.concat(localNinjalist_a);

                // 把可选S中的第一个s、可选A中的第一个a连同JSON中的ninjalist_a2（副A）写入到奖池ninjaDB中；
                // 注意这里JSON.parse和JSON.stringify 的使用，它们的作用是“深度复制”对象，如果直接用对象赋值，在内存中他们的数据是互通的，也就是说看似赋值实际只是指向作用，=两边的数据会发生同步，因此使用JSON序列化和解析函数，让这边互不干扰。
                ninjaDB.ninjalist_s = [ ninjaSelectable.ninjalist_s[0]];
                ninjaDB.ninjalist_a = [ ninjaSelectable.ninjalist_a[0], res.data.ninjalist_a2[0] ];
                that.setData({
                    tongjilist_wrap_hidden: res.data.tongjilist_wrap_hidden,
                    pop_notice_hidden: res.data.pop_notice_hidden,
                    pop_setting_hidden: res.data.pop_setting_hidden,
                    current_tab: res.data.current_tab,
                    isGaozhaofanli_s: res.data.isGaozhaofanli_s,
                    isGaozhaofanli_a: res.data.isGaozhaofanli_a,
                    text_notice: res.data.notice_textbody,
                    version: res.data.version,
                    ninjaSelectable:JSON.parse(JSON.stringify(ninjaSelectable)),
                    ninjalist_s: JSON.parse(JSON.stringify(res.data.ninjalist_s)),
                    ninjalist_a: JSON.parse(JSON.stringify(ninjaDB.ninjalist_a)),
                    ninjalist_s_selectnow: ninjaDB.ninjalist_s,
                    ninjalist_a_selectnow: ninjaDB.ninjalist_a
                })
                //console.log(ninjaDB.ninjalist_a);
                console.log("请求成功！")
            },
            fail: function() {
                console.log("请求失败！")
            },
            complete: function() {
                console.log("请求完成！无论成功还是失败。")
            }
        })

        // 恭喜提示动画
        var animation_gongxi = wx.createAnimation({
            delay: 0,
            duration:1000,
            timingFunction:'ease'
        })
        animation_gongxi.opacity(0).step();
        this.setData({
            animation_gongxi:animation_gongxi.export()
        })

        //激励广告加载
        if(wx.createRewardedVideoAd){
            rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'adunit-6fd9003701fa4440' })
            rewardedVideoAd.onLoad(() => {
                console.log('激励视频 广告加载成功')
            })
            rewardedVideoAd.onError((err) => {
                console.log('激励广告错误', err)
                that.naruto_toast('错误信息：'+err.errMsg+'('+err.errCode+')');
                this.setData({
                    speedup_btn_txt:'不可用',
                    // btn_speedup_disabled:true
                })
            })
            rewardedVideoAd.onClose((res) => {
                console.log('激励广告关闭', res)
                // 用户点击了【关闭广告】按钮
                if (res && res.isEnded) {
                    // 正常播放结束，可以下发游戏奖励
                    that.naruto_toast('已解锁十连加速效果');
                    this.setData({
                        speedup_btn_txt:'加速中',
                        btn_speedup_disabled:true,
                        delaytime: 40
                    })
                    wx.reportEvent("get_speedup", {
                    })
                } else {
                    // 播放中途退出，不下发游戏奖励
                    that.naruto_toast('广告被关掉了，什么事也没有发生');
                }
            })
        }
        

        
        // 转发
        wx.showShareMenu({
            withShareTicket: true
        })

    },

    /**
     * 屏幕尺寸发生变化时执行（解决有时横屏竖屏切换时导致页面判断的错误）
     */
    onResize: function(){
        const that = this;
        // 获取状态栏高度，判断是否全面屏，以应对屏幕显示安全范围
        var res = wx.getSystemInfo({
        success(res) {
            //console.log(res)
            //console.log("状态栏高度为：" + res.statusBarHeight)
            //console.log("屏幕宽度为：" + res.screenWidth)
            //console.log("屏幕高度为：" + res.screenHeight)
            // console.log("窗口宽度为：" + res.windowWidth)
            // console.log("窗口高度为：" + res.windowHeight)
            if ( parseInt(res.screenWidth / res.screenHeight) > 1.78 ){
            var fixratio = 1 / (res.screenWidth / 667);
            that.setData({
                allscreen: 'allscreen',
                statusbarheight: 44
            })
            }else{
            var fixratio = 1;
            }

        }
        })
    },



    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        let that = this;
        console.log("页面初次渲染完毕");

        // setTimeout(function(){
        //     if(that.data.loadcomplete == false){
        //         wx.showToast({
        //             title: '请尝试切换移动流量重新载入',
        //             icon: 'none',
        //             duration: '2000'
        //         }).catch(err => console.log())
        //         console.log("请切换数据移动流量")
        //     }
        // },5000)

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        
        //小程序版本更新提示
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log("请求新版本回调："+res.hasUpdate)
        })
        updateManager.onUpdateReady(function () {
        wx.showModal({
            title: '更新提示',
            content: '发现新版本，要重启更新吗？',
            success: function (res) {
            if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
            }
            }
        })
        })
        updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        })

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    },

    /**
     * 页面上炫耀分享按钮的事件
     */
    shareAction(e){
        console.log(e)
        const that = this;
        var _text_arr = ['无语！','离谱！','天呐！','醉了！','麻了！','真实！'];
        var _index = parseInt(Math.random() * (_text_arr.length-1 - 0 + 1) + 0,10);
        var _sharename = e.currentTarget.dataset.name;
        //var _shareimage = needurl+'/images/shareImage_'+e.currentTarget.dataset.rank+'.jpg'+'?' + Math.random();
        var _shareimage = '../../images/shareImage.jpg';
        console.log(_index)
        console.log(_text_arr[_index])
        that.setData({
            shareTitle: _text_arr[_index]+'我竟用'+this.data.num_count+'抽招募到了'+_sharename,
            shareImageUrl: _shareimage
        })
        console.log(_shareimage)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    return{
        title:this.data.shareTitle,
        path:'pages/recruit/recruit',
        imageUrl:this.data.shareImageUrl,
        success(e){
        console.log('分享成功')
        },
        fail(e){
        console.log('分享失败')
        },
        complete(){
        console.log('分享完成')
        }
    }

    }



})