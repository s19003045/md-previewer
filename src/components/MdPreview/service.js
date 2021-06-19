import API from "../../API/restBooking/API";
import axios from "axios";

export const getMdFile = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API.getMdFile)
            .then((res) => {
                // console.log(res);
                resolve(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
