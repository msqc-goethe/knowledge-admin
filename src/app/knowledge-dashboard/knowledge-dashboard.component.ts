import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { WebServiceService } from '../webservice.service';

@Component({
  selector: 'app-knowledge-dashboard',
  templateUrl: './knowledge-dashboard.component.html',
  styleUrls: ['./knowledge-dashboard.component.scss']
})
export class KnowledgeDashboardComponent implements OnInit {
  
  
  dOptions:any;
  gOptions:any;
  sOptions:any;
  dynamicOptions:any;
  dThemeSubscription:any;
  apOptions:any;
  cnts = [];
  totoalcnt = 0;

  constructor(private theme: NbThemeService, public ws: WebServiceService) {

  }

  ngOnInit(): void {
    this.ws.getCnt().then((x:any)=>{
      x.forEach(cnt => {
          cnt.forEach(element => {
            this.cnts.push(element)
            for (const key in element){
              this.totoalcnt = this.totoalcnt + Number(element[key])
            }
        });
      });
      this.setDChart();
      this.setGChart();
      this.setSChart();
      this.initAccess();
    });

  }

  initAccess(){
    this.dThemeSubscription = this.theme.getJsTheme().subscribe(config => {
      console.log(config)
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
  
    this.apOptions = { 
      //backgroundColor: echarts.bg,
      color: [colors.danger, colors.primary, colors.info],
      tooltip: {},
      textStyle: {
        //color: echarts.textColor,
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          saveAsImage: { show: true }
        }
      },
      yAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          //color: echarts.axisLineColor,
        },
      },
      axisLabel: {
        textStyle: {
          //color: echarts.textColor,
        },
        splitLine: {
          lineStyle: {
            //color: echarts.splitLineColor,
          }
        },
      },
      data: ['Posix','MPIIO','STDIO', 'Other']
    },
    xAxis: {
      type: 'value',
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          //color: echarts.axisLineColor,
        },
        
      },
      splitLine: {
        lineStyle: {
          //color: echarts.splitLineColor,
        }
      },
      axisLabel: {
        textStyle: {
          //color: echarts.textColor,
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
    },
    series: [
      {
        data: [100,2,5,10],
        type: 'bar'
      }
    ]
  };
    });
  }

  setDChart(){
    this.dThemeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
    const echarts: any = config.variables.echarts;
    this.dOptions = {
      legend: {
        textStyle: {
          //color: echarts.textColor,
        },
        orient: 'vertical',
        left: 'left'
      },
      //backgroundColor: echarts.bg,
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          saveAsImage: { show: true }
        }
      },

      tooltip: {
        trigger: 'item'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: this.cnts[0].darshan_cnt, name: 'Darshan' },
            { value: this.cnts[1].io500_cnt, name: 'IO500' },
            { value: this.cnts[2].ior_cnt, name: 'IOR' },
            { value: this.cnts[3].haccio_cnt, name: 'HACCIO' },
            { value: this.cnts[4].custom_cnt, name: 'Others' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    
  });

  }
  setGChart(){
    this.dThemeSubscription = this.theme.getJsTheme().subscribe(config => {
    console.log(config.variables)
    const colors: any = config.variables;
    const echarts: any = config.variables.echarts;
    this.gOptions = {
      series: [
        { 
          type: 'gauge',
          progress: {
            show: true,
            width: 10
          },
          axisLine: {
            lineStyle: {
              width: 10
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 10,
            color: '#999',
            fontSize: 15
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 20,
            itemStyle: {
              borderWidth: 10
            }
          },
          detail: {
            valueAnimation: true,
            formatter: function (value) {
              return '{value|' + value.toFixed(1) + '}{unit|Gbit/s}';
            },
            rich: {
              value: {
                fontSize: 20,
                fontWeight: 'bolder',
                color: '#777',
                padding: [-100, 0, 0, 0]
              },
              unit: {
                fontSize: 20,
                color: '#999',
                padding: [-100, 0, 0, 0]
              }
            }
          },
          data: [
            {
              value: 6.2
            }
          ]
        }
      ]
    };
    
  });

  }


  setSChart(){
    this.dThemeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
    const echarts: any = config.variables.echarts;
    this.sOptions ={
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: 'Posix',
              value: 100,
              children: [
                {
                  name: 'IOR',
                  value: 60
                },
                {
                  name: 'HACCIO',
                  value: 20
                },
                {
                  name: 'Other',
                  value: 20
                },
              ]
            },
            {
              name: 'MPIIO',
              value: 50,
              children: [
                {
                  name: 'IOR',
                  value: 30,
                  
                },
                {
                  name: 'Gadget',
                  value: 10,
                },
                {
                  name: 'Other',
                  value: 10
                },
              ]
            }
          ]
        }
      ]
    };
  });
}

}
