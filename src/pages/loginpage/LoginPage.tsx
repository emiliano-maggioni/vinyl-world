import PasswordInput from "components/passwordInput/PasswordInput";
import classes from "./LoginPage.module.css";
import ButtonBase from "components/ButtonBase/ButtonBase";
import TextInput from "components/textInput/TextInput";
import { useForm } from 'react-hook-form';
import { LoginForm } from "utilities/types";
import { AppContext } from "context/AppContext";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
	const { register, handleSubmit, formState: { errors }} = useForm<LoginForm>({
		mode: "onSubmit",
	});
    const appContext = useContext(AppContext);
    const navigate = useNavigate();
    let location = useLocation();
    const onSubmit = (data: LoginForm) => {
        if(data?.email){
            appContext.login(data.email);
            if(location.pathname === "/complete-checkout")
                navigate("/cart");
            else
                navigate("/");
        }
	  }

    return (
        <section className={classes.container}>
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
        </section>
    );
}

export default LoginPage;
