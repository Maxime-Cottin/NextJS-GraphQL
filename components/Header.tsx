import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  isHomePage: boolean;
}

export const Header = ({ isHomePage }: HeaderProps) => (
  <header
    style={{
      backgroundImage: isHomePage ? 'url("/airsoft-equipement.jpg")' : "none",
      height: isHomePage ? "75vh" : "100px",
      position: isHomePage ? "static" : "fixed",
    }}
  >
    <div className="navContent">
      <Link href="/">
        <a>
          <Image src="./RAS_logo.png" alt="" />
        </a>
      </Link>
      <div className="navBar">
        <Link href="/PageShop">
          <a className="active">
            <p>Boutique</p>
          </a>
        </Link>
        <Link href="/PageGame">
          <a>
            <p>Partie</p>
          </a>
        </Link>
        {/* Page under conception */}
        {/* <Link href="#">
            <a>
                <p>Modding</p>
            </a>
        </Link> */}
        <Link href="/PageContact">
          <a>
            <p>Contact</p>
          </a>
        </Link>
      </div>
    </div>
    <div
      className="catchBanner"
      style={{ display: isHomePage ? "flex" : "none" }}
    >
      <h1>L&apos;immersion complète dans le monde de l&apos;airsoft</h1>
      <p>Une boutique | Un terrain de 16 000m²</p>
      <a href="#presentation">En savoir +</a>
    </div>
  </header>
);
