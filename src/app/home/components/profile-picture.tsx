import Image from "next/image";

const ProfilePicture = () => {
  return (
    <Image
      src="/avatar.jpg"
      alt="profile-picture"
      width={3024}
      height={4032}
      className="rounded-lg object-cover shadow-lg"
      priority
    />
  );
};

export { ProfilePicture };
