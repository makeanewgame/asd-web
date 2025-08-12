import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'tr'],

    // Used when no locale matches
    defaultLocale: 'tr',
    pathnames: {
        '/': '/',
        'about': {
            tr: '/hakkinda',
            en: '/about'
        }
    }
});