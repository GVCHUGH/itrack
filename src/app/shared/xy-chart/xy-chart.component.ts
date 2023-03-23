import { Component , Inject, NgZone, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-xy-chart',
  templateUrl: './xy-chart.component.html',
  styleUrls: ['./xy-chart.component.scss']
})
export class XyChartComponent {

  private root!: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngOnInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      let root = am5.Root.new("chartbar");

      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: true,
          panX: true,
          // wheelX:'panX',
          // wheelY:'zoomX',
          layout: root.verticalLayout,
          pinchZoomX:false
        })
      );

      // Define data
      let data = [
        {
          day: "Logged Users",
          value: 535,
          color: 'red'
        },
        {
          day: "Visits",
          value: 412,
          color:'green'
        },
        {
          day: "Not Logged Users",
          value: 445,
          color:'blue'
        }
      ];

      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "day"
        })
      );
      xAxis.data.setAll(data);

      // Create series
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Series",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          sequencedInterpolation: true,
          categoryXField: "day",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}"
          })
        })
      );


      series1.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });

// series1.set("fill", am5.color(0x33FFD7));


      xAxis.data.setAll(data);
      series1.data.setAll(data);

      // Add legend
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);

      this.root = root;
      series1.appear(1000);
    chart.appear(1000, 100);
    
    });

    

  }

  ngOnDestroy() {
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }




}
