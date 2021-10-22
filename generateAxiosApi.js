const { codegen } = require("swagger-axios-codegen");

codegen({
  methodNameMode: "shortOperationId",
  remoteUrl:
    "https://app.swaggerhub.com/apiproxy/schema/file/apis/Aliens-apidoc/dev-aliens_api/1.0.0?format=json",
  outputDir: "./src/api",
});
