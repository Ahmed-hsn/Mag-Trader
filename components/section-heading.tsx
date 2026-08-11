import { cn } from '@/lib/utils';

type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'reveal max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3',
          align === 'center' && 'justify-center'
        )}
      >
        {index && (
          <span className="font-mono text-[11px] tracking-widest text-brand">{index}</span>
        )}
        <span className="h-px w-8 bg-brand" />
        <span className="eyebrow text-paper/60">{eyebrow}</span>
      </div>
      <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.4rem)] text-paper text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-paper/65 text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
