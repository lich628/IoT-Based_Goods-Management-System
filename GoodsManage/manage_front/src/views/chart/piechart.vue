<template>
  <el-card class="box-card" style="width: 100%; height: 100%" :shadow="'always'">
    <span style="font-family: 宋体,serif;font-size: 25px">物资情况</span>
    <el-divider></el-divider>
    <div class="container">
      <div id="pie"></div>
    </div>
  </el-card>
</template>

<style>
.container {
  margin-top: -40px;
  width: 100%;
  height: 350px;
}
#pie {
  width: 100%;
  height: 100%;
}
</style>

<script>
import {goodsListAll} from "@/api/goods";
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);

export default {
  name: "PieChart",
  created() {},
  mounted() {
    this.initData();
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("pie"));
      // 绘制图表
      myChart.setOption({
        stillShowZeroSum: true, //鼠标滑过出现数据

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },

        series: [
          {
            name: "物资情况",
            type: "pie",
            radius: "70%",
            center: ["50%", "60%"], //饼状图出现的位置
            label: {
              show: true,
              formatter: "{b}\n{d}%",
              fontSize: 12,
              fontWeight: 'normal',
              position: 'outside'  // 标签位置在饼图外侧
            },
            labelLine: {
              show: true,
              length: 15,  // 第一段线的长度
              length2: 10  // 第二段线的长度
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 16,
                fontWeight: "bold",
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      }); //end of mychart.setoption

      //fetch data by function getList
      console.log("fetchdata of piechart!");
      goodsListAll().then((res) => {
        var records = res.data.goods;
        var objs = [];
        records.forEach((record) => {
          let obj = { value: record.currentQuantity, name: record.goodsName };
          objs.push(obj);
        });
        myChart.setOption({
          series: [{ data: objs }],
        });
      });

      /*窗口尺寸发生变化时，echarts 实例重置尺寸*/
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    }, //end of initdata
  }, //end of method
};
</script>
