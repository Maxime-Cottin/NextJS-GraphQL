import Link from 'next/link';
import { RichText } from './RichText';

interface ItemListProps {
    itemKey: number;
    itemCover: any;
    itemName: any;
    itemPrice: string;
    itemSlug: string;
}

export const ItemList = ({itemKey, itemCover, itemName, itemPrice, itemSlug}: ItemListProps) => (
    // <Link href={{
    //   pathname: "/PageArticle/",
    //   query: {find: itemSlug},
    // }}>
    <Link href="416d">
      <a>
        <article key ={itemKey}>
          <div>
              <img src={itemCover.url} />
          </div>
            <RichText
              className=""
              richTextContent={itemName}
            />
        <p>{itemPrice + ' €'}</p>
        <p>{itemSlug}</p>
        </article>
      </a>
    </Link>
);