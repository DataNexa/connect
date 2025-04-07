<template>
    <div class="d-flex flex-column flex-md-row">
        <!-- Botão para abrir menu no mobile -->
        <div class="container-fluid d-md-none">
            <div class="row">
                <div class="col-3">
                    <button class="btn btn-light btn-sm m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
                        ☰ 
                    </button>
                </div>
                <div class="col">
                    <div class="logo text-center m-3">
                        <img src="/datanexa_connect_logo2.png" alt="DataNexa Connect">
                    </div>
                </div>
            </div>
        </div>
        
        

        <!-- Sidebar (Offcanvas para mobile) -->
        <nav id="sidebarMenu" class="offcanvas offcanvas-start bg-clean c-text p-3 d-md-flex flex-column">
            <div class="offcanvas-header d-md-none">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>

            <div class="logo text-center mb-4 d-md-none">
                <img style="width: 20%;" src="/datanexa_icon.png" alt="DataNexa Connect">
            </div>

            <div class="logo text-center mb-4 d-none d-md-block">
                <img src="/datanexa_connect_logo2.png" alt="DataNexa Connect">
            </div>

            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link class="nav-link c-text fw-bold" exact-active-class="active-link" to="/">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.34315 6.34315C5.22433 7.46197 4.4624 8.88743 4.15372 10.4393C3.84504 11.9911 4.00346 13.5997 4.60896 15.0615C5.21447 16.5233 6.23985 17.7727 7.55544 18.6518C8.87103 19.5308 10.4178 20 12 20C13.5823 20 15.129 19.5308 16.4446 18.6518C17.7602 17.7727 18.7855 16.5233 19.391 15.0615C19.9965 13.5997 20.155 11.9911 19.8463 10.4393C19.5376 8.88743 18.7757 7.46197 17.6569 6.34315" stroke="#0052ED" stroke-width="2" stroke-linecap="round"></path> <path d="M12 8L12 4" stroke="#0052ED" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                        Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link c-text fw-bold" exact-active-class="active-link" to="/privacidade">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8ZM11.5278 16C10.5777 14.9385 10 13.5367 10 12C10 10.4633 10.5777 9.06151 11.5278 8H8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16H11.5278ZM2 12C2 8.68629 4.68629 6 8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12Z" fill="#0052ED"></path> </g></svg>
                        Privacidade</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link c-text fw-bold" exact-active-class="active-link" to="/seguranca">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#0052ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        Segurança</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link c-text fw-bold" exact-active-class="active-link" to="/integracoes">
                        <svg fill="#0052ED" width="24px" height="24px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1581.235 734.118c0 217.976-177.317 395.294-395.294 395.294H960.06c-217.977 0-395.294-177.318-395.294-395.294V564.706h1016.47v169.412Zm225.883-282.353h-338.824V0h-112.941v451.765H790.647V0H677.706v451.765H338.882v112.94h112.942v169.413c0 280.207 228.028 508.235 508.235 508.235h56.47v395.294c0 93.402-76.009 169.412-169.411 169.412-93.403 0-169.412-76.01-169.412-169.412 0-155.633-126.72-282.353-282.353-282.353S113 1482.014 113 1637.647V1920h112.941v-282.353c0-93.402 76.01-169.412 169.412-169.412s169.412 76.01 169.412 169.412c0 155.633 126.72 282.353 282.353 282.353 155.746 0 282.353-126.72 282.353-282.353v-395.294h56.47c280.207 0 508.235-228.028 508.235-508.235V564.706h112.942V451.765Z" fill-rule="evenodd"></path> </g></svg>
                        Integrações</router-link>
                </li>
            </ul>
        </nav>

        <!-- Conteúdo principal -->
        <main class="content p-4">
            <router-view></router-view>
        </main>
    </div>
</template>

<style scoped>
    /* Sidebar fixo no desktop */
    .offcanvas {
        width: 250px;
    }

    /* No desktop, o sidebar fica fixo */
    @media (min-width: 768px) {
        .offcanvas {
            position: static;
            transform: none;
            visibility: visible;
            display: flex;
            height: 100vh;
        }
        .content {
            flex-grow: 1;
        }
    }

    /* No mobile, o conteúdo ocupa 100% da largura */
    @media (max-width: 767px) {
        .content {
            width: 100%;
        }
    }
</style>