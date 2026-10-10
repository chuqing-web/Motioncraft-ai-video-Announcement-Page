# MotionCraft — Product Site

Static bilingual (EN / 中文) marketing site for **MotionCraft · AI Motion Studio**.

## Links

| Type | URL |
|------|-----|
| GitHub 仓库（代码） | https://github.com/chuqing-web/Motioncraft-ai-video-Announcement-Page |
| 官网（GitHub Pages） | https://chuqing-web.github.io/Motioncraft-ai-video-Announcement-Page/ |

> **说明：** 推送到 GitHub 只会托管代码，不等于立刻有可访问的官网。需要先开启 **GitHub Pages**，上面的官网地址才会生效。

## 如何打开官网（启用 GitHub Pages）

1. 打开仓库：https://github.com/chuqing-web/Motioncraft-ai-video-Announcement-Page
2. 进入 **Settings → Pages**
3. 在 **Build and deployment → Source** 选择 **Deploy from a branch**
4. **Branch** 选 `main`，文件夹选 `/ (root)`，点击 **Save**
5. 等待 1–2 分钟后，在浏览器打开：

   **https://chuqing-web.github.io/Motioncraft-ai-video-Announcement-Page/**

也可在仓库页的 **Settings → Pages** 顶部看到官方提供的访问链接。

## Local preview

Open `index.html` in a browser, or from this folder:

```powershell
npx --yes serve .
```

Then visit the URL printed in the terminal (usually `http://localhost:3000`).

## Structure

| Path | Role |
|------|------|
| `index.html` | Single-page site |
| `css/styles.css` | Visual system (aligned with Announcement_Page) |
| `js/i18n.js` | EN / ZH dictionary (default: EN) |
| `js/main.js` | Scroll header + reveal |
| `assets/images/` | Product screenshots |

## After you have a GitHub repo

Replace the footer placeholder `GitHub · Coming soon` in `index.html` / `js/i18n.js` (`footer.github`) with a real link, for example:

https://github.com/chuqing-web/Motioncraft-ai-video-Announcement-Page
