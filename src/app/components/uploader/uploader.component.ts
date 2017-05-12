import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MediaService, MediaInterface } from '../../services/media.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  providers: [MediaService]
})
export class UploaderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
              private mediaService: MediaService) {
    this.createForm();
  }

  file: File;
  fileForm: FormGroup
  public media: MediaInterface;
  @Output() 
  mediaChange: EventEmitter<MediaInterface> = new EventEmitter();

  ngOnInit() {
  }

  upload($event: any) {
    let file: File;
    if($event.target.files && $event.target.files[0]){
      file = $event.target.files[0];
      this.mediaService.upload(file).then((data) => { this.media = data.file; this.mediaChange.emit(this.media); });
    }
  }

  private createForm() {
    this.fileForm = this.formBuilder.group({
      file: ['']
    });
  }

}