<template>
  <section class="my-info">
    <h1>내 정보 관리</h1>
    <div class="profile-container">
      <!-- 프로필 사진 변경 -->
      <div class="profile-photo">
        <img
          :src="profilePhoto"
          alt="프로필 사진"
          @click="changePhoto"/>
        <button @click="changePhoto">사진 변경</button>
      </div>
      <!-- 이름/닉네임 변경 -->
      <div class="info-fields">
        <div class="input-name">
          <label>이름</label>
          <input type="text" v-model="name" placeholder="이름을 입력하세요" />
        </div>
        <div class="input-nickname">
          <label>닉네임</label>
          <input type="text" v-model="nickname" placeholder="닉네임을 입력하세요" />
        </div>
        <button @click="saveInfo">저장</button>
      </div>
    </div>
    <!-- 한 줄 소개 -->
    <div class="intro-container">
      <label>한 줄 소개</label>
      <textarea
        v-model="introduction"
        placeholder="자신을 한 줄로 소개해보세요"
      ></textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyInformation",
  data() {
    return {
      profilePhoto: require("@/assets/me.png"),
      name: "",
      nickname: "",
      introduction: "",
    };
  },
  methods: {
    changePhoto() {
      alert("저장 완료");
    },
    saveInfo() {
      alert('이름: ${this.name || "없음"}, 닉네임: ${this.nickname || "없음"}, 소개: ${this.introduction || "없음"}');
    },
  },
};
</script>

<style scoped>
.my-info {
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.profile-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-photo {
  margin-right: 20px;
  text-align: center;
  position: relative;
}

.profile-photo img {
  width: 180px;
  height: 220px;
  border: 1px solid #ddd;
  object-fit: cover;
  cursor: pointer;
}

.profile-photo button {
  position: absolute;
  top: 100%;
  left: 100%;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
}

.info-fields {
  flex: 1;
}

.input-name {
  margin-bottom: 15px;
}

.input-nickname {
  margin-bottom: 15px;
}

.input-name label {
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
}

.input-nickname label {
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
}

.input-name input {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.input-nickname input {
  width: 500px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.info-fields button {
  width: 70px;
  height: 40px;
  font-size: 16px;
}

.intro-container {
  margin-top: 60px;
}

.intro-container label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.intro-container textarea {
  width: 100%;
  height: 80px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>