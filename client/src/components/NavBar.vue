<template>
    <nav class="absolute top-0 right-0 mt-4 mr-[10%]">
        <ul class="flex space-x-10">
            <li>
                <router-link
                    to="/"
                    active-class="underline text-orange-500"
                    class="font-bold text-lg hover:text-orange-500"
                >
                    Acceuil
                </router-link>
            </li>
            <li>
                <router-link
                    to="/product"
                    active-class="underline text-orange-500"
                    class="font-bold text-lg hover:text-orange-500"
                >
                    Produits
                </router-link>
            </li>
        </ul>
    </nav>
</template>
