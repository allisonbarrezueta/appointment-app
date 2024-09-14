import { RegisterCard } from "@/components/features/register/register-card";
import React from "react";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="m-auto flex min-h-screen items-center justify-center">
      <RegisterCard />
    </div>
  );
};

export default SignUp;
