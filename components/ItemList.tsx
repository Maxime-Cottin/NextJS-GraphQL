import Link from 'next/link';
import { RichText } from './RichText';

interface ItemListProps {
    itemKey: number;
    itemCover: any;
    itemName: any;
    itemPrice: string;
}

export const ItemList = ({itemKey, itemCover, itemName, itemPrice}: ItemListProps) => (
    <Link href="">
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
        </article>
      </a>
    </Link>
);