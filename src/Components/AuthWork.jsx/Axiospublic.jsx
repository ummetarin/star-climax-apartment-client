import axios from "axios";

const axiospublic=axios.create({
    baseURL:"http://localhost:3000/"
})

const Axiospublic = () => {
    return axiospublic;
};

export default Axiospublic;