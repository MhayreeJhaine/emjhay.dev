import { useState } from "react";
import InputField from "../../../components/atoms/inputField";

const FormData = () => {
  const [data] = useState({
    name: "Maryjane Ngozi Ashinedu",
    alias: "EmJhay, MJ",
    gender: "Female",
    pronouns: "she/her/ella",
    bio: "I’m a frontend developer focused on React and React Native, building clean interfaces and smooth user experiences. I love turning ideas into functional, beautiful apps — and learning something new with every project.",
    location: "Benin-city, Nigeria.",
  });

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setData((prev) => ({
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     }));
  //   };

  return (
    <article className="mt-6 mx-2">
      <InputField label="Full Name" value={data.name} />
      <InputField label="Alias" value={data.alias} />
      <InputField label="Gender" value={data.gender} />
      <InputField label="Pronouns" value={data.pronouns} />
      <InputField label="Meet the Developer" textarea={true} value={data.bio} />
      <InputField label="Location" value={data.location} />
    </article>
  );
};

export default FormData;
