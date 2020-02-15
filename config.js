'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  title: 'Blog by Nick Leo Martin',
  subtitle: 'Some thoughts on the growing synergy between Man & Machine.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Nick Leo Martin',
    photo: '/photo.png',
    bio: 'Some thoughts on the growing synergy between Man & Machine.',
    contacts: {
      email: 'nickleomartin@gmail.com',
      telegram: '#',
      twitter: '#',
      github: '#',
      rss: '#',
      vkontakte: '#'
    }
  }
};
