let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langToggle').innerText = currentLang === 'ar' ? 'English' : 'عربي';

    // ترجمة النصوص
    document.querySelectorAll('[data-ar]').forEach(el => {
        el.innerText = el.getAttribute(`data-${currentLang}`);
    });

    // ترجمة خانات الإدخال (Placeholders)
    document.querySelectorAll('[data-ar-placeholder]').forEach(input => {
        input.placeholder = input.getAttribute(`data-${currentLang}-placeholder`);
    });
}

function login() {
    const email = document.getElementById('email').value;
    if(email) {
        document.getElementById('userStatus').innerText = email;
        document.getElementById('authSection').classList.add('hidden');
        document.getElementById('subSection').classList.remove('hidden');
    } else {
        alert(currentLang === 'ar' ? 'يرجى كتابة البريد الإلكتروني' : 'Please enter your email');
    }
}

function activateSub() {
    document.getElementById('subSection').classList.add('hidden');
    document.getElementById('dashboardSection').classList.remove('hidden');
    document.getElementById('feedSection').classList.remove('hidden');
    document.getElementById('supportSection').classList.remove('hidden');
    alert(currentLang === 'ar' ? 'تم تفعيل شهرك المجاني بنجاح! 🥳' : 'Free trial activated successfully! 🥳');
}

function toggleUploadType() {
    const type = document.getElementById('uploadType').value;
    if(type === 'canva') {
        document.getElementById('canvaInput').classList.remove('hidden');
        document.getElementById('fileInput').classList.add('hidden');
    } else {
        document.getElementById('canvaInput').classList.add('hidden');
        document.getElementById('fileInput').classList.remove('hidden');
    }
}

function addWork() {
    const title = document.getElementById('workTitle').value;
    const desc = document.getElementById('workDesc').value;
    const type = document.getElementById('uploadType').value;
    
    if(!title) {
        alert(currentLang === 'ar' ? 'يرجى إدخال عنوان العمل' : 'Please enter project title');
        return;
    }

    const list = document.getElementById('worksList');
    const card = document.createElement('div');
    card.style.cssText = 'background:var(--input-bg); padding:15px; border-radius:12px; margin-top:10px; border:1px solid var(--border);';
    
    let linkContent = '';
    if(type === 'canva') {
        const url = document.getElementById('canvaLink').value;
        linkContent = url ? `<p><a href="${url}" target="_blank" style="color:var(--accent);">🔗 ${currentLang === 'ar' ? 'عرض المشروع' : 'View Project'}</a></p>` : '';
    } else {
        linkContent = `<p style="color:var(--accent);">📄 ${currentLang === 'ar' ? 'ملف مرفق جاهز' : 'Attached File Ready'}</p>`;
    }

    card.innerHTML = `
        <h4 style="color:var(--primary); font-size:1.1rem;">${title}</h4>
        <p style="margin:8px 0; font-size:0.95rem;">${desc}</p>
        ${linkContent}
    `;

    list.prepend(card);
    alert(currentLang === 'ar' ? 'تم نشر العمل بنجاح! 🚀' : 'Work published successfully! 🚀');

    document.getElementById('workTitle').value = '';
    document.getElementById('workDesc').value = '';
    document.getElementById('canvaLink').value = '';
}
