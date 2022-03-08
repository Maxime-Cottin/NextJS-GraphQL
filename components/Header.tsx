import Link from "next/link";

export const Header = () => (
    <header>
        <div className="navContent">
            <Link href="/">
                <a><img src="./RAS_logo.png" /></a>
            </Link>
            <div className="navBar">
                <Link href="/PageShop">
                    <a className="active">
                        <p>Boutique</p>
                    </a>
                </Link>
                <Link href="#">
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
                <Link href="#">
                    <a>
                        <p>Contact</p>
                    </a>
                </Link>
            </div>
        </div>
        <div className="catchBanner">
            <h1>L'immersion complète dans le monde de l'airsoft</h1>
            <p>Une boutique | Un terrain de 16 000m²</p>
            <a href="#main">En savoir +</a>
        </div>
    </header>
)