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
    <Link href={{
      pathname: "/" + itemSlug,
    }}>
      <a className="cardItem">
        <article key ={itemKey}>
          <div className="imgContainer">
            <img src={itemCover.url} />
          </div>
          <div className='txtCard'>
            <RichText
              className="itemName"
              richTextContent={itemName}
            />
            <div>
              <p>{itemPrice + ' €'}</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </article>
      </a>
    </Link>
);