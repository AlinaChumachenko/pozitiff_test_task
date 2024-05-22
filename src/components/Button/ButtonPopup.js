import IconPlus from "@/images/plus.svg";
import Image from "next/image";

export const ButtonPopup = () => {
  return (
    <div>
      <button type="button">
        <Image priority src={IconPlus} alt="Plus" />
      </button>
    </div>
  );
};
