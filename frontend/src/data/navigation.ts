export interface NavItem {
  label: string;
  to: string;
  hasServicesMenu?: boolean;
}

export const mainNav: NavItem[] = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Services', to: '/services', hasServicesMenu: true },
{ label: 'Portfolio', to: '/portfolio' },
{ label: 'Social Media', to: '/social-media' },
{ label: 'Pricing', to: '/pricing' },
{ label: 'Blog', to: '/blog' },
{ label: 'Contact', to: '/contact' }];


export const legalNav: NavItem[] = [
{ label: 'Privacy Policy', to: '/privacy-policy' },
{ label: 'Terms and Conditions', to: '/terms' }];