import { CustomText } from "@/components/CustomText";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { HomeSubText, VendorStyle } from "../maincontainer/layout.style";

const Vendors = () => {
  const vendors = [
    {
      name: "JAG.co",
      contact: "+2349030773598",
      link: "https://wa.me/2349030773598",
      photo: "/images/jag.jpg",
    },
    {
      name: "WRAPIFY",
      contact: "+2348109721642",
      link: "https://wa.me/message/7KX5HDEJ25RYI1",
      photo: "/images/wrapify.jpg",
    },
    {
      name: "Jeweller",
      contact: "+2348162904494",
      link: "https://wa.me/2348162904494",
      photo: "/images/jeweller.jpg",
    },
  ];
  return (
    <VendorStyle>
      <div>
        {" "}
        <CustomText variant="p" type="primary" weight="normal">
          FEATURED VALENTINE VENDORS
        </CustomText>
        <CustomText variant="h5" type="primary" weight="normal">
          Valentine is a day to exchange gifts with your loved ones and remind
          them of hw important they are to you. We also know how making a gift
          decision can be hard. So, we&lsquo;ve arranged capable vendors to
          ensure your new VAL partner gets befiting gifts.
        </CustomText>
      </div>

      <Box display={"flex"} flexDirection={"row"} overflowX={"scroll"} gap={20}>
        {vendors.map((v) => (
          <Box
            bgColor={"pink"}
            key={v.name}
            onClick={() => window.open(v.link, '_blank')}
            display={"flex"}
            flexDirection={"column"}
            justifyItems={"center"}
            alignItems={"center"}
            padding={10}
            borderRadius={20}
          >
            <CustomText variant="h5" type="primary" weight="normal">
              Name: {v.name}
            </CustomText>
            <Image src={v.photo} height={200} width={200} alt="image_test" />
            <CustomText variant="h5" type="primary" weight="normal">
              Phone Number: {v.contact}
            </CustomText>
          </Box>
        ))}
      </Box>
    </VendorStyle>
  );
};

export { Vendors };
