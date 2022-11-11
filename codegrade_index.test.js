import { fireEvent, getByText, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fail } from 'assert';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

describe('index.html', () => {
    beforeEach(() => {
        // Constructing a new JSDOM with this option is the key
        // to getting the code in the script tag to execute.
        // This is indeed dangerous and should only be done with trusted content.
        // https://github.com/jsdom/jsdom#executing-scripts
        dom = new JSDOM(html, { runScripts: 'dangerously' });
        container = dom.window.document.body;
    })

    it('harici bir stil dosyası içeriyor, dosyayı içe aktarma incelemesi', () => {
        const cssLinkTag = dom.window.document.head.querySelector('link[href="css/index.css"]');
        expect(cssLinkTag).toBeInTheDocument();
    });

    it('viewport tagı bulundu, viewport tag incelemesi', () => {
        const viewportTag = dom.window.document.head.querySelector('meta[content="width=device-width, initial-scale=1.0"]');
        expect(viewportTag).toBeInTheDocument();
    });
    
    it('anasayfaya linklenen bir header başlığı bulundu', () => {
        const headerTitle = container.querySelector('h1').innerHTML;
        const headerTitleATag = container.querySelector('header a');
        const regex = /ERGİNEER BAR VE MANGAL/i;
        expect(headerTitle).toMatch(regex);
        expect(headerTitleATag.href.includes('index.html')).toEqual(true);
    });

    it('üst menüde 4 adet link içeren bir menü divi bulundu', () => {
        const headerNavLinks = container.querySelector('header nav div');
        let headerNavLinkTextArr = headerNavLinks.innerHTML.split(/<a /i);
        // shift is to get rid of initial index that splits before the a tag
        headerNavLinkTextArr.shift();

        expect(headerNavLinkTextArr.length).toBe(4);

        expect(getByText(headerNavLinks, /Menü/i)).toBeInTheDocument();
        expect(getByText(headerNavLinks, /Rezervasyonlar/i)).toBeInTheDocument();
        expect(getByText(headerNavLinks, /Özel Teklifler/i)).toBeInTheDocument();
        expect(getByText(headerNavLinks, /İletişim/i)).toBeInTheDocument();
    });

    it('"Menü" menu elemanı doğru sayfaya linklendirilmiş!', async () => {
        const menuLink = container.querySelector('header nav a');
        expect(menuLink.href.includes('menu.html')).toEqual(true);
    });

    it('üst menüde 3 adet sosyal medya ikonu doğru konumlandırılmış', () => {
        const headerNavLinks = container.querySelector('nav');

        let headerSMIconsArr = headerNavLinks.innerHTML.split(/<i /i);
        // shift is to get rid of initial index that splits before the i tag
        headerSMIconsArr.shift();
        expect(headerSMIconsArr.length).toBe(3);

        for (let i = 0; i < headerSMIconsArr.length; i++) {
            const index = headerSMIconsArr[i];
            
            if(index.includes('facebook')) {
                expect(index.includes('facebook')).toBe(true);
            } else if(index.includes('twitter')) {
                expect(index.includes('twitter')).toBe(true);
            } else if(index.includes('instagram')) {
                expect(index.includes('instagram')).toBe(true);
            } else {
                fail(`Beklenmeyen bir ikon etiketi`);
            }
        }
    });

    it('YEMEKLERİMİZ sectionında 9 adet resim bulundu', () => {
        const foodPics = container.querySelector('.gallery');

        let foodPicsArr = foodPics.innerHTML.split(/src=/i);
        // shift is to get rid of initial index that splits before the i tag
        foodPicsArr.shift();

        expect(foodPicsArr.length).toBe(9);
    });

    it('footerda bir input ve button verilen metinle tespit edildi', () => {
        const footerInput = container.querySelector('footer input');
        const footerButton = container.querySelector('footer button');

        expect(footerInput).not.toBe(null || undefined);
        expect(footerInput.placeholder.includes('E-posta Adresi')).toBe(true);
        expect(footerButton).not.toBe(null || undefined);
        expect(footerButton.innerHTML.includes('Üye Ol')).toBe(true);
    });

    it('footerda 4 adet link tespit edildi', () => {
        const footerNavLinks = container.querySelector('footer nav');
        let footerNavLinkTextArr = footerNavLinks.innerHTML.split(/<a /i);
        // shift is to get rid of initial index that splits before the a tag
        footerNavLinkTextArr.shift();

        expect(footerNavLinkTextArr.length).toBe(4);

        expect(getByText(footerNavLinks, /Menü/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /Rezervasyonlar/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /Özel Teklifler/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /Contact/i)).toBeInTheDocument();
    });

    it('footerdaki Menü doğru sayfaya linklendirilmiş', async () => {
        const menuLink = container.querySelector('footer nav a');
        expect(menuLink.href.includes('menu.html')).toEqual(true);
    });
});
