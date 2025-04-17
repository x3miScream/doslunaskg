const menuList = [
    {
        label: 'Для тела',
        path: 'products/0',
        isShowMenu: true,
        subMenus: [
            {
                label: 'Ежедневный интимный уход',
                path: 'products/0/0',
                isShowMenu: true,
            },
            {
                label: 'Соли и гели для ванн',
                path: 'products/0/1',
                isShowMenu: true,
                subMenus: [
                    {
                        label: 'Соли для ванн',
                        path: 'products/0/1',
                        isShowMenu: true,
                    },
                    {
                        label: 'Масло для ванны для тела',
                        path: 'products/0/1',
                        isShowMenu: true,
                    },
                    {
                        label: 'Гель для душа с блестками',
                        path: 'products/0/1',
                        isShowMenu: true,
                    },
                ]
            },
            {
                label: 'Кремы + лосьоны + скрабы',
                path: 'products/0/2',
                isShowMenu: true,
            },
            {
                label: 'Дезодорант-спрей',
                path: 'products/0/3',
                isShowMenu: true,
            },
            {
                label: 'Духи + солнцезащитный крем',
                path: 'products/0/15',
                isShowMenu: true,
            }
        ]
    },
    {
        label: 'Для лица',
        path: 'products/1',
        isShowMenu: true,
        subMenus: [
            {
                label: 'Кремы + скрабы',
                path: 'products/1/4',
                isShowMenu: true,
            },
            {
                label: 'Маска для лица',
                path: 'products/1/5',
                isShowMenu: true,
            },
            {
                label: 'Гелевые патчи для глаз и губ',
                path: 'products/1/6',
                isShowMenu: true,
            },
            {
                label: 'Сыворотка + тоник',
                path: 'products/1/7',
                isShowMenu: true,
            },
            {
                label: 'Набор витаминов',
                path: 'products/1/8',
                isShowMenu: true,
            },
            {
                label: 'Королевское желе. Антивозрастная двойная усовершенствованная сыворотка',
                path: 'products/1/9',
                isShowMenu: true,
            }
        ]
    },
    {
        label: 'Для волос',
        path: 'products/2',
        isShowMenu: true,
        subMenus: [
            {
                label: 'Лечение волос',
                path: 'products/2/10',
                isShowMenu: true,
            },
            {
                label: 'Аргановые масла для волос',
                path: 'products/2/11',
                isShowMenu: true,
            },
            {
                label: 'Бразильский биопротеин',
                path: 'products/2/12',
                isShowMenu: true,
            },
            {
                label: 'Маски + питание + аромат',
                path: 'products/2/13',
                isShowMenu: true,
            },
            {
                label: 'Шампунь + кондиционер',
                path: 'products/2/14',
                isShowMenu: true,
            }
        ]
    },
    {
        label: 'Домашние спреи',
        path: 'products/3',
        isShowMenu: true,
        subMenus: [ ]
    },
    {
        label: 'Ещё',
        path: 'products/1/2',
        isShowMenu: true,
        subMenus: [
            {
                label: 'О нас',
                path: 'about-us',
                isShowMenu: true,
            },
            {
                label: 'Связаться с нами',
                path: 'contact-us',
                isShowMenu: true,
            }
        ]
    }
];

export default menuList;