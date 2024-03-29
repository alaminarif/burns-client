import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Share/Loading";
const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || gUser);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading || gLoading || updating) {
    return <Loading />;
  }
  let signInError;
  if (error || gError || updateError) {
    signInError = <p className="text-red-500">{error?.message || gError?.message || updateError?.message}</p>;
  }
  if (token) {
    console.log(user || gUser);
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await await updateProfile({ displayName: data.name });
    // navigate("/home");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl rounded-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-slate-600 uppercase">Sign up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {signInError}
            <input className="btn w-full max-w-xs text-white btn-primary" type="submit" value="Sign Up" />
          </form>
          <p className="text-center text-black">
            already account?{" "}
            <Link to="/signin" className="text-primary">
              please sign in
            </Link>
          </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
