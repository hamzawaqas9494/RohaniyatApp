import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function NotFoundScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
  null
  );
}
