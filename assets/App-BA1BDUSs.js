import{j as e,r as v}from"./index-RD-i6Uir.js";const ke=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],k=(t,o)=>{const r=String(t);return o?r.replace(/[0-9]/g,n=>ke[parseInt(n)]):r},J=(t,o)=>{try{return new Intl.DateTimeFormat(t,o)}catch{return null}},Z=J("ar-SA",{day:"2-digit",month:"2-digit",year:"numeric",calendar:"gregory"}),K=J("ar-SA-u-ca-islamic-umalqura",{day:"2-digit",month:"2-digit",year:"numeric",calendar:"islamic-umalqura"}),Ne=t=>K?K.format(t).replace(" هـ",""):"N/A",X=J("ar-SA",{weekday:"long"}),z=t=>{if(Z)return Z.format(t);const o=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();return`${o}/${r}/${n}`},_=t=>Ne(t),De=t=>X?X.format(t):["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"][t.getDay()],Q=t=>{if(!t)return null;const o=new Date(t);return isNaN(o.getTime())?null:o},ee=(t,o)=>{const r=Q(t),n=Q(o);if(!r||!n||n<r)return[];const i=[];let m=new Date(r.getTime());for(;m<=n;)i.push({gregorianDate:new Date(m.getTime()),topic:""}),m.setDate(m.getDate()+1);return i},Ce=t=>{if(!t.days.length){alert("لا يوجد جدول لتصديره.");return}const o={version:5,...t,days:t.days.map((i,m)=>({index:m+1,topic:i.topic,gregorianDate:i.gregorianDate.toISOString(),isSpecial:i.isSpecial||!1}))},r=new Blob([JSON.stringify(o,null,2)],{type:"application/json;charset=utf-8;"}),n=`plan_${t.startDate}_to_${t.endDate}.json`;Y(r,n)},Te=t=>{if(!t.length){alert("لا يوجد جدول لتصديره.");return}const o=t.map(n=>n.topic.trim().replace(/\r?\n/g," ")).filter(Boolean).join(`\r
`);if(!o){alert("لا توجد موضوعات مكتوبة لتصديرها.");return}const r=new Blob(["\uFEFF"+o],{type:"text/plain;charset=utf-8;"});Y(r,"topics.txt")},Y=(t,o)=>{const r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=o,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)},ne=()=>`
    body { font-family: 'Tajawal', sans-serif !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    @page { size: A4 landscape; margin: 0.5cm; }
    
    /* Removed block display forcing to allow inline dates */
    
    /* explicit background colors for print/export consistency */
    .bg-yellow-100 { background-color: #fefcbf !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .bg-yellow-200 { background-color: #fef08a !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .bg-gray-200 { background-color: #e2e8f0 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .bg-white { background-color: #ffffff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    
    /* Header Grid Layout */
    .print-header-row { 
        display: grid !important; 
        grid-template-columns: 20% 60% 20% !important;
        align-items: center !important; 
        width: 100% !important; 
        direction: rtl !important;
    }
    
    /* Columns */
    .print-col-right { 
        text-align: right !important; 
        display: flex !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
    }
    .print-col-center { 
        text-align: center !important; 
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
    }
    .print-col-left { 
        text-align: center !important; 
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important; 
        justify-content: center !important;
        gap: 0px !important; /* Reduced gap from 2px */
    }
    
    /* Typography - Reduced Sizes for compact header */
    .print-text-lg { font-size: 14pt !important; font-weight: bold !important; margin-bottom: 3px !important; white-space: nowrap !important; }
    .print-text-base { font-size: 11pt !important; font-weight: bold !important; margin-bottom: 1px !important; white-space: nowrap !important; }
    .print-text-sm { font-size: 9pt !important; margin-bottom: 0px !important; white-space: nowrap !important; }
    
    /* Logo sizing - Increased for better print visibility */
    img.header-logo-img { height: 85px !important; width: auto !important; max-width: 100% !important; object-fit: contain !important; }

    /* Table Styles */
    .planner-table-for-print { min-width: 0 !important; width: 100% !important; table-layout: fixed !important; border-collapse: collapse !important; }
    .planner-table-for-print th, .planner-table-for-print td { border: 1px solid #a0aec0 !important; padding: 4px !important; word-wrap: break-word !important; text-align: center !important; vertical-align: middle !important; font-size: 10pt !important; }
    .planner-table-for-print th { font-weight: bold !important; background-color: #f7fafc !important; }
    .planner-table-for-print tr { break-inside: avoid; }
    
    /* Cards Styles */
    .cards-grid { 
        display: grid !important; 
        grid-template-columns: repeat(4, 1fr) !important; 
        gap: 0.25rem !important; 
    }
    .card-item { 
        break-inside: avoid !important; 
        page-break-inside: avoid !important;
        border: 1px solid #e2e8f0 !important; 
        border-radius: 0.25rem !important; 
        box-shadow: none !important; 
        background-color: #fff !important; 
        padding: 0.25rem !important; /* Reduced padding */
        display: flex !important; 
        flex-direction: column !important; 
        font-size: 8pt !important; /* Reduced from 9pt */
        height: fit-content !important;
    }
    .card-item .card-header { display: flex !important; justify-content: space-between !important; align-items: baseline !important; border-bottom: 1px solid #e2e8f0 !important; padding-bottom: 0.15rem !important; margin-bottom: 0.15rem !important; }
    .card-item h3 { font-weight: bold !important; font-size: 9pt !important; /* Reduced from 10pt */ color: #2b6cb0 !important; }
    .card-item .card-date { font-size: 7pt !important; /* Reduced from 8pt */ color: #718096 !important; text-align: left !important; }
    .card-item ol { list-style-type: decimal !important; list-style-position: inside !important; padding-right: 0.25rem !important; color: #2d3748 !important; flex-grow: 1 !important; margin: 0; }
    .card-item ol li { margin-bottom: 0px !important; padding-bottom: 0 !important; line-height: 1.25 !important; }
    .card-item p.text-gray-400 { color: #a0aec0 !important; text-align: center !important; flex-grow: 1 !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 0.5rem 0 !important; }

    /* Hiding classes for week visibility feature */
    .print\\:hidden { display: none !important; }

    /* Print Card Header Overrides (Vertical Layout) */
    .print-card-header { 
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        padding-bottom: 2px !important;
    }
    .print-card-week {
        width: 100% !important;
        justify-content: center !important;
        margin-bottom: 2px !important;
    }
    .print-card-date {
        align-items: center !important;
        width: 100% !important;
        text-align: center !important;
    }
    
    /* Footer Single Line */
    .print-footer-row {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 3rem !important;
    }
`,Ee=async t=>{const o=document.getElementById("printable-area-content"),{meta:r,title:n}=t,{useEasternDigits:i}=r;if(!o){alert("حدث خطأ: لا يمكن العثور على المحتوى للتصدير.");return}const m=`
      <div class="mb-2" id="main-header">
        <div class="print-header-row">
          <!-- Right Column: Logo -->
          <div class="print-col-right">
             <img id="header-logo" src="${r.logo||""}" alt="شعار" class="header-logo-img" style="display: ${r.logo?"inline-block":"none"}" />
          </div>
          
          <!-- Center Column -->
          <div class="print-col-center">
             <div id="header-title" class="print-text-lg">${k(n,i)}</div>
             <div id="header-admin" class="print-text-base">${k(`إدارة التعليم: ${r.administration}`,i)}</div>
             <div id="header-school" class="print-text-base">${k(`المدرسة: ${r.school}`,i)}</div>
          </div>
          
          <!-- Left Column -->
          <div class="print-col-left">
             <div id="header-year" class="print-text-sm">${k(`العام: ${r.academicYear}`,i)}</div>
             <div id="header-term" class="print-text-sm">${k(`الفصل: ${r.term}`,i)}</div>
             <div id="header-subject" class="print-text-sm">${k(`المادة: ${r.subject}`,i)}</div>
             <div id="header-grade" class="print-text-sm">${k(`الصف: ${r.grade}`,i)}</div>
          </div>
        </div>
        <!-- Explicit Border DIV matching Layout.tsx -->
        <div class="mt-2 pb-2 border-b-2 border-black" style="margin-top: 0.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid black;"></div>
      </div>
  `,y=r.teacherName?k(`اسم المعلم/ـة: ${r.teacherName}`,r.useEasternDigits):"",x=r.teacherName?k("التوقيع: ........................",r.useEasternDigits):"",d=`
    <div class="mt-8 text-center text-sm font-bold flex justify-center items-center gap-12 print-footer-row">
        <span id="footer-teacher">${y}</span>
        <span id="footer-signature">${x}</span>
    </div>
  `,h=o.cloneNode(!0);h.querySelectorAll("textarea[data-row-index]").forEach(I=>{var C;const W=I,F=document.createElement("div");F.innerHTML=W.value.replace(/\n/g,"<br />");const b=W.closest("tr"),f=b&&b.classList.contains("print:hidden");F.className=`p-2 w-full h-full ${W.disabled?"text-center":""}`,(W.disabled||f)&&F.classList.add("bg-gray-200"),(C=W.parentNode)==null||C.replaceChild(F,W)});const c=Array.from(document.querySelectorAll("style")).map(I=>I.innerText).join(`
`),l=Array.from(document.querySelectorAll("link[rel='stylesheet'], link[rel='preconnect']")).map(I=>I.outerHTML).join(`
`),u=`
  <div id="settings-panel" class="settings-panel" style="display: none;">
      <div class="settings-card">
          <h2 class="settings-title">إعدادات الترويسة والطباعة</h2>
          <div class="grid-form">
                <div class="form-group">
                    <label>إدارة التعليم:</label>
                    <input type="text" id="input-admin" value="${r.administration}" oninput="updateText('header-admin', 'إدارة التعليم: ' + this.value)">
                </div>
                <div class="form-group">
                    <label>المدرسة:</label>
                    <input type="text" id="input-school" value="${r.school}" oninput="updateText('header-school', 'المدرسة: ' + this.value)">
                </div>
                <div class="form-group">
                    <label>العام الدراسي:</label>
                    <input type="text" id="input-year" value="${r.academicYear}" oninput="updateText('header-year', 'العام: ' + this.value)">
                </div>
                <div class="form-group">
                    <label>الفصل الدراسي:</label>
                    <input type="text" id="input-term" value="${r.term}" oninput="updateText('header-term', 'الفصل: ' + this.value)">
                </div>
                <div class="form-group">
                    <label>المادة:</label>
                    <input type="text" id="input-subject" value="${r.subject}" oninput="updateText('header-subject', 'المادة: ' + this.value)">
                </div>
                <div class="form-group">
                    <label>الصف:</label>
                    <input type="text" id="input-grade" value="${r.grade}" oninput="updateText('header-grade', 'الصف: ' + this.value)">
                </div>
                <div class="form-group">
                    <label>اسم المعلم/ـة:</label>
                    <input type="text" id="input-teacher" value="${r.teacherName}" oninput="updateTeacher(this.value)">
                </div>
            </div>
            
            <div class="form-group logo-group">
                 <label>شعار الجهة:</label>
                 <div class="logo-input-wrapper">
                    <label for="logo-upload" class="btn-upload">تحميل شعار</label>
                    <input type="file" id="logo-upload" accept="image/*" onchange="updateLogo(this)">
                    <button class="btn-remove" onclick="removeLogo()">إزالة</button>
                 </div>
            </div>
      </div>
  </div>
  `,E=`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.title}</title>
  ${l}
  <style>
      ${c}
      ${ne()}
      
      /* UI Styles for Exported File */
      body { background-color: #f3f4f6; padding: 20px; margin: 0; }
      .container { max-width: 1200px; margin: 0 auto; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
      
      /* Toolbar */
      .export-toolbar { display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; }
      .btn { padding: 8px 20px; border-radius: 6px; font-weight: 600; color: white; border: none; cursor: pointer; display: flex; align-items: center; gap: 8px; font-family: 'Tajawal', sans-serif; transition: all 0.2s; }
      .btn:hover { transform: translateY(-1px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
      .btn-print { background-color: #2563eb; }
      .btn-print:hover { background-color: #1d4ed8; }
      .btn-settings { background-color: #4b5563; }
      .btn-settings:hover { background-color: #374151; }
      
      /* Inline Settings Panel Styles */
      .settings-panel { margin-bottom: 1.5rem; max-width: 1200px; margin-left: auto; margin-right: auto; }
      .settings-card { 
         padding: 1.5rem; 
         border: 1px solid #d1d5db; 
         border-radius: 0.5rem; 
         background-color: white; 
         box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); 
      }
      .settings-title {
         font-size: 1.25rem;
         font-weight: 700;
         color: #1f2937;
         margin-bottom: 1rem;
         border-bottom: 1px solid #e5e7eb;
         padding-bottom: 0.5rem;
         margin-top: 0;
      }
      
      .grid-form { display: grid; gap: 1rem; }
      .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
      
      @media (min-width: 768px) {
        .form-group { 
            display: grid; 
            grid-template-columns: 1fr 2fr; 
            align-items: center; 
            gap: 0.5rem;
        }
        .form-group label { text-align: left; padding-left: 0.5rem; }
        .logo-group { display: grid; grid-template-columns: 1fr 2fr; align-items: center; }
        .logo-group label { text-align: left; padding-left: 0.5rem; }
      }
      
      .form-group label { font-weight: 600; color: #374151; font-size: 0.95rem; }
      .form-group input[type="text"] { 
        padding: 0.5rem; 
        border: 1px solid #d1d5db; 
        border-radius: 0.375rem; 
        font-size: 0.95rem; 
        width: 100%; 
        box-sizing: border-box;
      }
      .form-group input[type="text"]:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 2px #bfdbfe; }
      
      .logo-input-wrapper { display: flex; align-items: center; gap: 12px; }
      .btn-upload { background-color: #dbeafe; color: #1e40af; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: background 0.2s; font-size: 0.9rem; }
      .btn-upload:hover { background-color: #bfdbfe; }
      .btn-remove { color: #ef4444; background: none; border: none; font-weight: 600; cursor: pointer; }
      .btn-remove:hover { color: #dc2626; text-decoration: underline; }
      #logo-upload { display: none; }

      @media print {
        body { margin: 0; padding: 0; background: white; }
        .container { box-shadow: none; padding: 0; margin: 0; max-width: none; border-radius: 0; }
        .export-toolbar, .settings-panel { display: none !important; }
        .print-hidden { display: none !important; } 
        
        /* Force Header Repeat in Exported HTML */
        thead { display: table-header-group; } 
        tfoot { display: table-footer-group; }
      }
  </style>
</head>
<body class="bg-gray-100">
  <div class="export-toolbar">
      <button class="btn btn-print" onclick="window.print()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        طباعة / PDF
      </button>
      <button class="btn btn-settings" id="btn-settings-toggle" onclick="toggleSettings()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0 .73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0 2l.15.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        <span id="settings-btn-text">إعدادات الترويسة</span>
      </button>
  </div>

  ${u}

  <!-- WRAPPED IN TABLE FOR PRINT HEADER REPETITION -->
  <div class="container">
      <table style="width: 100%; border: none; border-collapse: collapse;">
        <thead>
            <tr>
                <td style="border: none; padding: 0;">
                    ${m}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: none; padding: 0;">
                    <div class="mt-6">
                        ${h.innerHTML}
                    </div>
                    <!-- Footer appended here to avoid repetition -->
                    ${d}
                </td>
            </tr>
        </tbody>
        <!-- No TFOOT anymore to prevent page repetition -->
      </table>
  </div>

  <script>
    function toggleSettings() {
        const panel = document.getElementById('settings-panel');
        const btnText = document.getElementById('settings-btn-text');
        if (panel.style.display === 'none') {
            panel.style.display = 'block';
            btnText.innerText = 'إغلاق الإعدادات';
        } else {
            panel.style.display = 'none';
            btnText.innerText = 'إعدادات الترويسة';
        }
    }
    
    function updateText(elementId, prefix) {
        const el = document.getElementById(elementId);
        if(el) el.innerText = prefix;
    }

    function updateTeacher(name) {
        const tEl = document.getElementById('footer-teacher');
        const sEl = document.getElementById('footer-signature');
        if(tEl) tEl.innerText = name ? 'اسم المعلم/ـة: ' + name : '';
        if(sEl) sEl.innerText = name ? 'التوقيع: ........................' : '';
    }

    function updateLogo(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var img = document.getElementById('header-logo');
                img.src = e.target.result;
                img.style.display = 'inline-block';
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    function removeLogo() {
        var img = document.getElementById('header-logo');
        img.src = '';
        img.style.display = 'none';
        document.getElementById('logo-upload').value = '';
    }
  <\/script>
</body>
</html>
`,j=new Blob([E.trim()],{type:"text/html;charset=utf-8;"}),L=`school_plan_${t.startDate||"new"}.html`;Y(j,L)},te=t=>{var d,h;const o=document.getElementById("printable-area-content"),r=(d=document.getElementById("printable-header-content"))==null?void 0:d.innerHTML,n=(h=document.getElementById("printable-footer-content"))==null?void 0:h.innerHTML;if(!o||!r||!n){alert("حدث خطأ أثناء محاولة الطباعة.");return}const i=o.cloneNode(!0);i.querySelectorAll("textarea[data-row-index]").forEach(c=>{var I;const l=c,u=document.createElement("div");u.style.whiteSpace="pre-wrap",u.style.wordWrap="break-word",u.textContent=l.value;const E=l.disabled,j=l.closest("tr"),L=j&&j.classList.contains("print:hidden");u.className=`p-2 w-full h-full ${E||L?"text-center":""}`,(I=l.parentNode)==null||I.replaceChild(u,l)});const m=Array.from(document.querySelectorAll("style")).map(c=>c.innerText).join(`
`),y=Array.from(document.querySelectorAll("link[rel='stylesheet'], link[rel='preconnect']")).map(c=>c.outerHTML).join(`
`),x=window.open("","_blank");if(!x){alert("فشل فتح نافذة الطباعة.");return}x.document.write(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8" />
        <title>${t}</title>
        ${y}
        <style>
            ${m}
            ${ne()}
            /* Ensure the wrapper table takes full width but doesn't add borders */
            body { margin: 0; padding: 0; }
            table.print-wrapper { width: 100%; border-collapse: collapse; border: none; }
            table.print-wrapper td { border: none; padding: 0; }
            table.print-wrapper thead { display: table-header-group; }
            table.print-wrapper tfoot { display: table-footer-group; }
        </style>
    </head>
    <body>
        <table class="print-wrapper">
            <thead>
                <tr>
                    <td>
                        ${r}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        ${i.innerHTML}
                        ${n}
                    </td>
                </tr>
            </tbody>
            <!-- No TFOOT to avoid repetition -->
        </table>
    </body>
    </html>`),x.document.close(),setTimeout(()=>{try{x.focus(),x.print(),x.close()}catch(c){console.error(c),x.close()}},1200)},We=async t=>{var i,m;const o=document.getElementById("printable-area-content"),r=(i=document.getElementById("printable-header-content"))==null?void 0:i.innerHTML,n=(m=document.getElementById("printable-footer-content"))==null?void 0:m.innerHTML;if(!o){alert("لا يوجد محتوى للنسخ.");return}try{const y=o.cloneNode(!0);y.querySelectorAll("textarea").forEach(u=>{var L;const E=u,j=document.createElement("div");j.innerHTML=E.value.replace(/\n/g,"<br>"),j.style.whiteSpace="pre-wrap",(L=E.parentNode)==null||L.replaceChild(j,E)}),y.querySelectorAll(".print\\:hidden").forEach(u=>u.remove());const x=`
      <html dir="rtl">
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Tajawal', sans-serif; }
            table { border-collapse: collapse; width: 100%; }
            th, td { border: 1px solid black; padding: 5px; text-align: center; }
          </style>
        </head>
        <body>
          <h2 style="text-align: center; margin-bottom: 20px;">${t}</h2>
          ${r?`<div style="margin-bottom: 20px;">${r}</div>`:""}
          ${y.innerHTML}
          ${n?`<div style="margin-top: 20px;">${n}</div>`:""}
        </body>
      </html>
    `,d=new Blob([x],{type:"text/html"}),h=new Blob([y.innerText],{type:"text/plain"}),c=window.ClipboardItem;if(!c){alert("متصفحك لا يدعم النسخ المباشر.");return}const l=[new c({"text/html":d,"text/plain":h})];await navigator.clipboard.write(l),alert("تم نسخ الجدول إلى الحافظة.")}catch(y){console.error("Copy failed:",y),alert("فشل النسخ إلى الحافظة. تأكد من أن المتصفح يدعم هذه الميزة.")}},Le=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors",children:e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),q=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),oe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),se=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("line",{x1:"10",y1:"9",x2:"8",y2:"9"})]}),ae=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1"}),e.jsx("path",{d:"M14 12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1"})]}),Ie=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),ie=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),G=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0 .73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0 2l.15.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),le=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M15 2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M9 2v4h6V2"}),e.jsx("path",{d:"M12 12v6"}),e.jsx("path",{d:"m15 15-3 3-3-3"})]}),de=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),ce=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),pe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("line",{x1:"15",y1:"9",x2:"12.5",y2:"9"}),e.jsx("path",{d:"M10 9H8"}),e.jsx("path",{d:"M15 13h-2.5"}),e.jsx("path",{d:"M10 13H8"}),e.jsx("path",{d:"M15 5H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"}),e.jsx("rect",{width:"8",height:"8",x:"12",y:"9",rx:"2"}),e.jsx("path",{d:"M16 13v4"}),e.jsx("path",{d:"M14 15h4"})]}),ge=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),e.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),me=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),$e=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e.jsx("path",{d:"M12 17h.01"})]}),he=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("path",{d:"m18 5-3-3-7.2 7.2a3 3 0 0 0-1.06 2.12V18h5.66a3 3 0 0 0 2.12-1.06Z"}),e.jsx("path",{d:"m9 12 2 2"}),e.jsx("path",{d:"M14.5 5.5 16 4 20 8l-1.5 1.5"}),e.jsx("path",{d:"M12 15v6"}),e.jsx("path",{d:"M17 11v-1a2 2 0 0 0-2-2h-1"})]}),Se=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("polyline",{points:"5 9 2 12 5 15"}),e.jsx("polyline",{points:"9 5 12 2 15 5"}),e.jsx("polyline",{points:"15 19 12 22 9 19"}),e.jsx("polyline",{points:"19 9 22 12 19 15"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"})]}),xe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[e.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),ue=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[e.jsx("path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}),e.jsx("path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}),e.jsx("path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}),e.jsx("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),B=({onClick:t,children:o,className:r="bg-blue-600 hover:bg-blue-700",disabled:n=!1,title:i})=>e.jsx("button",{type:"button",onClick:t,disabled:n,title:i,className:`flex items-center justify-center gap-2 px-6 py-2 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${r} ${n?"opacity-50 cursor-not-allowed":"hover:scale-105"}`,children:o}),Me=({onPrint:t,onCopy:o,onPasteTopics:r,onClearAllTopics:n,onExportText:i,onExportJson:m,onExportHtml:y,onImportClick:x,onHelpClick:d,onConfigClick:h,onViewModeChange:c,currentViewMode:l,isDataActionsDisabled:u,isConfigVisible:E,showHtmlExport:j=!1})=>e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 print:hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsxs(B,{onClick:t,disabled:u,title:"طباعة الخطة أو حفظها كملف PDF",children:[e.jsx(q,{})," طباعة / PDF"]}),e.jsxs(B,{onClick:o,disabled:u,className:"bg-green-600 hover:bg-green-700",children:[e.jsx(oe,{})," نسخ للـ Word"]}),e.jsxs(B,{onClick:c,disabled:u,className:"bg-teal-600 hover:bg-teal-700",title:"تبديل طريقة العرض بين الجدول والمربعات",children:[e.jsx(de,{})," ",l==="table"?"عرض المربعات":"عرض الجدول"]}),e.jsxs(B,{onClick:r,disabled:u,className:"bg-purple-600 hover:bg-purple-700",title:"لصق قائمة من الموضوعات من الحافظة وتوزيعها على الأيام",children:[e.jsx(le,{})," لصق الموضوعات"]}),e.jsxs(B,{onClick:n,disabled:u,className:"bg-red-600 hover:bg-red-700",title:"مسح جميع الموضوعات من الجدول لإعادة التعبئة",children:[e.jsx(ce,{})," مسح الموضوعات"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsxs(B,{onClick:i,disabled:u,title:"تصدير قائمة الموضوعات كملف نصي",children:[e.jsx(se,{})," تصدير نصي"]}),e.jsxs(B,{onClick:m,disabled:u,title:"حفظ العمل بالكامل في ملف يمكن استيراده لاحقًا",children:[e.jsx(ae,{})," تصدير JSON"]}),j&&e.jsxs(B,{onClick:y,disabled:u,title:"تصدير كملف HTML تفاعلي (للمدارس)",children:[e.jsx(Ie,{})," تصدير HTML"]}),e.jsxs(B,{onClick:x,className:"bg-gray-600 hover:bg-gray-700",title:"استيراد ملف عمل تم حفظه مسبقًا",children:[e.jsx(ie,{})," استيراد JSON"]}),e.jsxs(B,{onClick:h,className:"bg-gray-600 hover:bg-gray-700",children:[e.jsx(G,{})," ",E?"إغلاق الإعدادات":"فتح الإعدادات"]}),e.jsxs(B,{onClick:d,className:"bg-indigo-600 hover:bg-indigo-700",title:"عرض دليل الاستخدام",children:[e.jsx($e,{})," مساعدة"]})]})]}),He=({onPrint:t,onConfigClick:o,isConfigVisible:r})=>e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 print:hidden",children:[e.jsxs(B,{onClick:t,children:[e.jsx(q,{})," طباعة / PDF"]}),e.jsxs(B,{onClick:o,className:"bg-gray-600 hover:bg-gray-700",children:[e.jsx(G,{}),r?"إغلاق الإعدادات":"فتح الإعدادات"]})]}),Be=({title:t,onTitleChange:o,isReadOnly:r=!1})=>{const n=v.useRef(null),i=m=>o(m.currentTarget.innerText);return e.jsxs("header",{className:"text-center mb-8 print:hidden",children:[e.jsxs("div",{className:"group inline-flex items-center gap-2 cursor-text",onClick:()=>{var m;return!r&&((m=n.current)==null?void 0:m.focus())},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800",children:r?e.jsx("span",{className:"px-2 py-1",children:t}):e.jsx("span",{ref:n,contentEditable:!0,suppressContentEditableWarning:!0,onBlur:i,className:"px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50",style:{minWidth:"100px",display:"inline-block"},children:t})}),!r&&e.jsx("div",{className:"title-icon","aria-hidden":"true",title:"العنوان قابل للتعديل",children:e.jsx(Le,{})})]}),r&&e.jsx("p",{className:"text-gray-500 mt-2",children:'هذه نسخة قابلة للتخصيص والطباعة. استخدم زر "إعداد الترويسة" لتعديل بياناتك.'})]})},Fe=()=>e.jsxs("footer",{className:"mt-8 text-center p-4 bg-white rounded-lg shadow-sm",children:[e.jsx("a",{href:"https://t.me/Interact2030",target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-blue-600 transition-colors text-sm",children:"برمجة و تصميم/ ملتقى التعليم التفاعلي بملتقى معلمي ومعلمات الرياضيات ـ المملكة العربية السعودية."}),e.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["تمت البرمجة باستخدام"," ",e.jsx("a",{href:"https://developers.google.com/studio",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Google Studio"})," ","و"," ",e.jsx("a",{href:"https://gemini.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Gemini"})," ","بواسطة"," ",e.jsx("a",{href:"https://t.me/Interact2030",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline font-semibold",children:"ملتقى التعليم التفاعلي"}),"."]})]}),Ae=({onClose:t})=>{const o=[{icon:e.jsx(q,{}),name:"طباعة / PDF",desc:"لطباعة الخطة أو حفظها كملف PDF."},{icon:e.jsx(oe,{}),name:"نسخ للـ Word",desc:"لنسخ الجدول بتنسيقه ليتم لصقه مباشرة في برنامج Microsoft Word."},{icon:e.jsx(de,{}),name:"عرض المربعات/الجدول",desc:"للتبديل بين عرض الخطة كجدول تفصيلي أو كملخص أسبوعي."},{icon:e.jsx(le,{}),name:"لصق الموضوعات",desc:"للصق قائمة من الموضوعات من الحافظة وتوزيعها تلقائياً على أيام الدراسة."},{icon:e.jsx(ce,{}),name:"مسح الموضوعات",desc:"لمسح محتوى جميع الموضوعات في الجدول."},{icon:e.jsx(se,{}),name:"تصدير نصي",desc:"لتصدير قائمة الموضوعات فقط كملف نصي (.txt)."},{icon:e.jsx(ae,{}),name:"تصدير JSON",desc:"لحفظ العمل بالكامل في ملف يمكن استيراده لاحقاً لمتابعة العمل."},{icon:e.jsx(ie,{}),name:"استيراد JSON",desc:"لاستعادة عمل تم حفظه مسبقاً من ملف JSON."},{icon:e.jsx(G,{}),name:"فتح/إغلاق الإعدادات",desc:"لإظهار أو إخفاء لوحة إعدادات الترويسة والطباعة."}],r=[{icon:e.jsx(me,{}),name:"حذف اليوم المكرر",desc:"لحذف صف تم استنساخه. لا تكون فعالة إلا إذا كان تاريخ اليوم مكرراً."},{icon:e.jsx(pe,{}),name:"استنساخ اليوم",desc:"لإنشاء نسخة من الصف الحالي بنفس التاريخ، مفيد لإضافة نشاط آخر في نفس اليوم."},{icon:e.jsx(ge,{}),name:"مسح الموضوع",desc:"لتفريغ محتوى خانة الموضوعات فقط دون حذف الصف."},{icon:e.jsx(he,{}),name:"تلوين يوم مميز",desc:"لتمييز يوم بلون خاص (مثل يوم إجازة أو نشاط). اضغط مرة أخرى للإلغاء."},{icon:e.jsx(Se,{}),name:"سحب وإفلات لتبديل الموضوعات",desc:"اسحب أي صف وأفلته على صف آخر لتبديل محتوى الموضوعات بينهما بسرعة وسهولة."}];return e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 print:hidden",onClick:t,children:e.jsxs("div",{className:"bg-white rounded-lg shadow-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto",onClick:n=>n.stopPropagation(),children:[e.jsxs("div",{className:"flex justify-between items-center border-b pb-3 mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"دليل الاستخدام"}),e.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-800 text-3xl font-bold",children:"×"})]}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700 mt-6 mb-3",children:"أزرار شريط الأدوات"}),e.jsx("div",{className:"space-y-3",children:o.map(n=>e.jsxs("div",{className:"flex items-start gap-4 p-2 rounded-md bg-gray-50",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center",children:n.icon}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-800",children:n.name}),e.jsx("p",{className:"text-sm text-gray-600",children:n.desc})]})]},n.name))}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700 mt-8 mb-3",children:"أزرار الإجراءات في الجدول"}),e.jsx("div",{className:"space-y-3",children:r.map(n=>e.jsxs("div",{className:"flex items-start gap-4 p-2 rounded-md bg-gray-50",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center",children:n.icon}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-800",children:n.name}),e.jsx("p",{className:"text-sm text-gray-600",children:n.desc})]})]},n.name))}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx("button",{onClick:t,className:"px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700",children:"فهمت، إغلاق"})})]})})},Re=({meta:t,title:o})=>{const{useEasternDigits:r}=t;return e.jsxs("div",{className:"mb-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs px-2 print-header-row",children:[e.jsx("div",{className:"w-1/5 text-right print-col-right",children:t.logo&&e.jsx("img",{src:t.logo,alt:"شعار",className:"h-20 w-auto max-w-[150px] object-contain inline-block"})}),e.jsxs("div",{className:"w-3/5 text-center print-col-center",children:[o&&e.jsx("div",{className:"text-base font-bold text-black print-text-lg",children:k(o,r)}),t.administration&&e.jsx("div",{className:"print-text-base",children:k(`إدارة التعليم: ${t.administration}`,r)}),t.school&&e.jsx("div",{className:"print-text-base",children:k(`المدرسة: ${t.school}`,r)})]}),e.jsxs("div",{className:"w-1/5 text-center print-col-left",children:[t.academicYear&&e.jsx("div",{className:"print-text-sm",children:k(`العام: ${t.academicYear}`,r)}),t.term&&e.jsx("div",{className:"print-text-sm",children:k(`الفصل: ${t.term}`,r)}),t.subject&&e.jsx("div",{className:"print-text-sm",children:k(`المادة: ${t.subject}`,r)}),t.grade&&e.jsx("div",{className:"print-text-sm",children:k(`الصف: ${t.grade}`,r)})]})]}),e.jsx("div",{className:"mt-2 pb-2 border-b-2 border-black"})]})},Pe=({meta:t})=>e.jsx("div",{className:"mt-8 text-center text-sm font-bold flex justify-center items-center gap-12 print-footer-row",children:t.teacherName&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:k(`اسم المعلم/ـة: ${t.teacherName}`,t.useEasternDigits)}),e.jsx("span",{children:k("التوقيع: ........................",t.useEasternDigits)})]})}),Oe=({startDate:t,endDate:o,onDatesChange:r,onGenerate:n})=>e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6 print:hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"startDate",className:"font-semibold text-gray-700",children:"تاريخ البداية:"}),e.jsx("input",{type:"date",id:"startDate",value:t,onChange:i=>r(i.target.value,o),className:"p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"endDate",className:"font-semibold text-gray-700",children:"تاريخ النهاية:"}),e.jsx("input",{type:"date",id:"endDate",value:o,onChange:i=>r(t,i.target.value),className:"p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"})]})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx("button",{onClick:n,disabled:!t||!o,className:"px-8 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",children:"توليد الجدول"})}),e.jsx("p",{className:"text-center text-sm text-gray-500 mt-3",children:'اختر مدى التواريخ ثم اضغط على زر "توليد الجدول". سيؤدي استيراد ملف JSON إلى ملء هذه الحقول تلقائيًا وتوليد الجدول.'})]}),Ve=({meta:t,onSave:o,isReadOnly:r=!1})=>{const n=v.useRef(null),i=d=>{if(r)return;const{name:h,value:c,type:l,checked:u}=d.target;o({...t,[h]:l==="checkbox"?u:c})},m=d=>{var c;if(r)return;const h=(c=d.target.files)==null?void 0:c[0];if(h){const l=new FileReader;l.onloadend=()=>{o({...t,logo:l.result})},l.readAsDataURL(h)}},y=()=>{r||(o({...t,logo:""}),n.current&&(n.current.value=""))},x=[{id:"administration",label:"إدارة التعليم:",placeholder:"مثال: إدارة التعليم بمحافظة ..."},{id:"school",label:"المدرسة:",placeholder:"مثال: مدرسة ... الابتدائية"},{id:"term",label:"الفصل الدراسي:",placeholder:"مثال: الفصل الدراسي الأول"},{id:"academicYear",label:"العام الدراسي:",placeholder:"مثال: 1447 هـ / 2026 م"},{id:"subject",label:"المادة الدراسية:",placeholder:"مثال: الرياضيات"},{id:"grade",label:"الصف الدراسي:",placeholder:"مثال: الصف الرابع"},{id:"teacherName",label:"اسم المعلم/ـة:",placeholder:"مثال: أ. محمد بن أحمد"}];return e.jsxs("div",{className:"space-y-4",children:[x.map(d=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 items-center gap-2",children:[e.jsx("label",{htmlFor:d.id,className:"font-semibold text-gray-700 md:text-right",children:d.label}),e.jsx("input",{type:"text",id:d.id,name:d.id,value:t[d.id]||"",onChange:i,placeholder:d.placeholder,disabled:r,className:"col-span-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"})]},d.id)),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 items-center gap-2 pt-2",children:[e.jsx("label",{className:"font-semibold text-gray-700 md:text-right",children:"شعار الجهة:"}),e.jsxs("div",{className:"col-span-2 flex items-center gap-4",children:[e.jsx("input",{type:"file",accept:"image/*",ref:n,onChange:m,className:"hidden",id:"logo-upload",disabled:r}),e.jsx("button",{onClick:()=>{var d;return(d=n.current)==null?void 0:d.click()},disabled:r,className:"px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"تحميل شعار"}),t.logo&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:t.logo,alt:"الشعار الحالي",className:"h-12 w-12 object-contain border rounded-md"}),!r&&e.jsx("button",{onClick:y,className:"text-red-500 hover:text-red-700 font-semibold",children:"× إزالة"})]})]})]}),e.jsxs("div",{className:"flex items-center pt-2",children:[e.jsx("input",{type:"checkbox",id:"useEasternDigits",name:"useEasternDigits",checked:t.useEasternDigits,onChange:i,disabled:r,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"}),e.jsx("label",{htmlFor:"useEasternDigits",className:"mr-2 font-medium text-gray-700",children:"استخدام الأرقام الهندية (٠١٢٣٤٥٦٧٨٩)"})]}),e.jsxs("div",{className:"flex items-center pt-2",children:[e.jsx("input",{type:"checkbox",id:"hideWeekends",name:"hideWeekends",checked:t.hideWeekends,onChange:i,disabled:r,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"}),e.jsx("label",{htmlFor:"hideWeekends",className:"mr-2 font-medium text-gray-700",children:"تمييز عطلة نهاية الأسبوع (الجمعة والسبت)"})]})]})},re=({days:t,meta:o,onTopicChange:r,onTopicPaste:n,onDuplicateRow:i,onSwapTopics:m,onToggleSpecialDay:y,onClearTopic:x,onDeleteRow:d,onToggleWeekVisibility:h,isReadOnly:c=!1})=>{const[l,u]=v.useState(null),E=b=>{if(c)return;const f=b.target;if(f.tagName!=="TEXTAREA")return;const C=f.closest("tr");if(!(C!=null&&C.dataset.rowIndex))return;const H=parseInt(C.dataset.rowIndex,10);b.preventDefault();const N=b.clipboardData.getData("text").split(/\r?\n/);n(H,N)};if(t.length===0)return e.jsxs("div",{className:"text-center py-12 px-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300",children:[e.jsx("div",{className:"mx-auto text-gray-400 mb-4 w-12 h-12",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700",children:"لم يتم إنشاء جدول بعد"}),e.jsx("p",{className:"text-gray-500 mt-2",children:"الرجاء تحديد تاريخ بداية ونهاية لإنشاء جدول التوزيع."})]});const j=(b,f)=>{const C=b.toDateString();let H=0;for(const T of f)if(T.gregorianDate.toDateString()===C&&H++,H>1)return!0;return!1},L=[],I=o.hiddenWeeks||[];let W=-1,F=0;return t.forEach((b,f)=>{const C=b.gregorianDate.getDay(),H=f===0||C===0;H&&(W++,I.includes(W)||F++);let T=1;if(H)for(let N=f+1;N<t.length&&t[N].gregorianDate.getDay()!==0;N++)T++;L.push({...b,isFirstDayOfWeek:H,weekIndex:W,weekNumber:W+1,displayWeekNumber:F,weekRowSpan:T})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse text-sm planner-table-for-print",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-gray-100 print:bg-gray-100",children:["الأسبوع","م","اليوم","التاريخ","الموضوعات الدراسية","إجراءات"].map((b,f)=>e.jsx("th",{className:`p-3 border border-gray-300 font-bold text-gray-700 text-center ${f===4?"w-2/5":f===5?"w-32 print:hidden":""} ${f<4?"whitespace-nowrap":""}`,children:b},f))})}),e.jsx("tbody",{onPaste:E,children:L.map((b,f)=>{const C=b.gregorianDate.getDay(),H=C===5||C===6,T=o.hideWeekends&&H,N=I.includes(b.weekIndex||0);let R="even:bg-white odd:bg-gray-50";N?R="bg-gray-200 text-gray-400 print:hidden":b.isSpecial?R="bg-yellow-100 text-yellow-900":T&&(R="bg-gray-200 text-gray-500");const V=l===f?"border-t-4 border-blue-500":"";return e.jsxs("tr",{"data-row-index":f,className:`${R} ${V} print:break-inside-avoid`,draggable:!c&&!T&&!N,onDragStart:M=>{M.dataTransfer.setData("text/plain",f.toString()),M.currentTarget.style.opacity="0.5"},onDragEnd:M=>{M.currentTarget.style.opacity="1",u(null)},onDragOver:M=>M.preventDefault(),onDragEnter:M=>{M.preventDefault(),!T&&!N&&u(f)},onDrop:M=>{M.preventDefault();const O=parseInt(M.dataTransfer.getData("text/plain"),10);O!==f&&!T&&!N&&m&&m(O,f),u(null)},children:[b.isFirstDayOfWeek&&e.jsx("td",{className:`p-2 border border-gray-300 text-center align-middle font-bold ${N?"":"!bg-white"} text-gray-700 relative group`,rowSpan:b.weekRowSpan,children:e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("span",{children:k(b.displayWeekNumber||0,o.useEasternDigits)}),!c&&h&&e.jsx("button",{onClick:()=>h(b.weekIndex||0),className:"print:hidden opacity-20 group-hover:opacity-100 hover:text-blue-600 transition-opacity",title:N?"إظهار الأسبوع":"إخفاء الأسبوع (إجازة)",children:N?e.jsx(ue,{}):e.jsx(xe,{})})]})}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle",children:k(f+1,o.useEasternDigits)}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle whitespace-nowrap",children:De(b.gregorianDate)}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle",children:e.jsxs("div",{className:"text-xs font-semibold whitespace-nowrap text-gray-800",children:["(",k(_(b.gregorianDate),o.useEasternDigits),"هـ - ",k(z(b.gregorianDate),o.useEasternDigits),"م)"]})}),e.jsx("td",{className:"p-0 border border-gray-300 align-top",children:e.jsx("textarea",{"data-row-index":f,value:b.topic,onChange:c?void 0:M=>r(f,M.target.value),placeholder:N?"الأسبوع مخفي (إجازة)":"اكتب الموضوع هنا...",className:"w-full h-full min-h-[50px] p-2 border-0 bg-transparent resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-transparent disabled:cursor-not-allowed disabled:text-gray-500 disabled:text-center",rows:2,disabled:T||N,readOnly:c})}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle print:hidden",children:!c&&e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("button",{onClick:()=>d&&d(f),title:"حذف اليوم المكرر",className:"p-1 text-green-600 hover:bg-green-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:T||N||!j(b.gregorianDate,t),children:e.jsx(me,{})}),e.jsx("button",{onClick:()=>i&&i(f),title:"استنساخ هذا اليوم",className:"p-1 text-blue-600 hover:bg-blue-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:T||N,children:e.jsx(pe,{})}),e.jsx("button",{onClick:()=>x&&x(f),title:"مسح الموضوع",className:"p-1 text-red-600 hover:bg-red-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:T||N||!b.topic,children:e.jsx(ge,{})}),e.jsx("button",{onClick:()=>y&&y(f),title:"تلوين يوم مميز",className:`p-1 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${b.isSpecial?"text-yellow-600 bg-yellow-200":"text-gray-500 hover:bg-gray-200"}`,disabled:T||N,children:e.jsx(he,{})})]})})]},f)})})]})})},ze=({days:t,meta:o,onToggleWeekVisibility:r})=>{if(t.length===0)return null;const n=o.hiddenWeeks||[];let i=0;const m=t.reduce((y,x,d)=>((x.gregorianDate.getDay()===0||d===0)&&y.push([]),y[y.length-1].push(x),y),[]);return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 cards-grid",children:m.map((y,x)=>{const d=n.includes(x);d||i++;const h=d?"-":i,c=y[0].gregorianDate,l=y[y.length-1].gregorianDate,u=y.filter(j=>{const L=j.gregorianDate.getDay(),I=L===5||L===6;return!(o.hideWeekends&&I)&&j.topic&&j.topic.trim()!==""&&j.topic.trim()!=="--- عطلة نهاية الأسبوع ---"&&j.topic.trim()!=="--- إجازة رسمية ---"}),E=d?"bg-gray-100 border border-gray-300 opacity-60 print:hidden":"bg-white border border-gray-200";return e.jsxs("div",{className:`${E} rounded-lg shadow-sm p-4 flex flex-col print:shadow-none card-item`,children:[e.jsxs("div",{className:"flex justify-between items-center border-b pb-2 mb-3 card-header print-card-header",children:[e.jsxs("div",{className:"flex items-center gap-2 print-card-week",children:[e.jsxs("h3",{className:`font-bold text-lg whitespace-nowrap ${d?"text-gray-500":"text-blue-700"}`,children:["الأسبوع ",k(h,o.useEasternDigits)]}),r&&e.jsx("button",{onClick:()=>r(x),className:"print:hidden text-gray-400 hover:text-blue-600",title:d?"إظهار الأسبوع":"إخفاء الأسبوع",children:d?e.jsx(ue,{}):e.jsx(xe,{})})]}),e.jsx("div",{className:"text-xs text-left card-date flex flex-col items-end print-card-date",children:e.jsxs("span",{className:"block font-bold text-gray-800",children:["(",k(`${_(c)} - ${_(l)}`,o.useEasternDigits),"هـ | ",k(`${z(c)} - ${z(l)}`,o.useEasternDigits),"م)"]})})]}),d?e.jsx("p",{className:"text-gray-400 text-center flex-grow flex items-center justify-center py-4",children:"هذا الأسبوع مخفي (إجازة/توقف)."}):u.length>0?e.jsx("ol",{className:"list-decimal list-inside space-y-1 text-gray-800 pr-4 flex-grow",children:u.map((j,L)=>e.jsx("li",{children:j.isSpecial?e.jsx("span",{className:"bg-yellow-200 px-1 rounded",children:j.topic}):j.topic},L))}):e.jsx("p",{className:"text-gray-400 text-center flex-grow flex items-center justify-center py-4",children:"لا توجد موضوعات لهذا الأسبوع."})]},x)})})},Ye=({isStandalone:t=!1,showHtmlExport:o=!1,initialData:r=null})=>{const[n,i]=v.useState(()=>t&&r?r.title:"توزيع الموضوعات الدراسية"),[m,y]=v.useState(()=>t&&r&&r.days.length>0?r.startDate||r.days[0].gregorianDate.substring(0,10):""),[x,d]=v.useState(()=>t&&r&&r.days.length>0?r.endDate||r.days[r.days.length-1].gregorianDate.substring(0,10):""),[h,c]=v.useState(()=>t&&r?r.days.map(s=>({...s,gregorianDate:new Date(s.gregorianDate)})):[]),[l,u]=v.useState(()=>t&&r?r.meta:{administration:"",school:"",term:"",academicYear:"",subject:"",grade:"",teacherName:"",useEasternDigits:!1,hideWeekends:!1,hiddenWeeks:[],logo:""}),[E,j]=v.useState(!1),[L,I]=v.useState(!1),[W,F]=v.useState(()=>t?"cards":"table"),b=v.useRef(null),f=v.useCallback(()=>{if(m&&x){const s=ee(m,x);c(g=>s.map(p=>{const a=g.find(A=>A.gregorianDate.toDateString()===p.gregorianDate.toDateString()),w=p.gregorianDate.getDay(),$=w===5||w===6,D=(a==null?void 0:a.isSpecial)||!1;if(l.hideWeekends&&$)return{...p,topic:"--- عطلة نهاية الأسبوع ---"};const S=a!=null&&a.topic&&a.topic!=="--- عطلة نهاية الأسبوع ---"?a.topic:"";return{...p,topic:S,isSpecial:D}}))}},[m,x,l.hideWeekends]);v.useEffect(()=>{t||f()},[l.hideWeekends]),v.useEffect(()=>{if(h.length>0){const g=h[h.length-1].gregorianDate.toISOString().substring(0,10);g!==x&&d(g)}},[h]);const C=v.useCallback((s,g)=>{c(p=>p.map((a,w)=>w===s?{...a,topic:g}:a))},[]),H=v.useCallback(s=>{u(g=>{const p=g.hiddenWeeks||[],a=p.includes(s)?p.filter(w=>w!==s):[...p,s];return{...g,hiddenWeeks:a}})},[]),T=v.useCallback((s,g)=>{c(p=>{const a=[...p];let w=s,$=0;const D=new Array(a.length).fill(0);for(let S=0;S<a.length;S++){const A=a[S].gregorianDate.getDay();S>0&&A===0&&$++,D[S]=$}return g.forEach(S=>{for(;w<a.length;){const P=a[w].gregorianDate.getDay(),je=P===5||P===6,ve=D[w];if(l.hiddenWeeks&&l.hiddenWeeks.includes(ve)){w++;continue}if(!(l.hideWeekends&&je)){a[w].topic=S,w++;return}w++}}),a})},[l.hideWeekends,l.hiddenWeeks]),N=async()=>{var s;try{if(!((s=navigator.clipboard)!=null&&s.readText)){alert("متصفحك لا يدعم هذه الميزة. الرجاء اللصق يدوياً.");return}const g=await navigator.clipboard.readText();if(!g||g.trim()===""){alert("لا يوجد موضوعات منسوخة في الحافظة.");return}const p=g.split(/\r?\n/).filter(a=>a.trim()!=="");T(0,p)}catch(g){console.error("Clipboard paste failed:",g),alert("فشل اللصق التلقائي. الرجاء اللصق يدوياً في الخلية الأولى.")}},R=v.useCallback(()=>{window.confirm("هل أنت متأكد من رغبتك في مسح جميع الموضوعات؟")&&c(s=>s.map(g=>{const p=g.gregorianDate.getDay(),a=p===5||p===6;let w="";return l.hideWeekends&&a&&(w="--- عطلة نهاية الأسبوع ---"),{...g,topic:w}}))},[l.hideWeekends]),U=v.useCallback(s=>{window.confirm("هل أنت متأكد من رغبتك في مسح محتوى هذا الموضوع؟")&&C(s,"")},[C]),V=v.useCallback(s=>{c(g=>g.map((p,a)=>a===s?{...p,isSpecial:!p.isSpecial}:p))},[]),M=v.useCallback(s=>{c(g=>{const p=[...g],a=new Date(p[s].gregorianDate.getTime());a.setDate(a.getDate()+1);const w={gregorianDate:a,topic:""};p.splice(s+1,0,w);for(let $=s+2;$<p.length;$++)p[$].gregorianDate.setDate(p[$].gregorianDate.getDate()+1);return p})},[]),O=v.useCallback(s=>{c(g=>{const p=[...g],a=p[s],w={...a,gregorianDate:new Date(a.gregorianDate.getTime())};return p.splice(s+1,0,w),p})},[]),be=v.useCallback(s=>{window.confirm("هل أنت متأكد من رغبتك في حذف هذا الصف؟")&&c(g=>g.filter((p,a)=>a!==s))},[]),fe=v.useCallback((s,g)=>{c(p=>{const a=[...p],w=a[s],$=a[g];return[a[s],a[g]]=[{...w,topic:$.topic,isSpecial:$.isSpecial},{...$,topic:w.topic,isSpecial:w.isSpecial}],a})},[]),ye=s=>{var a;const g=(a=s.target.files)==null?void 0:a[0];if(!g)return;const p=new FileReader;p.onload=w=>{var $;try{const D=JSON.parse(($=w.target)==null?void 0:$.result);if(!D||!D.startDate||!D.endDate||!D.title){alert("ملف JSON غير صالح.");return}i(D.title),y(D.startDate),d(D.endDate),u(S=>({...S,...D.meta})),D.viewMode&&F(D.viewMode),setTimeout(()=>{const S=ee(D.startDate,D.endDate);Array.isArray(D.days)&&D.days.forEach((A,P)=>{S[P]&&(S[P].topic=A.topic||"",A.isSpecial&&(S[P].isSpecial=!0))}),c(S)},0)}catch{alert("فشل قراءة ملف JSON.")}finally{b.current&&(b.current.value="")}},p.readAsText(g,"utf-8")},we=async()=>{try{if(!h.length){alert("لا يوجد جدول لتصديره");return}await Ee({title:n,startDate:m,endDate:x,days:h,meta:l,viewMode:W})}catch(s){console.error(s),alert("فشل التصدير")}};return e.jsxs("div",{className:"container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl",children:[e.jsxs("main",{className:"bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[e.jsx(Be,{title:n,onTitleChange:i,isReadOnly:t}),t?e.jsx(He,{onPrint:()=>te(n),onConfigClick:()=>j(s=>!s),isConfigVisible:E}):e.jsx(Me,{onPrint:()=>te(n),onCopy:()=>We(n),onViewModeChange:()=>F(s=>s==="table"?"cards":"table"),currentViewMode:W,onPasteTopics:N,onClearAllTopics:R,onExportText:()=>Te(h),onExportJson:()=>Ce({title:n,startDate:m,endDate:x,days:h,meta:l,viewMode:W}),onExportHtml:we,onImportClick:()=>{var s;return(s=b.current)==null?void 0:s.click()},onHelpClick:()=>I(!0),onConfigClick:()=>j(s=>!s),isConfigVisible:E,isDataActionsDisabled:h.length===0,showHtmlExport:o}),L&&e.jsx(Ae,{onClose:()=>I(!1)}),e.jsx("div",{className:"mb-6 print:hidden",children:E&&e.jsxs("div",{className:"p-6 border border-gray-300 rounded-lg bg-white shadow-sm",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4 border-b pb-2",children:"إعدادات الترويسة والطباعة"}),e.jsx(Ve,{meta:l,onSave:u,isReadOnly:t})]})}),!t&&h.length===0&&e.jsx(Oe,{startDate:m,endDate:x,onDatesChange:(s,g)=>{y(s),d(g)},onGenerate:f}),e.jsx("div",{className:"mt-6",children:e.jsxs("div",{id:"printable-area",children:[e.jsx("div",{id:"printable-header-content",children:e.jsx(Re,{meta:l,title:n})}),e.jsx("div",{id:"printable-area-content",children:h.length>0?W==="table"?e.jsx(re,{days:h,meta:l,onTopicChange:C,onTopicPaste:T,onAddRow:M,onDuplicateRow:O,onSwapTopics:fe,onToggleSpecialDay:V,onClearTopic:U,onDeleteRow:be,onToggleWeekVisibility:H,isReadOnly:t}):e.jsx(ze,{days:h,meta:l,onToggleWeekVisibility:H}):e.jsx(re,{days:[],meta:l,onTopicChange:C,onTopicPaste:T})}),e.jsx("div",{id:"printable-footer-content",children:e.jsx(Pe,{meta:l})})]})}),!t&&e.jsx("input",{type:"file",ref:b,accept:".json,application/json",className:"hidden",onChange:ye})]}),e.jsx(Fe,{})]})};export{Ye as A};
