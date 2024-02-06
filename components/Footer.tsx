import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#000000]">
      <p className="text-base font-bold text-white">
        Mylan MAHIEDDINE ~ Isitech 2024{" "}
      </p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/m.mh2dn?igsh=MTdhaGtpczYzbTlscg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="./instagram.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
        <a
          href="https://twitter.com/Sylyx693"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="./twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
