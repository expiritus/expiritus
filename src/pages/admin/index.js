import React from "react";
import { AuthLayout, SignOut } from "components";

const Admin = () => {
  return (
    <AuthLayout>
      <div>
        Admin Panel
      </div>
      <SignOut/>
    </AuthLayout>
  );
};

export default Admin;