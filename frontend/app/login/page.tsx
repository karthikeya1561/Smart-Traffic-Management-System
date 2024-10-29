import CustomInput from "@/components/CustomInput";

const LoginForm = () => {
  return (
    <div className="flex flex-col w-1/2 gap-4 ">
      <label className="self-center ">LOGIN</label>
      <CustomInput
        placeholder="Username"
        labelClassName={
          "peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:top-[30%] peer-focus:top-1.5 peer-focus:text-xs"
        }
      ></CustomInput>
      <CustomInput
        placeholder="Password"
        type={"password"}
        labelClassName={
          "peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:top-[30%] peer-focus:top-1.5 peer-focus:text-xs"
        }
      ></CustomInput>
      <a className="self-end underline ">Forgot password</a>
      <button className="h-10 text-center text-white bg-black rounded-full  hover:bg-white hover:border-2 hover:border-black hover:text-black">
        Login
      </button>
    </div>
  );
};

const Image = () => {
  return (
    <div className="flex justify-center self-center border-2 h-full w-[50vw] rounded-tl-3xl rounded-l-3xl bg-black text-center text-white m-0">
      <p className="self-center ">IMAGE</p>
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex w-full m-0 justify-evenly ">
      <div className=" w-[50%] h-screen flex justify-center m-0  ">
        <div className="flex self-center justify-center w-full">
          <LoginForm />
        </div>
      </div>
      <div className=" w-[50%] h-screen m-0">
        <div className="flex self-center justify-center w-full h-screen">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default Login;
