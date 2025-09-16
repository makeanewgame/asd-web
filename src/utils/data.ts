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
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 5,
    slug: "dadibra-villas",
    title: "Dadibra Villas",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/dadibravilla.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 6,
    slug: "inovia",
    title: "Inovia",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/inovia.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 7,
    slug: "azure-park",
    title: "Azure Park",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/azurepark.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 8,
    slug: "isiklar",
    title: "Işıklar",
    type: ProjectType.Konut,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/isiklar.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 9,
    slug: "camkent",
    title: "Çamkent",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/camkent.webp",
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 14,
    slug: "asd-office",
    title: "ASD Office",
    type: ProjectType.Ustyapı,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/asdoffice.webp",
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
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
      ""
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
    content: "",
    imageList: [
      ""
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
    heroImage: "/heroImage/default.webp",
    content: "",
    imageList: [
      ""
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
    content: "",
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
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 32,
    slug: "yildiz-preminium",
    title: "Yıldız Preminium",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/yildizlifepremium.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 33,
    slug: "azupirano",
    title: "Azupirano",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/azupirano.webp",
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
    imageList: [
      ""
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
    heroImage: "/heroImage/default.webp",
    content: "",
    imageList: [
      ""
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
      ""
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
    content: "",
    imageList: [
      ""
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
    content: "",
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
    content: "",
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
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
]

export { ProjectType, ProjectStatus, projects, ProjectBanners };
