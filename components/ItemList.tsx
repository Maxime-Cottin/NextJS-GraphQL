import { RichText } from './RichText';

interface ItemListProps {
    itemKey: number;
    itemCover: any;
    itemName: any;
    itemPrice: string;
}

export const ItemList = ({itemKey, itemCover, itemName, itemPrice}: ItemListProps) => (
    <article key ={itemKey}>
      <div>
          <img src={itemCover.url} />
      </div>
        <RichText
          className=""
          richTextContent={itemName}
        />
      <div>
        <p>{itemPrice + ' €'}</p>
        <i className="fa-solid fa-cart-arrow-down"></i>
      </div>
    </article>
);