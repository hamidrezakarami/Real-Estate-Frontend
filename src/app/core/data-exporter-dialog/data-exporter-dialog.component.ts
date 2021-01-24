import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ParamsHandler } from '../params-handler';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Page } from '../Page';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ApiRequest } from 'src/app/services/request.service';
// import { ExporterService } from '../../../../services/exporter.service';
@Component({
  selector: 'free-bus-dialog',
  templateUrl: './data-exporter-dialog.component.html',
  styleUrls: ['./data-exporter-dialog.component.scss'],
})
export class DataExporterDialogComponent extends Page implements OnInit {
  serviceProcess = false;
  objectName: string = 'Student';
  objectTitle: string;
  formatType: string = 'JSON';
  fields: any[] = [];
  selectedFields: any[] = [];
  filter: any = {};
  checkBoxSelectAll: boolean = true;
  isDownloadLink: boolean = false;
  downloadUrl: string = undefined;

  @ViewChild('stepper') stepper;

  constructor(
    private dialogRef: MatDialogRef<DataExporterDialogComponent>,
    private snackBar: MatSnackBar,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private exporterService: ExporterService
    private gs: GlobalService
  ) {
    super('#/search/data-exporter/', (error, action, className) => {
      this.snackBar.open(error, action, {
        panelClass: [className],
        duration: 10000,
      });
    });

    this.objectTitle = data.title;
    this.objectName = data.objectName;
    this.filter = data.filter;
  }

  ngOnInit(): void {
    this.fetchObjectFields();
  }

  fetchObjectFields() {
    this.serviceProcess = true;
    let paramsHandler = new ParamsHandler();
    paramsHandler.addParam('ObjectName', this.objectName);
    ApiRequest('GET', true)
      .schemaName(null)
      .controller('exporter')
      .action('getobjectfields')
      .setParam(paramsHandler)
      .call(this.gs)
      .subscribe((resp) => {
        this.serviceProcess = false;
        let data = this.parseResponse(resp);
        if (data) {
          data.Fields.forEach((element, index) => {
            this.fields.push({
              Field: element,
              Order: index,
              Alias: element,
              Checked: true,
            });
          });
          this.selectedFields = this.fields.filter(
            (item) => item.Checked == true
          );
        }
      });
  }

  field_OnCheckChanged(item: any, e: any) {
    item.Checked = e.checked;
  }

  checkSelectAll() {
    this.checkBoxSelectAll = !this.checkBoxSelectAll;
    this.fields.forEach((item) => {
      item.Checked = this.checkBoxSelectAll;
    });
  }

  getArray(row: any) {
    let result: string[] = [];
    for (let header of this.selectedFields) {
      let value: any = row[header.Alias];
      result.push(value);
    }
    return result;
  }

  nextTitle: string = 'Next';
  stepper_SelectionChange(e: any) {
    this.downloadUrl = undefined;
    if (e.selectedIndex == 2) {
      this.nextTitle = 'Generate';
      this.download('Preview');
    } else {
      this.selectedFields = this.fields.filter((item) => item.Checked == true);
      this.nextTitle = 'Next';
    }
  }

  back_OnClick() {
    this.downloadUrl = undefined;
    this.stepper.selectedIndex = this.stepper.selectedIndex - 1;
    this.nextTitle = 'Next';
  }

  dataExport: any[] = [];
  dataPreview: any[] = [];

  next_OnClick(url: string) {
    if (url) {
      window.open(url, '_blank');
    } else {
      if (this.stepper.selectedIndex == 2) {
        this.download();
      } else {
        this.stepper.selectedIndex = this.stepper.selectedIndex + 1;
      }
    }
  }

  download(type: string = this.formatType) {
    if (this.selectedFields.length == 0) {
      this.notifyMessage('Please select the fields to export!');
    }
    this.serviceProcess = true;
    let paramsHandler = new ParamsHandler();
    paramsHandler.addParam('ObjectName', this.objectName);
    paramsHandler.addParam('Filter', this.filter);
    paramsHandler.addParam('Type', type);
    paramsHandler.addParam('Headers', this.selectedFields);
    ApiRequest('POST', true)
      .schemaName(null)
      .controller('exporter')
      .action('export')
      .setParam(paramsHandler)
      .call(this.gs)
      .subscribe((resp) => {
        this.serviceProcess = false;
        let data = this.parseResponse(resp);
        if (data) {
          if (type == 'Preview') {
            this.dataPreview = data.ExportList;
            this.stepper.selectedIndex = 2;
          } else {
            this.nextTitle = 'Download';
            this.downloadUrl = data.Url;
            //this.downloadFile(data.Url);
            //window.open(data.Url, '_blank');
            // this.dataExport = data.ExportList;
            // this.downloadDataFile(this.dataExport, this.formatType == 'JSON');
          }
        }
      });
  }

  downloadFile(url: string) {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.setAttribute('visibility', 'hidden');
    link.click();
  }

  downloadDataFile(data: any, isJson: boolean = true) {
    var dataDownload =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(isJson ? JSON.stringify(data) : data);
    var downloader = document.createElement('a');
    var exportDateTime = new Date()
      .toLocaleDateString()
      .replace('/', '-')
      .replace('/', '-');
    downloader.setAttribute('href', dataDownload);
    downloader.setAttribute(
      'download',
      this.objectName + exportDateTime + '.' + this.formatType.toLowerCase()
    );
    downloader.click();
  }

  notifyMessage(message: string, action: string = null) {
    this.snackBar.open(message);
    this.snackBar.open(message, action, {
      panelClass: ['snack-bar-color'],
      duration: 2000,
    });
  }

  dismiss() {
    this.dialogRef.close({ data: null });
  }
}
