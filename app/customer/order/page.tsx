'use client'
import Page from "@/components/page";
import React, { Suspense } from "react";

function PageComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}

export default PageComponent;
