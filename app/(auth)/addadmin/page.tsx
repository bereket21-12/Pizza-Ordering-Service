import AddAdmin from "@/components/auth/AddAdmin";
import React, { Suspense } from "react";

export default function page() {
   
  return  <Suspense fallback={<div>Loading...</div>}>

  <AddAdmin/>;
  </Suspense>
}

