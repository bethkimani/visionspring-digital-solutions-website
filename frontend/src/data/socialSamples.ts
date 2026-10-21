export interface SocialSample {
  id: string;
  platform: 'Instagram' | 'Facebook' | 'LinkedIn';
  brand: string;
  headline: string;
  caption: string;
  background: string;
  foreground: string;
  accent: string;
}

/** Fictional sample brands used only to demonstrate design capability. */
export const socialSamples: SocialSample[] = [
{ id: 'bakery', platform: 'Instagram', brand: 'Sample Bakery', headline: 'Fresh every morning', caption: 'Our weekend bake list is here — reserve yours early.', background: '#0B2A5B', foreground: '#FFFFFF', accent: '#3FD39A' },
{ id: 'academy', platform: 'Facebook', brand: 'Sample Academy', headline: 'Admissions now open', caption: 'Visit our admissions page to book a school tour.', background: '#E8F6FD', foreground: '#0B2A5B', accent: '#1565C0' },
{ id: 'solar', platform: 'Instagram', brand: 'Sample Solar', headline: 'Power your home with the sun', caption: 'Talk to our team about a solar assessment.', background: '#0A7F53', foreground: '#FFFFFF', accent: '#F2B705' },
{ id: 'boutique', platform: 'Instagram', brand: 'Sample Boutique', headline: 'New arrivals this week', caption: 'Swipe to see the latest pieces in store and online.', background: '#F4F7FB', foreground: '#0B2A5B', accent: '#14A971' },
{ id: 'consult', platform: 'LinkedIn', brand: 'Sample Consulting', headline: '3 ways to digitise your operations', caption: 'A short guide for growing teams.', background: '#123B7A', foreground: '#FFFFFF', accent: '#7FD3F5' },
{ id: 'clinic', platform: 'Facebook', brand: 'Sample Clinic', headline: 'Book your check-up', caption: 'Appointments available Monday to Saturday.', background: '#1EA7E1', foreground: '#04142E', accent: '#FFFFFF' }];