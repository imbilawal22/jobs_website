/**
 * ROZGAR JAWAN (روزگار جوان) - Jobs Data & Rendering Engine
 * 
 * NOTE FOR OWNER:
 * Filhal jobs array bilkul khali (blank) rakhi gayi hai jaisa aap ne kaha.
 * Jab bhi Pakistan main koi nayi job aye, aap bas is file main jobsData ke andar
 * nayi job ka object add kar sakte hain (sample neeche diya gaya hai).
 */

// ==========================================
// 1. JOBS DATABASE (FILHAL BLANK HAI)
// ==========================================
const jobsData = [
  {
    "title": "Assistant Director (BPS-17)",
    "department": "Federal Public Service Commission (FPSC)",
    "category": "govt",
    "type": "Government",
    "city": "Islamabad",
    "scale": "BPS-17",
    "deadline": "30 Dec 2026",
    "education": "Master's Degree (16 Years) / Graduation",
    "experience": "Fresh / 1 Year",
    "isUrgent": true,
    "applyUrl": "https://www.fpsc.gov.pk",
    "description": "Federal Government ke mukhtalif ministries main Assistant Director ki asamiyaan. Pakistan bhar se tamam male aur female umeedwar apply kar sakte hain.",
    "id": 1794773645650
  },
  {
    "title": "Lecturer & Subject Specialist (BPS-17)",
    "department": "Punjab Public Service Commission (PPSC)",
    "category": "education",
    "type": "Government",
    "city": "Lahore",
    "scale": "BPS-17",
    "deadline": "25 Dec 2026",
    "education": "BS / Master in relevant subject (Minimum 2nd Div)",
    "experience": "Fresh Eligible",
    "isUrgent": true,
    "applyUrl": "https://www.ppsc.gop.pk",
    "description": "Higher Education Department Punjab main mukhtalif mazameen ke Lecturers ki bharti. PPSC online portal se direct apply karein.",
    "id": 1794773645651
  },
  {
    "title": "State Bank Officers Training Scheme (OG-2)",
    "department": "State Bank of Pakistan (SBP / BSC)",
    "category": "banking",
    "type": "Government",
    "city": "Karachi",
    "scale": "OG-2 (Rs. 95,000+)",
    "deadline": "31 Dec 2026",
    "education": "Master / 16 Years Degree in Business, IT, Economics, Commerce",
    "experience": "Fresh Graduates",
    "isUrgent": false,
    "applyUrl": "https://www.sbp.org.pk",
    "description": "State Bank of Pakistan main regular career opportunity. Central Bank ke zariye mukammal training aur pur-kashish package.",
    "id": 1794773645652
  },
  {
    "title": "Municipal Officer & Town Officer (BPS-16/17)",
    "department": "Sindh Public Service Commission (SPSC)",
    "category": "govt",
    "type": "Government",
    "city": "Karachi",
    "scale": "BPS-16",
    "deadline": "28 Dec 2026",
    "education": "Graduation in any discipline",
    "experience": "Fresh",
    "isUrgent": false,
    "applyUrl": "https://www.spsc.gov.pk",
    "description": "Local Government Department Sindh main executive aur administrative posts. Sindh Domicile ke umeedwar SPSC ke zariye apply karein.",
    "id": 1794773645653
  },
  {
    "title": "Assistant Sub-Inspector (ASI - BPS-11)",
    "department": "Khyber Pakhtunkhwa Police (KPPSC / ETEA)",
    "category": "defense",
    "type": "Government",
    "city": "Peshawar",
    "scale": "BPS-11",
    "deadline": "20 Dec 2026",
    "education": "FA / FSc / Intermediate",
    "experience": "Physical Standards As per Police Rules",
    "isUrgent": true,
    "applyUrl": "https://www.kppsc.gov.pk",
    "description": "KPK Police department main ASI ki nayi bhartiyaan. KPK ke tamam azla ke naujawan shamil ho sakte hain.",
    "id": 1794773645654
  },
  {
    "title": "Junior Software Engineer / Web Developer",
    "department": "Pakistan Software Export Board (PSEB / Tech Partners)",
    "category": "it",
    "type": "Private",
    "city": "Islamabad",
    "scale": "Rs. 70,000 - 110,000",
    "deadline": "31 Dec 2026",
    "education": "BS Computer Science / Software Engineering / IT",
    "experience": "Fresh to 1 Year (JavaScript, Python, React)",
    "isUrgent": false,
    "applyUrl": "https://pseb.org.pk",
    "description": "IT industry main fresh software graduates ke liye career starter program. Remote aur on-site options dastiyab hain.",
    "id": 1794773645655
  }
];

// ==========================================
// 2. DOM ELEMENTS
// ==========================================
const jobsContainer = document.getElementById('jobs-container');
const jobCountBadge = document.getElementById('job-count-badge');
const searchForm = document.getElementById('jobs-search-form');
const searchInput = document.getElementById('search-input');
const citySelect = document.getElementById('city-select');
const categorySelect = document.getElementById('category-select');
const tabButtons = document.querySelectorAll('.tab-btn');
const quickTags = document.querySelectorAll('.tag-pill');

// Filter State
let currentFilter = {
  keyword: '',
  city: 'all',
  category: 'all',
  tab: 'all'
};

// ==========================================
// 3. RENDER JOBS OR FRIENDLY EMPTY STATE
// ==========================================
function renderJobs() {
  if (!jobsContainer) return;

  // Filter jobs according to active criteria
  const filteredJobs = jobsData.filter(job => {
    // Keyword match
    const matchesKeyword = !currentFilter.keyword || 
      job.title.toLowerCase().includes(currentFilter.keyword.toLowerCase()) ||
      job.department.toLowerCase().includes(currentFilter.keyword.toLowerCase()) ||
      job.city.toLowerCase().includes(currentFilter.keyword.toLowerCase());

    // City match
    const matchesCity = currentFilter.city === 'all' || 
      job.city.toLowerCase() === currentFilter.city.toLowerCase() ||
      job.city.toLowerCase() === 'all pakistan';

    // Category match
    const matchesCategory = currentFilter.category === 'all' || 
      job.category.toLowerCase() === currentFilter.category.toLowerCase();

    // Tab match
    const matchesTab = currentFilter.tab === 'all' || 
      job.type.toLowerCase().includes(currentFilter.tab.toLowerCase()) ||
      job.category.toLowerCase().includes(currentFilter.tab.toLowerCase());

    return matchesKeyword && matchesCity && matchesCategory && matchesTab;
  });

  // Update jobs count badge
  if (jobCountBadge) {
    jobCountBadge.textContent = `${filteredJobs.length} Jobs Available`;
  }

  // --- CASE A: EMPTY STATE (Jab koi job na ho) ---
  if (filteredJobs.length === 0) {
    const isFiltered = currentFilter.keyword || currentFilter.city !== 'all' || currentFilter.category !== 'all' || currentFilter.tab !== 'all';

    jobsContainer.innerHTML = `
      <div class="empty-state-box">
        <div class="empty-icon-wrap">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        </div>
        
        <h3 class="empty-title">
          ${isFiltered ? 'Koi Mutabiqat Nahi Mili' : 'Filhal Koi Nayi Job Listed Nahi Hai'}
        </h3>
        
        <p class="empty-urdu-text">
          ${isFiltered ? 'آپ کی تلاش کے مطابق اس وقت کوئی جاب موجود نہیں ہے۔' : 'جلد ہی پاکستان بھر کی تصدیق شدہ سرکاری و پرائیویٹ نوکریاں یہاں شائع کی جائیں گی۔'}
        </p>

        <p class="empty-desc">
          ${isFiltered 
            ? 'Barah-e-karam search filters ko reset karein ya doosra shehar aur category select karein.' 
            : 'Hamari team rozana Daily Jang, Dawn, Nawaiwaqt, FPSC, PPSC, NTS aur company portals se authentic jobs verify karke yahan publish karti hai.'
          }
        </p>

        <div class="empty-actions">
          ${isFiltered ? `
            <button class="btn btn-outline btn-sm" onclick="resetFilters()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              Filter Reset Karein
            </button>
          ` : `
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              WhatsApp Job Alerts Join Karein
            </a>
            <button class="btn btn-outline" onclick="openPublishGuideModal()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Nayi Job Kaise Publish Karein?
            </button>
          `}
        </div>

        <div class="empty-features-list">
          <div class="empty-feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div class="empty-feature-text">
              <strong>100% Verified Ads</strong>
              <span>Sarkari akhbarat se tasdeeq shuda</span>
            </div>
          </div>

          <div class="empty-feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div class="empty-feature-text">
              <strong>Baqayedgi Se Update</strong>
              <span>Nayi jobs foran website pe add hon gi</span>
            </div>
          </div>

          <div class="empty-feature-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <div class="empty-feature-text">
              <strong>Free Alerts</strong>
              <span>Koi fees ya charges nahi</span>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // --- CASE B: JOBS LIST RENDERER (Jab jobs add hon gi) ---
  jobsContainer.innerHTML = `
    <div class="jobs-grid">
      ${filteredJobs.map(job => createJobCardHTML(job)).join('')}
    </div>
  `;
}

// Generate HTML for each job card
function createJobCardHTML(job) {
  const isGovt = job.type.toLowerCase() === 'government' || job.category.toLowerCase() === 'govt';
  const badgeClass = isGovt ? 'badge-govt' : 'badge-private';
  const initial = job.department ? job.department.charAt(0).toUpperCase() : 'J';

  return `
    <article class="job-card ${job.isUrgent ? 'featured' : ''}" data-id="${job.id}">
      <div class="job-main-info">
        <div class="job-org-logo">
          ${initial}
        </div>
        <div class="job-details-col">
          <div class="job-badge-row">
            <span class="badge ${badgeClass}">${job.type}</span>
            ${job.scale ? `<span class="badge badge-private">${job.scale}</span>` : ''}
            ${job.isUrgent ? `<span class="badge badge-urgent">Urgent Deadline</span>` : ''}
          </div>
          <h3 class="job-title">${escapeHTML(job.title)}</h3>
          <p class="job-organization">${escapeHTML(job.department)}</p>
          <div class="job-meta-row">
            <div class="job-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${escapeHTML(job.city)}</span>
            </div>
            ${job.education ? `
              <div class="job-meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <span>${escapeHTML(job.education)}</span>
              </div>
            ` : ''}
            <div class="job-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Aakhri Tareekh: <strong>${escapeHTML(job.deadline)}</strong></span>
            </div>
          </div>
        </div>
      </div>
      <div class="job-action-col">
        <button class="btn btn-outline btn-sm" onclick="viewJobDetails(${job.id})">Details</button>
        <a href="${job.applyUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Apply Now</a>
      </div>
    </article>
  `;
}

// Utility: Escape HTML to avoid injection
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// ==========================================
// 4. EVENT LISTENERS & FILTER LOGIC
// ==========================================
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (searchInput) currentFilter.keyword = searchInput.value.trim();
    if (citySelect) currentFilter.city = citySelect.value;
    if (categorySelect) currentFilter.category = categorySelect.value;
    renderJobs();
  });
}

if (citySelect) {
  citySelect.addEventListener('change', () => {
    currentFilter.city = citySelect.value;
    renderJobs();
  });
}

if (categorySelect) {
  categorySelect.addEventListener('change', () => {
    currentFilter.category = categorySelect.value;
    renderJobs();
  });
}

// Tab navigation (All, Government, Private, Remote, Internship)
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter.tab = btn.dataset.tab || 'all';
    renderJobs();
  });
});

// Quick Tags
quickTags.forEach(tag => {
  tag.addEventListener('click', (e) => {
    e.preventDefault();
    quickTags.forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    const filterType = tag.dataset.filterType;
    const filterVal = tag.dataset.filterVal;
    
    if (filterType === 'category') {
      currentFilter.category = filterVal;
      if (categorySelect) categorySelect.value = filterVal;
    } else if (filterType === 'city') {
      currentFilter.city = filterVal;
      if (citySelect) citySelect.value = filterVal;
    }
    renderJobs();
  });
});

// Reset all search filters
function resetFilters() {
  currentFilter = { keyword: '', city: 'all', category: 'all', tab: 'all' };
  if (searchInput) searchInput.value = '';
  if (citySelect) citySelect.value = 'all';
  if (categorySelect) categorySelect.value = 'all';
  tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === 'all'));
  quickTags.forEach(t => t.classList.remove('active'));
  renderJobs();
}

// View Job Details Modal
function viewJobDetails(jobId) {
  const job = jobsData.find(j => j.id === jobId);
  if (!job) return;

  const modalOverlay = document.getElementById('job-detail-modal');
  const modalContent = document.getElementById('job-detail-content');
  
  if (modalOverlay && modalContent) {
    modalContent.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="badge ${job.type === 'Government' ? 'badge-govt' : 'badge-private'}">${job.type}</span>
        <h2 style="font-size: 1.35rem; font-weight: 800; margin-top: 0.5rem; color: #0F172A;">${escapeHTML(job.title)}</h2>
        <p style="color: #059669; font-weight: 600;">${escapeHTML(job.department)}</p>
      </div>

      <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem; font-size: 0.9rem;">
        <p><strong>Shehar / Location:</strong> ${escapeHTML(job.city)}</p>
        <p><strong>Scale / Package:</strong> ${escapeHTML(job.scale || 'N/A')}</p>
        <p><strong>Taleem / Education:</strong> ${escapeHTML(job.education || 'N/A')}</p>
        <p><strong>Tajurba / Experience:</strong> ${escapeHTML(job.experience || 'Fresh / Any')}</p>
        <p><strong>Aakhri Tareekh:</strong> <span style="color: #DC2626; font-weight: 700;">${escapeHTML(job.deadline)}</span></p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-weight: 700; margin-bottom: 0.5rem;">Tafseelat (Job Description):</h4>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6;">${escapeHTML(job.description || 'Details jald share ki jayengi.')}</p>
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
        <button class="btn btn-outline" onclick="closeJobModal()">Band Karein</button>
        <a href="${job.applyUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Official Apply Link</a>
      </div>
    `;
    modalOverlay.classList.add('active');
  }
}

function closeJobModal() {
  const modalOverlay = document.getElementById('job-detail-modal');
  if (modalOverlay) modalOverlay.classList.remove('active');
}

// Initial render on page load - executes immediately or on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderJobs);
} else {
  renderJobs();
}
