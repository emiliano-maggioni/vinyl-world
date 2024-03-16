import PasswordInput from "components/passwordInput/PasswordInput";
import classes from "./LoginPage.module.css";
import ButtonBase from "components/ButtonBase/ButtonBase";
import TextInput from "components/textInput/TextInput";
import { useForm } from 'react-hook-form';
import { LoginForm } from "utilities/types";

const LoginPage = () => {
	const { register, handleSubmit, formState: { errors }} = useForm<LoginForm>({
		mode: "onSubmit",
	});

    const onSubmit = (data: LoginForm) => {
		console.log("data:", data);
	  }

    console.log("errors:",errors.email);

    return (
        <article className={classes.container}>
                <form className={classes.form}  onSubmit={handleSubmit(onSubmit)}>
                    <h3 className={classes.title}>Login</h3>
                    <div>
                        <TextInput
                            id="email"
                            label="Email"
                            errorMessage="Insert email"
                            register={register}
                            errors={errors}
                            isEmail
                        />
                    </div>
                    <div>
                        <PasswordInput
                            id="password"
                            label="Password"
                            errorMessage="Insert password"
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div className={classes.btContainer}>
                        <ButtonBase text="Login" type="submit"  />
                    </div>
                </form>
        </article>
    );
}

export default LoginPage;