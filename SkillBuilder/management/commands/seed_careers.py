from django.core.management.base import BaseCommand
from django.db import transaction
from SkillBuilder.models import Career, Skill

CAREER_DATA = {
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
    "Freelancer": ["Self Management", "Skill Expertise"],
}


class Command(BaseCommand):
    help = 'Seed all career and skill data into the database'

    @transaction.atomic
    def handle(self, *args, **options):
        created_careers = 0
        created_skills = 0

        for career_name, skill_names in CAREER_DATA.items():
            career, c_new = Career.objects.get_or_create(name=career_name)
            if c_new:
                created_careers += 1

            for skill_name in skill_names:
                skill, s_new = Skill.objects.get_or_create(name=skill_name)
                if s_new:
                    created_skills += 1
                career.skills.add(skill)

        self.stdout.write(self.style.SUCCESS(
            f'Done: {created_careers} careers, {created_skills} skills created.'
        ))
