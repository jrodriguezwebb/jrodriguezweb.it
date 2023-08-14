import Image from "next/image";

export default function Slider() {
  return (
    <div
      id="clients_1"
      className="clients owl-carousel"
      data-mobile-items="1"
      data-tablet-items="3"
      data-items="6"
    >
      <div className="client-block">
        <a href="#" target="_blank" title="Golden Grid">
          <Image
            src="/images/clients/client-1.png"
            alt="Golden Grid"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
          />
        </a>
      </div>

      <div className="client-block">
        <a href="#" target="_blank" title="Sweety">
          <Image
            src="/images/clients/client-2.png"
            alt="Sweety"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
          />
        </a>
      </div>

      <div className="client-block">
        <a href="#" target="_blank" title="Magic Furnitures">
          <Image
            src="/images/clients/client-3.png"
            alt="Magic Furnitures"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
          />
        </a>
      </div>

      <div className="client-block">
        <a href="#" target="_blank" title="LifeGuard">
          <Image
            src="/images/clients/client-4.png"
            alt="LifeGuard"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
          />
        </a>
      </div>

      <div className="client-block">
        <a href="#" target="_blank" title="LESS">
          <Image
            src="/images/clients/client-5.png"
            alt="LESS"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
          />
        </a>
      </div>

      <div className="client-block">
        <a href="#" target="_blank" title="Design Lovers">
          <Image
            src="/images/clients/client-6.png"
            alt="Design Lovers"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
          />
        </a>
      </div>

      <div className="client-block">
        <a href="#" target="_blank" title="WordPress">
          <Image
            src="/images/clients/client-7.png"
            alt="WordPress"
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
          />
        </a>
      </div>
    </div>
  );
}
