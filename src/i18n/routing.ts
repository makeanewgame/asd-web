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
            tr: '/hakkimizda',
        },
        '/projects': {
            tr: '/projeler',
        },
        '/projects/[slug]': {
            tr: '/projeler/[slug]',
        },
        '/field-of-activity': {
            tr: '/faaliyet-alanlari',
        },
        '/field-of-activity/industrial-facilities': {
            tr: '/faaliyet-alanlari/endustriyel-yapilar',
        },
        '/field-of-activity/construction': {
            tr: '/faaliyet-alanlari/insaat',
        },
        '/field-of-activity/building-real-estate': {
            tr: '/faaliyet-alanlari/bina-emlak',
        },
        '/field-of-activity/facade-systems': {
            tr: '/faaliyet-alanlari/cephe-sistemleri',
        },
        '/field-of-activity/aluminum-processing': {
            tr: '/faaliyet-alanlari/aluminyum-isleme',
        },
        '/field-of-activity/metal-processing': {
            tr: '/faaliyet-alanlari/metal-isleme',
        },
        '/contact': {
            tr: '/iletisim',
        },
        '': ''

    }
});

export const sitePaths = routing.pathnames;