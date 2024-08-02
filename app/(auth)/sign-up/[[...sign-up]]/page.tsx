import Footer from "@/components/Footer";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <div className="auth-page">
        <SignUp />
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
