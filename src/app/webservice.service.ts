import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

//import { WSA_E_CANCELLED } from 'constants';

@Injectable({
  providedIn: 'root'
})

export class WebServiceService {

  //configUrl = 'assets/config.json';
  url = "http://127.0.0.1:5000/"
  performances: any;
  summaries:any;
  results_r: any;
  results_w: any;
  multi: any[] = [];
  multi2: any[] =[];
  multiSum: any[] = [];
  multiKey="";
  multiKeyC="";
  selectedIds: any[] = [];
  local_performances: Performance [] = [];

  simpleDataR: any[] = [];
  simpleDataW: any[] = [];

  results: Result [] = [];

  //for box chart
box_multi: any[] = [];
box_key_y="";
box_key_x="";


  constructor(private http: HttpClient) { 
  }

  getIO500() {
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "iofh").subscribe((res)=>{
        if(res){
          resolve(res);
        }else {
          reject(false);
        }
    });
    });
  }

  getIO500_testcases(run_id:number) {
    let params = new HttpParams().set('run_id', run_id);
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "iofh_testcases", { params: params }).subscribe((res)=>{
        if(res){
          resolve(res);
        }else {
          reject(false);
        }
    });
    });
  }

  getIO500_results(run_id:number) {
    let params = new HttpParams().set('run_id', run_id);
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "iofh_testcase_results", { params: params }).subscribe((res)=>{
        if(res){
          resolve(res);
        }else {
          reject(false);
        }
    });
    });
  }

  getIO500_options(run_id:number) {
    let params = new HttpParams().set('run_id', run_id);
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "iofh_testcase_options", { params: params }).subscribe((res)=>{
        if(res){
          resolve(res);
        }else {
          reject(false);
        }
    });
    });
  }


  
  getPerformances() {
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "performances").subscribe((res)=>{
        if(res){
          this.performances = <[Performance]>res;
          //console.log(this.performances)
          resolve(<[Performance]>res);
        }else {
          reject(ErrorEvent);
        }
    });
    });
  }

  getDarshan() {
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "darshan").subscribe((res)=>{
        if(res){
          console.log(res)
          resolve(<[any]>res);
        }else {
          reject(Error);
        }
    });
    });
  }

  getCustom() {
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "custom").subscribe((res)=>{
        if(res){
          console.log(res)
          resolve(<[any]>res);
        }else {
          reject(Error);
        }
    });
    });
  }

  getCnt() {
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "cnt").subscribe((res)=>{
        if(res){
          console.log(res)
          resolve(<[any]>res);
        }else {
          reject(Error);
        }
    });
    });
  }


  getSummaries(id: number) {
    this.multi = [];
    this.multi2 =[];
    let params = new HttpParams().set('id', id);
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "summaries", { params: params }).subscribe((res)=>{
        if(res){
          this.summaries = res;
          this.summaries.forEach(s => {
            this.getResults(s).then(x=>{
               //console.log(this.multi)
            });
          });
          resolve(true);
        }else {
          reject(false);
        }
    });
    });
  }

  getFilesystem(p_id: number) {
  let params = new HttpParams().set('id', p_id);
  return new Promise((resolve, reject)=>{
    this.http.get(this.url+ "filesystems", { params: params }).subscribe((res)=>{
      if(res){
        resolve(res);
      }else {
        reject(Error);
      }
  });
  });
}

getResultsForTable(summary: any) {
   let params = new HttpParams().set('summary_id', summary.id);
   return new Promise((resolve, reject)=>{
     this.http.get(this.url+ "results", { params: params }).subscribe((res)=>{
       if(res){
        //this.results = ;
         resolve(<[Result]>res);
       }else {
         reject(Error);
       }
   });
   });
 }

/*
 series: [
  {
    name: 'Line 1',
    type: 'line',
    data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
  },
*/

  getResults(summary: any) {
   //console.log("summer id :", summary.id)
    let params = new HttpParams().set('summary_id', summary.id);
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+ "results", { params: params }).subscribe((res)=>{
        if(res){
          //console.log(res)
          const name = res[0].access;
          let series: any[] = [];
          let series2: any[] = [];
          if (summary.operation == "read"){
            this.results_r = res;
            this.results_r.forEach((r, index) => {
             //console.log(r)
              let it = index+1;
              let serie = {"name": it.toString(), "value":r['bwMiB']}
              let legend = "Iteration - "+ it.toString();
              let serie2 = {"name": legend, "value":r['iops']}
             //console.log(serie2)
              series.push(serie);
              series2.push(serie2);
            });
          }else {
            this.results_w = res;
            this.results_w.forEach((r, index) => {
             //console.log(r)
              let it = index+1;
              let serie = {"name": it.toString(), "value":r['bwMiB']}
              let legend = "Iteration - "+ it.toString();
              let serie2 = {"name": legend, "value":r['iops']}
              series.push(serie);
             //console.log(serie2)
              series2.push(serie2);
            });
          }
          this.multi.push({"name":name, "series": series});
          this.multi2.push({"name":name, "series": series2});
         //console.log(this.multi, this.multi2)
          resolve(true);
        }else {
          reject(false);
        }
    });
    });
  }

  createMulti(mul, results, dataKey){
    let mult: any[] = [];
    let series: any[] = [];
    results.forEach((r, index) => {
      let serie = {"name": index.toString(), "value":r[dataKey]}
      series.push(serie);
    });
    mult.push({"name":name, "series": series})
  }
  
  postFile(fileToUpload: File) {
}

getMultiSummaries(ids: any[], key, keyc) {
  console.log(keyc)
  let mult: any[] = [];
  let series: any[] = [];
  return new Promise((resolve, reject)=>{
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    this.http.get(this.url+ "summaries/multi", { params: params }).subscribe((res:any)=>{
      let keyColum = ""
      if(res){
       //console.log("res: ", res)
        let pid = res[0].performance_id;
        console.log(res);
        res.forEach((summary, index) => {
          //console.log(summary, "id: ", index+1);
          if (index != res.length-1){
            if(pid == summary.performance_id){
              let serie = {"name": summary['operation'], "value":summary[key]}
              series.push(serie);
            }
            else{
              if (keyc == 'performance_id'){
                mult.push({"name":pid, "series": series})
              }else{
                mult.push({"name":res[index-1][keyc], "series": series})
              }
              pid = summary.performance_id
              series = [];
              let serie = {"name": summary['operation'], "value":summary[key]}
              console.log()
              series.push(serie)
            }
          }else {
            let serie = {"name": summary['operation'], "value":summary[key]}
            series.push(serie);
            if (keyc == 'performance_id'){
              mult.push({"name":pid, "series": series})
            }else{
              mult.push({"name":summary[keyc], "series": series})
            }
          }
        });
        this.multiSum = mult;
        this.multiKey = key;
        this.multiKeyC = keyc;
        console.log(this.multiSum)
        resolve(true);
      }else {
        reject(false);
      }
  });
  });
}
//transform function for comparison component


//todo: should be modified and used for comparison component
getMultiSummaries_dataset(ids: any[], key, keyc) {
  let mult: any[] = [];
  let series: any[] = [];
  return new Promise((resolve, reject)=>{
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    this.http.get(this.url+ "summaries/multi", { params: params }).subscribe((res:any)=>{
      if(res){
        let pid = res[0].performance_id;
        //console.log(res);
        res.forEach((summary, index) => {
          if (index != res.length-1){
            if(pid == summary.performance_id){
              series.push({[summary['operation']]:summary[key]});
            }
            else{
              if (keyc == 'performance_id'){
                mult.push({"name":pid, "series": series})
              }else{
                mult.push({"name":res[index-1][keyc], "series": series})
              }
              pid = summary.performance_id
              series = [];
              let serie = {"name": summary['operation'], "value":summary[key]}
              series.push(serie)
            }
          }else {
            let serie = {"name": summary['operation'], "value":summary[key]}
            series.push(serie);
            if (keyc == 'performance_id'){
              mult.push({"name":pid, "series": series})
            }else{
              mult.push({"name":summary[keyc], "series": series})
            }
          }
        });
        this.multiSum = mult;
        this.multiKey = key;
        this.multiKeyC = keyc;
        console.log(this.multiSum)
        resolve(true);
      }else {
        reject(false);
      }
  });
  });
}


getBoxSummaries(ids, key_y, key_x, read_or_write?){
  key_x = 'performance_id';
  key_y = 'bwMiB';
  let mult: any[] = [];
  let series: any[] = [];
  return new Promise((resolve, reject)=>{
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    params = params.append('read_or_write', read_or_write)
    this.http.get(this.url+ "summaries/multi/reads", { params: params }).subscribe((data:any)=>{
      if(data){
        console.log("res: ", data);
        let pid = data[0].performance_id;
        data.forEach((res, index) => {
          console.log(res)
          if (index != data.length-1){
            if(res.performance_id == pid){
                series.push({"name": index, "value":res[key_y]})
            }else {
              console.log(data[index-1][key_x])
                mult.push({"name": key_x +"_"+ data[index-1][key_x], "series": series})
                series = [];
                series.push({"name": index, "value":res[key_y]})
                pid = res.performance_id
            }
          }else{
            console.log(data[index][key_x])
            series.push({"name": index, "value":res[key_y]})
            mult.push({"name":key_x +"_"+ data[index][key_x], "series": series})
          }

        });
        this.box_multi = mult;
        this.box_key_y= key_y;
        this.box_key_x = key_x;
        console.log("this.box_multi: ", this.box_multi)
        resolve(true);
      }else {
        reject(false);
      }
  });
  });

}


/* getBoxSummaries(ids, key_y, Key_x, read_or_write?){
  let mult: any[] = [];
  let series: any[] = [];
  return new Promise((resolve, reject)=>{
    let params = new HttpParams();
    params = params.append('ids', ids.join(', '));
    params = params.append('read_or_write', read_or_write)
    this.http.get(this.url+ "summaries/multi/reads", { params: params }).subscribe((res:any)=>{
      if(res){
        console.log("res: ", res)
        let pid = res[0].performance_id;
        let min, mean, max;
        res.forEach((summary, index) => {
          if (index != res.length-1){
            if(pid == summary.performance_id){
              if (key_y === "bw"){
                 min = {"name": summary['operation'], "value":summary["bwMinMIB"]}
                 mean = {"name": summary['operation'], "value":summary["bwMeanMIB"]}
                 max = {"name": summary['operation'], "value":summary["bwMaxMIB"]}
              }else{
                min = {"name": summary['operation'], "value":summary["OPsMin"]}
                mean = {"name": summary['operation'], "value":summary["OPsMean"]}
                max = {"name": summary['operation'], "value":summary["OPsMax"]}
              }
              series.push(min,mean, max);
            }
            else{
              if (Key_x == 'performance_id'){
                mult.push({"name":pid, "series": series})
              }else{
                mult.push({"name":res[index-1][Key_x], "series": series})
              }
              pid = summary.performance_id
              series = [];
              if (key_y === "bw"){
                min = {"name": summary['operation'], "value":summary["bwMinMIB"]}
                mean = {"name": summary['operation'], "value":summary["bwMeanMIB"]}
                max = {"name": summary['operation'], "value":summary["bwMaxMIB"]}
             }else{
               min = {"name": summary['operation'], "value":summary["OPsMin"]}
               mean = {"name": summary['operation'], "value":summary["OPsMean"]}
               max = {"name": summary['operation'], "value":summary["OPsMax"]}
             }
             series.push(min,mean, max);
            }
          }else {
            if (key_y === "bw"){
              min = {"name": summary['operation'], "value":summary["bwMinMIB"]}
              mean = {"name": summary['operation'], "value":summary["bwMeanMIB"]}
              max = {"name": summary['operation'], "value":summary["bwMaxMIB"]}
           }else{
             min = {"name": summary['operation'], "value":summary["OPsMin"]}
             mean = {"name": summary['operation'], "value":summary["OPsMean"]}
             max = {"name": summary['operation'], "value":summary["OPsMax"]}
           }
           series.push(min,mean, max);
            if (Key_x == 'performance_id'){
              mult.push({"name":pid, "series": series})
            }else{
              mult.push({"name":summary[Key_x], "series": series})
            }
          }
        });
        this.box_multi = mult;
        this.box_key_y= key_y;
        this.box_key_x = Key_x;
        console.log("this.box_multi: ", this.box_multi)
        resolve(true);
      }else {
        reject(false);
      }
  });
  });
} */

  
}


export interface Performance {
  api: string;
  blockSize: number;
  checkRead: number;
  checkWrite: number;
  cmd: string;
  collective: number;
  dataPacketType: number;
  deadlineForStonewall: number;
  dryRun: number;
  filePerProc: number;
  fsync: number;
  fsyncperwrite: number;
  id: number;
  interTestDelay: number;
  keepFile: number;
  keepFileWithError: number;
  maxTimeDuration: number;
  memoryPerNode: number;
  memoryPerTask: number;
  multiFile: number;
  nodes: number;
  options: string;
  outlierThreshold: number;
  platform: string;
  randomOffset: number;
  readFile: number;
  refnum: number;
  reorderTasks: number;
  reorderTasksRandom: number;
  reorderTasksRandomSeed: number;
  repetitions: number;
  segmentCount: number;
  singleXferAttempt: number;
  stoneWallingWearOut: number;
  tasksPerNode: number;
  te: string;
  testFileName: string;
  testID: number;
  transferSize: number;
  ts: string;
  uniqueDir: number;
  useExistingTestFile: number;
  verbose: number;
  warningAsErrors: number;
  writeFile: number;
}


export interface Result{
access: string
blockKiB: number
bwMiB: number
closeTime: number
id: number
iops: number
latency: number
openTime: number
summary_id: number
totalTime: number
wrRdTime: number
xferKiB: number
}


interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}