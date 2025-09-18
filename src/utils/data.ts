enum ProjectType {
  Konut = "Konut",
  Ustyapı = "Üstyapı",
  EndüstriyelYapi = "Endüstriyel Yapı",
  CepheAluminyum = "Cephe & Alüminyum",
  Restorasyon = "Restorasyon",
}
enum ProjectStatus {
  Tamamlanan = "Tamamlanan",
  DevamEden = "Devam Eden",
  Satista = "Satışta",
  YeniProje = "Yeni Proje",
}

const ProjectBanners = [
  {
    id: 1,
    title: ProjectType.Konut,
    image: "/banners/konut.webp",
    headline: "Yaşam Alanları, Hayallerle Şekillenir",
    description: "Bir ev, sadece duvarlardan ve çatıdan ibaret değildir; içinde huzur, sıcaklık ve gelecek nesillere bırakılacak anılar barındırır.",
  },
  {
    id: 2,
    title: ProjectType.Ustyapı,
    image: "/banners/ustyapi.webp",
    headline: "Her Proje, Kendi Hikâyesini Yazar",
    description: "Her bina, yalnızca beton, cam ve metalden ibaret değildir; ardında bir hayal, bir ihtiyaç ve bir vizyon taşır. ",
  },
  {
    id: 3,
    title: ProjectType.EndüstriyelYapi,
    image: "/banners/endustriyel.webp",
    headline: "Gücün ve Dayanıklılığın İnşa Edildiği Nokta",
    description: "Bir tesis, yalnızca makineler ve üretim hatlarından ibaret değildir; ardında emek, sürdürülebilirlik ve büyüme vizyonu taşır.",
  },
  {
    id: 4,
    title: ProjectType.CepheAluminyum,
    image: "/banners/cephe.webp",
    headline: "Binalar, Kimliğini Cephelerinde Taşır",
    description: "Bir cephe, yalnızca estetik bir yüzey değildir; içinde mimarinin ruhunu, teknolojinin gücünü ve uzun ömürlü çözümleri barındırır.",
  },
  {
    id: 5,
    title: ProjectType.Restorasyon,
    image: "/banners/restorasyon.webp",
    headline: "Geçmişi Korumak, Geleceğe Aktarmak",
    description: "Bir yapı, sadece eski taşlardan ibaret değildir; içinde tarih, kültür ve geleceğe taşınacak değerler saklıdır.",
  },
]

const projects = [
  {
    id: 1,
    slug: "mirador-villa-lofts",
    title: "Mirador Villa & Lofts",
    type: ProjectType.Konut,
    status: ProjectStatus.YeniProje,
    location: "",
    heroImage: "/heroImage/default.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 2,
    slug: "vianor-supreme",
    title: "Vianor Supreme",
    type: ProjectType.Konut,
    status: ProjectStatus.YeniProje,
    location: "",
    heroImage: "/heroImage/default.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 3,
    slug: "5000-evler-okul",
    title: "5000 Evler Okul",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.YeniProje,
    location: "",
    heroImage: "/heroImage/default.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 4,
    slug: "park-flora",
    title: "Park Flora",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/parkflora.webp",
    content: `

# Park Flora

Doğa ile iç içe şehrin gürültüsünden uzak modern yapı elemanları ve eşsiz konumuyla Safranbolu'nıun en iyi konsept projesidir.
## Proje Detayları
- 3+1 Brüt 158,40m2 Net 126,72m2 Konutlar
- Açık ve Kapalı Otopark Alanları
- Bahçe ve Gölet Manzaralı
- Çocuk Oyun Alanları
- Kamelya ve Oturma Alanları
- Giyinme Odası
- Kiler / Çamaşır Odası
- Ebeveyn Banyosu
- Isı Yalıtımlı Kış Bahçesi
    `,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 5,
    slug: "dadibra-villas",
    title: "Dadibra Villas",
    type: ProjectType.Konut,
    status: ProjectStatus.DevamEden,
    location: "",
    heroImage: "/heroImage/dadibravilla.webp",
    content: `# DADİBRA VILLAS

Homeros'un İlyada'sı... Yani insanlığa ait bilinen en eski destanda adı geçen, Paflagonya'da kurulan en önemli 6 şehirden biri... Safranbolu'nun antik çağlarda bilinen ilk ismi, ilk kimliği, Dadibra…

Safranbolu'nun muhteşem doğasında, Emek Mahallesi Meşeliboğaz Mevkii'nde hayallerinizdeki yaşama adım atmanın vakti geldi! Ultra lüks detayları ile tasarlanmış olan DADİBRA VILLAS SAFRANBOLU, en yüksek standartlarda konfor ve güzellik sunuyor.

## Proje Özellikleri
- Akıllı Ev Sistemleri ile mobil erişimle ısı, güvenlik, aydınlatma ve yangın kontrollerini elinizde tutun.
- Yeni yönetmeliğe uygun betonarme karkas yapısı ile sağlam ve güvenli bir yapı.
- Fibercement ve mekanik porselen kaplamalarla modern ve estetik bir dış cephe.
- Taş yünü ısı yalıtımı ile enerji verimliliği ve konforu bir araya getirin.
- Yerden ısıtma ile konforlu bir yaşam, her adımda sıcaklık.
- Özel tasarım iç mekanlar, her detayda estetiği yaşayın.
- Doğal ahşap kaplama ve lake iç kapılar, şıklığı ve doğallığı bir arada sunar.
- Güvenlik kamerası sistemi ile huzur içinde yaşayın.
- Kapalı otoparklar, araçlarınızı güvenli bir şekilde koruyun.
- Her villaya ait 250m² bahçe ve peyzaj alanları, doğanın tadını çıkarın.
- Ankastre WOK ocak, fırın, mikrodalga ve davlumbaz ile mutfakta en iyiyi yaşayın.
- Ada mutfak tasarımı ile şık ve fonksiyonel bir mutfak alanı.
- Kanyon manzaralı teraslar, eşsiz doğa manzarasının keyfini sürün.
- Isı ve güneş kontrol kaplamalı özel camlar, iç mekanın konforunu sağlar.

Yaşamın En İyisi İçin Hazır Mısınız? DADİBRA VILLAS, Safranbolu'nun en özel noktasında size sıra dışı bir yaşam sunuyor. İhtişam, konfor ve doğanın kusursuz uyumu burada sizi bekliyor. Hayalini kurduğunuz yaşamı keşfetmek ve ayrıcalıklı bir adrese sahip olmak için hemen bizimle iletişime geçin.

[Instagram'da Görüntüle](https://www.instagram.com/p/C7eS0ZasfYW/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
      "007.webp",
      "008.webp",
    ],
    description: "",
  },
  {
    id: 6,
    slug: "inovia",
    title: "Inovia Towers",
    type: ProjectType.Konut,
    status: ProjectStatus.DevamEden,
    location: "",
    heroImage: "/heroImage/inovia.webp",
    content: `# INOVIA TOWERS

Inovia Towers, modern yaşamın gereksinimlerini karşılamak üzere tasarlanmış, teknolojinin ve doğanın mükemmel uyumunu sunan benzersiz bir konut projesidir.

Güneş panelleriyle donatılmış yapısı sayesinde yeşil enerjiye tam uyumlu olan Inovia Towers, sürdürülebilir bir yaşam tarzını desteklerken enerji maliyetlerinizi de azaltır.

Her detayı özenle planlanmış olan Inovia Towers’ın cephe tasarımı, modern estetik anlayışını özgün bir dokunuşla birleştirir. Panoramik camlarla çevrelenmiş geniş pencereler, doğal ışığı evinize davet ederken, ısıcam ve üstün yalıtım teknolojisi sayesinde enerji verimliliğini artırır. Bu sayede hem çevre dostu bir yaşam sürerken hem de dört mevsim boyunca ideal sıcaklıkta bir konfor elde edersiniz.

Fore kazık sistemiyle inşa edilen Inovia Towers, en üst düzey güvenlik ve dayanıklılık sunar. Güvenlik kamera sistemiyle 7/24 koruma altında olan yaşam alanlarınızda huzur ve güven içerisinde yaşamın keyfini çıkarabilirsiniz.

Inovia Towers sadece ev değil, aynı zamanda bir yaşam alanıdır. Özenle düzenlenmiş peyzaj alanları, günün yorgunluğunu atabileceksiniz.

Elektrikli araçlar için şarj istasyonları ve geniş otopark alanlarıyla da hem bugünün hem de geleceğin ihtiyaçlarına yanıt verir.

Inovia Towers, akıllı ev teknolojisi, estetik tasarım ve çevreci yaklaşımıyla size ve ailenize konforlu, güvenli ve sürdürülebilir bir yaşamın kapılarını aralıyor.

## Proje Özellikleri
- Geniş ve kullanışlı daire planları
- Şehir manzaralı modern tasarım
- Yüksek kaliteli malzeme ve işçilik
- 5000 Evler’in en prestijli lokasyonu
- Değerlenen bölge, kazandıran yatırım
- ASD Yapı güvencesiyle güvenli bir gelecek`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 7,
    slug: "azure-park",
    title: "Azure Park",
    type: ProjectType.Konut,
    status: ProjectStatus.DevamEden,
    location: "",
    heroImage: "/heroImage/azurepark.webp",
    content: `# AZURE PARK RESIDANCE BAHÇELİEVLER (DEVAM)

DENİZİN MAVİSİYLE BULUŞAN YENİ BİR YAŞAM: AZURE PARK

Zonguldak’ta deniz manzaralı eşsiz bir yaşam sizi bekliyor! Doğayla iç içe, şehirle yan yana bir hayat için hazır mısınız?

Bahçelievler'in en değerli konumu olan Funda Sokak'ta, hayalinizdeki deniz manzarasına uyan Azure Park Residence, sizi yepyeni bir yaşam deneyimine davet ediyor. Terminal, AVM, hastane, kampüs ve okullar bölgesine yürüme mesafesindeki bu özel projedeki daire, konforlu yaşamın anahtarını size sunuyor.

Zonguldak’ın en değerli konumlarından biri - 3 yatak odası, ebeveyn banyosu ve ferah bir yaşam alanı ile aileniz için rahatlık.

## Proje Özellikleri
- Isı yalıtımlı cam balkon ile dört mevsim panoramik deniz manzarası.
- Taş yünü ısı ve ses yalıtım sistemleri ile sakin ve sessiz bir yaşam alanı.
- Rehau PVC kapı ve pencere sistemleri ile kaliteli ve dayanıklılık bir arada.
- Fibercement ve kompozit kaplama mekanik cepheler, modern ve estetik bir dış yüzey.
- Özel tasarım iç mekanlar, her ayrıntıda şıklığı yakalayın.
- Kombi ve yerden ısıtma ile konforlu bir yaşam, her adımda sıcaklık.
- 1. sınıf porselen granit ve vitrifiye takımı ile zarafeti evin her köşesinde yaşayın.
- Akıllı ev sistemi ile ışık ve ısı kontrolünden güvenlik önlemlerine kadar her şey sizin kontrolünüzde.
- Ankastre fırın, davlumbaz, ocak ile mutfağınızı bir şefin mutfağına dönüştürün.
- Güvenlik kamerası sistemi ile huzur içinde yaşamın tadını çıkarın.

**Adres:** Bahçelievler Mah. Funda Sok. Merkez/ZONGULDAK

[Instagram'da Görüntüle](https://www.instagram.com/p/C5-0AV3MCO-/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 8,
    slug: "isiklar",
    title: "Işıklar",
    type: ProjectType.Konut,
    status: ProjectStatus.DevamEden,
    location: "",
    heroImage: "/heroImage/isiklar.webp",
    content: `# ÖZIŞIK A.Ş. (IŞIKLAR) TUNA KONUTLARI (DEVAM)

ASD Yapı olarak, Işıklar Enerji Yapı Holding’in iştiraki Özışık İnşaat Yatırım’ın Bartın Tuna Mahallesi’nde hayata geçirdiği büyük ölçekli konut projesinin çalışmalarına tüm hızımızla devam ediyoruz!

Bu prestijli proje, modern yaşam alanları ve kaliteli yaşam standartlarını sizlerle buluşturacak. Sürecin her adımını titizlikle takip ediyor, güçlü yapılarla geleceğinizi inşa ediyoruz.

Işıklar Enerji Yapı Holding'in iştiraki olan Özışık İnşaat Yatırım, Bartın'ın Tuna Mahallesi'nde hayata geçireceği büyük ölçekli konut projesinin ilk aşamasının çalışmalarına başlandı. Bu proje kapsamında planlanan toplam 200 daireden oluşan konut kompleksinin ilk etabında 36 dairenin inşaat faaliyetlerini ASD İnşaat ve Yapı Grubu tarafından yürütülmesi kararlaştırılırken projenin çalışmalarına başlanmıştır.

[Instagram'da Görüntüle 1](https://www.instagram.com/p/C-kUMtGs1hf/)  
[Instagram'da Görüntüle 2](https://www.instagram.com/p/C7jvF1MM6Kj/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 9,
    slug: "camkent",
    title: "Çamkent",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.DevamEden,
    location: "",
    heroImage: "/heroImage/camkent.webp",
    content: `# OSMAN YEŞİLYURT ORTAOKULU
[Instagram'da Görüntüle 2](https://www.instagram.com/p/C4dSz6csjOs/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 10,
    slug: "belen",
    title: "Belen",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/belen.webp",
    content: `# 16 DERSLİKLİ BELEN İLK VE ORTAOKULU (Biten)

**Kategori:** Taahhüt okul inşaatı

16 derslikten oluşan ve 2950 m² yerleşkesiyle eğitim geleceğini inşa etmeye devam ediyoruz.

Kaba inşaatı tamamladığımız bu projede:
- Çok amaçlı salon
- Basketbol sahası
- Geri dönüşüm ve doğa dostu bir yaklaşım ile yağmur suyunu depolayarak lavabo ve bahçe sulamalarında kullanacağız.

Ayrıca, güvenli ve sağlam temeller için 5500 m² arsa alanında fore kazık uygulaması gerçekleştirdik.

ASD Yapı olarak, sadece yapılar değil, sürdürülebilir yarınlar inşa ediyoruz.

[Instagram'da Görüntüle 1](https://www.instagram.com/p/DA8erSCMGcD/)  
[Instagram'da Görüntüle 2](https://www.instagram.com/p/C4dSz6csjOs/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 11,
    slug: "melike-yesilyurt-kres",
    title: "Melike Yeşilyurt Kreş",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/melikeyesilyurt.webp",
    content: `# MELİKE YEŞİLYURT KREŞ PROJESİ

Melike Yeşilyurt Kreş projemize başladık!

Hayırsever iş insanı Sayın Osman Yeşilyurt’un yapımını üstlendiği Melike Yeşilyurt Kreşi, geleceğin eğitim yuvası için sağlam temeller atıyor. Bu önemli adım, çocuklarımıza güvenli ve modern bir eğitim ortamı sağlamak için atılan ilk adım olarak kaydediliyor.

Geleceğin liderlerini yetiştirecek bu okul, eğitimde kalitenin temellerini sağlam atarak, uzun yıllar boyunca hizmet verecek.

**Konum:** Karabük - 200 Evler`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 12,
    slug: "yesilyurt-ss",
    title: "Yeşilyurt S.S.",
    type: ProjectType.EndüstriyelYapi,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/yesilyurtsanayi.webp",
    content: `# YEŞİLYURT SANAYİ SİTESİ

ASD Yapı olarak, Yeşilyurt Sanayi Sitesi projemizi başarıyla tamamladık.

Safranbolu Barış Mahallesi’nde konumlanan proje; 13.000 m² alan üzerine inşa edilen, 3 blok ve 42 bağımsız bölüm ve 24.600 m² inşaat alanından oluşan yeni bir sanayi merkezi.

İşlevsellik ön planda tutulan bu proje, bölgenin üretim ve ticaret potansiyeline katkı sağlayacak şekilde tasarlandı.

Emeği geçen tüm ekibimize teşekkür ederiz.

Yeşilyurt Sanayi Sitesi, artık faaliyete hazır.

**Konum:** Safranbolu Barış Mahallesi

[Instagram'da Görüntüle 1](https://www.instagram.com/p/DI58AQxs0Gi/)  
[Instagram'da Görüntüle 2](https://www.instagram.com/p/C9Ph9DWMhN6/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 13,
    slug: "regnum-hill",
    title: "Regnum Hill",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/regnumhill.webp",
    content: `# REGNUM HİLL FİLYOS

Sakin ve huzurlu bir yaşamın kapılarını aralayan bu benzersiz daire, deniz manzarasıyla bütünleşen modern tasarımıyla sizleri bekliyor. İster yazlık bir tatil yeri, ister kalıcı bir ikametgah arayışında olun, bu dairede aradığınız tüm özellikleri bulabileceksiniz.

## Özellikler
- Geniş pencerelerden gelen doğal ışıkla aydınlatılan ferah ve modern bir yaşam alanı
- Yerden ısıtmalı zeminler, soğuk kış günlerinde bile konforlu bir atmosfer sunar
- Tam donanımlı açık plan mutfak, modern tasarımı ve kaliteli beyaz eşyalarıyla mutfağınızı bir şefin mutfağına dönüştürür
- Geniş balkon, deniz manzarasının tadını çıkarmanız için mükemmel bir mekan
- Lüks ve şık banyo olanakları, günün yorgunluğunu üzerinizden atmanızı sağlar
- Eşsiz yatırım fırsatıyla ASD Yapı & Gayrimenkul güvencesiyle sizlerle

Dairemiz, sahilin hemen yakınında, plajlara, restoranlara ve alışveriş olanaklarına kolay erişim sunan ayrıcalıklı bir konumda yer almaktadır. Hem denizin hem de doğanın tadını çıkarabileceğiniz bu konum, hem tatilciler hem de sakin bir yaşam arayışındakiler için idealdir.

[Instagram'da Görüntüle](https://www.instagram.com/p/C71BaclMnYI/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 14,
    slug: "asd-office",
    title: "ASD Office",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.DevamEden,
    location: "",
    heroImage: "/heroImage/asdoffice.webp",
    content: `# ASD OFFİCE CENTER

Modern ofislerden oluşan bu iş merkezi, hem prestijli bir çalışma ortamı hem de çok yönlü kullanım imkânları sunuyor.

Karabük'ün iş dünyasının kalbinde, İstasyon Caddesi üzerinde yer alan bu işyeri, prestijli bir adrese sahip olmanız için mükemmel bir fırsat sunuyor. Toplam 120 m²'lik kullanım alanına sahip olan işyerimiz, 60 m²'lik giriş katı ve 60 m²'lik bodrum katı ile geniş bir çalışma alanına olanak tanımaktadır.

Yeni ve modern bir binada yer alan işyerimiz, işinizi en iyi şekilde temsil etmeniz için ideal bir konumda bulunmaktadır. İş dünyasının merkezinde yer alarak müşteri trafiğinden en iyi şekilde faydalanacak, prestijli bir iş adresine sahip olacaksınız.

Estetik ve işlevselliği yalnızca iç mekânda değil, dış cephede de ön planda tutuyoruz.  
ASD Office olarak, projelerimizde güçlü bir ilk izlenim için modern ve dikkat çekici cephe tasarımlarına imza atıyoruz.

## Özellikler
- İstasyon Caddesi Üzerinde
- Yeni ve Modern Bina
- Geniş ve Konforlu Çalışma Alanı
- Merkezi Konum
- Prestijli İş Adresi

[Instagram'da Görüntüle](https://www.instagram.com/p/DC4A03osSy9/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 15,
    slug: "ermersa-dukkanlari",
    title: "Ermersa Dükkanları",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/ermersa.webp",
    content: `# ERMERSA DÜKKANLARI

- Isı yalıtımlı alüminyum doğrama
- Açılır kapanır kepenk sistemleri
- Alüminyum kompozit kaplama
- Mantolama sıva mineral
- 2500 m²`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 16,
    slug: "uzuner",
    title: "Uzuner",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/uzuner.webp",
    content: `# UZUNER GIDA A.Ş

ASD Yapı olarak, Uzuner Gıda için gerçekleştirdiğimiz projede, modern ve estetik çözümler sunmaktan büyük memnuniyet duyuyoruz. 3D alüminyum kompozit kaplama, ısı yalıtımlı alüminyum doğramalar, skylight çatı cam sistemleri, mekanik seramik kaplama, giydirme cepheler, alüminyum kompozit iç mekan kaplamaları, cam korkuluklar ve spider sistem cam asansör kaplama uygulamalarıyla binayı hem estetik hem de fonksiyonel bir yapıya kavuşturduk.

Bu projede birlikte çalışmaktan onur duyduğumuz Uzuner Gıda’ya ve Mimar Mert Coşkun’a teşekkür ederiz.

## Proje Uygulamaları
- Skylight Cam Çatı
- Kapaklı Giydirme Cephe
- Alüminyum Kompozit Kaplama
- Th78 Isı Yalıtımlı Alüminyum Doğrama
- Mekanik Seramik Kaplama

[Instagram'da Görüntüle](https://www.instagram.com/p/DBOoeAHsEiQ/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 17,
    slug: "mescier",
    title: "Mescier",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/mescier.webp",
    content: `# MESCİER

- Alüminyum kompozit
- Doğrama imalatı
- Açılır kanat giydirme
- Yönetim binası giriş sundurma`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
    ],
    description: "",
  },
  {
    id: 18,
    slug: "han-arkasi",
    title: "Han Arkası",
    type: ProjectType.Restorasyon,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/hanarkasi.webp",
    content: `# SAFRANBOLU HAN ARKASI RESTORASYON

Unesco Dünya Mirası Safranbolu’da, Tarihi Çarşı Han Arkası Sokakta bulunan yapıların cephe restorasyonu ve Han Arkası Sokak Meydan düzenleme çalışması.`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 19,
    slug: "cankaya-parki",
    title: "Çankaya Parkı",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/cankayaparki.webp",
    content: `# ÇANKAYA PARKI SAFRANBOLU (Anahtar Teslim Konsept Park)

[Instagram'da Görüntüle 1](https://www.instagram.com/p/Cp7H3LPjfMa/)  
[Instagram'da Görüntüle 2](https://www.instagram.com/p/CvAQo5ltY6m/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 20,
    slug: "safranbolu-meydan",
    title: "Safranbolu Meydan",
    type: ProjectType.Restorasyon,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/safranbolumeydan.webp",
    content: `# SAFRANBOLU MEYDAN YENİLEME PROJESİ

[Instagram'da Görüntüle](https://www.instagram.com/p/CnWWuuzp6Wl/)

**Safranbolu Kaya Erdem Caddesi Restorasyon Uygulamaları:**
- Binaların yüzeylerinin temizlenip sıva ve mineral sıva uygulamaları sonucunda boyanması
- Tüm olukların ve PVC inişlerinin yenileriyle değiştirilmesi
- Ahşap desenli fibercement ile tabelalık alanlarının yapılması
- Tüm dükkan doğramalarının ahşap desenli ısı yalıtımlı alüminyum doğrama ve kapılarla değiştirilmesi
- Zemin aydınlatmalı krom kutu harflerle dükkanların isim ve logolarının uygulanması
- Dükkan kolon, kiriş ve duvarlarının mekanik taş görünümlü seramik ile kaplanması
- Boardex uygulamaları ile cephelerdeki elektrik ve telekom kablolarının gizlenmesi
- CNC kompozit uygulamalarıyla klimaların gizlenmesi
- PVC pencere kasa ve kanatlarının ahşap rengine boyanması
- Halihazırda bulunan ahşap söve ve kat silmelerinin zımparalanıp boyanması`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 21,
    slug: "kent-meydani",
    title: "Kent Meydanı",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/kentmeydani.webp",
    content: `# KARABÜK KENT MEYDANI

Karabük Kent Meydanı'nın yenilenme çalışmalarına katılıyoruz! ASD Cephe Sistemleri ve Alüminyum olarak, modernizasyon sürecinde yer alacağız.

## Proje Detayları:
- Kompozit Kaplama Uygulaması
- Giydirme Cephe Sistemleri
- Isı Yalıtımlı Alüminyum Kapı ve Pencere Sistemleri
- Camlı Alüminyum Korkuluk Sistemleri
- Fotoselli Kayar Kapı Sistemleri`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 22,
    slug: "sanat-merkezi",
    title: "Sanat Merkezi",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/default.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 23,
    slug: "asansorler",
    title: "Asansörler",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/asansorler.webp",
    content: `# KARABÜK BLD. ASANSÖRLER

Karabük Belediyesi Namık Kemal Mah. Asansör Kulesi giydirme cephe, alüminyum kompozit kaplama, galvaniz sac kaplama uygulamaları tamamlanmıştır.`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
    ],
    description: "",
  },
  {
    id: 24,
    slug: "ahmetler-ilkokulu",
    title: "Ahmetler İlkokulu",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/ahmetlerilkokulu.webp",
    content: "",
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
    ],
    description: "",
  },
  {
    id: 25,
    slug: "bilginler-4-blok",
    title: "Bilginler 4 Blok",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/bilginler.webp",
    content: `# BİLGİNLER KONUT

Bilginler Yapı ve Beton Grubu ile çözüm ortağı olarak çalıştığımız 4 bloklu projelerinde cephe, alüminyum ve yalıtım çalışmalarımız tüm hızıyla devam ediyor.

## Proje Uygulamaları
- Alüminyum Kompozit Kaplama
- Taşyünü Isı Yalıtımı
- Tyvek Su Yalıtımı
- Alüminyum Korkuluk Sistemleri
- C60 Alüminyum Vitrin Doğramaları
- Ahşap Desenli Fibercement Kaplama`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 26,
    slug: "kanyon-dugoon-salonu-restaurant",
    title: "Kanyon(düğün,salonu,restaurant)",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/default.webp",
    content: `# Karabük Belediyesi Kanyon Rekrasyon Projesi Restaurant Binası

Karabük Belediyesi Kanyon Rekrasyon Projesi Ahşap Desenli Fibercement Kaplama, Alüminyum Kapaklı Giydirme Cephe Uygulaması, Alüminyum Kompozit Kaplama, Isı Yalıtımlı Alüminyum Doğrama Uygulamaları tamamlanmıştır.

## Proje Uygulamaları
- Alüminyum Kompozit Kaplama
- Alüminyum Kapı ve Pencereler
- Ahşap Desenli Fibercement Kaplama
- Isı Yalıtımı ve Dekorasyon`,
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 27,
    slug: "manisa-saruhani-genclik",
    title: "Manisa Saruhanlı Gençlik",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/manisagenclik.webp",
    content: "",
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 28,
    slug: "gebze-askin-demir-celik",
    title: "Gebze Aşkın Demir Çelik",
    type: ProjectType.EndüstriyelYapi,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/gebzedemircelik.webp",
    content: `# GEBZE AŞKIN DEMİR ÇELİK

- Isı yalıtımı
- Alüminyum kompozit
- Yarı kapaklı alüminyum giydirme cephe
- Cam (füme reflekte temper)
- Alüminyum ısı yalıtımlı doğrama
- Sinerji cam`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 29,
    slug: "topcugiller-opet",
    title: "Topçugiller Opet",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/topcugilleropet.webp",
    content: `# HKD PETROL OPET

- Strüktürel Silikon Giydirme Cephe
- Asimetrik Kompozit Kaplama
- Th55 / C60 Alüminyum Doğrama
- P200 Kanopi Asma Tavan
- Baffle ve Mesh Asma Tavan
- Trapez Sac Çatı Kaplamaları`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 30,
    slug: "massey-fergusan-beypazari",
    title: "Massey Fergusan Beypazarı",
    type: ProjectType.EndüstriyelYapi,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/massey.webp",
    content: `# AKGÜNLER BEYPAZARI Massey-Ferguson

Akgünler Otomotiv Beypazarı Massey-Ferguson Satış ve Servis Binası

## Proje Uygulamaları:
- Alüminyum Kasetli Silikon Giydirme Cephe
- Alüminyum Kompozit Kaplama
- Alüminyum Modüler Ofis Bölme Sistemleri
- Çelik kiriş yapımı
- Taş yünü ısı yalıtımı
- Fotoselli kayar kapılar
- Alüminyum ısı yalıtımlı doğrama
- Güneş kırıcı uygulamaları`,
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 31,
    slug: "yildiz-life-2",
    title: "Yıldız Life",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/yildizlife.webp",
    content: `# YILDIZ RESIDENCE

- Alüminyum Kompozit
- Taş yünlü ısı yalıtımı
- Temperli cam korkuluk sistemi
- Alüminyum ısı yalıtımlı kapı ve pencere doğramalar`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 32,
    slug: "yildiz-premium",
    title: "Yıldız Premium",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/yildizlifepremium.webp",
    content: `# YILDIZ LIFE PREMIUM

Dış cephede estetik ve yüksek performans sunan alüminyum kompozit kaplama ile başlayan tasarım diziliminde, dayanıklı ve şık C60 sınıfı alüminyum doğramalar kullanıyoruz. Camlı kare formda tasarlanmış alüminyum korkuluk sistemleri, ferah bir görünüm ve güvenlik sunarken; EPS ısı yalıtımı ile iç mekânların enerji verimliliğini ve konforunu en üst düzeye çıkarıyoruz. Ayrıca, alüminyum kutu profil güneş kırıcılar sayesinde hem güneş ışınlarının kontrolünü hem de yapı cephesine modern bir dinamizm kazandırıyoruz.

## Proje Uygulamaları
- Kompozit Kaplama
- Alüminyum C60 Vitrin Doğramaları
- Korkuluk Uygulamaları
- Isı Yalıtımı Uygulamaları
- Alüminyum Kutu Profil Güneş Kırıcılar

[Instagram'da Görüntüle](https://www.instagram.com/p/CmQez0XoQ8X)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 33,
    slug: "azipirano",
    title: "Azipirano",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/azipirano.webp",
    content: `# AZİPİRANO

- Kenet Sac Çatı ve Cephe Kaplamaları
- Taşyünü Isı Yalıtımı ve Tyvek Su Yalıtımı

[Instagram'da Görüntüle](https://www.instagram.com/p/CwIYovDsvAO/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 34,
    slug: "park-diamond-2",
    title: "Park Diamond",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/parkdiamond.webp",
    content: `# PARK DIAMOND

Karabük, 5000 Evler, Cumhuriyet Mahallesi'nde, çağdaş yaşamın en yüksek standartlarıyla buluştuğu bir proje sizi bekliyor. Park Diamond, lüksün ve modernliğin eşsiz bir birlikteliğini sunan 2 blok, 36 daire ve 7 dükkandan oluşan prestijli bir yaşam alanıdır.

Merkezi konumda, geniş cam cepheli, toplam 100 m²'lik kullanım alanına sahip bu sıfır dükkan, işletmeler için ideal bir fırsat sunuyor. Yeni ve modern bir binada yer alan dükkan, şıklığı ve fonksiyonelliği bir araya getiriyor. Dükkanımız kurumsal firmalar, küçük marketler ve çeşitli mağaza konseptleri için uygundur. Merkezi konumuyla müşteri trafiği yüksek olan bu bölgede işletmeniz için önemli bir görünürlük elde edeceksiniz.

## Özellikler
- Toplam Alan: 100 m²
- Zemin Kat
- Yeni ve Modern Bina
- Geniş Cam Cephe
- Merkezi Konumda
- Kurumsal Kullanıma Uygun
- Market ve Mağaza İçin İdeal
- Yeni ve Modern Bina
- Geniş Cam Cepheli

[Instagram'da Görüntüle 1](https://www.instagram.com/p/C-fW6u0JALS/)  
[Instagram'da Görüntüle 2](https://www.instagram.com/p/C22VxydMiQL/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 35,
    slug: "verona-garden-2",
    title: "Verona Garden",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/veronagarden.webp",
    content: `# VERONA GARDEN

Modern ve ayrıcalıklı bir yaşamın alanı Verona Garden.

Açık ve kapalı otopark, çocuk oyun alanları, rahatlatıcı açık oturma alanları gibi birçok özelliği bünyesinde barındıran Verona Garden projemizde sona geldik.

[Instagram'da Görüntüle 1](https://www.instagram.com/p/C1rHSQUs_M4/)  
[Instagram'da Görüntüle 2](https://www.instagram.com/p/CrfxE8iswua/)`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 36,
    slug: "yasli-bakim-merkezi-karabuk",
    title: "Yaşlı Bakım Merkezi KARABÜK",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/yaslibakimmerkezi.webp",
    content: "",
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 37,
    slug: "senkron-2",
    title: "Senkron",
    type: ProjectType.EndüstriyelYapi,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/senkron.webp",
    content: `# SENKRON

- Alüminyum yarı kapaklı giydirme cephe sistemi (Cool Plus cam sistemi)
- Alüminyum ısı yalıtımlı doğramalar
- Alüminyum ısı yalıtımlı sürme kapı
- Fotosel kayar kapı
- Alüminyum kompozit
- Spider tutuculu cam sundurma
- Taş yünlü ısı yalıtımı
- Çelik uygulamaları`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 38,
    slug: "eskipazar-green-aluminyum",
    title: "Eskipazar Green Alüminyum",
    type: ProjectType.EndüstriyelYapi,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/eskipazargreenalu.webp",
    content: `# GREENAL

Bu projede;
- Isı yalıtımlı alüminyum doğrama sistemleri
- Estetik ve dayanıklı kompozit panel kaplamalar
- Doğal görünümlü, uzun ömürlü fiber cement uygulamaları
- Cephede tamamlayıcı etki yaratan baza kaplamaları özenle uygulanıyor

Greenal Alüminyum | [Eskipazar OSB]

## Diğer Özellikler
- Kayar kapı fotosel uygulaması
- Modüler ofis bölme sistemi
- Cephe kutu profil uygulaması
- Teras bazalı cam korkuluk sistemi
- Fibercement uygulaması`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 39,
    slug: "hadrianapolice",
    title: "Hadrianapolice",
    type: ProjectType.Restorasyon,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/hadrianapolice.webp",
    content: `
# Hadrianapolis Antik Kenti Geç Roma Konutu Koruyucu Örtü Projesi

Hadrianapolis Antik Kenti’nin önemli yapılarından biri olan Geç Roma Konutu, Doğu Roma dönemine tarihlenen özgün kalıntılarıyla kent tarihine ışık tutuyor. Zaman içinde havasal koşulların ve bitki örtüsünün yarattığı yıpranmayı en aza indirmek amacıyla, kalıntıların etrafına modern çizgilerle tasarlanmış bir örtü cephe yerleştirildi.

## Proje Özellikleri
- İnce profilli alüminyum iskelet ve UV filtreli şeffaf paneller ile mimari bütünlüğün korunması
- Zemine temas etmeyen asma platform sistemi sayesinde engelsiz ziyaret ve kalıntılara müdahalesiz koruma
- Modüler tasarım sayesinde ileride yapılacak restorasyon ve yeni koruma çalışmalarına uyum

Bu müdahale, Hadrianapolis’in bir açık hava müzesi olarak ziyaretçi deneyimini güçlendirirken, antik mirasın gelecek kuşaklara eksiksiz aktarılmasını sağlıyor.

[Instagram'da Görüntüle](https://www.instagram.com/p/CoKAVsuIQfY/)

**Konum:** Hacı Ahmetler, 78402 Budaklar/Eskipazar/Karabük Hadrianapolis Antik Kenti
    `,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 40,
    slug: "tso",
    title: "TSO",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/tso.webp",
    content: `# KARABÜK TSO

Karabük Ticaret ve Sanayi Odası Yeni Hizmet Binası

Karabük TSO binasının cephesinde kapaklı alüminyum giydirme ve kompozit paneller, mekanik seramik kaplamayla birleşerek hem dayanıklı hem şık bir dış kabuk oluşturuyor. Ara kısımlarda yer alan sıcak tonlu seramik detaylar, binaya samimi ve davetkâr bir ifade katıyor. TH55 sınıfı ısı yalıtımlı alüminyum doğramalar enerji tasarrufu sağlarken, C60 profilli vitrini ferah bir karşılama sunuyor. Alüminyum kutu profilden imal edilen güneş kırıcılar, yazın güneşin zararlı UV ışınlarını kontrol ederken cepheye modern bir hareket kazandırıyor. Tüm cephede uygulanan ısı yalıtımı ve dekorasyon çözümleri, iç mekan konforunu artırıp bakım maliyetlerini düşürerek Karabük TSO’ya hem estetik hem de sürdürülebilir bir kimlik sunuyor.

## Proje Uygulamaları:
- Kapaklı Alüminyum Giydirme Cephe
- Alüminyum Kompozit Kaplama
- Mekanik Seramik Kaplama
- Th55 Isı Yalıtımlı Alüminyum Doğrama
- C60 Vitrin Doğramaları
- Alüminyum Güneş Kırıcı Kutu Profil
- Isı Yalıtımı ve Dekorasyon Uygulamaları`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 41,
    slug: "il-saglik-merkezi",
    title: "İl Sağlık Merkezi",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/ilsaglikmerkezi.webp",
    content: `# İL SAĞLIK MERKEZİ

- Giydirme cephe
- Açılır kanat sistemli doğrama
- Alüminyum kompozit
- Taş yünü ısı yalıtımı`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 42,
    slug: "hayrettin-aydin",
    title: "Hayrettin Aydın",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/hayrettinaydin.webp",
    content: `# HAYRETTİN AYDIN OFFICE

Ofis cephesi tasarımımızda; modern çizgilerle estetik vurguyu öne çıkaran silikon giydirme sistemimiz, yapıya hem zarif bir yüzey hem de su sızıntılarına karşı yüksek dayanıklılık sağlıyor. Ana cephe panellerinde kullanılan alüminyum kompozit malzeme, hafiflik ve mukavemeti bir araya getirerek uzun ömürlü ve bakımı kolay bir dış kabuk sunuyor. Pencere ve kapılarda tercih edilen ısı yalıtımlı alüminyum doğramalar, enerji verimliliğini maksimize ederken iç mekân konforunu ve ses izolasyonunu da güvence altına alıyor. Tüm bu sistemlerin temelini oluşturan EPS ısı yalıtımı ise yapının ısı köprülerini en aza indirerek yıl boyunca konforlu bir çalışma ortamı yaratıyor. Bu bileşim, ofis binasına hem çağdaş bir mimari kimlik kazandırıyor hem de sürdürülebilir performans hedeflerine tam uyum sağlıyor.

## Proje Uygulamaları
- Silikon Giydirme Cephe
- Alüminyum Kompozit Kaplama
- Isı Yalıtımlı Alüminyum Doğrama
- EPS Isı Yalıtımı`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
    ],
    description: "",
  },
  {
    id: 43,
    slug: "akbank-2",
    title: "Akbank",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/akbank.webp",
    content: "",
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
    ],
    description: "",
  },
  {
    id: 44,
    slug: "kargisan-konaklari",
    title: "Kargisan Konakları",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/kargisan.webp",
    content: `# KARGİSAN

Kargisan Villarında, anahtar teslim inşaat faaliyetleri tamamlanmış olup, yaşam başlamıştır.`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
  {
    id: 45,
    slug: "kgm-binasi",
    title: "KGM Binası",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/default.webp",
    content: `# KGM 53. BAKIM ŞEFLİĞİ

- Fibercement Kaplama
- Klinker Taş Kaplama
- Alüminyum Giydirme Cephe
- Taş Yünü Isı Yalıtımı`,
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 46,
    slug: "anadolu-petrol-opet",
    title: "Anadolu Petrol Opet",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/default.webp",
    content: `# ANADOLU PETROL OPET

Anadolu Otomotiv OPET Akaryakıt İstasyonu Yönetim ve Market Binası’nda asimetrik silikon giydirme cephe uygulamamız, binaya çağdaş ve dinamik bir siluet kazandırdı. Kompozit kaplama panellerle cephede elde edilen pürüzsüz yüzeyler, hem hafiflik hem de yüksek mukavemet sunarken, alüminyum doğrama detayları pencereler ve kapılarda zarif bir bütünlük sağladı. İç mekân konforunu maksimuma çıkaran ısı yalıtımı uygulamaları sayesinde enerji verimliliği artarken, dış cephenin performansı ve estetiği uzun yıllar boyunca korunacak şekilde tasarlandı. Tüm bu çözümler, projenin hem mimari karakterini vurguluyor hem de kullanım ve bakım kolaylığı sunuyor.

## Proje Uygulamaları
- Alüminyum Silikon Giydirme Cephe
- Alüminyum Kompozit Kaplama
- Panel 200 Kanopi Uygulaması
- Baffle ve Lay-In Asma Tavan Uygulamaları
- Fotosel ve Kayar Kapılar
- Alüminyum Doğrama Uygulamaları
- Isı Yalıtım Uygulamaları`,
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 47,
    slug: "112-acil",
    title: "112 Acil",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/112acil.webp",
    content: `# 112 ACİL

- Alüminyum kompozit
- Giydirme cephe
- Alüminyum doğrama
- Taş yünü ısı yalıtımı`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",

    ],
    description: "",
  },
  {
    id: 48,
    slug: "zalifre",
    title: "Zalifre Otel",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/zalifre.webp",
    content: `# ZALİFRE OTEL

ASD Cephe Sistemleri olarak Safranbolu Zalifre Oteli'nin cephesi için işbaşı yaptık!

Projemizde, yapı cephesine uygulanan stil sahibi silikon giydirme sistemimizle modern ve şık bir duruş sağlıyoruz. Taşyünü ısı yalıtımıyla konforunuz en üst düzeye çıkarılırken; dış cephede Boardex ve kompozit kaplamalar, uzun ömürlü dayanıklılık ile estetiği bir arada sunuyor. Kenet çelik çatı uygulamamız, yapıyı hem suya hem de dış etkenlere karşı koruyan zarif bir koruma katmanı oluşturuyor. İç mekânda ise ısı yalıtımlı alüminyum pencere ve kapılarımız, enerji verimliliği ve konforu güvence altına alıyor; camlı korkuluk sistemlerimizle güvenliği en ince ayrıntısına kadar şıklıkla buluşturuyoruz.

## Proje Detayları
- Silikon giydirme cephe ile modern ve şık bir görünüm!
- Taşyünü ısı yalıtımıyla konforunuzu üst seviyeye taşıyoruz.
- Boardex kaplama ve kompozit kaplama ile dayanıklılığı ve estetiği bir arada sunuyoruz.
- Kenet çelik çatı uygulaması ile gökyüzüne yakışan bir koruma katmanı.
- Isı yalıtımlı alüminyum pencereler ve kapılar ile iç mekan konforunuz bizimle güvende.
- Camlı korkuluk sistemleriyle güvenliği şıklıkla birleştiriyoruz.`,
    imageList: [
      "001.webp",
      "002.webp",
      "003.webp",
      "004.webp",
      "005.webp",
      "006.webp",
    ],
    description: "",
  },
]

export { ProjectType, ProjectStatus, projects, ProjectBanners };
