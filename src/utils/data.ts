enum ProjectType {
  Konut = "Konut",
  Ustyapı = "Üstyapı",
  EndüstriyelYapi = "Endüstriyel Yapı",
  Ofis = "Ofis",
  CepheAluminyum = "Cephe & Alüminyum",
  Restorasyon = "Restorasyon",
}
enum ProjectStatus {
  Tamamlanan = "Tamamlanan",
  DevamEden = "Devam Eden",
  Satista = "Satışta",
  YeniProje = "Yeni Proje",
}

const projects = [
  {
    id: 1,
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
    title: "ASD Office",
    type: ProjectType.Ofis,
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
    title: "Yıldız Preminium",
    type: ProjectType.CepheAluminyum,
    status: ProjectStatus.Tamamlanan,
    location: "",
    heroImage: "/heroImage/yildizpremium.webp",
    content: "",
    imageList: [
      ""
    ],
    description: "",
  },
  {
    id: 33,
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

export { ProjectType, ProjectStatus, projects };
