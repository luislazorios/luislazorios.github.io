import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import portada from '../assets/images/portadaluis.png';
import miniatura from '../assets/images/miniaturaluis.png';
import readme from '../assets/images/readme.png';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    miniatura: {
        src: miniatura,
        alt: 'Luis Lazo'
    },
    title: 'Luis Lazo',
    subtitle: 'TI Technician',
    description: 'Resume and Portfolio',
    image: {
        src: readme,
        alt: 'Luis theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm Luis Lazo, an IT intern at CMIT Solutions of Sandy in Utah (Remote), pursuing a Bachelor of Applied Science in Information Technology through BYU Pathway and Ensign College.\n\nIn the internship I develop skills in:\n- **Cloud Infrastructure**: AWS (EC2, S3, VPC, IAM, CloudWatch, RDS)\n- **IT Support**: Ticketing with AutoTask, ITGlue, Sophos cybersecurity\n- **Business Ops**: Integrations, project management (Scrum/SMART)\n\n Feel free to explore some of my coding endeavors on [GitHub](https://github.com/JustGoodUI/dante-astro-theme)",
        image: {
            src: portada,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Luis Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
