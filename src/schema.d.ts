type Authors = {
  id: !ID;
  _id: !ID;
  createdAt: !DateTime;
  updatedAt: !DateTime;
  displayName: !String;
  avatar: UploadFile;
  blogs(sort: String, limit: Int, start: Int, where: JSON): [Blog];
};

type UploadFile = {
  id: !ID;
  _id: !ID;
  createdAt: !DateTime;
  updatedAt: !DateTime;
  name: !String;
  alternativeText: String;
  caption: String;
  width: Int;
  height: Int;
  formats: any;
  hash: !String;
  ext: String;
  mime: !String;
  size: !Float;
  url: !String;
  previewUrl: String;
  provider: !String;
  provider_metadata: JSON;
  related(sort: String, limit: Int, start: Int, where: JSON): [Morph];
};
