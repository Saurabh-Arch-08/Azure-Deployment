import { Article } from '@/lib/types';
import Image from 'next/legacy/image';
import { handleArticleClicked } from '@/lib/handleArticleClick';
import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';

type Props = {
    article: Article;
  };

  export function ArticleCard({ article }: Props) {
    const slug = slugify(article.title).toLowerCase();
  
    return (
      <div>
        <button onClick={() => handleArticleClicked(slug)}>
          <div className="group">
            <Image
              className="rounded-3xl group-hover:opacity-75"
              objectFit="cover"
              src={article.coverImage}
              placeholder="blur"
              blurDataURL={article.coverImage}
              width={684}
              height={800}
              layout="intrinsic"
              alt={'article cover'}
            />
            <div className="w-full text-left">
              <h3 className="mt-2 text-2xl">{article.title}</h3>
              <span className="flex items-center text-base font-semibold">
                {new Date(article.publishedDate).toLocaleDateString(
                  siteMetadata.locale,
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }
                )}{' '}
              </span>
            </div>
          </div>
        </button>
      </div>
    );
  }