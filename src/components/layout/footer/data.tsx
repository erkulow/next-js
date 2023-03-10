import Image from 'next/image'
import iconMask from '../../../../public/icons/mask.png'
import iconPay from '../../../../public/icons/pay.png'
import iconVk from '../../../../public/icons/vk.png'

export const footer = {
	widgets: [
		{
			id: 1,
			widgetTitle: 'widget-title-social',
			lists: [
				{
					id: 1,
					title: 'link-instagram',
					path: 'https://vk.com/',
					icon: <Image width={26} height={26} src={iconVk} />,
				},
				{
					id: 2,
					title: 'link-instagram',
					path: 'https://vk.com/',
					icon: <Image width={26} height={26} src={iconMask} />,
				},
				{
					id: 3,
					title: 'link-instagram',
					path: 'https://vk.com/',
					icon: <Image width={54} height={18} src={iconPay} />,
				},
			],
		},
		{
			id: 2,
			widgetTitle: 'widget-title-contact',
			lists: [
				{
					id: 1,
					title: 'link-contact-us',
					path: '/contact-us',
				},
				{
					id: 2,
					title: 'link-email',
					path: '/',
				},
				{
					id: 3,
					title: 'link-email-two',
					path: '/',
				},
				{
					id: 4,
					title: 'link-phone',
					path: '/',
				},
			],
		},
		{
			id: 3,
			widgetTitle: 'widget-title-about',
			lists: [
				{
					id: 1,
					title: 'link-support-center',
					path: '/contact-us',
				},
				{
					id: 2,
					title: 'link-customer-support',
					path: '/',
				},
				{
					id: 3,
					title: 'link-about-us',
					path: '/contact-us',
				},
				{
					id: 4,
					title: 'link-copyright',
					path: '/',
				},
			],
		},
		{
			id: 4,
			widgetTitle: 'widget-title-customer-care',
			lists: [
				{
					id: 1,
					title: 'link-faq',
					path: '/faq',
				},
				{
					id: 2,
					title: 'link-shipping',
					path: '/',
				},
				{
					id: 3,
					title: 'link-exchanges',
					path: '/',
				},
			],
		},
		{
			id: 5,
			widgetTitle: 'widget-title-our-information',
			lists: [
				{
					id: 1,
					title: 'link-privacy',
					path: '/privacy',
				},
				{
					id: 2,
					title: 'link-terms',
					path: '/terms',
				},
				{
					id: 3,
					title: 'link-return-policy',
					path: '/privacy',
				},
				{
					id: 4,
					title: 'link-site-map',
					path: '/',
				},
			],
		},
		{
			id: 6,
			widgetTitle: 'widget-title-top-categories',
			lists: [
				{
					id: 1,
					title: 'link-men-wear',
					path: '/search',
				},
				{
					id: 2,
					title: 'link-men-wear',
					path: '/search',
				},
				{
					id: 3,
					title: 'link-kids-wear',
					path: '/search',
				},
				{
					id: 4,
					title: 'link-sports-wear',
					path: '/search',
				},
			],
		},
	],
	payment: [
		{
			id: 1,
			path: '/',
			image: '/assets/images/payment/sbp.png',
			name: 'payment-mir',
			width: 50,
			height: 30,
		},
		{
			id: 1,
			path: '/',
			image: '/assets/images/payment/mir.svg',
			name: 'payment-mir',
			width: 40,
			height: 20,
		},
		{
			id: 1,
			path: '/',
			image: '/assets/images/payment/money.png',
			name: 'payment-mir',
			width: 110,
			height: 30,
		},
	],
}
