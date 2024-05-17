import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"

export const footerLinks = {
    languages: [{language: 'English', link: '/'}, {language: 'Spanish', link: '/'}],
    policies: [{link: '/', name: 'Imprint'}, {link: '/', name: 'Privacy Statement'}, {link: '/', name: 'Accessibility'}],
    photoCredits: ['Universität Heidelberg', 'Universität Heidelberg', 'Universität Heidelberg', 'Universität Heidelberg', 'Universität Heidelberg', 'Universität Heidelberg','Universität Heidelberg', 'Universität Heidelberg'],
    social: [{name: 'Facebook', icon: <FaFacebook />}, {name: 'Twitter', icon: <FaTwitter />}, {name: 'Facebook', icon: <FaInstagram />}, {name: 'Facebook', icon: <FaLinkedin />}, {name: 'Facebook', icon: <FaYoutube />}],
    copyright: '2024 Heidelberg University',
}