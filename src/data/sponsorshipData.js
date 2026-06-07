import SolidworksLogo from '../assets/Solidworks.png';
import AnsysLogo from '../assets/ansys.png';
import MrfLogo from '../assets/mrf.png';
import SaktheeswaranLogo from '../assets/saktheeswaran.png';
import AirgapLogo from '../assets/airgap.png';
import UnitekLogo from '../assets/unitek.png';
import InoproLogo from '../assets/inopro.png';
import SlvLogo from '../assets/slv.png';
import GpLogo from '../assets/gp.png';
import AurovilleLogo from '../assets/auroville.png';
import SakthiLogo from '../assets/sakthe.png';
import EswaraLogo from '../assets/eswara.png';

export const sponsorPackages = [
    {
        tier: "Bronze",
        price: "1k - 5k",
        features: [
            "Logo on T-shirt",
            "Social Media Mentions",
            "Digital Creative Inclusion"
        ],
        delay: 0.1
    },
    {
        tier: "Silver",
        price: "6k - 10k",
        features: [
            "Vehicle Stickers",
            "Event Coverage Tags",
            "Banner/Poster Branding",
            "All Bronze Benefits"
        ],
        delay: 0.2,
        recommended: true
    },
    {
        tier: "Gold",
        price: "11k+",
        features: [
            "Prominent Car Branding",
            "Priority Mentions",
            "Booklet Logo",
            "All Silver Benefits"
        ],
        delay: 0.3
    },
    {
        tier: "Special",
        price: "1L+",
        features: [
            "Exclusive Title Sponsor",
            "Pit Area Display Stand",
            "High Visibility Branding",
            "All Gold Benefits"
        ],
        delay: 0.4
    }
];

export const allBrands = [
    { name: "Solidworks", logo: SolidworksLogo },
    { name: "Ansys", logo: AnsysLogo },
    { name: "MRF Tyres", logo: MrfLogo },
    { name: "Saktheeswaran", logo: SaktheeswaranLogo },
    { name: "Airgap Technology", logo: AirgapLogo },
    { name: "UinTek hydraulics", logo: UnitekLogo },
    { name: "Inopro solutions", logo: InoproLogo },
    { name: "SLV-PRO MECA", logo: SlvLogo },
    { name: "GP industries", logo: GpLogo },
    { name: "Auroville Energy", logo: AurovilleLogo },
    { name: "Eco fab", logo: null }, // No logo available
    { name: "Sakthi Tools", logo: SakthiLogo },
    { name: "Easwara agro", logo: EswaraLogo }
];
