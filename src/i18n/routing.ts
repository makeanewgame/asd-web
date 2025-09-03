import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'tr'],

    // Used when no locale matches
    defaultLocale: 'tr',

    // The locale is always the first segment of the path
    pathnames: {
        '/': '/',
        '/about': {
            tr: '/hakkinda',
        },
        '/contact': {
            tr: '/iletisim',
        },
        '': ''

    }
});

export const sitePaths = routing.pathnames;