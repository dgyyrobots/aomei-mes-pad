interface DownloadPlugin {
    excel(data: BlobPart, fileName: string): void;
    word(data: BlobPart, fileName: string): void;
    zip(data: BlobPart, fileName: string): void;
    html(data: BlobPart, fileName: string): void;
    markdown(data: BlobPart, fileName: string): void;
    download0(data: BlobPart, fileName: string, mineType: string): void;
}

export default {
    // 下载 Excel 方法
    excel(data: BlobPart, fileName: string): void {
        this.download0(data, fileName, 'application/vnd.ms-excel');
    },

    // 下载 Word 方法
    word(data: BlobPart, fileName: string): void {
        this.download0(data, fileName, 'application/msword');
    },

    // 下载 Zip 方法
    zip(data: BlobPart, fileName: string): void {
        this.download0(data, fileName, 'application/zip');
    },

    // 下载 Html 方法
    html(data: BlobPart, fileName: string): void {
        this.download0(data, fileName, 'text/html');
    },

    // 下载 Markdown 方法
    markdown(data: BlobPart, fileName: string): void {
        this.download0(data, fileName, 'text/markdown');
    },

    download0(data: BlobPart, fileName: string, mineType: string): void {
        // 创建 blob
        let blob = new Blob([data], { type: mineType });
        // 创建 href 超链接，点击进行下载
        window.URL = window.URL || window.webkitURL;
        let href = URL.createObjectURL(blob);
        let downA = document.createElement('a');
        downA.href = href;
        downA.download = fileName;
        downA.click();
        // 销毁超连接
        window.URL.revokeObjectURL(href);
    },
} as DownloadPlugin;