import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";
import Bounded from "./Bounded";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-xl">
          ©{new Date().getFullYear()} {settings.data.site_title}
        </p>
        <nav>
          <ul>
            {settings.data.navigation.map(({ link, label }) => (
              <li key={label}>
                <PrismicNextLink field={link}>{label}</PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
