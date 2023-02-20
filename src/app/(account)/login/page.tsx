"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef } from "react";

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: emailRef?.current,
      password: passwordRef?.current,
      redirect: true,
      callbackUrl: "/",
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
              <input ref={emailRef} id="email" type="email" />
            </div>
            <div>
              <label>Password *</label>
              <input ref={passwordRef} id="password" type="password" />
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
