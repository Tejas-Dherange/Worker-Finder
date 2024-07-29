"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInWithGoogle from "@/components/SignInWithGoogle";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function page() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user);
    try {
      if (!user.name || !user.email || !user.password) {
        return;
      }

      const res = await axios.post("/api/register", user);
      console.log(res.data);
      if (res.status == 200 || res.status == 201) {
        console.log("user added successfully");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setUser({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Create an account
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enter your email and password to get started.
              </p>
            </div>
            <Card className="w-full max-w-md">
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Ram"
                    value={user.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
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
                <Button className="w-full" onClick={handleSubmit}>
                  Sign Up
                </Button>
                {/* <Button className="mt-6 flex items-center justify-center w-64 bg-white text-black border border-gray-300"> */}
                {/* <ChromeIcon className="w-5 h-5 mr-2" /> */}

                <Button onClick={() => signIn("google")}>
                  Sign In with Google
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
