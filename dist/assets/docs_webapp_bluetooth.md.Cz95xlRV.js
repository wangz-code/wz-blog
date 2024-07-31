import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.DrxArEOS.js";const y=JSON.parse('{"title":"蓝牙通讯","description":"小程序蓝牙通讯","frontmatter":{"title":"蓝牙通讯","description":"小程序蓝牙通讯","keywords":["webapp","小程序","蓝牙"]},"headers":[],"relativePath":"docs/webapp/bluetooth.md","filePath":"docs/webapp/bluetooth.md"}'),e={name:"docs/webapp/bluetooth.md"},l=n(`<h2 id="微信小程序蓝牙通讯" tabindex="-1">微信小程序蓝牙通讯 <a class="header-anchor" href="#微信小程序蓝牙通讯" aria-label="Permalink to &quot;微信小程序蓝牙通讯&quot;">​</a></h2><p>简单说下个人理解 每个蓝牙设备(BLE) 都有一个<code>主服务</code>还有<code>设备ID</code>, 小程序连接设备需要用到<code>设备ID</code> 连接后小程序可以获取设备的 <code>服务</code> 再由<code>服务</code> 获取到蓝牙设备的 <code>特征值</code></p><p>这个<code>主服务</code>和<code>serviceId</code> 应该指的是同一个东西</p><p><code>主服务</code> 和 <code>特征值</code>一般都是蓝牙厂商提前定义好的固定值</p><p>一个<code>服务</code>下有 多个 <code>特征值</code> 这些 <code>特征值</code> 有的可读, 有的可写, 还有通知的 就是<code>特征值的 read、write、notify 操作</code></p><p>(官方文档)[<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/device/ble.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/framework/device/ble.html</a>]</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化蓝牙模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.openBluetoothAdapter;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开始搜索附近的蓝牙外围设备</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.startBluetoothDevicesDiscovery;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 连接设备获取服务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createBLEConnection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  deviceId, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 搜索到设备的 deviceId</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 连接成功，获取服务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBLEDeviceServices</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      deviceId,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBLEDeviceCharacteristics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          deviceId, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 搜索到设备的 deviceId</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          serviceId, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 上一步中找到的某个服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.characteristics.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">              let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.characteristics[i];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">              if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (item.properties.write) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 该特征值可写</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 本示例是向蓝牙设备发送一个 0x00 的 16 进制数据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 实际使用时，应根据具体设备协议发送数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> buffer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ArrayBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dataView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DataView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buffer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                dataView.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setUint8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeBLECharacteristicValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  deviceId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  serviceId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  characteristicId: item.uuid,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  value: buffer,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">              if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (item.properties.read) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 该特征值可读</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readBLECharacteristicValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  deviceId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  serviceId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  characteristicId: item.uuid,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">              if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (item.properties.notify </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.properties.indicate) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 必须先启用 wx.notifyBLECharacteristicValueChange 才能监听到设备 onBLECharacteristicValueChange 事件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notifyBLECharacteristicValueChange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  deviceId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  serviceId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  characteristicId: item.uuid,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                  state: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><ul><li>iOS 上，对特征值的 read、write、notify 操作，由于系统需要获取特征值实例，传入的 serviceId 与 characteristicId 必须由 wx.getBLEDeviceServices 与 wx.getBLEDeviceCharacteristics 中获取到后才能使用。建议统一在建立连接后先执行 wx.getBLEDeviceServices 与 wx.getBLEDeviceCharacteristics 后再进行与蓝牙设备的数据交互。</li><li>考虑到蓝牙功能可以间接进行定位，安卓 6.0 及以上版本，无定位权限或定位开关未打开时，无法进行设备搜索。</li><li>安卓上，部分机型获取设备服务时会多出 00001800 和 00001801 UUID 的服务，这是系统行为，注意不要使用这两个服务。</li><li>建立连接和关闭连接必须要成对调用。如果未能及时关闭连接释放资源，安卓上容易导致 state 133 GATT ERROR 的异常。</li><li>在与蓝牙设备传输数据时，需要注意 MTU（最大传输单元）。如果数据量超过 MTU 会导致错误，建议根据蓝牙设备协议进行分片传输。安卓设备可以调用 wx.setBLEMTU 进行 MTU 协商。在 MTU 未知的情况下，建议使用 20 字节为单位传输。</li></ul>`,9),h=[l];function p(t,k,E,r,d,c){return a(),i("div",null,h)}const o=s(e,[["render",p]]);export{y as __pageData,o as default};
