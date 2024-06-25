import NativeRNCDocViewer from "./NativeRNCDocViewer";
import type { Spec, FileInfo, Callback } from "./NativeRNCDocViewer";

class DocViewers implements Spec{
    openDoc(fileParams: FileInfo[], callback: Callback): void{
        NativeRNCDocViewer.openDoc(fileParams, callback)
    }
    openDocBinaryinUrl(fileParams: FileInfo[], callback: Callback): void{
        NativeRNCDocViewer.openDocBinaryinUrl(fileParams, callback)
    }
    openDocb64(fileParams: FileInfo[], callback: Callback): void{
        NativeRNCDocViewer.openDocb64(fileParams, callback)
    }
}

export default new DocViewers()