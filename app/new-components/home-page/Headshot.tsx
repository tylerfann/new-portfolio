import Image from "next/image";

const Headshot = () => {
  return (
    <Image
      src="/profile-pic.png"
      alt="Headshot picture"
      width={125}
      height={125}
      style={{ alignSelf: "center" }}
    />
  );
};

export default Headshot;
