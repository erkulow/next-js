import type { FC } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

interface Props {
	className?: string
	data: {
		widgetTitle?: string
		lists: {
			id: string
			path?: string
			title: string
			icon?: any
		}[]
	}
}

const WidgetLink: FC<Props> = ({ className, data }) => {
	const { widgetTitle, lists } = data
	const socials = lists.filter((item) => item.icon)
	const links = lists.filter((item) => !item.icon)
	const { t } = useTranslation('footer')
	return (
		<div className={`${className}`}>
			<h4 className='text-secondary text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7'>
				{t(`${widgetTitle}`)}
			</h4>
			<ul className='flex item-center gap-2'>
				{socials.map((list) => (
					<li key={`widget-list--key${list.id}`} className='flex'>
						<Link href={list.path ? list.path : '#!'}>
							{list.icon}
						</Link>
					</li>
				))}
			</ul>
			<ul className='text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5 text-info'>
				{links.map((list) => (
					<li
						key={`widget-list--key${list.id}`}
						className='flex items-baseline'
					>
						<Link href={list.path ? list.path : '#!'}>
							<a className='transition-colors duration-200 text-info hover:text-black'>
								{t(`${list.title}`)}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default WidgetLink
