import { fireEvent, getByText } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fail } from 'assert';

const html = fs.readFileSync(path.resolve(__dirname, './menu.html'), 'utf8');

let dom;
let container;

describe('menu.html', () => {
    beforeEach(() => {
        // Constructing a new JSDOM with this option is the key
        // to getting the code in the script tag to execute.
        // This is indeed dangerous and should only be done with trusted content.
        // https://github.com/jsdom/jsdom#executing-scripts
        dom = new JSDOM(html, { runScripts: 'dangerously' });
        container = dom.window.document.body;
    });

    it('harici bir stil dosyası içeriyor', () => {
        const cssLinkTag = dom.window.document.head.querySelector('link[href="css/menu.css"]');
        expect(cssLinkTag).toBeInTheDocument();
    });

    it('bir viewport tagi içeriyor', () => {
        const viewportTag = dom.window.document.head.querySelector('meta[content="width=device-width, initial-scale=1.0"]');
        expect(viewportTag).toBeInTheDocument();
    });
    
    it('anasayfaya linklenen bir üst başlık bulundu', () => {
        const headerTitle = container.querySelector('h1').innerHTML;
        const headerTitleATag = container.querySelector('header a');
        const regex = /ERGİNEER BAR VE MANGAL/i;
        expect(headerTitle).toMatch(regex);
        expect(headerTitleATag.href.includes('index.html')).toEqual(true);
    });

    it('header menüsünde 4 adet link içeren bir div içeriyor', () => {
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

    it('üstteki Menü elemanı doğru sayfaya link veriyor', async () => {
        const menuLink = container.querySelector('header nav a');
        expect(menuLink.href.includes('menu.html')).toEqual(true);
    });

    it('üst menüde 3 adet sosyal medya iconu doğru konumlandırılmış', () => {
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
            } else fail(`Beklenmeyen bir ikon tespit edildi`);
        }
    });

    it('bir menü başlığı içeriyor', () => {
        const menuTitle = container.querySelector('h2').innerHTML;
        const regex = /Yemekler &amp; İçecekler/i;
        expect(menuTitle).toMatch(regex);
    });

    it('5 adet menu-section class\'ı doğru başlıklarla tespit edildi', () => {
        const menuSections = Array.from(container.querySelectorAll('.menu-section'));
        expect(menuSections.length).toBe(5);

        for(let i = 0; i < menuSections.length; i++) {
            if(menuSections[i].innerHTML.includes('İçecekler')) {
                expect(getByText(menuSections[0], /İçecekler/i)).toBeInTheDocument();
            } else if(menuSections[i].innerHTML.includes('Aperatifler')) {
                expect(getByText(menuSections[1], /Aperatifler/i)).toBeInTheDocument();
            } else if(menuSections[i].innerHTML.includes('Çorbalar ve Salatalar')) {
                expect(getByText(menuSections[2], /Çorbalar ve Salatalar/i)).toBeInTheDocument();
            } else if(menuSections[i].innerHTML.includes('Mezeler')) {
                expect(getByText(menuSections[3], /Mezeler/i)).toBeInTheDocument();
            } else if(menuSections[i].innerHTML.includes('Tatlılar')) {
                expect(getByText(menuSections[4], /Tatlılar/i)).toBeInTheDocument();
            } else fail(`Beklenmeyen menü sectionı`);
        }
    });

    it('her menu-section için 3 ila 5 menü elemanı tespit edildi', () => {
        const menuSections = Array.from(container.querySelectorAll('.menu-section'));
        if(menuSections === undefined || menuSections === null || menuSections.length === 0) fail(`Uygunsuz menu-section sayısı`);
        
        menuSections.forEach((section) => {
            const menuItems = Array.from(section.querySelectorAll('.menu-item'));
            if(menuItems === undefined || menuSections === null || menuSections.length === 0) fail(`Uygunsuz menü elemanı sayısı.`);

            if(menuItems.length >= 3 && menuItems.length <= 5) {
                expect(menuItems.length >= 3 && menuItems.length <= 5).toBe(true);
            } else fail(`Uygunsuz menü elemanı sayısı.`);
        });
    });

    it('tüm fiyat ve isimler için h4 tagleri bulundu', () => {
        const menuSections = Array.from(container.querySelectorAll('.menu-section'));
        if(menuSections === undefined || menuSections === null || menuSections.length === 0) fail(`Uygunsuz menu section sayısı.`);
        
        menuSections.forEach((section) => {
            const menuItems = Array.from(section.querySelectorAll('.menu-item'));
            if(menuItems === undefined || menuSections === null || menuSections.length === 0) fail(`Uygunsuz menü elemanı sayısı.`);

            menuItems.forEach((item) => {
                let itemsh4Count = item.innerHTML.match(/<h4/gi).length;
                expect(itemsh4Count).toBe(2);
            });
        });
    });

    it('herbir menu elemanı açıklaması için ve opsiyonel (V/GF) için bir p tagı bulundu renders ', () => {
        const menuSections = Array.from(container.querySelectorAll('.menu-section'));
        if(menuSections === undefined || menuSections === null || menuSections.length === 0) fail(`Uygunsuz menu section sayısı.`);
        
        menuSections.forEach((section) => {
            const menuItems = Array.from(section.querySelectorAll('.menu-item'));
            if(menuItems === undefined || menuSections === null || menuSections.length === 0) fail(`Uygunsuz menü elemanı sayısı.`);

            menuItems.forEach((item) => {
                let itemsPCount = item.innerHTML.match(/<p/gi).length;
                expect(itemsPCount === 1 || itemsPCount === 2).toBe(true);
            });
        });
    });

    it('footerda beklenen textle bir input ve buton tagi tespit edildi', () => {
        const footerInput = container.querySelector('footer input');
        const footerButton = container.querySelector('footer button');

        expect(footerInput).not.toBe(null || undefined);
        expect(footerInput.placeholder.includes('E-posta Adresi')).toBe(true);
        expect(footerButton).not.toBe(null || undefined);
        expect(footerButton.innerHTML.includes('Üye Ol')).toBe(true);
    });

    it('footer menüsünde 4 adet link bulundu', () => {
        const footerNavLinks = container.querySelector('footer nav');
        let footerNavLinkTextArr = footerNavLinks.innerHTML.split(/<a /i);
        // shift is to get rid of initial index that splits before the a tag
        footerNavLinkTextArr.shift();

        expect(footerNavLinkTextArr.length).toBe(4);

        expect(getByText(footerNavLinks, /Menü/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /Rezervasyonlar/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /Özel Teklifler/i)).toBeInTheDocument();
        expect(getByText(footerNavLinks, /İletişim/i)).toBeInTheDocument();
    });

    it('footerdaki menü doğru sayfaya yönlendiriyor', async () => {
        const menuLink = container.querySelector('footer nav a');
        expect(menuLink.href.includes('menu.html')).toEqual(true);
    });
});
