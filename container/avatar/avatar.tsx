import React, { useState } from "react";
import { Arrow, GArrow } from "@/asset";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { Avatars } from "./images";
import Image from "next/image";
import { Box, Center, Grid, useMediaQuery } from "@chakra-ui/react";
import { Avatar, ButtonStyle } from "../maincontainer/layout.style";

const AvatarContainer = () => {
  const [selectedImg, setSelectedImg] = useState("");
  const [isLargerScreen] = useMediaQuery("(min-width: 768px)");

  const router = useRouter();

  const handleLink = () => {
    router.push("./conversation");
  };
  const dataString =
    typeof window !== "undefined" && localStorage.getItem("data");
  const data = dataString ? JSON.parse(dataString) : null;
  // console.log(data.gender)

  const handleClick = (avatarSrc: string) => {
    setSelectedImg(avatarSrc);
    localStorage.setItem("selectedImg", avatarSrc);
  };

  // const gridTemplateColumns = isLargerScreen
  //   ? "repeat(10, 1fr)"
  //   : "repeat(5, 1fr)";

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

      <CustomText variant="h3" type="primary" weight="normal">
        <div style={{ textAlign:"center" }}>
          {" "}
          Heyy <b>{data?.randomName}</b> this your chat avatar
        </div>

        <CustomText variant="h4" type="primary" weight="normal">
          <div style={{ color: "red" }}>
            {" "}
            Come back here on Valentine’s Day to see your Match 🎁
          </div>
        </CustomText>
      </CustomText>

      <Avatar>
        {/* <Grid templateColumns={gridTemplateColumns} gap={2}>
          {Avatars.map((avatar, id) => (
            <Image
              onClick={() => handleClick(avatar.src)}
              src={avatar.src}
              height={40}
              width={40}
              alt=""
              key={avatar.id}
              style={{
                border: `${
                  avatar.src === selectedImg ? "5px solid #0A6634" : "none"
                }`,
              }}
            />
          ))}
        </Grid> */}
        <Box textAlign={"center"}>
          {data?.gender === "M" || data?.gender === "m" ? (
            <Image
              src={"/images/male.jpg"}
              height={250}
              width={250}
              alt="image_test"
            />
          ) : (
            <Image
              src={"/images/female.jpg"}
              height={250}
              width={250}
              alt="image_test"
            />
          )}
        </Box>

        <Button size="normal" variant="primary" onClick={handleLink}>
          <ButtonStyle>
            Continue <Arrow />
          </ButtonStyle>
        </Button>
      </Avatar>
    </>
  );
};

export { AvatarContainer };
