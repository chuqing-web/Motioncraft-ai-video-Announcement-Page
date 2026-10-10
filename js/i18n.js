/**
 * Bilingual dictionary — default language: en
 */
(function (global) {
  const dict = {
    en: {
      'nav.features': 'Features',
      'nav.pipelines': 'Pipelines',
      'nav.studio': 'Studio',
      'nav.mcp': 'MCP',
      'nav.flow': 'Flow',
      'nav.platform': 'Platform',
      'hero.title': 'Prompt → editable Canvas code → short film or print-ready anime pages',
      'hero.sub': 'A Windows AI creation workbench: describe a story, let your LLM write runnable html/css/js for every shot or panel, then preview, revise, and export locally — transparent, editable, under your control.',
      'hero.ctaPrimary': 'Explore capabilities',
      'hero.ctaSecondary': 'Agent Bridge + MCP',
      'why.eyebrow': 'Core capabilities',
      'why.title': 'Code paints · Dual media · Agent-drive',
      'why.card1.title': 'Code is the picture',
      'why.card1.body': 'The model writes drawing logic — not a sealed media blob. Read it, edit it, regenerate one shot or panel with continuity.',
      'why.card2.title': 'AI short films',
      'why.card2.body': 'Node graph + timeline: outline, per-shot Canvas code driven by clock t, camera / FX / character layers — export MP4 or WebM.',
      'why.card3.title': 'AI anime page comics',
      'why.card3.body': 'AI decides panel count, size, and layout; streams still-frame code with manga craft — export PNG sequences or multi-page PDF.',
      'why.card4.title': 'Bring your own model',
      'why.card4.body': 'Doubao, DeepSeek, OpenAI, Anthropic, Ollama, or any OpenAI-compatible gateway. Keys stay on your machine (DPAPI) — never plain in the project file.',
      'why.card5.title': 'MCP agent control',
      'why.card5.body': 'Keep the app running; Cursor, Doubao, or your scripts drive the same director pipeline and encrypted .vd project truth.',
      'dual.eyebrow': 'Two product lines · one philosophy',
      'dual.title': 'Short film motion · print-ready page comics',
      'dual.sub': 'Video aims for cinematic multi-system motion on a clock. Comics aim for ink, screentone, and designed grids as still frames. Same studio; two quality constitutions on purpose.',
      'dual.tagVideo': 'Timeline video',
      'dual.noteVideo': 'Scene nodes · clock t · camera / FX / character · MP4 / WebM',
      'dual.tagComic': 'Anime page comic',
      'dual.noteComic': 'Page → panel → shot · AI layout · PNG / PDF',
      'mcp.eyebrow': 'Agent Bridge + MCP',
      'mcp.title': 'Let external agents drive the running studio',
      'mcp.sub': 'With MotionCraft.exe running, point Cursor or another MCP client at the local bridge. Reasoning stays in the agent; MotionCraft executes node edits, directors, preview, and export on the same quality pipeline as the UI.',
      'mcp.p1.label': 'Live control',
      'mcp.p1.title': 'Localhost bridge',
      'mcp.p1.body': 'Health check, project read/write, add nodes, connect edges, update props — humans and agents share one encrypted .vd graph.',
      'mcp.p2.label': 'Directors',
      'mcp.p2.title': 'Full or single-piece regen',
      'mcp.p2.body': 'run_director / run_comic_director for full pipelines; scene, character, effect, or comic_shot directors to fix one piece with context.',
      'mcp.p3.label': 'Export',
      'mcp.p3.title': 'Preview & ship',
      'mcp.p3.body': 'Trigger preview and export video or comic pages from the agent — outputs land beside your project when possible.',
      'cap.eyebrow': 'Inside the studio',
      'cap.title': 'From prompt to editable assets',
      'cap.ai.title': 'AI Director — video',
      'cap.ai.body': 'Outline honors your shot count and durations. Each scene returns setup/draw driven by t. Compile + offscreen trial; no Math.random — seed instead. Failures rewrite for several rounds before landing on the graph.',
      'cap.comic.title': 'Comic Director — page manga',
      'cap.comic.body': 'Four-level narrative cards, then AI-owned panel layouts (no lazy equal grid). Stream still-frame code panel by panel with neighbor context; compose pages for PNG or PDF. v1 targets page comics, not vertical strips.',
      'cap.nodes.title': 'Node-based workbench',
      'cap.nodes.body': 'Library on the left, graph in the center, props and generated code on the right, timeline or page-flip below. Video edges: sequence and attach. Comic edges: sequence, contain, compose.',
      'cap.vault.title': 'Local .vd vault & privacy',
      'cap.vault.body': 'Projects are encrypted single-file vaults. After code exists you can preview and export offline. Model keys live in AppData under DPAPI — MCP never returns plaintext secrets.',
      'pipe.eyebrow': 'Creation flow',
      'pipe.title': 'Prompt → Outline → Code → Validate → Preview → Export',
      'pipe.s1': 'Prompt',
      'pipe.s1d': 'Story, style, beats',
      'pipe.s2': 'Outline',
      'pipe.s2d': 'Shots or page/panel cards',
      'pipe.s3': 'Code',
      'pipe.s3d': 'html / css / js per unit',
      'pipe.s4': 'Validate',
      'pipe.s4d': 'Compile & offscreen trial',
      'pipe.s5': 'Preview',
      'pipe.s5d': 'Timeline scrub or page flip',
      'pipe.s6': 'Export',
      'pipe.s6d': 'MP4 / WebM or PNG / PDF',
      'plat.eyebrow': 'Platform',
      'plat.title': 'Native Windows studio',
      'plat.body': 'WinForms + WebView2 desktop app. Ordinary laptop — no dedicated AI GPU, no vendor-locked text-to-video subscription. You pick the model and the bill.',
      'plat.li1': 'Form · Windows desktop (.exe)',
      'plat.li2': 'Project · encrypted .vd vault',
      'plat.li3': 'Agent · local MCP + HTTP bridge',
      'plat.li4': 'Stack · .NET 8 · WebView2 · Canvas 2D',
      'footer.tag': 'AI short films · anime page comics · MCP on Windows',
      'footer.github': 'GitHub · Coming soon',
      'footer.copy': '© 2026 MotionCraft · AI Motion Studio'
    },
    zh: {
      'nav.features': '能力',
      'nav.pipelines': '产线',
      'nav.studio': '工作室',
      'nav.mcp': 'MCP',
      'nav.flow': '流程',
      'nav.platform': '平台',
      'hero.title': '提示词 → 可编辑的 Canvas 代码 → 短片成片，或可印刷的动漫页漫',
      'hero.sub': 'Windows 桌面端 AI 创作工作台：用自然语言讲故事，由你的大模型为每一镜 / 每一格写出可运行的 html/css/js，再在本地预览、修订并导出——画面透明、可改、可控。',
      'hero.ctaPrimary': '了解能力',
      'hero.ctaSecondary': 'Agent Bridge + MCP',
      'why.eyebrow': '核心能力',
      'why.title': '代码即画面 · 双介质 · Agent 驱动',
      'why.card1.title': '代码即画面',
      'why.card1.body': '模型写的是绘制逻辑，不是密封成片。可读、可手改，只重做坏掉的一镜 / 一格并保持连贯。',
      'why.card2.title': 'AI 短片',
      'why.card2.body': '节点图 + 时间轴：大纲、逐镜 Canvas 代码由时钟 t 驱动，运镜 / 特效 / 人物叠层——导出 MP4 或 WebM。',
      'why.card3.title': 'AI 动漫页漫',
      'why.card3.body': 'AI 决定格数、大小与版式；流式静帧出码，追求漫画感质感——导出 PNG 序列或多页 PDF。',
      'why.card4.title': '自备模型',
      'why.card4.body': '豆包、DeepSeek、OpenAI、Anthropic、Ollama 或任意 OpenAI 兼容网关。密钥本机 DPAPI 加密，不进工程文件明文。',
      'why.card5.title': 'MCP Agent 遥控',
      'why.card5.body': '应用保持运行；Cursor、豆包或自写脚本走同一套导演流水线与加密 .vd 工程真相源。',
      'dual.eyebrow': '两条产线 · 同一哲学',
      'dual.title': '短片运动感 · 印刷级页漫',
      'dual.sub': '视频追求时钟驱动的多系统运动与短片感；漫画追求墨线、网点与分格设计的静帧完成度。同一工作室，两套质量宪法，刻意分流。',
      'dual.tagVideo': '时间轴视频',
      'dual.noteVideo': '分镜节点 · 时钟 t · 运镜 / 特效 / 人物 · MP4 / WebM',
      'dual.tagComic': '动漫页漫',
      'dual.noteComic': '页 → 格 → 格内画 · AI 版式 · PNG / PDF',
      'mcp.eyebrow': 'Agent Bridge + MCP',
      'mcp.title': '让外部 Agent 实机驱动正在运行的工作室',
      'mcp.sub': '保持 MotionCraft.exe 运行，将 Cursor 等 MCP 客户端指向本机桥接。推理留在 Agent 侧；MotionCraft 执行节点编辑、导演、预览与导出——与界面同一质量流水线。',
      'mcp.p1.label': '实机控制',
      'mcp.p1.title': '本机桥接',
      'mcp.p1.body': '健康探测、工程读写、增删节点、连线、改属性——人机共用一份加密 .vd 节点图。',
      'mcp.p2.label': '导演',
      'mcp.p2.title': '全流程或单点重生',
      'mcp.p2.body': 'run_director / run_comic_director 跑完整导演；单镜、人物、特效或单格导演带上下文只修坏掉的一块。',
      'mcp.p3.label': '导出',
      'mcp.p3.title': '预览与出片',
      'mcp.p3.body': '可由 Agent 触发预览与视频 / 漫画导出——产物尽量落在工程旁。',
      'cap.eyebrow': '工作室内部',
      'cap.title': '从提示词到可编辑资产',
      'cap.ai.title': '视频 AI 导演',
      'cap.ai.body': '大纲服从你的镜数与时长。每镜返回由 t 驱动的 setup/draw。编译 + 离屏试跑；禁止 Math.random，改用 seed。失败多轮重写后再落图。',
      'cap.comic.title': '漫画导演 — 页漫',
      'cap.comic.body': '四级叙事任务卡，再由 AI 全权决定分格版式（禁止等分懒网格）。按页按格流式静帧出码并注入邻格上下文；拼页导出 PNG 或 PDF。v1 定位页漫，不是条漫。',
      'cap.nodes.title': '节点式工作台',
      'cap.nodes.body': '左库中图画布，右属性与生成代码，底为时间轴或翻页预览。视频边：sequence / attach。漫画边：sequence / contain / compose。',
      'cap.vault.title': '本地 .vd 保险库与隐私',
      'cap.vault.body': '工程为加密单文件保险库。有代码后可离线预览与导出。模型密钥存于 AppData 的 DPAPI 字段——MCP 不返回明文密钥。',
      'pipe.eyebrow': '创作流程',
      'pipe.title': '提示词 → 大纲 → 出码 → 校验 → 预览 → 导出',
      'pipe.s1': '提示词',
      'pipe.s1d': '故事、风格、节拍',
      'pipe.s2': '大纲',
      'pipe.s2d': '分镜或页 / 格任务卡',
      'pipe.s3': '出码',
      'pipe.s3d': '每单位 html / css / js',
      'pipe.s4': '校验',
      'pipe.s4d': '编译与离屏试跑',
      'pipe.s5': '预览',
      'pipe.s5d': '时间轴 scrub 或翻页',
      'pipe.s6': '导出',
      'pipe.s6d': 'MP4 / WebM 或 PNG / PDF',
      'plat.eyebrow': '平台',
      'plat.title': 'Windows 原生工作室',
      'plat.body': 'WinForms + WebView2 桌面应用。普通笔记本即可——无需专用 AI 显卡，也无厂商锁定的文生视频订阅。模型与账单你自己选。',
      'plat.li1': '形态 · Windows 桌面 (.exe)',
      'plat.li2': '工程 · 加密 .vd 保险库',
      'plat.li3': 'Agent · 本机 MCP + HTTP 桥',
      'plat.li4': '技术栈 · .NET 8 · WebView2 · Canvas 2D',
      'footer.tag': 'AI 短片 · 动漫页漫 · Windows 上的 MCP',
      'footer.github': 'GitHub · 即将上线',
      'footer.copy': '© 2026 MotionCraft · AI Motion Studio'
    }
  };

  let lang = 'en';

  function t(key) {
    const table = dict[lang] || dict.en;
    return table[key] ?? dict.en[key] ?? key;
  }

  function apply() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const on = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
  }

  function setLang(next) {
    lang = next === 'zh' ? 'zh' : 'en';
    try {
      localStorage.setItem('motioncraft-lang', lang);
    } catch (_e) { /* ignore */ }
    apply();
  }

  function init() {
    let saved = null;
    try {
      saved = localStorage.getItem('motioncraft-lang');
    } catch (_e) { /* ignore */ }
    lang = saved === 'zh' || saved === 'en' ? saved : 'en';
    apply();
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
    });
  }

  global.MotionCraftI18n = { init, setLang, t, getLang: () => lang };
})(window);
