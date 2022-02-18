import Link from "next/link";

export const TabBar = () => (
    <div className="tabBar">
        <Link href="/">
            <a className="active">
                <i className="fa-solid fa-shop"></i>
                <p>Shop</p>
            </a>
        </Link>
        <Link href="#">
            <a>
                <i className="fa-solid fa-gun"></i>
                <p>Partie</p>
            </a>
        </Link>
        <Link href="#">
            <a>
                <i className="fa-solid fa-screwdriver-wrench"></i>
                <p>Modding</p>
            </a>
        </Link>
        <Link href="#">
            <a>
                <i className="fa-solid fa-at"></i>
                <p>Contact</p>
            </a>
        </Link>
    </div>
)