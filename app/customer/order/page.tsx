"use client";
import Page from "@/components/page";
import React, { Suspense } from "react";
import Loading from "../../../components/common/Loding";

function PageComponent() {
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
}

export default PageComponent;
