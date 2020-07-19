<template>
  <div id="home-page">
    <!-- メインエリア -->
    <main class="container">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>単語を入力してください！</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="form.word.word" label="word"></v-text-field>
                </v-form>
                <p>{{form.word.mean}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="primary" @click="submitSave">Get!</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  data() {
    return {
      form: {
        word: {
          word: "",
          mean: ""
        }
      }
    };
  },
  computed: {
    isCreated: function() {
      return this.form.book.id !== undefined;
    }
  },
  methods: {
    // 登録・更新ボタン押下
    submitSave: function() {
      api({
        // 登録済みかどうかでHTTPメソッドとエンドポイントを切り替える
        method: "post",
        url: "http://127.0.0.1:8000/get/",
        data: {
          word: this.form.word.word
        }
      }).then(response => {
        this.form.word = response.data;
      });
    }
  }
};
</script>
