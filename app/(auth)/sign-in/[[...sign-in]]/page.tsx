import Footer from "@/components/Footer";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <div className="auth-page">
        <SignIn />
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
