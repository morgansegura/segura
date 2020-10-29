import React from 'react'
import {FcMultipleDevices, FcCommandLine, FcComboChart, FcStatistics, FcWorkflow, FcMindMap} from "react-icons/fc";
import {SiTailwindcss, SiGatsby, SiNuxtDotJs, SiGraphql, SiGit, SiVisualstudio, SiNetlify} from "react-icons/si";
import {FaLaravel, FaVuejs, FaReact, FaSass, FaNodeJs} from "react-icons/fa";
export const skills = [
    {
        title: 'UX/UI Theory and Design',
        icon: <FcMultipleDevices className="mr-3 w-8 h-8" />,
        body: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
    {
        title: 'Full Stack Development',
        icon: <FcCommandLine className="mr-3 w-8 h-8" />,
        body: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
    {
        title: 'Experience Testing & Analytics',
        icon: <FcComboChart className="mr-3 w-8 h-8" />,
        body: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
    {
        title: 'SEO & Marketing',
        icon: <FcStatistics className="mr-3 w-8 h-8" />,
        body: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
]
export const studies = [
    {
        title: 'Automation/Testing',
        icon: <FcWorkflow className="mr-3 w-8 h-8" />,
        body: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
    {
        title: 'Machine Learning + Data Science',
        icon: <FcMindMap className="mr-3 w-8 h-8" />,
        body: 'Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.'
    },
]
export const technology = [
    {
        url: '#',
        icon: <FaSass className="sass w-20 h-20"/>,
        caption: 'Sass'
    },
    {
        url: '#',
        icon: <SiTailwindcss className="tailwind w-20 h-20"/>,
        caption: 'Tailwind'
    },
    {
        url: '#',
        icon: <FaReact className="react w-20 h-20"/>,
        caption: 'React'
    },
    {
        url: '#',
        icon: <SiGatsby className="gatsby w-20 h-20"/>,
        caption: 'Gatsby'
    },
    {
        url: '#',
        icon: <FaVuejs className="vue w-20 h-20"/>,
        caption: 'Vue'
    },
    {
        url: '#',
        icon: <SiNuxtDotJs className="nuxt w-20 h-20"/>,
        caption: 'Nuxt'
    },
    {
        url: '#',
        icon: <FaLaravel className="laravel w-20 h-20"/>,
        caption: 'Laravel'
    },
    {
        url: '#',
        icon: <FaNodeJs className="node w-20 h-20"/>,
        caption: 'Node'
    },
    {
        url: '#',
        icon: <SiGraphql className="graphql w-20 h-20"/>,
        caption: 'GraphQl'
    },
    {
        url: '#',
        icon: <SiGit className="git w-20 h-20"/>,
        caption: 'Git'
    },
    {
        url: '#',
        icon: <SiVisualstudio className="vscode w-20 h-20"/>,
        caption: 'vscode'
    },
    {
        url: '#',
        icon: <SiNetlify className="netlify w-20 h-20"/>,
        caption: 'netlify'
    },
]
