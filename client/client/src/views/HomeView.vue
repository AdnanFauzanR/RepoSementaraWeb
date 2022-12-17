<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-12">
            <h2 class="text-grey">Welcome To</h2>
            <h1 class="text-yellow">MY TODO LIST</h1>
            <span class="text-grey">Don't forget to doing what you want to do!!!</span><br />
            <v-btn tile dark class="text-yellow mt-8" variant="outlined" to="/todo">Get Started
            </v-btn>
          </div>
          </v-col>
          <v-col cols="2">
            <div style="position: absolute; z-index: 9999; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;">
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index: 9999; bottom: 90px; right: 65px;" class="mt-16">
              <v-img src="home.png" contain max-height="350"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="11" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="11" sm="6">
              <div class="egg">
                <v-img src="My project.png" max-height="280" style="right: 15px; top: 32px;"></v-img>
              </div>
            </v-col>
            <v-col cols="9" sm="6">
              <h2 class="mt-8">About Us</h2>
              <v-list>
                <v-list-item style="right: 17px;" class="mt-6">
                  <v-icon class="mr-3" color="yellow">fas fa-check-double</v-icon>Web App ini berfungsi untuk membantu pengguna membuat daftar 'todo' guna mengelola tugas-tugas.<br/><br/>
                  <v-icon class="mr-3" color="yellow">fas fa-check-double</v-icon>Web App ini memiliki fungsi untuk menambah tugas serta deskripsinya, dan kemudian menampilkannya dalam daftar.<br/><br/>
                  <v-icon class="mr-3" color="yellow">fas fa-check-double</v-icon>Tugas yang berada dalam daftar dapat dihapus jika sudah tidak diperlukan.
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </div>    
      </v-col>
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="child">
              <h1 class="mr-8">Contact info.</h1>
              <v-btn icon="fas fa-map-marker-alt" class="mt-10" variant="outlined"></v-btn><br /><br />
              <span class="text-caption">Jln. Poros Malino KM. 6 Bontomarannu Gowa, 92171, Sulawesi Selatan</span><br />
              <v-btn icon="fas fa-phone-alt" class="mt-10" variant="outlined"></v-btn><br /><br />
              <span class="text-caption">0821-9304-3944</span><br />
              <span class="text-caption">0813-4362-2921</span><br />
              <v-btn icon="fas fa-envelope" class="mt-10" variant="outlined"></v-btn><br /><br />
              <span class="text-caption">pertiwihn20d@student.unhas.ac.id</span><br />
              <span class="text-caption">namds20d@student.unhas.ac.id</span><br />
            </div>
          </v-col>
          <v-col cols="12" sm="8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63575.94076595811!2d119.43071194111563!3d-5.184372786901919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee13639154f11%3A0x77d363f632d6f859!2sUniversitas%20Hasanuddin%20Kampus%20FAKULTAS%20TEKNIK%20Gowa!5e0!3m2!1sen!2sid!4v1671208675710!5m2!1sen!2sid" width="94%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>

import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
    FooterView
  },
});
</script>

<style scoped>
  .v-container {
    padding: 16px 0;
  }
  .head {
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }
  .head:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, 6deg);
  }
  .head:after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, -6deg);
  }
  .v-row {
    text-align: left;
    margin-top: 5px;
    padding-top: 50px;
    padding-left: 150px;
  }
  .egg {
    display: block;
    margin-left: 35px;
    margin-top: 10px;
    height: 300px;
    width: 356px;
    background-color: #FBDF7E;
    border-radius: 50% 50% 15% 15% / 60% 60% 40% 40%;
  }
  .child {
    padding-right: 30px;
  }
</style>
