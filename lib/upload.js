Slingshot.fileRestrictions("myFileUploads", {
    allowedFileTypes: ["image/jpeg", 'image/png','image/gif',"video/mp4","application/zip","application/x-compressed","video/quicktime"],
    maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited)
});