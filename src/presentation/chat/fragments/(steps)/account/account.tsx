"use client";

import { useForm } from "react-hook-form";
import { ButtonTag, InputFieldTag, ScreenTag } from "@/src/components";
import styles from "./account.module.scss";
import { useApp } from "@/src/hooks/app/useApp.hook";
import { FiEdit, FiLock, FiMail, FiUser } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const AccountComponent = () => {
  const { setStepScreen, user, updateUser } = useApp();

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });

  const onSubmit = (data: FormData) => {
    updateUser(data);
    console.log("Updated user:", data);
  };

  return (
    <ScreenTag
      title="Edit Information"
      onBack={() => setStepScreen("preferences")}
    >
      <form
        className={styles.accountContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputFieldTag
          placeholder="FULL NAME"
          iconLeft={<FiUser size={24} />}
          iconRight={<FiEdit size={24} />}
          {...register("name", { required: true })}
        />

        <InputFieldTag
          placeholder="E-MAIL"
          iconLeft={<FiMail size={24} />}
          iconRight={<FiEdit size={24} />}
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />

        <InputFieldTag
          type="password"
          placeholder="PASSWORD"
          iconLeft={<FiLock size={24} />}
          iconRight={<FiEdit size={24} />}
          {...register("password", { required: true, minLength: 6 })}
        />

        <ButtonTag
          label="Save changes"
          variant="primary"
          size="lg"
          type="submit"
        />
      </form>
    </ScreenTag>
  );
};

export default AccountComponent;
