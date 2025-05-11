import InputField from "../molecules/InputField";
import Button from "../atoms/button/Button";
import useInput from "../../Hooks/useInput";
import useAxios from "../../Hooks/useAxios";
import useLoading from "../../Hooks/useLoading";

const SignupForm = () => {
  const username = useInput();
  const email = useInput();
  const password = useInput();
  const { request, res } = useAxios();
  const { loading, handlerEvent } = useLoading(request);

  const handleSubmit = async (e) => {
      e.preventDefault();
    await handlerEvent({
      url: "http://localhost:4000/signup",
      method: "POST",
      data: {
        username: username.value,
        email: email.value,
        password: password.value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField id="username" label="이름" {...username} />
      <InputField id="email" label="이메일" type="email" {...email} />
      <InputField id="password" label="비밀번호" type="password" {...password} />
      <Button disabled={loading}>
        {loading ? "가입 중..." : "회원가입"}
      </Button>
    </form>
  );
};

export default SignupForm;
