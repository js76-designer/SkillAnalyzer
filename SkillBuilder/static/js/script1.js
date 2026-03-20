// Career skill database
const careerSkillsDB = {
    "Web Developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
    "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "UI Design"],
    "Backend Developer": ["Python", "Django", "Node.js", "SQL"],
    "Full Stack Developer": ["HTML", "CSS", "JavaScript", "Django", "React"],
    "Software Engineer": ["Java", "Python", "DSA", "OOP"],
    "Data Scientist": ["Python", "Pandas", "Machine Learning", "Statistics"],
    "Data Analyst": ["Excel", "SQL", "Power BI", "Python"],
    "AI Engineer": ["Python", "Deep Learning", "TensorFlow", "NLP"],
    "ML Engineer": ["Python", "Scikit-learn", "Data Engineering"],
    "Cyber Security Analyst": ["Networking", "Linux", "Ethical Hacking"],
    "Cloud Engineer": ["AWS", "Azure", "Docker", "Kubernetes"],
    "DevOps Engineer": ["CI/CD", "Docker", "Jenkins", "Linux"],
    "Mobile App Developer": ["Flutter", "Kotlin", "Firebase"],
    "Android Developer": ["Kotlin", "Java", "Android Studio"],
    "iOS Developer": ["Swift", "Xcode", "UI Design"],
    "Game Developer": ["Unity", "C#", "Game Physics"],
    "UI Designer": ["Figma", "Adobe XD", "Typography"],
    "UX Designer": ["User Research", "Wireframing", "Usability Testing"],
    "Product Manager": ["Leadership", "Agile", "Strategy"],
    "Business Analyst": ["SQL", "Excel", "Communication"],
    "Digital Marketer": ["SEO", "Google Ads", "Analytics"],
    "Content Writer": ["Writing", "SEO", "Research"],
    "SEO Specialist": ["Keyword Research", "Analytics"],
    "Graphic Designer": ["Photoshop", "Illustrator"],
    "Video Editor": ["Premiere Pro", "After Effects"],
    "Animator": ["2D Animation", "3D Animation"],
    "Photographer": ["Camera Handling", "Lighting"],
    "Teacher": ["Communication", "Subject Knowledge"],
    "Professor": ["Research", "Teaching"],
    "Doctor": ["Biology", "Diagnosis"],
    "Nurse": ["Patient Care", "Medical Knowledge"],
    "Pharmacist": ["Chemistry", "Pharmacology"],
    "Dentist": ["Dental Care", "Surgery"],
    "Lawyer": ["Legal Research", "Argumentation"],
    "Judge": ["Law", "Decision Making"],
    "Civil Engineer": ["AutoCAD", "Construction"],
    "Mechanical Engineer": ["Thermodynamics", "CAD"],
    "Electrical Engineer": ["Circuits", "Electronics"],
    "Architect": ["Design", "AutoCAD"],
    "Interior Designer": ["Creativity", "Space Planning"],
    "Chef": ["Cooking", "Food Safety"],
    "Hotel Manager": ["Hospitality", "Management"],
    "Air Hostess": ["Communication", "Customer Service"],
    "Pilot": ["Aviation", "Navigation"],
    "Driver": ["Driving Skills", "Safety"],
    "Police Officer": ["Law Enforcement", "Fitness"],
    "Firefighter": ["Rescue Skills", "Fitness"],
    "Army Officer": ["Leadership", "Strategy"],
    "Entrepreneur": ["Business Strategy", "Risk Management"],
    "Accountant": ["Accounting", "Excel"],
    "Financial Analyst": ["Finance", "Data Analysis"],
    "Stock Trader": ["Market Analysis", "Risk"],
    "Banker": ["Finance", "Customer Service"],
    "HR Manager": ["Recruitment", "Communication"],
    "Sales Manager": ["Sales", "Negotiation"],
    "Marketing Manager": ["Branding", "Strategy"],
    "Supply Chain Manager": ["Logistics", "Planning"],
    "Operations Manager": ["Management", "Process Optimization"],
    "Event Manager": ["Planning", "Coordination"],
    "Journalist": ["Writing", "Reporting"],
    "News Anchor": ["Communication", "Presentation"],
    "Social Media Manager": ["Content Strategy", "Analytics"],
    "Influencer": ["Content Creation", "Branding"],
    "Translator": ["Languages", "Communication"],
    "Interpreter": ["Languages", "Listening"],
    "Scientist": ["Research", "Analysis"],
    "Biotechnologist": ["Biology", "Lab Skills"],
    "Chemist": ["Chemistry", "Experimentation"],
    "Physicist": ["Physics", "Mathematics"],
    "Mathematician": ["Mathematics", "Problem Solving"],
    "Statistician": ["Statistics", "Data Analysis"],
    "Research Analyst": ["Research", "Reporting"],
    "Economist": ["Economics", "Analysis"],
    "Urban Planner": ["Planning", "GIS"],
    "Geologist": ["Geology", "Field Work"],
    "Environmental Scientist": ["Ecology", "Research"],
    "Marine Biologist": ["Biology", "Ocean Studies"],
    "Astronomer": ["Astronomy", "Physics"],
    "Historian": ["History", "Research"],
    "Archaeologist": ["Excavation", "Research"],
    "Librarian": ["Cataloging", "Management"],
    "Fitness Trainer": ["Exercise Science", "Coaching"],
    "Yoga Instructor": ["Yoga", "Meditation"],
    "Psychologist": ["Counseling", "Behavior Analysis"],
    "Therapist": ["Communication", "Mental Health"],
    "Counselor": ["Guidance", "Listening"],
    "Real Estate Agent": ["Sales", "Negotiation"],
    "Insurance Agent": ["Policies", "Sales"],
    "Customer Support": ["Communication", "Problem Solving"],
    "Call Center Executive": ["Communication", "CRM"],
    "Receptionist": ["Communication", "Organization"],
    "Office Assistant": ["Clerical Skills", "MS Office"],
    "Data Entry Operator": ["Typing", "Accuracy"],
    "Freelancer": ["Self Management", "Skill Expertise"]
};

// Learning suggestions
const learningResources = {
    "HTML": ["FreeCodeCamp HTML Course", "W3Schools HTML Tutorial"],
    "CSS": ["CSS Tricks", "W3Schools CSS Tutorial"],
    "JavaScript": ["JavaScript.info", "MDN JavaScript Guide"],
    "React": ["React Official Docs", "FreeCodeCamp React Course"],
    "Git": ["Git Official Docs", "GitHub Learning Lab"],
    "UI Design": ["Google UX Design Certificate", "Coursera UI Design"],
    "Django": ["Django Official Docs", "Django Girls Tutorial"],
    "Node.js": ["Node.js Docs", "FreeCodeCamp Node.js Course"],
    "Python": ["Python.org Tutorials", "FreeCodeCamp Python Course"],
    "SQL": ["W3Schools SQL Tutorial", "Kaggle SQL Exercises"],
    "DSA": ["GeeksforGeeks DSA", "LeetCode Practice"],
    "OOP": ["Coursera OOP Course", "GeeksforGeeks OOP"],
    "Pandas": ["Pandas Official Docs", "Kaggle Pandas Exercises"],
    "Machine Learning": ["Andrew Ng ML Course", "Kaggle ML Tutorial"],
    "Statistics": ["Khan Academy Statistics", "Coursera Statistics Course"],
    "Excel": ["Microsoft Excel Training", "Coursera Excel Skills"],
    "Power BI": ["Microsoft Power BI Docs", "YouTube Power BI Tutorial"],
    "Deep Learning": ["deeplearning.ai", "Fast.ai Course"],
    "TensorFlow": ["TensorFlow Official Docs", "Coursera TensorFlow"],
    "NLP": ["Hugging Face NLP Course", "Coursera NLP Specialization"],
    "Scikit-learn": ["Scikit-learn Docs", "Kaggle ML with Scikit-learn"],
    "Data Engineering": ["DataCamp Data Engineering", "Coursera Data Engineering"],
    "Networking": ["Cisco Networking Academy", "CompTIA Network+ Guide"],
    "Linux": ["Linux Foundation Courses", "OverTheWire Linux Practice"],
    "Ethical Hacking": ["CEH Course", "TryHackMe Platform"],
    "AWS": ["AWS Training", "A Cloud Guru AWS Course"],
    "Azure": ["Microsoft Learn Azure", "Coursera Azure Course"],
    "Docker": ["Docker Official Docs", "Play with Docker"],
    "Kubernetes": ["Kubernetes Official Docs", "KodeKloud Kubernetes"],
    "CI/CD": ["GitHub Actions Docs", "Jenkins Official Tutorial"],
    "Jenkins": ["Jenkins Official Docs", "YouTube Jenkins Tutorial"],
    "Flutter": ["Flutter Official Docs", "Flutter YouTube Channel"],
    "Kotlin": ["Kotlin Official Docs", "JetBrains Kotlin Tutorial"],
    "Firebase": ["Firebase Docs", "Firebase YouTube Tutorials"],
    "Java": ["Java Tutorials by Oracle", "FreeCodeCamp Java Course"],
    "Android Studio": ["Android Developers Docs", "YouTube Android Tutorial"],
    "Swift": ["Swift Official Docs", "Hacking with Swift"],
    "Xcode": ["Apple Developer Docs", "YouTube Xcode Tutorial"],
    "Unity": ["Unity Learn Platform", "YouTube Unity Tutorial"],
    "C#": ["Microsoft C# Docs", "FreeCodeCamp C# Course"],
    "Game Physics": ["Coursera Game Physics", "YouTube Game Physics Tutorial"],
    "Figma": ["Figma Official Tutorials", "YouTube Figma Tutorials"],
    "Adobe XD": ["Adobe XD Tutorials", "YouTube Adobe XD Tutorials"],
    "Typography": ["Canva Typography Guide", "Google Fonts Knowledge"],
    "User Research": ["Nielsen Norman Group Articles", "Coursera UX Research"],
    "Wireframing": ["Balsamiq Wireframing Guide", "YouTube Wireframing Tutorial"],
    "Usability Testing": ["Nielsen Norman Usability", "Coursera UX Design"],
    "Leadership": ["Coursera Leadership Course", "Harvard Leadership Articles"],
    "Agile": ["Scrum.org Resources", "Coursera Agile Course"],
    "Strategy": ["Coursera Business Strategy", "Harvard Business Review"],
    "Communication": ["Coursera Communication Skills", "Toastmasters"],
    "SEO": ["Google SEO Starter Guide", "Moz SEO Learning Center"],
    "Google Ads": ["Google Skillshop", "YouTube Google Ads Tutorial"],
    "Analytics": ["Google Analytics Academy", "Coursera Analytics Course"],
    "Writing": ["Coursera Writing Course", "Grammarly Blog"],
    "Research": ["Coursera Research Methods", "Google Scholar"],
    "Keyword Research": ["Ahrefs Keyword Guide", "Moz Keyword Explorer"],
    "Photoshop": ["Adobe Photoshop Tutorials", "YouTube Photoshop Course"],
    "Illustrator": ["Adobe Illustrator Tutorials", "YouTube Illustrator Course"],
    "Premiere Pro": ["Adobe Premiere Tutorials", "YouTube Premiere Pro Course"],
    "After Effects": ["Adobe After Effects Tutorials", "YouTube After Effects Course"],
    "2D Animation": ["Coursera 2D Animation", "YouTube 2D Animation Tutorial"],
    "3D Animation": ["Blender Official Tutorials", "Coursera 3D Animation"],
    "Camera Handling": ["YouTube Photography Course", "Coursera Photography"],
    "Lighting": ["YouTube Lighting Tutorial", "Coursera Photography Lighting"],
    "Subject Knowledge": ["Khan Academy", "Coursera Subject Courses"],
    "Teaching": ["Coursera Teaching Skills", "edX Teaching Course"],
    "Biology": ["Khan Academy Biology", "Coursera Biology Course"],
    "Diagnosis": ["Coursera Medical Diagnosis", "Medscape Education"],
    "Patient Care": ["Coursera Patient Care", "WHO Training Resources"],
    "Medical Knowledge": ["Coursera Medical Courses", "Medscape"],
    "Chemistry": ["Khan Academy Chemistry", "Coursera Chemistry"],
    "Pharmacology": ["Coursera Pharmacology", "Khan Academy Pharmacology"],
    "Dental Care": ["ADA Dental Education", "Coursera Dental Course"],
    "Surgery": ["Coursera Surgery Course", "WHO Surgical Training"],
    "Legal Research": ["Westlaw Training", "Coursera Legal Research"],
    "Argumentation": ["Coursera Argumentation", "YouTube Debate Skills"],
    "Law": ["Coursera Law Course", "edX Law Courses"],
    "Decision Making": ["Coursera Decision Making", "Harvard Decision Making"],
    "AutoCAD": ["Autodesk AutoCAD Tutorials", "YouTube AutoCAD Course"],
    "Construction": ["Coursera Construction Management", "YouTube Civil Engineering"],
    "Thermodynamics": ["Khan Academy Thermodynamics", "Coursera Thermodynamics"],
    "CAD": ["Autodesk CAD Tutorials", "YouTube CAD Course"],
    "Circuits": ["Khan Academy Circuits", "Coursera Electrical Engineering"],
    "Electronics": ["Coursera Electronics", "YouTube Electronics Tutorial"],
    "Design": ["Coursera Design Thinking", "IDEO Design Resources"],
    "Creativity": ["Coursera Creative Thinking", "TED Talks on Creativity"],
    "Space Planning": ["Coursera Interior Design", "YouTube Space Planning"],
    "Cooking": ["YouTube Cooking Channel", "Coursera Culinary Arts"],
    "Food Safety": ["ServSafe Food Safety", "WHO Food Safety Resources"],
    "Hospitality": ["Coursera Hospitality Management", "edX Hospitality"],
    "Management": ["Coursera Management Course", "Harvard Management Articles"],
    "Customer Service": ["Coursera Customer Service", "LinkedIn Learning Customer Service"],
    "Aviation": ["FAA Training Resources", "Coursera Aviation Course"],
    "Navigation": ["Coursera Navigation", "YouTube Navigation Tutorial"],
    "Driving Skills": ["Local Driving School", "YouTube Safe Driving Tips"],
    "Safety": ["OSHA Safety Training", "Coursera Safety Management"],
    "Law Enforcement": ["Coursera Criminal Justice", "edX Law Enforcement"],
    "Fitness": ["Coursera Fitness Course", "YouTube Fitness Training"],
    "Rescue Skills": ["Red Cross Training", "YouTube Rescue Skills"],
    "Business Strategy": ["Coursera Business Strategy", "Harvard Business Review"],
    "Risk Management": ["Coursera Risk Management", "PMI Risk Resources"],
    "Accounting": ["Coursera Accounting", "Khan Academy Accounting"],
    "Finance": ["Coursera Finance", "Khan Academy Finance"],
    "Data Analysis": ["Coursera Data Analysis", "Kaggle Data Analysis"],
    "Market Analysis": ["Coursera Market Analysis", "Investopedia"],
    "Risk": ["Coursera Risk Management", "Investopedia Risk"],
    "Recruitment": ["Coursera HR Management", "LinkedIn Learning Recruitment"],
    "Sales": ["Coursera Sales Training", "HubSpot Sales Academy"],
    "Negotiation": ["Coursera Negotiation", "Harvard Negotiation Project"],
    "Branding": ["Coursera Branding", "HubSpot Branding Resources"],
    "Logistics": ["Coursera Supply Chain", "edX Logistics"],
    "Planning": ["Coursera Project Planning", "PMI Planning Resources"],
    "Process Optimization": ["Coursera Lean Six Sigma", "ASQ Resources"],
    "Coordination": ["Coursera Project Management", "PMI Resources"],
    "Reporting": ["Coursera Business Writing", "YouTube Reporting Skills"],
    "Presentation": ["Coursera Presentation Skills", "TED Masterclass"],
    "Content Strategy": ["HubSpot Content Marketing", "Coursera Content Strategy"],
    "Content Creation": ["YouTube Creator Academy", "Coursera Content Creation"],
    "Languages": ["Duolingo", "Babbel Language Learning"],
    "Listening": ["Coursera Communication", "YouTube Active Listening"],
    "Analysis": ["Coursera Data Analysis", "Khan Academy"],
    "Lab Skills": ["Coursera Lab Techniques", "YouTube Lab Skills"],
    "Experimentation": ["Coursera Research Methods", "YouTube Lab Experiments"],
    "Physics": ["Khan Academy Physics", "Coursera Physics"],
    "Mathematics": ["Khan Academy Math", "Coursera Mathematics"],
    "Problem Solving": ["Coursera Critical Thinking", "LeetCode Practice"],
    "Economics": ["Khan Academy Economics", "Coursera Economics"],
    "GIS": ["Esri GIS Training", "Coursera GIS Course"],
    "Geology": ["Coursera Geology", "YouTube Geology Course"],
    "Field Work": ["Coursera Field Research", "YouTube Field Work Tips"],
    "Ecology": ["Coursera Ecology", "Khan Academy Ecology"],
    "Ocean Studies": ["Coursera Oceanography", "NOAA Education Resources"],
    "Astronomy": ["Coursera Astronomy", "NASA Learning Resources"],
    "History": ["Khan Academy History", "Coursera History"],
    "Excavation": ["Coursera Archaeology", "YouTube Excavation Techniques"],
    "Cataloging": ["ALA Library Resources", "Coursera Library Science"],
    "Exercise Science": ["Coursera Exercise Science", "NASM Fitness Resources"],
    "Coaching": ["Coursera Coaching", "ICF Coaching Resources"],
    "Yoga": ["Yoga Alliance Resources", "YouTube Yoga Course"],
    "Meditation": ["Headspace", "Coursera Mindfulness"],
    "Counseling": ["Coursera Counseling", "ACA Counseling Resources"],
    "Behavior Analysis": ["Coursera Behavior Analysis", "BACB Resources"],
    "Mental Health": ["Coursera Mental Health", "NAMI Resources"],
    "Guidance": ["Coursera Counseling", "YouTube Guidance Skills"],
    "Policies": ["Coursera Insurance", "YouTube Insurance Training"],
    "CRM": ["HubSpot CRM Training", "Salesforce Trailhead"],
    "Organization": ["Coursera Organizational Skills", "YouTube Productivity Tips"],
    "Clerical Skills": ["Coursera Office Skills", "LinkedIn Learning Office Skills"],
    "MS Office": ["Microsoft Office Training", "GCFGlobal Office Tutorial"],
    "Typing": ["Typing.com", "Keybr Typing Practice"],
    "Accuracy": ["Coursera Attention to Detail", "YouTube Data Entry Tips"],
    "Self Management": ["Coursera Self Management", "YouTube Productivity Tips"],
    "Skill Expertise": ["Coursera Skill Development", "LinkedIn Learning"]
};

// Form submission
document.getElementById("skillForm").addEventListener("submit", function(e){
    e.preventDefault();

    const careerGoal = document.getElementById("careerGoal").value.trim();
    const skillsInput = document.getElementById("skills").value.trim();

    if(!careerGoal || !skillsInput){
        alert("Please enter all fields!");
        return;
    }

    const userSkills = skillsInput.split(",").map(s => s.trim().toLowerCase());
    const requiredSkills = careerSkillsDB[careerGoal];

    if(!requiredSkills){
        alert("Career goal not found! Please select a valid career from the list.");
        return;
    }

    // Case-insensitive + partial match: user skill matches if it contains or is contained by a required skill
    function isMatch(userSkill, requiredSkill) {
        const u = userSkill.toLowerCase();
        const r = requiredSkill.toLowerCase();
        return u === r || u.includes(r) || r.includes(u);
    }

    const matchedSkills = requiredSkills.filter(req => userSkills.some(u => isMatch(u, req)));
    const missingSkills = requiredSkills.filter(req => !userSkills.some(u => isMatch(u, req)));

    // Score = matched required skills / total required skills (capped at 100)
    const readinessScore = Math.min(100, Math.round((matchedSkills.length / requiredSkills.length) * 100));
    
    // Learning suggestions
    const suggestions = missingSkills.map(skill => learningResources[skill] || ["No resources found"]).flat();

    // Skill roadmap: missing skills to learn first, then already matched
    const roadmap = [...missingSkills, ...matchedSkills];

    // Display results
    document.getElementById("readinessScore").innerText = readinessScore + "%";
    const bar = document.getElementById("readinessScoreBar");
    bar.style.width = readinessScore + "%";
    bar.innerText = readinessScore + "%";

    // Missing skills
    const missingSkillsUl = document.getElementById("missingSkills");
    missingSkillsUl.innerHTML = "";
    missingSkills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        missingSkillsUl.appendChild(li);
    });

    // Learning suggestions
    const suggestionsUl = document.getElementById("learningSuggestions");
    suggestionsUl.innerHTML = "";
    suggestions.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        suggestionsUl.appendChild(li);
    });

    // Skill roadmap
    const roadmapOl = document.getElementById("skillRoadmap");
    roadmapOl.innerHTML = "";
    roadmap.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        roadmapOl.appendChild(li);
    });

    // Show result section with animation
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.add("show"));
    document.getElementById("resultSection").style.display = "block";
    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"});

    // Save to history
    const csrfInput = document.querySelector('[name=csrfmiddlewaretoken]');
    if (csrfInput) {
        fetch('/save-search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfInput.value
            },
            body: JSON.stringify({
                career_goal: careerGoal,
                skills_entered: skillsInput,
                readiness_score: readinessScore
            })
        });
    }
});

// Reset
document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("skillForm").reset();
    document.getElementById("resultSection").style.display = "none";
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("show"));
});
