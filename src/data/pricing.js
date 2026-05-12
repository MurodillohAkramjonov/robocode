// Mock data — GET /api/v1/pricing
export const pricingPlan = {
  id: 'main',
  name: 'To‘liq dastur',
  badge: 'Eng mashhur',
  price: '4 330 000',
  currency: 'so‘m',
  period: '3 oylik to‘liq dastur uchun',
  paymentPlan: [
    { id: 'p1', label: 'Ro‘yxatdan o‘tishda', percent: '10%' },
    { id: 'p2', label: 'Lager boshida', percent: '60%' },
    { id: 'p3', label: 'O‘rtasida', percent: '30%' },
  ],
  features: [
    'Barcha 3 oylik darslar',
    'Arduino va elektronika to‘plami',
    'Haftalik Event Day tadbirlari',
    'Shaxsiy robot — uyga olib ketiladi',
    'Rasmiy sertifikat',
    'Prezentatsiya kuni va sovg‘alar',
    'Ota-onalar uchun ochiq darslar',
    'Onlayn ota-ona kabinetiga ruxsat',
  ],
  discounts: [
    {
      id: 'siblings',
      title: 'Aka-uka chegirmasi',
      description: 'Ikkinchi farzandga 15% chegirma',
      icon: 'Users',
    },
    {
      id: 'social',
      title: 'Ijtimoiy yordam',
      description: 'Maxsus toifa oilalar uchun grant tizimi',
      icon: 'HeartHandshake',
    },
  ],
};
