document.addEventListener('DOMContentLoaded', () => {
    // ===== STATE MANAGEMENT =====
    const formData = {
        name: 'John Doe', 
        title: 'Senior Software Engineer', 
        email: 'john.doe@example.com',
        phone: '+1 234 567 890', 
        address: 'Colombo, Sri Lanka', 
        linkedin: 'linkedin.com/in/johndoe',
        objective: 'A highly motivated and experienced software engineer with a passion for creating efficient, scalable, and user-friendly applications.', 
        photo: null, 
        skills: 'JavaScript\nReact & Next.js\nNode.js & Express',
        education: [ 
            { degree: 'B.Sc. in Computer Science', institution: 'Harvard University', year: '2014-2018' } 
        ],
        experience: [ 
            { position: 'Senior Software Engineer', company: 'Google', year: '2020-Present', description: 'Led the development of a new feature that increased user engagement by 20%.' } 
        ]
    };

    // ===== TEMPLATE RENDER FUNCTIONS =====
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
        const experienceHTML = data.experience.map(exp => `<div class="gd-entry"><div class="gd-entry-title">${exp.position || ''}</div><div class="gd-entry-subtitle">${exp.company || ''} | ${exp.year || ''}</div><p class="gd-entry-desc">${exp.description || ''}</p></div>`).join('');
        const educationHTML = data.education.map(edu => `<div class="gd-entry"><div class="gd-entry-title">${edu.degree || ''}</div><div class="gd-entry-subtitle">${edu.institution || ''} | ${edu.year || ''}</div></div>`).join('');
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

    // NEW TEMPLATE 4: Creative Portfolio
    function renderCreativePortfolio(data) {
        const photoHTML = data.photo 
            ? `<img src="${data.photo}" class="cp-photo">` 
            : `<div class="cp-photo-placeholder photo-placeholder">
                <i class="fas fa-user" style="font-size: 25mm; color: #e0e7ff;"></i>
               </div>`;
        
        const skillsList = data.skills 
            ? data.skills.split('\n').filter(s => s.trim()).map(s => `<span class="cp-skill-tag">${s.trim()}</span>`).join('') 
            : '';
        
        const experienceHTML = data.experience.map(exp => `
            <div class="cp-timeline-item">
                <div class="cp-timeline-dot"></div>
                <div class="cp-timeline-content">
                    <h3 class="cp-timeline-title">${exp.position || ''}</h3>
                    <span class="cp-timeline-company">${exp.company || ''}</span>
                    <span class="cp-timeline-date">${exp.year || ''}</span>
                    <p class="cp-timeline-desc">${exp.description || ''}</p>
                </div>
            </div>
        `).join('');
        
        const educationHTML = data.education.map(edu => `
            <div class="cp-edu-item">
                <div class="cp-edu-icon">🎓</div>
                <div class="cp-edu-content">
                    <h4>${edu.degree || ''}</h4>
                    <p>${edu.institution || ''} • ${edu.year || ''}</p>
                </div>
            </div>
        `).join('');
        
        return `
            <div class="cp-header">
                <div class="cp-header-bg"></div>
                <div class="cp-header-content">
                    ${photoHTML}
                    <div class="cp-header-text">
                        <h1 class="cp-name">${data.name || 'Your Name'}</h1>
                        <p class="cp-title">${data.title || 'Professional Title'}</p>
                        <div class="cp-contact-row">
                            <span><i class="fas fa-envelope"></i> ${data.email || ''}</span>
                            <span><i class="fas fa-phone"></i> ${data.phone || ''}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${data.address || ''}</span>
                            <span><i class="fab fa-linkedin"></i> ${data.linkedin || ''}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cp-body">
                <div class="cp-section">
                    <h2 class="cp-section-title">
                        <span class="cp-section-icon">👤</span>
                        About Me
                    </h2>
                    <p class="cp-about">${data.objective || ''}</p>
                </div>
                <div class="cp-two-columns">
                    <div class="cp-column">
                        <h2 class="cp-section-title">
                            <span class="cp-section-icon">💼</span>
                            Experience
                        </h2>
                        <div class="cp-timeline">
                            ${experienceHTML}
                        </div>
                    </div>
                    <div class="cp-column">
                        <h2 class="cp-section-title">
                            <span class="cp-section-icon">🎯</span>
                            Skills
                        </h2>
                        <div class="cp-skills-container">
                            ${skillsList}
                        </div>
                        <h2 class="cp-section-title" style="margin-top: 8mm;">
                            <span class="cp-section-icon">📚</span>
                            Education
                        </h2>
                        ${educationHTML}
                    </div>
                </div>
            </div>
        `;
    }

    // NEW TEMPLATE 5: Executive Professional
    function renderExecutiveProfessional(data) {
        const skillsList = data.skills 
            ? data.skills.split('\n').filter(s => s.trim()).map(s => `
                <div class="ep-skill-item">
                    <span class="ep-skill-bullet">▸</span>
                    <span>${s.trim()}</span>
                </div>
            `).join('') 
            : '';
        
        const experienceHTML = data.experience.map(exp => `
            <div class="ep-exp-item">
                <div class="ep-exp-header">
                    <div class="ep-exp-left">
                        <h3 class="ep-exp-title">${exp.position || ''}</h3>
                        <p class="ep-exp-company">${exp.company || ''}</p>
                    </div>
                    <div class="ep-exp-date">${exp.year || ''}</div>
                </div>
                <p class="ep-exp-desc">${exp.description || ''}</p>
            </div>
        `).join('');
        
        const educationHTML = data.education.map(edu => `
            <div class="ep-edu-item">
                <div class="ep-edu-left">
                    <h4 class="ep-edu-degree">${edu.degree || ''}</h4>
                    <p class="ep-edu-institution">${edu.institution || ''}</p>
                </div>
                <div class="ep-edu-year">${edu.year || ''}</div>
            </div>
        `).join('');
        
        return `
            <div class="ep-container">
                <div class="ep-header">
                    <div class="ep-name-section">
                        <h1 class="ep-name">${data.name || 'Your Name'}</h1>
                        <div class="ep-title-line"></div>
                        <p class="ep-title">${data.title || 'Professional Title'}</p>
                    </div>
                </div>
                
                <div class="ep-contact-bar">
                    <div class="ep-contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${data.email || ''}</span>
                    </div>
                    <div class="ep-contact-divider">|</div>
                    <div class="ep-contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${data.phone || ''}</span>
                    </div>
                    <div class="ep-contact-divider">|</div>
                    <div class="ep-contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${data.address || ''}</span>
                    </div>
                    <div class="ep-contact-divider">|</div>
                    <div class="ep-contact-item">
                        <i class="fab fa-linkedin"></i>
                        <span>${data.linkedin || ''}</span>
                    </div>
                </div>
                
                <div class="ep-main">
                    <div class="ep-section">
                        <h2 class="ep-section-title">PROFESSIONAL SUMMARY</h2>
                        <div class="ep-section-line"></div>
                        <p class="ep-summary">${data.objective || ''}</p>
                    </div>
                    
                    <div class="ep-section">
                        <h2 class="ep-section-title">PROFESSIONAL EXPERIENCE</h2>
                        <div class="ep-section-line"></div>
                        ${experienceHTML}
                    </div>
                    
                    <div class="ep-two-column">
                        <div class="ep-column">
                            <div class="ep-section">
                                <h2 class="ep-section-title">EDUCATION</h2>
                                <div class="ep-section-line"></div>
                                ${educationHTML}
                            </div>
                        </div>
                        <div class="ep-column">
                            <div class="ep-section">
                                <h2 class="ep-section-title">CORE COMPETENCIES</h2>
                                <div class="ep-section-line"></div>
                                <div class="ep-skills-grid">
                                    ${skillsList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // ===== MAIN RENDER CONTROLLER =====
    function renderTemplate() {
        const selectedRadio = document.querySelector('input[name="template"]:checked');
        if (!selectedRadio) return; 

        const selectedTemplate = selectedRadio.value;
        const resumeDiv = document.getElementById('resume');
        if (!resumeDiv) return;
        
        resumeDiv.className = 'resume';
        resumeDiv.classList.add(`template-${selectedTemplate}`);
        
        let html = '';
        switch (selectedTemplate) {
            case 'modern-sidebar': 
                html = renderModernSidebar(formData); 
                break;
            case 'blue-minimalist': 
                html = renderBlueMinimalist(formData); 
                break;
            case 'graphic-designer': 
                html = renderGraphicDesigner(formData); 
                break;
            case 'creative-portfolio':
                html = renderCreativePortfolio(formData);
                break;
            case 'executive-professional':
                html = renderExecutiveProfessional(formData);
                break;
            default: 
                html = renderModernSidebar(formData);
        }
        resumeDiv.innerHTML = html;
        
        // Update modern UI template selector
        document.querySelectorAll('.template-item').forEach(opt => {
            opt.classList.remove('active');
            if (opt.querySelector(`input[value="${selectedTemplate}"]`)) {
                opt.classList.add('active');
            }
        });
    }
    
    // ===== MODERN UI ENHANCEMENTS =====
    
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? null : 'dark';
            
            if (newTheme) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
            
            // Update icon
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = newTheme ? 'fas fa-sun' : 'fas fa-moon';
            }
            
            // Save preference
            localStorage.setItem('theme', newTheme || 'light');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            const icon = themeToggle.querySelector('i');
            if (icon) icon.className = 'fas fa-sun';
        }
    }
    
    // Modern Tab Switching
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Update tabs
            tabItems.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update content
            tabContents.forEach(content => content.classList.remove('active'));
            const targetTab = document.getElementById(`${tabName}-tab`);
            if (targetTab) {
                targetTab.classList.add('active');
            }
            
            // Render template if preview tab
            if (tabName === 'preview') {
                renderTemplate();
            }
        });
    });
    
    // ===== EVENT LISTENERS =====
    function setupEventListeners() {
        // Form inputs
        document.querySelectorAll('input[data-key], textarea[data-key]').forEach(input => {
            input.addEventListener('input', e => { 
                formData[e.target.dataset.key] = e.target.value; 
                // Only render if preview tab is active
                if (document.getElementById('preview-tab') && document.getElementById('preview-tab').classList.contains('active')) {
                    renderTemplate();
                }
            });
        });
        
        // Template selection
        document.querySelectorAll('input[name="template"]').forEach(radio => {
            radio.addEventListener('change', renderTemplate);
        });
        
        // Photo upload
        const photoInput = document.getElementById('photo');
        if (photoInput) {
            photoInput.addEventListener('change', e => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = event => { 
                        formData.photo = event.target.result; 
                        if (document.getElementById('preview-tab') && document.getElementById('preview-tab').classList.contains('active')) {
                            renderTemplate();
                        }
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
    }

    // ===== DYNAMIC SECTIONS =====
    function setupDynamicSection(sectionKey, containerId, addBtnId, initialFields) {
        const container = document.getElementById(containerId);
        const addBtn = document.getElementById(addBtnId);
        
        if (!container || !addBtn) return;
        
        const renderItems = () => {
            container.innerHTML = '';
            formData[sectionKey].forEach((item, index) => {
                const entry = document.createElement('div');
                entry.className = 'dynamic-entry';
                
                let fieldsHTML = Object.keys(initialFields).map(key => {
                    const label = key.charAt(0).toUpperCase() + key.slice(1);
                    const inputType = key === 'description' 
                        ? `<textarea class="modern-textarea" data-field="${key}" rows="3">${item[key] || ''}</textarea>` 
                        : `<input class="modern-input" type="text" data-field="${key}" value="${item[key] || ''}">`;
                    return `
                        <div class="modern-input-group">
                            <label class="modern-label">
                                <i class="fas fa-edit"></i>
                                ${label}
                            </label>
                            ${inputType}
                            <span class="input-border"></span>
                        </div>`;
                }).join('');
                
                entry.innerHTML = `
                    <button class="btn-danger" data-remove="${index}">&times;</button>
                    ${fieldsHTML}
                `;
                container.appendChild(entry);
                
                // Remove button
                const removeBtn = entry.querySelector('[data-remove]');
                if (removeBtn) {
                    removeBtn.addEventListener('click', () => {
                        formData[sectionKey].splice(index, 1);
                        renderItems(); 
                        if (document.getElementById('preview-tab') && document.getElementById('preview-tab').classList.contains('active')) {
                            renderTemplate();
                        }
                    });
                }
                
                // Input fields
                entry.querySelectorAll('input, textarea').forEach(input => {
                    input.addEventListener('input', e => { 
                        const field = e.target.dataset.field;
                        formData[sectionKey][index][field] = e.target.value; 
                        if (document.getElementById('preview-tab') && document.getElementById('preview-tab').classList.contains('active')) {
                            renderTemplate();
                        }
                    });
                });
            });
        };
        
        addBtn.addEventListener('click', () => { 
            formData[sectionKey].push({ ...initialFields }); 
            renderItems(); 
            if (document.getElementById('preview-tab') && document.getElementById('preview-tab').classList.contains('active')) {
                renderTemplate();
            }
        });
        
        renderItems();
    }
    
    // ===== INITIALIZATION =====
    
    // Set initial values
    Object.keys(formData).forEach(key => {
        const input = document.querySelector(`[data-key="${key}"]`);
        if (input && typeof formData[key] === 'string') { 
            input.value = formData[key]; 
        }
    });
    
    // Setup everything
    setupEventListeners();
    setupDynamicSection('experience', 'experience-container', 'add-experience', { 
        position: '', 
        company: '', 
        year: '', 
        description: '' 
    });
    setupDynamicSection('education', 'education-container', 'add-education', { 
        degree: '', 
        institution: '', 
        year: '' 
    });
    
    // Initial render
    renderTemplate();

    // ===== EXPORT FUNCTIONS =====
    const exportPdfBtn = document.getElementById('export-pdf');
    const exportPngBtn = document.getElementById('export-png');
    
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', () => exportHandler('pdf'));
    }
    
    if (exportPngBtn) {
        exportPngBtn.addEventListener('click', () => exportHandler('png'));
    }
    
    function exportHandler(format) {
        const resume = document.getElementById('resume');
        if (!resume) return;
        
        const filename = `${(formData.name || 'resume').replace(/ /g, '_')}.${format}`;
        
        // Check if html2canvas is loaded
        if (typeof html2canvas === 'undefined') {
            console.error('html2canvas library not loaded');
            return;
        }
        
        html2canvas(resume, { 
            scale: 3, 
            useCORS: true, 
            logging: false 
        }).then(canvas => {
            if (format === 'png') { 
                canvas.toBlob(blob => {
                    if (typeof saveAs !== 'undefined') {
                        saveAs(blob, filename);
                    } else {
                        // Fallback if FileSaver.js not loaded
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = filename;
                        link.click();
                    }
                }); 
            } else if (format === 'pdf') {
                // Check if jsPDF is loaded
                if (typeof window.jspdf === 'undefined') {
                    console.error('jsPDF library not loaded');
                    return;
                }
                
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF({ 
                    orientation: 'portrait', 
                    unit: 'mm', 
                    format: 'a4' 
                });
                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
                pdf.save(filename);
            }
        }).catch(error => {
            console.error('Export failed:', error);
        });
    }
    
    // Set current year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});