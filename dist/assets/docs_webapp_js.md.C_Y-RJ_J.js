import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.DrxArEOS.js";const F=JSON.parse('{"title":"JS工具人","description":"","frontmatter":{"title":"JS工具人"},"headers":[],"relativePath":"docs/webapp/js.md","filePath":"docs/webapp/js.md"}'),h={name:"docs/webapp/js.md"},t=n(`<h2 id="对象数组根据唯一-id-去重" tabindex="-1">对象数组根据唯一 ID 去重 <a class="header-anchor" href="#对象数组根据唯一-id-去重" aria-label="Permalink to &quot;对象数组根据唯一 ID 去重&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这个真的快的一塌糊涂 比二重循环快多了</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> uniarr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [], </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">field</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">has</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item[field]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item[field], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="进制转换" tabindex="-1">进制转换 <a class="header-anchor" href="#进制转换" aria-label="Permalink to &quot;进制转换&quot;">​</a></h2><h2 id="_16-进制-unicode-转字符串" tabindex="-1">16 进制 unicode 转字符串 <a class="header-anchor" href="#_16-进制-unicode-转字符串" aria-label="Permalink to &quot;16 进制 unicode 转字符串&quot;">​</a></h2><h2 id="字符串转-16-进制字符串" tabindex="-1">字符串转 16 进制字符串 <a class="header-anchor" href="#字符串转-16-进制字符串" aria-label="Permalink to &quot;字符串转 16 进制字符串&quot;">​</a></h2><h2 id="小程序连接-nfc" tabindex="-1">小程序连接 NFC <a class="header-anchor" href="#小程序连接-nfc" aria-label="Permalink to &quot;小程序连接 NFC&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/MifareClassic.html" target="_blank" rel="noreferrer">MifareClassic</a> MifareClassic 是加密卡 在读写操作前需要验密 <a href="https://developers.weixin.qq.com/community/develop/article/doc/00082863aecb98f2778b24a4755c13" target="_blank" rel="noreferrer">读写 ndef 数据</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   NFC定义的数据类型需要载荷内容被定义在RTD文档中， NFC论坛具体定义了以下RTD：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFC</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 文本RTD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ，可携带Unicode字符串。文本记录可包含在NDEF信息中作为另一条记录的描述文本。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFC</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> URI</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RTD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">U</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)，可用于存储网站地址，邮件，和电话号码，存储成经过优化的二进制形式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFC</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 智能海报RTD</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Sp)，用于将URL，短信或电话号码编入NFC论坛标签，及如何在设备间传递这些信息。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 通用控制RTD。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">、</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NFC</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 签名RTD。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCharCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">85</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// U  网址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCharCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">84</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// T  文本</span></span></code></pre></div>`,8),l=[t];function k(p,e,r,d,E,g){return a(),i("div",null,l)}const o=s(h,[["render",k]]);export{F as __pageData,o as default};
