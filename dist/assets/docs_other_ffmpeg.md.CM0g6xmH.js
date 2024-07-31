import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.DrxArEOS.js";const y=JSON.parse('{"title":"FFmpeg","description":"","frontmatter":{"title":"FFmpeg","toc":"content"},"headers":[],"relativePath":"docs/other/ffmpeg.md","filePath":"docs/other/ffmpeg.md"}'),p={name:"docs/other/ffmpeg.md"},h=n(`<h3 id="个人常用-youtube-下载的-mp4-转-mp3" tabindex="-1">个人常用 youtube 下载的 mp4 转 mp3 <a class="header-anchor" href="#个人常用-youtube-下载的-mp4-转-mp3" aria-label="Permalink to &quot;个人常用 youtube 下载的 mp4 转 mp3&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 剪切视频</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:00:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> video.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:02:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cut.mp4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 转换</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cut.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audio.mp3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 视频转Gif</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.mp4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.gif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从视频中第3秒开始，截取时长为3秒的片段转化为 gif</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:00:03</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.mp4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test-clip.gif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认转化是中等质量模式，若要转化出高质量的 gif，可以修改比特率</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2048k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.gif</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将GIF 转换为 MP4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gif</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.gif</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.mp4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 移除视频中的音频（静音） -an 就是禁止音频输出</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> input.mov</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -an</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mute-output.mov</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 视频提取帧 将视频提取10帧</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %03d.jpg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="ffmpeg-音频-mp4-转-mp3" tabindex="-1">ffmpeg 音频 mp4 转 mp3 <a class="header-anchor" href="#ffmpeg-音频-mp4-转-mp3" aria-label="Permalink to &quot;ffmpeg 音频 mp4 转 mp3&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename.mp4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename.mp3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -vn 选项明确丢弃视频，因此转换速度要快得多</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> video.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audio.mp3</span></span></code></pre></div><h3 id="ffmpeg-剪切视频文件命令-参考" tabindex="-1">ffmpeg 剪切视频文件命令 <a href="https://moejj.com/ffmpeg" target="_blank" rel="noreferrer">参考</a> <a class="header-anchor" href="#ffmpeg-剪切视频文件命令-参考" aria-label="Permalink to &quot;ffmpeg 剪切视频文件命令 [参考](https://moejj.com/ffmpeg)&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ffmpeg剪辑视频文件非常简单，一个命令就可以搞定。-ss后面指定的时间轴，-t后面指定时长单位为秒。为什么要将-ss放在-i前面？</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 因为官方文档推荐这样做，这样做剪辑出来的视频时间轴更精准，并且速度更快。还有一个参数-to放在-i video.mp4后面，作用是指定剪辑时长，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例如-to 00:02:00, 当-ss放在-i前面的时候，这个-to剪辑出来的是-ss指定的时间轴加上-to指定的时间，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 比如-ss 00:01:00 -i video.mp4 -to 00:02:00，则剪辑出来的视频，是原视频00:01:00到00:03:00的片段。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果想把片头给去掉则指定了时间轴就不要添加-to和-t参数。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:00:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> video.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:02:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cut.mp4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 0+2 = 结束于2分钟</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:03:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> video.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:02:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cut.mp4</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 3+2 = 结束于5分钟</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -to参数实例 将原视频文件00:03:00到00:05:00的片段剪辑出来，生成为cut.mp4文件在当前文件夹，并且使用编码为copy复制源视频文件的编码格式。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:03:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> video.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:02:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cut.mp4</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 去除片头，就不需要添加-to或者-t参数，那么则是剪辑00:03:00到视频结尾。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 00:03:00</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> video.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cut.mp4</span></span></code></pre></div>`,6),l=[h];function t(k,e,F,d,g,r){return a(),i("div",null,l)}const c=s(p,[["render",t]]);export{y as __pageData,c as default};
