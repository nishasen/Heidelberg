import University from '../assets/images/university.jpg';
import Study from '../assets/images/study.jpg';
import Research from '../assets/images/research.jpeg';
import Transfer from '../assets/images/transfer.jpg';

export const portals = [{
    id: 1,
    key: "homepage",
    portalName: 'Homepage',
}, {
    id: 2,
    key: "university",
    portalName: 'University',
    portalDescp: "Founded in 1386, Ruperto Carola is the oldest university in today's Germany and one of Europe’s leading research institutions. Its success across all funding rounds of the Excellence Competition and international rankings underscore its leadership role and excellent reputation in the academic, scientific and research landscape.",
    portalLinks: ['History of the University', 'Facts & Figures', 'Heidelberg Profiles'],
    to: '/university',
    portalImage: University,
}, {
    id: 3,
    key: "research",
    portalName: 'Research',
    portalDescp: 'Heidelberg University defines itself as an internationally networked research university dedicated to research-oriented teaching. It believes it has a duty to help address the issues facing humanity by crossing the divide between disciplines.',
    portalLinks: ['Research Profile of the University', 'Promoting Young Researchers', 'Fields of Focus'],
    to: '/research',
    portalImage: Research,
}, {
    id: 4,
    key: 'study',
    portalName: 'Study',
    portalDescp: 'Courses of study at Heidelberg University are informed by its strong research focus and are designed to accustom students to independent research practices early on. With over 160 fields of study, it offers the broad spectrum of subjects representative of a comprehensive university as well as abundant opportunities to acquire a singular and internationally competitive qualification profile.',
    portalLinks: ['Degree Programmes', 'International Study', 'Applying & Enrolment'],
    to: '/study',
    portalImage: Study,
}, {
    id: 5,
    key: "transfer",
    portalName: 'Transfer',
    portalDescp: 'The exchange between basic research and technological innovation as well as the targeted transfer of knowledge and insights into society are the focus of the transfer activities.',
    portalLinks: ['Research City', 'Technology Transfer', 'Communication'],
    to: '/transfer',
    portalImage: Transfer,
}] 