import Image from 'next/image';

type FounderCardProps = {
  name: string;
  role: string;
  profile: string;
  image: string;
  imagePosition?: string;
  index: string;
};

export default function FounderCard({
  name,
  role,
  profile,
  image,
  imagePosition = '50% 25%',
  index,
}: FounderCardProps) {
  return (
    <article className='founder-card'>
      <div className='founder-card__image'>
        <Image
          src={image}
          alt={`Retrato de ${name}`}
          fill
          sizes='(min-width: 900px) 30vw, 100vw'
          style={{ objectPosition: imagePosition }}
        />
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
