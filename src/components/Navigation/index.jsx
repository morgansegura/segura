import React from 'react'
import { Link } from 'gatsby'
const menu = [
	{
		title: '',
		label: 'Home',
		path: '/',
	},
	{
		title: '',
		label: 'About',
		path: '/about',
	},
	{
		title: '',
		label: 'Skills',
		path: '/skills',
	},
	{
		title: '',
		label: 'Projects',
		path: '/projects',
	},
	{
		title: '',
		label: 'Testimonials',
		path: '/testimonials',
	},
];
export const HeaderNavigation = ({ children, ...moreProps }) => (
	<div {...moreProps}>
		<nav>
			{
				menu.map(item => (
					<Link title={item.title} className="" to={item.path}>
						<div>{item.label}</div>
					</Link>
				))
			}
		</nav>
	</div>
)
