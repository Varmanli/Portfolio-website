import Image from "next/image";

import Amir from "../public/assets/Amir.png";

function Photo() {
  return (
    <div className="w-[298px] h-[298px] lg:w-[398px] lg:h-[398px]  " >
      <Image src={Amir} />
    </div>
  );
}

export default Photo;
