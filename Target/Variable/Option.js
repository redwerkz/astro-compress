var r=(await import("typescript-esbuild/Target/Function/Merge.js")).default((await import("files-pipe/Target/Variable/Option.js")).default,{CSS:{csso:(await import("./CSS/csso.js")).default,lightningcss:(await import("./CSS/lightningcss.js")).default},HTML:{"html-minifier-terser":(await import("./HTML/html-minifier-terser.js")).default},JavaScript:{terser:(await import("./JavaScript/terser.js")).default},Image:{sharp:(await import("./Image/sharp.js")).default},SVG:{svgo:(await import("./SVG/svgo.js")).default},Map:(await import("./Map.js")).default,Parser:(await import("./Parser.js")).default,Action:{Failed:async({Input:t})=>`Error: Cannot compress file ${t}!`,Passed:async({Before:t,Buffer:a})=>t>Buffer.byteLength(a.toString()),Accomplished:async({Input:t,Before:a,After:e,Output:i})=>`Compressed ${t} for ${await(await import("files-pipe/Target/Function/Bytes.js")).default(a-e)} (${((a-e)/a*100).toFixed(2)}% reduction) in ${i}.`,Changed:async t=>Object.defineProperty(t.Info,"Total",{value:(t.Info.Total?t.Info.Total:0)+(t.On.Before-t.On.After),configurable:!0})&&t}});export{r as default};