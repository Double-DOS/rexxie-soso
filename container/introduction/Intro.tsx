import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Arrow, GArrow } from "@/asset";
import { useRouter } from "next/router";
import {
  AvatarSubText,
  ButtonStyle,
  SubText,
} from "../maincontainer/layout.style";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const IntroContainer = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string | null>("");
  const router = useRouter();
  // const [id, setId] = useState<any>([]);

  const dataString =
    typeof window !== "undefined" && localStorage.getItem("data");
  const data = dataString ? JSON.parse(dataString) : null;

  console.log(data?.randomName);

  // const fetchId = () => {
  //   setLoading(true);
  //   axios
  //     .get("https://rexxie-soso.onrender.com/ws/new")
  //     .then((response) => {
  //       setLoading(false);
  //       setId(response.data.data.PoolId);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   fetchId();
  // }, []);

  const handleLink = () => {
    router.push("./avatar");
    // typeof window !== "undefined" && localStorage.setItem("id", id);
  };
  return (
    <>
      {/* <Image src="/rexxie.png" width={155} height={99} alt="" /> */}

      <div className="header">
        <Image
          src={"/images/Valentina.jpg"}
          height={100}
          width={400}
          alt="image_test"
        />
      </div>

      <AvatarSubText>
        <CustomText variant="h3" type="primary" weight="400">
          Welcome <b> {data?.randomName}</b>,
        </CustomText>

        <CustomText variant="h4" type="primary" weight="400">
          {/* Hey there! Meet our dynamic duo, Soso and Rexxi! Soso is all about
          helping you prioritize your mental health and wellbeing, while Rexxi
          is an expert in managing your finances and planning for the future.
          Together, we make the perfect team for achieving a healthy balance in
          both your mental and financial life. So, are you ready to get started?
          Let&lsquo;s chat! */}
          Would you rather sit on a fence and throw stone at lover&lsquo;s on
          valentine&lsquo;s day or you want to fix yourself with someone who
          would make February 14 a valentine&lsquo;s day for you ? Curious to
          know what we are up against, and what you are up against. Let&lsquo; find you a
          Match!

          
        </CustomText>
        <br />
        <Button size="normal" variant="primary" onClick={handleLink}>
          <ButtonStyle>
            Continue to Anonymous Chat <Arrow />
          </ButtonStyle>
        </Button>
      </AvatarSubText>
    </>
  );
};

export { IntroContainer };
