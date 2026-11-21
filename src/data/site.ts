export const site = {
  name: 'AJA | World Kitchen & Bar', tagline: 'EVERYDAY NICE.', phone: '+91 98887 88802', phoneLink: '+919888788802', whatsapp: '919888788802',
  address: ['SCO 129, 130, 131', 'Madhya Marg, Sector 9', 'Chandigarh 160009, India'],
  maps: 'https://maps.app.goo.gl/gUsZerp1n9nMh3BD6',
  zomato: 'https://www.zomato.com/chandigarh/aja-world-kitchen-bar-sector-9',
  cuisines: ['Healthy Food', 'Asian', 'Pizza', 'Salad', 'Fast Food', 'Desserts', 'Coffee', 'Beverages'],
  hours: '', instagram: '',
};
export const whatsappLink = (message: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
