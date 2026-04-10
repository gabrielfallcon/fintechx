"use client";

import { LoadingTag } from "@/src/components";
import { useEffect, useState } from "react";
import { WelcomeTag } from "../welcome";

const IntroGateComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingTag />;
  }

  return <WelcomeTag />;
};

export default IntroGateComponent;
