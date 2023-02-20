"use client";
import Authentication from "@/Prestashop/services/Authentication";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

async function auth(
  email: HTMLInputElement,
  password: HTMLInputElement,
  setMessage: Dispatch<SetStateAction<AuthResponse>>
) {
  let params: URLSearchParams = new URLSearchParams({
    email: email.value,
    password: password.value,
  });

  const res = await fetch(`/api/login?${params}`, {
    method: "GET",
    next: {
      revalidate: 0,
    },
  });

  const json = await res.json();

  if (res.status == 400) {
    if (json.errors?.email) {
      email.classList.remove("valid");
      email.classList.add("error");
    } else {
      email.classList.remove("error");
    }

    if (json.errors?.password) {
      password.classList.remove("valid");
      password.classList.add("error");
    } else {
      password.classList.remove("error");
    }
  } else if (res.status == 200) {
    email.classList.remove("error");
    password.classList.remove("error");
    email.classList.add("valid");
    password.classList.add("valid");
  }

  setMessage((prev) => json);
}

export default function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<AuthResponse>({});

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
              {message?.errors?.email ? (
                <div>{message.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label>Password *</label>
              <input ref={passwordRef} id="password" type="password" />
              {message?.errors?.password ? (
                <div>{message.errors.password}</div>
              ) : null}
            </div>
            <div>
              <Link href="/reset-password">Forgot your password?</Link>
            </div>
            <div>
              <button
                onClick={async () => {
                  await auth(
                    emailRef.current!,
                    passwordRef.current!,
                    setMessage
                  );
                }}
              >
                Login
              </button>
            </div>
            <div>{message && <pre>{JSON.stringify(message)}</pre>}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
