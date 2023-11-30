import axios from "axios";
const axiosse=axios.create({
    baseURL:"http://localhost:3000"
})
const Axiosseequre = () => {
    return axiosse;
};

export default Axiosseequre;