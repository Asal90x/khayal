// خيال - منصة المبدعين
let works = JSON.parse(localStorage.getItem('khayal_works') || '[]');

function login(){
  const email = document.getElementById('email').value;
  if(!email){ alert('اكتبي إيميلك'); return; }
  alert('أهلاً بك في خيال 💜 تم الدخول!');
  localStorage.setItem('khayal_user', email);
}

function addWork(){
  const title = document.getElementById('workTitle').value;
  const desc = document.getElementById('workDesc').value;
  const link = document.getElementById('canvaLink').value;
  const type = document.getElementById('uploadType').value;
  
  if(!title){ alert('اكتبي عنوان العمل'); return; }
  
  const newWork = { title, desc, link, type, likes: 0, date: new Date().toLocaleDateString('ar-SA') };
  works.unshift(newWork);
  localStorage.setItem('khayal_works', JSON.stringify(works));
  renderWorks();
  document.getElementById('workTitle').value = '';
  document.getElementById('workDesc').value = '';
  document.getElementById('canvaLink').value = '';
  alert('تم نشر عملك في المنصة 🎨');
}

function renderWorks(){
  const list = document.getElementById('worksList');
  if(!list) return;
  if(works.length === 0){
    list.innerHTML = '<div class="card" style="grid-column:1/-1;text-align:center">لا يوجد أعمال بعد.. كوني أول مبدعة تنشر ✨</div>';
    return;
  }
  list.innerHTML = works.map((w,i) => `
    <div class="card">
      <h3>${w.title}</h3>
      <p style="color:#6b7280;font-size:14px;margin:8px 0">${w.desc || 'بدون وصف'}</p>
      ${w.link ? `<a href="${w.link}" target="_blank" style="color:#7c3aed;font-weight:700">🔗 مشاهدة العمل</a>` : ''}
      <div style="display:flex;justify-content:space-between;margin-top:12px;font-size:13px;color:#9ca3af">
        <span>❤️ ${w.likes}</span><span>${w.date}</span>
      </div>
    </div>
  `).join('');
}

// أول ما يفتح الموقع
document.addEventListener('DOMContentLoaded', renderWorks);
