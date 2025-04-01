export const seoConfig = {
    site: {
        url: 'https://francise.poveskenet.kz',
        name: 'ПОВЕСТКАНЕТ',
        description: 'Франшиза юридической помощи призывникам',
        defaultLocale: 'ru',
        locales: ['ru', 'kz'],
        identity: {
            type: 'Organization',
            name: 'ПОВЕСТКАНЕТ',
            url: 'https://francise.poveskenet.kz'
        }
    },
    robots: {
        UserAgent: '*',
        Allow: '/',
        Disallow: ['/api/', '/admin/', '/private/'],
        Sitemap: 'https://francise.poveskenet.kz/sitemap.xml'
    },
    sitemap: {
        hostname: 'https://francise.poveskenet.kz',
        gzip: true,
        routes: [
            '/ru',
            '/kz',
            '/ru/about',
            '/kz/about',
            '/ru/advantages',
            '/kz/advantages',
            '/ru/packages',
            '/kz/packages',
            '/ru/calculator',
            '/kz/calculator',
            '/ru/contacts',
            '/kz/contacts'
        ]
    }
} 