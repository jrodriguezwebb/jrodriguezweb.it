import Image from "next/image";
export default function HomeTopSectionLayout(props: React.PropsWithChildren) {
  function getComponent(
    key: string
  ): Array<React.ReactElement> | React.ReactElement | undefined {
    if (props && props.children) {
      if (Array.isArray(props.children)) {
        return props.children.filter((component: React.ReactElement) => {
          return component && component.key === key;
        });
      }
      return props.children as React.ReactElement;
    }
    return undefined;
  }

  return (
    <div className="row">
      <div className=" col-xs-12 col-sm-12">
        <div className="home-content">
          <div className="row flex-v-align">
            <div className="col-sm-12 col-md-5 col-lg-5">
              <div className="home-photo">
                <div className="hp-inner">
                  <Image
                    alt="mainPhoto"
                    src="/images/main_photo.jpg"
                    width={350}
                    height={350}
                  ></Image>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="home-text hp-left">
                <div className="owl-carousel text-rotation">
                  {getComponent("specialities")}
                </div>

                {getComponent("description")}

                <div className="home-buttons">{getComponent("buttons")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
