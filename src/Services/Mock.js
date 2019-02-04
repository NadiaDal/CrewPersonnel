const location = {
  street: '6945 manor road',
  city: 'worcester',
  state: 'county londonderry',
  postcode: 'XE6 7RS',
  coordinates: {
    latitude: '-71.7252',
    longitude: '-87.9993',
  },
  timezone: {
    offset: '+1:00',
    description: 'Brussels, Copenhagen, Madrid, Paris',
  },
};

const notTransformedUser = [
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'dave',
      last: 'bailey',
    },
    location: {
      street: '6945 manor road',
      city: 'worcester',
      state: 'county londonderry',
      postcode: 'XE6 7RS',
      coordinates: {
        latitude: '-71.7252',
        longitude: '-87.9993',
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris',
      },
    },
    email: 'dave.bailey@example.com',
    login: {
      uuid: '307b6f38-d71c-41e4-8219-7b6cadfc6879',
      username: 'beautifulmeercat496',
      password: 'broker',
      salt: '2EeYd3tU',
      md5: 'daa9a1e8bd8cbaeaf53f7a934703f0a2',
      sha1: '52872c35bfc4b6a555bd3ec8b07d526e664cc5e0',
      sha256: '9f45c2cad66824909d34479e9b7ad9c8cde837b5574af8b4575d038b91bd73ca',
    },
    dob: {
      date: '1983-01-08T16:30:28Z',
      age: 36,
    },
    registered: {
      date: '2009-04-18T13:21:28Z',
      age: 9,
    },
    phone: '01776 561964',
    cell: '0799-917-246',
    id: {
      name: 'NINO',
      value: 'TP 59 92 74 Y',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/81.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/81.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/81.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'grace',
      last: 'baker',
    },
    location: {
      street: '7221 queensway',
      city: 'city of london',
      state: 'cornwall',
      postcode: 'DA4 5XU',
      coordinates: {
        latitude: '41.0262',
        longitude: '91.6277',
      },
      timezone: {
        offset: '+3:30',
        description: 'Tehran',
      },
    },
    email: 'grace.baker@example.com',
    login: {
      uuid: 'a9a2fa7c-3024-46ff-b490-17fb9368a949',
      username: 'lazykoala467',
      password: 'moomoo',
      salt: 'U6Xonmqh',
      md5: '94f3a8ab9f53f1294a32f7b403884f5a',
      sha1: 'af7990c3eb532c13be0cd424563cc55de830a7ed',
      sha256: 'e3f7bdc480d2c28ce45209d7a1682984f582390bdf4d6c71ff58a207d308bab0',
    },
    dob: {
      date: '1956-04-22T11:58:11Z',
      age: 62,
    },
    registered: {
      date: '2012-05-16T03:34:59Z',
      age: 6,
    },
    phone: '020 3722 5703',
    cell: '0765-025-212',
    id: {
      name: 'NINO',
      value: 'XK 89 07 24 S',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/92.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/92.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'wallace',
      last: 'james',
    },
    location: {
      street: '9402 the avenue',
      city: 'newcastle upon tyne',
      state: 'devon',
      postcode: 'X76 9DE',
      coordinates: {
        latitude: '-55.5133',
        longitude: '66.4100',
      },
      timezone: {
        offset: '+9:00',
        description: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
      },
    },
    email: 'wallace.james@example.com',
    login: {
      uuid: 'af0e6db5-8511-448b-b608-18aea63c4f30',
      username: 'sadzebra153',
      password: 'eeyore',
      salt: 'G7wm1WS0',
      md5: '420938b9dfe4004fa980f3aa0ab87673',
      sha1: '936d0a2d0c81edcc43e882a78d25a0b308e93aa2',
      sha256: '2bee32a15ff88568bee83a90c9e88a46ac1ad11d35b441817a0b44f65d191c6f',
    },
    dob: {
      date: '1944-10-02T19:42:53Z',
      age: 74,
    },
    registered: {
      date: '2007-09-14T06:46:56Z',
      age: 11,
    },
    phone: '016973 80203',
    cell: '0740-723-287',
    id: {
      name: 'NINO',
      value: 'GL 91 83 09 I',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/74.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/74.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'female',
    name: {
      title: 'miss',
      first: 'laura',
      last: 'hill',
    },
    location: {
      street: '1614 the grove',
      city: 'st davids',
      state: 'dorset',
      postcode: 'Q4U 8YX',
      coordinates: {
        latitude: '87.6580',
        longitude: '-28.4728',
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris',
      },
    },
    email: 'laura.hill@example.com',
    login: {
      uuid: '71f0d288-6e38-41a4-8517-98d4357892c7',
      username: 'greenpanda743',
      password: 'internet',
      salt: 'Q5sjS6r4',
      md5: '8d6cf9ed3f13bc42775d8f0dbcc56558',
      sha1: 'c61cedea2b575e455bb34caa76bf9bec2b34ee35',
      sha256: '3a1897abf0f8f17b7d629f37b1f6918d64db43db6525d8a3f478d712229665d7',
    },
    dob: {
      date: '1964-12-26T14:47:49Z',
      age: 54,
    },
    registered: {
      date: '2008-03-06T21:29:47Z',
      age: 10,
    },
    phone: '017687 37397',
    cell: '0737-005-783',
    id: {
      name: 'NINO',
      value: 'RZ 14 98 01 L',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/71.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/71.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/71.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'adrian',
      last: 'jenkins',
    },
    location: {
      street: '8965 kings road',
      city: 'dundee',
      state: 'grampian',
      postcode: 'KF1 2UW',
      coordinates: {
        latitude: '-28.2579',
        longitude: '30.6269',
      },
      timezone: {
        offset: '+5:00',
        description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
      },
    },
    email: 'adrian.jenkins@example.com',
    login: {
      uuid: '1ffe1b46-a11c-452e-bab9-af84778e8e24',
      username: 'blackleopard285',
      password: 'rasta',
      salt: 'YK4EVFkJ',
      md5: 'a4ba6d2e3e28af3d85df1396e62713c3',
      sha1: 'cc3026a00c6a88c933c275273a51a4746e0d5efe',
      sha256: 'c51a1b10600c9a1c8bec239364945bcbca244cfe99d0317a7f55c6bb210fc045',
    },
    dob: {
      date: '1997-06-05T12:27:14Z',
      age: 21,
    },
    registered: {
      date: '2008-07-31T13:27:31Z',
      age: 10,
    },
    phone: '016977 62778',
    cell: '0763-841-434',
    id: {
      name: 'NINO',
      value: 'TM 46 74 14 H',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/89.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/89.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/89.jpg',
    },
    nat: 'GB',
  },
];

const transformedUser = [
  {
    category: 'applied',
    email: 'dave.bailey@example.com',
    location: 'Worcester',
    name: 'Mr Dave Bailey',
    picture: 'https://randomuser.me/api/portraits/med/men/81.jpg',
  },
  {
    category: 'applied',
    email: 'grace.baker@example.com',
    location: 'City of london',
    name: 'Mrs Grace Baker',
    picture: 'https://randomuser.me/api/portraits/med/women/92.jpg',
  },
  {
    category: 'applied',
    email: 'wallace.james@example.com',
    location: 'Newcastle upon tyne',
    name: 'Mr Wallace James',
    picture: 'https://randomuser.me/api/portraits/med/men/74.jpg',
  },
  {
    category: 'applied',
    email: 'laura.hill@example.com',
    location: 'St davids',
    name: 'Miss Laura Hill',
    picture: 'https://randomuser.me/api/portraits/med/women/71.jpg',
  },
  {
    category: 'applied',
    email: 'adrian.jenkins@example.com',
    location: 'Dundee',
    name: 'Mr Adrian Jenkins',
    picture: 'https://randomuser.me/api/portraits/med/men/89.jpg',
  },
];

export default {
  location,
  notTransformedUser,
  transformedUser,
};
