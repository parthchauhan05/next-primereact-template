import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/utils/supabase";

export default function SignIn({ csrfToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(async () => {
    const { data, errors } = await supabase.from('users').select('*')
    console.log(data)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username: e.target.username.value,
      password: e.target.password.value,
      callbackUrl: "/",
    });
    window.location = res.url;
  };
  return (
      <div className="p-8 flex justify-content-center w-screen sign-in-bg">
      <form className="w-25rem p-4 flex flex-column gap-5 justify-content-center sign-in-form align-self-center"
        onSubmit={handleSubmit} method="post"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <Image className="align-self-center" src="/logo.svg" width={200} height={100} alt="Volare Health" />
              <FloatLabel>
                <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email">E mail</label>  
              </FloatLabel>
              <FloatLabel>
                <Password inputId="password" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} tabIndex={1} toggleMask />
                <label htmlFor="password">Password</label>
              </FloatLabel>
              <Button label="Sign in" className="justify-content-center font-normal	" icon="pi pi-sign-in" type="submit"/>
        </form>
      </div>
  )
}
