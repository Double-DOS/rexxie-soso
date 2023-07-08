import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { GArrow } from "@/asset";
import { useRouter } from "next/router";
import { ButtonStyle, SubText } from "../maincontainer/layout.style";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

const IntroContainer = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLink = () => {
    router.push("./avatar");
  };

  // const recieveData = axios.get("")
  //   .then((data: any) => 
  //   setLoading(false)
  //   ;
  
  const userName = localStorage.getItem('name')
  
  return (
    <>
      <Image src="/rexxie.png" width={155} height={99} alt="" />

      <SubText>
        <CustomText variant="h3" type="primary" weight="400">
          Welcome {userName},
        </CustomText>

        <CustomText variant="h4" type="primary" weight="400">
          Hey there! Meet our dynamic duo, Soso and Rexxi! Soso is all about
          helping you prioritize your mental health and wellbeing, while Rexxi
          is an expert in managing your finances and planning for the future.
          Together, we make the perfect team for achieving a healthy balance in
          both your mental and financial life. So, are you ready to get started?
          Let&lsquo;s chat!
        </CustomText>
        <Button size="transparent" variant="primary" onClick={handleLink}>
          <ButtonStyle>
            Continue <GArrow />
          </ButtonStyle>
        </Button>
      </SubText>
    </>
  );
};

export { IntroContainer };
  function useEffect(arg0: () => void, arg1: any[]) {
    throw new Error("Function not implemented.");
  }

