import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { WebServiceService } from '../../webservice.service';

@Component({
  selector: 'app-ior-builder',
  templateUrl: './ior-builder.component.html',
  styleUrls: ['./ior-builder.component.scss']
})
export class IorBuilderComponent implements OnInit {

  commands = [['-a S', 'api', 'API for I/O [POSIX|MPIIO|HDF5|HDFS|S3|S3_EMC|NCMPI|RADOS'], ['-A N', 	'refNum', 'user reference number to include in long summary'], ['-b N', 	'blockSize', 'contiguous bytes to write per task (e.g.: 8, 4k, 2m, 1g)'], ['-c', 	'collective', 'collective I/O'], ['-d N', 	'interTestDelay', 'delay between reps in seconds'], ['-C', 	'reorderTasksConstant', 'changes task ordering to n+1 ordering for readback'], ['-D N', 	'deadlineForStonewalling', 'seconds before stopping write or read phase'], ['-e', 	'fsync', 'perform fsync upon POSIX write close'], ['-E', 	'useExistingTestFile', 'do not remove test file before write access'], ['-f S', 	'scriptFile', 'test script name'], ['-F', 	'filePerProc', 'file-per-process'], ['-g', 	'intraTestBarriers', 'use barriers between open, write/read, and close'], ['-G N', 	'setTimeStampSignature', 'set value for time stamp signature'], ['-h', 	'showHelp', 'displays options and help'], ['-H', 	'showHints', 'show hints'], ['-i N', 	'repetitions', 'number of repetitions of test'], ['-I', 	'individualDataSets', 'datasets not shared by all procs [not working]'], ['-j N', 	'outlierThreshold', 'warn on outlier N seconds from mean'], ['-J N', 	'setAlignment', 'HDF5 alignment in bytes (e.g.: 8, 4k, 2m, 1g)'], ['-k', 	'keepFile', 'don’t remove the test file(s) on program exit'], ['-K', 	'keepFileWithError', 'keep error-filled file(s) after data-checking'], ['-l', 	'data packet type','type of packet that will be created [offset|incompressible|timestamp|o|i|t]'], ['-m', 	'multiFile', 'use number of reps (-i) for multiple file count'], ['-M N', 	'memoryPerNode', 'hog memory on the node (e.g.: 2g, 75%)'], ['-n', 	'noFill', 'no fill in HDF5 file creation'], ['-N N', 	'numTasks', 'number of tasks that should participate in the test'], ['-o S', 	'testFile', 'full name for test'], ['-O S', 	'stringofIORdirectives', '(e.g. -O checkRead=1,GPUid=2)'], ['-p', 	'preallocate', 'preallocate file size'], ['-P', 	'useSharedFilePointer', 'use shared file pointer [not working]'], ['-q', 	'quitOnError', 'during file error-checking, abort on error'], ['-Q N', 	'taskPerNodeOffset', 'for read tests use with -C & -Z options (-C constant N, -Z at least N) [!HDF5]'], ['-r', 	'readFile', 'read existing file'], ['-R', 	'checkRead', 'check read after read'], ['-s N', 	'segmentCount', 'number of segments'], ['-S', 	'useStridedDatatype', 'put strided access into datatype [not working]'], ['-t N', 	'transferSize', 'size of transfer in bytes (e.g.: 8, 4k, 2m, 1g)'], ['-T N', 	'maxTimeDuration', 'max time in minutes to run tests'], ['-u', 	'uniqueDir', 'use unique directory name for each file-per-process'], ['-U S', 	'hintsFileName', 'full name for hints file'], ['-v', 	'verbose', 'output information (repeating flag increases level)'], ['-V', 	'useFileView', 'use MPI_File_set_view'], ['-w', 	'writeFile', 'write file'], ['-W', 	'checkWrite', 'check read after write'], ['-x', 	'singleXferAttempt', 'do not retry transfer if incomplete'], ['-X N', 	'reorderTasksRandomSeed', 'random seed for -Z option'], ['-Y', 	'fsyncPerWrite', 'perform fsync after each POSIX write'], ['-z', 	'randomOffset', 'access is to random, not sequential, offsets within a file'], ['-Z', 'reorderTasksRandom', 'changes task ordering to random ordering for readback']]
  selects = [];
  inputs = [];
  test = "";

  sSelects = [];
  sInputs= {api:"", refNum:"", blockSize:"", interTestDelay:"", deadlineForStonewalling:"", scriptFile:"", setTimeStampSignature:"",
  repetitions:"", outlierThreshold:"", setAlignment:"", memoryPerNode:"", numTasks:"", testFile:"", stringofIORdirectives:"",
  taskPerNodeOffset:"", segmentCount:"", transferSize:"", maxTimeDuration:"", hintsFileName:"", reorderTasksRandomSeed:""}

  final = "ior "
  performances:any=[];
  selectedValue:any;
  ior: any =[];


  constructor(private theme: NbThemeService, public ws: WebServiceService) {

  }

  ngOnInit(): void {
    this.preSelect(this.commands);

    this.ws.getCustom().then((x:[])=>{
      this.ior = x.map(val =>({
        id: val['id'],
        name: val['name_app'],
        type: val['type'],
        summary: JSON.parse(val['summary']),
        fs: JSON.parse(val['fs']),
        sysinfo: JSON.parse(val['sysinfo']),
      }));
      let temp = []
      this.ior.forEach(i => {
        if(i.name == "IOR"){
          temp.push(i)
        }
      });

      this.ior = temp
      
      this.ior.forEach(e => {
        this.performances.push(Object.assign({}, {"ts": e.summary[0].Began}, {'cmd': e.summary[0]['Command line']}, {'te': e.summary[0].Finished}, e.summary[0].tests[0].Parameters, {'summary': e.summary[0].summary}, {'tests': e.summary[0].tests}, {'fs': e.fs}))

      });

      this.sSelects = []
    })
  }

  preSelect(arr){
      arr.forEach(cmd => {
        if(cmd[0].length > 3){
          this.inputs.push(cmd)
        }else {
          this.selects.push(cmd)
        }
      });
  }

  isInput(strArr){
    if(strArr[0].length > 3){
      return true;
    }
    return false;
  }

  generate(){
    this.final = "ior "
    this.sSelects.forEach(sS => {
      this.final = this.final + sS 
    });
    Object.entries(this.sInputs).forEach(entry => {
      const [key, value] = entry;
      if (value){
        this.commands.forEach(cmd => {
          if (cmd[1]=== key){
            this.final = this. final + " -" + cmd[0][1] + " " + value
          }
        });
      }

    });
}

clear(){
  this.final = "ior ";
  this.sSelects = [];
  Object.keys(this.sInputs).forEach(key => {
    if (this.sInputs[key])
    this.sInputs[key] = "";
  });
}

parseCmd(){
  let cCmd = this.selectedValue.cmd.split(' ');
for (let i = 0; i < this.commands.length; i ++){
  for (let j = 0; j < cCmd.length; j ++){
    if( this.commands[i][0].split(" ")[0] === cCmd[j]){
      if ((j!==cCmd.length -1) && (cCmd[j+1].includes('-'))){
        this.sSelects.push(cCmd[j])
      }else {
        this.sInputs[this.commands[i][1]] = cCmd[j +1]
      }
      
    }
  }
}
}


}
