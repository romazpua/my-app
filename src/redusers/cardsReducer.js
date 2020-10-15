const initialState = {
  cards: [
    {
      id: 1,
      title: 'Ноутбук ASUS TUF FX505DT-BQ143 Stealth Black (90NR02D2-M10450)',
      imgSrc: require('../../../img/ASUS_TUF_FX505DT-BQ143_Stealth_Black.jpg'),
      price: '19999 $',
      priceDiscount: '21999 $',
      priceDiscount2: '-2000',
      trust: 'от 834 $/мес',
      rating: [true, true, true, true, false],
      comments: 131,
      cashback: '199 $',
    },
    {
      id: 2,
      title: 'SAMSUNG Galaxy S10 8/128Gb Duos Black (SM-G973FZKDSEK)',
      imgSrc: require('../../../img/SAMSUNG_Galaxy_S10_8128Gb_Duos_Black_(SM-G973FZKDSEK).jpg'),
      price: '16999 $',
      priceDiscount: '18999 $',
      priceDiscount2: '-2000',
      trust: 'от 3167 $/мес',
      rating: [true, true, true, true, false],
      comments: 31,
      cashback: '169 $',
    },
    {
      id: 3,
      title: 'Телевизор HISENSE 43B6700PA',
      imgSrc: require('../../../img/Телевизор_HISENSE_43B6700PA.jpg'),
      price: '7399 $',
      priceDiscount: '8999 $',
      priceDiscount2: '-1600',
      trust: 'от 617 $/мес',
      rating: [true, true, true, true, false],
      comments: '',
      cashback: '73 $',
    },
    {
      id: 4,
      title: 'Стиральная машина LG F2J3HS2W',
      imgSrc: require('../../../img/Стиральная_машина_LG_F2J3HS2W.jpg'),
      price: '9999 $',
      priceDiscount: '11999 $',
      priceDiscount2: '-2000',
      trust: 'от 417 $/мес',
      rating: [true, true, true, true, false],
      comments: 22,
      cashback: '99 $',
    },
  ]
}

export default function (state = initialState) {
  return state
}