export interface Student {
  id: string;
  ad: string;
  hedefPuan: number;
  sinavTarihi: string;
  paket: 'Basic' | 'Plus' | 'Pro';
  sinif: string;
  hedefOkul: string;
  streak: number;
}

export interface Deneme {
  id: string;
  tarih: string;
  ders: string;
  dogru: number;
  yanlis: number;
  bos: number;
  sure: number;
  net: number;
  puan: number;
}

export interface PlanGorevi {
  id: string;
  gun: string;
  konu: string;
  ders: string;
  sure: number;
  durum: 'Bekliyor' | 'Devam Ediyor' | 'Tamamlandı' | 'Ertelendi';
  oncelik: 'Düşük' | 'Orta' | 'Yüksek';
}

export interface Konu {
  id: string;
  ders: string;
  konu: string;
  zorluk: 'Kolay' | 'Orta' | 'Zor';
  tamamlanmaDurumu: number;
  eksikMi: boolean;
}

export interface Quiz {
  id: string;
  konuId: string;
  soru: string;
  secenekler: string[];
  dogruIndex: number;
}

export interface KonuOzet {
  id: string;
  konuId: string;
  baslik: string;
  maddeler: string[];
}

export interface Kaynak {
  id: string;
  baslik: string;
  tur: 'Video' | 'Kitap' | 'Link';
  url: string;
  konu: string;
  sure?: string;
  favori: boolean;
  tamamlandi: boolean;
}

export interface KocGorusmesi {
  id: string;
  tarih: string;
  saat: string;
  kocAdi: string;
  durum: 'Bekliyor' | 'Tamamlandı' | 'İptal';
  notlar?: string;
  aksiyonlar?: string[];
}

export const mockStudent: Student = {
  id: '1',
  ad: 'Ahmet Yılmaz',
  hedefPuan: 480,
  sinavTarihi: '2025-06-15',
  paket: 'Plus',
  sinif: '12',
  hedefOkul: 'Boğaziçi Üniversitesi - Bilgisayar Mühendisliği',
  streak: 7
};

export const mockDenemeler: Deneme[] = [
  {
    id: '1',
    tarih: '2025-10-05',
    ders: 'Matematik',
    dogru: 32,
    yanlis: 6,
    bos: 2,
    sure: 75,
    net: 30,
    puan: 85
  },
  {
    id: '2',
    tarih: '2025-10-03',
    ders: 'Fizik',
    dogru: 28,
    yanlis: 8,
    bos: 4,
    sure: 60,
    net: 25.3,
    puan: 78
  },
  {
    id: '3',
    tarih: '2025-10-01',
    ders: 'Kimya',
    dogru: 25,
    yanlis: 10,
    bos: 5,
    sure: 65,
    net: 21.7,
    puan: 72
  },
  {
    id: '4',
    tarih: '2025-09-28',
    ders: 'Biyoloji',
    dogru: 30,
    yanlis: 5,
    bos: 5,
    sure: 55,
    net: 28.3,
    puan: 82
  }
];

export const mockPlanGorevleri: PlanGorevi[] = [
  {
    id: '1',
    gun: 'Pazartesi',
    konu: 'Türev - Uygulama Soruları',
    ders: 'Matematik',
    sure: 120,
    durum: 'Tamamlandı',
    oncelik: 'Yüksek'
  },
  {
    id: '2',
    gun: 'Salı',
    konu: 'Elektrik ve Manyetizma',
    ders: 'Fizik',
    sure: 90,
    durum: 'Tamamlandı',
    oncelik: 'Orta'
  },
  {
    id: '3',
    gun: 'Çarşamba',
    konu: 'Kimyasal Tepkimeler',
    ders: 'Kimya',
    sure: 120,
    durum: 'Devam Ediyor',
    oncelik: 'Yüksek'
  },
  {
    id: '4',
    gun: 'Perşembe',
    konu: 'Hücre Bölünmesi',
    ders: 'Biyoloji',
    sure: 60,
    durum: 'Bekliyor',
    oncelik: 'Orta'
  },
  {
    id: '5',
    gun: 'Cuma',
    konu: 'İntegral - Temel Kavramlar',
    ders: 'Matematik',
    sure: 120,
    durum: 'Bekliyor',
    oncelik: 'Yüksek'
  },
  {
    id: '6',
    gun: 'Cumartesi',
    konu: 'Optik - Işık',
    ders: 'Fizik',
    sure: 90,
    durum: 'Bekliyor',
    oncelik: 'Düşük'
  },
  {
    id: '7',
    gun: 'Pazar',
    konu: 'Organik Kimya Giriş',
    ders: 'Kimya',
    sure: 120,
    durum: 'Bekliyor',
    oncelik: 'Orta'
  }
];

export const mockKonular: Konu[] = [
  {
    id: '1',
    ders: 'Matematik',
    konu: 'Türev',
    zorluk: 'Orta',
    tamamlanmaDurumu: 80,
    eksikMi: false
  },
  {
    id: '2',
    ders: 'Matematik',
    konu: 'İntegral',
    zorluk: 'Zor',
    tamamlanmaDurumu: 45,
    eksikMi: true
  },
  {
    id: '3',
    ders: 'Fizik',
    konu: 'Elektrik ve Manyetizma',
    zorluk: 'Zor',
    tamamlanmaDurumu: 60,
    eksikMi: true
  },
  {
    id: '4',
    ders: 'Fizik',
    konu: 'Optik',
    zorluk: 'Orta',
    tamamlanmaDurumu: 70,
    eksikMi: false
  },
  {
    id: '5',
    ders: 'Kimya',
    konu: 'Kimyasal Tepkimeler',
    zorluk: 'Orta',
    tamamlanmaDurumu: 55,
    eksikMi: true
  },
  {
    id: '6',
    ders: 'Kimya',
    konu: 'Organik Kimya',
    zorluk: 'Zor',
    tamamlanmaDurumu: 40,
    eksikMi: true
  },
  {
    id: '7',
    ders: 'Biyoloji',
    konu: 'Hücre Bölünmesi',
    zorluk: 'Orta',
    tamamlanmaDurumu: 75,
    eksikMi: false
  }
];

export const mockQuizler: Quiz[] = [
  {
    id: '1',
    konuId: '1',
    soru: 'f(x) = 3x² + 2x - 1 fonksiyonunun türevi nedir?',
    secenekler: ['6x + 2', '6x - 2', '3x + 2', '6x² + 2x'],
    dogruIndex: 0
  },
  {
    id: '2',
    konuId: '1',
    soru: 'Bir fonksiyonun türevi hangi kavramı temsil eder?',
    secenekler: ['Alan', 'Hız', 'Anlık değişim oranı', 'Hacim'],
    dogruIndex: 2
  },
  {
    id: '3',
    konuId: '1',
    soru: 'sin(x) fonksiyonunun türevi nedir?',
    secenekler: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
    dogruIndex: 0
  },
  {
    id: '4',
    konuId: '1',
    soru: 'Çarpım kuralına göre (f·g)\' ifadesi neye eşittir?',
    secenekler: ['f\'·g\'', 'f\'·g + f·g\'', 'f·g\'', 'f\'/g\''],
    dogruIndex: 1
  },
  {
    id: '5',
    konuId: '1',
    soru: 'e^x fonksiyonunun türevi nedir?',
    secenekler: ['e^x', 'x·e^(x-1)', 'e', 'e^(x+1)'],
    dogruIndex: 0
  }
];

export const mockKonuOzetleri: KonuOzet[] = [
  {
    id: '1',
    konuId: '1',
    baslik: 'Türev - Temel Kavramlar',
    maddeler: [
      'Türev, bir fonksiyonun anlık değişim oranını verir',
      'Temel türev kuralları: Sabit kural, kuvvet kuralı, toplam/fark kuralı',
      'Çarpım kuralı: (f·g)\' = f\'·g + f·g\'',
      'Bölüm kuralı: (f/g)\' = (f\'·g - f·g\')/g²',
      'Zincir kuralı: Bileşke fonksiyonların türevi için kullanılır',
      'Temel fonksiyonların türevleri: sin\'(x)=cos(x), cos\'(x)=-sin(x), e^x\'=e^x',
      'Türev, grafikte teğet doğrunun eğimini verir'
    ]
  }
];

export const mockKaynaklar: Kaynak[] = [
  {
    id: '1',
    baslik: 'Türev Uygulamaları - Video Ders',
    tur: 'Video',
    url: 'https://example.com/video1',
    konu: 'Matematik - Türev',
    sure: '45 dk',
    favori: true,
    tamamlandi: false
  },
  {
    id: '2',
    baslik: 'Elektrik ve Manyetizma Konu Anlatımı',
    tur: 'Video',
    url: 'https://example.com/video2',
    konu: 'Fizik',
    sure: '60 dk',
    favori: false,
    tamamlandi: true
  },
  {
    id: '3',
    baslik: 'YKS Matematik Soru Bankası',
    tur: 'Kitap',
    url: 'https://example.com/book1',
    konu: 'Matematik',
    favori: true,
    tamamlandi: false
  },
  {
    id: '4',
    baslik: 'Organik Kimya Özet Notları',
    tur: 'Link',
    url: 'https://example.com/notes1',
    konu: 'Kimya - Organik',
    favori: false,
    tamamlandi: false
  }
];

export const mockKocGorusmeleri: KocGorusmesi[] = [
  {
    id: '1',
    tarih: '2025-10-10',
    saat: '14:00',
    kocAdi: 'Ayşe Demir',
    durum: 'Bekliyor',
    notlar: undefined,
    aksiyonlar: undefined
  },
  {
    id: '2',
    tarih: '2025-10-03',
    saat: '15:00',
    kocAdi: 'Mehmet Kaya',
    durum: 'Tamamlandı',
    notlar: 'Matematik konusunda ilerleme var. İntegral çalışmasına ağırlık verilmeli.',
    aksiyonlar: [
      'İntegral konu anlatım videoları izle',
      'Günde 20 integral sorusu çöz',
      'Hafta sonu deneme sınavı çöz'
    ]
  },
  {
    id: '3',
    tarih: '2025-09-26',
    saat: '16:00',
    kocAdi: 'Ayşe Demir',
    durum: 'Tamamlandı',
    notlar: 'Çalışma planına uyum mükemmel. Motivasyon yüksek.',
    aksiyonlar: [
      'Fizik dersine daha fazla zaman ayır',
      'Haftalık hedeflere küçük ödüller ekle'
    ]
  }
];

export const mockMotivasyonMesaji = 'Harika gidiyorsun! Bu hafta hedefinin %87\'sini tamamladın. Streak\'in 7 gün! 🔥';

export const mockBugununGorevleri = [
  {
    id: '1',
    konu: 'Kimyasal Tepkimeler',
    ders: 'Kimya',
    sure: 120,
    tamamlandi: false
  },
  {
    id: '2',
    konu: 'Türev Test Çözümü',
    ders: 'Matematik',
    sure: 90,
    tamamlandi: false
  },
  {
    id: '3',
    konu: 'Biyoloji Deneme Analizi',
    ders: 'Biyoloji',
    sure: 45,
    tamamlandi: false
  }
];
