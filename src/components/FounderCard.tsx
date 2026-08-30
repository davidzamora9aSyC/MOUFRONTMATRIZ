import Image from 'next/image';

type FounderCardProps = {
  name: string;
  role: string;
  profile: string;
  image?: string;
  imagePosition?: string;
  index: string;
  portrait: string;
};

export default function FounderCard({
  name,
  role,
  profile,
  image,
  imagePosition = '50% 25%',
  index,
  portrait,
}: FounderCardProps) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <article className='founder-card' data-reveal>
      <div className='founder-card__image'>
        {image ? (
          <Image
            src={image}
            alt={`${portrait} ${name}`}
            fill
            sizes='(min-width: 900px) 30vw, 100vw'
            style={{ objectPosition: imagePosition }}
          />
        ) : (
          <span className='founder-card__initials' aria-hidden='true'>
            {initials}
          </span>
        )}
        <span className='founder-card__index'>{index}</span>
      </div>
      <div className='founder-card__content'>
        <p className='founder-card__role'>{role}</p>
        <h3>{name}</h3>
        <p>{profile}</p>
      </div>
    </article>
  );
}
