import Link from "next/link";

interface FooterProps {
  isScroll: boolean;
}

export const Footer = ({ isScroll }: FooterProps) => (
  <footer
    style={{
      position: isScroll ? "static" : "absolute",
    }}
  >
    <p>
      Site crée par{" "}
      <Link href="https://github.com/Maxime-Cottin">
        <a>Maxime Cottin</a>
      </Link>
    </p>
  </footer>
);
