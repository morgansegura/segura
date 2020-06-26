import React from 'react'
import { GoSettings, GoBrowser, GoCode, GoDeviceDesktop } from 'react-icons/go'

export const skillsList = {
  list: [
    {
      title: 'Web Design',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.',
      icon: <GoDeviceDesktop />,
      iconLeft: true,
    },
    {
      title: 'Ui/Ux Theory & Design',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.',
      icon: <GoSettings />,
      iconLeft: true,
    },
    {
      title: 'Front End Development',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.',
      icon: <GoBrowser />,
      iconLeft: true,
    },
    {
      title: 'Back End Development',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.',
      icon: <GoCode />,
      iconLeft: true,
    },
  ],
}
