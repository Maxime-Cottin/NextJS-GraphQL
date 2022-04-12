import Link from "next/link";
import { RichText } from "./RichText";
import Image from "next/image";

interface ItemListProps {
  itemCover: any;
  itemName: any;
  itemPrice: string;
  itemSlug: string;
}

export const ItemList = ({
  itemCover,
  itemName,
  itemPrice,
  itemSlug,
}: ItemListProps) => (
  <Link
    href={{
      pathname: "/" + itemSlug,
    }}
  >
    <a className="cardItem">
      <article>
        <div className="imgContainer">
          <Image src={itemCover.url} alt="" />
        </div>
        <div className="txtCard">
          <RichText className="itemName" richTextContent={itemName} />
          <div>
            <p>{itemPrice + " €"}</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </article>
    </a>
  </Link>
);
