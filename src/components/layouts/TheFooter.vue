<template>
    <div class="w-full footer py-20 mt-20">
        <div class="container mx-auto px-5 md:px-5 lg:px-10 xl:px-20 ">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div class="grid-item text-white">
                    <h3 class="font-semibold text-md md:text-lg lg:text-2xl">Contact Info</h3>
                    <ul class="mt-10">
                        <li>
                            <a href="" class="md:text-md">
                                <img src="/icons/phoneC.svg" alt="" class="inline-block footer-icon" width="24">
                                Somewhere in the World
                            </a>
                        </li>
                        <li>
                            <a href="" class="md:text-md">
                                <img src="/icons/messageC.svg" alt="" class="inline-block footer-icon" width="24">
                                info@dummy.com
                            </a>
                        </li>
                        <li>
                            <a href="" class="md:text-md">
                                <img src="/icons/whatsAppC.svg" alt="" class="inline-block footer-icon" width="24">
                                +90 534 555 55 55
                            </a>
                        </li>
                    </ul>
                    <div class="flex-flex-row mt-10">
                        <img src="/social-media-icons/twitter3.svg" alt="" class="inline-block social-icon" >
                        <img src="/social-media-icons/facebook.svg" alt="" class="inline-block social-icon" >
                        <img src="/social-media-icons/instagram.svg" alt="" class="inline-block social-icon" >
                        <img src="/social-media-icons/linkedin.svg" alt="" class="inline-block social-icon" >
                    </div>
                </div>
                <div class="grid-item text-white">
                    <h3 class="font-semibold text-md md:text-lg lg:text-2xl">Links</h3>
                    <ul class="mt-10">
                      <li class="border-b border-neutral-700">
                        <nuxt-link to="" class="text-rose-600 md:text-md cursor-pointer">
                            Get a player's stats.
                        </nuxt-link>
                      </li>
                      <li class="border-b border-neutral-700">
                        <nuxt-link to="" class="text-rose-600 md:text-md cursor-pointer">
                            View all stats from matches
                        </nuxt-link>
                      </li>
                      <li class="border-b border-neutral-700">
                        <nuxt-link to="" class="text-rose-600 md:text-md cursor-pointer">       
                            Statistics of a particular team.
                        </nuxt-link>
                      </li>
                    </ul>

                </div>
                <div class="grid-item text-white">
                    <h3 class="font-semibold text-md md:text-lg lg:text-2xl">Recommed Videos</h3>
                    <div class="flex flex-row mt-10 gap-3">
                        <div class="basis-1/3">
                            <a href="" target="_blank">
                                <img src="/video-cover.webp" alt="" width="100">
                            </a>
                        </div>
                        <div class="basis-1/3">
                            <a href="" target="_blank">
                                <img src="/video-cover.webp" alt="" width="100">
                            </a>
                        </div>
                        <div class="basis-1/3">
                            <a href="" target="_blank">
                                <img src="/video-cover.webp" alt="" width="100">
                            </a>
                        </div>               
                    </div>
                </div>
                <div class="grid-item text-white text-center">
                    <img src="/logo.png" alt="" width="100" class="inline-block">
                    <h3 class="font-semibold text-md md:text-lg lg:text-2xl">NBA STATS</h3>
                    <p class="mt-5">This website is for educational purposes only and does not intend to infringe on any copyrights or licenses.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full py-5 bg-black text-white">
        <div class="container  px-10 md:px-20 py-4 mx-auto">
            <div class="flex flex-row justify-between flex-wrap">
                <div class="flex-item ">
                   <span class="font-semibold">Powered By Vue JS</span>
                   <img src="/vue.svg" alt="" width="18" class="inline-block  ml-3 mr-3 align-text-bottom">
                   <span class="font-semibold">and Pinia</span>
                   <img src="/pinia.svg" alt="" width="18" class="inline-block ml-3 align-text-bottom">
                </div>
                <div class="flex-item">
                    <a href="https://github.com/yemref07" target="_blank">
                        My Github Profile
                        <img src="/github.svg" alt="" class="inline-block  ml-2 align-text-bottom" width="18">
                    </a>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
    .footer{
        background-color:#1e1d1d ;
    }
    .footer ul li{
        line-height: 2.4rem;
    }

    .footer-icon{
        margin-right: 10px;
    }

    .social-icon{
        margin-right: 1.4rem;
        width: 18px;
    }
</style>