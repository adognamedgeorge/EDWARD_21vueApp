<template>
    <div id="pano" style="width:100%;height:813px;">
        <noscript><table style="width:100%;height:100%;"><tr style="vertical-align:middle;"><td><div style="text-align:center;">ERROR:<br/><br/>Javascript not activated<br/><br/></div></td></tr></table></noscript>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: "KrpanoForVue",
        data (){
            const eid = this.$route.query.eid;
            const apiRoot = process.env.VUE_APP_APIROOT;
            return {
                apiRoot : process.env.VUE_APP_APIROOT,
                swf:apiRoot+'/vr/main/tour.swf',
                xml:apiRoot+"/api/getXml/"+eid
            }
        },
        mounted(){
          this.initEditJs();
        },
        methods:{
            initEditJs(){
                var uweb = document.createElement("script");
                uweb.setAttribute("src", "uhweb.js");
                uweb.onload = e => {
                    this.initKp();
                };
                document.querySelector("head").appendChild(uweb);
            },
            initKp(){
                embedpano({
                    id: "krpanoSWFObject",
                    swf: this.swf,
                    xml: this.xml,
                    target: "pano",
                    html5: "prefer",
                    mobilescale: 0.5,
                    passQueryParameters: true,
                    onready: function(e) {
                        console.log(getkp());
                    }
                });
            }
        },
    }
</script>