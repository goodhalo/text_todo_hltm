// ========== 水果卡片HTML生成 ==========
const fruits = [
    {name:'苹果',cat:'温带',badge:'\uD83C\uDF4E 果中之王',img:'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&h=400&fit=crop',sci:'Malus domestica',region:'陕西、山东、甘肃、辽宁、河南',desc:'中国是全球最大的苹果生产国。陕西洛川、山东烟台苹果闻名遐迩，色泽鲜艳、脆甜多汁。',tags:['温带','秋季成熟','年产量4000+万吨']},
    {name:'柑橘',cat:'柑橘',badge:'\uD83C\uDF4A 产量第一',img:'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=600&h=400&fit=crop',sci:'Citrus reticulata',region:'江西、湖南、广西、广东、湖北',desc:'中国柑橘产量居世界首位，赣南脐橙、南丰蜜桔等品种享誉中外。富含维生素C，酸甜可口。',tags:['柑橘类','秋冬成熟','年产量5000+万吨']},
    {name:'葡萄',cat:'浆果',badge:'\uD83C\uDF47 历史悠久',img:'https://images.unsplash.com/photo-1596363505729-4190a9506133?w=600&h=400&fit=crop',sci:'Vitis vinifera',region:'新疆、河北、山东、辽宁、云南',desc:'中国葡萄种植历史悠久，新疆吐鲁番葡萄沟闻名天下。鲜食和酿酒葡萄品质俱佳。',tags:['浆果类','夏秋成熟','年产量1400+万吨']},
    {name:'桃子',cat:'核果',badge:'\uD83C\uDF51 仙果之誉',img:'https://images.unsplash.com/photo-1526367790997-0150782936f7?w=600&h=400&fit=crop',sci:'Prunus persica',region:'山东、河北、江苏、浙江、四川',desc:'中国是桃的原产地，栽培历史超3000年。平谷大桃、奉化水蜜桃等品种名扬四海。',tags:['核果类','夏季成熟','年产量1600+万吨']},
    {name:'荔枝',cat:'热带',badge:'\uD83D\uDD25 南国珍果',img:'https://images.unsplash.com/photo-1551030173-122aaf52ca1a?w=600&h=400&fit=crop',sci:'Litchi chinensis',region:'广东、广西、福建、海南、云南',desc:'中国是荔枝的故乡，"一骑红尘妃子笑"千古传颂。果肉晶莹、甜蜜醇香。',tags:['热带','夏季成熟','中国特色水果']},
    {name:'梨',cat:'温带',badge:'\uD83C\uDF50 百果之宗',img:'https://images.unsplash.com/photo-1595418541331-7f9f9a7de1d3?w=600&h=400&fit=crop',sci:'Pyrus spp.',region:'河北、安徽、山东、新疆、陕西',desc:'中国梨产量世界第一，鸭梨、雪花梨、库尔勒香梨享誉全国。清甜爽口、润肺止咳。',tags:['温带','秋季成熟','年产量1900+万吨']},
    {name:'芒果',cat:'热带',badge:'\uD83E\uDD6D 热带果王',img:'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&h=400&fit=crop',sci:'Mangifera indica',region:'海南、广西、云南、广东、四川',desc:'中国是世界第二大芒果生产国，海南贵妃芒、攀枝花凯特芒品质卓越。',tags:['热带','春夏成熟','年产量300+万吨']},
    {name:'香蕉',cat:'热带',badge:'\uD83C\uDF4C 智慧之果',img:'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=600&h=400&fit=crop',sci:'Musa spp.',region:'广东、广西、海南、云南、福建',desc:'中国是世界第二大香蕉生产国，产区集中在华南热带。口感软糯香甜，富含钾元素。',tags:['热带','全年可产','年产量1100+万吨']},
    {name:'西瓜',cat:'温带',badge:'\uD83C\uDF49 夏日之王',img:'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop',sci:'Citrullus lanatus',region:'河南、山东、江苏、安徽、新疆',desc:'中国西瓜产量占全球60%以上，是世界最大生产国。河南开封、新疆下野地西瓜远近驰名。',tags:['温带','夏季成熟','年产量6000+万吨']},
    {name:'猕猴桃',cat:'浆果',badge:'\uD83E\uDD5D VC之王',img:'https://images.unsplash.com/photo-1557805352-0a81759711af?w=600&h=400&fit=crop',sci:'Actinidia chinensis',region:'陕西、四川、贵州、湖南、河南',desc:'中国是猕猴桃原产地，陕西周至、四川苍溪为核心产区。VC含量极高。',tags:['浆果类','秋季成熟','中国原产']},
    {name:'龙眼',cat:'热带',badge:'\uD83D\uDC51 果中神品',img:'https://images.unsplash.com/photo-1615870216519-2c067b22fa0c?w=600&h=400&fit=crop',sci:'Dimocarpus longan',region:'福建、广东、广西、海南、四川',desc:'龙眼是中国南方特色水果，果肉晶莹如明珠，甘甜滋补，可鲜食也可制桂圆干入药。',tags:['热带','夏秋成熟','中国特色']},
    {name:'草莓',cat:'浆果',badge:'\uD83C\uDF53 水果皇后',img:'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&h=400&fit=crop',sci:'Fragaria \u00D7 ananassa',region:'辽宁、山东、河北、江苏、浙江、四川',desc:'中国草莓产量世界第一，丹东九九草莓、长丰草莓品质出众。色泽鲜红、酸甜多汁。',tags:['浆果类','冬春成熟','年产量300+万吨']},
    {name:'樱桃',cat:'核果',badge:'\uD83C\uDF52 春果第一枝',img:'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop',sci:'Prunus avium',region:'山东、辽宁、陕西、四川、河南',desc:'中国樱桃栽培历史悠久，山东烟台大樱桃、大连樱桃品质卓越。',tags:['核果类','春末夏初','高端水果']},
    {name:'石榴',cat:'温带',badge:'\uD83D\uDC8E 多子多福',img:'https://images.unsplash.com/photo-1612309662676-cbd95e74a3c4?w=600&h=400&fit=crop',sci:'Punica granatum',region:'新疆、陕西、云南、四川、安徽',desc:'石榴在中国栽培已超2000年。新疆和田、陕西临潼石榴最为著名，籽粒晶莹如红宝石。',tags:['温带','秋季成熟','文化象征']},
    {name:'杨梅',cat:'热带',badge:'\uD83D\uDD34 果中玛瑙',img:'https://images.unsplash.com/photo-1587132137056-bf081016261b?w=600&h=400&fit=crop',sci:'Myrica rubra',region:'浙江、福建、广东、江苏、湖南',desc:'杨梅是中国特有的水果。浙江余姚、仙居杨梅最为出名，果色深红、酸甜浓郁。',tags:['热带','初夏成熟','中国特有']}
];

const grid = document.getElementById('fruitGrid');
fruits.forEach(f => {
    const card = document.createElement('div');
    card.className = 'fruit-card';
    card.setAttribute('data-category', f.cat);
    card.innerHTML =
        '<div class="img-wrapper">'+
            '<img src="'+f.img+'" alt="'+f.name+'" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">'+
            '<div style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:80px;background:linear-gradient(135deg,#fef9ef,#fff5e6);">'+f.badge.slice(0,2)+'</div>'+
            '<span class="badge">'+f.badge+'</span>'+
        '</div>'+
        '<div class="card-body">'+
            '<h3>'+f.name+'</h3>'+
            '<div class="scientific-name">'+f.sci+'</div>'+
            '<div class="region"><span class="pin-icon">\uD83D\uDCCD</span> '+f.region+'</div>'+
            '<p class="desc">'+f.desc+'</p>'+
            '<div class="tags">'+f.tags.map(function(t){return '<span class="tag">'+t+'</span>';}).join('')+'</div>'+
        '</div>';
    grid.appendChild(card);
});

// ========== 水果详细数据库 ==========
var fruitDB = {
'\u82F9\u679C':{icon:'\uD83C\uDF4E',sci:'Malus domestica',intro:'中国是全球最大的苹果生产国，产量占世界一半以上。陕西洛川、山东烟台苹果闻名遐迩，色泽鲜艳、脆甜多汁。',cal:52,water:85.9,carbs:13.5,fiber:1.2,protein:0.2,fat:0.2,vc:4,k:107,color:'#d94040',provinces:['\u9655\u897F','\u5C71\u4E1C','\u7518\u8083','\u8FBD\u5B81','\u6CB3\u5357'],regions:['陕西洛川','陕西白水','山东烟台','山东栖霞','甘肃静宁','甘肃天水','辽宁瓦房店','河南灵宝']},
'\u67D1\u6A58':{icon:'\uD83C\uDF4A',sci:'Citrus reticulata',intro:'中国柑橘产量居世界首位，赣南脐橙、南丰蜜桔等享誉中外。富含维生素C，酸甜可口。',cal:44,water:87.4,carbs:10.3,fiber:1.4,protein:0.8,fat:0.2,vc:33,k:166,color:'#e8922a',provinces:['\u6C5F\u897F','\u6E56\u5357','\u5E7F\u897F','\u5E7F\u4E1C','\u6E56\u5317'],regions:['江西赣州（脐橙）','江西南丰（蜜桔）','湖南石门','广西桂林','广东四会','湖北宜昌']},
'\u8461\u8404':{icon:'\uD83C\uDF47',sci:'Vitis vinifera',intro:'中国葡萄种植历史悠久，新疆吐鲁番葡萄沟闻名天下。鲜食和酿酒葡萄品质俱佳。',cal:69,water:80.5,carbs:18.1,fiber:0.9,protein:0.7,fat:0.2,vc:3,k:191,color:'#8e4dad',provinces:['\u65B0\u7586','\u6CB3\u5317','\u5C71\u4E1C','\u8FBD\u5B81','\u4E91\u5357'],regions:['新疆吐鲁番','新疆和田','河北怀来','河北昌黎','山东烟台','辽宁北镇','云南弥勒']},
'\u6843\u5B50':{icon:'\uD83C\uDF51',sci:'Prunus persica',intro:'中国是桃的原产地，栽培历史超3000年。平谷大桃、奉化水蜜桃等名扬四海，肉质细腻、香甜多汁。',cal:42,water:88.3,carbs:10.1,fiber:1.5,protein:0.9,fat:0.1,vc:7,k:190,color:'#f5a0a0',provinces:['\u5C71\u4E1C','\u6CB3\u5317','\u6C5F\u82CF','\u6D59\u6C5F','\u56DB\u5DDD'],regions:['山东肥城','河北深州','北京平谷','江苏无锡','浙江奉化','四川龙泉驿']},
'\u8354\u679D':{icon:'\uD83E\uDED5',sci:'Litchi chinensis',intro:'中国是荔枝的故乡，"一骑红尘妃子笑"千古传颂。果肉晶莹、甜蜜醇香。',cal:66,water:81.9,carbs:16.5,fiber:1.3,protein:0.8,fat:0.4,vc:71,k:171,color:'#d4454a',provinces:['\u5E7F\u4E1C','\u5E7F\u897F','\u798F\u5EFA','\u6D77\u5357','\u4E91\u5357'],regions:['广东增城','广东茂名','广西灵山','福建莆田','海南海口','云南屏边']},
'\u68A8':{icon:'\uD83C\uDF50',sci:'Pyrus spp.',intro:'中国梨产量世界第一，鸭梨、雪花梨、库尔勒香梨享誉全国。清甜爽口、润肺止咳。',cal:50,water:85.8,carbs:13.1,fiber:3.1,protein:0.4,fat:0.2,vc:4,k:116,color:'#d4c87a',provinces:['\u6CB3\u5317','\u5B89\u5FBD','\u5C71\u4E1C','\u65B0\u7586','\u9655\u897F'],regions:['河北赵县（雪花梨）','安徽砀山（酥梨）','山东莱阳','新疆库尔勒','陕西蒲城']},
'\u8292\u679C':{icon:'\uD83E\uDD6D',sci:'Mangifera indica',intro:'中国是世界第二大芒果生产国，海南贵妃芒、攀枝花凯特芒品质卓越。',cal:60,water:83.5,carbs:14.8,fiber:1.6,protein:0.8,fat:0.4,vc:36,k:168,color:'#f0a830',provinces:['\u6D77\u5357','\u5E7F\u897F','\u4E91\u5357','\u5E7F\u4E1C','\u56DB\u5DDD'],regions:['海南三亚','海南乐东','广西百色','云南元江','广东湛江','四川攀枝花']},
'\u9999\u8549':{icon:'\uD83C\uDF4C',sci:'Musa spp.',intro:'中国是世界第二大香蕉生产国，产区集中在华南热带。口感软糯香甜，富含钾元素。',cal:93,water:75.3,carbs:22.8,fiber:2.6,protein:1.1,fat:0.3,vc:9,k:358,color:'#f2d94e',provinces:['\u5E7F\u4E1C','\u5E7F\u897F','\u6D77\u5357','\u4E91\u5357','\u798F\u5EFA'],regions:['广东徐闻','广东东莞','广西南宁','海南乐东','云南西双版纳','福建漳州']},
'\u897F\u74DC':{icon:'\uD83C\uDF49',sci:'Citrullus lanatus',intro:'中国西瓜产量占全球60%以上，是世界最大生产国。河南开封、新疆下野地西瓜远近驰名。',cal:30,water:91.5,carbs:6.8,fiber:0.4,protein:0.6,fat:0.1,vc:8,k:112,color:'#4caf50',provinces:['\u6CB3\u5357','\u5C71\u4E1C','\u6C5F\u82CF','\u5B89\u5FBD','\u65B0\u7586'],regions:['河南开封','河南中牟','山东东明','江苏东台','安徽阜阳','新疆下野地']},
'\u7315\u7334\u6843':{icon:'\uD83E\uDD5D',sci:'Actinidia chinensis',intro:'中国是猕猴桃原产地，陕西周至、四川苍溪为核心产区。VC含量极高，被誉为水果之王。',cal:61,water:83.1,carbs:14.7,fiber:3.0,protein:1.1,fat:0.5,vc:92,k:312,color:'#7cb342',provinces:['\u9655\u897F','\u56DB\u5DDD','\u8D35\u5DDE','\u6E56\u5357','\u6CB3\u5357'],regions:['陕西周至','陕西眉县','四川苍溪','贵州修文','湖南凤凰','河南西峡']},
'\u9F99\u773C':{icon:'\uD83E\uDED6',sci:'Dimocarpus longan',intro:'龙眼是中国南方特色水果，果肉晶莹如明珠，甘甜滋补，可鲜食也可制桂圆干入药。',cal:71,water:81.2,carbs:16.9,fiber:1.1,protein:1.2,fat:0.1,vc:84,k:266,color:'#c8a26d',provinces:['\u798F\u5EFA','\u5E7F\u4E1C','\u5E7F\u897F','\u6D77\u5357','\u56DB\u5DDD'],regions:['福建莆田','福建泉州','广东茂名','广西玉林','海南文昌','四川泸州']},
'\u8349\u8393':{icon:'\uD83C\uDF53',sci:'Fragaria \u00D7 ananassa',intro:'中国草莓产量世界第一，丹东九九草莓、长丰草莓品质出众。色泽鲜红、酸甜多汁。',cal:32,water:91.0,carbs:7.7,fiber:2.0,protein:0.7,fat:0.3,vc:58,k:153,color:'#e53e3e',provinces:['\u8FBD\u5B81','\u5C71\u4E1C','\u6CB3\u5317','\u6C5F\u82CF','\u6D59\u6C5F','\u56DB\u5DDD'],regions:['辽宁丹东','山东济南','河北保定','江苏徐州','浙江建德','四川双流']},
'\u6A31\u6843':{icon:'\uD83C\uDF52',sci:'Prunus avium',intro:'中国樱桃栽培历史悠久，山东烟台大樱桃、大连樱桃品质卓越。是春季最早上市的新鲜水果。',cal:46,water:86.2,carbs:10.2,fiber:1.6,protein:1.0,fat:0.2,vc:10,k:222,color:'#c0392b',provinces:['\u5C71\u4E1C','\u8FBD\u5B81','\u9655\u897F','\u56DB\u5DDD','\u6CB3\u5357'],regions:['山东烟台','山东泰安','辽宁大连','陕西西安','四川汶川','河南洛阳']},
'\u77F3\u69B4':{icon:'\uD83D\uDC8E',sci:'Punica granatum',intro:'石榴在中国栽培已超2000年。新疆和田、陕西临潼石榴最为著名，籽粒晶莹如红宝石。',cal:63,water:78.0,carbs:15.2,fiber:4.0,protein:0.7,fat:1.2,vc:8,k:236,color:'#d4454a',provinces:['\u65B0\u7586','\u9655\u897F','\u4E91\u5357','\u56DB\u5DDD','\u5B89\u5FBD'],regions:['新疆和田','新疆喀什','陕西临潼','云南蒙自','四川会理','安徽怀远']},
'\u6768\u6885':{icon:'\uD83D\uDD34',sci:'Myrica rubra',intro:'杨梅是中国特有的水果。浙江余姚、仙居杨梅最为出名，果色深红、酸甜浓郁。',cal:33,water:91.1,carbs:6.3,fiber:1.7,protein:0.8,fat:0.2,vc:15,k:149,color:'#b71c1c',provinces:['\u6D59\u6C5F','\u798F\u5EFA','\u5E7F\u4E1C','\u6C5F\u82CF','\u6E56\u5357'],regions:['浙江余姚','浙江仙居','浙江慈溪','福建龙海','广东潮州','江苏太湖','湖南靖州']}
};

// ========== 颜色工具 ==========
function h2r(h){var r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return{r:r,g:g,b:b};}
function r2h(r,g,b){return '#'+[r,g,b].map(function(x){return Math.round(Math.max(0,Math.min(255,x))).toString(16).padStart(2,'0');}).join('');}
function lighten(h,f){var c=h2r(h);return r2h(c.r+(255-c.r)*f,c.g+(255-c.g)*f,c.b+(255-c.b)*f);}
function darken(h,f){var c=h2r(h);return r2h(c.r*(1-f),c.g*(1-f),c.b*(1-f));}

// ========== 加载真实中国GeoJSON并渲染（双Canvas图层） ==========
// 底层：稳定地图；顶层：仅用于点击闪烁，平时透明
var canvasBase=document.getElementById('chinaMapBase');
var ctxBase=canvasBase.getContext('2d');
var canvas=document.getElementById('chinaMap');
var ctx=canvas.getContext('2d');
var baseColor='#f0ede6', hlColor='#d94040';
var hlProvinces=[], hovered=null, currentFruit='';

// 将从GeoJSON加载的所有省份数据
var geoFeatures=null;
var geoLoaded=false;
var LNGMN=73,LNGMX=135,LATMN=17.5,LATMX=54, MW=600, MH=520;

function proj(lng,lat){return[(lng-LNGMN)/(LNGMX-LNGMN)*MW,MH-(lat-LATMN)/(LATMX-LATMN)*MH];}

// 简化省份名称匹配
function shortName(fullName){
    return fullName.replace(/省|市|壮族自治区|回族自治区|维吾尔自治区|自治区|特别行政区/g,'');
}

// 计算多边形中心
function calcCenter(rings){
    var totalX=0,totalY=0,count=0;
    rings.forEach(function(ring){
        ring.forEach(function(pt){
            totalX+=pt[0];totalY+=pt[1];count++;
        });
    });
    return [totalX/count,totalY/count];
}

// 射线法判断点是否在多边形内
function pointInRing(px,py,ring){
    var inside=false;
    for(var i=0,j=ring.length-1;i<ring.length;j=i++){
        var xi=ring[i][0],yi=ring[i][1],xj=ring[j][0],yj=ring[j][1];
        if((yi>py)!==(yj>py)&&px<(xj-xi)*(py-yi)/(yj-yi)+xi)inside=!inside;
    }
    return inside;
}

function setupCanvases(force){
    var dpr=window.devicePixelRatio||1;
    var rect=canvas.parentElement.getBoundingClientRect();
    var w=rect.width-16, h=rect.height-16;
    if(w<=0||h<=0){w=500;h=400;}
    if(!force && canvas._lastW===w && canvas._lastH===h && canvas._lastDpr===dpr){
        return{w:w,h:h,dpr:dpr};
    }
    canvas._lastW=w;canvas._lastH=h;canvas._lastDpr=dpr;
    // 两个canvas同步尺寸
    [canvas,canvasBase].forEach(function(c){
        c.width=w*dpr;c.height=h*dpr;
        c.style.width=w+'px';c.style.height=h+'px';
    });
    ctx.setTransform(1,0,0,1,0,0);ctx.scale(dpr,dpr);
    ctxBase.setTransform(1,0,0,1,0,0);ctxBase.scale(dpr,dpr);
    return{w:w,h:h,dpr:dpr};
}

// ========== 底层稳定地图（包含盛产高亮、标签，不闪烁） ==========
function drawMapBase(){
    if(!geoLoaded)return;
    var s=setupCanvases(), w=s.w, h=s.h;
    ctxBase.clearRect(0,0,w,h);
    var scale=Math.min(w/MW,h/MH);
    var ox=(w-MW*scale)/2, oy=(h-MH*scale)/2;

    // 南海诸岛示意
    var sx=w-80,sy=h-70;
    ctxBase.fillStyle='#d8e8f0';ctxBase.fillRect(sx,sy,65,50);
    ctxBase.strokeStyle='#b0c8d8';ctxBase.lineWidth=0.8;ctxBase.strokeRect(sx,sy,65,50);
    ctxBase.fillStyle='#888';ctxBase.font='8px "Microsoft YaHei","PingFang SC",sans-serif';ctxBase.textAlign='center';
    ctxBase.fillText('\u5357\u6D77\u8BF8\u5C9B',sx+33,sy+30);

    // 建立名称→Feature索引
    var nameMap={};
    geoFeatures.forEach(function(f){nameMap[shortName(f.properties.name)]=f;});

    var names=Object.keys(nameMap);
    var normal=[], hl=[];
    names.forEach(function(n){if(hlProvinces.indexOf(n)>=0)hl.push(n);else normal.push(n);});

    // 渲染函数
    function renderProvince(name,fill,stroke,targetCtx){
        var feat=nameMap[name];if(!feat)return;
        var geom=feat.geometry;
        var allRings=[];
        if(geom.type==='Polygon'){allRings=geom.coordinates;}
        else if(geom.type==='MultiPolygon'){
            geom.coordinates.forEach(function(poly){allRings.push(poly[0]);});
        }
        allRings.forEach(function(ring){
            if(ring.length<3)return;
            targetCtx.beginPath();
            var p0=proj(ring[0][0],ring[0][1]);
            targetCtx.moveTo(ox+p0[0]*scale,oy+p0[1]*scale);
            for(var i=1;i<ring.length;i++){
                var pi=proj(ring[i][0],ring[i][1]);
                targetCtx.lineTo(ox+pi[0]*scale,oy+pi[1]*scale);
            }
            targetCtx.closePath();
            targetCtx.fillStyle=fill;
            targetCtx.strokeStyle=stroke;
            targetCtx.lineWidth=0.5;
            targetCtx.fill();
            targetCtx.stroke();
        });
        // 悬停高亮
        if(name===hovered){
            allRings.forEach(function(ring){
                if(ring.length<3)return;
                targetCtx.beginPath();
                var p0=proj(ring[0][0],ring[0][1]);
                targetCtx.moveTo(ox+p0[0]*scale,oy+p0[1]*scale);
                for(var i=1;i<ring.length;i++){
                    var pi=proj(ring[i][0],ring[i][1]);
                    targetCtx.lineTo(ox+pi[0]*scale,oy+pi[1]*scale);
                }
                targetCtx.closePath();
                targetCtx.fillStyle='rgba(255,255,255,0.22)';targetCtx.fill();
            });
        }
    }

    // 先画普通省份
    normal.forEach(function(n){renderProvince(n,baseColor,'#c0b8ac',ctxBase);});
    // 再画高亮省份
    hl.forEach(function(n){renderProvince(n,hlColor,'rgba(0,0,0,0.25)',ctxBase);});

    // 标签
    names.forEach(function(name){
        var feat=nameMap[name];if(!feat)return;
        var rings=[];
        var geom=feat.geometry;
        if(geom.type==='Polygon')rings=[geom.coordinates[0]];
        else if(geom.type==='MultiPolygon')rings=geom.coordinates.map(function(p){return p[0];});
        var c=calcCenter(rings);if(!c)return;
        var pc=proj(c[0],c[1]),tx=ox+pc[0]*scale,ty=oy+pc[1]*scale;
        var lbl=name;
        var isHL=hlProvinces.indexOf(name)>=0;
        ctxBase.font=(isHL?'bold ':'')+(lbl.length<=2?'10':'9')+'px "Microsoft YaHei","PingFang SC",sans-serif';
        ctxBase.textAlign='center';ctxBase.textBaseline='middle';
        ctxBase.fillStyle=isHL?'#fff':'#5a5a5a';
        ctxBase.shadowColor=isHL?'rgba(0,0,0,0.35)':'transparent';ctxBase.shadowBlur=isHL?2:0;
        ctxBase.fillText(lbl,tx,ty);ctxBase.shadowBlur=0;
    });
}

// ========== 鼠标交互（基于GeoJSON检测） ==========
function getProvinceAt(mx,my){
    if(!geoFeatures)return null;
    var s=setupCanvases(),w=s.w,h=s.h;
    var scale=Math.min(w/MW,h/MH),ox=(w-MW*scale)/2,oy=(h-MH*scale)/2;

    for(var fi=0;fi<geoFeatures.length;fi++){
        var feat=geoFeatures[fi];
        var name=shortName(feat.properties.name);
        var geom=feat.geometry;
        var allRings=[];
        if(geom.type==='Polygon')allRings=geom.coordinates;
        else if(geom.type==='MultiPolygon')geom.coordinates.forEach(function(p){allRings.push(p[0]);});

        for(var ri=0;ri<allRings.length;ri++){
            var ring=allRings[ri];
            if(ring.length<3)continue;
            var projected=[];
            for(var i=0;i<ring.length;i++){
                var p=proj(ring[i][0],ring[i][1]);
                projected.push([ox+p[0]*scale,oy+p[1]*scale]);
            }
            if(pointInRing(mx,my,projected))return name;
        }
    }
    return null;
}

canvas.addEventListener('mousemove',function(e){
    if(!geoLoaded)return;
    var r=canvas.getBoundingClientRect();
    var p=getProvinceAt(e.clientX-r.left,e.clientY-r.top);
    if(p!==hovered){hovered=p;canvas.style.cursor=p?'pointer':'default';drawMapBase();}
});

canvas.addEventListener('click',function(e){
    if(!geoLoaded)return;
    var r=canvas.getBoundingClientRect();
    var p=getProvinceAt(e.clientX-r.left,e.clientY-r.top);
    if(p){
        drawFlash(p);
        setTimeout(clearFlash,180);
    }
});

canvas.addEventListener('mouseleave',function(){if(hovered){hovered=null;canvas.style.cursor='default';drawMapBase();}});
window.addEventListener('resize',function(){setupCanvases(true);if(document.getElementById('fruitModal').classList.contains('active'))drawMapBase();});

// ========== 加载GeoJSON ==========
function loadGeoJSON(){
    fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    .then(function(res){return res.json();})
    .then(function(data){
        geoFeatures=data.features;
        geoLoaded=true;
        var loadingEl=document.getElementById('mapLoading');
        if(loadingEl)loadingEl.style.display='none';
        drawMapBase();
    })
    .catch(function(){
        console.warn('GeoJSON加载失败，使用备用简化数据');
        geoFeatures=fallbackGeo();
        geoLoaded=true;
        var loadingEl=document.getElementById('mapLoading');
        if(loadingEl)loadingEl.style.display='none';
        drawMapBase();
    });
}

// 备用简化数据（确保即使离线也有基本可用地图）
function fallbackGeo(){
    var p=[
        {n:'\u9ED1\u9F99\u6C5F',c:[[[121.2,53.5],[135.1,48.8],[131.5,45.0],[127.0,43.0],[121.0,45.7],[116.5,50.0],[121.2,53.5]]]},
        {n:'\u5409\u6797',c:[[[121.2,53.5],[131.0,43.0],[128.5,42.6],[121.0,45.7],[121.2,53.5]]]},
        {n:'\u8FBD\u5B81',c:[[[119.0,41.3],[126.0,41.5],[125.0,42.4],[119.2,41.5],[119.0,41.3]]]},
        {n:'\u5185\u8499\u53E4',c:[[[97.1,42.9],[120.3,49.5],[111.0,49.5],[98.5,42.5],[97.1,42.9]]]},
        {n:'\u65B0\u7586',c:[[[73.5,39.5],[96.0,42.2],[74.0,38.8],[73.5,39.5]]]},
        {n:'\u897F\u85CF',c:[[[78.6,31.6],[97.2,28.2],[79.5,31.2],[78.6,31.6]]]},
        {n:'\u9752\u6D77',c:[[[89.5,35.5],[103.5,36.5],[90.8,35.5],[89.5,35.5]]]},
        {n:'\u7518\u8083',c:[[[94.5,42.0],[106.2,35.5],[95.0,42.2],[94.5,42.0]]]},
        {n:'\u5B81\u590F',c:[[[104.5,37.5],[107.2,36.5],[104.2,38.2],[104.5,37.5]]]},
        {n:'\u9655\u897F',c:[[[105.5,34.5],[111.0,35.0],[105.0,35.5],[105.5,34.5]]]},
        {n:'\u5C71\u897F',c:[[[110.5,37.5],[114.5,39.8],[110.2,36.0],[110.5,37.5]]]},
        {n:'\u6CB3\u5317',c:[[[113.5,40.5],[119.5,40.0],[113.5,39.5],[113.5,40.5]]]},
        {n:'\u5317\u4EAC',c:[[[115.3,39.8],[116.8,40.1],[115.8,39.6],[115.3,39.8]]]},
        {n:'\u5929\u6D25',c:[[[116.8,39.0],[117.7,39.8],[116.7,39.1],[116.8,39.0]]]},
        {n:'\u5C71\u4E1C',c:[[[114.8,37.5],[122.2,36.8],[115.2,36.8],[114.8,37.5]]]},
        {n:'\u6CB3\u5357',c:[[[110.8,34.5],[116.8,33.8],[111.2,34.8],[110.8,34.5]]]},
        {n:'\u6C5F\u82CF',c:[[[116.5,34.2],[121.8,31.8],[116.5,33.8],[116.5,34.2]]]},
        {n:'\u5B89\u5FBD',c:[[[114.8,34.0],[119.0,30.5],[114.8,33.0],[114.8,34.0]]]},
        {n:'\u4E0A\u6D77',c:[[[120.8,31.5],[121.8,30.7],[120.7,31.2],[120.8,31.5]]]},
        {n:'\u6D59\u6C5F',c:[[[118.0,29.8],[122.5,28.8],[118.0,30.2],[118.0,29.8]]]},
        {n:'\u6E56\u5317',c:[[[109.0,31.5],[116.2,31.2],[109.0,32.0],[109.0,31.5]]]},
        {n:'\u6E56\u5357',c:[[[109.0,29.5],[114.2,26.8],[109.5,29.8],[109.0,29.5]]]},
        {n:'\u6C5F\u897F',c:[[[113.5,29.5],[118.2,27.0],[114.0,29.8],[113.5,29.5]]]},
        {n:'\u798F\u5EFA',c:[[[115.8,28.5],[120.5,25.2],[116.5,28.5],[115.8,28.5]]]},
        {n:'\u5E7F\u4E1C',c:[[[109.5,20.8],[117.2,23.8],[110.2,20.8],[109.5,20.8]]]},
        {n:'\u5E7F\u897F',c:[[[104.5,22.8],[111.8,23.8],[104.5,23.5],[104.5,22.8]]]},
        {n:'\u6D77\u5357',c:[[[108.5,19.8],[111.0,19.0],[109.0,19.8],[108.5,19.8]]]},
        {n:'\u4E91\u5357',c:[[[97.5,22.5],[106.0,25.5],[97.0,23.3],[97.5,22.5]]]},
        {n:'\u8D35\u5DDE',c:[[[103.5,28.5],[109.2,27.0],[104.0,28.8],[103.5,28.5]]]},
        {n:'\u56DB\u5DDD',c:[[[97.5,33.0],[108.2,33.0],[98.0,33.5],[97.5,33.0]]]},
        {n:'\u91CD\u5E86',c:[[[105.5,30.0],[109.0,30.5],[105.5,30.5],[105.5,30.0]]]},
        {n:'\u53F0\u6E7E',c:[[[120.0,22.0],[121.8,23.5],[119.8,22.5],[120.0,22.0]]]},
        {n:'\u9999\u6E2F',c:[[[113.8,22.2],[114.3,22.3],[114.0,22.0],[113.8,22.2]]]},
        {n:'\u6FB3\u95E8',c:[[[113.5,22.1],[113.58,22.12],[113.54,22.08],[113.5,22.1]]]}
    ];
    return p.map(function(x){return{type:'Feature',properties:{name:x.n},geometry:{type:'Polygon',coordinates:x.c}};});
}

// 立即加载
loadGeoJSON();

// ========== 颜色提取 ==========
function extractDominantColor(imgEl,fruitName,callback){
    var d=fruitDB[fruitName];
    if(d&&d.color){callback(d.color);return;}
    try{
        var c2=document.createElement('canvas');c2.width=100;c2.height=100;
        var ctx2=c2.getContext('2d');ctx2.drawImage(imgEl,0,0,100,100);
        var id=ctx2.getImageData(0,0,100,100),px=id.data,cm={};
        for(var i=0;i<px.length;i+=16){
            var r2=Math.round(px[i]/32)*32,g2=Math.round(px[i+1]/32)*32,b2=Math.round(px[i+2]/32)*32;
            var k=r2+','+g2+','+b2;cm[k]=(cm[k]||0)+1;
        }
        var mk='',mc=0;
        for(var key in cm){if(cm[key]>mc&&key!=='0,0,0'&&key!=='255,255,255'){mc=cm[key];mk=key;}}
        if(mk){var rgb=mk.split(',').map(Number);callback(r2h(rgb[0],rgb[1],rgb[2]));}
        else callback((d&&d.color)||'#e67e22');
    }catch(e){callback((d&&d.color)||'#e67e22');}
}

// ========== 模态框 ==========
var modalOverlay=document.getElementById('fruitModal');
var modalClose=document.getElementById('modalClose');

function openModal(fruitName,imgEl){
    var d=fruitDB[fruitName];if(!d)return;
    currentFruit=fruitName;
    extractDominantColor(imgEl,fruitName,function(dominantColor){
        baseColor=lighten(dominantColor,0.78);
        hlColor=darken(dominantColor,0.3);
        hlProvinces=(d.provinces||[]).slice();
        hovered=null;
        document.getElementById('legendBase').style.background=baseColor;
        document.getElementById('legendHighlight').style.background=hlColor;
        document.getElementById('modalColorDot').style.background=dominantColor;
        if(geoLoaded)drawMapBase();else setTimeout(function(){if(geoLoaded)drawMapBase();},500);
    });
    document.getElementById('modalFruitIcon').textContent=d.icon;
    document.getElementById('modalFruitName').textContent=fruitName;
    document.getElementById('detailThumb').src=imgEl.src;
    document.getElementById('detailThumb').alt=fruitName;
    document.getElementById('detailName').textContent=fruitName;
    document.getElementById('detailSciName').textContent=d.sci||'';
    document.getElementById('detailIntro').textContent=d.intro;
    document.getElementById('nutritionBody').innerHTML=
        '<tr><td>🔥 热量（大卡）</td><td class="cal-highlight">'+d.cal+' kcal</td></tr>'+
        '<tr><td>💧 水分</td><td>'+d.water+' g</td></tr>'+
        '<tr><td>🍚 碳水化合物</td><td>'+d.carbs+' g</td></tr>'+
        '<tr><td>🌾 膳食纤维</td><td>'+d.fiber+' g</td></tr>'+
        '<tr><td>🥩 蛋白质</td><td>'+d.protein+' g</td></tr>'+
        '<tr><td>🧈 脂肪</td><td>'+d.fat+' g</td></tr>'+
        '<tr><td>🍋 维生素C</td><td>'+d.vc+' mg</td></tr>'+
        '<tr><td>🍌 钾</td><td>'+d.k+' mg</td></tr>';
    var dc=d.color||'#e67e22';
    document.getElementById('regionCards').innerHTML=(d.regions||[]).map(function(r){
        return '<span class="region-chip" style="background:'+dc+'">'+r+'</span>';
    }).join('');
    modalOverlay.classList.add('active');
    document.body.style.overflow='hidden';
    clearFlash();
    setTimeout(function(){if(geoLoaded)drawMapBase();},200);
}

function closeModal(){
    modalOverlay.classList.remove('active');
    document.body.style.overflow='';
    currentFruit='';hlProvinces=[];
}

modalClose.addEventListener('click',closeModal);
modalOverlay.addEventListener('click',function(e){if(e.target===modalOverlay)closeModal();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeModal();});

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded',function(){
    var filterBtns=document.querySelectorAll('.filter-btn');
    var fruitCards=document.querySelectorAll('.fruit-card');
    filterBtns.forEach(function(btn){
        btn.addEventListener('click',function(){
            filterBtns.forEach(function(b){b.classList.remove('active');});
            btn.classList.add('active');
            var cat=btn.dataset.category;
            fruitCards.forEach(function(card){
                if(cat==='all'||card.dataset.category===cat){
                    card.style.display='';
                    card.style.animation='none';card.offsetHeight;card.style.animation='';
                }else{card.style.display='none';}
            });
        });
    });

    document.querySelectorAll('.fruit-card .img-wrapper').forEach(function(wrapper){
        wrapper.addEventListener('click',function(){
            var card=this.closest('.fruit-card');
            var nameEl=card.querySelector('h3');
            var imgEl=this.querySelector('img');
            var fruitName=nameEl?nameEl.textContent.trim():'';
            var cleanName=fruitName.replace(/（.*）/,'').trim();
            var keys=Object.keys(fruitDB),key=null;
            for(var i=0;i<keys.length;i++){
                if(cleanName.indexOf(keys[i])>=0||keys[i].indexOf(cleanName)>=0){key=keys[i];break;}
            }
            if(key&&imgEl)openModal(key,imgEl);
        });
    });
});