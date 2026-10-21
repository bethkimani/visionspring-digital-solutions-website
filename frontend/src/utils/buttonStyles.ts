export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'light' | 'ghostLight';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
'group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[background-color,color,border-color,transform,box-shadow] duration-150 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ocean text-white shadow-[0_10px_24px_-12px_rgba(21,101,192,0.8)] hover:bg-ocean-dark',
  secondary: 'bg-navy-800 text-white hover:bg-navy-700',
  outline: 'border border-line bg-white text-navy-800 hover:border-ocean hover:text-ocean',
  whatsapp: 'bg-growth-dark text-white hover:bg-[#086A45]',
  light: 'bg-white text-navy-800 hover:bg-sky-soft',
  ghostLight: 'border border-white/25 text-white hover:border-white/50 hover:bg-white/10'
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]'
};

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', extra = ''): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`.trim();
}