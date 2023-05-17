<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>

    <div class="post-list">
      <div class="post" 
      v-for="postId in thread.posts" 
      :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{
            usertById(postById(postId).userId).name
          }}</a>

          <a href="#">
            <img
              class="avatar-large"
              :src="usertById(postById(postId).userId).avatar"
              alt=""
            />
          </a>

          <p class="desktop-only text-small">107 posts</p>  
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
          <!-- <a href="#" style="margin-left: auto;" class="link-unstyled" title="Make a change"><i class="fa fa-pencil"></i></a> -->
        </div>

        <div class="post-date text-faded">
          {{ postById(postId).publishedAt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
// import { ref } from 'vue'

// const threads = ref(sourceData.threads)
// const posts = ref(sourceData.posts)
// const users = ref(sourceData.users)

// function postById(postId) {
//     return posts.value.find(p => p.id === postId)
// }

// function usertById(userId) {
//             return users.value.find(p => p.id === userId)
//         }

export default {
    props: {
        id: {
            required: true,
            type: String
        } 
    },
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
    },
    computed: {
        thread() { 
            return this.threads.find(thread => thread.id === this.id)
        }
    },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },

    usertById(userId) {
      return this.users.find((p) => p.id === userId);
    },
  },
};
</script>

<style scoped>

</style>
