import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";
import { Box, Input, Spinner, Select } from "@chakra-ui/react";
import { Arrow } from "../../asset";
import { useRouter } from "next/router";
import { ButtonStyle, HomeSubText } from "../maincontainer/layout.style";
import { ChangeEvent, useEffect, useState, FormEvent } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import { toast } from "react-toastify";
import Image from "next/image";

const HomeContainer = () => {
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [returnedData, setRetunedData] = useState<any>([]);

  const inputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: e.target.type === 'text' ? value.toLowerCase() : value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !userDetails.firstName ||
      !userDetails.lastName ||
      !userDetails.email ||
      !userDetails.gender
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    axios
      .post("https://rexxie-soso.onrender.com/name", userDetails, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response: any) => {
        if (response.data.message === "Looks Like you Registered Previously!") {
          toast.error(response.data.message);
          setRetunedData(response.data.data);
        } else {
          toast.success(response.data.message);
          setRetunedData(response.data.data);
          router.push("/introduction");
        }
        setIsLoading(false);
        router.push("/introduction");
      })
      .catch((error) => {
        toast.error(error);
        setIsLoading(false);
      });
  };
  const data =
    typeof window !== "undefined" &&
    localStorage.setItem("data", JSON.stringify(returnedData));

  return (
    <>
      <div className="header">
        <Image
          src={"/images/Valentina.jpg"}
          height={100}
          width={400}
          alt="image_test"
        />
      </div>

      <HomeSubText>
        <form onSubmit={onSubmit}>
          <Input
            name="firstName"
            onChange={inputChange}
            value={userDetails.firstName}
            padding={"14px 20px"}
            borderRadius={"4px"}
            placeholder="First Name"
            required
          />
          <Input
            name="lastName"
            onChange={inputChange}
            value={userDetails.lastName}
            padding={"14px 20px"}
            borderRadius={"4px"}
            placeholder="Last Name"
            required
          />
          <Input
            name="email"
            onChange={inputChange}
            value={userDetails.email}
            padding={"14px 20px"}
            borderRadius={"4px"}
            placeholder="Email"
            required
          />
          <Input
            name="phoneNumber"
            onChange={inputChange}
            value={userDetails.phoneNumber}
            padding={"14px 20px"}
            borderRadius={"4px"}
            placeholder="Whatsapp Number"
            required
          />
          <Select
            name="gender"
            onChange={inputChange}
            value={userDetails.gender}
            padding={"14px 20px"}
            borderRadius={"4px"}
            placeholder="Select Gender"
            bg="white"
            color="black"
            border="1px solid #ccc"
            _hover={{ borderColor: "#aaa" }}
            _focus={{ borderColor: "blue" }}
            _active={{ borderColor: "blue" }}
            required
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </Select>

          {isLoading ? (
            <Box display="flex" justifyContent="center">
              <Circles
                height="80"
                width="80"
                color="red"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </Box>
          ) : (
            <Button size="normal" variant="primary" type="submit">
              <ButtonStyle>
                Get me a VAL <Arrow />
              </ButtonStyle>
            </Button>
          )}
        </form>
      </HomeSubText>
    </>
  );
};

export { HomeContainer };
