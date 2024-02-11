export class Tools {
  static massiveRequire(req) {
    const files = [];
    console.log(req.keys())
    req.keys().forEach((key) => {
      files.push({
        key,
        data: req(key),
      });
    });
    console.log(files);
    return files;
  }
}
