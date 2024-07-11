import RegisterForm from "./RegisterForm";

async function Register() {
    return (
        <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
            <RegisterForm />
        </main>
    );
};

export default Register;