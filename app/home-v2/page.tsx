import { redirect } from "next/navigation";

// The draft became the homepage.
export default function HomeV2() {
  redirect("/");
}
