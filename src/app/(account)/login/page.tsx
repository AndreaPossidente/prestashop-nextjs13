"use client";

import "./login.scss";

import { User, UserResponse } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [userResponse, setUserResponse] = useState<UserResponse | null>(null);

  const onSubmit = async () => {
    signIn("credentials", {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        router.push("/");
      } else {
        if (res?.error) {
          const resp = JSON.parse(res.error) as UserResponse;
          setUserResponse(resp);
        }
      }
    });
  };

  return (
    <main>
      <div className="wrapper">
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <Link href={`/`}>Home</Link> / Login
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="login-form">
            <h1>Login to your Account</h1>
            <div>
              <label>Email *</label>
              <input
                className={userResponse?.errors?.email && "error"}
                ref={emailRef}
                id="email"
                type="email"
              />
              {userResponse?.errors?.email && (
                <span>{userResponse.errors.email}</span>
              )}
            </div>
            <div>
              <label>Password *</label>
              <input
                className={userResponse?.errors?.password && "error"}
                ref={passwordRef}
                id="password"
                type="password"
              />
              {userResponse?.errors?.password && (
                <span>{userResponse.errors.password}</span>
              )}
            </div>
            <div>
              <Link href="/reset-password">Forgot your password?</Link>
            </div>
            <div>
              <button style={{ cursor: "pointer" }} onClick={onSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
