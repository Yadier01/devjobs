import { HeaderDesktop, LogoHeader } from "../style/HeaderSvg";

export default function Header() {
  return (
    <div className="flex justify-center ">
      <div className="flex absolute top-0  justify-center ">
        <HeaderDesktop />
        <div className="absolute left-28 bottom-20">
          <LogoHeader />
        </div>
      </div>
    </div>
  );
}
