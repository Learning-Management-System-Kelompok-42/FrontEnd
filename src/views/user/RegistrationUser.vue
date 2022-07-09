<template>
  <div class="body">
    <v-row>
      <v-col cols="7">
        <v-container class="cont">
          <v-form v-model="valid" ref="form">
            <div class="form" v-if="!formvalid">
              <h4 class="my-3 pointer" @click="goHome"><logo /></h4>
              <div class="my-6">
                <h1>Informasi Perusahaan</h1>
                <p class="caption">
                  Lengkapi form dibawah ini dengan data perusahaan anda
                </p>
              </div>
              <v-text-field
                label="Nama Perusahaan"
                :rules="nameValidation"
                outlined
                ref="name_company"
                v-model="user.name_company"
                dense
              ></v-text-field>
              <v-text-field
                label="Alamat Perusahaan"
                :rules="nameValidation"
                v-model="user.address_company"
                outlined
                dense
                ref="address_company"
              ></v-text-field>
              <v-text-field
                label="Bidang Perusahaan"
                v-model="user.sector"
                :rules="nameValidation"
                outlined
                ref="sector"
                dense
              ></v-text-field>
              <v-text-field
                label="Website Perusahaan"
                outlined
                v-model="user.website"
                dense
                ref="website"
              ></v-text-field>
              <v-toolbar
                class="inputPicture"
                flat
                outlined
                dense
                rounded
                color="#f3f8f6"
              >
                <v-btn
                  small
                  color="#484848"
                  class="text-capitalize 286F6C--text"
                  depressed
                  outlined
                  @click="onButtonClick"
                >
                  Pilih File
                </v-btn>
                <input
                  type="file"
                  class="d-none"
                  accept="image/*"
                  ref="uploader"
                  @change="onFileChanged"
                />
                <p class="pt-3 ps-4">{{ buttonText }}</p>
              </v-toolbar>
              <div class="btnDiv d-flex">
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!valid"
                  class="text-capitalize white--text mt-5"
                  color="#286F6C"
                  depressed
                  large
                  @click="validate"
                >
                  <v-icon class="me-3">mdi-chevron-right</v-icon>
                  Selanjutnya
                </v-btn>
              </div>
            </div>
            <div class="form2" v-else>
              <v-btn
                small
                dense
                plain
                outlined
                class="text-capitalize mb-4"
                color="#286F6C"
                @click="goBack"
              >
                <v-icon>mdi-chevron-left</v-icon>
                Kembali
              </v-btn>
              <h1>Informasi Penanggung Jawab</h1>
              <p class="caption">
                Lengkapi form dibawah ini dengan data penanggung jawab
                perusahaan
              </p>
              <v-text-field
                label="Nama Lengkap"
                :rules="nameValidation"
                v-model="user.name_admin"
                outlined
                dense
                ref="name_admin"
              ></v-text-field>
              <v-text-field
                label="Nomor Handphone"
                :rules="nameValidation"
                outlined
                v-model="user.phone_number"
                dense
                prefix="+62"
                ref="phone_number"
                :type="password ? 'number' : 'number'"
              ></v-text-field>
              <v-text-field
                label="Alamat Lengkap"
                :rules="nameValidation"
                v-model="user.address_admin"
                outlined
                ref="address_admin"
                :type="alamat ? 'text' : 'text'"
                dense
              ></v-text-field>
              <v-text-field
                label="Email Perusahaan"
                :rules="emailValidation"
                v-model="user.email_admin"
                outlined
                ref="email_admin"
                dense
                :type="email ? 'text' : 'text'"
              ></v-text-field>
              <v-text-field
                label="Kata Sandi"
                outlined
                dense
                v-model="user.password_admin"
                :rules="passwordValidation"
                :append-icon="password ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="password = !password"
                :type="password ? 'text' : 'password'"
              >
              </v-text-field>
              <v-text-field
                label="Konfirmasi Kata Sandi"
                outlined
                dense
                v-model="dataConfirmPassword"
                :rules="confirmPasswordValidation"
                :append-icon="passwordConfirm ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="passwordConfirm = !passwordConfirm"
                :type="passwordConfirm ? 'text' : 'password'"
              >
              </v-text-field>
              <v-checkbox
                color="#286F6C"
                v-model="checkbox"
                class="my-0 mx-0"
                :rules="[
                  (v) => !!v || 'Anda harus menyetujui untuk melanjutkan',
                ]"
                label="Saya setuju dengan syarat dan ketentuan yang berlaku"
              >
              </v-checkbox>
              <div class="btnDiv d-flex">
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!valid"
                  class="text-capitalize white--text mt-5"
                  color="#286F6C"
                  depressed
                  large
                  type="submit"
                  @click="btnRegister"
                >
                  <v-icon class="me-3" small>
                    mdi-checkbox-marked-outline
                  </v-icon>
                  Daftar sekarang
                </v-btn>
              </div>
            </div>
          </v-form>
        </v-container>
      </v-col>
      <v-col cols="5" class="pa-0">
        <v-img
          class="imgfull"
          :src="regisimage"
          height="100%"
          width="100%"
          :aspect-ratio="0.8"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "RegisterUserView",
  components: { Logo },
  setup() {},
};
</script>
