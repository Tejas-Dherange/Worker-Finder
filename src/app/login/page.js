"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Page() {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    if (!target) return;
    const { name, value } = target;
    setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signIn("google", { callbackUrl: "/profile" });
    } catch (error) {
      setErrorMessage("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    try {
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      if (res?.error) {
        setErrorMessage("Incorrect username or password.");
      } else {
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error signing in", error);
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
      setUser({ email: "", password: "" });
    }
  };

  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sign in to your account
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enter your email and password to sign in.
              </p>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <Card className="w-full max-w-md py-5">
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full  bg-green-600 hover:bg-green-800" onClick={handleSubmit} disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
                <Button
                  onClick={handleGoogleSignIn}
                  className="flex gap-24 justify-center  w-full  bg-blue-600 hover:bg-blue-800"
                  disabled={loading}
                >
                  
              <Image className={"bg-white ml-[-121px] rounded-sm "}  height={32} width={35} src={"/google.png"}/>
                  Sign in with Google
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
