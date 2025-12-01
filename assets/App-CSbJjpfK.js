import{j as e,r as $}from"./index-BrsPDACf.js";const ve=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],a=(t,n)=>{const r=String(t);return n?r.replace(/[0-9]/g,o=>ve[parseInt(o)]):r},U=(t,n)=>{try{return new Intl.DateTimeFormat(t,n)}catch{return null}},Q=U("ar-SA-u-nu-latn",{day:"2-digit",month:"2-digit",year:"numeric",calendar:"gregory"}),ee=U("ar-SA-u-ca-islamic-umalqura-nu-latn",{day:"2-digit",month:"2-digit",year:"numeric",calendar:"islamic-umalqura"}),ke=t=>ee?ee.format(t).replace(" هـ",""):"N/A",te=U("ar-SA",{weekday:"long"}),Y=t=>{if(Q)return Q.format(t);const n=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),o=t.getFullYear();return`${n}/${r}/${o}`},J=t=>ke(t),ie=t=>te?te.format(t):["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"][t.getDay()],re=t=>{if(!t)return null;const n=new Date(t);return isNaN(n.getTime())?null:n},ne=(t,n)=>{const r=re(t),o=re(n);if(!r||!o||o<r)return[];const l=[];let u=new Date(r.getTime());for(;u<=o;)l.push({gregorianDate:new Date(u.getTime()),topic:""}),u.setDate(u.getDate()+1);return l},Ne=t=>{if(!t.days.length){alert("لا يوجد جدول لتصديره.");return}const n={version:5,...t,days:t.days.map((l,u)=>({index:u+1,topic:l.topic,gregorianDate:l.gregorianDate.toISOString(),isSpecial:l.isSpecial||!1}))},r=new Blob([JSON.stringify(n,null,2)],{type:"application/json;charset=utf-8;"}),o=`plan_${t.startDate}_to_${t.endDate}.json`;G(r,o)},De=t=>{if(!t.length){alert("لا يوجد جدول لتصديره.");return}const n=t.map(o=>o.topic.trim().replace(/\r?\n/g," ")).filter(Boolean).join(`\r
`);if(!n){alert("لا توجد موضوعات مكتوبة لتصديرها.");return}const r=new Blob(["\uFEFF"+n],{type:"text/plain;charset=utf-8;"});G(r,"topics.txt")},G=(t,n)=>{const r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)},ae=()=>`
    body { font-family: 'Tajawal', sans-serif !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
    /* Adjusted margins for better print layout */
    @page { size: A4 landscape; margin: 0.75cm; }
    
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
        text-align: center !important; 
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
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
        gap: 2px !important;
    }
    
    /* Typography */
    .print-text-lg { font-size: 16pt !important; font-weight: bold !important; margin-bottom: 5px !important; white-space: nowrap !important; }
    .print-text-base { font-size: 12pt !important; font-weight: bold !important; margin-bottom: 2px !important; white-space: nowrap !important; }
    .print-text-sm { font-size: 11pt !important; margin-bottom: 1px !important; white-space: nowrap !important; }
    
    /* Logo sizing - Adjusted to be flexible, centered and not cropped */
    img.header-logo-img { 
        max-height: 75px !important; 
        width: auto !important; 
        object-fit: contain !important;
        display: inline-block !important;
    }

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
        padding: 0.4rem !important; 
        display: flex !important; 
        flex-direction: column !important; 
        font-size: 9pt !important; 
        height: fit-content !important;
    }
    .card-item .card-header { display: flex !important; justify-content: space-between !important; align-items: baseline !important; border-bottom: 1px solid #e2e8f0 !important; padding-bottom: 0.25rem !important; margin-bottom: 0.25rem !important; }
    .card-item h3 { font-weight: bold !important; font-size: 10pt !important; color: #2b6cb0 !important; }
    .card-item .card-date { font-size: 8pt !important; color: #718096 !important; text-align: left !important; }
    .card-item ol { list-style-type: decimal !important; list-style-position: inside !important; padding-right: 0.5rem !important; color: #2d3748 !important; flex-grow: 1 !important; margin: 0; }
    .card-item ol li { margin-bottom: 1px !important; padding-bottom: 0 !important; line-height: 1.3 !important; }
    .card-item p.text-gray-400 { color: #a0aec0 !important; text-align: center !important; flex-grow: 1 !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 1rem 0 !important; }

    /* Hiding classes for week visibility feature */
    .print\\:hidden { display: none !important; }

    /* Print Card Header Overrides (Vertical Layout) */
    .print-card-header { 
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        padding-bottom: 4px !important;
    }
    .print-card-week {
        width: 100% !important;
        justify-content: center !important;
        margin-bottom: 4px !important;
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
`,Ce=(t,n)=>{const{useEasternDigits:r}=t;return`
      <div style="margin-bottom: 10px; border-bottom: 2px solid black; padding-bottom: 10px;">
        <table style="width: 100%; border: none; margin-bottom: 5px;" dir="rtl">
            <tr style="border: none;">
                <td style="width: 20%; text-align: center; vertical-align: middle; border: none;">
                     ${t.logo?`<img src="${t.logo}" width="75" height="75" style="width: 75px; height: 75px; object-fit:contain; display:inline-block;" />`:""}
                </td>
                <td style="width: 60%; text-align: center; vertical-align: middle; border: none;">
                    <p style="font-size: 16pt; font-weight: bold; margin:0; font-family: 'Tajawal', sans-serif;">${a(n,r)}</p>
                    <p style="font-size: 12pt; margin:0; font-family: 'Tajawal', sans-serif;">${a(`إدارة التعليم: ${t.administration}`,r)}</p>
                    <p style="font-size: 12pt; margin:0; font-family: 'Tajawal', sans-serif;">${a(`المدرسة: ${t.school}`,r)}</p>
                </td>
                <td style="width: 20%; text-align: center; vertical-align: top; font-size: 10pt; border: none; font-family: 'Tajawal', sans-serif;">
                    <p style="margin:0;">${a(`العام: ${t.academicYear}`,r)}</p>
                    <p style="margin:0;">${a(`الفصل: ${t.term}`,r)}</p>
                    <p style="margin:0;">${a(`المادة: ${t.subject}`,r)}</p>
                    <p style="margin:0;">${a(`الصف: ${t.grade}`,r)}</p>
                </td>
            </tr>
        </table>
      </div>
    `},We=t=>{const{useEasternDigits:n}=t;return t.teacherName?`
      <div style="margin-top: 30px; text-align: center; font-size: 12pt; font-weight: bold; font-family: 'Tajawal', sans-serif;">
          <span style="margin-left: 50px;">${a(`اسم المعلم/ـة: ${t.teacherName}`,n)}</span>
          <span>${a("التوقيع: ........................",n)}</span>
      </div>
    `:""},Te=(t,n,r)=>{const o=a(J(t),r.useEasternDigits),l=a(J(n),r.useEasternDigits),u=a(Y(t),r.useEasternDigits),k=a(Y(n),r.useEasternDigits);return`(${o} - ${l}هـ | ${u} - ${k}م)`},$e=(t,n)=>{const r=a(J(t),n.useEasternDigits),o=a(Y(t),n.useEasternDigits);return`(${r}هـ - ${o}م)`},Ee=t=>{const{days:n,meta:r,viewMode:o,title:l}=t,u=Ce(r,l),k=We(r);let b="";const g=o==="table"?'<w:pgSz w:w="11906" w:h="16838"/>':'<w:pgSz w:w="16838" w:h="11906" w:orient="landscape"/>',f='<w:pgMar w:top="720" w:right="720" w:bottom="720" w:left="720" w:header="708" w:footer="708" w:gutter="0"/>';b=`
            <w:WordDocument>
                <w:View>Print</w:View>
                <w:Zoom>100</w:Zoom>
                <w:DoNotOptimizeForBrowser/>
            </w:WordDocument>
        `;const m=o==="table"?"21cm 29.7cm":"29.7cm 21cm";let c="";if(o==="table"){let W="";const L=r.hiddenWeeks||[];let T=-1,y=0;const I=new Map;for(let s=0;s<n.length;s++){const v=n[s].gregorianDate.getDay(),E=s===0||v===0;if(E&&T++,!I.has(s)){let C=1;if(E){for(let j=s+1;j<n.length&&n[j].gregorianDate.getDay()!==0;j++)C++;L.includes(T)||y++}I.set(s,{num:y,span:C,processed:!1})}}T=-1,n.forEach((s,p)=>{const v=s.gregorianDate.getDay(),E=p===0||v===0;E&&T++;const C=v===5||v===6,j=r.hideWeekends&&C;if(L.includes(T))return;let R="transparent";s.isSpecial?R="#fefcbf":j&&(R="#e2e8f0");let O="";if(E){const z=I.get(p);z&&(O=`<td rowspan="${z.span}" style="border:1px solid black; background-color:transparent; text-align:center; vertical-align:middle; font-weight:bold;">${a(z.num,r.useEasternDigits)}</td>`)}const N=$e(s.gregorianDate,r),P=(s.topic||"").replace(/\n/g,"<br>");W+=`
                <tr style="background-color: ${R};">
                    ${O}
                    <td style="border:1px solid black; text-align:center; vertical-align:middle;">${a(p+1,r.useEasternDigits)}</td>
                    <td style="border:1px solid black; text-align:center; vertical-align:middle; white-space:nowrap;">${ie(s.gregorianDate)}</td>
                    <td style="border:1px solid black; text-align:center; vertical-align:middle; white-space:nowrap; direction: rtl;">${N}</td>
                    <td style="border:1px solid black; text-align:right; vertical-align:top; padding:4px;">${P}</td>
                </tr>
            `}),c=`
            <table style="width: 100%; border-collapse: collapse; font-size: 10pt; table-layout: fixed;" dir="rtl">
                <thead>
                    <tr style="background-color: #f7fafc;">
                        <th style="border:1px solid black; width: 5%;">الأسبوع</th>
                        <th style="border:1px solid black; width: 5%;">م</th>
                        <th style="border:1px solid black; width: 10%;">اليوم</th>
                        <th style="border:1px solid black; width: 18%;">التاريخ</th>
                        <th style="border:1px solid black; width: 62%;">الموضوعات الدراسية</th>
                    </tr>
                </thead>
                <tbody>
                    ${W}
                </tbody>
            </table>
        `}else{const W=r.hiddenWeeks||[],L=n.reduce((s,p,v)=>((p.gregorianDate.getDay()===0||v===0)&&s.push([]),s[s.length-1].push(p),s),[]);let T=0,y=[];const I=[];if(L.forEach((s,p)=>{if(W.includes(p))return;T++;const E=s[0].gregorianDate,C=s[s.length-1].gregorianDate,j=s.filter(N=>{const P=N.gregorianDate.getDay(),z=P===5||P===6;return!(r.hideWeekends&&z)&&N.topic&&N.topic.trim()!==""&&N.topic.trim()!=="--- عطلة نهاية الأسبوع ---"&&N.topic.trim()!=="--- إجازة رسمية ---"});let A="";j.length>0?A=`<div style="margin: 0; padding-right: 5px; margin-top:2px;">
                    ${j.map((N,P)=>`
                        <div style="margin-bottom: 2px; line-height:1.2; display: flex;">
                             <span style="font-weight: bold; margin-left: 4px;">${a(P+1,r.useEasternDigits)}.</span>
                             <span>${N.isSpecial?`<span style="background-color: #fef08a;">${N.topic}</span>`:N.topic}</span>
                        </div>
                    `).join("")}
                </div>`:A='<p style="color: #9ca3af; text-align: center; margin:0;">لا توجد موضوعات</p>';const R=Te(E,C,r),O=`
                <td style="border: 1px solid #000; padding: 6px; vertical-align: top; width: 25%; background-color: #fff;">
                    <div style="border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-bottom: 4px; text-align: center;">
                        <div style="font-weight: bold; color: #1d4ed8; font-size: 10pt;">الأسبوع ${a(T,r.useEasternDigits)}</div>
                        <div style="font-size: 8pt; color: #374151; direction: rtl;">
                            ${R}
                        </div>
                    </div>
                    ${A}
                </td>
            `;y.push(O),y.length===4&&(I.push(`<tr>${y.join("")}</tr>`),y=[])}),y.length>0){for(;y.length<4;)y.push('<td style="border: 1px solid transparent;"></td>');I.push(`<tr>${y.join("")}</tr>`)}c=`
            <table style="width: 100%; border-collapse: collapse; table-layout: fixed;" dir="rtl">
                <tbody>
                    ${I.join("")}
                </tbody>
            </table>
        `}const w=`
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40' dir="rtl">
        <head>
            <meta charset="utf-8">
            <title>${l}</title>
            <!--[if gte mso 9]>
            <xml>
                ${b}
            </xml>
            <![endif]-->
            <style>
                body { font-family: 'Tajawal', sans-serif; }
                table { border-collapse: collapse; width: 100%; }
                thead { display: table-header-group; }
                tfoot { display: table-footer-group; }
                
                /* Define Section1 with margins and orientation */
                @page Section1 {
                    size: ${m};
                    margin: 1.27cm 1.27cm 1.27cm 1.27cm;
                    mso-header-margin: 35.4pt;
                    mso-footer-margin: 35.4pt;
                    mso-paper-source: 0;
                }
                div.Section1 { page: Section1; }
            </style>
        </head>
        <body>
            <div class="Section1">
                <!-- Wrapper Table -->
                <table style="width: 100%; border: none;">
                    <thead>
                        <tr>
                            <td style="border: none;">
                                ${u}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: none;">
                                ${c}
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                         <tr>
                            <td style="border: none;">
                                ${k}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <!-- XML to define page settings explicitly for Section1 -->
            <!--[if gte mso 9]>
            <xml>
                <w:WordDocument>
                    <w:View>Print</w:View>
                    <w:Zoom>100</w:Zoom>
                </w:WordDocument>
                <w:sectPr>
                    ${g}
                    ${f}
                </w:sectPr>
            </xml>
            <![endif]-->
        </body>
        </html>
    `,F=new Blob(["\uFEFF",w],{type:"application/msword"});G(F,`plan_export_${new Date().getTime()}.doc`)},Se=async t=>{const n=document.getElementById("printable-area-content"),{meta:r,title:o}=t,{useEasternDigits:l}=r;if(!n){alert("حدث خطأ: لا يمكن العثور على المحتوى للتصدير.");return}const u=`
      <div class="mb-2" id="main-header">
        <div class="print-header-row">
          <!-- Right Column: Logo -->
          <div class="print-col-right">
             <img id="header-logo" src="${r.logo||""}" alt="شعار" class="header-logo-img" style="display: ${r.logo?"inline-block":"none"}" />
          </div>
          
          <!-- Center Column -->
          <div class="print-col-center">
             <div id="header-title" class="print-text-lg">${a(o,l)}</div>
             <div id="header-admin" class="print-text-base">${a(`إدارة التعليم: ${r.administration}`,l)}</div>
             <div id="header-school" class="print-text-base">${a(`المدرسة: ${r.school}`,l)}</div>
          </div>
          
          <!-- Left Column -->
          <div class="print-col-left">
             <div id="header-year" class="print-text-sm">${a(`العام: ${r.academicYear}`,l)}</div>
             <div id="header-term" class="print-text-sm">${a(`الفصل: ${r.term}`,l)}</div>
             <div id="header-subject" class="print-text-sm">${a(`المادة: ${r.subject}`,l)}</div>
             <div id="header-grade" class="print-text-sm">${a(`الصف: ${r.grade}`,l)}</div>
          </div>
        </div>
        <!-- Explicit Border DIV matching Layout.tsx -->
        <div class="mt-2 pb-2 border-b-2 border-black" style="margin-top: 0.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid black;"></div>
      </div>
  `,k=r.teacherName?a(`اسم المعلم/ـة: ${r.teacherName}`,r.useEasternDigits):"",b=r.teacherName?a("التوقيع: ........................",r.useEasternDigits):"",g=`
    <div class="mt-8 text-center text-sm font-bold flex justify-center items-center gap-12 print-footer-row">
        <span id="footer-teacher">${k}</span>
        <span id="footer-signature">${b}</span>
    </div>
  `,f=n.cloneNode(!0);f.querySelectorAll("textarea[data-row-index]").forEach(T=>{var v;const y=T,I=document.createElement("div");I.innerHTML=y.value.replace(/\n/g,"<br />");const s=y.closest("tr"),p=s&&s.classList.contains("print:hidden");I.className=`p-2 w-full h-full ${y.disabled?"text-center":""}`,(y.disabled||p)&&I.classList.add("bg-gray-200"),(v=y.parentNode)==null||v.replaceChild(I,y)});const m=Array.from(document.querySelectorAll("style")).map(T=>T.innerText).join(`
`),c=Array.from(document.querySelectorAll("link[rel='stylesheet'], link[rel='preconnect']")).map(T=>T.outerHTML).join(`
`),w=`
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
  `,F=`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${t.title}</title>
  ${c}
  <style>
      ${m}
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

  ${w}

  <!-- WRAPPED IN TABLE FOR PRINT HEADER REPETITION -->
  <div class="container">
      <table style="width: 100%; border: none; border-collapse: collapse;">
        <thead>
            <tr>
                <td style="border: none; padding: 0;">
                    ${u}
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: none; padding: 0;">
                    <div class="mt-6">
                        ${f.innerHTML}
                    </div>
                    <!-- Footer appended here to avoid repetition -->
                    ${g}
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
`,W=new Blob([F.trim()],{type:"text/html;charset=utf-8;"}),L=`school_plan_${t.startDate||"new"}.html`;G(W,L)},oe=t=>{var g,f;const n=document.getElementById("printable-area-content"),r=(g=document.getElementById("printable-header-content"))==null?void 0:g.innerHTML,o=(f=document.getElementById("printable-footer-content"))==null?void 0:f.innerHTML;if(!n||!r||!o){alert("حدث خطأ أثناء محاولة الطباعة.");return}const l=n.cloneNode(!0);l.querySelectorAll("textarea[data-row-index]").forEach(m=>{var T;const c=m,w=document.createElement("div");w.style.whiteSpace="pre-wrap",w.style.wordWrap="break-word",w.textContent=c.value;const F=c.disabled,W=c.closest("tr"),L=W&&W.classList.contains("print:hidden");w.className=`p-2 w-full h-full ${F||L?"text-center":""}`,(T=c.parentNode)==null||T.replaceChild(w,c)});const u=Array.from(document.querySelectorAll("style")).map(m=>m.innerText).join(`
`),k=Array.from(document.querySelectorAll("link[rel='stylesheet'], link[rel='preconnect']")).map(m=>m.outerHTML).join(`
`),b=window.open("","_blank");if(!b){alert("فشل فتح نافذة الطباعة.");return}b.document.write(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8" />
        <title>${t}</title>
        ${k}
        <style>
            ${u}
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
                        ${l.innerHTML}
                        ${o}
                    </td>
                </tr>
            </tbody>
            <!-- No TFOOT to avoid repetition -->
        </table>
    </body>
    </html>`),b.document.close(),setTimeout(()=>{try{b.focus(),b.print(),b.close()}catch(m){console.error(m),b.close()}},1200)},Le=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors",children:e.jsx("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"})}),Z=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),le=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),e.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]}),Ie=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),e.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),e.jsx("line",{x1:"10",y1:"9",x2:"8",y2:"9"})]}),de=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),e.jsx("polyline",{points:"14 2 14 8 20 8"}),e.jsx("path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1"}),e.jsx("path",{d:"M14 12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1"})]}),ce=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),Me=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.jsx("polyline",{points:"17 8 12 3 7 8"}),e.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),q=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0 .73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0 2l.15.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),pe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M15 2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2Z"}),e.jsx("path",{d:"M9 2v4h6V2"}),e.jsx("path",{d:"M12 12v6"}),e.jsx("path",{d:"m15 15-3 3-3-3"})]}),ge=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]}),He=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3 6 5 6 21 6"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),me=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("line",{x1:"15",y1:"9",x2:"12.5",y2:"9"}),e.jsx("path",{d:"M10 9H8"}),e.jsx("path",{d:"M15 13h-2.5"}),e.jsx("path",{d:"M10 13H8"}),e.jsx("path",{d:"M15 5H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"}),e.jsx("rect",{width:"8",height:"8",x:"12",y:"9",rx:"2"}),e.jsx("path",{d:"M16 13v4"}),e.jsx("path",{d:"M14 15h4"})]}),Fe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("path",{d:"M3 6h18"}),e.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}),e.jsx("path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),he=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"8",y1:"12",x2:"16",y2:"12"})]}),Be=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),e.jsx("path",{d:"M12 17h.01"})]}),xe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("path",{d:"m18 5-3-3-7.2 7.2a3 3 0 0 0-1.06 2.12V18h5.66a3 3 0 0 0 2.12-1.06Z"}),e.jsx("path",{d:"m9 12 2 2"}),e.jsx("path",{d:"M14.5 5.5 16 4 20 8l-1.5 1.5"}),e.jsx("path",{d:"M12 15v6"}),e.jsx("path",{d:"M17 11v-1a2 2 0 0 0-2-2h-1"})]}),Ae=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e.jsx("polyline",{points:"5 9 2 12 5 15"}),e.jsx("polyline",{points:"9 5 12 2 15 5"}),e.jsx("polyline",{points:"15 19 12 22 9 19"}),e.jsx("polyline",{points:"19 9 22 12 19 15"}),e.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"})]}),X=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[e.jsx("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"}),e.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),ue=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-4 h-4",children:[e.jsx("path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"}),e.jsx("path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"}),e.jsx("path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"}),e.jsx("line",{x1:"2",y1:"2",x2:"22",y2:"22"})]}),B=({onClick:t,children:n,className:r="bg-blue-600 hover:bg-blue-700",disabled:o=!1,title:l})=>e.jsx("button",{type:"button",onClick:t,disabled:o,title:l,className:`flex items-center justify-center gap-2 px-6 py-2 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${r} ${o?"opacity-50 cursor-not-allowed":"hover:scale-105"}`,children:n}),Pe=({onPrint:t,onCopy:n,onPasteTopics:r,onClearAllTopics:o,onExportText:l,onExportJson:u,onExportHtml:k,onImportClick:b,onHelpClick:g,onConfigClick:f,onViewModeChange:m,currentViewMode:c,isDataActionsDisabled:w,isConfigVisible:F,showHtmlExport:W=!1})=>e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 print:hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsxs(B,{onClick:t,disabled:w,title:"طباعة الخطة أو حفظها كملف PDF",children:[e.jsx(Z,{})," طباعة / PDF"]}),e.jsxs(B,{onClick:n,disabled:w,className:"bg-green-600 hover:bg-green-700",title:"تصدير ملف Word (جدول أو مربعات حسب العرض الحالي)",children:[e.jsx(le,{})," تصدير Word"]}),e.jsxs(B,{onClick:m,disabled:w,className:"bg-teal-600 hover:bg-teal-700",title:"تبديل طريقة العرض بين الجدول والمربعات",children:[e.jsx(ge,{})," ",c==="table"?"عرض المربعات":"عرض الجدول"]}),e.jsxs(B,{onClick:r,disabled:w,className:"bg-purple-600 hover:bg-purple-700",title:"لصق قائمة من الموضوعات من الحافظة وتوزيعها على الأيام",children:[e.jsx(pe,{})," لصق الموضوعات"]}),e.jsxs(B,{onClick:o,disabled:w,className:"bg-red-600 hover:bg-red-700",title:"مسح جميع الموضوعات من الجدول لإعادة التعبئة",children:[e.jsx(He,{})," مسح الموضوعات"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[e.jsxs(B,{onClick:l,disabled:w,title:"تصدير قائمة الموضوعات كملف نصي",children:[e.jsx(Ie,{})," تصدير نصي"]}),e.jsxs(B,{onClick:u,disabled:w,title:"حفظ العمل بالكامل في ملف يمكن استيراده لاحقًا",children:[e.jsx(de,{})," تصدير JSON"]}),W&&e.jsxs(B,{onClick:k,disabled:w,title:"تصدير كملف HTML تفاعلي (للمدارس)",children:[e.jsx(ce,{})," تصدير HTML"]}),e.jsxs(B,{onClick:b,className:"bg-gray-600 hover:bg-gray-700",title:"استيراد ملف عمل تم حفظه مسبقًا",children:[e.jsx(Me,{})," استيراد JSON"]}),e.jsxs(B,{onClick:f,className:"bg-gray-600 hover:bg-gray-700",children:[e.jsx(q,{})," ",F?"إغلاق الإعدادات":"فتح الإعدادات"]}),e.jsxs(B,{onClick:g,className:"bg-indigo-600 hover:bg-indigo-700",title:"عرض دليل الاستخدام",children:[e.jsx(Be,{})," مساعدة"]})]})]}),Re=({onPrint:t,onConfigClick:n,isConfigVisible:r})=>e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200 print:hidden",children:[e.jsxs(B,{onClick:t,children:[e.jsx(Z,{})," طباعة / PDF"]}),e.jsxs(B,{onClick:n,className:"bg-gray-600 hover:bg-gray-700",children:[e.jsx(q,{}),r?"إغلاق الإعدادات":"فتح الإعدادات"]})]}),Oe=({title:t,onTitleChange:n,isReadOnly:r=!1})=>{const o=$.useRef(null),l=u=>n(u.currentTarget.innerText);return e.jsxs("header",{className:"text-center mb-8 print:hidden",children:[e.jsxs("div",{className:"group inline-flex items-center gap-2 cursor-text",onClick:()=>{var u;return!r&&((u=o.current)==null?void 0:u.focus())},children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-gray-800",children:r?e.jsx("span",{className:"px-2 py-1",children:t}):e.jsx("span",{ref:o,contentEditable:!0,suppressContentEditableWarning:!0,onBlur:l,className:"px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50",style:{minWidth:"100px",display:"inline-block"},children:t})}),!r&&e.jsx("div",{className:"title-icon","aria-hidden":"true",title:"العنوان قابل للتعديل",children:e.jsx(Le,{})})]}),r&&e.jsx("p",{className:"text-gray-500 mt-2",children:'هذه نسخة قابلة للتخصيص والطباعة. استخدم زر "إعداد الترويسة" لتعديل بياناتك.'})]})},ze=()=>e.jsxs("footer",{className:"mt-8 text-center p-4 bg-white rounded-lg shadow-sm",children:[e.jsx("a",{href:"https://t.me/Interact2030",target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-blue-600 transition-colors text-sm",children:"برمجة و تصميم/ ملتقى التعليم التفاعلي بملتقى معلمي ومعلمات الرياضيات ـ المملكة العربية السعودية."}),e.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["تمت البرمجة باستخدام"," ",e.jsx("a",{href:"https://developers.google.com/studio",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Google Studio"})," ","و"," ",e.jsx("a",{href:"https://gemini.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",children:"Gemini"})," ","بواسطة"," ",e.jsx("a",{href:"https://t.me/Interact2030",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline font-semibold",children:"ملتقى التعليم التفاعلي"}),"."]})]}),Ve=({onClose:t})=>{const n=[{icon:e.jsx(Z,{}),name:"طباعة / PDF",desc:"طباعة الخطة بتنسيق محسن (تكرار الترويسة، تذييل في آخر صفحة) أو حفظها كملف PDF."},{icon:e.jsx(le,{}),name:"تصدير Word",desc:"تحميل ملف Word (.doc) منسق تلقائياً. (ورقة طولية للجدول، وعرضية للمربعات، مع ضبط الهوامش)."},{icon:e.jsx(ge,{}),name:"عرض المربعات/الجدول",desc:"التبديل بين العرض التفصيلي (الجدول) والعرض الملخص (المربعات/البطاقات)."},{icon:e.jsx(pe,{}),name:"لصق الموضوعات",desc:"لصق قائمة موضوعات دفعة واحدة. (يتم تجاوز الأسابيع المخفية/الإجازات تلقائياً)."},{icon:e.jsx(ce,{}),name:"تصدير HTML (للمدارس)",desc:"إنشاء ملف تفاعلي مستقل يعمل بدون إنترنت، يحتوي على أدوات الطباعة والإعدادات."},{icon:e.jsx(de,{}),name:"تصدير/استيراد JSON",desc:"حفظ العمل بالكامل للعودة إليه لاحقاً، أو استعادته."},{icon:e.jsx(q,{}),name:"الإعدادات والشعار",desc:"إضافة بيانات المدرسة، المعلم، ورفع الشعار ليظهر في الطباعة والتصدير."}],r=[{icon:e.jsx(X,{}),name:"إخفاء/إظهار الأسبوع",desc:"اضغط على 'العين' بجانب رقم الأسبوع لإخفائه (للإجازات). لن يظهر في الطباعة ولن ترقم موضوعاته."},{icon:e.jsx(he,{}),name:"حذف/إضافة يوم",desc:"استخدم (+/-) لإضافة يوم إضافي أو حذف يوم مكرر."},{icon:e.jsx(me,{}),name:"تكرار اليوم",desc:"لإنشاء نسخة من الصف الحالي بنفس التاريخ (لموضوع إضافي)."},{icon:e.jsx(xe,{}),name:"تلوين يوم مميز",desc:"تمييز يوم بلون خاص. (يظهر التلوين في الوورد والطباعة)."},{icon:e.jsx(Ae,{}),name:"سحب وإفلات",desc:"يمكنك سحب أي صف وإفلاته لتبديل الموضوعات."}];return e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 print:hidden",onClick:t,children:e.jsxs("div",{className:"bg-white rounded-lg shadow-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto",onClick:o=>o.stopPropagation(),children:[e.jsxs("div",{className:"flex justify-between items-center border-b pb-3 mb-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"دليل استخدام المخطط المطور"}),e.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-800 text-3xl font-bold",children:"×"})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg mb-6 border border-blue-100 text-sm text-blue-800",children:[e.jsx("strong",{children:"نصيحة سريعة:"}),' يمكنك الآن إخفاء أسابيع "الإجازات المطولة" أو "الاختبارات" بالضغط على أيقونة العين 👁️ بجوار رقم الأسبوع، وسيتم تجاهلها تلقائياً عند لصق الموضوعات وعند الطباعة.']}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-3",children:"أدوات التحكم والتصدير"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:n.map(o=>e.jsxs("div",{className:"flex items-start gap-3 p-2 rounded-md bg-gray-50 border border-gray-100",children:[e.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-white text-blue-600 rounded-lg shadow-sm flex items-center justify-center border border-gray-200",children:o.icon}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-800 text-sm",children:o.name}),e.jsx("p",{className:"text-xs text-gray-600 leading-snug",children:o.desc})]})]},o.name))}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-3",children:"إدارة الجدول والأسابيع"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:r.map(o=>e.jsxs("div",{className:"flex items-start gap-3 p-2 rounded-md bg-gray-50 border border-gray-100",children:[e.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-white text-green-600 rounded-lg shadow-sm flex items-center justify-center border border-gray-200",children:o.icon}),e.jsxs("div",{children:[e.jsx("p",{className:"font-bold text-gray-800 text-sm",children:o.name}),e.jsx("p",{className:"text-xs text-gray-600 leading-snug",children:o.desc})]})]},o.name))}),e.jsx("div",{className:"mt-6 text-center border-t pt-4",children:e.jsx("button",{onClick:t,className:"px-8 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors",children:"فهمت، شكراً"})})]})})},_e=({meta:t,title:n})=>{const{useEasternDigits:r}=t;return e.jsxs("div",{className:"mb-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs px-2 print-header-row",children:[e.jsx("div",{className:"w-1/5 text-center flex justify-center items-center print-col-right",children:t.logo&&e.jsx("img",{src:t.logo,alt:"شعار",className:"h-16 w-auto max-w-full object-contain inline-block header-logo-img",loading:"eager"})}),e.jsxs("div",{className:"w-3/5 text-center print-col-center",children:[n&&e.jsx("div",{className:"text-base font-bold text-black print-text-lg",children:a(n,r)}),t.administration&&e.jsx("div",{className:"print-text-base",children:a(`إدارة التعليم: ${t.administration}`,r)}),t.school&&e.jsx("div",{className:"print-text-base",children:a(`المدرسة: ${t.school}`,r)})]}),e.jsxs("div",{className:"w-1/5 text-center print-col-left",children:[t.academicYear&&e.jsx("div",{className:"print-text-sm",children:a(`العام: ${t.academicYear}`,r)}),t.term&&e.jsx("div",{className:"print-text-sm",children:a(`الفصل: ${t.term}`,r)}),t.subject&&e.jsx("div",{className:"print-text-sm",children:a(`المادة: ${t.subject}`,r)}),t.grade&&e.jsx("div",{className:"print-text-sm",children:a(`الصف: ${t.grade}`,r)})]})]}),e.jsx("div",{className:"mt-2 pb-2 border-b-2 border-black"})]})},Ye=({meta:t})=>e.jsx("div",{className:"mt-8 text-center text-sm font-bold flex justify-center items-center gap-12 print-footer-row",children:t.teacherName&&e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a(`اسم المعلم/ـة: ${t.teacherName}`,t.useEasternDigits)}),e.jsx("span",{children:a("التوقيع: ........................",t.useEasternDigits)})]})}),Je=({startDate:t,endDate:n,onDatesChange:r,onGenerate:o})=>e.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6 print:hidden",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"startDate",className:"font-semibold text-gray-700",children:"تاريخ البداية:"}),e.jsx("input",{type:"date",id:"startDate",value:t,onChange:l=>r(l.target.value,n),className:"p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("label",{htmlFor:"endDate",className:"font-semibold text-gray-700",children:"تاريخ النهاية:"}),e.jsx("input",{type:"date",id:"endDate",value:n,onChange:l=>r(t,l.target.value),className:"p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"})]})]}),e.jsx("div",{className:"text-center mt-4",children:e.jsx("button",{onClick:o,disabled:!t||!n,className:"px-8 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",children:"توليد الجدول"})}),e.jsx("p",{className:"text-center text-sm text-gray-500 mt-3",children:'اختر مدى التواريخ ثم اضغط على زر "توليد الجدول". سيؤدي استيراد ملف JSON إلى ملء هذه الحقول تلقائيًا وتوليد الجدول.'})]}),Ge=({meta:t,onSave:n,isReadOnly:r=!1})=>{const o=$.useRef(null),l=g=>{if(r)return;const{name:f,value:m,type:c,checked:w}=g.target;n({...t,[f]:c==="checkbox"?w:m})},u=g=>{var m;if(r)return;const f=(m=g.target.files)==null?void 0:m[0];if(f){const c=new FileReader;c.onloadend=()=>{n({...t,logo:c.result})},c.readAsDataURL(f)}},k=()=>{r||(n({...t,logo:""}),o.current&&(o.current.value=""))},b=[{id:"administration",label:"إدارة التعليم:",placeholder:"مثال: إدارة التعليم بمحافظة ..."},{id:"school",label:"المدرسة:",placeholder:"مثال: مدرسة ... الابتدائية"},{id:"term",label:"الفصل الدراسي:",placeholder:"مثال: الفصل الدراسي الأول"},{id:"academicYear",label:"العام الدراسي:",placeholder:"مثال: 1447 هـ / 2026 م"},{id:"subject",label:"المادة الدراسية:",placeholder:"مثال: الرياضيات"},{id:"grade",label:"الصف الدراسي:",placeholder:"مثال: الصف الرابع"},{id:"teacherName",label:"اسم المعلم/ـة:",placeholder:"مثال: أ. محمد بن أحمد"}];return e.jsxs("div",{className:"space-y-4",children:[b.map(g=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 items-center gap-2",children:[e.jsx("label",{htmlFor:g.id,className:"font-semibold text-gray-700 md:text-right",children:g.label}),e.jsx("input",{type:"text",id:g.id,name:g.id,value:t[g.id]||"",onChange:l,placeholder:g.placeholder,disabled:r,className:"col-span-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"})]},g.id)),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 items-center gap-2 pt-2",children:[e.jsx("label",{className:"font-semibold text-gray-700 md:text-right",children:"شعار الجهة:"}),e.jsxs("div",{className:"col-span-2 flex items-center gap-4",children:[e.jsx("input",{type:"file",accept:"image/*",ref:o,onChange:u,className:"hidden",id:"logo-upload",disabled:r}),e.jsx("button",{onClick:()=>{var g;return(g=o.current)==null?void 0:g.click()},disabled:r,className:"px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:"تحميل شعار"}),t.logo&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{src:t.logo,alt:"الشعار الحالي",className:"h-12 w-12 object-contain border rounded-md"}),!r&&e.jsx("button",{onClick:k,className:"text-red-500 hover:text-red-700 font-semibold",children:"× إزالة"})]})]})]}),e.jsxs("div",{className:"flex items-center pt-2",children:[e.jsx("input",{type:"checkbox",id:"useEasternDigits",name:"useEasternDigits",checked:t.useEasternDigits,onChange:l,disabled:r,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"}),e.jsx("label",{htmlFor:"useEasternDigits",className:"mr-2 font-medium text-gray-700",children:"استخدام الأرقام الهندية (٠١٢٣٤٥٦٧٨٩)"})]}),e.jsxs("div",{className:"flex items-center pt-2",children:[e.jsx("input",{type:"checkbox",id:"hideWeekends",name:"hideWeekends",checked:t.hideWeekends,onChange:l,disabled:r,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"}),e.jsx("label",{htmlFor:"hideWeekends",className:"mr-2 font-medium text-gray-700",children:"تمييز عطلة نهاية الأسبوع (الجمعة والسبت)"})]})]})},se=({days:t,meta:n,onTopicChange:r,onTopicPaste:o,onDuplicateRow:l,onSwapTopics:u,onToggleSpecialDay:k,onClearTopic:b,onDeleteRow:g,onToggleWeekVisibility:f,isReadOnly:m=!1})=>{const[c,w]=$.useState(null),F=s=>{if(m)return;const p=s.target;if(p.tagName!=="TEXTAREA")return;const v=p.closest("tr");if(!(v!=null&&v.dataset.rowIndex))return;const E=parseInt(v.dataset.rowIndex,10);s.preventDefault();const j=s.clipboardData.getData("text").split(/\r?\n/);o(E,j)};if(t.length===0)return e.jsxs("div",{className:"text-center py-12 px-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300",children:[e.jsx("div",{className:"mx-auto text-gray-400 mb-4 w-12 h-12",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}),e.jsx("h3",{className:"text-xl font-semibold text-gray-700",children:"لم يتم إنشاء جدول بعد"}),e.jsx("p",{className:"text-gray-500 mt-2",children:"الرجاء تحديد تاريخ بداية ونهاية لإنشاء جدول التوزيع."})]});const W=(s,p)=>{const v=s.toDateString();let E=0;for(const C of p)if(C.gregorianDate.toDateString()===v&&E++,E>1)return!0;return!1},L=[],T=n.hiddenWeeks||[];let y=-1,I=0;return t.forEach((s,p)=>{const v=s.gregorianDate.getDay(),E=p===0||v===0;E&&(y++,T.includes(y)||I++);let C=1;if(E)for(let j=p+1;j<t.length&&t[j].gregorianDate.getDay()!==0;j++)C++;L.push({...s,isFirstDayOfWeek:E,weekIndex:y,weekNumber:y+1,displayWeekNumber:I,weekRowSpan:C})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse text-sm planner-table-for-print",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-gray-100 print:bg-gray-100",children:["الأسبوع","م","اليوم","التاريخ","الموضوعات الدراسية","إجراءات"].map((s,p)=>e.jsx("th",{className:`p-3 border border-gray-300 font-bold text-gray-700 text-center ${p===4?"w-2/5":p===5?"w-32 print:hidden":""} ${p<4?"whitespace-nowrap":""}`,children:s},p))})}),e.jsx("tbody",{onPaste:F,children:L.map((s,p)=>{const v=s.gregorianDate.getDay(),E=v===5||v===6,C=n.hideWeekends&&E,j=T.includes(s.weekIndex||0);let A="even:bg-white odd:bg-gray-50";j?A="bg-gray-200 text-gray-400 print:hidden":s.isSpecial?A="bg-yellow-100 text-yellow-900":C&&(A="bg-gray-200 text-gray-500");const O=c===p?"border-t-4 border-blue-500":"";return e.jsxs("tr",{"data-row-index":p,className:`${A} ${O} print:break-inside-avoid`,draggable:!m&&!C&&!j,onDragStart:N=>{N.dataTransfer.setData("text/plain",p.toString()),N.currentTarget.style.opacity="0.5"},onDragEnd:N=>{N.currentTarget.style.opacity="1",w(null)},onDragOver:N=>N.preventDefault(),onDragEnter:N=>{N.preventDefault(),!C&&!j&&w(p)},onDrop:N=>{N.preventDefault();const P=parseInt(N.dataTransfer.getData("text/plain"),10);P!==p&&!C&&!j&&u&&u(P,p),w(null)},children:[s.isFirstDayOfWeek&&e.jsx("td",{className:`p-2 border border-gray-300 text-center align-middle font-bold ${j?"":"!bg-white"} text-gray-700 relative group`,rowSpan:s.weekRowSpan,children:e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("span",{children:a(s.displayWeekNumber||0,n.useEasternDigits)}),!m&&f&&e.jsx("button",{onClick:()=>f(s.weekIndex||0),className:"print:hidden opacity-20 group-hover:opacity-100 hover:text-blue-600 transition-opacity",title:j?"إظهار الأسبوع":"إخفاء الأسبوع (إجازة)",children:j?e.jsx(ue,{}):e.jsx(X,{})})]})}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle",children:a(p+1,n.useEasternDigits)}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle whitespace-nowrap",children:ie(s.gregorianDate)}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle",children:e.jsxs("div",{className:"text-xs font-semibold whitespace-nowrap text-gray-800",children:["(",a(J(s.gregorianDate),n.useEasternDigits),"هـ - ",a(Y(s.gregorianDate),n.useEasternDigits),"م)"]})}),e.jsx("td",{className:"p-0 border border-gray-300 align-top",children:e.jsx("textarea",{"data-row-index":p,value:s.topic,onChange:m?void 0:N=>r(p,N.target.value),placeholder:j?"الأسبوع مخفي (إجازة)":"اكتب الموضوع هنا...",className:"w-full h-full min-h-[50px] p-2 border-0 bg-transparent resize-y focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-transparent disabled:cursor-not-allowed disabled:text-gray-500 disabled:text-center",rows:2,disabled:C||j,readOnly:m})}),e.jsx("td",{className:"p-2 border border-gray-300 text-center align-middle print:hidden",children:!m&&e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("button",{onClick:()=>g&&g(p),title:"حذف اليوم المكرر",className:"p-1 text-green-600 hover:bg-green-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:C||j||!W(s.gregorianDate,t),children:e.jsx(he,{})}),e.jsx("button",{onClick:()=>l&&l(p),title:"استنساخ هذا اليوم",className:"p-1 text-blue-600 hover:bg-blue-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:C||j,children:e.jsx(me,{})}),e.jsx("button",{onClick:()=>b&&b(p),title:"مسح الموضوع",className:"p-1 text-red-600 hover:bg-red-100 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed",disabled:C||j||!s.topic,children:e.jsx(Fe,{})}),e.jsx("button",{onClick:()=>k&&k(p),title:"تلوين يوم مميز",className:`p-1 rounded-full transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${s.isSpecial?"text-yellow-600 bg-yellow-200":"text-gray-500 hover:bg-gray-200"}`,disabled:C||j,children:e.jsx(xe,{})})]})})]},p)})})]})})},Ue=({days:t,meta:n,onToggleWeekVisibility:r})=>{if(t.length===0)return null;const o=n.hiddenWeeks||[];let l=0;const u=t.reduce((k,b,g)=>((b.gregorianDate.getDay()===0||g===0)&&k.push([]),k[k.length-1].push(b),k),[]);return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 cards-grid",children:u.map((k,b)=>{const g=o.includes(b);g||l++;const f=g?"-":l,m=k[0].gregorianDate,c=k[k.length-1].gregorianDate,w=k.filter(W=>{const L=W.gregorianDate.getDay(),T=L===5||L===6;return!(n.hideWeekends&&T)&&W.topic&&W.topic.trim()!==""&&W.topic.trim()!=="--- عطلة نهاية الأسبوع ---"&&W.topic.trim()!=="--- إجازة رسمية ---"}),F=g?"bg-gray-100 border border-gray-300 opacity-60 print:hidden":"bg-white border border-gray-200";return e.jsxs("div",{className:`${F} rounded-lg shadow-sm p-4 flex flex-col print:shadow-none card-item`,children:[e.jsxs("div",{className:"flex justify-between items-center border-b pb-2 mb-3 card-header print-card-header",children:[e.jsxs("div",{className:"flex items-center gap-2 print-card-week",children:[e.jsxs("h3",{className:`font-bold text-lg whitespace-nowrap ${g?"text-gray-500":"text-blue-700"}`,children:["الأسبوع ",a(f,n.useEasternDigits)]}),r&&e.jsx("button",{onClick:()=>r(b),className:"print:hidden text-gray-400 hover:text-blue-600",title:g?"إظهار الأسبوع":"إخفاء الأسبوع",children:g?e.jsx(ue,{}):e.jsx(X,{})})]}),e.jsx("div",{className:"text-xs text-left card-date flex flex-col items-end print-card-date",children:e.jsxs("span",{className:"block font-bold text-gray-800",children:["(",a(J(m),n.useEasternDigits)," - ",a(J(c),n.useEasternDigits),"هـ | ",a(Y(m),n.useEasternDigits)," - ",a(Y(c),n.useEasternDigits),"م)"]})})]}),g?e.jsx("p",{className:"text-gray-400 text-center flex-grow flex items-center justify-center py-4",children:"هذا الأسبوع مخفي (إجازة/توقف)."}):w.length>0?e.jsx("div",{className:"flex flex-col space-y-1 text-gray-800 pr-2 flex-grow",children:w.map((W,L)=>e.jsxs("div",{className:"flex items-start",children:[e.jsxs("span",{className:"font-bold text-gray-600 min-w-[1.2rem] ml-1",children:[a(L+1,n.useEasternDigits),"."]}),e.jsx("span",{className:`flex-1 ${W.isSpecial?"bg-yellow-200 px-1 rounded inline-block w-full":""}`,children:W.topic})]},L))}):e.jsx("p",{className:"text-gray-400 text-center flex-grow flex items-center justify-center py-4",children:"لا توجد موضوعات لهذا الأسبوع."})]},b)})})},Xe=({isStandalone:t=!1,showHtmlExport:n=!1,initialData:r=null})=>{const[o,l]=$.useState(()=>t&&r?r.title:"توزيع الموضوعات الدراسية"),[u,k]=$.useState(()=>t&&r&&r.days.length>0?r.startDate||r.days[0].gregorianDate.substring(0,10):""),[b,g]=$.useState(()=>t&&r&&r.days.length>0?r.endDate||r.days[r.days.length-1].gregorianDate.substring(0,10):""),[f,m]=$.useState(()=>t&&r?r.days.map(i=>({...i,gregorianDate:new Date(i.gregorianDate)})):[]),[c,w]=$.useState(()=>t&&r?r.meta:{administration:"",school:"",term:"",academicYear:"",subject:"",grade:"",teacherName:"",useEasternDigits:!1,hideWeekends:!1,hiddenWeeks:[],logo:""}),[F,W]=$.useState(!1),[L,T]=$.useState(!1),[y,I]=$.useState(()=>t?"cards":"table"),s=$.useRef(null),p=$.useCallback(()=>{if(u&&b){const i=ne(u,b);m(x=>i.map(h=>{const d=x.find(V=>V.gregorianDate.toDateString()===h.gregorianDate.toDateString()),D=h.gregorianDate.getDay(),M=D===5||D===6,S=(d==null?void 0:d.isSpecial)||!1;if(c.hideWeekends&&M)return{...h,topic:"--- عطلة نهاية الأسبوع ---"};const H=d!=null&&d.topic&&d.topic!=="--- عطلة نهاية الأسبوع ---"?d.topic:"";return{...h,topic:H,isSpecial:S}}))}},[u,b,c.hideWeekends]);$.useEffect(()=>{t||p()},[c.hideWeekends]),$.useEffect(()=>{if(f.length>0){const x=f[f.length-1].gregorianDate.toISOString().substring(0,10);x!==b&&g(x)}},[f]);const v=$.useCallback((i,x)=>{m(h=>h.map((d,D)=>D===i?{...d,topic:x}:d))},[]),E=$.useCallback(i=>{w(x=>{const h=x.hiddenWeeks||[],d=h.includes(i)?h.filter(D=>D!==i):[...h,i];return{...x,hiddenWeeks:d}})},[]),C=$.useCallback((i,x)=>{m(h=>{const d=[...h];let D=i,M=0;const S=new Array(d.length).fill(0);for(let H=0;H<d.length;H++){const V=d[H].gregorianDate.getDay();H>0&&V===0&&M++,S[H]=M}return x.forEach(H=>{for(;D<d.length;){const _=d[D].gregorianDate.getDay(),ye=_===5||_===6,je=S[D];if(c.hiddenWeeks&&c.hiddenWeeks.includes(je)){D++;continue}if(!(c.hideWeekends&&ye)){d[D].topic=H,D++;return}D++}}),d})},[c.hideWeekends,c.hiddenWeeks]),j=async()=>{var i;try{if(!((i=navigator.clipboard)!=null&&i.readText)){alert("متصفحك لا يدعم هذه الميزة. الرجاء اللصق يدوياً.");return}const x=await navigator.clipboard.readText();if(!x||x.trim()===""){alert("لا يوجد موضوعات منسوخة في الحافظة.");return}const h=x.split(/\r?\n/).filter(d=>d.trim()!=="");C(0,h)}catch(x){console.error("Clipboard paste failed:",x),alert("فشل اللصق التلقائي. الرجاء اللصق يدوياً في الخلية الأولى.")}},A=$.useCallback(()=>{window.confirm("هل أنت متأكد من رغبتك في مسح جميع الموضوعات؟")&&m(i=>i.map(x=>{const h=x.gregorianDate.getDay(),d=h===5||h===6;let D="";return c.hideWeekends&&d&&(D="--- عطلة نهاية الأسبوع ---"),{...x,topic:D}}))},[c.hideWeekends]),R=$.useCallback(i=>{window.confirm("هل أنت متأكد من رغبتك في مسح محتوى هذا الموضوع؟")&&v(i,"")},[v]),O=$.useCallback(i=>{m(x=>x.map((h,d)=>d===i?{...h,isSpecial:!h.isSpecial}:h))},[]),N=$.useCallback(i=>{m(x=>{const h=[...x],d=new Date(h[i].gregorianDate.getTime());d.setDate(d.getDate()+1);const D={gregorianDate:d,topic:""};h.splice(i+1,0,D);for(let M=i+2;M<h.length;M++)h[M].gregorianDate.setDate(h[M].gregorianDate.getDate()+1);return h})},[]),P=$.useCallback(i=>{m(x=>{const h=[...x],d=h[i],D={...d,gregorianDate:new Date(d.gregorianDate.getTime())};return h.splice(i+1,0,D),h})},[]),z=$.useCallback(i=>{window.confirm("هل أنت متأكد من رغبتك في حذف هذا الصف؟")&&m(x=>x.filter((h,d)=>d!==i))},[]),K=$.useCallback((i,x)=>{m(h=>{const d=[...h],D=d[i],M=d[x];return[d[i],d[x]]=[{...D,topic:M.topic,isSpecial:M.isSpecial},{...M,topic:D.topic,isSpecial:D.isSpecial}],d})},[]),be=i=>{var d;const x=(d=i.target.files)==null?void 0:d[0];if(!x)return;const h=new FileReader;h.onload=D=>{var M;try{const S=JSON.parse((M=D.target)==null?void 0:M.result);if(!S||!S.startDate||!S.endDate||!S.title){alert("ملف JSON غير صالح.");return}l(S.title),k(S.startDate),g(S.endDate),w(H=>({...H,...S.meta})),S.viewMode&&I(S.viewMode),setTimeout(()=>{const H=ne(S.startDate,S.endDate);Array.isArray(S.days)&&S.days.forEach((V,_)=>{H[_]&&(H[_].topic=V.topic||"",V.isSpecial&&(H[_].isSpecial=!0))}),m(H)},0)}catch{alert("فشل قراءة ملف JSON.")}finally{s.current&&(s.current.value="")}},h.readAsText(x,"utf-8")},fe=async()=>{try{if(!f.length){alert("لا يوجد جدول لتصديره");return}await Se({title:o,startDate:u,endDate:b,days:f,meta:c,viewMode:y})}catch(i){console.error(i),alert("فشل التصدير")}},we=()=>{Ee({title:o,days:f,meta:c,viewMode:y})};return e.jsxs("div",{className:"container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl",children:[e.jsxs("main",{className:"bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[e.jsx(Oe,{title:o,onTitleChange:l,isReadOnly:t}),t?e.jsx(Re,{onPrint:()=>oe(o),onConfigClick:()=>W(i=>!i),isConfigVisible:F}):e.jsx(Pe,{onPrint:()=>oe(o),onCopy:we,onViewModeChange:()=>I(i=>i==="table"?"cards":"table"),currentViewMode:y,onPasteTopics:j,onClearAllTopics:A,onExportText:()=>De(f),onExportJson:()=>Ne({title:o,startDate:u,endDate:b,days:f,meta:c,viewMode:y}),onExportHtml:fe,onImportClick:()=>{var i;return(i=s.current)==null?void 0:i.click()},onHelpClick:()=>T(!0),onConfigClick:()=>W(i=>!i),isConfigVisible:F,isDataActionsDisabled:f.length===0,showHtmlExport:n}),L&&e.jsx(Ve,{onClose:()=>T(!1)}),e.jsx("div",{className:"mb-6 print:hidden",children:F&&e.jsxs("div",{className:"p-6 border border-gray-300 rounded-lg bg-white shadow-sm",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-4 border-b pb-2",children:"إعدادات الترويسة والطباعة"}),e.jsx(Ge,{meta:c,onSave:w,isReadOnly:t})]})}),!t&&f.length===0&&e.jsx(Je,{startDate:u,endDate:b,onDatesChange:(i,x)=>{k(i),g(x)},onGenerate:p}),e.jsx("div",{className:"mt-6",children:e.jsxs("div",{id:"printable-area",children:[e.jsx("div",{id:"printable-header-content",children:e.jsx(_e,{meta:c,title:o})}),e.jsx("div",{id:"printable-area-content",children:f.length>0?y==="table"?e.jsx(se,{days:f,meta:c,onTopicChange:v,onTopicPaste:C,onAddRow:N,onDuplicateRow:P,onSwapTopics:K,onToggleSpecialDay:O,onClearTopic:R,onDeleteRow:z,onToggleWeekVisibility:E,isReadOnly:t}):e.jsx(Ue,{days:f,meta:c,onToggleWeekVisibility:E}):e.jsx(se,{days:[],meta:c,onTopicChange:v,onTopicPaste:C})}),e.jsx("div",{id:"printable-footer-content",children:e.jsx(Ye,{meta:c})})]})}),!t&&e.jsx("input",{type:"file",ref:s,accept:".json,application/json",className:"hidden",onChange:be})]}),e.jsx(ze,{})]})};export{Xe as A};
