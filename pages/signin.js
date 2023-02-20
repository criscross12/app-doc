import cx from "classnames";
import styles from "../styles/signin.module.css";
import { login } from "../utils/authService";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default Signin;

function Signin() {
  const { register, handleSubmit } = useForm({});
  const [cookie, setCookie] = useCookies(["user"]);
  const { push } = useRouter();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const user = await login(data);
      console.log("user: ", user.status);
      if (user.status == true) {
        setCookie("user", user.data, {
          path: "/",
          maxAge: 3600 * 2, // Expires after 1hr
          sameSite: true,
        });
        push("/dashbord");
      } else {
        push("/");
      }
    } catch (error) {}
  };

  return (
    <>
      <main className={cx(styles["form-signin"], "text-center", "mt-5")}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h3 mb-3 fw-normal">Login Form</h1>
          <h1 className="h3 mb-3 fw-normal">Power Street</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              {...register("usuario", { required: true })}
              placeholder="userMxPS"
            />
            <label htmlFor="floatingInput">Usuario</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              {...register("pass", { required: true })}
              className="form-control"
              placeholder="*************"
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <button type="submit" className="w-100 btn btn-lg btn-primary">
            Sign in
          </button>
        </form>
      </main>
    </>
  );
}
