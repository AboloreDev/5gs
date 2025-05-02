"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function ClientDashboard() {
  const { user, token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect if the user is not authenticated
    if (!token || !user) {
      router.push("/auth/SignIn"); // Redirect to homepage or login page
    }
  }, [token, user, router]);

  return <div></div>;
}
