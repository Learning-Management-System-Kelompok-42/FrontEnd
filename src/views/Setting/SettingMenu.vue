<template>
  <v-app>
    <v-layout>
    <v-main class="ml-10 ma-5">
        <h3><b>Pengaturan</b></h3> 
        <p>Pengaturan akun yang mungkin diperlukan</p>

        <v-row>
            <v-col cols="3">
                <v-card
                    class="mx-auto"
                    max-width="100%"
                    outlined
                >
                
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-avatar
                                class="mt-3"
                                rounded
                                height="80"
                                color="grey"
                            ></v-list-item-avatar>
                            <v-list-item-title class="text-h8 mb-1 pt-3">
                            <b>Perusahaan</b>
                            </v-list-item-title>
                            <v-list-item-subtitle class="text-h12">Ubah informasi perusahaan kamu</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <router-link :to="{name :'settingCompany'}" style="text-decoration:none; color: black">
                            <v-btn
                                class="text-capitalize px-1"
                                @click="reveal = false"
                                text
                            >
                                Ubah Sekarang <v-icon class="pt-1">mdi-chevron-right</v-icon>
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card
                    class="mx-auto"
                    width="100%"
                    outlined
                >
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-avatar
                                class="mt-3"
                                rounded
                                height="80"
                                color="grey"
                            ></v-list-item-avatar>
                            <v-list-item-title class="text-h8 mb-1 pt-3">
                            <b>Profil</b>
                            </v-list-item-title>
                            <v-list-item-subtitle style="display:block">Ubah informasi diri kamu</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <router-link :to="{name :'settingProfile'}" style="text-decoration:none; color: black">
                            <v-btn
                                class="text-capitalize px-1"
                                @click="reveal = false"
                                text
                            >
                                Ubah Sekarang <v-icon class="pt-1">mdi-chevron-right</v-icon>
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card
                    class="mx-auto"
                    width="100%"
                    outlined
                >
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-avatar
                                class="mt-3"
                                rounded
                                height="80"
                                color="grey"
                            ></v-list-item-avatar>
                            <v-list-item-title class="text-h8 mb-1 pt-3">
                            <b>Kata Sandi</b>
                            </v-list-item-title>
                            <v-list-item-subtitle style="display:block">Ubah Kata Sandimu</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <router-link :to="{name :'settingPassword'}" style="text-decoration:none; color: black">
                        <v-btn
                            class="text-capitalize px-1"
                            @click="reveal = false"
                            text
                        >
                            Ubah Sekarang <v-icon class="pt-1">mdi-chevron-right</v-icon>
                        </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>


    </v-main></v-layout>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>