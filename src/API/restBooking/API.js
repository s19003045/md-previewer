import { isProduction, isDevelopment } from "../../common";
import config from "../../config/web";
import devConfig from "../../config/web.dev";

const domain = isDevelopment() ? devConfig.domain : config.domain;

const API = {
    domain: domain,
    // testing API
    test: `${domain}/test`,
    //
    getMdFile: `${domain}/randomMD`,
};

export default API;
