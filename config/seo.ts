export const seoConfig = {
    site: {
        url: 'https://franchise.povestkenet.kz',
        name: 'ПОВЕСТКЕНЕТ',
        description: 'Франшиза юридической помощи призывникам',
        defaultLocale: 'ru',
        locales: ['ru', 'kz'],
        identity: {
            type: 'Organization',
            name: 'ПОВЕСТКЕНЕТ',
            url: 'https://franchise.povestkenet.kz'
        }
    },
    robots: {
        UserAgent: '*',
        Allow: '/',
        Disallow: ['/api/', '/admin/', '/private/'],
        Sitemap: 'https://franchise.povestkenet.kz/sitemap.xml'
    },
    sitemap: {
        hostname: 'https://franchise.povestkenet.kz',
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