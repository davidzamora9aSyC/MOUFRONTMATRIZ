type BrandMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export default function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark${inverse ? ' brand-mark--inverse' : ''}`} aria-label='MOU Solutions'>
      <span className='brand-mark__symbol' aria-hidden='true'>
        <span>M</span>
      </span>
      {!compact ? (
        <span className='brand-mark__name'>
          <strong>MOU</strong>
          <small>Solutions</small>
        </span>
      ) : null}
    </span>
  );
}
