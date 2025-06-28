document.addEventListener('DOMContentLoaded', () => {
    // STATE MANAGEMENT with default example data
    const formData = {
        name: 'John Doe', title: 'Senior Software Engineer', email: 'john.doe@example.com',
        phone: '+1 234 567 890', address: 'Colombo, Sri Lanka', linkedin: 'linkedin.com/in/johndoe',
        objective: 'A highly motivated and experienced software engineer with a passion for creating efficient, scalable, and user-friendly applications.', 
        photo: null, skills: 'JavaScript\nReact & Next.js\nNode.js & Express',
        education: [ { degree: 'B.Sc. in Computer Science', institution: 'Harvard University', year: '2014-2018' } ],
        experience: [ { position: 'Senior Software Engineer', company: 'Google', year: '2020-Present', description: 'Led the development of a new feature that increased user engagement by 20%.' } ]
    };

    // --- TEMPLATE RENDER FUNCTIONS (3 STABLE TEMPLATES) ---
    function renderModernSidebar(data) {
        const photoHTML = data.photo ? `<img src="${data.photo}" class="ms-photo">` : `<div class="ms-photo-placeholder photo-placeholder">Your Photo Here</div>`;
        const skillsList = data.skills ? data.skills.split('\n').filter(s => s.trim()).map(s => `<li>${s.trim()}</li>`).join('') : '';
        const experienceHTML = data.experience.map(exp => `<div class="ms-entry"><div class="ms-entry-title">${exp.position || ''}</div><div class="ms-entry-subtitle">${exp.company || ''} | ${exp.year || ''}</div><p class="ms-entry-desc">${exp.description || ''}</p></div>`).join('');
        const educationHTML = data.education.map(edu => `<div class="ms-entry"><div class="ms-entry-title">${edu.degree || ''}</div><div class="ms-entry-subtitle">${edu.institution || ''} | ${edu.year || ''}</div></div>`).join('');
        return `
            <div class="ms-left">
                ${photoHTML}
                <h2 class="ms-name">${data.name || 'Your Name'}</h2>
                <div class="ms-section-title">Contact</div>
                <p>${data.email}</p><p>${data.phone}</p><p>${data.address}</p>
                <br>
                <div class="ms-section-title">Skills</div><ul>${skillsList}</ul>
            </div>
            <div class="ms-right">
                <h1 style="font-size: 9mm; font-weight: 700;">${data.name || 'Your Name'}</h1>
                <p style="font-size: 5mm; color: #64748b; margin-bottom: 8mm;">${data.title || 'Your Title'}</p>
                <div class="ms-section-title">Profile</div><p>${data.objective}</p><br>
                <div class="ms-section-title">Experience</div>${experienceHTML}<br>
                <div class="ms-section-title">Education</div>${educationHTML}
            </div>
        `;
    }

    function renderBlueMinimalist(data) {
        const skillsList = data.skills ? data.skills.split('\n').filter(s => s.trim()).map(s => `<li>${s.trim()}</li>`).join('') : '';
        const experienceHTML = data.experience.map(exp => `<div class="bm-entry"><p class="bm-entry-title">${exp.position || ''}</p><p class="bm-entry-subtitle">${exp.company || ''} | ${exp.year || ''}</p><p>${exp.description || ''}</p></div>`).join('');
        const educationHTML = data.education.map(edu => `<div class="bm-entry"><p class="bm-entry-title">${edu.degree || ''}</p><p class="bm-entry-subtitle">${edu.institution || ''} | ${edu.year || ''}</p></div>`).join('');
        return `
            <div class="bm-header">
                <div class="bm-name-title"><h1>${data.name || ''}</h1><p>${data.title || ''}</p></div>
                <div class="bm-contact"><p>${data.phone}</p><p>${data.email}</p><p>${data.address}</p><p>${data.linkedin}</p></div>
            </div>
            <div class="bm-section"><h2 class="bm-section-title">PROFILE</h2><p>${data.objective || ''}</p></div>
            <div class="bm-section"><h2 class="bm-section-title">EXPERIENCE</h2>${experienceHTML}</div>
            <div class="bm-section"><h2 class="bm-section-title">EDUCATION</h2>${educationHTML}</div>
            <div class="bm-section"><h2 class="bm-section-title">SKILLS</h2><ul class="bm-list">${skillsList}</ul></div>
        `;
    }
    
    function renderGraphicDesigner(data) {
        const photoHTML = data.photo ? `<img src="${data.photo}" class="gd-photo">` : `<div class="gd-photo-placeholder photo-placeholder">Your Photo Here</div>`;
        const skillsList = data.skills ? data.skills.split('\n').filter(s => s.trim()).map(s => `<li>${s.trim()}</li>`).join('') : '';
        const experienceHTML = data.experience.map(exp => `<div class="gd-entry"><div class="gd-entry-title">${exp.position}</div><div class="gd-entry-subtitle">${exp.company} | ${exp.year}</div><p class="gd-entry-desc">${exp.description}</p></div>`).join('');
        const educationHTML = data.education.map(edu => `<div class="gd-entry"><div class="gd-entry-title">${edu.degree}</div><div class="gd-entry-subtitle">${edu.institution} | ${edu.year}</div></div>`).join('');
        return `
            <div class="gd-left">
                ${photoHTML}
                <div class="gd-section"><h2 class="gd-section-title">About Me</h2><p class="gd-entry-desc">${data.objective}</p></div>
                <div class="gd-section"><h2 class="gd-section-title">Contact</h2><p>${data.phone}</p><p>${data.email}</p><p>${data.address}</p><p>${data.linkedin}</p></div>
            </div>
            <div class="gd-right">
                <h1 class="gd-name">${data.name}</h1><p class="gd-title">${data.title}</p>
                <div class="gd-section"><h2 class="gd-section-title">Experience</h2>${experienceHTML}</div>
                <div class="gd-section"><h2 class="gd-section-title">Education</h2>${educationHTML}</div>
                <div class="gd-section"><h2 class="gd-section-title">Skills</h2><ul class="gd-list">${skillsList}</ul></div>
            </div>
        `;
    }

    // --- MAIN RENDER CONTROLLER ---
    function renderTemplate() {
        const selectedRadio = document.querySelector('input[name="template"]:checked');
        if (!selectedRadio) return; 

        const selectedTemplate = selectedRadio.value;
        const resumeDiv = document.getElementById('resume');
        resumeDiv.className = 'resume';
        resumeDiv.classList.add(`template-${selectedTemplate}`);
        let html = '';
        switch (selectedTemplate) {
            case 'modern-sidebar': html = renderModernSidebar(formData); break;
            case 'blue-minimalist': html = renderBlueMinimalist(formData); break;
            case 'graphic-designer': html = renderGraphicDesigner(formData); break;
            default: html = renderModernSidebar(formData);
        }
        resumeDiv.innerHTML = html;
        
        document.querySelectorAll('.template-selector-vertical .template-option').forEach(opt => {
            opt.classList.remove('active');
            if (opt.querySelector(`input[value="${selectedTemplate}"]`)) {
                opt.classList.add('active');
            }
        });
    }
    
    // --- EVENT LISTENERS & DYNAMIC SECTIONS ---
    function setupEventListeners() {
        const tabTriggers = document.querySelectorAll('.tab-trigger');
        const tabContents = document.querySelectorAll('.tab-content');
        tabTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const tabName = trigger.getAttribute('data-tab');
                tabTriggers.forEach(t => t.classList.remove('active'));
                trigger.classList.add('active');
                tabContents.forEach(content => content.classList.remove('active'));
                document.getElementById(`${tabName}-tab`).classList.add('active');
            });
        });
        document.querySelectorAll('input[data-key], textarea[data-key]').forEach(input => {
            input.addEventListener('input', e => { formData[e.target.dataset.key] = e.target.value; renderTemplate(); });
        });
        document.querySelectorAll('input[name="template"]').forEach(radio => radio.addEventListener('change', renderTemplate));
        document.getElementById('photo').addEventListener('change', e => {
            if (e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = e => { formData.photo = e.target.result; renderTemplate(); };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    function setupDynamicSection(sectionKey, containerId, addBtnId, initialFields) {
        const container = document.getElementById(containerId);
        const addBtn = document.getElementById(addBtnId);
        const renderItems = () => {
            container.innerHTML = '';
            formData[sectionKey].forEach((item, index) => {
                const entry = document.createElement('div');
                entry.className = 'dynamic-entry';
                let fieldsHTML = Object.keys(initialFields).map(key => {
                    const label = key.charAt(0).toUpperCase() + key.slice(1);
                    const inputType = key === 'description' ? `<textarea class="form-input" data-key="${key}" rows="3">${item[key] || ''}</textarea>` : `<input class="form-input" type="text" data-key="${key}" value="${item[key] || ''}">`;
                    return `<div class="form-group"><label class="form-label">${label}</label>${inputType}</div>`;
                }).join('');
                entry.innerHTML = `<button class="btn-danger remove-btn">&times;</button>${fieldsHTML}`;
                container.appendChild(entry);
                entry.querySelector('.remove-btn').addEventListener('click', () => {
                    formData[sectionKey].splice(index, 1);
                    renderItems(); renderTemplate();
                });
                entry.querySelectorAll('input, textarea').forEach(input => {
                    input.addEventListener('input', e => { formData[sectionKey][index][e.target.dataset.key] = e.target.value; renderTemplate(); });
                });
            });
        };
        addBtn.addEventListener('click', () => { formData[sectionKey].push({ ...initialFields }); renderItems(); renderTemplate(); });
        renderItems();
    }
    
    // --- INITIALIZATION ---
    Object.keys(formData).forEach(key => {
        const input = document.querySelector(`[data-key="${key}"]`);
        if (input && typeof formData[key] === 'string') { input.value = formData[key]; }
    });
    
    setupEventListeners();
    setupDynamicSection('experience', 'experience-container', 'add-experience', { position: '', company: '', year: '', description: '' });
    setupDynamicSection('education', 'education-container', 'add-education', { degree: '', institution: '', year: '' });
    renderTemplate();

    // --- EXPORT FUNCTIONS ---
    document.getElementById('export-pdf').addEventListener('click', () => exportHandler('pdf'));
    document.getElementById('export-png').addEventListener('click', () => exportHandler('png'));
    function exportHandler(format) {
        const resume = document.getElementById('resume');
        const filename = `${(formData.name || 'resume').replace(/ /g, '_')}.${format}`;
        html2canvas(resume, { scale: 3, useCORS: true, logging: false }).then(canvas => {
            if(format === 'png') { canvas.toBlob(blob => saveAs(blob, filename)); } 
            else {
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
                pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, 210, 297);
                pdf.save(filename);
            }
        });
    }
});