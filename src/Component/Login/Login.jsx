import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // এখান থেকে তুমি fetch/axios দিয়ে backend এ পাঠাতে পারো
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        className="w-full max-w-md p-10 rounded-lg shadow-lg bg-white border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="text-base font-bold text-black">Name</label>
          <input
            className="border-2 rounded-lg py-1 px-3 w-full mt-1"
            placeholder="Enter your name..."
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="text-base font-bold text-black">Email</label>
          <input
            className="border-2 rounded-lg py-1 px-3 w-full mt-1"
            placeholder="Enter your email..."
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <input
            className="rounded-lg py-2 px-6 bg-orange-500 text-white text-lg font-bold cursor-pointer hover:bg-orange-600"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
