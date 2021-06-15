import axios from "axios";
import API from "../API/restBooking/API";

const STATUS = {
    success: "ok",
    failure: "fail",
};
const ERR_MESSAGE = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
};

const fetch = {
    webStyleSetting() {
        return new Promise((resolve, reject) => {
            /** fetch API */
            const APIdata = { data: {}, status: "ok" };

            if (APIdata.status === STATUS.success) {
                return resolve(APIdata);
            }
            reject(new Error(ERR_MESSAGE[400]));
        });
    },
};

export default fetch;
