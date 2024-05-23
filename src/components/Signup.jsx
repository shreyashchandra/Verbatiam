/* eslint-disable no-unused-vars */

//
//
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import { login as authLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = async (data) => {
    setError("");
    try {
      const user = await authService.createAccount(data);
      if (user) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center ">
        <div
          className={`mx-auto w-full max-w-lg bg-slate-600 rounded-xl p-10 border border-black/10`}
        >
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
              <Logo width="100%" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-semibold leading-tight">
            Sign Up to your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Allready have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-sm transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>

          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          <form onSubmit={handleSubmit(signup)} className="mt-8">
            <div className="space-y-5">
              <Input
                label="Full Name: "
                placeholder="Tony Stark"
                type="text"
                {...register("name", { required: true })}
              />
              <Input
                label="Email: "
                placeholder="stark@gmai.com"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email must be a valid email",
                  },
                })}
              />
              <Input
                label="Password: "
                placeholder="Enter Your Password"
                type="password"
                {...register("password", { required: true })}
              />
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
