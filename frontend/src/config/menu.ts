import {
    ChartGantt,
    Gauge,
    LucideIcon
} from 'lucide-react'

type MenuItemType = {
    title: string
    url: string
    external?: string
    icon?: LucideIcon
    items?: MenuItemType[]
}
type MenuType = MenuItemType[]

export const mainMenu: MenuType = [
    {
        title: 'Contracts',
        url: '/',
        icon: Gauge
    },
    {
        title: 'Reports',
        icon: ChartGantt,
        url: '/reports',
        items: [
            {
                title: 'Total Installment',
                url: '/reports/total-installment',
            },
            {
                title: 'Penalty',
                url: '/reports/penalty',
            }
        ]
    },
]
