# Sprint Challenge: Kullanıcı Arayüzü and Responsive Tasarım
​
Bu Challenge, bu sprint'te öğrenilen kavram ve teknikleri uygulamanıza ve bunları gerçekçi bir projede (bir restoran için statik bir site) uygulamanıza olanak tanır. Bu Sprint boyunca, Semantik HTML, CSS stilleme, CSS Flexbox Modül, ve Responsive tasarımlarla uğraştın. Bu mücadelede çok sayfalı bir sitenin HTML etiketlerini ekleyip bir takım CSS stilleri eklemen gerekmektedir. Ayrıca kendin yeni bir sayfa daha oluşturup menü içerisinden link vermen gerekmektedir.
​
​
## Beklenenler
​
**Açıklamaları lütfen detaylıca okuyun. Başlamadan önce senden tam olarak nelerin beklendiğini iyice anlayın.**
​
Bu projeyi kendi başına yapman beklenmektedir. Başkalarının projelerine bakabilirsin, yardım alabilirsin ama sonunda projeyi kendin yapmalısın.
Bu proje kendi başına çalışarak neler başarabileceğini ölçmeye yarayacaktır. Önceki günlerde öğrendiğin kavramları kullanarak, bu görevde yeterliliğe ulaşman hedeflenmektedir. İhtiyacın olan modül, bilgi vs. gibi şeyleri Google gibi harici kaynakları kullanarak faydalanabilirsin.
​
Kodunu düzenli ve anlamlı bir şekilde commit edin.
​
Çözümünde en iyi uygulamaları takip etmeniz, temiz ve profesyonel sonuçlar üretmen esastır. Çalışmanı gözden geçirmek, iyileştirmek ve değerlendirmek için zaman ayırmalısın. Çalışmanda yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere temel profesyonel sadeleştirmeyi gerçekleştirmeyi unutma. Minimum Uygulanabilir bir ürün çıkartabilmen, çok fazla çaba harcanmış ama doğru düzgün çalışmayan bir proje göndermenden yeğdir.
​
**NOT: Lütfen web siteni düzenlemek için Flexbox kullandığından emin ol. Floats, inline-block, tables, vs. düzen için kullanılmamalıdır.**
​
​
## Açıklama
​
Bu projede, eksik olan header ve footer'ı oluşturacak ve ana sayfada bazı CSS stillerini güncelleyecek, ardından oluşturduğun bir sayfaya bağlantı verecek ek bir menü elemanı oluşturacaksın. Ayrıca her sayfa için bir mobil media sorgusu yazacaksın.. Her sayfa için daha spesifik bilgi için aşağıya bakabilirsin.
​
Aşağıda listelenen minimum uygulanabilir ürün (MVP) özelliklerini karşılarken, web sayfanın ana sayfa ve menü sayfaların aşağıda paylaşılan ekran görüntüleri gibi görünmelidir:
​
[Anasayfa örneği](/ornekler/anasayfa-desktop.png)
​
[Anasayfa mobil örneği](/ornekler/anasayfa-mobil.png)
​
[Menü sayfası örneği](/ornekler/menu-desktop.png)
​
[Menü sayfası mobil örneği](/ornekler/menu-mobil.png)
​
​
## Proje Kurulumu
​
1. Repo'yu forklayın, sonra forku klonlayın.
2. BRANCH OLUŞTURMAYIN. Projeyi bugün main/master'a pushlayacaksın.
3. konsoldan repo klasörünüze girin ve VS Code'u açmak için . girin.
4. VSC'de terminali açın ve  `npm install` yazın. Tamamen bitene kadar bekleyin.
5. Sonra tek satırda `npm run test` yazın, ve terminali split ile 2 ekran yapın. Diğer tarafı git komutları veya genel kullanım için kullanın.
6. VS Code'un sol tarafındaki Eklentiler bölümünden Live Server eklentisini indirin. Eklenti yüklendikten sonra sağ altta bulunan "Go Live" butonuna basarak HTML dosyanı çalıştırabilirsin.
7. Tamamladığın görevi main branch'a pushlamalısın.
​
​
## Minimum Uygulanabilir Ürün
​
Tamamlanan proje aşağıdakileri içermelidir:
 
​
### Responsive Tasarım 
​
Bitirmeden önce, tasarım dosyalarını gözden geçirmek için 10 dakikanı ayır. Ana sayfa ve menü sayfalarının nasıl oluşturulduğunu görmek için zaman ayır. Flexbox'ın ana kavramlarını ve kodunu basitleştirmek için satırları veya sütunları nasıl kullanabileceği düşün. İyi bir geliştirici, tek bir kod satırı yazmadan önce her iki ekran boyutu için de bir plana sahip olmalıdır. Hatta tasarım dosyalarının üzerine çizim yapabilir veya etiketlerle kendi basit WireFrame'lerini oluşturabilirsin.
​
HTML/CSS implementasyonu için Google Chrome developer tools(geliştirici araçları) kullanman **gerekmektedir**. Bu araçta ekran boyutlarını değiştirebileceğin bir özellik bulunmaktadır, tarayıcı penceresini küçültmek aynı işlevi görmez. Bu özellik, standart 1920x1080 piksel masaüstü genişliği gibi mevcut monitörünüzün boyutundan daha büyük boyutları da görüntülemene olanak tanır. Geliştirici araçlarını kullanmadan responsive(duyarlı) bir web sitesini düzgün şekilde uygulama konusunda başarılı olamazsın.
​
* [ ] Desktop boyutu 1920px width olmalıdır.
* [ ] Mobil boyutu 428px width olmalıdır.
* [ ] viewport tagını eklemeyi unutmayın!
​
**NOT: Tasarımınızın bu boyutlar arasında harika görünmediğini fark edebilirsin. Bu tamamen normaldir; gerçek bir ürün için, en azından tablet boyutunda bir ara tasarım ve çeşitli ekran boyutları için deneyimi geliştirmek için muhtemelen birkaç kesme eşiği daha olacaktır. Daha fazla pratik yapmak istiyorsan, projenin her boyutta harika görünmesini sağlamaktan çekinmeyin!**
​
*OPSİYONEL / EK*
* [ ] Tablet boyutu 1024px width ayarlanabilir. Bunun için bir tasarım dosyası yok, yaratıcı olun ve diğer iki ekran boyutuyla aynı tasarım modellerini takip edin. :)
* [ ] Büyük boyutlar arasındaki düzeltmeler veya belirli popüler cihazları desteklemek için ek media sorguları, örnek. 360px, 1280px.
​
​
### Anasayfa
​
Ana sayfa için sağlanan tasarım dosyasını inceleyin.
​
* [ ] Eksik header ve footer bölümlerini oluşturmak için HTML ve CSS'yi oluşturun.
* [ ] h1 tagiyle oluşturduğunuz sayfa başlığı [index.html](index.html) 'ye bağlantı vermelidir (link <a>).
* [ ] `Menü` menü elemanı [menu.html](menu.html) sayfasına bağlantı vermelidir.
* [ ] Header'e [FontAwesome](https://fontawesome.com/search)'la oluşturacağınız Facebook, Twitter, and Instagram sosyal medya ikonları ekleyin. *NOT: * ikonların şu isimleri içerdiğine emin olun: "facebook", "twitter", ve "instagram" .
* [ ] Ana sayfa düzeninin geri kalanını verilen tasarıma uyacak şekilde oluşturun. Çoğu zaten uygulandı; yalnızca header, footer ve galeri bölümlerini düzeltmen gerekir.
​
Renkler ve fontlar:
Açık text: rgb(225, 239, 230);
Koyu arkaplan: rgb(0, 4, 17);
Koyu transparan: background-color: rgb(0, 4, 17, .8);
​
​
### Menu Sayfası
​
Menü sayfası için sağlanan tasarım dosyalarını inceleyin.
​
* [ ] Ana sayfa header ve footer kopyalayıp menü sayfasına yapıştırın.
* [ ] Header resmini menü sayfası resmiyle güncelleyin.
* [ ] Menü için bir article öğesi ve içinde bir div kullanın; div'in class'ı "menu-container" olarak düzenleyin
* [ ] Tüm bölümler için bir container oluşturun (örnek. yemekler ya da  mezeler) class'ları "menu-section" olarak düzenleyin
* [ ] Tüm menü elemanları için bir container oluşturun (örnek. soda ya da hamburger) ve class'larını "menu-item" olarak oluşturun
* [ ] Tüm fiyatlara ve menü başlıklarına H4 ekleyin, her menü elemanı için 2 adet h4 olacak.
* [ ] Tüm menü elemanı açıklamaları için p etiketi ekleyin, ikinci satırdaki açıklama da [örnek: "(v)"] kendi p etiketine sahip olacaktır.
​
desktop için renkler ve fontlar:
Açık text: rgb(225, 239, 230);
Koyu arkaplan: rgb(0, 4, 17);
Koyu transparan: background-color: rgb(0, 4, 17, .8);
​
Mobil için renkler ve fontlar: 
Koyu text: rgb(0, 4, 17);
Açık arkaplan: rgb(225, 239, 230);
Koyu çerçeveler(border): rgb(0, 4, 17);
​
​
### Ek Görevler
* [ ] Rezervasyonlar, Özel Teklifler ve İletişim sayfaları için de HTML ve CSS oluşturun
* [ ] Tüm bu sayfaları responsive olarak tasarlayın.​

