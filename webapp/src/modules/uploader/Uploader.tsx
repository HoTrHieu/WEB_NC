import { notification } from "antd";
import React from "react";
import { FilePond } from "react-filepond";
import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { FileType } from "../../shared/enums/FileType";
import { StdResponseCode } from "../../shared/enums/StdResponseCode";
import { AuthService } from "../auth/AuthService";

interface IUploaderProps {
  fileType: FileType;
  state?: string;
  onUploadSuccess?: (filePath: string) => any;
  pondRef?: any;
  [key: string]: any;
}

const configs = {
  [FileType.IMAGE]: {
    maxSize: "5MB", // 5MB
    validMimeTypes: [
      "image/gif",
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/webp",
    ],
  },
  [FileType.VIDEO]: {
    maxSize: "500MB", // 500MB
    validMimeTypes: ["video/x-flv", "video/mp4", "video/3gpp"],
  },
};

export function Uploader(props: IUploaderProps) {
  const config = configs[props.fileType];
  return (
    <FilePond
      name="file"
      maxFiles={1}
      server={{
        url: ApiEndpoint.uploader.upload,
        load: (source, load) => {
          const myRequest = new Request(source);
          fetch(myRequest).then(function(response) {
            response.blob().then(function(myBlob) {
              load(myBlob)
            });
          });         
      },
        process: {
          headers: {
            'x-file-type': props.fileType,
            'x-upload-state': props.state,
            'Authorization': `Bearer ${AuthService.accessToken}`
          },
          onload: (raw: any) => {
            const response = JSON.parse(raw);
            if (response.code === StdResponseCode.SUCCESS) {
              props.onUploadSuccess && props.onUploadSuccess(response.result);
            } else {
              notification.error({
                message: 'Error',
                description: 'Upload failed, please try again'
              })
            }
          }
        } as any
      }}
      ref={(ref) => {
        if (props.pondRef) {
          props.pondRef.current = ref;
        }
      }}
      dropValidation={true}
      instantUpload={false}
      acceptedFileTypes={config.validMimeTypes}
      maxFileSize={config.maxSize}
      {...props}
    />
  );
}
