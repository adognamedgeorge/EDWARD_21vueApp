<template>
  <div>
    <div class="uploader" v-if="success==false">
      <div class="control">
        <button
          class="btn"
          style="display:inline-block;margin-right:75px;"
          onclick="document.querySelector('#add_file').click()"
        >从本地添加全景</button>
        <button
          class="btn line"
          style="display:inline-block;"
          data-modal-trigger="upload-modal"
        >从素材库添加全景</button>
      </div>
      <div class="content">
        <form action>
          <input
            type="file"
            name="add_file"
            id="add_file"
            @change="addFile($event)"
            hidden
            multiple
          />
          <div class="addvr" style="position:relative;">
            <p v-if="upload_images.length==0">添加全景</p>
            <div class="uploads" id="uploads">
              <div v-for="(upload_image,index) in upload_images" :key="index" class="unit">
                <img v-if="upload_image.img_type=='material'" :src="upload_image.preview" alt />
                <canvas v-if="upload_image.img_type=='upload'"></canvas>
                <p class="name">{{upload_image.name}}</p>
              </div>
            </div>
          </div>
          <div class="info">
            <span>
              <label for>作品名称：</label>
              <input type="text" v-model="works_name" placeholder="请输入作品标题" style="width:300px;" />
            </span>
            <span style="margin-left:104px;">
              <label for>分类：</label>
              <!-- select元素必须封装在.select类中 -->
              <div class="select" style="width:240px">
                <select v-model="works_category">
                  <option value="0">请选择分类</option>
                  <option
                    v-for="(category,index) in categories"
                    :key="index"
                    :value="category.id"
                  >{{category.value}}</option>
                </select>
              </div>
            </span>
          </div>
          <button class="btn" style="width:369px;margin:43px auto" @click="uploadFile">提交</button>
        </form>
      </div>
    </div>
    <div class="success" v-if="success==true">
      <img :src="require('@/assets/images/upload_success.png')" alt />
      <div style="margin-bottom:110px;">
        <span>上传成功</span>
      </div>
      <div class="control">
        <button class="btn" style="display:inline-block;margin-right:108px;" @click="submit">继续上传</button>
        <button class="btn line" style="display:inline-block;">编辑作品</button>
      </div>
    </div>
    <select-modal @sendBack="selectModalSendBack" :modal_config="upload_modal_config"></select-modal>
  </div>
</template>

<script>
import SelectModal from "@/components/modal/SelectModal.vue";
import oss from "@/api/oss.js";
import ajax from "@/assets/js/ajax.js";
import works from "@/api/works.js";

// canvas加载图片;
// upload组装material;

export default {
  mounted() {
    works.categories().then(e => {
      this.categories = e.data;
    });
  },
  data() {
    return {
      success: false,
      upload_images: [],
      image_info: [],
      categories: [],
      works_name: "未命名",
      works_category: 0,
      upload_modal_config: {
        modal_id: "upload-modal",
        title: "全景素材",
        parser() {
          console.log("parser herr");
        }
      }
    };
  },
  watch: {
    image_info(n) {
      if (0 != n.length && n.length == this.upload_images.length) {
        works
          .setMaterial({
            title: this.works_name,
            category: this.works_category,
            info: n,
            type: 4
          })
          .then(e => {
            if (e.code) {
              Modal.loading("uploading", "off");
              Modal.tip("上传成功！");
              this.upload_images = [];
              this.image_info = [];
            } else {
              Modal.tip(e.message);
            }
          });
      }
    },
    upload_images() {
      this.$nextTick(function() {
        var canvases = document.querySelectorAll("canvas");
        canvases.forEach((canvas, index) => {
          canvas.style.width = "100px";
          canvas.style.height = "100px";
          canvas.width = 100;
          canvas.height = 100;
          canvas.style.backgroundColor = "#000";
          console.log(this.upload_images[index].image);
          canvas
            .getContext("2d")
            .drawImage(this.upload_images[index].image, 0, 0, 100, 100);
        });
      });
    }
  },
  methods: {
    selectModalSendBack(e) {
      e.forEach(img => {
        console.log(img);
        var image = new Image();
        image.src = img.path;
        img.image = image;
        img.img_type = "material";
        this.upload_images.push(img);
        console.log(this.upload_images);
      });
    },
    addFile(e) {
      Modal.loading("uploadFile");
      // oss.multiUpload();
      for (var el of e.target.files) {
        var fileReader = new FileReader();
        fileReader.onload = file => {
          var image = new Image();
          image.onload = () => {
            Modal.loading("uploadFile", "off");
            if (image.width !== 2 * image.height) {
              Modal.tip("图片比例不一致 请使用2:1");
              return;
            }
          };
          image.src = file.target.result;
          el.image = image;
          el.img_type = "upload";
          console.log(el);
          this.upload_images.push(el);
        };
        fileReader.readAsDataURL(el);
      }
    },
    uploadFile(e) {
      e.preventDefault();
      Modal.loading("uploading");
      this.upload_images.forEach((element, index) => {
        if (element.img_type == "material") {
          this.image_info.push({ name: element.name, material_id: element.id });
        }
        if (element.img_type == "upload") {
          oss.upload(element).then(e => {
            this.image_info.push(e);
          });
        }
      });
    },
    submit() {
      this.success = !this.success;
    }
  },
  components: {
    "select-modal": SelectModal
  }
};
</script>
<style scoped>
.uploader {
  width: 1180px;
  height: 750px;
  margin: 43px auto 120px;
}
.control {
  width: 100%;
  height: 74px;
  overflow: hidden;
}
.content {
  text-align: left;
  box-sizing: border-box;
  width: 1180px;
  padding: 30px 25px;
  background: #f5f5f5;
  overflow: hidden;
}
.addvr {
  width: 1180px;
  height: 507px;
  background: rgba(230, 230, 230, 0.35);
  border-radius: 4px 4px 0px 0px;
  font-size: 72px;
  font-weight: 400;
  line-height: 507px;
  color: rgba(134, 145, 179, 0.35);
  text-align: center;
}
.info {
  width: 1180px;
  height: 86px;
  background: #fff;
  border-radius: 0px 0px 4px 4px;
  overflow: hidden;
  padding: 24px 46px;
  box-sizing: border-box;
}
.success {
  margin: 47px auto 180px;
  width: 1180px;
  height: 686px;
  background: #fff;
}
.success img {
  margin: 120px 445px 22px;
}
.success span {
  color: #8691b3;
  font-size: 16px;
}

.uploads {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 1200px;
  top: 0;
  left: 0;
  font-size: 12px;
  line-height: 100px;
}
.unit {
  display: inline-block;
  width: 100px;
  height: 120px;
  padding: 10px;
  margin: 10px;
  background: #fff;
  line-height: 16px;
  color: #999;
}
.unit img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  padding-bottom: 4px;
}
.unit p {
  text-overflow: ellipsis;
  width: 100px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
}
</style>