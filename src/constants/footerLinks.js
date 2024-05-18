import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6";

export const footerLinks = {
    languages: [{language: 'English', link: '/'}, {language: 'Spanish', link: '/'}],
    policies: [{link: '/', name: 'Imprint'}, {link: '/', name: 'Privacy Statement'}, {link: '/', name: 'Accessibility'}],
    photoCredits: ['Universität Heidelberg', 'Universität Heidelberg', 'Universität Heidelberg', 'Universität Heidelberg', 'Universität Heidelberg', 'Universität Heidelberg','Universität Heidelberg', 'Universität Heidelberg'],
    social: [{name: 'Facebook', icon: <FaFacebook size={25} />}, {name: 'Twitter', icon: <FaTwitter size={25} />}, {name: 'Facebook', icon: <FaInstagram size={25} />}, {name: 'Facebook', icon: <FaLinkedin size={25} />}, {name: 'Facebook', icon: <FaYoutube size={25} />}],
    copyright: '2024 Heidelberg University',
}