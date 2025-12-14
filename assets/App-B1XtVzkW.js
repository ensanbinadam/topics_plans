import{j as e,r as C}from"./index-DVctM6hk.js";const ke=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],u=(t,o)=>{const r=String(t);return o?r.replace(/[0-9]/g,n=>ke[parseInt(n)]):r},K=(t,o)=>{try{return new Intl.DateTimeFormat(t,o)}catch{return null}},ee=K("ar-SA",{day:"2-digit",month:"2-digit",year:"numeric",calendar:"gregory"}),te=K("ar-SA-u-ca-islamic-umalqura",{day:"2-digit",month:"2-digit",year:"numeric",calendar:"islamic-umalqura"}),Ne=t=>te?te.format(t).replace(" هـ",""):"N/A",re=K("ar-SA",{weekday:"long"}),U=t=>{if(ee)return ee.format(t);const o=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();return`${o}/${r}/${n}`},q=t=>Ne(t),De=t=>re?re.format(t):["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"][t.getDay()],ne=t=>{if(!t)return null;const o=new Date(t);return isNaN(o.getTime())?null:o},oe=(t,o)=>{const r=ne(t),n=ne(o);if(!r||!n||n<r)return[];const i=[];let f=new Date(r.getTime());for(;f<=n;)i.push({gregorianDate:new Date(f.getTime()),topic:""}),f.setDate(f.getDate()+1);return i},Ce=t=>{if(!t.days.length){alert("لا يوجد جدول لتصديره.");return}const o={version:5,...t,days:t.days.map((i,f)=>({index:f+1,topic:i.topic,gregorianDate:i.gregorianDate.toISOString(),isSpecial:i.isSpecial||!1}))},r=new Blob([JSON.stringify(o,null,2)],{type:"application/json;charset=utf-8;"}),n=`plan_${t.startDate}_to_${t.endDate}.json`;G(r,n)},Te=t=>{if(!t.length){alert("لا يوجد جدول لتصديره.");return}const o=t.map(n=>n.topic.trim().replace(/\r?\n/g," ")).filter(Boolean).join(`\r
`);if(!o){alert("لا توجد موضوعات مكتوبة لتصديرها.");return}const r=new Blob(["\uFEFF"+o],{type:"text/plain;charset=utf-8;"});G(r,"topics.txt")},We=t=>{if(!t.days.length){alert("لا يوجد جدول لتصديره.");return}const{days:o,meta:r}=t,n=r.hiddenWeeks||[],i=r.useEasternDigits,j=o.reduce((v,w,k)=>((w.gregorianDate.getDay()===0||k===0)&&v.push([]),v[v.length-1].push(w),v),[]).map((v,w)=>({week:v,originalIndex:w})).filter(v=>!n.includes(v.originalIndex)),b=12,c=Math.ceil(j.length/b);let p="",l=0;const d=()=>`
        <table style="width: 100%; border-collapse: collapse; border: none; margin-bottom: 5px; border-bottom: 2px solid #000;">
            <tr>
                <td style="width: 25%; text-align: right; vertical-align: middle; border: none; padding: 2px;">
                    ${r.logo?`<img src="${r.logo}" style="height: 65px; width: auto;" alt="Logo" />`:""}
                </td>
                <td style="width: 50%; text-align: center; vertical-align: middle; border: none; padding: 2px;">
                    <p style="font-size: 14pt; font-weight: bold; margin: 0; padding: 0;">${u(t.title,i)}</p>
                    <p style="font-size: 10pt; margin: 0;">${u(`إدارة التعليم: ${r.administration}`,i)}</p>
                    <p style="font-size: 10pt; margin: 0;">${u(`المدرسة: ${r.school}`,i)}</p>
                </td>
                <td style="width: 25%; text-align: center; vertical-align: middle; border: none; padding: 2px;">
                    <p style="font-size: 9pt; margin: 0;">${u(`العام: ${r.academicYear}`,i)}</p>
                    <p style="font-size: 9pt; margin: 0;">${u(`الفصل: ${r.term}`,i)}</p>
                    <p style="font-size: 9pt; margin: 0;">${u(`المادة: ${r.subject}`,i)}</p>
                    <p style="font-size: 9pt; margin: 0;">${u(`الصف: ${r.grade}`,i)}</p>
                </td>
            </tr>
        </table>
    `;for(let v=0;v<c;v++){const w=v*b,k=j.slice(w,w+b),W=v===c-1;let L="";const m=4;for(let h=0;h<k.length;h+=m){L+="<tr>";for(let T=0;T<m;T++){const M=k[h+T];if(!M){L+='<td style="border: 1px solid #000; padding: 4px; vertical-align: top;"></td>';continue}l++;const $=l,N=M.week,A=N.filter(B=>{const z=B.gregorianDate.getDay();return z!==5&&z!==6}),J=A.length>0?A[0].gregorianDate:N[0].gregorianDate,V=A.length>0?A[A.length-1].gregorianDate:N[N.length-1].gregorianDate,S=`(${u(`${q(J)} - ${q(V)}`,i)}هـ | ${u(`${U(J)} - ${U(V)}`,i)}م)`,P=N.filter(B=>{const z=B.gregorianDate.getDay(),Z=z===5||z===6;return!(r.hideWeekends&&Z)&&B.topic&&B.topic.trim()!==""&&B.topic.trim()!=="--- عطلة نهاية الأسبوع ---"&&B.topic.trim()!=="--- إجازة رسمية ---"});let Y="";P.length>0?Y='<ol style="margin: 0; padding-right: 10px; font-size: 10pt; line-height: 1.1;">'+P.map(B=>`<li style="margin-bottom: 1px; padding: 0;">${B.isSpecial?`<strong>${B.topic}</strong>`:B.topic}</li>`).join("")+"</ol>":Y='<p style="text-align: center; color: #777; font-size: 9pt; margin-top: 10px;">-</p>',L+=`
                    <td style="border: 1px solid #000; padding: 3px; vertical-align: top; width: 25%;">
                        <div style="border-bottom: 1px solid #999; margin-bottom: 2px; padding-bottom: 1px; text-align: center;">
                            <span style="font-weight: bold; font-size: 11pt; color: #2b6cb0;">الأسبوع ${u($,i)}</span>
                            <br/>
                            <span style="font-size: 7pt; color: #555;">${S}</span>
                        </div>
                        ${Y}
                    </td>
                `}L+="</tr>"}p+=d(),p+=`
            <table style="width: 100%; border-collapse: collapse; table-layout: fixed; border-spacing: 0;">
                <tbody>
                    ${L}
                </tbody>
            </table>
        `,W&&(p+=`
                <div style="margin-top: 15px; text-align: center; font-weight: bold; font-size: 11pt; display: flex; justify-content: center; gap: 50px;">
                     <span>${r.teacherName?`معلم المادة: ${u(r.teacherName,i)}`:""}</span>
                     <span>${r.teacherName?"التوقيع: ........................":""}</span>
                </div>
            `),W||(p+="<br clear=all style='mso-special-character:line-break; page-break-before:always'>")}const y=`
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset="utf-8">
            <title>${t.title}</title>
            <style>
                @page Section1 {
                    size: 29.7cm 21.0cm; 
                    margin: 1.27cm 1.27cm 1.27cm 1.27cm; 
                    mso-page-orientation: landscape;
                    mso-header-margin: 36pt;
                    mso-footer-margin: 36pt;
                    mso-paper-source: 0;
                }
                div.Section1 {
                    page: Section1;
                }
                body { 
                    font-family: 'Tajawal', 'Arial', sans-serif; 
                    direction: rtl; 
                }
                /* Cell Reset */
                td { padding: 3px; }
                p { margin: 0; padding: 0; }
                ol, ul { margin: 0; padding-top: 0; padding-bottom: 0; }
                li { margin: 0; padding: 0; }
            </style>
        </head>
        <body>
            <div class="Section1">
                ${p}
            </div>
        </body>
        </html>
    `,I=new Blob(["\uFEFF",y],{type:"application/msword"});G(I,`plan_grid_${t.startDate}.doc`)},G=(t,o)=>{const r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=o,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)},ae=()=>`
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
    
    /* Logo sizing - Ensure max-height to prevent it taking over page */
    img.header-logo-img { height: auto !important; max-height: 90px !important; width: auto !important; max-width: 100% !important; object-fit: contain !important; }

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
`,$e=async t=>{const o=document.getElementById("printable-area-content"),{meta:r,title:n}=t,{useEasternDigits:i}=r;if(!o){alert("حدث خطأ: لا يمكن العثور على المحتوى للتصدير.");return}const f=`
      <div class="mb-2" id="main-header">
        <div class="print-header-row">
          <!-- Right Column: Logo -->
          <div class="print-col-right">
             <img id="header-logo" src="${r.logo||""}" alt="شعار" class="header-logo-img" style="display: ${r.logo?"inline-block":"none"}" />
          </div>
          
          <!-- Center Column -->
          <div class="print-col-center">
             <div id="header-title" class="print-text-lg">${u(n,i)}</div>
             <div id="header-admin" class="print-text-base">${u(`إدارة التعليم: ${r.administration}`,i)}</div>
             <div id="header-school" class="print-text-base">${u(`المدرسة: ${r.school}`,i)}</div>
          </div>
          
          <!-- Left Column -->
          <div class="print-col-left">
             <div id="header-year" class="print-text-sm">${u(`العام: ${r.academicYear}`,i)}</div>
             <div id="header-term" class="print-text-sm">${u(`الفصل: ${r.term}`,i)}</div>
             <div id="header-subject" class="print-text-sm">${u(`المادة: ${r.subject}`,i)}</div>
             <div id="header-grade" class="print-text-sm">${u(`الصف: ${r.grade}`,i)}</div>
          </div>
        </div>
        <!-- Explicit Border DIV matching Layout.tsx -->
        <div class="mt-2 pb-2 border-b-2 border-black" style="margin-top: 0.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid black;"></div>
      </div>
  `,j=r.teacherName?u(`اسم المعلم/ـة: ${r.teacherName}`,r.useEasternDigits):"",b=r.teacherName?u("التوقيع: ........................",r.useEasternDigits):"",c=`
    <div class="mt-8 text-center text-sm font-bold flex justify-center items-center gap-12 print-footer-row">
        <span id="footer-teacher">${j}</span>
        <span id="footer-signature">${b}</span>
    </div>
  `,p=o.cloneNode(!0);p.querySelectorAll("textarea[data-row-index]").forEach(k=>{var T;const W=k,L=document.createElement("div");L.innerHTML=W.value.replace(/\n/g,"<br />");const m=W.closest("tr"),h=m&&m.classList.contains("print:hidden");L.className=`p-2 w-full h-full ${W.disabled?"text-center":""}`,(W.disabled||h)&&L.classList.add("bg-gray-200"),(T=W.parentNode)==null||T.replaceChild(L,W)});const l=Array.from(document.querySelectorAll("style")).map(k=>k.innerText).join(`
`),d=Array.from(document.querySelectorAll("link[rel='stylesheet'], link[rel='preconnect']")).map(k=>k.outerHTML).join(`
`),y=`
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
  `,I=`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.title}</title>
  ${d}
  <style>
      ${l}
      ${ae()}
      
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

  ${y}

  <!-- WRAPPED IN TABLE FOR PRINT HEADER REPETITION -->
  <div class="container">
      <table style="width: 100%; border: none; border-collapse: collapse;">
        <thead>
            <tr>
                <td style="border: none; padding: 0;">
                    ${f}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: none; padding: 0;">
                    <div class="mt-6">
                        ${p.innerHTML}
                    </div>
                    <!-- Footer appended here to avoid repetition -->
                    ${c}
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
`,v=new Blob([I.trim()],{type:"text/html;charset=utf-8;"}),w=`school_plan_${t.startDate||"new"}.html`;G(v,w)},ie=t=>{var c,p;const o=document.getElementById("printable-area-content"),r=(c=document.getElementById("printable-header-content"))==null?void 0:c.innerHTML,n=(p=document.getElementById("printable-footer-content"))==null?void 0:p.innerHTML;if(!o||!r||!n){alert("حدث خطأ أثناء محاولة الطباعة.");return}const i=o.cloneNode(!0);i.querySelectorAll("textarea[data-row-index]").forEach(l=>{var k;const d=l,y=document.createElement("div");y.style.whiteSpace="pre-wrap",y.style.wordWrap="break-word",y.textContent=d.value;const I=d.disabled,v=d.closest("tr"),w=v&&v.classList.contains("print:hidden");y.className=`p-2 w-full h-full ${I||w?"text-center":""}`,(k=d.parentNode)==null||k.replaceChild(y,d)});const f=Array.from(document.querySelectorAll("style")).map(l=>l.innerText).join(`
`),j=Array.from(document.querySelectorAll("link[rel='stylesheet'], link[rel='preconnect']")).map(l=>l.outerHTML).join(`
`),b=window.open("","_blank");if(!b){alert("فشل فتح نافذة الطباعة.");return}b.document.write(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8" />
        <title>${t}</title>
        ${j}
        <style>
            ${f}
            ${ae()}
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
    </html>`),b.document.close(),setTimeout(()=>{try{b.focus(),b.print(),b.close()}catch(l){console.error(l),b.close()}},1200)},Ee=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors",children:e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),X=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),le=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("line",{x1:"10",y1:"9",x2:"8",y2:"9"})]}),de=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1"}),e.jsx("path",{d:"M14 12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1"})]}),Le=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),ce=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("path",{d:"M10 13l2 4 2-4"}),e.jsx("path",{d:"M8 13v4"}),e.jsx("path",{d:"M16 13v4"})]}),pe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),Q=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0 .73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0 2l.15.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),ge=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M15 2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M9 2v4h6V2"}),e.jsx("path",{d:"M12 12v6"}),e.jsx("path",{d:"m15 15-3 3-3-3"})]}),me=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),he=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),xe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("line",{x1:"15",y1:"9",x2:"12.5",y2:"9"}),e.jsx("path",{d:"M10 9H8"}),e.jsx("path",{d:"M15 13h-2.5"}),e.jsx("path",{d:"M10 13H8"}),e.jsx("path",{d:"M15 5H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"}),e.jsx("rect",{width:"8",height:"8",x:"12",y:"9",rx:"2"}),e.jsx("path",{d:"M16 13v4"}),e.jsx("path",{d:"M14 15h4"})]}),ue=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),e.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),be=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Se=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e.jsx("path",{d:"M12 17h.01"})]}),fe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("path",{d:"m18 5-3-3-7.2 7.2a3 3 0 0 0-1.06 2.12V18h5.66a3 3 0 0 0 2.12-1.06Z"}),e.jsx("path",{d:"m9 12 2 2"}),e.jsx("path",{d:"M14.5 5.5 16 4 20 8l-1.5 1.5"}),e.jsx("path",{d:"M12 15v6"}),e.jsx("path",{d:"M17 11v-1a2 2 0 0 0-2-2h-1"})]}),Ie=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("polyline",{points:"5 9 2 12 5 15"}),e.jsx("polyline",{points:"9 5 12 2 15 5"}),e.jsx("polyline",{points:"15 19 12 22 9 19"}),e.jsx("polyline",{points:"19 9 22 12 19 15"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"})]}),ye=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[e.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),we=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[e.jsx("path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}),e.jsx("path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}),e.jsx("path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}),e.jsx("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),R=({onClick:t,children:o,className:r="bg-blue-600 hover:bg-blue-700",disabled:n=!1,title:i})=>e.jsx("button",{type:"button",onClick:t,disabled:n,title:i,className:`flex items-center justify-center gap-2 px-6 py-2 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${r} ${n?"opacity-50 cursor-not-allowed":"hover:scale-105"}`,children:o}),Me=({onPrint:t,onPasteTopics:o,onClearAllTopics:r,onExportText:n,onExportJson:i,onExportHtml:f,onExportWord:j,onImportClick:b,onHelpClick:c,onConfigClick:p,onViewModeChange:l,currentViewMode:d,isDataActionsDisabled:y,isConfigVisible:I,showHtmlExport:v=!1})=>e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 print:hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsxs(R,{onClick:t,disabled:y,title:"طباعة الخطة أو حفظها كملف PDF",children:[e.jsx(X,{})," طباعة / PDF"]}),e.jsxs(R,{onClick:j,disabled:y,className:"bg-blue-800 hover:bg-blue-900",title:"تحميل ملف Word يحتوي على جدول بالمربعات",children:[e.jsx(ce,{})," تصدير Word (جدول)"]}),e.jsxs(R,{onClick:l,disabled:y,className:"bg-teal-600 hover:bg-teal-700",title:"تبديل طريقة العرض بين الجدول والمربعات",children:[e.jsx(me,{})," ",d==="table"?"عرض المربعات":"عرض الجدول"]}),e.jsxs(R,{onClick:o,disabled:y,className:"bg-purple-600 hover:bg-purple-700",title:"لصق قائمة من الموضوعات من الحافظة وتوزيعها على الأيام",children:[e.jsx(ge,{})," لصق الموضوعات"]}),e.jsxs(R,{onClick:r,disabled:y,className:"bg-red-600 hover:bg-red-700",title:"مسح جميع الموضوعات من الجدول لإعادة التعبئة",children:[e.jsx(he,{})," مسح الموضوعات"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsxs(R,{onClick:n,disabled:y,title:"تصدير قائمة الموضوعات كملف نصي",children:[e.jsx(le,{})," تصدير نصي"]}),e.jsxs(R,{onClick:i,disabled:y,title:"حفظ العمل بالكامل في ملف يمكن استيراده لاحقًا",children:[e.jsx(de,{})," تصدير JSON"]}),v&&e.jsxs(R,{onClick:f,disabled:y,title:"تصدير كملف HTML تفاعلي (للمدارس)",children:[e.jsx(Le,{})," تصدير HTML"]}),e.jsxs(R,{onClick:b,className:"bg-gray-600 hover:bg-gray-700",title:"استيراد ملف عمل تم حفظه مسبقًا",children:[e.jsx(pe,{})," استيراد JSON"]}),e.jsxs(R,{onClick:p,className:"bg-gray-600 hover:bg-gray-700",children:[e.jsx(Q,{})," ",I?"إغلاق الإعدادات":"فتح الإعدادات"]}),e.jsxs(R,{onClick:c,className:"bg-indigo-600 hover:bg-indigo-700",title:"عرض دليل الاستخدام",children:[e.jsx(Se,{})," مساعدة"]})]})]}),He=({onPrint:t,onConfigClick:o,isConfigVisible:r})=>e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 print:hidden",children:[e.jsxs(R,{onClick:t,children:[e.jsx(X,{})," طباعة / PDF"]}),e.jsxs(R,{onClick:o,className:"bg-gray-600 hover:bg-gray-700",children:[e.jsx(Q,{}),r?"إغلاق الإعدادات":"فتح الإعدادات"]})]}),Fe=({title:t,onTitleChange:o,isReadOnly:r=!1})=>{const n=C.useRef(null),i=f=>o(f.currentTarget.innerText);return e.jsxs("header",{className:"text-center mb-8 print:hidden",children:[e.jsxs("div",{className:"group inline-flex items-center gap-2 cursor-text",onClick:()=>{var f;return!r&&((f=n.current)==null?void 0:f.focus())},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800",children:r?e.jsx("span",{className:"px-2 py-1",children:t}):e.jsx("span",{ref:n,contentEditable:!0,suppressContentEditableWarning:!0,onBlur:i,className:"px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50",style:{minWidth:"100px",display:"inline-block"},children:t})}),!r&&e.jsx("div",{className:"title-icon","aria-hidden":"true",title:"العنوان قابل للتعديل",children:e.jsx(Ee,{})})]}),r&&e.jsx("p",{className:"text-gray-500 mt-2",children:'هذه نسخة قابلة للتخصيص والطباعة. استخدم زر "إعداد الترويسة" لتعديل بياناتك.'})]})},Be=()=>e.jsx("footer",{className:"mt-8 text-center text-sm text-gray-500 leading-relaxed print:hidden",children:e.jsxs("p",{children:["تمت برمجته وتطويره بـ"," ",e.jsx("a",{href:"https://aistudio.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline font-semibold",children:"قوقل ستديو"})," و ",e.jsx("a",{href:"https://gemini.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline font-semibold",children:"جميناي"})]})}),Re=({onClose:t})=>{const o=[{icon:e.jsx(X,{}),name:"طباعة / PDF",desc:"لطباعة الخطة أو حفظها كملف PDF."},{icon:e.jsx(ce,{}),name:"تصدير Word",desc:"تحميل ملف Word بتنسيق جدول."},{icon:e.jsx(me,{}),name:"عرض المربعات/الجدول",desc:"للتبديل بين عرض الخطة كجدول تفصيلي أو كملخص أسبوعي."},{icon:e.jsx(ge,{}),name:"لصق الموضوعات",desc:"للصق قائمة من الموضوعات من الحافظة وتوزيعها تلقائياً على أيام الدراسة."},{icon:e.jsx(he,{}),name:"مسح الموضوعات",desc:"لمسح محتوى جميع الموضوعات في الجدول."},{icon:e.jsx(le,{}),name:"تصدير نصي",desc:"لتصدير قائمة الموضوعات فقط كملف نصي (.txt)."},{icon:e.jsx(de,{}),name:"تصدير JSON",desc:"لحفظ العمل بالكامل في ملف يمكن استيراده لاحقاً لمتابعة العمل."},{icon:e.jsx(pe,{}),name:"استيراد JSON",desc:"لاستعادة عمل تم حفظه مسبقاً من ملف JSON."},{icon:e.jsx(Q,{}),name:"فتح/إغلاق الإعدادات",desc:"لإظهار أو إخفاء لوحة إعدادات الترويسة والطباعة."}],r=[{icon:e.jsx(be,{}),name:"حذف اليوم المكرر",desc:"لحذف صف تم استنساخه. لا تكون فعالة إلا إذا كان تاريخ اليوم مكرراً."},{icon:e.jsx(xe,{}),name:"استنساخ اليوم",desc:"لإنشاء نسخة من الصف الحالي بنفس التاريخ، مفيد لإضافة نشاط آخر في نفس اليوم."},{icon:e.jsx(ue,{}),name:"مسح الموضوع",desc:"لتفريغ محتوى خانة الموضوعات فقط دون حذف الصف."},{icon:e.jsx(fe,{}),name:"تلوين يوم مميز",desc:"لتمييز يوم بلون خاص (مثل يوم إجازة أو نشاط). اضغط مرة أخرى للإلغاء."},{icon:e.jsx(Ie,{}),name:"سحب وإفلات لتبديل الموضوعات",desc:"اسحب أي صف وأفلته على صف آخر لتبديل محتوى الموضوعات بينهما بسرعة وسهولة."}];return e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 print:hidden",onClick:t,children:e.jsxs("div",{className:"bg-white rounded-lg shadow-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto",onClick:n=>n.stopPropagation(),children:[e.jsxs("div",{className:"flex justify-between items-center border-b pb-3 mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"دليل الاستخدام"}),e.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-800 text-3xl font-bold",children:"×"})]}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700 mt-6 mb-3",children:"أزرار شريط الأدوات"}),e.jsx("div",{className:"space-y-3",children:o.map(n=>e.jsxs("div",{className:"flex items-start gap-4 p-2 rounded-md bg-gray-50",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center",children:n.icon}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-800",children:n.name}),e.jsx("p",{className:"text-sm text-gray-600",children:n.desc})]})]},n.name))}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700 mt-8 mb-3",children:"أزرار الإجراءات في الجدول"}),e.jsx("div",{className:"space-y-3",children:r.map(n=>e.jsxs("div",{className:"flex items-start gap-4 p-2 rounded-md bg-gray-50",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center",children:n.icon}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-800",children:n.name}),e.jsx("p",{className:"text-sm text-gray-600",children:n.desc})]})]},n.name))}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx("button",{onClick:t,className:"px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700",children:"فهمت، إغلاق"})})]})})},Ae=({meta:t,title:o})=>{const{useEasternDigits:r}=t;return e.jsxs("div",{className:"mb-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs px-2 print-header-row",children:[e.jsx("div",{className:"w-1/5 text-right print-col-right",children:t.logo&&e.jsx("img",{src:t.logo,alt:"شعار",className:"h-20 w-auto max-w-[150px] object-contain inline-block"})}),e.jsxs("div",{className:"w-3/5 text-center print-col-center",children:[o&&e.jsx("div",{className:"text-base font-bold text-black print-text-lg",children:u(o,r)}),t.administration&&e.jsx("div",{className:"print-text-base",children:u(`إدارة التعليم: ${t.administration}`,r)}),t.school&&e.jsx("div",{className:"print-text-base",children:u(`المدرسة: ${t.school}`,r)})]}),e.jsxs("div",{className:"w-1/5 text-center print-col-left",children:[t.academicYear&&e.jsx("div",{className:"print-text-sm",children:u(`العام: ${t.academicYear}`,r)}),t.term&&e.jsx("div",{className:"print-text-sm",children:u(`الفصل: ${t.term}`,r)}),t.subject&&e.jsx("div",{className:"print-text-sm",children:u(`المادة: ${t.subject}`,r)}),t.grade&&e.jsx("div",{className:"print-text-sm",children:u(`الصف: ${t.grade}`,r)})]})]}),e.jsx("div",{className:"mt-2 pb-2 border-b-2 border-black"})]})},Pe=({meta:t})=>e.jsx("div",{className:"mt-8 text-center text-sm font-bold flex justify-center items-center gap-12 print-footer-row",children:t.teacherName&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:u(`اسم المعلم/ـة: ${t.teacherName}`,t.useEasternDigits)}),e.jsx("span",{children:u("التوقيع: ........................",t.useEasternDigits)})]})}),ze=({startDate:t,endDate:o,onDatesChange:r,onGenerate:n})=>e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6 print:hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"startDate",className:"font-semibold text-gray-700",children:"تاريخ البداية:"}),e.jsx("input",{type:"date",id:"startDate",value:t,onChange:i=>r(i.target.value,o),className:"p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"endDate",className:"font-semibold text-gray-700",children:"تاريخ النهاية:"}),e.jsx("input",{type:"date",id:"endDate",value:o,onChange:i=>r(t,i.target.value),className:"p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"})]})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx("button",{onClick:n,disabled:!t||!o,className:"px-8 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",children:"توليد الجدول"})}),e.jsx("p",{className:"text-center text-sm text-gray-500 mt-3",children:'اختر مدى التواريخ ثم اضغط على زر "توليد الجدول". سيؤدي استيراد ملف JSON إلى ملء هذه الحقول تلقائيًا وتوليد الجدول.'})]}),Oe=({meta:t,onSave:o,isReadOnly:r=!1})=>{const n=C.useRef(null),i=c=>{if(r)return;const{name:p,value:l,type:d,checked:y}=c.target;o({...t,[p]:d==="checkbox"?y:l})},f=c=>{var l;if(r)return;const p=(l=c.target.files)==null?void 0:l[0];if(p){const d=new FileReader;d.onloadend=()=>{o({...t,logo:d.result})},d.readAsDataURL(p)}},j=()=>{r||(o({...t,logo:""}),n.current&&(n.current.value=""))},b=[{id:"administration",label:"إدارة التعليم:",placeholder:"مثال: إدارة التعليم بمحافظة ..."},{id:"school",label:"المدرسة:",placeholder:"مثال: مدرسة ... الابتدائية"},{id:"term",label:"الفصل الدراسي:",placeholder:"مثال: الفصل الدراسي الأول"},{id:"academicYear",label:"العام الدراسي:",placeholder:"مثال: 1447 هـ / 2026 م"},{id:"subject",label:"المادة الدراسية:",placeholder:"مثال: الرياضيات"},{id:"grade",label:"الصف الدراسي:",placeholder:"مثال: الصف الرابع"},{id:"teacherName",label:"اسم المعلم/ـة:",placeholder:"مثال: أ. محمد بن أحمد"}];return e.jsxs("div",{className:"space-y-4",children:[b.map(c=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 items-center gap-2",children:[e.jsx("label",{htmlFor:c.id,className:"font-semibold text-gray-700 md:text-right",children:c.label}),e.jsx("input",{type:"text",id:c.id,name:c.id,value:t[c.id]||"",onChange:i,placeholder:c.placeholder,disabled:r,className:"col-span-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"})]},c.id)),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 items-center gap-2 pt-2",children:[e.jsx("label",{className:"font-semibold text-gray-700 md:text-right",children:"شعار الجهة:"}),e.jsxs("div",{className:"col-span-2 flex items-center gap-4",children:[e.jsx("input",{type:"file",accept:"image/*",ref:n,onChange:f,className:"hidden",id:"logo-upload",disabled:r}),e.jsx("button",{onClick:()=>{var c;return(c=n.current)==null?void 0:c.click()},disabled:r,className:"px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"تحميل شعار"}),t.logo&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:t.logo,alt:"الشعار الحالي",className:"h-12 w-12 object-contain border rounded-md"}),!r&&e.jsx("button",{onClick:j,className:"text-red-500 hover:text-red-700 font-semibold",children:"× إزالة"})]})]})]}),e.jsxs("div",{className:"flex items-center pt-2",children:[e.jsx("input",{type:"checkbox",id:"useEasternDigits",name:"useEasternDigits",checked:t.useEasternDigits,onChange:i,disabled:r,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"}),e.jsx("label",{htmlFor:"useEasternDigits",className:"mr-2 font-medium text-gray-700",children:"استخدام الأرقام الهندية (٠١٢٣٤٥٦٧٨٩)"})]}),e.jsxs("div",{className:"flex items-center pt-2",children:[e.jsx("input",{type:"checkbox",id:"hideWeekends",name:"hideWeekends",checked:t.hideWeekends,onChange:i,disabled:r,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"}),e.jsx("label",{htmlFor:"hideWeekends",className:"mr-2 font-medium text-gray-700",children:"تمييز عطلة نهاية الأسبوع (الجمعة والسبت)"})]})]})},se=({days:t,meta:o,onTopicChange:r,onTopicPaste:n,onDuplicateRow:i,onSwapTopics:f,onToggleSpecialDay:j,onClearTopic:b,onDeleteRow:c,onToggleWeekVisibility:p,isReadOnly:l=!1})=>{const[d,y]=C.useState(null),I=m=>{if(l)return;const h=m.target;if(h.tagName!=="TEXTAREA")return;const T=h.closest("tr");if(!(T!=null&&T.dataset.rowIndex))return;const M=parseInt(T.dataset.rowIndex,10);m.preventDefault();const N=m.clipboardData.getData("text").split(/\r?\n/);n(M,N)};if(t.length===0)return e.jsxs("div",{className:"text-center py-12 px-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300",children:[e.jsx("div",{className:"mx-auto text-gray-400 mb-4 w-12 h-12",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700",children:"لم يتم إنشاء جدول بعد"}),e.jsx("p",{className:"text-gray-500 mt-2",children:"الرجاء تحديد تاريخ بداية ونهاية لإنشاء جدول التوزيع."})]});const v=(m,h)=>{const T=m.toDateString();let M=0;for(const $ of h)if($.gregorianDate.toDateString()===T&&M++,M>1)return!0;return!1},w=[],k=o.hiddenWeeks||[];let W=-1,L=0;return t.forEach((m,h)=>{const T=m.gregorianDate.getDay(),M=h===0||T===0;M&&(W++,k.includes(W)||L++);let $=1;if(M)for(let N=h+1;N<t.length&&t[N].gregorianDate.getDay()!==0;N++)$++;w.push({...m,isFirstDayOfWeek:M,weekIndex:W,weekNumber:W+1,displayWeekNumber:L,weekRowSpan:$})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse text-sm planner-table-for-print",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-gray-100 print:bg-gray-100",children:["الأسبوع","م","اليوم","التاريخ","الموضوعات الدراسية","إجراءات"].map((m,h)=>e.jsx("th",{className:`p-3 border border-gray-300 font-bold text-gray-700 text-center ${h===4?"w-2/5":h===5?"w-32 print:hidden":""} ${h<4?"whitespace-nowrap":""}`,children:m},h))})}),e.jsx("tbody",{onPaste:I,children:w.map((m,h)=>{const T=m.gregorianDate.getDay(),M=T===5||T===6,$=o.hideWeekends&&M,N=k.includes(m.weekIndex||0);let A="even:bg-white odd:bg-gray-50";N?A="bg-gray-200 text-gray-400 print:hidden":m.isSpecial?A="bg-yellow-100 text-yellow-900":$&&(A="bg-gray-200 text-gray-500");const V=d===h?"border-t-4 border-blue-500":"";return e.jsxs("tr",{"data-row-index":h,className:`${A} ${V} print:break-inside-avoid`,draggable:!l&&!$&&!N,onDragStart:S=>{S.dataTransfer.setData("text/plain",h.toString()),S.currentTarget.style.opacity="0.5"},onDragEnd:S=>{S.currentTarget.style.opacity="1",y(null)},onDragOver:S=>S.preventDefault(),onDragEnter:S=>{S.preventDefault(),!$&&!N&&y(h)},onDrop:S=>{S.preventDefault();const P=parseInt(S.dataTransfer.getData("text/plain"),10);P!==h&&!$&&!N&&f&&f(P,h),y(null)},children:[m.isFirstDayOfWeek&&e.jsx("td",{className:`p-2 border border-gray-300 text-center align-middle font-bold ${N?"":"!bg-white"} text-gray-700 relative group`,rowSpan:m.weekRowSpan,children:e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("span",{children:u(m.displayWeekNumber||0,o.useEasternDigits)}),!l&&p&&e.jsx("button",{onClick:()=>p(m.weekIndex||0),className:"print:hidden opacity-20 group-hover:opacity-100 hover:text-blue-600 transition-opacity",title:N?"إظهار الأسبوع":"إخفاء الأسبوع (إجازة)",children:N?e.jsx(we,{}):e.jsx(ye,{})})]})}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle",children:u(h+1,o.useEasternDigits)}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle whitespace-nowrap",children:De(m.gregorianDate)}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle",children:e.jsxs("div",{className:"text-xs font-semibold whitespace-nowrap text-gray-800",children:["(",u(q(m.gregorianDate),o.useEasternDigits),"هـ - ",u(U(m.gregorianDate),o.useEasternDigits),"م)"]})}),e.jsx("td",{className:"p-0 border border-gray-300 align-top",children:e.jsx("textarea",{"data-row-index":h,value:m.topic,onChange:l?void 0:S=>r(h,S.target.value),placeholder:N?"الأسبوع مخفي (إجازة)":"اكتب الموضوع هنا...",className:"w-full h-full min-h-[50px] p-2 border-0 bg-transparent resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-transparent disabled:cursor-not-allowed disabled:text-gray-500 disabled:text-center",rows:2,disabled:$||N,readOnly:l})}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle print:hidden",children:!l&&e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("button",{onClick:()=>c&&c(h),title:"حذف اليوم المكرر",className:"p-1 text-green-600 hover:bg-green-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:$||N||!v(m.gregorianDate,t),children:e.jsx(be,{})}),e.jsx("button",{onClick:()=>i&&i(h),title:"استنساخ هذا اليوم",className:"p-1 text-blue-600 hover:bg-blue-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:$||N,children:e.jsx(xe,{})}),e.jsx("button",{onClick:()=>b&&b(h),title:"مسح الموضوع",className:"p-1 text-red-600 hover:bg-red-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:$||N||!m.topic,children:e.jsx(ue,{})}),e.jsx("button",{onClick:()=>j&&j(h),title:"تلوين يوم مميز",className:`p-1 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${m.isSpecial?"text-yellow-600 bg-yellow-200":"text-gray-500 hover:bg-gray-200"}`,disabled:$||N,children:e.jsx(fe,{})})]})})]},h)})})]})})},Ve=({days:t,meta:o,onToggleWeekVisibility:r})=>{if(t.length===0)return null;const n=o.hiddenWeeks||[];let i=0;const f=t.reduce((j,b,c)=>((b.gregorianDate.getDay()===0||c===0)&&j.push([]),j[j.length-1].push(b),j),[]);return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 cards-grid",children:f.map((j,b)=>{const c=n.includes(b);c||i++;const p=c?"-":i,l=j.filter(w=>{const k=w.gregorianDate.getDay();return k!==5&&k!==6}),d=l.length>0?l[0].gregorianDate:j[0].gregorianDate,y=l.length>0?l[l.length-1].gregorianDate:j[j.length-1].gregorianDate,I=j.filter(w=>{const k=w.gregorianDate.getDay(),W=k===5||k===6;return!(o.hideWeekends&&W)&&w.topic&&w.topic.trim()!==""&&w.topic.trim()!=="--- عطلة نهاية الأسبوع ---"&&w.topic.trim()!=="--- إجازة رسمية ---"}),v=c?"bg-gray-100 border border-gray-300 opacity-60 print:hidden":"bg-white border border-gray-200";return e.jsxs("div",{className:`${v} rounded-lg shadow-sm p-4 flex flex-col print:shadow-none card-item`,children:[e.jsxs("div",{className:"flex justify-between items-center border-b pb-2 mb-3 card-header print-card-header",children:[e.jsxs("div",{className:"flex items-center gap-2 print-card-week",children:[e.jsxs("h3",{className:`font-bold text-lg whitespace-nowrap ${c?"text-gray-500":"text-blue-700"}`,children:["الأسبوع ",u(p,o.useEasternDigits)]}),r&&e.jsx("button",{onClick:()=>r(b),className:"print:hidden text-gray-400 hover:text-blue-600",title:c?"إظهار الأسبوع":"إخفاء الأسبوع",children:c?e.jsx(we,{}):e.jsx(ye,{})})]}),e.jsx("div",{className:"text-xs text-left card-date flex flex-col items-end print-card-date",children:e.jsxs("span",{className:"block font-bold text-gray-800",children:["(",u(`${q(d)} - ${q(y)}`,o.useEasternDigits),"هـ | ",u(`${U(d)} - ${U(y)}`,o.useEasternDigits),"م)"]})})]}),c?e.jsx("p",{className:"text-gray-400 text-center flex-grow flex items-center justify-center py-4",children:"هذا الأسبوع مخفي (إجازة/توقف)."}):I.length>0?e.jsx("ol",{className:"list-decimal list-inside space-y-1 text-gray-800 pr-4 flex-grow",children:I.map((w,k)=>e.jsx("li",{children:w.isSpecial?e.jsx("span",{className:"bg-yellow-200 px-1 rounded",children:w.topic}):w.topic},k))}):e.jsx("p",{className:"text-gray-400 text-center flex-grow flex items-center justify-center py-4",children:"لا توجد موضوعات لهذا الأسبوع."})]},b)})})},Ye=({isStandalone:t=!1,showHtmlExport:o=!1,initialData:r=null})=>{const[n,i]=C.useState(()=>t&&r?r.title:"توزيع الموضوعات الدراسية"),[f,j]=C.useState(()=>t&&r&&r.days.length>0?r.startDate||r.days[0].gregorianDate.substring(0,10):""),[b,c]=C.useState(()=>t&&r&&r.days.length>0?r.endDate||r.days[r.days.length-1].gregorianDate.substring(0,10):""),[p,l]=C.useState(()=>t&&r?r.days.map(s=>({...s,gregorianDate:new Date(s.gregorianDate)})):[]),[d,y]=C.useState(()=>t&&r?r.meta:{administration:"",school:"",term:"",academicYear:"",subject:"",grade:"",teacherName:"",useEasternDigits:!1,hideWeekends:!1,hiddenWeeks:[],logo:""}),[I,v]=C.useState(!1),[w,k]=C.useState(!1),[W,L]=C.useState(()=>t?"cards":"table"),m=C.useRef(null),h=C.useCallback(()=>{if(f&&b){const s=oe(f,b);l(x=>s.map(g=>{const a=x.find(O=>O.gregorianDate.toDateString()===g.gregorianDate.toDateString()),D=g.gregorianDate.getDay(),H=D===5||D===6,E=(a==null?void 0:a.isSpecial)||!1;if(d.hideWeekends&&H)return{...g,topic:"--- عطلة نهاية الأسبوع ---"};const F=a!=null&&a.topic&&a.topic!=="--- عطلة نهاية الأسبوع ---"?a.topic:"";return{...g,topic:F,isSpecial:E}}))}},[f,b,d.hideWeekends]);C.useEffect(()=>{t||h()},[d.hideWeekends]),C.useEffect(()=>{if(p.length>0){const x=p[p.length-1].gregorianDate.toISOString().substring(0,10);x!==b&&c(x)}},[p]);const T=C.useCallback((s,x)=>{l(g=>g.map((a,D)=>D===s?{...a,topic:x}:a))},[]),M=C.useCallback(s=>{y(x=>{const g=x.hiddenWeeks||[],a=g.includes(s)?g.filter(D=>D!==s):[...g,s];return{...x,hiddenWeeks:a}})},[]),$=C.useCallback((s,x)=>{l(g=>{const a=[...g];let D=s,H=0;const E=new Array(a.length).fill(0);for(let F=0;F<a.length;F++){const O=a[F].gregorianDate.getDay();F>0&&O===0&&H++,E[F]=H}return x.forEach(F=>{for(;D<a.length;){const _=a[D].gregorianDate.getDay(),je=_===5||_===6,ve=E[D];if(d.hiddenWeeks&&d.hiddenWeeks.includes(ve)){D++;continue}if(!(d.hideWeekends&&je)){a[D].topic=F,D++;return}D++}}),a})},[d.hideWeekends,d.hiddenWeeks]),N=async()=>{var s;try{if(!((s=navigator.clipboard)!=null&&s.readText)){alert("متصفحك لا يدعم هذه الميزة. الرجاء اللصق يدوياً.");return}const x=await navigator.clipboard.readText();if(!x||x.trim()===""){alert("لا يوجد موضوعات منسوخة في الحافظة.");return}const g=x.split(/\r?\n/).filter(a=>a.trim()!=="");$(0,g)}catch(x){console.error("Clipboard paste failed:",x),alert("فشل اللصق التلقائي. الرجاء اللصق يدوياً في الخلية الأولى.")}},A=C.useCallback(()=>{window.confirm("هل أنت متأكد من رغبتك في مسح جميع الموضوعات؟")&&l(s=>s.map(x=>{const g=x.gregorianDate.getDay(),a=g===5||g===6;let D="";return d.hideWeekends&&a&&(D="--- عطلة نهاية الأسبوع ---"),{...x,topic:D}}))},[d.hideWeekends]),J=C.useCallback(s=>{window.confirm("هل أنت متأكد من رغبتك في مسح محتوى هذا الموضوع؟")&&T(s,"")},[T]),V=C.useCallback(s=>{l(x=>x.map((g,a)=>a===s?{...g,isSpecial:!g.isSpecial}:g))},[]),S=C.useCallback(s=>{l(x=>{const g=[...x],a=new Date(g[s].gregorianDate.getTime());a.setDate(a.getDate()+1);const D={gregorianDate:a,topic:""};g.splice(s+1,0,D);for(let H=s+2;H<g.length;H++)g[H].gregorianDate.setDate(g[H].gregorianDate.getDate()+1);return g})},[]),P=C.useCallback(s=>{l(x=>{const g=[...x],a=g[s],D={...a,gregorianDate:new Date(a.gregorianDate.getTime())};return g.splice(s+1,0,D),g})},[]),Y=C.useCallback(s=>{window.confirm("هل أنت متأكد من رغبتك في حذف هذا الصف؟")&&l(x=>x.filter((g,a)=>a!==s))},[]),B=C.useCallback((s,x)=>{l(g=>{const a=[...g],D=a[s],H=a[x];return[a[s],a[x]]=[{...D,topic:H.topic,isSpecial:H.isSpecial},{...H,topic:D.topic,isSpecial:D.isSpecial}],a})},[]),z=s=>{var a;const x=(a=s.target.files)==null?void 0:a[0];if(!x)return;const g=new FileReader;g.onload=D=>{var H;try{const E=JSON.parse((H=D.target)==null?void 0:H.result);if(!E||!E.startDate||!E.endDate||!E.title){alert("ملف JSON غير صالح.");return}i(E.title),j(E.startDate),c(E.endDate),y(F=>({...F,...E.meta})),E.viewMode&&L(E.viewMode),setTimeout(()=>{const F=oe(E.startDate,E.endDate);Array.isArray(E.days)&&E.days.forEach((O,_)=>{F[_]&&(F[_].topic=O.topic||"",O.isSpecial&&(F[_].isSpecial=!0))}),l(F)},0)}catch{alert("فشل قراءة ملف JSON.")}finally{m.current&&(m.current.value="")}},g.readAsText(x,"utf-8")},Z=async()=>{try{if(!p.length){alert("لا يوجد جدول لتصديره");return}await $e({title:n,startDate:f,endDate:b,days:p,meta:d,viewMode:W})}catch(s){console.error(s),alert("فشل التصدير")}};return e.jsxs("div",{className:"container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl",children:[e.jsxs("main",{className:"bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[e.jsx(Fe,{title:n,onTitleChange:i,isReadOnly:t}),t?e.jsx(He,{onPrint:()=>ie(n),onConfigClick:()=>v(s=>!s),isConfigVisible:I}):e.jsx(Me,{onPrint:()=>ie(n),onCopy:()=>{},onViewModeChange:()=>L(s=>s==="table"?"cards":"table"),currentViewMode:W,onPasteTopics:N,onClearAllTopics:A,onExportText:()=>Te(p),onExportJson:()=>Ce({title:n,startDate:f,endDate:b,days:p,meta:d,viewMode:W}),onExportHtml:Z,onExportWord:()=>We({title:n,startDate:f,days:p,meta:d}),onImportClick:()=>{var s;return(s=m.current)==null?void 0:s.click()},onHelpClick:()=>k(!0),onConfigClick:()=>v(s=>!s),isConfigVisible:I,isDataActionsDisabled:p.length===0,showHtmlExport:o}),w&&e.jsx(Re,{onClose:()=>k(!1)}),e.jsx("div",{className:"mb-6 print:hidden",children:I&&e.jsxs("div",{className:"p-6 border border-gray-300 rounded-lg bg-white shadow-sm",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4 border-b pb-2",children:"إعدادات الترويسة والطباعة"}),e.jsx(Oe,{meta:d,onSave:y,isReadOnly:t})]})}),!t&&p.length===0&&e.jsx(ze,{startDate:f,endDate:b,onDatesChange:(s,x)=>{j(s),c(x)},onGenerate:h}),e.jsx("div",{className:"mt-6",children:e.jsxs("div",{id:"printable-area",children:[e.jsx("div",{id:"printable-header-content",children:e.jsx(Ae,{meta:d,title:n})}),e.jsx("div",{id:"printable-area-content",children:p.length>0?W==="table"?e.jsx(se,{days:p,meta:d,onTopicChange:T,onTopicPaste:$,onAddRow:S,onDuplicateRow:P,onSwapTopics:B,onToggleSpecialDay:V,onClearTopic:J,onDeleteRow:Y,onToggleWeekVisibility:M,isReadOnly:t}):e.jsx(Ve,{days:p,meta:d,onToggleWeekVisibility:M}):e.jsx(se,{days:[],meta:d,onTopicChange:T,onTopicPaste:$})}),e.jsx("div",{id:"printable-footer-content",children:e.jsx(Pe,{meta:d})})]})}),!t&&e.jsx("input",{type:"file",ref:m,accept:".json,application/json",className:"hidden",onChange:z})]}),e.jsx(Be,{})]})};export{Ye as A};
