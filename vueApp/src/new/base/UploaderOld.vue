<template>
  <div class="uploader">
    <div class="left-side">
      <button class="btn" style="margin:157px 0 0 251px">从本地添加全景</button>
      <button class="btn line" style="margin:40px 0 0 251px;">从素材库添加全景</button>
    </div>
    <div class="right-side">
      <form action>
        <p>
          <label class="block" for>标题</label>
          <input type="text" name id placeholder="请输入作品标题" />
        </p>
        <div>
          <label class="block" for>分类</label>
          <!-- select元素必须封装在.select类中 -->
          <div class="select">
            <select name id>
              <option value="0">请选择分类</option>
              <option value="1"></option>
              <option value="2"></option>
            </select>
          </div>
        </div>
        <div>
          <label class="block" for>地址</label>
          <div class="select" style="width:100px">
            <select name id>
              <option value="0">省份</option>
              <option value="1"></option>
              <option value="2"></option>
            </select>
          </div>
          <div class="select" style="width:100px;margin-left:40px;">
            <select name id>
              <option value="0">市</option>
              <option value="1">A</option>
              <option value="2">B</option>
            </select>
          </div>
        </div>
        <p>
          <label class="block" for>简介</label>
          <textarea name id style="width:240px;height:92px;" placeholder="请输入介绍"></textarea>
        </p>
        <button class="btn" style="margin-left:26px;">点击上传</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style scoped>
.uploader {
  width: 1010px;
  height: 536px;
  margin: 34px auto 58px;
  border: 1px solid #8691b3;
  white-space: nowrap;
}
.left-side {
  display: inline-block;
  width: 686px;
  height: 100%;
  background: #fff;
  overflow: hidden;
}
.right-side {
  text-align: left;
  box-sizing: border-box;
  width: 324px;
  height: 100%;
  padding: 30px 25px;
  display: inline-block;
  background: #f5f5f5;
  overflow: hidden;
  white-space: normal;
}
</style>