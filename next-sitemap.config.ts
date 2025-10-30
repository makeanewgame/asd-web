import type { IConfig, ISitemapField } from 'next-sitemap';
import axios from 'axios';
import { projects } from './src/utils/data';
const locales = ['tr', 'en'];
const defaultLocale = 'tr';

const API_BASE_URL = 'https://www.asdgrup.com.tr/'; 


const config: IConfig = {

  siteUrl: 'https://www.asdgrup.com.tr/',


  generateRobotsTxt: true,

 
  sitemapSize: 5000,

  changefreq: 'weekly',
  priority: 0.7,

  transform: async (config, url) => {
 
    let path = url;


    const localeRegex = new RegExp(`^/(${locales.join('|')})`);
    const isLocalized = localeRegex.test(path.toLowerCase());


    const links = locales.map((locale) => {
            const loc = `/${locale}${path}`;
        
        return {
            loc,
            changefreq: 'weekly' as ISitemapField['changefreq'], 
            priority: 0.7,
            lang: locale, // Alternatif dil etiketi
        };
    });

 return { 
        loc: url, 
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(),
        links: links,
    };
 
  },


  additionalPaths: async (config) => {

    const basePaths = [
      '/', 
      '/about',
      '/contact',
      '/error',
  
      // "/[locale]/field-of-activity" 
      '/field-of-activity/aluminum-processing',
      '/field-of-activity/building-real-estate',
      '/field-of-activity/construction',
      '/field-of-activity/facade-systems',
      '/field-of-activity/industrial-facilities',
      '/field-of-activity/metal-processing',
      '/projects-on-sale', 
      '/protected', 
    ];

 
    let dynamicPaths: string[] = [];
    try {
     
        const { data: projects } = await axios.get(`${API_BASE_URL}/projects`);
       
        const projectSlugs = projects.map((project: { slug: any; }) => `/projects/${project.slug}`);
       
        const { data: onSaleProjects } = await axios.get(`${API_BASE_URL}/projects-on-sale`);
       const onSaleSlugs = projects
            .filter((project: { onSale: any; }) => project.onSale) 
            .map((project: { slug: any; }) => `/projects-on-sale/${project.slug}`);

        dynamicPaths = [...projectSlugs, ...onSaleSlugs];
    } catch (error) {
    
        console.error('API’den dinamik yollar çekilemedi:', error);
    }

    const paths = [...basePaths, ...dynamicPaths];


    const results = await Promise.all(paths.map((path) => config.transform(config, path)));


    return results.filter((r) => r !== undefined) as ISitemapField[];
  },
};

export default config;