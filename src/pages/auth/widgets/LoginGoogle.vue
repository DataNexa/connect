<template>
    <div class="btn-group w-100 mb-4" role="group">
        <span class="border border-danger bg-white px-2" style="height:50px;"><img class="" src="/google.png" style="height:40px; margin-top:5px;" alt=""></span>
        <button @click="handleGoogleLogin" class="btn btn-danger w-100" style="height:50px">Entrar com Google</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    setup() {
        const handleGoogleLogin = async () => {

            if (!(window as any).google) {
                await new Promise<void>((resolve):void => {
                    const script = document.createElement('script');
                    script.src = 'https://accounts.google.com/gsi/client';
                    script.async = true;
                    script.defer = true;
                    document.head.appendChild(script);
                    return resolve()
                });
            }

            const googleClientId = '469439274694-s5qt48a1ja76ilta8kc9echtapn3uel7.apps.googleusercontent.com'; 

            (window as any).google.accounts.id.initialize({
                client_id: googleClientId,
                callback: async (response: { credential: string }) => {
                    /*
                    const res = await fetch('http://localhost:3001/auth/google', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ credential: response.credential })
                    });

                    const data = await res.json();
                    if (data.token) {
                        localStorage.setItem('token', data.token);
                        console.log('Usuário logado:', data.user);
                    } else {
                        console.error('Erro ao autenticar', data);
                    }
                    */
                   console.log(response.credential);
                   
                },
                ux_mode: 'popup',
            });

            (window as any).google.accounts.id.prompt(); 
        };

        return { handleGoogleLogin };
    }
});
</script>