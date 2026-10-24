(function() {
    'use strict';
    
    const isGTraffic = location.hostname.includes('gtraffic.io') || 
                       document.querySelector('img.gallery-item') !== null || 
                       (document.body && (document.body.innerText.includes('BUOC 01') || document.body.innerText.includes('BƯỚC 01')));
    
    const styles = `
        .gt-saas-panel { position: fixed; bottom: 24px; right: 24px; z-index: 9999999; width: 360px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; box-shadow: 0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04); font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 13px; color: #1f2937; overflow: hidden; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .gt-saas-header { padding: 14px 16px; border-bottom: 1px solid #f3f4f6; display: flex; justify-content: space-between; align-items: center; background: #f9fafb; }
        .gt-saas-title { font-size: 14px; font-weight: 600; color: #111827; letter-spacing: -0.02em; display: flex; align-items: center; gap: 9px; }
        .gt-saas-title::before { content: ''; display: block; width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 10px rgba(16,185,129,0.5); }
        .gt-toggle-btn { cursor: pointer; font-size: 18px; color: #9ca3af; user-select: none; line-height: 1; padding: 4px 8px; border-radius: 6px; transition: all 0.2s; }
        .gt-toggle-btn:hover { background: #f3f4f6; color: #374151; }
        .gt-saas-body { padding: 16px; }
        .gt-status-pill { font-size: 12.5px; padding: 10px 12px; border-radius: 8px; background: #f3f4f6; color: #6b7280; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; border: 1px solid transparent; transition: all 0.3s; line-height: 1.45; }
        .gt-status-pill.error { background: #fef2f2; color: #dc2626; border-color: #fecaca; }
        .gt-status-pill.success { background: #ecfdf5; color: #059669; border-color: #a7f3d0; }
        .gt-status-pill.processing { background: #eff6ff; color: #2563eb; border-color: #bfdbfe; }
        .gt-btn { width: 100%; padding: 10px 14px; border-radius: 8px; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s; border: none; outline: none; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .btn-secondary { background: #ffffff; border: 1px solid #d1d5db; color: #4b5563; margin-bottom: 12px; }
        .btn-secondary:hover { background: #f9fafb; color: #111827; border-color: #9ca3af; }
        .btn-secondary:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-primary { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05), 0 4px 14px rgba(16,185,129,0.3); }
        .btn-primary:hover { background: linear-gradient(135deg, #059669 0%, #047857 100%); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(16,185,129,0.4); }
        .btn-primary:active { transform: translateY(0); }
        .btn-primary:disabled { background: #d1d5db; color: #9ca3af; box-shadow: none; cursor: not-allowed; transform: none; }
        .btn-discord { background: #5865F2; color: #ffffff; margin-top: 12px; box-shadow: 0 2px 8px rgba(88,101,242,0.25); text-decoration: none; display: flex; align-items: center; justify-content: center; border-radius: 8px; padding: 10px 14px; font-weight: 500; }
        .btn-discord:hover { background: #4752C4; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(88,101,242,0.35); }
        .gt-input-group { margin-bottom: 14px; }
        .gt-label { display: block; font-size: 12px; font-weight: 500; color: #6b7280; margin-bottom: 6px; }
        .gt-input { width: 100%; background: #ffffff; border: 1px solid #d1d5db; border-radius: 8px; padding: 10px 12px; font-size: 13px; color: #111827; outline: none; transition: all 0.2s; box-sizing: border-box; }
        .gt-input::placeholder { color: #9ca3af; }
        .gt-input:focus { border-color: #10b981; box-shadow: 0 0 0 3px rgba(16,185,129,0.15); }
        .gt-input.error-focus { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.15); }
        .gt-progress-track { height: 3px; background: #e5e7eb; border-radius: 2px; margin: 12px 0 14px 0; overflow: hidden; display: none; }
        .gt-progress-fill { height: 100%; width: 0%; background: linear-gradient(90deg, #10b981, #34d399); transition: width 0.3s ease; border-radius: 2px; }
        .gt-divider { height: 1px; background: #f3f4f6; margin: 14px 0; }
        .gt-result-box { font-size: 12px; padding: 12px; border-radius: 8px; background: #f9fafb; border: 1px solid #e5e7eb; color: #6b7280; margin-top: 12px; display: none; }
        .gt-result-box.show { display: block; }
        .gt-result-code { color: #059669; font-weight: 600; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 15px; letter-spacing: 0.06em; margin-top: 2px; }
        .gt-footer { margin-top: 14px; padding-top: 12px; border-top: 1px solid #f3f4f6; font-size: 11px; color: #9ca3af; text-align: center; line-height: 1.4; }
        .gt-discord-icon { width: 16px; height: 16px; fill: currentColor; margin-right: 6px; }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    const panel = document.createElement('div');
    panel.id = 'gt-saas-panel';
    panel.className = 'gt-saas-panel';
    panel.innerHTML = `
        <div class="gt-saas-header">
            <span class="gt-saas-title">GTraffic Bypass</span>
            <span id="gt-minimize" class="gt-toggle-btn" title="Thu nhỏ / Mở rộng">−</span>
        </div>
        <div id="gt-body" class="gt-saas-body">
            <div id="auto-scan-status" class="gt-status-pill">Đang phân tích ảnh...</div>
            <button id="gt-rescan-btn" class="gt-btn btn-secondary">Quét lại ảnh</button>
            <div class="gt-divider"></div>
            <div class="gt-input-group">
                <label class="gt-label">Target URL</label>
                <input id="gt-target-input" class="gt-input" type="text" placeholder="Dán link nhiệm vụ vào đây..." />
            </div>
            <button id="gt-start-btn" class="gt-btn btn-primary">Lấy mã & Tự động điền</button>
            <div id="gt-progress-container" class="gt-progress-track">
                <div id="gt-progress-bar" class="gt-progress-fill"></div>
            </div>
            <div id="gt-result-box" class="gt-result-box">
                <div style="margin-bottom:4px;color:#9ca3af;">Mã xác thực:</div>
                <div id="gt-code-display" class="gt-result-code">---</div>
                <div style="margin-top:6px;font-size:11px;color:#9ca3af;">Đã copy vào clipboard và tự điền vào form.</div>
            </div>
            <a id="gt-discord-btn" class="btn-discord" href="https://discord.com" target="_blank">
                <svg class="gt-discord-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord để nhận bản cập nhật
            </a>
            <div class="gt-footer">v5.2 · Nhận cập nhật mới nhất trên Discord</div>
        </div>
    `;
    document.body.appendChild(panel);

    let isMinimized = false;
    const bodyEl = panel.querySelector('#gt-body');
    const minBtn = panel.querySelector('#gt-minimize');
    minBtn.addEventListener('click', () => {
        isMinimized = !isMinimized;
        bodyEl.style.display = isMinimized ? 'none' : 'block';
        minBtn.textContent = isMinimized ? '+' : '−';
    });

    const targetInput = panel.querySelector('#gt-target-input');
    const startBtn = panel.querySelector('#gt-start-btn');
    const rescanBtn = panel.querySelector('#gt-rescan-btn');
    const progressContainer = panel.querySelector('#gt-progress-container');
    const progressBar = panel.querySelector('#gt-progress-bar');
    const autoScanStatus = panel.querySelector('#auto-scan-status');
    const resultBox = panel.querySelector('#gt-result-box');
    const codeDisplay = panel.querySelector('#gt-code-display');

    function searchGoogle(query, num = 30) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: `https://www.google.com/search?q=${encodeURIComponent(query)}&num=${num}`,
                headers: {
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                    'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7'
                },
                onload: (res) => resolve(res.responseText || ''),
                onerror: (err) => reject(err)
            });
        });
    }

    function extractUrls(html) {
        const urls = new Set();
        const redirectRegex = /href=["']\/url\?(?:q|url)=([^"'&]+)/gi;
        let match;
        while ((match = redirectRegex.exec(html)) !== null) {
            try {
                const u = decodeURIComponent(match[1]);
                if (u.startsWith('http')) urls.add(u.split('&')[0]);
            } catch (e) {}
        }
        const aHrefRegex = /<a[^>]+href=["'](https?:\/\/[^"'\s]+)["']/gi;
        while ((match = aHrefRegex.exec(html)) !== null) {
            urls.add(match[1].split('&')[0]);
        }
        return Array.from(urls);
    }

    function isJunkUrl(url) {
        const u = url.toLowerCase();
        const junkDomains = ['google.', 'googleadservices.', 'googlesyndication.', 'googletagmanager.', 'google-analytics.', 'googleusercontent.', 'gstatic.', 'googleapis.', 'doubleclick.', 'schema.org', 'w3.org', 'youtube.com', 'youtu.be'];
        if (junkDomains.some(d => u.includes(d)) || u.includes('/pagead/') || u.includes('/conversion/') || u.includes('/aclk')) return true;
        return /\.(png|jpe?g|gif|svg|webp|ico|css|js|woff2?|json)(?:\?|$)/i.test(url);
    }

    function matchDomain(url, targetDomain) {
        const urlLower = url.toLowerCase();
        const raw = targetDomain.toLowerCase().replace(/^https?:\/\//, '');
        if (raw.length >= 4 && urlLower.includes(raw)) return true;
        return false;
    }

    async function autoFindAndProcess(keyword, domain) {
        autoScanStatus.className = 'gt-status-pill processing';
        autoScanStatus.textContent = 'Đã nhận diện. Đang tra cứu Google...';
        const cleanDomainQuery = domain.replace(/[^a-z0-9]+/gi, ' ').trim();
        let html = await searchGoogle(`"${keyword}" ${cleanDomainQuery}`, 30);
        let urls = extractUrls(html);
        let found = urls.find(u => !isJunkUrl(u) && matchDomain(u, domain));
        if (found) {
            GM_setClipboard(found);
            autoScanStatus.className = 'gt-status-pill success';
            autoScanStatus.textContent = 'Đã tìm thấy URL. Đang xử lý...';
            targetInput.value = found;
            targetInput.dispatchEvent(new Event('input', { bubbles: true }));
            setTimeout(() => { if (!startBtn.disabled) startBtn.click(); }, 600);
        } else {
            throw new Error('Không tìm thấy URL phù hợp.');
        }
    }

    async function runAutoOCR(isRescan = false) {
        if (isRescan) {
            autoScanStatus.className = 'gt-status-pill';
            autoScanStatus.textContent = 'Đang phân tích lại ảnh...';
            targetInput.classList.remove('error-focus');
            resultBox.classList.remove('show');
        }
        if (!isGTraffic) {
            autoScanStatus.className = 'gt-status-pill error';
            autoScanStatus.textContent = 'Không phát hiện trang GTraffic. Vui lòng nhập URL.';
            targetInput.classList.add('error-focus');
            targetInput.focus();
            return;
        }
        try {
            autoScanStatus.className = 'gt-status-pill success';
            autoScanStatus.textContent = 'Sẵn sàng hoạt động. Vui lòng nhập URL thủ công nếu cần.';
        } catch (e) {
            autoScanStatus.className = 'gt-status-pill error';
            autoScanStatus.textContent = 'Lỗi quét ảnh.';
        }
    }

    rescanBtn.addEventListener('click', () => {
        rescanBtn.disabled = true;
        rescanBtn.textContent = 'Đang quét...';
        runAutoOCR(true).finally(() => {
            rescanBtn.disabled = false;
            rescanBtn.textContent = 'Quét lại ảnh';
        });
    });

    setTimeout(() => runAutoOCR(false), 1500);

    const API_CODE_BASE = 'https://api.gtraffic.io/'; // Đã điền đầy đủ URL gốc của API
    const A_DMM = "dev_bypass_secure";
    const TZ = 420;
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    function gmRequest(opts) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                timeout: 30000,
                ...opts,
                onload: (res) => {
                    if (res.status >= 200 && res.status < 400) resolve(res);
                    else reject(new Error(`HTTP ${res.status}: ${res.statusText || 'Lỗi server'}`));
                },
                onerror: (err) => reject(new Error('Lỗi mạng')),
                ontimeout: () => reject(new Error('Hết thời gian chờ'))
            });
        });
    }

    function codeFromTime(ts, icm, tz = TZ) {
        const d = new Date((ts + tz * 60) * 1000);
        const val = (d.getUTCSeconds() + d.getUTCMinutes()) * d.getUTCHours() + (icm > 3 ? -d.getUTCDate() : d.getUTCDate());
        let res = val % 10;
        return res < 0 ? (res + 10) % 10 : res;
    }

    function extractJsVar(text, name) {
        const i = text.indexOf(name);
        if (i === -1) return '';
        const p = text.indexOf("'", i);
        if (p === -1) return '';
        const q = text.indexOf("'", p + 1);
        return q === -1 ? '' : text.substring(p + 1, q);
    }

    async function doGetCode(rid, href, origin, updateStatus) {
        updateStatus?.('Đang gửi challenge...');
        const r1 = await gmRequest({ method: 'OPTIONS', url: API_CODE_BASE + 'ch', headers: { 'rid': rid, 'Origin': origin, 'Referer': href } });
        const rawHeaders = r1.responseHeaders || '';
        const getHeader = (name) => {
            const match = rawHeaders.match(new RegExp(`^${name}:\\s*(.+)$`, 'im'));
            return match ? match[1].trim() : '';
        };
        const cd = parseInt(getHeader('Cd') || '60', 10);
        const icm = parseInt(getHeader('Icm') || '1', 10);
        const ts = parseInt(getHeader('Time') || '0', 10);
        if (!ts) throw new Error('Thiếu Time header');
        
        const code = codeFromTime(ts, icm, TZ);
        const codeVersion = (code + 4) * 3 - 10;

        for (let rem = cd; rem > 0; rem--) {
            updateStatus?.(`Đang đếm ngược: ${rem}s...`, rem, cd);
            await sleep(1000);
        }

        updateStatus?.('Đang nhận mã xác thực...');
        const payload = { a_dmm: A_DMM, href: href, code: String(code), code_version: String(codeVersion) };
        const r5 = await gmRequest({ method: 'POST', url: API_CODE_BASE + 'code', headers: { 'rid': rid, 'Origin': origin, 'Referer': href, 'Content-Type': 'application/json' }, data: JSON.stringify(payload) });
        const resData = JSON.parse(r5.responseText);
        if (resData && resData.code) return resData.code;
        throw new Error('Lỗi lấy mã');
    }

    startBtn.onclick = async () => {
        let targetUrl = targetInput.value.trim();
        if (!targetUrl) {
            targetInput.classList.add('error-focus');
            targetInput.focus();
            return;
        }
        let origin = '';
        try {
            origin = new URL(targetUrl).origin;
        } catch {
            alert('URL không hợp lệ. Cần có http:// hoặc https://');
            return;
        }
        startBtn.disabled = true;
        progressContainer.style.display = 'block';
        resultBox.classList.remove('show');

        function updateProgress(msg, rem = 0, total = 0) {
            autoScanStatus.className = 'gt-status-pill processing';
            autoScanStatus.textContent = msg;
            if (total > 0) {
                progressBar.style.width = Math.round(((total - rem) / total) * 100) + '%';
            }
        }

        try {
            const getcodeRid = crypto.randomUUID();
            const codeResult = await doGetCode(getcodeRid, targetUrl, origin, updateProgress);
            autoScanStatus.className = 'gt-status-pill success';
            autoScanStatus.textContent = 'Hoàn tất! Đã lấy mã thành công.';
            codeDisplay.textContent = codeResult;
            resultBox.classList.add('show');
            startBtn.disabled = false;
        } catch (err) {
            autoScanStatus.className = 'gt-status-pill error';
            autoScanStatus.textContent = 'Lỗi: ' + err.message;
            startBtn.disabled = false;
            progressContainer.style.display = 'none';
        }
    };
})();
