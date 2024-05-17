import Welcome from '../assets/images/welcome.jpg';
import NobelPrize from '../assets/images/nobel prize.jpg';
import International from '../assets/images/international.jpg';
import Donation from '../assets/images/donation.jpg';

export const homepageInfo = [{
    id: 1,
    key: "welcome",
    image: Welcome,
    title: 'Welcome',
    subTitle: "Heidelberg University",
    learnMore: false,
}, {
    id: 2,
    key: "nobelPrize",
    image: NobelPrize,
    title: 'Nobel Prize Winners',
    subTitle: "Heidelberg Nobel Prize Winners",
    learnMore: true,
}, {
    id: 3,
    key: "international",
    image: International,
    title: 'International',
    subTitle: "Ruperto Carola International",
    learnMore: true,
}, {
    id: 4,
    key: "donation",
    image: Donation,
    title: 'Donation & Endowments',
    subTitle: "Your commitment to Heidelberg University",
    learnMore: true,
}]