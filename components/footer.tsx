import Image from "next/image";

const Footer = () => {
  return (
    <div className="space-y-8 md:w-4/5 px-4 md:px-0 mx-auto py-4">
      <div className="md:pt-16 pt-8 flex md:flex-row flex-col md:gap-0 gap-4 justify-between md:items-center">
        <div>
          <h3 className="font-bold md:text-2xl text-lg">Write to us</h3>
          <p className="font-medium text-sm md:text-base">
            fosberg1addai@gmail.com
          </p>
        </div>
        <h2 className="text-4xl md:text-2xl font-bold">Follow us on</h2>
        <div className="flex items-center gap-2">
          <a href="#">
            <Image
              src="/images/LinkedIn.png"
              alt="LinkedIn"
              width={50}
              height={50}
              objectFit="cover"
              objectPosition="center"
            />
          </a>
          <a href="#">
            <Image
              src="/images/TwitterX.png"
              alt="X"
              width={50}
              height={50}
              objectFit="cover"
              objectPosition="center"
            />
          </a>
        </div>
      </div>
      <p className="text-center md:text-base text-sm">
        &copy; Copyright All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
