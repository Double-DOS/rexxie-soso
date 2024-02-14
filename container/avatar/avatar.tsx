import React, { useState } from "react";
import { Arrow, GArrow } from "@/asset";
import { CustomText } from "@/components/CustomText";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";
import { Avatars } from "./images";
import Image from "next/image";
import { Box, Center, Grid, useMediaQuery } from "@chakra-ui/react";
import {
  Avatar,
  ButtonStyle,
  VendorStyle,
} from "../maincontainer/layout.style";

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

      <CustomText
        variant="h3"
        type="primary"
        weight="normal"
        style={{ textAlign: "center" }}
      >
        {" "}
        Heyy <b>{data?.firstName}!</b> Happy Valentine!
      </CustomText>
      <CustomText variant="h4" type="primary" weight="normal">
        <div style={{ color: "red" }}>Meet your match! 🎁</div>
        {data?.gender == "F" && (
          <div style={{ color: "red" }}>
            {" "}
            or should we say &quot;matches&quot;? 😁{" "}
          </div>
        )}
      </CustomText>
      <VendorStyle>
        <Box
          display={"flex"}
          flexDirection={"row"}
          overflowX={"scroll"}
          gap={20}
        >
          {data?.gender == "F" ? (
            data?.matches.map((match: any) => {
              return (
                <Box
                  bgColor={"pink"}
                  key={match.id}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyItems={"center"}
                  alignItems={"center"}
                  padding={10}
                  borderRadius={20}
                  cursor={"pointer"}
                >
                  <CustomText variant="h5" type="primary" weight="normal">
                    Name: {match.firstName} {match.lastName}
                  </CustomText>
                  <Box textAlign={"center"}>
                    {match.gender === "M" || match.gender === "m" ? (
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
                  <CustomText variant="h5" type="primary" weight="normal">
                    Phone Number: {match.phoneNumber}
                  </CustomText>
                </Box>
              );
            })
          ) : data?.matchedTo ? (
            <Avatar>
              <Box
                bgColor={"pink"}
                display={"flex"}
                flexDirection={"column"}
                justifyItems={"center"}
                alignItems={"center"}
                padding={10}
                borderRadius={20}
                cursor={"pointer"}
              >
                <CustomText variant="h5" type="primary" weight="normal">
                  Name: {data?.matchedTo?.firstName} {data?.matchedTo?.lastName}
                </CustomText>
                <Box textAlign={"center"}>
                  {data?.matchedTo?.gender === "M" ||
                  data?.matchedTo?.gender === "m" ? (
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
                <CustomText variant="h5" type="primary" weight="normal">
                  Phone Number: {data?.matchedTo?.phoneNumber}
                </CustomText>
              </Box>
            </Avatar>
          ) : (
            <CustomText variant="h5" type="primary" weight="normal">
              Please check back in few minutes as your VAL has not logged in
              today!
            </CustomText>
          )}
        </Box>
      </VendorStyle>
      {/* 
      <Avatar>
        <Grid templateColumns={gridTemplateColumns} gap={2}>
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
        </Grid> 
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
      </Avatar>
      */}
    </>
  );
};

export { AvatarContainer };
