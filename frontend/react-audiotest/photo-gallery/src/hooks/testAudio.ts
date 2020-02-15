import { MediaCapture, CaptureImageOptions, MediaFile, CaptureError } from "@ionic-native/media-capture/ngx";

export function usePhotoGallery() {
    const takePhoto = async () => {
        let options: CaptureImageOptions = { limit: 3 }
        // mediaCapture.captureImage(options)
        //   .then(
        //     (data: MediaFile[]) => console.log(data),
        //     (err: CaptureError) => console.error(err)
        //   );
    };

    return {
        takePhoto
    };
}