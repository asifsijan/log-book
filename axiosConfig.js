import axios from "axios";
export default axios.create({
    baseURL: "https://log-book-asif-default-rtdb.asia-southeast1.firebasedatabase.app/"
    // ,
    // headers: {
    //     Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
    // }
});